import PokemonMoves from './Components/PokemonMoves'

import { FunctionComponent } from 'react';

const Overworld: FunctionComponent = () => {
    return (
        <table style={{ width: "100%", height: "100%" }} id="overworld_rhs">
            <tbody>
                <tr style={{ width: "100%", height: "100%" }}>
                    <td style={{ width: "100%", height: "100%" }}>
                        <PokemonMoves />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Overworld;
