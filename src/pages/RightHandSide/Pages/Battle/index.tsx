import EnemyPokemon from './Components/EnemyPokemon';

import { FunctionComponent } from 'react';

const Battle: FunctionComponent = () => {
    return (
        <table style={{ width: "100%", height: "100%" }} id="battle_rhs">
            <tbody>
                <tr style={{ width: "100%", height: "100%" }} >
                    <td width="100%" height="100%">
                        <EnemyPokemon />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Battle;
