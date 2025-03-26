import EnemyPokemonImage from './EnemyPokemonImage';
import EnemyPokemonStats from './EnemyPokemonStats';
import EnemyPokemonMoves from './EnemyPokemonMoves';

import { FunctionComponent } from 'react';

const EnemyPokemon: FunctionComponent = () => {
    return (
        <table style={{ width: "100%", height: "100%" }} id="enemy_pokemon">
            <tbody>
                <tr style={{ width: "100%", height: "50%" }} >
                    <td valign="middle" align="center" height="100%" >
                        <EnemyPokemonImage />
                    </td>
                </tr>
                <tr style={{ width: "100%", height: "20%" }} >
                    <td>
                        <EnemyPokemonStats />
                    </td>
                </tr>
                <tr style={{ width: "100%", height: "20%" }} >
                    <td width="100%" height="100%">
                        <EnemyPokemonMoves />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default EnemyPokemon;
