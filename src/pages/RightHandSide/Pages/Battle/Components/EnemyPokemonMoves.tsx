import * as styles from './EnemyPokemonMoves.module';
import * as baseStyles from '../../../../../Base.module';
import * as typeStyles from '../../../../../Types.module';
import * as pokemonCommonStyles from '../../../../../PokemonCommon.module';
import { StateContext } from '../../../../../StateContext';

import { Dispatch, FunctionComponent, SetStateAction, useContext } from 'react';
import { IPersistentState }  from '../../../../../IPersistentState';
import { IPlayTimeState }  from '../../../../../IPlayTimeState';
import { IState }  from '../../../../../IState';
import { IStateContext, ILastPokemonStats } from '../../../../../IStateContext';
import { IMoveLookup } from '../../../../../Model/Interfaces/IMoveLookup';
import { ITypeLookup } from '../../../../../Model/Interfaces/ITypeLookup';
import { IMove } from '../../../../../Model/Interfaces/IMove';
import { IType } from '../../../../../Model/Interfaces/IType';

const EnemyPokemonMoves: FunctionComponent = () => {
    const { stateContext, playTimeStateContext, persistentStateContext, inBattleContext, inTitleContext, lastPokemonContext, lastEnemyPokemonContext }: IStateContext = useContext<IStateContext>(StateContext);
    const { state, setState }: { state: IState | null, setState: Dispatch<SetStateAction<IState>> | null } = stateContext;
    const { playTimeState, setPlayTimeState }: { playTimeState: IPlayTimeState | null, setPlayTimeState: Dispatch<SetStateAction<IPlayTimeState>> | null } = playTimeStateContext;
    const { persistentState, setPersistentState }: { persistentState: IPersistentState | null, setPersistentState: Dispatch<SetStateAction<IPersistentState>> | null } = persistentStateContext;
    const { inBattle, setInBattle }: { inBattle: boolean | null, setInBattle: Dispatch<SetStateAction<boolean>> | null } = inBattleContext;
    const { inTitle, setInTitle }: { inTitle: boolean | null, setInTitle: Dispatch<SetStateAction<boolean>> | null } = inTitleContext;
    const { lastPokemon, setLastPokemon }: { lastPokemon: ILastPokemonStats | null, setLastPokemon: Dispatch<SetStateAction<ILastPokemonStats | null>> | null } = lastPokemonContext;
    const { lastEnemyPokemon, setLastEnemyPokemon }: { lastEnemyPokemon: ILastPokemonStats | null, setLastEnemyPokemon: Dispatch<SetStateAction<ILastPokemonStats | null>> | null } = lastEnemyPokemonContext;

    var MoveLookup: null | undefined | IMoveLookup = state?.modelClasses?.MoveLookup;
    var TypeLookup: null | undefined | ITypeLookup = state?.modelClasses?.TypeLookup;
    var move1: undefined | IMove = MoveLookup?.moveLookup?.get(state?.properties?.["battle.opponent.active_pokemon.moves.0.move_int"]?.value);
    var move2: undefined | IMove = MoveLookup?.moveLookup?.get(state?.properties?.["battle.opponent.active_pokemon.moves.1.move_int"]?.value);
    var move3: undefined | IMove = MoveLookup?.moveLookup?.get(state?.properties?.["battle.opponent.active_pokemon.moves.2.move_int"]?.value);
    var move4: undefined | IMove = MoveLookup?.moveLookup?.get(state?.properties?.["battle.opponent.active_pokemon.moves.3.move_int"]?.value);
    var move1type: undefined | IType = TypeLookup?.typeLookup?.get(move1?.type ?? 0);
    var move2type: undefined | IType = TypeLookup?.typeLookup?.get(move2?.type ?? 0);
    var move3type: undefined | IType = TypeLookup?.typeLookup?.get(move3?.type ?? 0);
    var move4type: undefined | IType = TypeLookup?.typeLookup?.get(move4?.type ?? 0);

    const in_battle: null | boolean = inBattle;

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
                        {Math.round(100 * (move1?.accuracy ?? 0) / 255)}
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
                        {Math.round(100 * (move2?.accuracy ?? 0) / 255)}
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
                        {Math.round(100 * (move3?.accuracy ?? 0) / 255)}
                    </td>
                </tr>
                <tr>
                    <td>
                        {move4?.name}
                    </td>
                    <td className={(move4type != null) ? ((state?.new_colors) ? move4type?.new_css_class : move4type?.old_css_class) : `${typeStyles.no_type} ${baseStyles.hide_vertical}`}>
                        {move4type?.name}
                    </td>
                    <td>
                        {move4?.power}
                    </td>
                    <td>
                        {Math.round(100 * (move4?.accuracy ?? 0) / 255)}
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default EnemyPokemonMoves;
