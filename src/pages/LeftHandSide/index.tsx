import * as styles from './LeftHandSide.module';
import * as baseStyles from '../../Base.module';
import * as typeStyles from '../../Types.module';
import CurrentPokemonImage from './Components/CurrentPokemonImage';
import CurrentPokemonStats from './Components/CurrentPokemonStats';
import CurrentBadges from './Components/CurrentBadges';
import CurrentPokemonMoves from './Components/CurrentPokemonMoves';
import { StateContext } from '../../StateContext';

import { FunctionComponent, useContext } from 'react';

const LeftHandSide: FunctionComponent = () => {
    const { stateContext, playTimeStateContext, persistentStateContext, inBattleContext, inTitleContext } = useContext(StateContext);
    const { state, setState } = stateContext;
    const { playTimeState, setPlayTimeState } = playTimeStateContext;
    const { persistentState, setPersistentState } = persistentStateContext;
    const { inBattle, setInBattle } = inBattleContext;
    const { inTitle, setInTitle } = inTitleContext;

    const in_battle = inBattle;

    if (!inBattle && inTitle) {
        return (
            <table width="100%" height="100%">
                <tbody>
                    <tr width="100%" height="50%">
                        <td valign="middle" align="center" height="100%" >
                        </td>
                    </tr>
                    <tr width="100%" height="20%">
                        <td>
                        </td>
                    </tr>
                    <tr width="100%" height="10%">
                        <td width="100%" height="100%">
                        </td>
                    </tr>
                    <tr width="100%" height="20%">
                        <td width="100%" height="100%">
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
    else if (!state?.properties?.["player.team_count"]?.value) {
        return (
            <table width="100%" height="100%" id="current_pokemon">
                <tbody>
                    <tr width="100%" height="50%">
                        <td valign="middle" align="center" height="100%" >
                        </td>
                    </tr>
                    <tr width="100%" height="20%">
                        <td>
                        </td>
                    </tr>
                    <tr width="100%" height="10%">
                        <td width="100%" height="100%">
                        </td>
                    </tr>
                    <tr width="100%" height="20%">
                        <td width="100%" height="100%">
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
    else {
        return (
            <table width="100%" height="100%" id="current_pokemon">
                <tbody>
                    <tr width="100%" height="50%">
                        <td valign="middle" align="center" height="100%" >
                            <CurrentPokemonImage />
                        </td>
                    </tr>
                    <tr width="100%" height="20%">
                        <td>
                            <CurrentPokemonStats />
                        </td>
                    </tr>
                    <tr width="100%" height="10%">
                        <td width="100%" height="100%">
                            <CurrentBadges />
                        </td>
                    </tr>
                    <tr width="100%" height="20%">
                        <td width="100%" height="100%">
                            <CurrentPokemonMoves />
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
};

export default LeftHandSide;
