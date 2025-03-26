import IState from 'IState';
import IPlayTimeState from 'IPlayTimeState';
import IPersistentState from 'IPersistentState';

import { Dispatch, SetStateAction } from 'react';
import { IPokemonGen1BaseStats, IPokemonGen2BaseStats } from './Model/Interfaces/IPokemonStats';

export interface ILastPokemonStats {
    index: number,
    growth_rate: number,
    base_stats: IPokemonGen2BaseStats | IPokemonGen1BaseStats,
    types: number[],
    initial: number[],
    levelup: Map<number | string, string | number | number[]>,
    tms: number[],
    hms: number[],
    mts: number[],
    egg_moves: number[],
    event_moves: number[],
    trade_moves: number[],
    cross_gen_trade_moves: number[]
};

export interface IStateContext {
    stateContext: { state: IState | null, setState: Dispatch<SetStateAction<IState>> | null },
    playTimeStateContext: { playTimeState: IPlayTimeState | null, setPlayTimeState: Dispatch<SetStateAction<IPlayTimeState>> | null },
    persistentStateContext: { persistentState: IPersistentState | null, setPersistentState: Dispatch<SetStateAction<IPersistentState>> | null },
    inBattleContext: { inBattle: boolean | null, setInBattle: Dispatch<SetStateAction<boolean>> | null },
    inTitleContext: { inTitle: boolean | null, setInTitle: Dispatch<SetStateAction<boolean>> | null },
    lastPokemonContext: { lastPokemon: ILastPokemonStats | null, setLastPokemon: Dispatch<SetStateAction<ILastPokemonStats | null>> | null },
    lastEnemyPokemonContext: { lastEnemyPokemon: ILastPokemonStats | null, setLastEnemyPokemon: Dispatch<SetStateAction<ILastPokemonStats | null>> | null }
}

export default IStateContext;
