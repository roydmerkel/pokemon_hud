import * as styles from './RightHandSide.module';
import * as baseStyles from '../../Base.module';
import * as typeStyles from '../../Types.module';
import Title from './Pages/Title'
import Overworld from './Pages/Overworld'
import Battle from './Pages/Battle'

import { FunctionComponent } from 'react';

const RightHandSide: FunctionComponent = ({ gamehookLoaded, isConnected, pokemonModelSet, properties, playTime, gen, new_colors, modelClasses, in_battle }) => {
  if(in_battle) {
    return (
      <Battle gamehookLoaded={gamehookLoaded} isConnected={isConnected} pokemonModelSet={pokemonModelSet} properties={properties} playTime={playTime} gen={gen} new_colors={new_colors} modelClasses={modelClasses} in_battle={in_battle} />
    );
  }
  else if (1 == 1) {
    return (
      <Overworld gamehookLoaded={gamehookLoaded} isConnected={isConnected} pokemonModelSet={pokemonModelSet} properties={properties} playTime={playTime} gen={gen} new_colors={new_colors} modelClasses={modelClasses} in_battle={in_battle} />
    );
  }
  else {
    return (
      <Title gamehookLoaded={gamehookLoaded} isConnected={isConnected} pokemonModelSet={pokemonModelSet} properties={properties} playTime={playTime} gen={gen} new_colors={new_colors} modelClasses={modelClasses} in_battle={in_battle} />
    );
  }
};

export default RightHandSide;
