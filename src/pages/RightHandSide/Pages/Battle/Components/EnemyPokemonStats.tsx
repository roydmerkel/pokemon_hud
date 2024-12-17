import * as baseStyles from '../../../../../Base.module';
import * as typeStyles from '../../../../../Types.module';
import * as pokemonCommonStyles from '../../../../../PokemonCommon.module';
import { StateContext } from '../../../../../StateContext';

import { FunctionComponent, useContext } from 'react';

const EnemyPokemonStats: FunctionComponent = () => {
  const { stateContext, playTimeStateContext, in_battleContext, persistentStateContext } = useContext(StateContext);
  const { state, setState } = stateContext; 
  const { playTimeState, setPlayTimeState } = playTimeStateContext; 
  const { in_battle } = in_battleContext;
  const { persistentState, setPersistentState } = persistentStateContext;
  
  var PokemonStatsLookup = state?.modelClasses?.PokemonStatsLookup;
  var PokemonMechanics = state?.modelClasses?.PokemonMechanics;
  var indexNumber = state?.properties?.["battle.opponent.active_pokemon.index_number"]?.value;
  var dex_number = state?.properties?.["battle.opponent.active_pokemon.dex_number"]?.value;
  
  var level = state?.properties?.["battle.opponent.active_pokemon.level"]?.value;
  var hp = state?.properties?.["battle.opponent.active_pokemon.stats.hp"]?.value;
  var hp_max = state?.properties?.["battle.opponent.active_pokemon.stats.hp_max"]?.value;
  var attack = state?.properties?.["battle.opponent.active_pokemon.stats.attack"]?.value;
  var defense = state?.properties?.["battle.opponent.active_pokemon.stats.defense"]?.value;
  var special_attack = state?.properties?.["battle.opponent.active_pokemon.stats.special_attack"]?.value;
  var special_defense = state?.properties?.["battle.opponent.active_pokemon.stats.special_defense"]?.value;
  var special = state?.properties?.["battle.opponent.active_pokemon.stats.special"]?.value;
  var speed = state?.properties?.["battle.opponent.active_pokemon.stats.speed"]?.value;
  var pokemon_stats = PokemonStatsLookup?.statsLookup?.get(((indexNumber != null) ? indexNumber : 0).toString());
  var base_hp = pokemon_stats?.base_stats?.hp;
  var base_atk = pokemon_stats?.base_stats?.atk;
  var base_def = pokemon_stats?.base_stats?.def;
  var base_spc = pokemon_stats?.base_stats?.spc;
  var base_sp_atk = pokemon_stats?.base_stats?.sp_atk;
  var base_sp_def = pokemon_stats?.base_stats?.sp_def;
  var base_spd = pokemon_stats?.base_stats?.spd;
  
  var focus_energy = state?.properties?.["battle.opponent.active_pokemon.effects.focus_energy"]?.value;
  var held_item = state?.properties?.["battle.opponent.active_pokemon.effects.held_item"]?.value;
  var transformed = state?.properties?.["battle.opponent.active_pokemon.effects.transformed"]?.value;
  
  var hp_modifier = state?.properties?.["battle.opponent.active_pokemon.modifiers.hp"]?.value;
  var attack_modifier = state?.properties?.["battle.opponent.active_pokemon.modifiers.attack"]?.value;
  var defense_modifier = state?.properties?.["battle.opponent.active_pokemon.modifiers.defense"]?.value;
  var speed_modifier = state?.properties?.["battle.opponent.active_pokemon.modifiers.speed"]?.value;
  var special_modifier = state?.properties?.["battle.opponent.active_pokemon.modifiers.special"]?.value;
  var special_attack_modifier = state?.properties?.["battle.opponent.active_pokemon.modifiers.special_attack"]?.value;
  var special_defense_modifier = state?.properties?.["battle.opponent.active_pokemon.modifiers.special_defense"]?.value;
  var accuracy_modifier = state?.properties?.["battle.opponent.active_pokemon.modifiers.accuracy"]?.value;
  var evasion_modifier = state?.properties?.["battle.opponent.active_pokemon.modifiers.evasion"]?.value;
  
  var crit_stage = 0;
  if(focus_energy)
  {
	crit_stage++;
  }
  switch(held_item)
  {
	case "Lucky Punch":
		if(dex_number == 113 && !transformed) // if chancey and not transformed then add crit modifier.
		{
			crit_stage++;
		}
		break;
	case "Scope Lens":
		crit_stage++;
		break;
	case null:
	default:
		break;
  }
  
  return (
    <table width="100%" height="100%">
      <tbody>
        <tr>
          <td width="5%">&nbsp;</td>
          <td width="90%" height="100%" className={`${baseStyles.container}`}>
            <table width="100%" height="100%" id="enemy-pokemon-stats" className={`${pokemonCommonStyles.pokemon_stats}`}>
              <thead>
                <tr>
                  <th id="enemy-pokemon-stats-lvl-th">LV. 100 STATS</th>
                </tr>
              </thead>
              <tbody>
                <tr width="100%">
                  <td width="100%">
                    <table width="100%" height="100%">
                      <tbody>
                        <tr className={(state?.new_colors) ? `${pokemonCommonStyles.pokemon_stats_hp_new}` : `${pokemonCommonStyles.pokemon_stats_hp_old}`} width="100%" height="100%">
                          <td width="40%">
                            <b><p>HP: {(hp != null) ? hp : 0}/{(hp_max != null) ? hp_max : 0}</p></b>
                          </td>
                          <td width="40%" style={{padding: 0 + "px"}} >
                            <button style={{width: Math.round(((base_hp != null) ? base_hp : 0) * 100 / 255) + "%"}}><p>&nbsp;</p></button>
                          </td>
                          <td width="20%">
                            <p>{(hp_modifier != null) ? hp_modifier : 0}</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr width="100%">
                  <td width="100%">
                    <table width="100%" height="100%">
                      <tbody>
                        <tr className={(state?.new_colors) ? `${pokemonCommonStyles.pokemon_stats_att_new}` : `${pokemonCommonStyles.pokemon_stats_att_old}`} width="100%" height="100%">
                          <td width="40%">
                            <b><p>ATT: {(attack != null) ? attack : 0}</p></b>
                          </td>
                          <td width="40%" style={{padding: 0 + "px"}} >
                            <button style={{width: Math.round(((base_atk != null) ? base_atk : 0) * 100 / 255) + "%"}}><p>&nbsp;</p></button>
                          </td>
                          <td width="20%">
                            <p>{(attack_modifier != null) ? attack_modifier : 0}</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr width="100%">
                  <td width="100%">
                    <table width="100%" height="100%">
                      <tbody>
                        <tr className={(state?.new_colors) ? `${pokemonCommonStyles.pokemon_stats_def_new}` : `${pokemonCommonStyles.pokemon_stats_def_old}`} width="100%" height="100%">
                          <td width="40%">
                            <b><p>DEF: {(defense != null) ? defense : 0}</p></b>
                          </td>
                          <td width="40%" style={{padding: 0 + "px"}} >
                            <button style={{width: Math.round(((base_def != null) ? base_def : 0) * 100 / 255) + "%"}}><p>&nbsp;</p></button>
                          </td>
                          <td width="20%">
                            <p>{(defense_modifier != null) ? defense_modifier : 0}</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
				{
				(state?.properties?.meta?.generation != null && state?.properties?.meta?.generation == "2") ?
				<>
                <tr width="100%">
                  <td width="100%">
                    <table width="100%" height="100%">
                      <tbody>
                        <tr className={(state?.new_colors) ? `${pokemonCommonStyles.pokemon_stats_spc_atk_new}` : `${pokemonCommonStyles.pokemon_stats_spc_atk_old}`} width="100%" height="100%">
                          <td width="40%">
                            <b><p>SPAtk: {(special_attack != null) ? special_attack : 0}</p></b>
                          </td>
                          <td width="40%" style={{padding: 0 + "px"}} >
                            <button style={{width: Math.round(((base_sp_atk != null) ? base_sp_atk : 0) * 100 / 255) + "%"}}><p>&nbsp;</p></button>
                          </td>
                          <td width="20%">
                            <p>{(special_attack_modifier != null) ? special_attack_modifier : 0}</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr width="100%">
                  <td width="100%">
                    <table width="100%" height="100%">
                      <tbody>
                        <tr className={(state?.new_colors) ? `${pokemonCommonStyles.pokemon_stats_spc_def_new}` : `${pokemonCommonStyles.pokemon_stats_spc_def_old}`} width="100%" height="100%">
                          <td width="40%">
                            <b><p>SPDef: {(special_defense != null) ? special_defense : 0}</p></b>
                          </td>
                          <td width="40%" style={{padding: 0 + "px"}} >
                            <button style={{width: Math.round(((base_sp_def != null) ? base_sp_def : 0) * 100 / 255) + "%"}}><p>&nbsp;</p></button>
                          </td>
                          <td width="20%">
                            <p>{(special_defense_modifier != null) ? special_defense_modifier : 0}</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
				</>
				:
                <tr width="100%">
                  <td width="100%">
                    <table width="100%" height="100%">
                      <tbody>
                        <tr className={(state?.new_colors) ? `${pokemonCommonStyles.pokemon_stats_spc_new}` : `${pokemonCommonStyles.pokemon_stats_spc_old}`} width="100%" height="100%">
                          <td width="40%">
                            <b><p>SPC: {(special != null) ? special : 0}</p></b>
                          </td>
                          <td width="40%" style={{padding: 0 + "px"}} >
                            <button style={{width: Math.round(((base_spc != null) ? base_spc : 0) * 100 / 255) + "%"}}><p>&nbsp;</p></button>
                          </td>
                          <td width="20%">
                            <p>{(special_modifier != null) ? special_modifier : 0}</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
				}
                <tr width="100%">
                  <td width="100%">
                    <table width="100%" height="100%">
                      <tbody>
                        <tr className={(state?.new_colors) ? `${pokemonCommonStyles.pokemon_stats_spd_new}` : `${pokemonCommonStyles.pokemon_stats_spd_old}`} width="100%" height="100%">
                          <td width="40%">
                            <b><p>SPD: {(speed != null) ? speed : 0}</p></b>
                          </td>
                          <td width="40%" style={{padding: 0 + "px"}} >
                            <button style={{width: Math.round(((base_spd != null) ? base_spd : 0) * 100 / 255) + "%"}}><p id="enemy-pokemon-stats-crit-val">CRIT: {PokemonMechanics?.getCritRate((base_spd != null) ? base_spd : 0, crit_stage, false)}%</p></button>
                          </td>
                          <td width="20%">
                            <p>{(speed_modifier != null) ? speed_modifier : 0}</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr width="100%">
                  <td width="100%">
                    <table width="100%" height="100%">
                      <tbody>
                        <tr className={`${pokemonCommonStyles.pokemon_stats_acc_eva_tr}`} width="100%" height="100%">
                          <td width="40%" colSpan="2">
                            <b><p>EVA: </p></b>
                          </td>
                          <td width="10%">
                            <p>{(evasion_modifier != null) ? evasion_modifier : 0}</p>
                          </td>
                          <td width="40%" colSpan="2">
                            <b><p>ACC: </p></b>
                          </td>
                          <td width="10%">
                            <p>{(accuracy_modifier != null) ? accuracy_modifier : 0}</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td width="5%">&nbsp;</td>
        </tr>
      </tbody>
    </table>
  );
};

export default EnemyPokemonStats;
