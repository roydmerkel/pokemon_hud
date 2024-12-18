import * as styles from './RightHandSide.module';
import * as baseStyles from '../../Base.module';
import * as typeStyles from '../../Types.module';
import Title from './Pages/Title'
import Overworld from './Pages/Overworld'
import Battle from './Pages/Battle'
import { StateContext } from '../../StateContext';

import { FunctionComponent, useContext } from 'react';

const RightHandSide: FunctionComponent = () => {
    const { stateContext, playTimeStateContext, persistentStateContext, inBattleContext } = useContext(StateContext);
    const { state, setState } = stateContext;
    const { playTimeState, setPlayTimeState } = playTimeStateContext;
    const { persistentState, setPersistentState } = persistentStateContext;
    const { inBattle, setInBattle } = inBattleContext;

    const in_battle = inBattle;

    if (in_battle) {
        return (
            <Battle />
        );
    }
    else if (1 == 1) {
        return (
            <Overworld />
        );
    }
    else {
        return (
            <Title />
        );
    }
};

export default RightHandSide;
