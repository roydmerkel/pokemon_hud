import * as baseStyles from '../../../Base.module';
import * as typeStyles from '../../../Types.module';
import { StateContext } from '../../../StateContext'
import { ILastPokemonStats, IStateContext } from '../../../IStateContext';
import { IState } from '../../../IState';
import { IPlayTimeState } from '../../../IPlayTimeState';
import { IPersistentState } from '../../../IPersistentState';

import { FunctionComponent, useContext, Dispatch, SetStateAction } from 'react';

const CurrentBadges: FunctionComponent = () => {
    const { stateContext, playTimeStateContext, persistentStateContext, inBattleContext, inTitleContext, lastPokemonContext, lastEnemyPokemonContext }: IStateContext = useContext<IStateContext>(StateContext);
    const { state, setState }: { state: IState | null, setState: Dispatch<SetStateAction<IState>> | null } = stateContext;
    const { playTimeState, setPlayTimeState }: { playTimeState: IPlayTimeState | null, setPlayTimeState: Dispatch<SetStateAction<IPlayTimeState>> | null } = playTimeStateContext;
    const { persistentState, setPersistentState }: { persistentState: IPersistentState | null, setPersistentState: Dispatch<SetStateAction<IPersistentState>> | null } = persistentStateContext;
    const { inBattle, setInBattle }: { inBattle: boolean | null, setInBattle: Dispatch<SetStateAction<boolean>> | null } = inBattleContext;
    const { inTitle, setInTitle }: { inTitle: boolean | null, setInTitle: Dispatch<SetStateAction<boolean>> | null } = inTitleContext;
    const { lastPokemon, setLastPokemon }: { lastPokemon: ILastPokemonStats | null, setLastPokemon: Dispatch<SetStateAction<ILastPokemonStats | null>> | null } = lastPokemonContext;
    const { lastEnemyPokemon, setLastEnemyPokemon }: { lastEnemyPokemon: ILastPokemonStats | null, setLastEnemyPokemon: Dispatch<SetStateAction<ILastPokemonStats | null>> | null } = lastEnemyPokemonContext;

    return (
        <table style={{ width: "100%", height: "100%" }}>
            <tbody>
                <tr style={{ width: "100%", height: "50%" }}>
                    <td><img className={(state?.properties?.["player.badges.0"]?.value) ? `${baseStyles.show_image}` : `${baseStyles.hide_image}`} src="https://static.merkelhaus.us/overlayimages/badges/75px-Boulder_Badge.png" /></td>
                    <td><img className={(state?.properties?.["player.badges.1"]?.value) ? `${baseStyles.show_image}` : `${baseStyles.hide_image}`} src="https://static.merkelhaus.us/overlayimages/badges/75px-Cascade_Badge.png" /></td>
                    <td><img className={(state?.properties?.["player.badges.2"]?.value) ? `${baseStyles.show_image}` : `${baseStyles.hide_image}`} src="https://static.merkelhaus.us/overlayimages/badges/75px-Thunder_Badge.png" /></td>
                    <td><img className={(state?.properties?.["player.badges.3"]?.value) ? `${baseStyles.show_image}` : `${baseStyles.hide_image}`} src="https://static.merkelhaus.us/overlayimages/badges/75px-Rainbow_Badge.png" /></td>
                </tr>
                <tr style={{ width: "100%", height: "50%" }}>
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
