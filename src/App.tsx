import * as styles from './App.module';
import { useEffect, useState, useRef, FunctionComponent } from 'react';
import { useBodyClass, getPropertyByPath, recursiveMap, recursiveWalk } from 'Util'
import { WatchPaths, ExcludePaths } from 'WatchPaths'

import cloneDeep from 'lodash/cloneDeep';
import _ from 'lodash';

import * as signalR from '@microsoft/signalr';

import LeftHandSide from '@pages/LeftHandSide';
import MiddlePanel from '@pages/MiddlePanel';
import RightHandSide from '@pages/RightHandSide';

import { StateContext } from './StateContext';

import './main.css';

import { default as TypeLookupCrystal } from './Model/Crystal/TypeLookup.tsx';
import { default as TypeLookupGoldSilver } from './Model/GoldSilver/TypeLookup.tsx';
import { default as TypeLookupYellow } from './Model/Yellow/TypeLookup.tsx';
import { default as TypeLookupRedBlue } from './Model/RedBlue/TypeLookup.tsx';

import { default as PokemonStatsLookupCrystal } from './Model/Crystal/PokemonStatsLookup.tsx';
import { default as PokemonStatsLookupGoldSilver } from './Model/GoldSilver/PokemonStatsLookup.tsx';
import { default as PokemonStatsLookupYellow } from './Model/Yellow/PokemonStatsLookup.tsx';
import { default as PokemonStatsLookupRedBlue } from './Model/RedBlue/PokemonStatsLookup.tsx';

import { default as SpeciesImageLookupCrystal } from './Model/Crystal/SpeciesImageLookup.tsx';
import { default as SpeciesImageLookupGoldSilver } from './Model/GoldSilver/SpeciesImageLookup.tsx';
import { default as SpeciesImageLookupYellow } from './Model/Yellow/SpeciesImageLookup.tsx';
import { default as SpeciesImageLookupRedBlue } from './Model/RedBlue/SpeciesImageLookup.tsx';

import { default as PokemonMechanicsCrystal } from './Model/Crystal/PokemonMechanics.tsx';
import { default as PokemonMechanicsGoldSilver } from './Model/GoldSilver/PokemonMechanics.tsx';
import { default as PokemonMechanicsYellow } from './Model/Yellow/PokemonMechanics.tsx';
import { default as PokemonMechanicsRedBlue } from './Model/RedBlue/PokemonMechanics.tsx';

import { default as TrainersLookupCrystal } from './Model/Crystal/TrainersLookup.tsx';
import { default as TrainersLookupGoldSilver } from './Model/GoldSilver/TrainersLookup.tsx';
import { default as TrainersLookupYellow } from './Model/Yellow/TrainersLookup.tsx';
import { default as TrainersLookupRedBlue } from './Model/RedBlue/TrainersLookup.tsx';

import { default as SpeciesNameLookupCrystal } from './Model/Crystal/SpeciesNameLookup.tsx';
import { default as SpeciesNameLookupGoldSilver } from './Model/GoldSilver/SpeciesNameLookup.tsx';
import { default as SpeciesNameLookupYellow } from './Model/Yellow/SpeciesNameLookup.tsx';
import { default as SpeciesNameLookupRedBlue } from './Model/RedBlue/SpeciesNameLookup.tsx';

import { default as MoveLookupCrystal } from './Model/Crystal/MoveLookup.tsx';
import { default as MoveLookupGoldSilver } from './Model/GoldSilver/MoveLookup.tsx';
import { default as MoveLookupYellow } from './Model/Yellow/MoveLookup.tsx';
import { default as MoveLookupRedBlue } from './Model/RedBlue/MoveLookup.tsx';

import { default as PokemonMovesLookupCrystal } from './Model/Crystal/PokemonMovesLookup.tsx';
import { default as PokemonMovesLookupGoldSilver } from './Model/GoldSilver/PokemonMovesLookup.tsx';
import { default as PokemonMovesLookupYellow } from './Model/Yellow/PokemonMovesLookup.tsx';
import { default as PokemonMovesLookupRedBlue } from './Model/RedBlue/PokemonMovesLookup.tsx';

import { default as TmsLookupCrystal } from './Model/Crystal/TmsLookup.tsx';
import { default as TmsLookupGoldSilver } from './Model/GoldSilver/TmsLookup.tsx';
import { default as TmsLookupYellow } from './Model/Yellow/TmsLookup.tsx';
import { default as TmsLookupRedBlue } from './Model/RedBlue/TmsLookup.tsx';

import { default as HmsLookupCrystal } from './Model/Crystal/HmsLookup.tsx';
import { default as HmsLookupGoldSilver } from './Model/GoldSilver/HmsLookup.tsx';
import { default as HmsLookupYellow } from './Model/Yellow/HmsLookup.tsx';
import { default as HmsLookupRedBlue } from './Model/RedBlue/HmsLookup.tsx';

import { default as MtsLookupCrystal } from './Model/Crystal/MtsLookup.tsx';
import { default as MtsLookupGoldSilver } from './Model/GoldSilver/MtsLookup.tsx';
import { default as MtsLookupYellow } from './Model/Yellow/MtsLookup.tsx';
import { default as MtsLookupRedBlue } from './Model/RedBlue/MtsLookup.tsx';


window.signalR = signalR;

const App: FunctionComponent = () => {
  const mapper = useRef(null);
  const propertiesRef = useRef(null);
  
  const [state, setState] = useState({
    gamehookLoaded: false,
    isConnected: false,
    pokemonModelSet: false,
	changeCallbacksSet: false,
    properties: null,
    new_colors: true,
	modelClasses: {TypeLookup: null, PokemonStatsLookup: null, SpeciesImageLookup: null, PokemonMechanics: null, TrainersLookup: null, SpeciesNameLookup: null, MoveLookup: null, PokemonMovesLookup: null, TmsLookup: null, HmsLookup: null, MtsLookup: null}
  });

  const [changes, setChanges] = useState(new Array<{ path : string[], key : any, val : any }>());
  const [playTimeState, setPlayTimeState] = useState({
	playTime: 0,
	lastPlayTime: null,
  });

  useEffect(
    () => { propertiesRef.current = state.properties },
    [state.properties]
  )

  useBodyClass(`${styles.body}`);
  
  function loadExternalJSScript( name, url, loadCallback, setStateFunction ) {
    useEffect(() => {
      console.log("loadExternalJSScript!");
      setStateFunction(false);
      
      var resScript = null;
      function loadExternalJSScriptInternal( name, url, loadCallback, setStateFunction ) {
        const script = document.createElement('script');

        script.src = url;
        script.async = true;
        script.onload = function() { resScript = script; setStateFunction(true); console.log(name + " loaded."); loadCallback(); };
        script.onerror = function(message, filename, lineno, colno, error) { setStateFunction(false); console.log(message, filename, lineno, colno, error); console.log(name + " errored."); document.body.removeChild(script); setTimeout(() => { loadExternalJSScriptInternal(name, url, loadCallback, setStateFunction); }, 5000); };
        document.body.appendChild(script);
      }
      loadExternalJSScriptInternal(name, url, loadCallback, setStateFunction);

      return () => {
        if(resScript != null)
        {
          document.body.removeChild(resScript);
          resScript = null;
        }
      }
    }, []);
  }
  
  loadExternalJSScript("gamehook", "http://localhost:8085/dist/gameHookMapperClient.js", () => { var newMapper = new GameHookMapperClient(); mapper.current = newMapper; console.log("newMapper:", mapper.current); setState({...state, gamehookLoaded: true }); }, (x) => { });
  
  useEffect(() => {
    console.log("self:", self);
    console.log("hh:", state, state.gamehookLoaded, mapper.current);
    if(state.gamehookLoaded && !state.isConnected) {
      var isConnected = false;
      var pokemonModelSet = false;
      var connect = async () => {
          console.log("connecting to gamehook.");
          await mapper.current.connect();
        
          console.log("connected!");
          isConnected = true;
        
          console.log("set models.");

		  var newModelClasses = {...state.modelClasses};
		  console.log("mapper?.current?.properties?.meta?.generation:", mapper?.current?.properties?.meta?.generation?.value);
		  console.log("mapper?.current?.properties?.meta?.game_type:", mapper?.current?.properties?.meta?.game_type?.value);
		  switch(mapper?.current?.properties?.meta?.generation?.value)
		  {
			case "1":
				switch(mapper?.current?.properties?.meta?.game_type?.value)
				{
					case "Originals":
						newModelClasses.TypeLookup = TypeLookupRedBlue;
						newModelClasses.PokemonStatsLookup = PokemonStatsLookupRedBlue;
						newModelClasses.SpeciesImageLookup = SpeciesImageLookupRedBlue;
						newModelClasses.PokemonMechanics = PokemonMechanicsRedBlue;
						newModelClasses.TrainersLookup = TrainersLookupRedBlue;
						newModelClasses.SpeciesNameLookup = SpeciesNameLookupRedBlue;
						newModelClasses.MoveLookup = MoveLookupRedBlue;
						newModelClasses.PokemonMovesLookup = PokemonMovesLookupRedBlue;
						newModelClasses.TmsLookup = TmsLookupRedBlue;
						newModelClasses.HmsLookup = HmsLookupRedBlue;
						newModelClasses.MtsLookup = MtsLookupRedBlue;
						break;
					case "Third Version":
						newModelClasses.TypeLookup = TypeLookupYellow;
						newModelClasses.PokemonStatsLookup = PokemonStatsLookupYellow;
						newModelClasses.SpeciesImageLookup = SpeciesImageLookupYellow;
						newModelClasses.PokemonMechanics = PokemonMechanicsYellow;
						newModelClasses.TrainersLookup = TrainersLookupYellow;
						newModelClasses.SpeciesNameLookup = SpeciesNameLookupYellow;
						newModelClasses.MoveLookup = MoveLookupYellow;
						newModelClasses.PokemonMovesLookup = PokemonMovesLookupYellow;
						newModelClasses.TmsLookup = TmsLookupYellow;
						newModelClasses.HmsLookup = HmsLookupYellow;
						newModelClasses.MtsLookup = MtsLookupYellow;
						break;
					default:
					case null:
						newModelClasses.TypeLookup = null;
						newModelClasses.PokemonStatsLookup = null;
						newModelClasses.SpeciesImageLookup = null;
						newModelClasses.PokemonMechanics = null;
						newModelClasses.TrainersLookup = null;
						newModelClasses.SpeciesNameLookup = null;
						newModelClasses.MoveLookup = null;
						newModelClasses.PokemonMovesLookup = null;
						newModelClasses.TmsLookup = null;
						newModelClasses.HmsLookup = null;
						newModelClasses.MtsLookup = null;
						break;
				}
				break;
			case "2":
				switch(mapper?.current?.properties?.meta?.game_type?.value)
				{
					case "Originals":
						newModelClasses.TypeLookup = TypeLookupGoldSilver;
						newModelClasses.PokemonStatsLookup = PokemonStatsLookupGoldSilver;
						newModelClasses.SpeciesImageLookup = SpeciesImageLookupGoldSilver;
						newModelClasses.PokemonMechanics = PokemonMechanicsGoldSilver;
						newModelClasses.TrainersLookup = TrainersLookupGoldSilver;
						newModelClasses.SpeciesNameLookup = SpeciesNameLookupGoldSilver;
						newModelClasses.MoveLookup = MoveLookupGoldSilver;
						newModelClasses.PokemonMovesLookup = PokemonMovesLookupGoldSilver;
						newModelClasses.TmsLookup = TmsLookupGoldSilver;
						newModelClasses.HmsLookup = HmsLookupGoldSilver;
						newModelClasses.MtsLookup = MtsLookupGoldSilver;
						break;
					case "Third Version":
						newModelClasses.TypeLookup = TypeLookupCrystal;
						newModelClasses.PokemonStatsLookup = PokemonStatsLookupCrystal;
						newModelClasses.SpeciesImageLookup = SpeciesImageLookupCrystal;
						newModelClasses.PokemonMechanics = PokemonMechanicsCrystal;
						newModelClasses.TrainersLookup = TrainersLookupCrystal;
						newModelClasses.SpeciesNameLookup = SpeciesNameLookupCrystal;
						newModelClasses.MoveLookup = MoveLookupCrystal;
						newModelClasses.PokemonMovesLookup = PokemonMovesLookupMoveLookupCrystal;
						newModelClasses.TmsLookup = TmsLookupCrystal;
						newModelClasses.HmsLookup = HmsLookupCrystal;
						newModelClasses.MtsLookup = MtsLookupCrystal;
						break;
					default:
					case null:
						newModelClasses.TypeLookup = null;
						newModelClasses.PokemonStatsLookup = null;
						newModelClasses.SpeciesImageLookup = null;
						newModelClasses.PokemonMechanics = null;
						newModelClasses.TrainersLookup = null;
						newModelClasses.SpeciesNameLookup = null;
						newModelClasses.MoveLookup = null;
						newModelClasses.PokemonMovesLookup = null;
						newModelClasses.TmsLookup = null;
						newModelClasses.HmsLookup = null;
						newModelClasses.MtsLookup = null;
						break;
				}
				break;
			default:
			case null:
				newModelClasses.TypeLookup = null;
				break;
		  }
		  console.log("newModelClasses:", newModelClasses);
		  
          pokemonModelSet = true;
          console.log("setState:", {...state, isConnected: isConnected, pokemonModelSet: pokemonModelSet, properties: null, modelClasses: newModelClasses});
          setState({...state, isConnected: isConnected, pokemonModelSet: pokemonModelSet, properties: null, modelClasses: newModelClasses});
      }
      
      connect();
    }
    
    return () => {
    }
  }, [state.gamehookLoaded]);
  
  useEffect(() => {
    console.log("self:", self);
    console.log("hh:", state, state.gamehookLoaded, mapper.current);
    if(state.gamehookLoaded && state.isConnected && state.pokemonModelSet && !state.changeCallbacksSet) {
      var properties = {};
	  propertiesRef.current = properties;
      recursiveWalk(mapper.current.properties, (key: any, val: any, path: string[], parent: any) :any => {
	    var kv = "";
		if(path && path.length > 0)
		{
			kv += path.join(".");
		}
		if(key != "")
		{
			if(kv != "")
			{
				kv += ".";
			}
			kv += key;
		}
        if(parent?.[key]?.change) {
          var doWatch = false;
          for(var watch of WatchPaths) {
            var idx = -1;
            var curDoWatch = true;
            for(var pathFragment of watch) {
              idx++;
              if(pathFragment != path[idx]) {
                curDoWatch = false;
                break;
              }
            }
            if(curDoWatch) {
              doWatch = true;
              break;
            }
          }
          if(doWatch) {
            for(var exclude of ExcludePaths) {
              var idx = -1;
              var curDontWatch = true;
              for(var pathFragment of exclude) {
                idx++;
                if(pathFragment != path[idx]) {
                  curDontWatch = false;
                  break;
                }
              }
              if(curDontWatch) {
                doWatch = false;
                break;
              }
            }
          }
          if(doWatch) {
            //console.log("change:", path, "key:", key);
			properties[kv] = getPropertyByPath(mapper.current.properties, path)[key];
            parent[key].change((function(key : string) : Promise<void> {
              return async function (x) {
                var change = { key: key, val: x };
                
				//console.log("change?:", modelParent[key], x);
                if(propertiesRef.current[key]?.value != x?.value)
				{
                    //console.log("change':", x);
                    setChanges(changes => { var changes = [...changes]; changes.push(change); return changes; });
				}
              }
            })(kv));
          }
        }
      });
	  
      console.log("setState:", {...state, changeCallbacksSet: true, properties: properties});
      setState({...state, changeCallbacksSet: true, properties: properties});
    }
    
    return () => {
    }
  }, [state.gamehookLoaded, state.pokemonModelSet]);
  
  useEffect(() => {
    if(state.pokemonModelSet && state.changeCallbacksSet && changes.length > 0) {
      var properties = {...state.properties};
      
      setChanges(changes => {
        for(var change of changes) {
          var key = change.key;
          var val = change.val;
          
          //console.log("change detected:", "key:", key, "path:", path);
		  
          properties[key] = val;
        }
        return [];
      });

      setState(state => {
		console.log("setState:", {...state, properties: properties});
        return {...state, properties: properties};
      });
    }
  }, [changes]);
  
  useEffect(() => {
    const interval = setInterval(() => setPlayTimeState(playTimeState => {
      var playTime;
      var lastPlayTime;
	  
      if(!playTimeState.playTime) {
        playTime = 0;
      } else {
        playTime = playTimeState.playTime;
      }
      if(!playTimeState.lastPlayTime) {
        lastPlayTime = Date.now();
      } else {
        lastPlayTime = playTimeState.lastPlayTime;
      }
      var newPlayTime = Date.now();

      if(state.gamehookLoaded && state.isConnected && state.pokemonModelSet && state.changeCallbacksSet)
      {
        return {...playTimeState, playTime: playTime + (newPlayTime - lastPlayTime), lastPlayTime: newPlayTime};
      }
      else
      {
        return {...playTimeState, lastPlayTime: newPlayTime};
      }
    }), 5000);

    return () => clearInterval(interval);
  }, [state.gamehookLoaded, state.isConnected, state.pokemonModelSet, state.changeCallbacksSet]);
  
  var in_battle = false;
  
  var mode = state.properties?.["battle.mode"]?.value;
  var battle_start = state.properties?.["battle.other.battle_start"]?.value;
  var battle_ended = state.properties?.["battle.other.battle_ended"]?.value;
  var first_mons_not_out_yet = state.properties?.["battle.other.first_mons_not_out_yet"]?.value;
  var action_result_or_took_battle_turn = state.properties?.["battle.other.action_result_or_took_battle_turn"]?.value;
  var battle_result = state.properties?.["battle.other.battle_result"]?.value;
  var outcome_flags =  state.properties?.["battle.other.outcome_flags"]?.value;
  var cur_opponent = state.properties?.["battle.opponent.cur_opponent"]?.value;
	//console.log("mode:", mode, 
	//			"battle_start:", battle_start, 
	//			"battle_ended:", battle_ended, 
	//			"first_mons_not_out_yet:", first_mons_not_out_yet,
	//			"action_result_or_took_battle_turn:", action_result_or_took_battle_turn,
	//			"battle_result:", battle_result,
	//			"outcome_flags:", outcome_flags,
	//			"cur_opponent:", cur_opponent);

  in_battle = (mode != 0 && mode != "None")
					&& (battle_start != 0)
					&& (battle_ended == null || battle_ended == 0)
					&& (first_mons_not_out_yet == null || first_mons_not_out_yet == 0)
					&& (action_result_or_took_battle_turn == null || action_result_or_took_battle_turn == 0)
					&& (battle_result == null || battle_result == 0)
					&& (outcome_flags == null || outcome_flags == 0)
					&& (cur_opponent == null || cur_opponent != 0);
  //console.log("in_battle:", in_battle);
	  
  return (
    //<div>
    //  <div className={styles.title}>CSS module works!</div>
    //  <div className={styles.subtitle}>CSS module + Tailwind works!</div>
    //  <div
    //    className={
    //      'border-[10px] border-solid border-red-800 rounded-full w-[200px] h-[200px] flex items-center justify-center text-center'
    //    }
    //  >
    //    Tailwind works!
    //  </div>
    //  <SamplePage />
    //</div>
      <StateContext.Provider value={{ stateContext: { state, setState }, playTimeStateContext: { playTimeState, setPlayTimeState }, in_battleContext: { in_battle } }}>
        <table width="100%" height="100%">
          <tbody>
          <tr width="100%" height="100%">
            <td width="20%" height="100%">
              <LeftHandSide />
            </td>
            <td width="60%" height="100%">
              <MiddlePanel />
            </td>
            <td width="20%" height="100%">
              <RightHandSide />
            </td>
          </tr>
          </tbody>
        </table>
      </StateContext.Provider>
  );
};

export default App;
