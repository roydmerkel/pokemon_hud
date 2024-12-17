import * as styles from './CurrentPokemonMoves.module';
import * as baseStyles from '../../../Base.module';
import * as typeStyles from '../../../Types.module';
import * as pokemonCommonStyles from '../../../PokemonCommon.module';
import { StateContext } from '../../../StateContext'

import { FunctionComponent, useContext } from 'react';

const CurrentPokemonMoves: FunctionComponent = () => {
  const { stateContext, playTimeStateContext, in_battleContext, persistentStateContext } = useContext(StateContext);
  const { state, setState } = stateContext; 
  const { playTimeState, setPlayTimeState } = playTimeStateContext; 
  const { in_battle } = in_battleContext;
  const { persistentState, setPersistentState } = persistentStateContext;
  
  var active_pokemon_key = (in_battle) ? "battle.player.active_pokemon" : "player.active_pokemon";
  var MoveLookup = state?.modelClasses?.MoveLookup;
  var TypeLookup = state?.modelClasses?.TypeLookup;
  var move1struct_key = active_pokemon_key + ".moves.0";
  var move2struct_key = active_pokemon_key + ".moves.1";
  var move3struct_key = active_pokemon_key + ".moves.2";
  var move4struct_key = active_pokemon_key + ".moves.3";
  var move1 = MoveLookup?.moveLookup?.get(state?.properties?.[move1struct_key + ".move_int"]?.value?.toString());
  var move2 = MoveLookup?.moveLookup?.get(state?.properties?.[move2struct_key + ".move_int"]?.value?.toString());
  var move3 = MoveLookup?.moveLookup?.get(state?.properties?.[move3struct_key + ".move_int"]?.value?.toString());
  var move4 = MoveLookup?.moveLookup?.get(state?.properties?.[move4struct_key + ".move_int"]?.value?.toString());
  var move1type = TypeLookup?.typeLookup?.get(move1?.type?.toString());
  var move2type = TypeLookup?.typeLookup?.get(move2?.type?.toString());
  var move3type = TypeLookup?.typeLookup?.get(move3?.type?.toString());
  var move4type = TypeLookup?.typeLookup?.get(move4?.type?.toString());
  
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
            {Math.round(100*move1?.accuracy/255, 0)}
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
            {Math.round(100*move2?.accuracy/255, 0)}
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
            {Math.round(100*move3?.accuracy/255, 0)}
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
            {Math.round(100*move4?.accuracy/255, 0)}
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
