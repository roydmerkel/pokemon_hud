import EnemyPokemon from './Components/EnemyPokemon';

import { FunctionComponent } from 'react';

const Battle: FunctionComponent = () => {
    return (
        <table width="100%" height="100%" id="battle_rhs">
            <tbody>
                <tr width="100%" height="100%">
                    <td width="100%" height="100%">
                        <EnemyPokemon />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Battle;
