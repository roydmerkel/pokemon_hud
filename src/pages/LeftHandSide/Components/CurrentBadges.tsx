import * as baseStyles from '../../../Base.module';
import * as typeStyles from '../../../Types.module';
import { StateContext } from '../../../StateContext'

import { FunctionComponent, useContext } from 'react';

const CurrentBadges: FunctionComponent = () => {
    const { stateContext, playTimeStateContext, persistentStateContext, inBattleContext } = useContext(StateContext);
    const { state, setState } = stateContext;
    const { playTimeState, setPlayTimeState } = playTimeStateContext;
    const { persistentState, setPersistentState } = persistentStateContext;
    const { inBattle, setInBattle } = inBattleContext;

    const in_battle = inBattle;

    return (
        <table width="100%" height="100%">
            <tbody>
                <tr width="100%" height="50%">
                    <td><img className={(state?.properties?.["player.badges.0"]?.value) ? `${baseStyles.show_image}` : `${baseStyles.hide_image}`} src="https://static.merkelhaus.us/overlayimages/badges/75px-Boulder_Badge.png" /></td>
                    <td><img className={(state?.properties?.["player.badges.1"]?.value) ? `${baseStyles.show_image}` : `${baseStyles.hide_image}`} src="https://static.merkelhaus.us/overlayimages/badges/75px-Cascade_Badge.png" /></td>
                    <td><img className={(state?.properties?.["player.badges.2"]?.value) ? `${baseStyles.show_image}` : `${baseStyles.hide_image}`} src="https://static.merkelhaus.us/overlayimages/badges/75px-Thunder_Badge.png" /></td>
                    <td><img className={(state?.properties?.["player.badges.3"]?.value) ? `${baseStyles.show_image}` : `${baseStyles.hide_image}`} src="https://static.merkelhaus.us/overlayimages/badges/75px-Rainbow_Badge.png" /></td>
                </tr>
                <tr width="100%" height="50%">
                    <td><img className={(state?.properties?.["player.badges.4"]?.value) ? `${baseStyles.show_image}` : `${baseStyles.hide_image}`} src="https://static.merkelhaus.us/overlayimages/badges/75px-Soul_Badge.png" /></td>
                    <td><img className={(state?.properties?.["player.badges.5"]?.value) ? `${baseStyles.show_image}` : `${baseStyles.hide_image}`} src="https://static.merkelhaus.us/overlayimages/badges/75px-Marsh_Badge.png" /></td>
                    <td><img className={(state?.properties?.["player.badges.6"]?.value) ? `${baseStyles.show_image}` : `${baseStyles.hide_image}`} src="https://static.merkelhaus.us/overlayimages/badges/75px-Volcano_Badge.png" /></td>
                    <td><img className={(state?.properties?.["player.badges.7"]?.value) ? `${baseStyles.show_image}` : `${baseStyles.hide_image}`} src="https://static.merkelhaus.us/overlayimages/badges/75px-Earth_Badge.png" /></td>
                </tr>
            </tbody>
        </table>
    );
};

export default CurrentBadges;
