import * as baseStyles from '../../../Base.module';
import * as typeStyles from '../../../Types.module';

import { FunctionComponent, useContext, Dispatch, SetStateAction } from 'react';
import { StateContext } from '../../../StateContext';
import { ILastPokemonStats, IStateContext } from '../../../IStateContext';
import { IState } from '../../../IState';
import { IPlayTimeState } from '../../../IPlayTimeState';
import { IPersistentState } from '../../../IPersistentState';

const ResetsBattlesPlaytime: FunctionComponent = () => {
    const { stateContext, playTimeStateContext, persistentStateContext, inBattleContext, inTitleContext, lastPokemonContext, lastEnemyPokemonContext }: IStateContext = useContext<IStateContext>(StateContext);
    const { state, setState }: { state: IState | null, setState: Dispatch<SetStateAction<IState>> | null } = stateContext;
    const { playTimeState, setPlayTimeState }: { playTimeState: IPlayTimeState | null, setPlayTimeState: Dispatch<SetStateAction<IPlayTimeState>> | null } = playTimeStateContext;
    const { persistentState, setPersistentState }: { persistentState: IPersistentState | null, setPersistentState: Dispatch<SetStateAction<IPersistentState>> | null } = persistentStateContext;
    const { inBattle, setInBattle }: { inBattle: boolean | null, setInBattle: Dispatch<SetStateAction<boolean>> | null } = inBattleContext;
    const { inTitle, setInTitle }: { inTitle: boolean | null, setInTitle: Dispatch<SetStateAction<boolean>> | null } = inTitleContext;
    const { lastPokemon, setLastPokemon }: { lastPokemon: ILastPokemonStats | null, setLastPokemon: Dispatch<SetStateAction<ILastPokemonStats | null>> | null } = lastPokemonContext;
    const { lastEnemyPokemon, setLastEnemyPokemon }: { lastEnemyPokemon: ILastPokemonStats | null, setLastEnemyPokemon: Dispatch<SetStateAction<ILastPokemonStats | null>> | null } = lastEnemyPokemonContext;

    const in_battle: boolean | null = inBattle;

    var hours: number = (state?.properties?.["game_time.hours"]?.value) ? state?.properties?.["game_time.hours"]?.value : 0;
    var hoursStr: string;
    if (hours < 10) {
        hoursStr = "00" + hours.toString();
    } else if (hours < 100) {
        hoursStr = "0" + hours.toString();
    } else {
        hoursStr = hours.toString();
    }
    var minutes: number = (state?.properties?.["game_time.minutes"]?.value) ? state?.properties?.["game_time.minutes"]?.value : 0;
    var minutesStr: string;
    if (minutes < 10) {
        minutesStr = "0" + minutes.toString();
    } else {
        minutesStr = minutes.toString();
    }
    var seconds: number = (state?.properties?.["game_time.seconds"]?.value) ? state?.properties?.["game_time.seconds"]?.value : 0;
    var secondsStr: string;
    if (seconds < 10) {
        secondsStr = "0" + seconds.toString();
    } else {
        secondsStr = seconds.toString();
    }
    var frames: number = (state?.properties?.["game_time.frames"]?.value) ? state?.properties?.["game_time.frames"]?.value : 0;
    var framesStr: string;
    frames = Math.trunc(frames * 1000 / 60)
    if (frames < 10) {
        framesStr = "00" + frames.toString();
    } else if (frames < 100) {
        framesStr = "0" + frames.toString();
    } else {
        framesStr = frames.toString();
    }
    var playTimeVal: number = playTimeState && playTimeState.playTime ? playTimeState.playTime : 0;
    var playTimeMS: string = (playTimeVal % 1000).toFixed(0);
    var playTimeSec: string = ((playTimeVal / 1000) % 60).toFixed(0);
    var playTimeMin: string = ((playTimeVal / (1000 * 60)) % 60).toFixed(0);
    var playTimeHours: string = (playTimeVal / (1000 * 60 * 60)).toFixed(0);
    if (Number.parseInt(playTimeHours) < 10) {
        playTimeHours = "00" + playTimeHours.toString();
    } else if (Number.parseInt(playTimeHours) < 100) {
        playTimeHours = "0" + playTimeHours.toString();
    } else {
        playTimeHours = playTimeHours.toString();
    }
    if (Number.parseInt(playTimeMin) < 10) {
        playTimeMin = "0" + playTimeMin.toString();
    } else {
        playTimeMin = playTimeMin.toString();
    }
    if (Number.parseInt(playTimeSec) < 10) {
        playTimeSec = "0" + playTimeSec.toString();
    } else {
        playTimeSec = playTimeSec.toString();
    }
    if (Number.parseInt(playTimeMS) < 10) {
        playTimeMS = "00" + playTimeMS.toString();
    } else if (Number.parseInt(playTimeMS) < 100) {
        playTimeMS = "0" + playTimeMS.toString();
    } else {
        playTimeMS = playTimeMS.toString();
    }
    return (
        <table style={{ width: "100%", height: "100%" }}>
            <tbody>
                <tr>
                    <td width="10%" height="100%">
                    </td>
                    <td width="80%" height="100%" className={`${baseStyles.container}`}>
                        <table style={{ width: "100%", height: "100%" }}>
                            <tbody>
                                <tr>
                                    <td width="10%">
                                        <p>BATTLES:</p>
                                    </td>
                                    <td width="10%">
                                        <p id="battle_count">{persistentState ? persistentState.battles : -1}</p>
                                    </td>
                                    <td width="10%">
                                        <p>RESETS:</p>
                                    </td>
                                    <td width="15%">
                                        <p id="reset_count">{persistentState ? persistentState.resets : -1}</p>
                                    </td>
                                    <td width="10%">
                                        &nbsp;
                                    </td>
                                    <td width="45%">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p id="play_time">TIME:    {playTimeHours}:{playTimeMin}:{playTimeSec}.{playTimeMS}</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p id="game_time">GAME TIME:    {hoursStr}:{minutesStr}:{secondsStr}.{framesStr}</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    <td width="10%" height="100%">
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default ResetsBattlesPlaytime;
