import * as styles from './App.module';
import { useEffect, useState, useRef, FunctionComponent } from 'react';
import { useBodyClass, getPropertyByPath, recursiveWalk } from 'Util'
import { WatchPaths, ExcludePaths } from 'WatchPaths'

import cloneDeep from 'lodash/cloneDeep';
import * as _ from 'lodash';

import * as signalR from '@microsoft/signalr';

import LeftHandSide from '@pages/LeftHandSide';
import MiddlePanel from '@pages/MiddlePanel';
import RightHandSide from '@pages/RightHandSide';

import { StateContext } from './StateContext';

import './main.css';

import ITypeLookup from './Model/Interfaces/ITypeLookup'
import IPokemonStatsLookup from './Model/Interfaces/IPokemonStatsLookup'
import ISpeciesImageLookup from './Model/Interfaces/ISpeciesImageLookup'
import IPokemonMechanics from './Model/Interfaces/IPokemonMechanics'
import ITrainersLookup from './Model/Interfaces/ITrainersLookup'
import ISpeciesNameLookup from './Model/Interfaces/ISpeciesNameLookup'
import IMoveLookup from './Model/Interfaces/IMoveLookup'
import IPokemonMovesLookup from './Model/Interfaces/IPokemonMovesLookup'
import ITmsLookup from './Model/Interfaces/ITmsLookup'
import IHmsLookup from './Model/Interfaces/IHmsLookup'
import IMtsLookup from './Model/Interfaces/IMtsLookup'
import ITitleFirstRows from './Model/Interfaces/ITitleFirstRows'

import { default as TypeLookupCrystal } from './Model/Crystal/TypeLookup';
import { default as TypeLookupGoldSilver } from './Model/GoldSilver/TypeLookup';
import { default as TypeLookupYellow } from './Model/Yellow/TypeLookup';
import { default as TypeLookupRedBlue } from './Model/RedBlue/TypeLookup';

import { default as PokemonStatsLookupCrystal } from './Model/Crystal/PokemonStatsLookup';
import { default as PokemonStatsLookupGoldSilver } from './Model/GoldSilver/PokemonStatsLookup';
import { default as PokemonStatsLookupYellow } from './Model/Yellow/PokemonStatsLookup';
import { default as PokemonStatsLookupRedBlue } from './Model/RedBlue/PokemonStatsLookup';

import { default as SpeciesImageLookupCrystal } from './Model/Crystal/SpeciesImageLookup';
import { default as SpeciesImageLookupGoldSilver } from './Model/GoldSilver/SpeciesImageLookup';
import { default as SpeciesImageLookupYellow } from './Model/Yellow/SpeciesImageLookup';
import { default as SpeciesImageLookupRedBlue } from './Model/RedBlue/SpeciesImageLookup';

import { default as PokemonMechanicsCrystal } from './Model/Crystal/PokemonMechanics';
import { default as PokemonMechanicsGoldSilver } from './Model/GoldSilver/PokemonMechanics';
import { default as PokemonMechanicsYellow } from './Model/Yellow/PokemonMechanics';
import { default as PokemonMechanicsRedBlue } from './Model/RedBlue/PokemonMechanics';

import { default as TrainersLookupCrystal } from './Model/Crystal/TrainersLookup';
import { default as TrainersLookupGoldSilver } from './Model/GoldSilver/TrainersLookup';
import { default as TrainersLookupYellow } from './Model/Yellow/TrainersLookup';
import { default as TrainersLookupRedBlue } from './Model/RedBlue/TrainersLookup';

import { default as SpeciesNameLookupCrystal } from './Model/Crystal/SpeciesNameLookup';
import { default as SpeciesNameLookupGoldSilver } from './Model/GoldSilver/SpeciesNameLookup';
import { default as SpeciesNameLookupYellow } from './Model/Yellow/SpeciesNameLookup';
import { default as SpeciesNameLookupRedBlue } from './Model/RedBlue/SpeciesNameLookup';

import { default as MoveLookupCrystal } from './Model/Crystal/MoveLookup';
import { default as MoveLookupGoldSilver } from './Model/GoldSilver/MoveLookup';
import { default as MoveLookupYellow } from './Model/Yellow/MoveLookup';
import { default as MoveLookupRedBlue } from './Model/RedBlue/MoveLookup';

import { default as PokemonMovesLookupCrystal } from './Model/Crystal/PokemonMovesLookup';
import { default as PokemonMovesLookupGoldSilver } from './Model/GoldSilver/PokemonMovesLookup';
import { default as PokemonMovesLookupYellow } from './Model/Yellow/PokemonMovesLookup';
import { default as PokemonMovesLookupRedBlue } from './Model/RedBlue/PokemonMovesLookup';

import { default as TmsLookupCrystal } from './Model/Crystal/TmsLookup';
import { default as TmsLookupGoldSilver } from './Model/GoldSilver/TmsLookup';
import { default as TmsLookupYellow } from './Model/Yellow/TmsLookup';
import { default as TmsLookupRedBlue } from './Model/RedBlue/TmsLookup';

import { default as HmsLookupCrystal } from './Model/Crystal/HmsLookup';
import { default as HmsLookupGoldSilver } from './Model/GoldSilver/HmsLookup';
import { default as HmsLookupYellow } from './Model/Yellow/HmsLookup';
import { default as HmsLookupRedBlue } from './Model/RedBlue/HmsLookup';

import { default as MtsLookupCrystal } from './Model/Crystal/MtsLookup';
import { default as MtsLookupGoldSilver } from './Model/GoldSilver/MtsLookup';
import { default as MtsLookupYellow } from './Model/Yellow/MtsLookup';
import { default as MtsLookupRedBlue } from './Model/RedBlue/MtsLookup';

import { default as TitleFirstRowsCrystal } from './Model/Crystal/TitleFirstRows';
import { default as TitleFirstRowsGoldSilver } from './Model/GoldSilver/TitleFirstRows';
import { default as TitleFirstRowsYellow } from './Model/Yellow/TitleFirstRows';
import { default as TitleFirstRowsRedBlue } from './Model/RedBlue/TitleFirstRows';

import GameHookProperty from 'GameHookProperty';
import GameHookEvent from 'GameHookEvent';
import IGameHookMapperClient from 'IGameHookMapperClient';
import IPersistentState from 'IPersistentState';
import IPlayTimeState from 'IPlayTimeState';
import IState from 'IState';
import IModelClasses from './IModelClasses';
import { IPokemonStats, IPokemonGen1BaseStats, IPokemonGen2BaseStats } from './Model/Interfaces/IPokemonStats';
import { ILastPokemonStats } from './IStateContext';
import { IPokemonMove } from './Model/Interfaces/IPokemonMove';

window.signalR = signalR;

interface IChange {
    path: string[],
    key: string,
    val: GameHookProperty<any>
}

const App: FunctionComponent = () => {
    const mapper: React.MutableRefObject<IGameHookMapperClient | null> = useRef<IGameHookMapperClient | null>(null);
    const propertiesRef: React.MutableRefObject<{ [key: string | number]: GameHookProperty<any> } | null> = useRef<{ [key: string | number]: GameHookProperty<any> } | null>(null);
    const persistentStateRef: React.MutableRefObject<IPersistentState | null> = useRef<IPersistentState | null>(null);

    function getPersistentState(): IPersistentState {
        const curPersistentStateString: string | null = window?.localStorage?.getItem("persistentState");
        var curPersistentState: IPersistentState;

        if (curPersistentStateString) {
            curPersistentState = JSON.parse(curPersistentStateString);
        }
        else {

            curPersistentState = {
                newgame_is_reset: false,
                battles: -1,
                resets: -1,
                saved_battles: -1,
            }
        }

        return curPersistentState;
    }
    const [persistentState, setPersistentState]: [IPersistentState, React.Dispatch<React.SetStateAction<IPersistentState>>] = useState<IPersistentState>(getPersistentState())

    useEffect(() => {
        localStorage.setItem("persistentState", JSON.stringify(persistentState));
    }, [persistentState]);

    const clickNewgameIsReset: () => void = () => {
        setPersistentState((persistentState: IPersistentState) => { persistentState.newgame_is_reset = !persistentState.newgame_is_reset; return persistentState; });
    };

    const resetResets: () => void = () => {
        setPersistentState((persistentState: IPersistentState) => { persistentState.resets = 0; return persistentState; });
    };

    const incrementResets: () => void = () => {
        setPersistentState((persistentState: IPersistentState) => { persistentState.resets++; return persistentState; });
    };

    const decrementResets: () => void = () => {
        setPersistentState((persistentState: IPersistentState) => { persistentState.resets--; return persistentState; });
    };

    const resetBattles: () => void = () => {
        setPersistentState((persistentState: IPersistentState) => { persistentState.battles = 0; return persistentState; });
    };

    const incrementBattles: () => void = () => {
        setPersistentState((persistentState: IPersistentState) => { persistentState.battles++; return persistentState; });
    };

    const decrementBattles: () => void = () => {
        setPersistentState((persistentState: IPersistentState) => { persistentState.battles--; return persistentState; });
    };

    const revertBattles: () => void = () => {
        setPersistentState((persistentState: IPersistentState) => { persistentState.battles = persistentState.saved_battles; return persistentState; });
    };

    const commitBattles: () => void = () => {
        setPersistentState((persistentState: IPersistentState) => { persistentState.saved_battles = persistentState.battles; return persistentState; });
    };

    const resetSavedBattles: () => void = () => {
        setPersistentState((persistentState: IPersistentState) => { persistentState.saved_battles = persistentState.battles; return persistentState; });
    };

    const setInObtainPokemonFlow: (value: boolean) => void = (value: boolean) => {
        setState((curState : IState) => { return { ...curState, in_obtain_pokemon_flow: value } });
    };
    
    useEffect(
        () => { persistentStateRef.current = persistentState },
        [persistentState]
    )

    const [state, setState]: [IState, React.Dispatch<React.SetStateAction<IState>>] = useState <IState>({
        gamehookLoaded: false,
        isConnected: false,
        pokemonModelSet: false,
        changeCallbacksSet: false,
        properties: null,
        new_colors: true,
        in_obtain_pokemon_flow: false,
        modelClasses: { TypeLookup: null, PokemonStatsLookup: null, SpeciesImageLookup: null, PokemonMechanics: null, TrainersLookup: null, SpeciesNameLookup: null, MoveLookup: null, PokemonMovesLookup: null, TmsLookup: null, HmsLookup: null, MtsLookup: null, TitleFirstRows: null }
    });

    const [inBattle, setInBattle]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState<boolean>(false);
    const [inTitle, setInTitle]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState<boolean>(false);
    const [lastPokemon, setLastPokemon]: [ILastPokemonStats | null, React.Dispatch<React.SetStateAction<ILastPokemonStats | null>>] = useState<ILastPokemonStats | null>(null);
    const [lastEnemyPokemon, setLastEnemyPokemon]: [ILastPokemonStats | null, React.Dispatch<React.SetStateAction<ILastPokemonStats | null>>] = useState<ILastPokemonStats | null>(null);

    const [changes, setChanges]: [Array<IChange>, React.Dispatch<React.SetStateAction<Array<IChange>>>] = useState<Array<IChange>>(new Array<IChange>());

    function getPlayTimeState(): IPlayTimeState {
        const playTimeString: string | null = window?.localStorage?.getItem("playTime");
        const lastPlayTimeString: string | null = window?.localStorage?.getItem("lastPlayTime");
        const playTime: number = playTimeString ? parseInt(playTimeString) : 0;
        const lastPlayTime: number | null = lastPlayTimeString && lastPlayTimeString != "" ? parseInt(lastPlayTimeString) : null;

        return {
            playTime: playTime,
            lastPlayTime: lastPlayTime,
        };
    }
    const [playTimeState, setPlayTimeState]: [IPlayTimeState, React.Dispatch<React.SetStateAction<IPlayTimeState>>] = useState<IPlayTimeState>(getPlayTimeState());

    useEffect(() => {
        localStorage.setItem("playTime", playTimeState.playTime.toString());
        localStorage.setItem("lastPlayTime", ((playTimeState.lastPlayTime != null) ? playTimeState.lastPlayTime.toString() : ""));
    }, [playTimeState]);

    useEffect(
        () => { propertiesRef.current = state.properties },
        [state.properties]
    )

    useBodyClass(`${styles.body}`);

    const resetPlayTime: () => void = () => {
        setPlayTimeState((playTimeState: IPlayTimeState) => {
            return {
                playTime: 0,
                lastPlayTime: null,
            }
        });
    };

    function loadExternalJSScript(name : string, url : string, loadCallback: () => void, setStateFunction : (loaded : boolean) => void) {
        useEffect(() => {
            console.log("loadExternalJSScript!");
            setStateFunction(false);

            var resScript : HTMLScriptElement | null = null;
            function loadExternalJSScriptInternal(name: string, url: string, loadCallback: () => void, setStateFunction: (loaded: boolean) => void) {
                const script: HTMLScriptElement = document.createElement('script');

                script.src = url;
                script.async = true;
                script.onload = function () { resScript = script; setStateFunction(true); console.log(name + " loaded."); loadCallback(); };
                script.onerror = function (message, filename, lineno, colno, error) { setStateFunction(false); console.log(message, filename, lineno, colno, error); console.log(name + " errored."); document.body.removeChild(script); setTimeout(() => { loadExternalJSScriptInternal(name, url, loadCallback, setStateFunction); }, 5000); };
                document.body.appendChild(script);
            }
            loadExternalJSScriptInternal(name, url, loadCallback, setStateFunction);

            return () => {
                if (resScript != null) {
                    document.body.removeChild(resScript);
                    resScript = null;
                }
            }
        }, []);
    }

    loadExternalJSScript("gamehook", "http://localhost:8085/dist/gameHookMapperClient.js", () => { var newMapper: IGameHookMapperClient = new GameHookMapperClient(); mapper.current = newMapper; console.log("newMapper:", mapper.current); setState({ ...state, gamehookLoaded: true }); }, (x) => { });

    useEffect(() => {
        //console.log("self:", self);
        //console.log("hh:", state, state.gamehookLoaded, mapper.current);
        if (state.gamehookLoaded && !state.isConnected) {
            var isConnected : boolean = false;
            var pokemonModelSet : boolean = false;
            var connect : () => Promise<void> = async () => {
                console.log("connecting to gamehook.");
                await mapper.current?.connect();

                console.log("connected!");
                isConnected = true;

                console.log("set models.");

                var newModelClasses : IModelClasses = { ...state.modelClasses };
                console.log("mapper?.current?.properties?.meta?.generation:", mapper?.current?.properties?.meta?.generation?.value);
                console.log("mapper?.current?.properties?.meta?.game_type:", mapper?.current?.properties?.meta?.game_type?.value);
                switch (mapper?.current?.properties?.meta?.generation?.value) {
                    case "1":
                        switch (mapper?.current?.properties?.meta?.game_type?.value) {
                            case "Originals":
                                newModelClasses.TypeLookup = new TypeLookupRedBlue();
                                newModelClasses.PokemonStatsLookup = new PokemonStatsLookupRedBlue();
                                newModelClasses.SpeciesImageLookup = new SpeciesImageLookupRedBlue();
                                newModelClasses.PokemonMechanics = new PokemonMechanicsRedBlue();
                                newModelClasses.TrainersLookup = new TrainersLookupRedBlue();
                                newModelClasses.SpeciesNameLookup = new SpeciesNameLookupRedBlue();
                                newModelClasses.MoveLookup = new MoveLookupRedBlue();
                                newModelClasses.PokemonMovesLookup = new PokemonMovesLookupRedBlue();
                                newModelClasses.TmsLookup = new TmsLookupRedBlue();
                                newModelClasses.HmsLookup = new HmsLookupRedBlue();
                                newModelClasses.MtsLookup = new MtsLookupRedBlue();
                                newModelClasses.TitleFirstRows = new TitleFirstRowsRedBlue();
                                break;
                            case "Third Version":
                                newModelClasses.TypeLookup = new TypeLookupYellow();
                                newModelClasses.PokemonStatsLookup = new PokemonStatsLookupYellow();
                                newModelClasses.SpeciesImageLookup = new SpeciesImageLookupYellow();
                                newModelClasses.PokemonMechanics = new PokemonMechanicsYellow();
                                newModelClasses.TrainersLookup = new TrainersLookupYellow();
                                newModelClasses.SpeciesNameLookup = new SpeciesNameLookupYellow();
                                newModelClasses.MoveLookup = new MoveLookupYellow();
                                newModelClasses.PokemonMovesLookup = new PokemonMovesLookupYellow();
                                newModelClasses.TmsLookup = new TmsLookupYellow();
                                newModelClasses.HmsLookup = new HmsLookupYellow();
                                newModelClasses.MtsLookup = new MtsLookupYellow();
                                newModelClasses.TitleFirstRows = new TitleFirstRowsYellow();
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
                                newModelClasses.TitleFirstRows = null;
                                break;
                        }
                        break;
                    case "2":
                        switch (mapper?.current?.properties?.meta?.game_type?.value) {
                            case "Originals":
                                newModelClasses.TypeLookup = new TypeLookupGoldSilver();
                                newModelClasses.PokemonStatsLookup = new PokemonStatsLookupGoldSilver();
                                newModelClasses.SpeciesImageLookup = new SpeciesImageLookupGoldSilver();
                                newModelClasses.PokemonMechanics = new PokemonMechanicsGoldSilver();
                                newModelClasses.TrainersLookup = new TrainersLookupGoldSilver();
                                newModelClasses.SpeciesNameLookup = new SpeciesNameLookupGoldSilver();
                                newModelClasses.MoveLookup = new MoveLookupGoldSilver();
                                newModelClasses.PokemonMovesLookup = new PokemonMovesLookupGoldSilver();
                                newModelClasses.TmsLookup = new TmsLookupGoldSilver();
                                newModelClasses.HmsLookup = new HmsLookupGoldSilver();
                                newModelClasses.MtsLookup = new MtsLookupGoldSilver();
                                newModelClasses.TitleFirstRows = new TitleFirstRowsGoldSilver();

                                break;
                            case "Third Version":
                                newModelClasses.TypeLookup = new TypeLookupCrystal();
                                newModelClasses.PokemonStatsLookup = new PokemonStatsLookupCrystal();
                                newModelClasses.SpeciesImageLookup = new SpeciesImageLookupCrystal();
                                newModelClasses.PokemonMechanics = new PokemonMechanicsCrystal();
                                newModelClasses.TrainersLookup = new TrainersLookupCrystal();
                                newModelClasses.SpeciesNameLookup = new SpeciesNameLookupCrystal();
                                newModelClasses.MoveLookup = new MoveLookupCrystal();
                                newModelClasses.PokemonMovesLookup = new PokemonMovesLookupCrystal();
                                newModelClasses.TmsLookup = new TmsLookupCrystal();
                                newModelClasses.HmsLookup = new HmsLookupCrystal();
                                newModelClasses.MtsLookup = new MtsLookupCrystal();
                                newModelClasses.TitleFirstRows = new TitleFirstRowsCrystal();
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
                                newModelClasses.TitleFirstRows = null;
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
                console.log("setState:", { ...state, isConnected: isConnected, pokemonModelSet: pokemonModelSet, properties: null, modelClasses: newModelClasses });
                setState({ ...state, isConnected: isConnected, pokemonModelSet: pokemonModelSet, properties: null, modelClasses: newModelClasses });
            }

            connect();
        }

        return () => {
        }
    }, [state.gamehookLoaded]);

    useEffect(() => {
        //console.log("self:", self);
        //console.log("hh:", state, state.gamehookLoaded, mapper.current);
        if (state.gamehookLoaded && state.isConnected && state.pokemonModelSet && !state.changeCallbacksSet) {
            var properties: { [key: string | number]: GameHookProperty<any> } = {};
            propertiesRef.current = properties;
            var mapperCurrentProperties: { [key: string | number]: GameHookProperty<any> } = (mapper.current != null) ? mapper.current.properties : {}
            recursiveWalk(mapperCurrentProperties, (key: any, val: any, path: string[], parent: any): any => {
                var kv: string = "";
                if (path && path.length > 0) {
                    kv += path.join(".");
                }
                if (key != "") {
                    if (kv != "") {
                        kv += ".";
                    }
                    kv += key;
                }
                if (parent?.[key]?.change) {
                    var doWatch: boolean = false;
                    for (var watch of WatchPaths) {
                        var idx: number = -1;
                        var curDoWatch: boolean = true;
                        for (var pathFragment of watch) {
                            idx++;
                            if (pathFragment != path[idx]) {
                                curDoWatch = false;
                                break;
                            }
                        }
                        if (curDoWatch) {
                            doWatch = true;
                            break;
                        }
                    }
                    if (doWatch) {
                        for (var exclude of ExcludePaths) {
                            var idx: number = -1;
                            var curDontWatch: boolean = true;
                            for (var pathFragment of exclude) {
                                idx++;
                                if (pathFragment != path[idx]) {
                                    curDontWatch = false;
                                    break;
                                }
                            }
                            if (curDontWatch) {
                                doWatch = false;
                                break;
                            }
                        }
                    }
                    if (doWatch) {
                        //console.log("change:", path, "key:", key);
                        var prop: object | null | unknown = (mapper.current != null) ? getPropertyByPath(mapper.current.properties, path) : null
                        var property: { [key: number | string]: any } = (prop) ? prop : {}
                        properties[kv] = property[key];
                        parent[key].change((function (key: string): (x: GameHookProperty<any>) => Promise<void> {
                            return async function (x: GameHookProperty<any>) {
                                var change: IChange = { path: path, key: key, val: x };

                                //console.log("change?:", modelParent[key], x);
                                if (propertiesRef.current?.[key]?.value != x?.value) {
                                    //console.log("change':", x);
                                    setChanges((changes: IChange[]) => { var changes: IChange[] = [...changes]; changes.push(change); return changes; });
                                }
                            }
                        })(kv));
                    }
                }
            });

            if (mapper.current) {
                mapper.current.onTriggeredEvents = (event: GameHookEvent) => {
                    console.log("onTriggeredEvents:", event);
                    switch (event.name) {
                        case "softreset":
                        case "_softreset":
                        case "_hardreset":
                            incrementResets();
                            setInObtainPokemonFlow(false);
                            break;
                        case "OakSpeech.doNewGame":
                        case "InitializeWorld.doNewGame":
                            if (persistentStateRef.current && persistentStateRef.current.newgame_is_reset) {
                                incrementResets();
                            } else {
                                resetResets();
                                resetBattles();
                                resetPlayTime();
                            }
                            break;
                        case "_AddPartyMon":
                        case "TryAddMonToParty":
                            setInObtainPokemonFlow(true);
                            break;
                        case "_AddPartyMon.done":
                        case "GeneratePartyMonStats.done":
                            setInObtainPokemonFlow(false);
                            break;
                        case "SaveSAV.save":
                        case "_SaveGameData":
                            commitBattles();
                            break;
                        case "MainMenu.pressedA":
                        case "Continue.Check2Pass":
                            resetSavedBattles();
                            break;
                    }
                }
                mapper.current.onImmediateReadValues = (property: GameHookProperty<any>, immediateReadValues: any[]) => { console.log("onImmediateReadValues:", property, immediateReadValues); }
            }

            function getInBattle(): boolean {
                var in_battle: boolean = false;

                var mode: undefined | null | number | string = mapper?.current?.properties?.battle.mode?.value;
                var battle_start: undefined | null | number = mapper?.current?.properties?.battle?.other.battle_start?.value;
                var battle_ended: undefined | null | number = mapper?.current?.properties?.battle?.other.battle_ended?.value;
                var first_mons_not_out_yet: undefined | null | number = mapper?.current?.properties?.battle.other?.first_mons_not_out_yet?.value;
                var action_result_or_took_battle_turn: undefined | null | number = mapper?.current?.properties?.battle.other?.action_result_or_took_battle_turn?.value;
                var battle_result: undefined | null | number = mapper?.current?.properties?.battle.other?.battle_result?.value;
                var outcome_flags: undefined | null | number = mapper?.current?.properties?.battle.other?.outcome_flags?.value;
                var cur_opponent: undefined | null | number = mapper?.current?.properties?.battle.opponent?.cur_opponent?.value;
                var party_position: undefined | null | number = mapper?.current?.properties?.battle?.player?.party_position?.value;

                var battle_participants_including_fainted_slot_0: undefined | null | number = mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_0?.value;
                var battle_participants_including_fainted_slot_1: undefined | null | number = mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_1?.value;
                var battle_participants_including_fainted_slot_2: undefined | null | number = mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_2?.value;
                var battle_participants_including_fainted_slot_3: undefined | null | number = mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_3?.value;
                var battle_participants_including_fainted_slot_4: undefined | null | number = mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_4?.value;
                var battle_participants_including_fainted_slot_5: undefined | null | number = mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_5?.value;

                console.log("mode:", mode,
                    "battle_start:", battle_start,
                    "battle_ended:", battle_ended,
                    "first_mons_not_out_yet:", first_mons_not_out_yet,
                    "action_result_or_took_battle_turn:", action_result_or_took_battle_turn,
                    "battle_result:", battle_result,
                    "outcome_flags:", outcome_flags,
                    "cur_opponent:", cur_opponent,
                    "party_position:", party_position,
                    "battle_participants_including_fainted_slot_0:", battle_participants_including_fainted_slot_0,
                    "battle_participants_including_fainted_slot_1:", battle_participants_including_fainted_slot_1,
                    "battle_participants_including_fainted_slot_2:", battle_participants_including_fainted_slot_2,
                    "battle_participants_including_fainted_slot_3:", battle_participants_including_fainted_slot_3,
                    "battle_participants_including_fainted_slot_4:", battle_participants_including_fainted_slot_4,
                    "battle_participants_including_fainted_slot_5:", battle_participants_including_fainted_slot_5,
                );

                var modeIsDefined: boolean = (mode != undefined && mode != null && mode != 0 && mode != "None");
                var modeIsNotNone: boolean = (modeIsDefined && mode != "None");
                var modeIsNotTrainer: boolean = (modeIsNotNone && mode != "Trainer");
                var battleStarted: boolean = (battle_start != undefined && battle_start != null && battle_start != 0);
                var first_mons_not_out_yet_undefined: boolean = (first_mons_not_out_yet === undefined);
                var first_mons_not_out_yet_false: boolean = (!first_mons_not_out_yet_undefined && first_mons_not_out_yet == null || first_mons_not_out_yet == 0);
                var battle_is_ended: boolean = (battle_ended != undefined && battle_ended != null && battle_ended != 0);
                var has_party_position: boolean = (party_position != undefined && party_position != null && party_position != 0);
                var has_action_result_or_took_battle_turn: boolean = (action_result_or_took_battle_turn != undefined && action_result_or_took_battle_turn != null && action_result_or_took_battle_turn != 0);
                var has_battle_result: boolean = (battle_result != undefined && battle_result != null && battle_result != 0);
                var has_outcome_flags: boolean = (outcome_flags != undefined && outcome_flags != null && outcome_flags != 0);
                var cur_opponent_null_or_true: boolean = (cur_opponent == undefined || cur_opponent == null || cur_opponent != 0);
                var battle_participants_including_fainted: boolean =
                    (battle_participants_including_fainted_slot_0 != undefined && battle_participants_including_fainted_slot_0 != null && battle_participants_including_fainted_slot_0 != 0) ||
                    (battle_participants_including_fainted_slot_1 != undefined && battle_participants_including_fainted_slot_1 != null && battle_participants_including_fainted_slot_1 != 0) ||
                    (battle_participants_including_fainted_slot_2 != undefined && battle_participants_including_fainted_slot_2 != null && battle_participants_including_fainted_slot_2 != 0) ||
                    (battle_participants_including_fainted_slot_3 != undefined && battle_participants_including_fainted_slot_3 != null && battle_participants_including_fainted_slot_3 != 0) ||
                    (battle_participants_including_fainted_slot_4 != undefined && battle_participants_including_fainted_slot_4 != null && battle_participants_including_fainted_slot_4 != 0) ||
                    (battle_participants_including_fainted_slot_5 != undefined && battle_participants_including_fainted_slot_5 != null && battle_participants_including_fainted_slot_5 != 0);

                in_battle = (modeIsDefined && modeIsNotNone)
                    && (battleStarted ||
                        (first_mons_not_out_yet_undefined && battle_participants_including_fainted) ||
                    (!first_mons_not_out_yet_undefined && modeIsNotTrainer && has_party_position))
                    && !battle_is_ended
                    && (first_mons_not_out_yet_false || has_party_position)
                    && !has_action_result_or_took_battle_turn
                    && !has_battle_result
                    && !has_outcome_flags
                    && (cur_opponent_null_or_true || modeIsNotTrainer);
                //console.log("in_battle:", in_battle);

                return in_battle;
            }

            function getInTitle() : boolean {
                var mode: undefined | null | number | string = mapper?.current?.properties?.battle.mode?.value;
                var cur_opponent: undefined | null | number = mapper?.current?.properties?.battle.opponent?.cur_opponent?.value;

                var tile0: undefined | null | number = mapper?.current?.properties?.screen?.column_0?.tiles?.[0]?.value;
                var tile1: undefined | null | number = mapper?.current?.properties?.screen?.column_1?.tiles?.[0]?.value;
                var tile2: undefined | null | number = mapper?.current?.properties?.screen?.column_2?.tiles?.[0]?.value;
                var tile3: undefined | null | number = mapper?.current?.properties?.screen?.column_3?.tiles?.[0]?.value;
                var tile4: undefined | null | number = mapper?.current?.properties?.screen?.column_4?.tiles?.[0]?.value;
                var tile5: undefined | null | number = mapper?.current?.properties?.screen?.column_5?.tiles?.[0]?.value;
                var tile6: undefined | null | number = mapper?.current?.properties?.screen?.column_6?.tiles?.[0]?.value;
                var tile7: undefined | null | number = mapper?.current?.properties?.screen?.column_7?.tiles?.[0]?.value;
                var tile8: undefined | null | number = mapper?.current?.properties?.screen?.column_8?.tiles?.[0]?.value;
                var tile9: undefined | null | number = mapper?.current?.properties?.screen?.column_9?.tiles?.[0]?.value;
                var tile10: undefined | null | number = mapper?.current?.properties?.screen?.column_10?.tiles?.[0]?.value;
                var tile11: undefined | null | number = mapper?.current?.properties?.screen?.column_11?.tiles?.[0]?.value;
                var tile12: undefined | null | number = mapper?.current?.properties?.screen?.column_12?.tiles?.[0]?.value;
                var tile13: undefined | null | number = mapper?.current?.properties?.screen?.column_13?.tiles?.[0]?.value;
                var tile14: undefined | null | number = mapper?.current?.properties?.screen?.column_14?.tiles?.[0]?.value;
                var tile15: undefined | null | number = mapper?.current?.properties?.screen?.column_15?.tiles?.[0]?.value;
                var tile16: undefined | null | number = mapper?.current?.properties?.screen?.column_16?.tiles?.[0]?.value;
                var tile17: undefined | null | number = mapper?.current?.properties?.screen?.column_17?.tiles?.[0]?.value;
                var tile18: undefined | null | number = mapper?.current?.properties?.screen?.column_18?.tiles?.[0]?.value;
                var tile19: undefined | null | number = mapper?.current?.properties?.screen?.column_19?.tiles?.[0]?.value;
                var tile20: undefined | null | number = mapper?.current?.properties?.screen?.column_20?.tiles?.[0]?.value;
                var tile21: undefined | null | number = mapper?.current?.properties?.screen?.column_21?.tiles?.[0]?.value;
                var tile22: undefined | null | number = mapper?.current?.properties?.screen?.column_22?.tiles?.[0]?.value;
                var tile23: undefined | null | number = mapper?.current?.properties?.screen?.column_23?.tiles?.[0]?.value;
                var tile24: undefined | null | number = mapper?.current?.properties?.screen?.column_24?.tiles?.[0]?.value;
                var tile25: undefined | null | number = mapper?.current?.properties?.screen?.column_25?.tiles?.[0]?.value;
                var tile26: undefined | null | number = mapper?.current?.properties?.screen?.column_26?.tiles?.[0]?.value;
                var tile27: undefined | null | number = mapper?.current?.properties?.screen?.column_27?.tiles?.[0]?.value;
                var tile28: undefined | null | number = mapper?.current?.properties?.screen?.column_28?.tiles?.[0]?.value;
                var tile29: undefined | null | number = mapper?.current?.properties?.screen?.column_29?.tiles?.[0]?.value;
                var tile30: undefined | null | number = mapper?.current?.properties?.screen?.column_30?.tiles?.[0]?.value;
                var tile31: undefined | null | number = mapper?.current?.properties?.screen?.column_31?.tiles?.[0]?.value;

                var map_index: undefined | null | number = mapper?.current?.properties?.overworld?.map_index?.value;
                var x: undefined | null | number = mapper?.current?.properties?.overworld?.x?.value;
                var y: undefined | null | number = mapper?.current?.properties?.overworld?.y?.value;

                console.log("mapper?.current?.properties?.screen?.column_[0-31]?.tiles?.[0]:",
                    mapper?.current?.properties?.screen?.column_0?.tiles?.[0]?.value,
                    mapper?.current?.properties?.screen?.column_1?.tiles?.[0]?.value,
                    mapper?.current?.properties?.screen?.column_2?.tiles?.[0]?.value,
                    mapper?.current?.properties?.screen?.column_3?.tiles?.[0]?.value,
                    mapper?.current?.properties?.screen?.column_4?.tiles?.[0]?.value,
                    mapper?.current?.properties?.screen?.column_5?.tiles?.[0]?.value,
                    mapper?.current?.properties?.screen?.column_6?.tiles?.[0]?.value,
                    mapper?.current?.properties?.screen?.column_7?.tiles?.[0]?.value,
                    mapper?.current?.properties?.screen?.column_8?.tiles?.[0]?.value,
                    mapper?.current?.properties?.screen?.column_9?.tiles?.[0]?.value,
                    mapper?.current?.properties?.screen?.column_10?.tiles?.[0]?.value,
                    mapper?.current?.properties?.screen?.column_11?.tiles?.[0]?.value,
                    mapper?.current?.properties?.screen?.column_12?.tiles?.[0]?.value,
                    mapper?.current?.properties?.screen?.column_13?.tiles?.[0]?.value,
                    mapper?.current?.properties?.screen?.column_14?.tiles?.[0]?.value,
                    mapper?.current?.properties?.screen?.column_15?.tiles?.[0]?.value,
                    mapper?.current?.properties?.screen?.column_16?.tiles?.[0]?.value,
                    mapper?.current?.properties?.screen?.column_17?.tiles?.[0]?.value,
                    mapper?.current?.properties?.screen?.column_18?.tiles?.[0]?.value,
                    mapper?.current?.properties?.screen?.column_19?.tiles?.[0]?.value,
                    mapper?.current?.properties?.screen?.column_20?.tiles?.[0]?.value,
                    mapper?.current?.properties?.screen?.column_21?.tiles?.[0]?.value,
                    mapper?.current?.properties?.screen?.column_22?.tiles?.[0]?.value,
                    mapper?.current?.properties?.screen?.column_23?.tiles?.[0]?.value,
                    mapper?.current?.properties?.screen?.column_24?.tiles?.[0]?.value,
                    mapper?.current?.properties?.screen?.column_25?.tiles?.[0]?.value,
                    mapper?.current?.properties?.screen?.column_26?.tiles?.[0]?.value,
                    mapper?.current?.properties?.screen?.column_27?.tiles?.[0]?.value,
                    mapper?.current?.properties?.screen?.column_28?.tiles?.[0]?.value,
                    mapper?.current?.properties?.screen?.column_29?.tiles?.[0]?.value,
                    mapper?.current?.properties?.screen?.column_30?.tiles?.[0]?.value,
                    mapper?.current?.properties?.screen?.column_31?.tiles?.[0]?.value/*,
                    "mapper?.current?.properties?.overworld?.map_index:",
                    mapper?.current?.properties?.overworld?.map_index?.value,
                    "mapper?.current?.properties?.overworld?.x:",
                    mapper?.current?.properties?.overworld?.x?.value,
                    "mapper?.current?.properties?.overworld?.y:",
                    mapper?.current?.properties?.overworld?.y?.value*/
                );

                var firstRow: (number | null | undefined)[] = [
                    tile0, tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9,
                    tile10, tile11, tile12, tile13, tile14, tile15, tile16, tile17, tile18, tile19,
                    tile20, tile21, tile22, tile23, tile24, tile25, tile26, tile27, tile28, tile29,
                    tile30, tile31,
                ];

                return (mode == null || mode == 0 || mode == "None")
                    && (cur_opponent == null || cur_opponent == 0)
                    && _.findIndex(state?.modelClasses?.TitleFirstRows?.titleFirstRows, function (o: number[]) { return _.isEqual(o, firstRow); }) != -1;
            }

            function getLastPokemon(): ILastPokemonStats {
                const pokemon_stats: IPokemonStats | undefined = state?.modelClasses?.PokemonStatsLookup?.statsLookup?.get(0x00);
                const pokemon_moves: IPokemonMove | undefined = state?.modelClasses?.PokemonMovesLookup?.pokemonTmsLookup?.get(0x00);
                const index = 0x00;
                const growth_rate: number = ((typeof pokemon_stats?.growth_rate == 'string') ? 0x00 : pokemon_stats?.growth_rate) ?? 0x00;
                const empty_stats: IPokemonGen1BaseStats | IPokemonGen2BaseStats = (mapper?.current?.properties?.meta?.generation?.value == "1" || mapper?.current?.properties?.meta?.generation?.value == 1 || !mapper?.current?.properties?.meta?.generation?.value) ? { "hp": 0, "atk": 0, "def": 0, "spd": 0, "spc": 0 } : { "hp": 0, "atk": 0, "def": 0, "spd": 0, "sp_atk": 0, "sp_def": 0 };
                const base_stats: IPokemonGen1BaseStats | IPokemonGen2BaseStats = ((typeof pokemon_stats?.base_stats == 'string') ? empty_stats : pokemon_stats?.base_stats) ?? empty_stats;
                const types: number[] = ((typeof pokemon_stats?.types == 'string') ? [0] : pokemon_stats?.types) ?? [0];
                const initial: number[] = ((typeof pokemon_moves?.initial == 'string') ? [] : pokemon_moves?.initial) ?? [];
                const levelup: Map<number | string, string | number | number[]> = ((typeof pokemon_moves?.levelup == 'string') ? new Map<number | string, string | number | number[]>() : pokemon_moves?.levelup) ?? new Map<number | string, string | number | number[]>();
                const tms: number[] = ((typeof pokemon_moves?.tms == 'string') ? [] : pokemon_moves?.tms) ?? [];
                const hms: number[] = ((typeof pokemon_moves?.hms == 'string') ? [] : pokemon_moves?.hms) ?? [];
                const mts: number[] = ((typeof pokemon_moves?.mts == 'string') ? [] : pokemon_moves?.mts) ?? [];
                const egg_moves: number[] = ((typeof pokemon_moves?.egg_moves == 'string') ? [] : pokemon_moves?.egg_moves) ?? [];
                const event_moves: number[] = ((typeof pokemon_moves?.event_moves == 'string') ? [] : pokemon_moves?.event_moves) ?? [];
                const trade_moves: number[] = ((typeof pokemon_moves?.trade_moves == 'string') ? [] : pokemon_moves?.trade_moves) ?? [];
                const cross_gen_trade_moves: number[] = ((typeof pokemon_moves?.cross_gen_trade_moves == 'string') ? [] : pokemon_moves?.cross_gen_trade_moves) ?? [];
                var ret: ILastPokemonStats = {
                    index: index,
                    growth_rate: growth_rate,
                    base_stats: base_stats,
                    types: types,
                    initial: initial,
                    levelup: levelup,
                    tms: tms,
                    hms: hms,
                    mts: mts,
                    egg_moves: egg_moves,
                    event_moves: event_moves,
                    trade_moves: trade_moves,
                    cross_gen_trade_moves: cross_gen_trade_moves
                };
                var in_battle: boolean = getInBattle();
                var team_count: number = ((in_battle) ? mapper?.current?.properties?.battle?.player?.team_count?.value : mapper?.current?.properties?.player?.team_count?.value) ?? 0;

                if (team_count > 6) {
                    team_count = 6;
                }
                if (team_count != 0) {
                    var found: boolean = false;
                    for (var i: number = team_count - 1; i >= 0; i--) {
                        var pokemon_index: undefined | null | number = ((in_battle) ? mapper?.current?.properties?.battle?.player?.team?.[i]?.index_number?.value : mapper?.current?.properties?.player?.team?.[i]?.index_number?.value);
                        var team_pokemon_stats: undefined | null | IPokemonStats = state?.modelClasses?.PokemonStatsLookup?.statsLookup?.get(((pokemon_index != null) ? pokemon_index : 0).toString());
                        var team_pokemon_moves: undefined | null | IPokemonMove = state.modelClasses.PokemonMovesLookup?.pokemonTmsLookup.get(((pokemon_index != null) ? pokemon_index : 0).toString());
                        if (typeof pokemon_index == 'undefined' || pokemon_index === null) {
                            continue;
                        } else if (typeof team_pokemon_stats?.base_stats == 'undefined' ||
                            team_pokemon_stats?.base_stats === null ||
                            typeof team_pokemon_stats?.base_stats == 'string' ||
                            typeof team_pokemon_stats?.growth_rate == 'undefined' ||
                            team_pokemon_stats?.growth_rate === null ||
                            typeof team_pokemon_stats?.growth_rate == 'string' ||
                            typeof team_pokemon_stats?.types == 'undefined' || 
                            team_pokemon_stats?.types === null ||
                            typeof team_pokemon_stats?.types == 'string') {
                            continue;
                        }
                        if (typeof team_pokemon_moves?.initial == 'undefined' || 
                            team_pokemon_moves?.initial === null ||
                            typeof team_pokemon_moves?.initial == 'string' || 
                            typeof team_pokemon_moves?.levelup == 'undefined' ||
                            team_pokemon_moves?.levelup === null ||
                            typeof team_pokemon_moves?.levelup == 'string' ||
                            typeof team_pokemon_moves?.tms == 'undefined' ||
                            team_pokemon_moves?.tms === null ||
                            typeof team_pokemon_moves?.tms == 'string' ||
                            typeof team_pokemon_moves?.hms == 'undefined' ||
                            team_pokemon_moves?.hms === null ||
                            typeof team_pokemon_moves?.hms == 'string' ||
                            typeof team_pokemon_moves?.mts == 'undefined' ||
                            team_pokemon_moves?.mts === null ||
                            typeof team_pokemon_moves?.mts == 'string' ||
                            typeof team_pokemon_moves?.egg_moves == 'undefined' ||
                            team_pokemon_moves?.egg_moves === null ||
                            typeof team_pokemon_moves?.egg_moves == 'string' ||
                            typeof team_pokemon_moves?.event_moves == 'undefined' ||
                            team_pokemon_moves?.event_moves === null ||
                            typeof team_pokemon_moves?.event_moves == 'string' ||
                            typeof team_pokemon_moves?.trade_moves == 'undefined' ||
                            team_pokemon_moves?.trade_moves === null ||
                            typeof team_pokemon_moves?.trade_moves == 'string' ||
                            typeof team_pokemon_moves?.cross_gen_trade_moves == 'undefined' ||
                            team_pokemon_moves?.cross_gen_trade_moves === null ||
                            typeof team_pokemon_moves?.cross_gen_trade_moves == 'string') {
                            continue;
                        }

                        const index: number = pokemon_index;
                        const growth_rate: number = team_pokemon_stats?.growth_rate;
                        const base_stats: IPokemonGen1BaseStats | IPokemonGen2BaseStats = team_pokemon_stats?.base_stats;
                        const types: number[] = team_pokemon_stats?.types;
                        const initial: number[] = team_pokemon_moves?.initial;
                        const levelup: Map<number | string, string | number | number[]> = team_pokemon_moves?.levelup;
                        const tms: number[] = team_pokemon_moves?.tms;
                        const hms: number[] = team_pokemon_moves?.hms;
                        const mts: number[] = team_pokemon_moves?.mts;
                        const egg_moves: number[] = team_pokemon_moves?.egg_moves;
                        const event_moves: number[] = team_pokemon_moves?.event_moves;
                        const trade_moves: number[] = team_pokemon_moves?.trade_moves;
                        const cross_gen_trade_moves: number[] = team_pokemon_moves?.cross_gen_trade_moves;

                        ret = {
                            index: index,
                            growth_rate: growth_rate,
                            base_stats: base_stats,
                            types: types,
                            initial: initial,
                            levelup: levelup,
                            tms: tms,
                            hms: hms,
                            mts: mts,
                            egg_moves: egg_moves,
                            event_moves: event_moves,
                            trade_moves: trade_moves,
                            cross_gen_trade_moves: cross_gen_trade_moves
                        };
                        found = true;
                        break;
                    }
                    if (!found) {
                        const pokemon_stats: IPokemonStats | undefined = state?.modelClasses?.PokemonStatsLookup?.statsLookup?.get(0xFF);
                        const index = 0xFF;
                        const growth_rate: number = ((typeof pokemon_stats?.growth_rate == 'string') ? 0x00 : pokemon_stats?.growth_rate) ?? 0x00;
                        const empty_stats: IPokemonGen1BaseStats | IPokemonGen2BaseStats = (mapper?.current?.properties?.meta?.generation?.value == "1" || mapper?.current?.properties?.meta?.generation?.value == 1 || !mapper?.current?.properties?.meta?.generation?.value) ? { "hp": 0, "atk": 0, "def": 0, "spd": 0, "spc": 0 } : { "hp": 0, "atk": 0, "def": 0, "spd": 0, "sp_atk": 0, "sp_def": 0 };
                        const base_stats: IPokemonGen1BaseStats | IPokemonGen2BaseStats = ((typeof pokemon_stats?.base_stats == 'string') ? empty_stats : pokemon_stats?.base_stats) ?? empty_stats;
                        const types: number[] = ((typeof pokemon_stats?.types == 'string') ? [0] : pokemon_stats?.types) ?? [0];
                        const initial: number[] = ((typeof pokemon_moves?.initial == 'string') ? [] : pokemon_moves?.initial) ?? [];
                        const levelup = ((typeof pokemon_moves?.levelup == 'string') ? new Map<number | string, string | number | number[]>() : pokemon_moves?.levelup) ?? new Map<number | string, string | number | number[]>();
                        const tms: number[] = ((typeof pokemon_moves?.tms == 'string') ? [] : pokemon_moves?.tms) ?? [];
                        const hms: number[] = ((typeof pokemon_moves?.hms == 'string') ? [] : pokemon_moves?.hms) ?? [];
                        const mts: number[] = ((typeof pokemon_moves?.mts == 'string') ? [] : pokemon_moves?.mts) ?? [];
                        const egg_moves: number[] = ((typeof pokemon_moves?.egg_moves == 'string') ? [] : pokemon_moves?.egg_moves) ?? [];
                        const event_moves: number[] = ((typeof pokemon_moves?.event_moves == 'string') ? [] : pokemon_moves?.event_moves) ?? [];
                        const trade_moves: number[] = ((typeof pokemon_moves?.trade_moves == 'string') ? [] : pokemon_moves?.trade_moves) ?? [];
                        const cross_gen_trade_moves: number[] = ((typeof pokemon_moves?.cross_gen_trade_moves == 'string') ? [] : pokemon_moves?.cross_gen_trade_moves) ?? [];
                        ret = {
                            index: index,
                            growth_rate: growth_rate,
                            base_stats: base_stats,
                            types: types,
                            initial: initial,
                            levelup: levelup,
                            tms: tms,
                            hms: hms,
                            mts: mts,
                            egg_moves: egg_moves,
                            event_moves: event_moves,
                            trade_moves: trade_moves,
                            cross_gen_trade_moves: cross_gen_trade_moves
                        };
                    }
                }
                return ret;
            }

            function getLastEnemyPokemon(): ILastPokemonStats {
                const curIndex: number = mapper?.current?.properties?.battle?.opponent?.active_pokemon?.species_int?.value ?? -1;

                const cur_pokemon_stats: IPokemonStats | undefined = state?.modelClasses?.PokemonStatsLookup?.statsLookup?.get(curIndex);
                const cur_pokemon_moves: IPokemonMove | undefined = state?.modelClasses?.PokemonMovesLookup?.pokemonTmsLookup?.get(curIndex);
                if (cur_pokemon_stats && cur_pokemon_moves) {
                    if (typeof cur_pokemon_stats?.growth_rate == 'string' ||
                        typeof cur_pokemon_stats?.base_stats == 'string' ||
                        typeof cur_pokemon_stats?.types == 'string' ||
                        typeof cur_pokemon_moves?.levelup == 'string' ||
                        typeof cur_pokemon_moves?.tms == 'string' ||
                        typeof cur_pokemon_moves?.hms == 'string' ||
                        typeof cur_pokemon_moves?.mts == 'string'
                    ) {
                        if (lastEnemyPokemon != null) {
                            return lastEnemyPokemon;
                        } else {
                            const pokemon_stats: IPokemonStats | undefined = state?.modelClasses?.PokemonStatsLookup?.statsLookup?.get(0x00);
                            const pokemon_moves: IPokemonMove | undefined = state?.modelClasses?.PokemonMovesLookup?.pokemonTmsLookup?.get(0x00);
                            const index = 0x00;
                            const growth_rate: number = ((typeof pokemon_stats?.growth_rate == 'string') ? 0x00 : pokemon_stats?.growth_rate) ?? 0x00;
                            const empty_stats: IPokemonGen1BaseStats | IPokemonGen2BaseStats = (mapper?.current?.properties?.meta?.generation?.value == "1" || mapper?.current?.properties?.meta?.generation?.value == 1 || !mapper?.current?.properties?.meta?.generation?.value) ? { "hp": 0, "atk": 0, "def": 0, "spd": 0, "spc": 0 } : { "hp": 0, "atk": 0, "def": 0, "spd": 0, "sp_atk": 0, "sp_def": 0 };
                            const base_stats: IPokemonGen1BaseStats | IPokemonGen2BaseStats = ((typeof pokemon_stats?.base_stats == 'string') ? empty_stats : pokemon_stats?.base_stats) ?? empty_stats;
                            const types: number[] = ((typeof pokemon_stats?.types == 'string') ? [0] : pokemon_stats?.types) ?? [0];
                            const initial: number[] = ((typeof pokemon_moves?.initial == 'string') ? [] : pokemon_moves?.initial) ?? [];
                            const levelup: Map<number | string, string | number | number[]> = ((typeof pokemon_moves?.levelup == 'string') ? new Map<number | string, string | number | number[]>() : pokemon_moves?.levelup) ?? new Map<number | string, string | number | number[]>();
                            const tms: number[] = ((typeof pokemon_moves?.tms == 'string') ? [] : pokemon_moves?.tms) ?? [];
                            const hms: number[] = ((typeof pokemon_moves?.hms == 'string') ? [] : pokemon_moves?.hms) ?? [];
                            const mts: number[] = ((typeof pokemon_moves?.mts == 'string') ? [] : pokemon_moves?.mts) ?? [];
                            const egg_moves: number[] = ((typeof pokemon_moves?.egg_moves == 'string') ? [] : pokemon_moves?.egg_moves) ?? [];
                            const event_moves: number[] = ((typeof pokemon_moves?.event_moves == 'string') ? [] : pokemon_moves?.event_moves) ?? [];
                            const trade_moves: number[] = ((typeof pokemon_moves?.trade_moves == 'string') ? [] : pokemon_moves?.trade_moves) ?? [];
                            const cross_gen_trade_moves: number[] = ((typeof pokemon_moves?.cross_gen_trade_moves == 'string') ? [] : pokemon_moves?.cross_gen_trade_moves) ?? [];
                            return {
                                index: index,
                                growth_rate: growth_rate,
                                base_stats: base_stats,
                                types: types,
                                initial: initial,
                                levelup: levelup,
                                tms: tms,
                                hms: hms,
                                mts: mts,
                                egg_moves: egg_moves,
                                event_moves: event_moves,
                                trade_moves: trade_moves,
                                cross_gen_trade_moves: cross_gen_trade_moves
                            };
                        }
                    } else {
                        return {
                            index: curIndex,
                            growth_rate: cur_pokemon_stats?.growth_rate,
                            base_stats: cur_pokemon_stats?.base_stats,
                            types: cur_pokemon_stats?.types,
                            initial: cur_pokemon_moves?.initial,
                            levelup: cur_pokemon_moves?.levelup,
                            tms: cur_pokemon_moves?.tms,
                            hms: cur_pokemon_moves?.hms,
                            mts: cur_pokemon_moves?.mts,
                            egg_moves: cur_pokemon_moves?.egg_moves,
                            event_moves: cur_pokemon_moves?.event_moves,
                            trade_moves: cur_pokemon_moves?.trade_moves,
                            cross_gen_trade_moves: cur_pokemon_moves?.cross_gen_trade_moves
                        };
                    }
                } else {
                    if (lastEnemyPokemon != null) {
                        return lastEnemyPokemon;
                    } else {
                        const pokemon_stats: IPokemonStats | undefined = state?.modelClasses?.PokemonStatsLookup?.statsLookup?.get(0x00);
                        const pokemon_moves: IPokemonMove | undefined = state?.modelClasses?.PokemonMovesLookup?.pokemonTmsLookup?.get(0x00);
                        const index = 0x00;
                        const growth_rate: number = ((typeof pokemon_stats?.growth_rate == 'string') ? 0x00 : pokemon_stats?.growth_rate) ?? 0x00;
                        const empty_stats: IPokemonGen1BaseStats | IPokemonGen2BaseStats = (mapper?.current?.properties?.meta?.generation?.value == "1" || mapper?.current?.properties?.meta?.generation?.value == 1 || !mapper?.current?.properties?.meta?.generation?.value) ? { "hp": 0, "atk": 0, "def": 0, "spd": 0, "spc": 0 } : { "hp": 0, "atk": 0, "def": 0, "spd": 0, "sp_atk": 0, "sp_def": 0 };
                        const base_stats: IPokemonGen1BaseStats | IPokemonGen2BaseStats = ((typeof pokemon_stats?.base_stats == 'string') ? empty_stats : pokemon_stats?.base_stats) ?? empty_stats;
                        const types: number[] = ((typeof pokemon_stats?.types == 'string') ? [0] : pokemon_stats?.types) ?? [0];
                        const initial: number[] = ((typeof pokemon_moves?.initial == 'string') ? [] : pokemon_moves?.initial) ?? [];
                        const levelup: Map<number | string, string | number | number[]> = ((typeof pokemon_moves?.levelup == 'string') ? new Map<number | string, string | number | number[]>() : pokemon_moves?.levelup) ?? new Map<number | string, string | number | number[]>();
                        const tms: number[] = ((typeof pokemon_moves?.tms == 'string') ? [] : pokemon_moves?.tms) ?? [];
                        const hms: number[] = ((typeof pokemon_moves?.hms == 'string') ? [] : pokemon_moves?.hms) ?? [];
                        const mts: number[] = ((typeof pokemon_moves?.mts == 'string') ? [] : pokemon_moves?.mts) ?? [];
                        const egg_moves: number[] = ((typeof pokemon_moves?.egg_moves == 'string') ? [] : pokemon_moves?.egg_moves) ?? [];
                        const event_moves: number[] = ((typeof pokemon_moves?.event_moves == 'string') ? [] : pokemon_moves?.event_moves) ?? [];
                        const trade_moves: number[] = ((typeof pokemon_moves?.trade_moves == 'string') ? [] : pokemon_moves?.trade_moves) ?? [];
                        const cross_gen_trade_moves: number[] = ((typeof pokemon_moves?.cross_gen_trade_moves == 'string') ? [] : pokemon_moves?.cross_gen_trade_moves) ?? [];
                        return {
                            index: index,
                            growth_rate: growth_rate,
                            base_stats: base_stats,
                            types: types,
                            initial: initial,
                            levelup: levelup,
                            tms: tms,
                            hms: hms,
                            mts: mts,
                            egg_moves: egg_moves,
                            event_moves: event_moves,
                            trade_moves: trade_moves,
                            cross_gen_trade_moves: cross_gen_trade_moves
                        };
                    }
                }
            }
            //const [lastEnemyPokemon, setLastEnemyPokemon]: [ILastPokemonStats | null, React.Dispatch<React.SetStateAction<ILastPokemonStats | null>>] = useState<ILastPokemonStats | null>(null);

            mapper?.current?.properties?.screen?.column_0?.tiles?.[0]?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_1?.tiles?.[0]?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_2?.tiles?.[0]?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_3?.tiles?.[0]?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_4?.tiles?.[0]?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_5?.tiles?.[0]?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_6?.tiles?.[0]?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });

            mapper?.current?.properties?.screen?.column_7?.tiles?.[0]?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_8?.tiles?.[0]?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_9?.tiles?.[0]?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_10?.tiles?.[0]?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_11?.tiles?.[0]?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_12?.tiles?.[0]?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_13?.tiles?.[0]?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_14?.tiles?.[0]?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_15?.tiles?.[0]?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_16?.tiles?.[0]?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_17?.tiles?.[0]?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_18?.tiles?.[0]?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_19?.tiles?.[0]?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_20?.tiles?.[0]?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_21?.tiles?.[0]?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_22?.tiles?.[0]?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_23?.tiles?.[0]?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_24?.tiles?.[0]?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_25?.tiles?.[0]?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_26?.tiles?.[0]?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_27?.tiles?.[0]?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_28?.tiles?.[0]?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_29?.tiles?.[0]?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_30?.tiles?.[0]?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_31?.tiles?.[0]?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });


            mapper?.current?.properties?.overworld?.map_index?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.overworld?.x?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.overworld?.y?.change(async function (x: GameHookProperty<any>) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.battle?.mode?.change(async function (x: GameHookProperty<any>) {
                console.log("mapper?.current?.properties?.battle.mode:", mapper?.current?.properties?.battle.mode?.value);
                console.log("setInBattle:", getInBattle());
                setInBattle(getInBattle());
                console.log("setLastPokemonIndex:", getLastPokemon());
                setLastPokemon(getLastPokemon());
            });
            mapper?.current?.properties?.battle?.other.battle_start?.change(async function (x: GameHookProperty<any>) {
                console.log("mapper?.current?.properties?.battle?.other.battle_start:", mapper?.current?.properties?.battle?.other.battle_start?.value);
                console.log("setInBattle:", getInBattle());
                setInBattle(getInBattle());
                console.log("setLastPokemonIndex:", getLastPokemon());
                setLastPokemon(getLastPokemon());
            });
            mapper?.current?.properties?.battle?.other.battle_ended?.change(async function (x: GameHookProperty<any>) {
                console.log("mapper?.current?.properties?.battle?.other.battle_ended:", mapper?.current?.properties?.battle?.other.battle_ended?.value);
                console.log("setInBattle:", getInBattle());
                setInBattle(getInBattle());
                console.log("setLastPokemonIndex:", getLastPokemon());
                setLastPokemon(getLastPokemon());
            });
            mapper?.current?.properties?.battle.other?.first_mons_not_out_yet?.change(async function (x: GameHookProperty<any>) {
                console.log("mapper?.current?.properties?.battle.other?.first_mons_not_out_yet:", mapper?.current?.properties?.battle.other?.first_mons_not_out_yet?.value);
                console.log("setInBattle:", getInBattle());
                setInBattle(getInBattle());
                console.log("setLastPokemonIndex:", getLastPokemon());
                setLastPokemon(getLastPokemon());
            });
            mapper?.current?.properties?.battle.other?.action_result_or_took_battle_turn?.change(async function (x: GameHookProperty<any>) {
                console.log("mapper?.current?.properties?.battle.other?.action_result_or_took_battle_turn:", mapper?.current?.properties?.battle.other?.action_result_or_took_battle_turn?.value);
                console.log("setInBattle:", getInBattle());
                setInBattle(getInBattle());
                console.log("setLastPokemonIndex:", getLastPokemon());
                setLastPokemon(getLastPokemon());
            });
            mapper?.current?.properties?.battle.other?.battle_result?.change(async function (x: GameHookProperty<any>) {
                console.log("mapper?.current?.properties?.battle.other?.battle_result:", mapper?.current?.properties?.battle.other?.battle_result?.value);
                console.log("setInBattle:", getInBattle());
                setInBattle(getInBattle());
                console.log("setLastPokemonIndex:", getLastPokemon());
                setLastPokemon(getLastPokemon());
            });
            mapper?.current?.properties?.battle.other?.outcome_flags?.change(async function (x: GameHookProperty<any>) {
                console.log("mapper?.current?.properties?.battle.other?.outcome_flags:", mapper?.current?.properties?.battle.other?.outcome_flags?.value);
                console.log("setInBattle:", getInBattle());
                setInBattle(getInBattle());
                console.log("setLastPokemonIndex:", getLastPokemon());
                setLastPokemon(getLastPokemon());
            });
            mapper?.current?.properties?.battle.opponent?.cur_opponent?.change(async function (x: GameHookProperty<any>) {
                console.log("mapper?.current?.properties?.battle.opponent?.cur_opponent:", mapper?.current?.properties?.battle.opponent?.cur_opponent?.value);
                console.log("setInBattle:", getInBattle());
                setInBattle(getInBattle());
                console.log("setLastPokemonIndex:", getLastPokemon());
                setLastPokemon(getLastPokemon());
            });

            mapper?.current?.properties?.battle?.player?.party_position?.change(async function (x: GameHookProperty<any>) {
                console.log("mapper?.current?.properties?.battle?.player?.party_position:", mapper?.current?.properties?.battle?.player?.party_position?.value);
                console.log("setInBattle:", getInBattle());
                setInBattle(getInBattle());
                console.log("setLastPokemonIndex:", getLastPokemon());
                setLastPokemon(getLastPokemon());
            });

            mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_0?.change(async function (x: GameHookProperty<any>) {
                console.log("mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_0:", mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_0?.value);
                console.log("setInBattle:", getInBattle());
                setInBattle(getInBattle());
                console.log("setLastPokemonIndex:", getLastPokemon());
                setLastPokemon(getLastPokemon());
            });

            mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_1?.change(async function (x: GameHookProperty<any>) {
                console.log("mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_1:", mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_1?.value);
                console.log("setInBattle:", getInBattle());
                setInBattle(getInBattle());
                console.log("setLastPokemonIndex:", getLastPokemon());
                setLastPokemon(getLastPokemon());
            });

            mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_2?.change(async function (x: GameHookProperty<any>) {
                console.log("mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_2:", mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_2?.value);
                console.log("setInBattle:", getInBattle());
                setInBattle(getInBattle());
                console.log("setLastPokemonIndex:", getLastPokemon());
                setLastPokemon(getLastPokemon());
            });

            mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_3?.change(async function (x: GameHookProperty<any>) {
                console.log("mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_3:", mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_3?.value);
                console.log("setInBattle:", getInBattle());
                setInBattle(getInBattle());
                console.log("setLastPokemonIndex:", getLastPokemon());
                setLastPokemon(getLastPokemon());
            });

            mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_4?.change(async function (x: GameHookProperty<any>) {
                console.log("mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_4:", mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_4?.value);
                console.log("setInBattle:", getInBattle());
                setInBattle(getInBattle());
                console.log("setLastPokemonIndex:", getLastPokemon());
                setLastPokemon(getLastPokemon());
            });

            mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_5?.change(async function (x: GameHookProperty<any>) {
                console.log("mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_5:", mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_5?.value);
                console.log("setInBattle:", getInBattle());
                setInBattle(getInBattle());
                console.log("setLastPokemonIndex:", getLastPokemon());
                setLastPokemon(getLastPokemon());
            });

            mapper?.current?.properties?.battle?.player?.team_count?.change(async function (x: GameHookProperty<any>) {
                console.log("mapper?.current?.properties?.battle?.player?.team_count:", mapper?.current?.properties?.battle?.player?.team_count?.value);
                console.log("setLastPokemonIndex:", getLastPokemon());
                setLastPokemon(getLastPokemon());
            });
            mapper?.current?.properties?.player?.team_count?.change(async function (x: GameHookProperty<any>) {
                console.log("mapper?.current?.properties?.player?.team_count:", mapper?.current?.properties?.player?.team_count?.value);
                console.log("setLastPokemonIndex:", getLastPokemon());
                setLastPokemon(getLastPokemon());
            });

            for (var i = 0; i < mapper?.current?.properties?.battle?.player?.team?.length; i++) {
                (function (n: number): void {
                    mapper?.current?.properties?.battle?.player?.team?.[n]?.index_number?.change(async function (x: GameHookProperty<any>) {
                        console.log("mapper?.current?.properties?.battle?.player?.team?.[" + n.toString() + "]?.index_number:", mapper?.current?.properties?.battle?.player?.team?.[n]?.index_number?.value);
                        console.log("setLastPokemonIndex:", getLastPokemon());
                        setLastPokemon(getLastPokemon());
                    });
                })(i);
            }

            for (var i = 0; i < mapper?.current?.properties?.player?.team?.length; i++) {
                (function (n: number): void {
                    mapper?.current?.properties?.player?.team?.[n]?.index_number?.change(async function (x: GameHookProperty<any>) {
                        console.log("mapper?.current?.properties?.player?.team?.[" + n.toString() + "]?.index_number:", mapper?.current?.properties?.player?.team?.[n]?.index_number?.value);
                        console.log("setLastPokemonIndex:", getLastPokemon());
                        setLastPokemon(getLastPokemon());
                    });
                })(i);
            }

            mapper?.current?.properties?.battle?.opponent?.active_pokemon?.species_int.change(async function (x: GameHookProperty<any>) {
                console.log("mapper?.current?.properties?.battle?.opponent?.active_pokemon?.species_int:", mapper?.current?.properties?.battle?.opponent?.active_pokemon?.species_int?.value);
                console.log("setLastEnemyPokemon:", getLastEnemyPokemon());
                setLastEnemyPokemon(getLastEnemyPokemon());
            });

            console.log("setState:", { ...state, changeCallbacksSet: true, properties: properties });
            setState({ ...state, changeCallbacksSet: true, properties: properties });
            console.log("setInBattle:", getInBattle());
            setInBattle(getInBattle());
            console.log("setInTitle:", getInTitle());
            setInTitle(getInTitle());
            console.log("setLastPokemonIndex:", getLastPokemon());
            setLastPokemon(getLastPokemon());
            console.log("setLastEnemyPokemon:", getLastEnemyPokemon());
            setLastEnemyPokemon(getLastEnemyPokemon());
        }

        return () => {
        }
    }, [state.gamehookLoaded, state.pokemonModelSet]);

    useEffect(() => {
        if (state.pokemonModelSet && state.changeCallbacksSet && changes.length > 0) {
            var properties: { [key: string | number]: GameHookProperty<any> } = { ...state.properties };

            setChanges((changes : IChange[]) => {
                for (var change of changes) {
                    var key: string = change.key;
                    var val: GameHookProperty<any> = change.val;

                    //console.log("change detected:", "key:", key, "path:", path);

                    properties[key] = val;
                }
                return [];
            });

            setState((state : IState) => {
                console.log("setState:", { ...state, properties: properties });
                return { ...state, properties: properties };
            });
        }
    }, [changes]);

    useEffect(() => {
        const interval: NodeJS.Timeout = setInterval(() => setPlayTimeState((playTimeState : IPlayTimeState) => {
            var playTime: number;
            var lastPlayTime: number | null;

            if (!playTimeState.playTime) {
                playTime = 0;
            } else {
                playTime = playTimeState.playTime;
            }
            if (!playTimeState.lastPlayTime) {
                lastPlayTime = Date.now();
            } else {
                lastPlayTime = playTimeState.lastPlayTime;
            }
            var newPlayTime: number = Date.now();

            if (state.gamehookLoaded && state.isConnected && state.pokemonModelSet && state.changeCallbacksSet) {
                return { ...playTimeState, playTime: playTime + (newPlayTime - lastPlayTime), lastPlayTime: newPlayTime };
            }
            else {
                return { ...playTimeState, lastPlayTime: newPlayTime };
            }
        }), 5000);

        return () => clearInterval(interval);
    }, [state.gamehookLoaded, state.isConnected, state.pokemonModelSet, state.changeCallbacksSet]);

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
        <StateContext.Provider value={{ stateContext: { state, setState }, playTimeStateContext: { playTimeState, setPlayTimeState }, persistentStateContext: { persistentState, setPersistentState }, inBattleContext: { inBattle, setInBattle }, inTitleContext: { inTitle, setInTitle }, lastPokemonContext: { lastPokemon, setLastPokemon }, lastEnemyPokemonContext: { lastEnemyPokemon, setLastEnemyPokemon} }}>
            <table width="100%" style={{ height: '100%' }}>
                <tbody>
                    <tr style={{ width: '100%', height: '100%' }}>
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
                    <tr>
                        <td colSpan={3}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td colSpan={3}><input type="checkbox" id="newgame_is_reset" name="newgame_is_reset" checked={persistentState.newgame_is_reset} onClick={clickNewgameIsReset} /><label htmlFor="newgame_is_reset">Newgames are resets</label></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button id="reset_resets" name="reset_resets" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={resetResets}>Reset resets to 0</button>
                                        </td>
                                        <td>
                                            <button id="increment_resets" name="increment_resets" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={incrementResets}>Increment resets by 1</button>
                                        </td>
                                        <td>
                                            <button id="decrement_resets" name="decrement_resets" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={decrementResets}>Decrement resets by 1</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button id="reset_battles" name="reset_battles" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={resetBattles}>Reset battles to 0</button>
                                        </td>
                                        <td>
                                            <button id="increment_battles" name="increment_battles" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={incrementBattles}>Increment battles by 1</button>
                                        </td>
                                        <td>
                                            <button id="decrement_battles" name="decrement_battles" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={decrementBattles}>Decrement battles by 1</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={3}>
                                            <button id="reset_play_time" name="reset_play_time" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={resetPlayTime}>Reset playtime</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </StateContext.Provider>
    );
};

export default App;
