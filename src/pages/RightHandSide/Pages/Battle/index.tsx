import EnemyPokemon from './Components/EnemyPokemon';

import { FunctionComponent } from 'react';

const Battle: FunctionComponent = ({ gamehookLoaded, isConnected, pokemonModelSet, properties, playTime, gen, new_colors, modelClasses, in_battle }) => {
  return (
    <table width="100%" height="100%" id="battle_rhs">
      <tbody>
        <tr width="100%" height="100%">
          <td width="100%" height="100%">
            <EnemyPokemon gamehookLoaded={gamehookLoaded} isConnected={isConnected} pokemonModelSet={pokemonModelSet} properties={properties} playTime={playTime} gen={gen} new_colors={new_colors} modelClasses={modelClasses} in_battle={in_battle} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Battle;
