import * as styles from './RightHandSide.module';
import * as baseStyles from '../../Base.module';
import * as typeStyles from '../../Types.module';
import Title from './Pages/Title'
import Overworld from './Pages/Overworld'
import Battle from './Pages/Battle'
import { StateContext } from '../../StateContext';

import { FunctionComponent, useContext } from 'react';

const RightHandSide: FunctionComponent = () => {
  const { stateContext, playTimeStateContext, in_battleContext, persistentStateContext } = useContext(StateContext);
  const { state, setState } = stateContext; 
  const { playTimeState, setPlayTimeState } = playTimeStateContext; 
  const { in_battle } = in_battleContext;
  const { persistentState, setPersistentState } = persistentStateContext;
  
  if(in_battle) {
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
