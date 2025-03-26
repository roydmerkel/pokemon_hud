import * as styles from './RightHandSide.module';
import * as baseStyles from '../../Base.module';
import * as typeStyles from '../../Types.module';
import Title from './Pages/Title'
import Overworld from './Pages/Overworld'
import Battle from './Pages/Battle'
import { StateContext } from '../../StateContext';
import { ILastPokemonStats, IStateContext } from '../../IStateContext';
import { IState } from '../../IState';
import { IPlayTimeState } from '../../IPlayTimeState';
import { IPersistentState } from '../../IPersistentState';

import { FunctionComponent, useContext, Dispatch, SetStateAction } from 'react';

const RightHandSide: FunctionComponent = () => {
    const { stateContext, playTimeStateContext, persistentStateContext, inBattleContext, inTitleContext, lastPokemonContext, lastEnemyPokemonContext }: IStateContext = useContext<IStateContext>(StateContext);
    const { state, setState }: { state: IState | null, setState: Dispatch<SetStateAction<IState>> | null } = stateContext;
    const { playTimeState, setPlayTimeState }: { playTimeState: IPlayTimeState | null, setPlayTimeState: Dispatch<SetStateAction<IPlayTimeState>> | null } = playTimeStateContext;
    const { persistentState, setPersistentState }: { persistentState: IPersistentState | null, setPersistentState: Dispatch<SetStateAction<IPersistentState>> | null } = persistentStateContext;
    const { inBattle, setInBattle }: { inBattle: boolean | null, setInBattle: Dispatch<SetStateAction<boolean>> | null } = inBattleContext;
    const { inTitle, setInTitle }: { inTitle: boolean | null, setInTitle: Dispatch<SetStateAction<boolean>> | null } = inTitleContext;
    const { lastPokemon, setLastPokemon }: { lastPokemon: ILastPokemonStats | null, setLastPokemon: Dispatch<SetStateAction<ILastPokemonStats | null>> | null } = lastPokemonContext;
    const { lastEnemyPokemon, setLastEnemyPokemon }: { lastEnemyPokemon: ILastPokemonStats | null, setLastEnemyPokemon: Dispatch<SetStateAction<ILastPokemonStats | null>> | null } = lastEnemyPokemonContext;

    const in_battle = inBattle;

    if (in_battle) {
        return (
            <Battle />
        );
    } else if (inTitle ||
        (!state?.properties?.["player.team_count"]?.value) ||
        (state?.properties?.["player.team_count"]?.value == 1 && state?.in_obtain_pokemon_flow)) {
        return (
            <Title />
        );
    }
    else {
        return (
            <Overworld />
        );
    }
};

export default RightHandSide;
