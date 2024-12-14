import * as styles from './LeftHandSide.module';
import * as baseStyles from '../../Base.module';
import * as typeStyles from '../../Types.module';
import CurrentPokemonImage from './Components/CurrentPokemonImage';
import CurrentPokemonStats from './Components/CurrentPokemonStats';
import CurrentBadges from './Components/CurrentBadges';
import CurrentPokemonMoves from './Components/CurrentPokemonMoves';

import { FunctionComponent } from 'react';

const LeftHandSide: FunctionComponent = ({ gamehookLoaded, isConnected, pokemonModelSet, properties, playTime, gen, new_colors, modelClasses, in_battle }) => {
  return (
    <table width="100%" height="100%" id="current_pokemon">
	  <tbody>
      <tr width="100%" height="50%">
        <td valign="middle" align="center" height="100%" >
          <CurrentPokemonImage gamehookLoaded={gamehookLoaded} isConnected={isConnected} pokemonModelSet={pokemonModelSet} properties={properties} playTime={playTime} gen={gen} new_colors={new_colors} modelClasses={modelClasses} in_battle={in_battle} />
        </td>
      </tr>
      <tr width="100%" height="20%">
        <td>
          <CurrentPokemonStats gamehookLoaded={gamehookLoaded} isConnected={isConnected} pokemonModelSet={pokemonModelSet} properties={properties} playTime={playTime} gen={gen} new_colors={new_colors} modelClasses={modelClasses} in_battle={in_battle} />
        </td>
      </tr>
      <tr width="100%" height="10%">
        <td width="100%" height="100%">
		  <CurrentBadges gamehookLoaded={gamehookLoaded} isConnected={isConnected} pokemonModelSet={pokemonModelSet} properties={properties} playTime={playTime} gen={gen} new_colors={new_colors} modelClasses={modelClasses} in_battle={in_battle} />
        </td>
      </tr>
      <tr width="100%" height="20%">
        <td width="100%" height="100%">
          <CurrentPokemonMoves gamehookLoaded={gamehookLoaded} isConnected={isConnected} pokemonModelSet={pokemonModelSet} properties={properties} playTime={playTime} gen={gen} new_colors={new_colors} modelClasses={modelClasses} in_battle={in_battle} />
        </td>
      </tr>
	  </tbody>
    </table>
  );
};

export default LeftHandSide;
