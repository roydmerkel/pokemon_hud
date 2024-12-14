import * as styles from './MiddlePanel.module';
import * as baseStyles from '../../Base.module';
import * as typeStyles from '../../Types.module';

import ResetsBattlesPlaytime from './Components/ResetsBattlesPlaytime';

import { FunctionComponent } from 'react';

const MiddlePanel: FunctionComponent = ({ gamehookLoaded, isConnected, pokemonModelSet, properties, playTime, gen, new_colors, modelClasses, in_battle }) => {
  return (
    <table width="100%" height="100%">
      <tbody>
        <tr width="100%" height="90%">
          <td>
            &nbsp;
          </td>
        </tr>
        <tr width="100%" height="10%" id="resets_panel">
          <td>
            <ResetsBattlesPlaytime gamehookLoaded={gamehookLoaded} isConnected={isConnected} pokemonModelSet={pokemonModelSet} properties={properties} playTime={playTime} gen={gen} new_colors={new_colors} new_colors={new_colors} modelClasses={modelClasses} in_battle={in_battle} />
          </td>
        </tr>
	  </tbody>
    </table>
  );
};

export default MiddlePanel;
