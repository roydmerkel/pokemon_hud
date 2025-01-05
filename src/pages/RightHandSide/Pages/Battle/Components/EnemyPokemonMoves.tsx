import * as styles from './EnemyPokemonMoves.module';
import * as baseStyles from '../../../../../Base.module';
import * as typeStyles from '../../../../../Types.module';
import * as pokemonCommonStyles from '../../../../../PokemonCommon.module';
import { StateContext } from '../../../../../StateContext';

import { FunctionComponent, useContext } from 'react';

const EnemyPokemonMoves: FunctionComponent = () => {
    const { stateContext, playTimeStateContext, persistentStateContext, inBattleContext, inTitleContext } = useContext(StateContext);
    const { state, setState } = stateContext;
    const { playTimeState, setPlayTimeState } = playTimeStateContext;
    const { persistentState, setPersistentState } = persistentStateContext;
    const { inBattle, setInBattle } = inBattleContext;
    const { inTitle, setInTitle } = inTitleContext;

    var active_pokemon = state?.properties?.battle?.opponent?.active_pokemon;
    var MoveLookup = state?.modelClasses?.MoveLookup;
    var TypeLookup = state?.modelClasses?.TypeLookup;
    var move1 = MoveLookup?.moveLookup?.get(state?.properties?.["battle.opponent.active_pokemon.moves.0.move_int"]?.value?.toString());
    var move2 = MoveLookup?.moveLookup?.get(state?.properties?.["battle.opponent.active_pokemon.moves.1.move_int"]?.value?.toString());
    var move3 = MoveLookup?.moveLookup?.get(state?.properties?.["battle.opponent.active_pokemon.moves.2.move_int"]?.value?.toString());
    var move4 = MoveLookup?.moveLookup?.get(state?.properties?.["battle.opponent.active_pokemon.moves.3.move_int"]?.value?.toString());
    var move1type = TypeLookup?.typeLookup?.get(move1?.type?.toString());
    var move2type = TypeLookup?.typeLookup?.get(move2?.type?.toString());
    var move3type = TypeLookup?.typeLookup?.get(move3?.type?.toString());
    var move4type = TypeLookup?.typeLookup?.get(move4?.type?.toString());

    const in_battle = inBattle;

    return (
        <table id="enemy_pokemon_cur_moves" className={`${pokemonCommonStyles.pokemon_moves}`} width="100%">
            <thead>
                <tr>
                    <th>
                        MOVE
                    </th>
                    <th>
                        TYPE
                    </th>
                    <th>
                        PWR
                    </th>
                    <th>
                        ACC
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {move1?.name}
                    </td>
                    <td className={(move1type != null) ? ((state?.new_colors) ? move1type?.new_css_class : move1type?.old_css_class) : `${typeStyles.no_type} ${baseStyles.hide_vertical}`}>
                        {move1type?.name}
                    </td>
                    <td>
                        {move1?.power}
                    </td>
                    <td>
                        {Math.round(100 * move1?.accuracy / 255, 0)}
                    </td>
                </tr>
                <tr>
                    <td>
                        {move2?.name}
                    </td>
                    <td className={(move2type != null) ? ((state?.new_colors) ? move2type?.new_css_class : move2type?.old_css_class) : `${typeStyles.no_type} ${baseStyles.hide_vertical}`}>
                        {move2type?.name}
                    </td>
                    <td>
                        {move2?.power}
                    </td>
                    <td>
                        {Math.round(100 * move2?.accuracy / 255, 0)}
                    </td>
                </tr>
                <tr>
                    <td>
                        {move3?.name}
                    </td>
                    <td className={(move3type != null) ? ((state?.new_colors) ? move3type?.new_css_class : move3type?.old_css_class) : `${typeStyles.no_type} ${baseStyles.hide_vertical}`}>
                        {move3type?.name}
                    </td>
                    <td>
                        {move3?.power}
                    </td>
                    <td>
                        {Math.round(100 * move3?.accuracy / 255, 0)}
                    </td>
                </tr>
                <tr>
                    <td>
                        {move4?.name?.value}
                    </td>
                    <td className={(move4type != null) ? ((state?.new_colors) ? move4type?.new_css_class : move4type?.old_css_class) : `${typeStyles.no_type} ${baseStyles.hide_vertical}`}>
                        {move4type?.name}
                    </td>
                    <td>
                        {move4?.power}
                    </td>
                    <td>
                        {Math.round(100 * move4?.accuracy / 255, 0)}
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default EnemyPokemonMoves;
