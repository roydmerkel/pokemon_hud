import PokemonMoves from './Components/PokemonMoves'

import { FunctionComponent } from 'react';

const Overworld: FunctionComponent = ({ gamehookLoaded, isConnected, pokemonModelSet, properties, playTime, gen, new_colors, modelClasses, in_battle }) => {
  return (
    <table width="100%" height="100%" id="overworld_rhs">
      <tr width="100%" height="100%">
        <td width="100%" height="100%">
          <PokemonMoves gamehookLoaded={gamehookLoaded} isConnected={isConnected} pokemonModelSet={pokemonModelSet} properties={properties} playTime={playTime} gen={gen} new_colors={new_colors} modelClasses={modelClasses} in_battle={in_battle} />
        </td>
      </tr>
    </table>
  );
};

export default Overworld;
