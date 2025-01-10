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

import { default as TitleFirstRowsCrystal } from './Model/Crystal/TitleFirstRows.tsx';
import { default as TitleFirstRowsGoldSilver } from './Model/GoldSilver/TitleFirstRows.tsx';
import { default as TitleFirstRowsYellow } from './Model/Yellow/TitleFirstRows.tsx';
import { default as TitleFirstRowsRedBlue } from './Model/RedBlue/TitleFirstRows.tsx';

window.signalR = signalR;

const App: FunctionComponent = () => {
    const mapper = useRef(null);
    const propertiesRef = useRef(null);
    const persistentStateRef = useRef(null);

    function getPersistentState() {
        const curPersistentStateString = window?.localStorage?.getItem("persistentState");
        var curPersistentState;

        if (curPersistentStateString) {
            curPersistentState = JSON.parse(curPersistentStateString);
        }
        else {

            curPersistentState = {
                newgame_is_reset: false,
                battles: -1,
                resets: -1,
            }
        }

        return curPersistentState;
    }
    const [persistentState, setPersistentState] = useState(getPersistentState())

    useEffect(() => {
        localStorage.setItem("persistentState", JSON.stringify(persistentState));
    }, [persistentState]);

    const clickNewgameIsReset = () => {
        setPersistentState((persistentState: { newgame_is_reset: boolean, battles: number, resets: number }) => { persistentState.newgame_is_reset = !persistentState.newgame_is_reset; return persistentState; });
    };

    const resetResets = () => {
        setPersistentState((persistentState: { newgame_is_reset: boolean, battles: number, resets: number }) => { persistentState.resets = 0; return persistentState; });
    };

    const incrementResets = () => {
        setPersistentState((persistentState: { newgame_is_reset: boolean, battles: number, resets: number }) => { persistentState.resets++; return persistentState; });
    };

    const decrementResets = () => {
        setPersistentState((persistentState: { newgame_is_reset: boolean, battles: number, resets: number }) => { persistentState.resets--; return persistentState; });
    };

    const resetBattles = () => {
        setPersistentState((persistentState: { newgame_is_reset: boolean, battles: number, resets: number }) => { persistentState.battles = 0; return persistentState; });
    };

    const incrementBattles = () => {
        setPersistentState((persistentState: { newgame_is_reset: boolean, battles: number, resets: number }) => { persistentState.battles++; return persistentState; });
    };

    const decrementBattles = () => {
        setPersistentState((persistentState: { newgame_is_reset: boolean, battles: number, resets: number }) => { persistentState.battles--; return persistentState; });
    };

    const setInObtainPokemonFlow = (value: boolean) => {
        setState((curState) => { return { ...curState, in_obtain_pokemon_flow: value } });
    };
    
    useEffect(
        () => { persistentStateRef.current = persistentState },
        [persistentState]
    )

    const [state, setState] = useState({
        gamehookLoaded: false,
        isConnected: false,
        pokemonModelSet: false,
        changeCallbacksSet: false,
        properties: null,
        new_colors: true,
        in_obtain_pokemon_flow: false,
        modelClasses: { TypeLookup: null, PokemonStatsLookup: null, SpeciesImageLookup: null, PokemonMechanics: null, TrainersLookup: null, SpeciesNameLookup: null, MoveLookup: null, PokemonMovesLookup: null, TmsLookup: null, HmsLookup: null, MtsLookup: null, TitleFirstRows: null }
    });

    const [inBattle, setInBattle] = useState(false);
    const [inTitle, setInTitle] = useState(false);

    const [changes, setChanges] = useState(new Array<{ path: string[], key: any, val: any }>());

    function getPlayTimeState() {
        const playTimeString = window?.localStorage?.getItem("playTime");
        const lastPlayTimeString = window?.localStorage?.getItem("lastPlayTime");
        const playTime = playTimeString ? parseInt(playTimeString) : 0;
        const lastPlayTime = lastPlayTimeString && lastPlayTimeString != "" ? parseInt(lastPlayTimeString) : null;

        return {
            playTime: playTime,
            lastPlayTime: lastPlayTime,
        };
    }
    const [playTimeState, setPlayTimeState] = useState(getPlayTimeState());

    useEffect(() => {
        localStorage.setItem("playTime", playTimeState.playTime.toString());
        localStorage.setItem("lastPlayTime", ((playTimeState.lastPlayTime != null) ? playTimeState.lastPlayTime.toString() : ""));
    }, [playTimeState]);

    useEffect(
        () => { propertiesRef.current = state.properties },
        [state.properties]
    )

    useBodyClass(`${styles.body}`);

    const resetPlayTime = () => {
        setPlayTimeState((playTimeState: { playTime: number, lastPlayTime: number | null }) => {
            return {
                playTime: 0,
                lastPlayTime: null,
            }
        });
    };

    function loadExternalJSScript(name, url, loadCallback, setStateFunction) {
        useEffect(() => {
            console.log("loadExternalJSScript!");
            setStateFunction(false);

            var resScript = null;
            function loadExternalJSScriptInternal(name, url, loadCallback, setStateFunction) {
                const script = document.createElement('script');

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

    loadExternalJSScript("gamehook", "http://localhost:8085/dist/gameHookMapperClient.js", () => { var newMapper = new GameHookMapperClient(); mapper.current = newMapper; console.log("newMapper:", mapper.current); setState({ ...state, gamehookLoaded: true }); }, (x) => { });

    useEffect(() => {
        //console.log("self:", self);
        //console.log("hh:", state, state.gamehookLoaded, mapper.current);
        if (state.gamehookLoaded && !state.isConnected) {
            var isConnected = false;
            var pokemonModelSet = false;
            var connect = async () => {
                console.log("connecting to gamehook.");
                await mapper.current.connect();

                console.log("connected!");
                isConnected = true;

                console.log("set models.");

                var newModelClasses = { ...state.modelClasses };
                console.log("mapper?.current?.properties?.meta?.generation:", mapper?.current?.properties?.meta?.generation?.value);
                console.log("mapper?.current?.properties?.meta?.game_type:", mapper?.current?.properties?.meta?.game_type?.value);
                switch (mapper?.current?.properties?.meta?.generation?.value) {
                    case "1":
                        switch (mapper?.current?.properties?.meta?.game_type?.value) {
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
                                newModelClasses.TitleFirstRows = TitleFirstRowsRedBlue;
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
                                newModelClasses.TitleFirstRows = TitleFirstRowsYellow;
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
                                newModelClasses.TitleFirstRows = TitleFirstRowsGoldSilver;

                                break;
                            case "Third Version":
                                newModelClasses.TypeLookup = TypeLookupCrystal;
                                newModelClasses.PokemonStatsLookup = PokemonStatsLookupCrystal;
                                newModelClasses.SpeciesImageLookup = SpeciesImageLookupCrystal;
                                newModelClasses.PokemonMechanics = PokemonMechanicsCrystal;
                                newModelClasses.TrainersLookup = TrainersLookupCrystal;
                                newModelClasses.SpeciesNameLookup = SpeciesNameLookupCrystal;
                                newModelClasses.MoveLookup = MoveLookupCrystal;
                                newModelClasses.PokemonMovesLookup = PokemonMovesLookupCrystal;
                                newModelClasses.TmsLookup = TmsLookupCrystal;
                                newModelClasses.HmsLookup = HmsLookupCrystal;
                                newModelClasses.MtsLookup = MtsLookupCrystal;
                                newModelClasses.TitleFirstRows = TitleFirstRowsCrystal;
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
            var properties = {};
            propertiesRef.current = properties;
            recursiveWalk(mapper.current.properties, (key: any, val: any, path: string[], parent: any): any => {
                var kv = "";
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
                    var doWatch = false;
                    for (var watch of WatchPaths) {
                        var idx = -1;
                        var curDoWatch = true;
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
                            var idx = -1;
                            var curDontWatch = true;
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
                        properties[kv] = getPropertyByPath(mapper.current.properties, path)[key];
                        parent[key].change((function (key: string): Promise<void> {
                            return async function (x) {
                                var change = { key: key, val: x };

                                //console.log("change?:", modelParent[key], x);
                                if (propertiesRef.current[key]?.value != x?.value) {
                                    //console.log("change':", x);
                                    setChanges(changes => { var changes = [...changes]; changes.push(change); return changes; });
                                }
                            }
                        })(kv));
                    }
                }
            });

            mapper.current.onTriggeredEvents = (event) => {
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
                        if (persistentStateRef.current.newgame_is_reset) {
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
                }
            }
            mapper.current.onImmediateReadValues = (property, immediateReadValues) => { console.log("onImmediateReadValues:", property, immediateReadValues); }

            function getInBattle() {
                var in_battle = false;

                var mode = mapper?.current?.properties?.battle.mode?.value;
                var battle_start = mapper?.current?.properties?.battle?.other.battle_start?.value;
                var battle_ended = mapper?.current?.properties?.battle?.other.battle_ended?.value;
                var first_mons_not_out_yet = mapper?.current?.properties?.battle.other?.first_mons_not_out_yet?.value;
                var action_result_or_took_battle_turn = mapper?.current?.properties?.battle.other?.action_result_or_took_battle_turn?.value;
                var battle_result = mapper?.current?.properties?.battle.other?.battle_result?.value;
                var outcome_flags = mapper?.current?.properties?.battle.other?.outcome_flags?.value;
                var cur_opponent = mapper?.current?.properties?.battle.opponent?.cur_opponent?.value;
                var party_position = mapper?.current?.properties?.battle?.player?.party_position?.value;

                var battle_participants_including_fainted_slot_0 = mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_0?.value;
                var battle_participants_including_fainted_slot_1 = mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_1?.value;
                var battle_participants_including_fainted_slot_2 = mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_2?.value;
                var battle_participants_including_fainted_slot_3 = mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_3?.value;
                var battle_participants_including_fainted_slot_4 = mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_4?.value;
                var battle_participants_including_fainted_slot_5 = mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_5?.value;

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

                in_battle = (mode != null && mode != 0 && mode != "None")
                    && (battle_start != 0 ||
                        (first_mons_not_out_yet === undefined &&
                            (battle_participants_including_fainted_slot_0 ||
                                battle_participants_including_fainted_slot_1 ||
                                battle_participants_including_fainted_slot_2 ||
                                battle_participants_including_fainted_slot_3 ||
                                battle_participants_including_fainted_slot_4 ||
                                battle_participants_including_fainted_slot_5)) ||
                        (first_mons_not_out_yet !== undefined && mode != "Trainer" && party_position))
                    && (battle_ended == null || battle_ended == 0)
                    && (first_mons_not_out_yet == null || first_mons_not_out_yet == 0 || party_position)
                    && (action_result_or_took_battle_turn == null || action_result_or_took_battle_turn == 0)
                    && (battle_result == null || battle_result == 0)
                    && (outcome_flags == null || outcome_flags == 0)
                    && (cur_opponent == null || cur_opponent != 0 || (mode != "Trainer" && mode != "None" && mode != 0 && mode != null));
                //console.log("in_battle:", in_battle);

                return in_battle;
            }

            function getInTitle() {
                var tile0 = mapper?.current?.properties?.screen?.column_0?.tiles?.[0]?.value;
                var tile1 = mapper?.current?.properties?.screen?.column_1?.tiles?.[0]?.value;
                var tile2 = mapper?.current?.properties?.screen?.column_2?.tiles?.[0]?.value;
                var tile3 = mapper?.current?.properties?.screen?.column_3?.tiles?.[0]?.value;
                var tile4 = mapper?.current?.properties?.screen?.column_4?.tiles?.[0]?.value;
                var tile5 = mapper?.current?.properties?.screen?.column_5?.tiles?.[0]?.value;
                var tile6 = mapper?.current?.properties?.screen?.column_6?.tiles?.[0]?.value;
                var tile7 = mapper?.current?.properties?.screen?.column_7?.tiles?.[0]?.value;
                var tile8 = mapper?.current?.properties?.screen?.column_8?.tiles?.[0]?.value;
                var tile9 = mapper?.current?.properties?.screen?.column_9?.tiles?.[0]?.value;
                var tile10 = mapper?.current?.properties?.screen?.column_10?.tiles?.[0]?.value;
                var tile11 = mapper?.current?.properties?.screen?.column_11?.tiles?.[0]?.value;
                var tile12 = mapper?.current?.properties?.screen?.column_12?.tiles?.[0]?.value;
                var tile13 = mapper?.current?.properties?.screen?.column_13?.tiles?.[0]?.value;
                var tile14 = mapper?.current?.properties?.screen?.column_14?.tiles?.[0]?.value;
                var tile15 = mapper?.current?.properties?.screen?.column_15?.tiles?.[0]?.value;
                var tile16 = mapper?.current?.properties?.screen?.column_16?.tiles?.[0]?.value;
                var tile17 = mapper?.current?.properties?.screen?.column_17?.tiles?.[0]?.value;
                var tile18 = mapper?.current?.properties?.screen?.column_18?.tiles?.[0]?.value;
                var tile19 = mapper?.current?.properties?.screen?.column_19?.tiles?.[0]?.value;
                var tile20 = mapper?.current?.properties?.screen?.column_20?.tiles?.[0]?.value;
                var tile21 = mapper?.current?.properties?.screen?.column_21?.tiles?.[0]?.value;
                var tile22 = mapper?.current?.properties?.screen?.column_22?.tiles?.[0]?.value;
                var tile23 = mapper?.current?.properties?.screen?.column_23?.tiles?.[0]?.value;
                var tile24 = mapper?.current?.properties?.screen?.column_24?.tiles?.[0]?.value;
                var tile25 = mapper?.current?.properties?.screen?.column_25?.tiles?.[0]?.value;
                var tile26 = mapper?.current?.properties?.screen?.column_26?.tiles?.[0]?.value;
                var tile27 = mapper?.current?.properties?.screen?.column_27?.tiles?.[0]?.value;
                var tile28 = mapper?.current?.properties?.screen?.column_28?.tiles?.[0]?.value;
                var tile29 = mapper?.current?.properties?.screen?.column_29?.tiles?.[0]?.value;
                var tile30 = mapper?.current?.properties?.screen?.column_30?.tiles?.[0]?.value;
                var tile31 = mapper?.current?.properties?.screen?.column_31?.tiles?.[0]?.value;

                var map_index = mapper?.current?.properties?.overworld?.map_index?.value;
                var x = mapper?.current?.properties?.overworld?.x?.value;
                var y = mapper?.current?.properties?.overworld?.y?.value;

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

                var firstRow = [
                    tile0, tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9,
                    tile10, tile11, tile12, tile13, tile14, tile15, tile16, tile17, tile18, tile19,
                    tile20, tile21, tile22, tile23, tile24, tile25, tile26, tile27, tile28, tile29,
                    tile30, tile31,
                ];

                return _.findIndex(state?.modelClasses?.TitleFirstRows?.titleFirstRows, function (o) { return _.isEqual(o, firstRow); }) != -1;
            }
            //const [inTitle, setInTitle] = useState(false);

            mapper?.current?.properties?.screen?.column_0?.tiles?.[0]?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_1?.tiles?.[0]?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_2?.tiles?.[0]?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_3?.tiles?.[0]?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_4?.tiles?.[0]?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_5?.tiles?.[0]?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_6?.tiles?.[0]?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });

            mapper?.current?.properties?.screen?.column_7?.tiles?.[0]?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_8?.tiles?.[0]?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_9?.tiles?.[0]?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_10?.tiles?.[0]?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_11?.tiles?.[0]?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_12?.tiles?.[0]?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_13?.tiles?.[0]?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_14?.tiles?.[0]?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_15?.tiles?.[0]?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_16?.tiles?.[0]?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_17?.tiles?.[0]?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_18?.tiles?.[0]?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_19?.tiles?.[0]?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_20?.tiles?.[0]?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_21?.tiles?.[0]?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_22?.tiles?.[0]?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_23?.tiles?.[0]?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_24?.tiles?.[0]?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_25?.tiles?.[0]?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_26?.tiles?.[0]?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_27?.tiles?.[0]?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_28?.tiles?.[0]?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_29?.tiles?.[0]?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_30?.tiles?.[0]?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.screen?.column_31?.tiles?.[0]?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });


            mapper?.current?.properties?.overworld?.map_index?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.overworld?.x?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.overworld?.y?.change(async function (x) {
                console.log("setInTitle:", getInTitle());
                setInTitle(getInTitle());
            });
            mapper?.current?.properties?.battle?.mode?.change(async function (x) {
                console.log("mapper?.current?.properties?.battle.mode:", mapper?.current?.properties?.battle.mode?.value);
                console.log("setInBattle:", getInBattle());
                setInBattle(getInBattle());
            });
            mapper?.current?.properties?.battle?.other.battle_start?.change(async function (x) {
                console.log("mapper?.current?.properties?.battle?.other.battle_start:", mapper?.current?.properties?.battle?.other.battle_start?.value);
                console.log("setInBattle:", getInBattle());
                setInBattle(getInBattle());
            });
            mapper?.current?.properties?.battle?.other.battle_ended?.change(async function (x) {
                console.log("mapper?.current?.properties?.battle?.other.battle_ended:", mapper?.current?.properties?.battle?.other.battle_ended?.value);
                console.log("setInBattle:", getInBattle());
                setInBattle(getInBattle());
            });
            mapper?.current?.properties?.battle.other?.first_mons_not_out_yet?.change(async function (x) {
                console.log("mapper?.current?.properties?.battle.other?.first_mons_not_out_yet:", mapper?.current?.properties?.battle.other?.first_mons_not_out_yet?.value);
                console.log("setInBattle:", getInBattle());
                setInBattle(getInBattle());
            });
            mapper?.current?.properties?.battle.other?.action_result_or_took_battle_turn?.change(async function (x) {
                console.log("mapper?.current?.properties?.battle.other?.action_result_or_took_battle_turn:", mapper?.current?.properties?.battle.other?.action_result_or_took_battle_turn?.value);
                console.log("setInBattle:", getInBattle());
                setInBattle(getInBattle());
            });
            mapper?.current?.properties?.battle.other?.battle_result?.change(async function (x) {
                console.log("mapper?.current?.properties?.battle.other?.battle_result:", mapper?.current?.properties?.battle.other?.battle_result?.value);
                console.log("setInBattle:", getInBattle());
                setInBattle(getInBattle());
            });
            mapper?.current?.properties?.battle.other?.outcome_flags?.change(async function (x) {
                console.log("mapper?.current?.properties?.battle.other?.outcome_flags:", mapper?.current?.properties?.battle.other?.outcome_flags?.value);
                console.log("setInBattle:", getInBattle());
                setInBattle(getInBattle());
            });
            mapper?.current?.properties?.battle.opponent?.cur_opponent?.change(async function (x) {
                console.log("mapper?.current?.properties?.battle.opponent?.cur_opponent:", mapper?.current?.properties?.battle.opponent?.cur_opponent?.value);
                console.log("setInBattle:", getInBattle());
                setInBattle(getInBattle());
            });

            mapper?.current?.properties?.battle?.player?.party_position?.change(async function (x) {
                console.log("mapper?.current?.properties?.battle?.player?.party_position:", mapper?.current?.properties?.battle?.player?.party_position?.value);
                console.log("setInBattle:", getInBattle());
                setInBattle(getInBattle());
            });

            mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_0?.change(async function (x) {
                console.log("mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_0:", mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_0?.value);
                console.log("setInBattle:", getInBattle());
                setInBattle(getInBattle());
            });

            mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_1?.change(async function (x) {
                console.log("mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_1:", mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_1?.value);
                console.log("setInBattle:", getInBattle());
                setInBattle(getInBattle());
            });

            mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_2?.change(async function (x) {
                console.log("mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_2:", mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_2?.value);
                console.log("setInBattle:", getInBattle());
                setInBattle(getInBattle());
            });

            mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_3?.change(async function (x) {
                console.log("mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_3:", mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_3?.value);
                console.log("setInBattle:", getInBattle());
                setInBattle(getInBattle());
            });

            mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_4?.change(async function (x) {
                console.log("mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_4:", mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_4?.value);
                console.log("setInBattle:", getInBattle());
                setInBattle(getInBattle());
            });

            mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_5?.change(async function (x) {
                console.log("mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_5:", mapper?.current?.properties?.battle.other?.battle_participants_including_fainted_slot_5?.value);
                console.log("setInBattle:", getInBattle());
                setInBattle(getInBattle());
            });

            console.log("setState:", { ...state, changeCallbacksSet: true, properties: properties });
            setState({ ...state, changeCallbacksSet: true, properties: properties });
            console.log("setInBattle:", getInBattle());
            setInBattle(getInBattle());
            console.log("setInTitle:", getInTitle());
            setInTitle(getInTitle());
        }

        return () => {
        }
    }, [state.gamehookLoaded, state.pokemonModelSet]);

    useEffect(() => {
        if (state.pokemonModelSet && state.changeCallbacksSet && changes.length > 0) {
            var properties = { ...state.properties };

            setChanges(changes => {
                for (var change of changes) {
                    var key = change.key;
                    var val = change.val;

                    //console.log("change detected:", "key:", key, "path:", path);

                    properties[key] = val;
                }
                return [];
            });

            setState(state => {
                console.log("setState:", { ...state, properties: properties });
                return { ...state, properties: properties };
            });
        }
    }, [changes]);

    useEffect(() => {
        const interval = setInterval(() => setPlayTimeState(playTimeState => {
            var playTime;
            var lastPlayTime;

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
            var newPlayTime = Date.now();

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
        <StateContext.Provider value={{ stateContext: { state, setState }, playTimeStateContext: { playTimeState, setPlayTimeState }, persistentStateContext: { persistentState, setPersistentState }, inBattleContext: { inBattle, setInBattle }, inTitleContext: { inTitle, setInTitle } }}>
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
                    <tr>
                        <td colSpan={3}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td colSpan={3}><input type="checkbox" id="newgame_is_reset" name="newgame_is_reset" checked={persistentState.newgame_is_reset} onClick={clickNewgameIsReset} /><label htmlFor="newgame_is_reset">Newgames are resets</label></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button id="reset_resets" name="reset_resets" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={resetResets}>Reset resets to 0</button>
                                        </td>
                                        <td>
                                            <button id="increment_resets" name="increment_resets" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={incrementResets}>Increment resets by 1</button>
                                        </td>
                                        <td>
                                            <button id="decrement_resets" name="decrement_resets" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={decrementResets}>Decrement resets by 1</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button id="reset_battles" name="reset_battles" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={resetBattles}>Reset battles to 0</button>
                                        </td>
                                        <td>
                                            <button id="increment_battles" name="increment_battles" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={incrementBattles}>Increment battles by 1</button>
                                        </td>
                                        <td>
                                            <button id="decrement_battles" name="decrement_battles" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={decrementBattles}>Decrement battles by 1</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={3}>
                                            <button id="reset_play_time" name="reset_play_time" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={resetPlayTime}>Reset playtime</button>
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
