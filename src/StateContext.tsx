import { createContext, Context } from 'react';

import IStateContext from 'IStateContext';

export const StateContext: Context<IStateContext> = createContext<IStateContext>({
    stateContext: { state: null, setState: null },
    playTimeStateContext: { playTimeState: null, setPlayTimeState: null },
    persistentStateContext: { persistentState: null, setPersistentState: null },
    inBattleContext: { inBattle: null, setInBattle: null },
    inTitleContext: { inTitle: null, setInTitle: null },
    lastPokemonContext: { lastPokemon: null, setLastPokemon: null },
    lastEnemyPokemonContext: { lastEnemyPokemon: null, setLastEnemyPokemon: null }
});
