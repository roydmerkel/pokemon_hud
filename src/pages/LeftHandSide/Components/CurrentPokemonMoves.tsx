import * as styles from './CurrentPokemonMoves.module';
import * as baseStyles from '../../../Base.module';
import * as typeStyles from '../../../Types.module';
import * as pokemonCommonStyles from '../../../PokemonCommon.module';
import { StateContext } from '../../../StateContext'
import { ILastPokemonStats, IStateContext } from '../../../IStateContext';
import { IState } from '../../../IState';
import { IPlayTimeState } from '../../../IPlayTimeState';
import { IPersistentState } from '../../../IPersistentState';
import { IMoveLookup } from '../../../Model/Interfaces/IMoveLookup';
import { ITypeLookup } from '../../../Model/Interfaces/ITypeLookup';
import { IMove } from '../../../Model/Interfaces/IMove';
import { IType } from '../../../Model/Interfaces/IType';

import { FunctionComponent, useContext, Dispatch, SetStateAction } from 'react';

const CurrentPokemonMoves: FunctionComponent = () => {
    const { stateContext, playTimeStateContext, persistentStateContext, inBattleContext, inTitleContext, lastPokemonContext, lastEnemyPokemonContext }: IStateContext = useContext<IStateContext>(StateContext);
    const { state, setState }: { state: IState | null, setState: Dispatch<SetStateAction<IState>> | null } = stateContext;
    const { playTimeState, setPlayTimeState }: { playTimeState: IPlayTimeState | null, setPlayTimeState: Dispatch<SetStateAction<IPlayTimeState>> | null } = playTimeStateContext;
    const { persistentState, setPersistentState }: { persistentState: IPersistentState | null, setPersistentState: Dispatch<SetStateAction<IPersistentState>> | null } = persistentStateContext;
    const { inBattle, setInBattle }: { inBattle: boolean | null, setInBattle: Dispatch<SetStateAction<boolean>> | null } = inBattleContext;
    const { inTitle, setInTitle }: { inTitle: boolean | null, setInTitle: Dispatch<SetStateAction<boolean>> | null } = inTitleContext;
    const { lastPokemon, setLastPokemon }: { lastPokemon: ILastPokemonStats | null, setLastPokemon: Dispatch<SetStateAction<ILastPokemonStats | null>> | null } = lastPokemonContext;
    const { lastEnemyPokemon, setLastEnemyPokemon }: { lastEnemyPokemon: ILastPokemonStats | null, setLastEnemyPokemon: Dispatch<SetStateAction<ILastPokemonStats | null>> | null } = lastEnemyPokemonContext;

    const in_battle: null | boolean = inBattle;

    var active_pokemon_key: string = (in_battle) ? "battle.player.active_pokemon" : "player.active_pokemon";
    var MoveLookup: undefined | null | IMoveLookup = state?.modelClasses?.MoveLookup;
    var TypeLookup: undefined | null | ITypeLookup = state?.modelClasses?.TypeLookup;
    var move1struct_key: string = active_pokemon_key + ".moves.0";
    var move2struct_key: string = active_pokemon_key + ".moves.1";
    var move3struct_key: string = active_pokemon_key + ".moves.2";
    var move4struct_key: string = active_pokemon_key + ".moves.3";
    var move1int_key: string = move1struct_key + ".move_int";
    var move2int_key: string = move2struct_key + ".move_int";
    var move3int_key: string = move3struct_key + ".move_int";
    var move4int_key: string = move4struct_key + ".move_int";
    var move1int: string | number = state?.properties?.[move1int_key]?.value ?? "";
    var move2int: string | number = state?.properties?.[move2int_key]?.value ?? "";
    var move3int: string | number = state?.properties?.[move3int_key]?.value ?? "";
    var move4int: string | number = state?.properties?.[move4int_key]?.value ?? "";
    var move1: undefined | IMove = MoveLookup?.moveLookup?.get(move1int);
    var move2: undefined | IMove = MoveLookup?.moveLookup?.get(move2int);
    var move3: undefined | IMove = MoveLookup?.moveLookup?.get(move3int);
    var move4: undefined | IMove = MoveLookup?.moveLookup?.get(move4int);
    var move1type: undefined | IType = TypeLookup?.typeLookup?.get(move1?.type ?? "");
    var move2type: undefined | IType = TypeLookup?.typeLookup?.get(move2?.type ?? "");
    var move3type: undefined | IType = TypeLookup?.typeLookup?.get(move3?.type ?? "");
    var move4type: undefined | IType = TypeLookup?.typeLookup?.get(move4?.type ?? "");

    return (
        <table id="pokemon_cur_moves" className={`${pokemonCommonStyles.pokemon_moves}`} width="100%">
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
                    <th>
                        PP
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
                    <td>
                        {state?.properties?.[move1struct_key + ".pp"]?.value}
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
                    <td>
                        {state?.properties?.[move2struct_key + ".pp"]?.value}
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
                    <td>
                        {state?.properties?.[move3struct_key + ".pp"]?.value}
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
                    <td>
                        {state?.properties?.[move4struct_key + ".pp"]?.value}
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default CurrentPokemonMoves;
