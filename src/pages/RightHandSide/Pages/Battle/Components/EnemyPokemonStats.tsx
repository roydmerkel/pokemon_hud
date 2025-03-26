import * as baseStyles from '../../../../../Base.module';
import * as typeStyles from '../../../../../Types.module';
import * as pokemonCommonStyles from '../../../../../PokemonCommon.module';
import { StateContext } from '../../../../../StateContext';

import { Dispatch, FunctionComponent, SetStateAction, useContext } from 'react';
import { IPokemonMechanics } from '../../../../../Model/Interfaces/IPokemonMechanics';
import { IPokemonStatsLookup } from '../../../../../Model/Interfaces/IPokemonStatsLookup';
import { IPokemonGen1BaseStats, IPokemonGen2BaseStats, IPokemonStats } from '../../../../../Model/Interfaces/IPokemonStats';
import { IPersistentState } from '../../../../../IPersistentState';
import { IPlayTimeState } from '../../../../../IPlayTimeState';
import { IState } from '../../../../../IState';
import { IStateContext, ILastPokemonStats } from '../../../../../IStateContext';

const EnemyPokemonStats: FunctionComponent = () => {
    const { stateContext, playTimeStateContext, persistentStateContext, inBattleContext, inTitleContext, lastPokemonContext, lastEnemyPokemonContext }: IStateContext = useContext(StateContext);
    const { state, setState }: { state: IState | null, setState: Dispatch<SetStateAction<IState>> | null } = stateContext;
    const { playTimeState, setPlayTimeState }: { playTimeState: IPlayTimeState | null, setPlayTimeState: Dispatch<SetStateAction<IPlayTimeState>> | null } = playTimeStateContext;
    const { persistentState, setPersistentState }: { persistentState: IPersistentState | null, setPersistentState: Dispatch<SetStateAction<IPersistentState>> | null } = persistentStateContext;
    const { inBattle, setInBattle }: { inBattle: boolean | null, setInBattle: Dispatch<SetStateAction<boolean>> | null } = inBattleContext;
    const { inTitle, setInTitle }: { inTitle: boolean | null, setInTitle: Dispatch<SetStateAction<boolean>> | null } = inTitleContext;
    const { lastPokemon, setLastPokemon }: { lastPokemon: ILastPokemonStats | null, setLastPokemon: Dispatch<SetStateAction<ILastPokemonStats | null>> | null } = lastPokemonContext;
    const { lastEnemyPokemon, setLastEnemyPokemon }: { lastEnemyPokemon: ILastPokemonStats | null, setLastEnemyPokemon: Dispatch<SetStateAction<ILastPokemonStats | null>> | null } = lastEnemyPokemonContext;

    var PokemonStatsLookup: undefined | null | IPokemonStatsLookup = state?.modelClasses?.PokemonStatsLookup;
    var PokemonMechanics: undefined | null | IPokemonMechanics = state?.modelClasses?.PokemonMechanics;
    var indexNumber: undefined | null | number = state?.properties?.["battle.opponent.active_pokemon.index_number"]?.value;
    var dex_number: undefined | null | number = state?.properties?.["battle.opponent.active_pokemon.dex_number"]?.value;

    var level: undefined | null | number = state?.properties?.["battle.opponent.active_pokemon.level"]?.value;
    var hp: undefined | null | number = state?.properties?.["battle.opponent.active_pokemon.stats.hp"]?.value;
    var hp_max: undefined | null | number = state?.properties?.["battle.opponent.active_pokemon.stats.hp_max"]?.value;
    var attack: undefined | null | number = state?.properties?.["battle.opponent.active_pokemon.stats.attack"]?.value;
    var defense: undefined | null | number = state?.properties?.["battle.opponent.active_pokemon.stats.defense"]?.value;
    var special_attack: undefined | null | number = state?.properties?.["battle.opponent.active_pokemon.stats.special_attack"]?.value;
    var special_defense: undefined | null | number = state?.properties?.["battle.opponent.active_pokemon.stats.special_defense"]?.value;
    var special: undefined | null | number = state?.properties?.["battle.opponent.active_pokemon.stats.special"]?.value;
    var speed: undefined | null | number = state?.properties?.["battle.opponent.active_pokemon.stats.speed"]?.value;
    var pokemon_stats: undefined | IPokemonStats = PokemonStatsLookup?.statsLookup?.get((indexNumber != null) ? indexNumber : 0);
    var base_stats: null | IPokemonGen1BaseStats | IPokemonGen2BaseStats = (typeof pokemon_stats?.base_stats == 'undefined' || typeof pokemon_stats?.base_stats == 'string') ? ((typeof lastEnemyPokemon?.base_stats == 'undefined') ? null : lastEnemyPokemon?.base_stats) : pokemon_stats?.base_stats;
    var base_hp: number = base_stats?.hp ?? 0;
    var base_atk: number = base_stats?.atk ?? 0;
    var base_def: number = base_stats?.def ?? 0;
    var base_spc: number = (base_stats && 'spc' in base_stats) ? base_stats?.spc : 0;
    var base_sp_atk: number = (base_stats && 'sp_atk' in base_stats) ? base_stats?.sp_atk : 0;
    var base_sp_def: number = (base_stats && 'sp_def' in base_stats) ? base_stats?.sp_def : 0;
    var base_spd: number = base_stats?.spd ?? 0;

    var focus_energy: number | boolean = state?.properties?.["battle.opponent.active_pokemon.effects.focus_energy"]?.value ?? false;
    var held_item: null | number | string = state?.properties?.["battle.opponent.active_pokemon.effects.held_item"]?.value ?? null;
    var transformed: number | boolean = state?.properties?.["battle.opponent.active_pokemon.effects.transformed"]?.value ?? false;

    var hp_modifier: number = state?.properties?.["battle.opponent.active_pokemon.modifiers.hp"]?.value ?? 0;
    var attack_modifier: number = state?.properties?.["battle.opponent.active_pokemon.modifiers.attack"]?.value ?? 0;
    var defense_modifier: number = state?.properties?.["battle.opponent.active_pokemon.modifiers.defense"]?.value ?? 0;
    var speed_modifier: number = state?.properties?.["battle.opponent.active_pokemon.modifiers.speed"]?.value ?? 0;
    var special_modifier: number = state?.properties?.["battle.opponent.active_pokemon.modifiers.special"]?.value ?? 0;
    var special_attack_modifier: number = state?.properties?.["battle.opponent.active_pokemon.modifiers.special_attack"]?.value ?? 0;
    var special_defense_modifier: number = state?.properties?.["battle.opponent.active_pokemon.modifiers.special_defense"]?.value ?? 0;
    var accuracy_modifier: number = state?.properties?.["battle.opponent.active_pokemon.modifiers.accuracy"]?.value ?? 0;
    var evasion_modifier: number = state?.properties?.["battle.opponent.active_pokemon.modifiers.evasion"]?.value ?? 0;

    const in_battle: null | boolean = inBattle;

    var crit_stage: number = 0;
    if (focus_energy) {
        crit_stage++;
    }
    switch (held_item) {
        case "Lucky Punch":
            if (dex_number == 113 && !transformed) // if chancey and not transformed then add crit modifier.
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
        <table style={{ width: "100%", height: "100%" }} >
            <tbody>
                <tr>
                    <td width="5%">&nbsp;</td>
                    <td width="90%" height="100%" className={`${baseStyles.container}`}>
                        <table style={{ width: "100%", height: "100%" }} id="enemy-pokemon-stats" className={`${pokemonCommonStyles.pokemon_stats}`}>
                            <thead>
                                <tr>
                                    <th id="enemy-pokemon-stats-lvl-th">LV. 100 STATS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ width: "100%" }} >
                                    <td width="100%">
                                        <table style={{ width: "100%", height: "100%" }} >
                                            <tbody>
                                                <tr className={(state?.new_colors) ? `${pokemonCommonStyles.pokemon_stats_hp_new}` : `${pokemonCommonStyles.pokemon_stats_hp_old}`} style={{ width: "100%", height: "100%" }} >
                                                    <td width="40%">
                                                        <b><p>HP: {(hp != null) ? hp : 0}/{(hp_max != null) ? hp_max : 0}</p></b>
                                                    </td>
                                                    <td width="40%" style={{ padding: 0 + "px" }} >
                                                        <button style={{ width: Math.round(((base_hp != null) ? base_hp : 0) * 100 / 255) + "%" }}><p>&nbsp;</p></button>
                                                    </td>
                                                    <td width="20%">
                                                        <p>{(hp_modifier != null) ? hp_modifier : 0}</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr style={{ width: "100%" }} >
                                    <td width="100%">
                                        <table style={{ width: "100%", height: "100%" }} >
                                            <tbody>
                                                <tr className={(state?.new_colors) ? `${pokemonCommonStyles.pokemon_stats_att_new}` : `${pokemonCommonStyles.pokemon_stats_att_old}`} style={{ width: "100%", height: "100%" }} >
                                                    <td width="40%">
                                                        <b><p>ATT: {(attack != null) ? attack : 0}</p></b>
                                                    </td>
                                                    <td width="40%" style={{ padding: 0 + "px" }} >
                                                        <button style={{ width: Math.round(((base_atk != null) ? base_atk : 0) * 100 / 255) + "%" }}><p>&nbsp;</p></button>
                                                    </td>
                                                    <td width="20%">
                                                        <p>{(attack_modifier != null) ? attack_modifier : 0}</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr style={{ width: "100%" }} >
                                    <td width="100%">
                                        <table style={{ width: "100%", height: "100%" }} >
                                            <tbody>
                                                <tr className={(state?.new_colors) ? `${pokemonCommonStyles.pokemon_stats_def_new}` : `${pokemonCommonStyles.pokemon_stats_def_old}`} style={{ width: "100%", height: "100%" }} >
                                                    <td width="40%">
                                                        <b><p>DEF: {(defense != null) ? defense : 0}</p></b>
                                                    </td>
                                                    <td width="40%" style={{ padding: 0 + "px" }} >
                                                        <button style={{ width: Math.round(((base_def != null) ? base_def : 0) * 100 / 255) + "%" }}><p>&nbsp;</p></button>
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
                                    (typeof state?.properties?.["meta.generation"]?.value != undefined && state?.properties?.["meta.generation"]?.value != null && (state?.properties?.["meta.generation"]?.value == "2" || state?.properties?.["meta.generation"]?.value == 2)) ?
                                        <>
                                            <tr style={{ width: "100%" }} >
                                                <td width="100%">
                                                    <table style={{ width: "100%", height: "100%" }} >
                                                        <tbody>
                                                            <tr className={(state?.new_colors) ? `${pokemonCommonStyles.pokemon_stats_spc_atk_new}` : `${pokemonCommonStyles.pokemon_stats_spc_atk_old}`} style={{ width: "100%", height: "100%" }} >
                                                                <td width="40%">
                                                                    <b><p>SPAtk: {(special_attack != null) ? special_attack : 0}</p></b>
                                                                </td>
                                                                <td width="40%" style={{ padding: 0 + "px" }} >
                                                                    <button style={{ width: Math.round(((base_sp_atk != null) ? base_sp_atk : 0) * 100 / 255) + "%" }}><p>&nbsp;</p></button>
                                                                </td>
                                                                <td width="20%">
                                                                    <p>{(special_attack_modifier != null) ? special_attack_modifier : 0}</p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr style={{ width: "100%" }} >
                                                <td width="100%">
                                                    <table style={{ width: "100%", height: "100%" }} >
                                                        <tbody>
                                                            <tr className={(state?.new_colors) ? `${pokemonCommonStyles.pokemon_stats_spc_def_new}` : `${pokemonCommonStyles.pokemon_stats_spc_def_old}`} style={{ width: "100%", height: "100%" }} >
                                                                <td width="40%">
                                                                    <b><p>SPDef: {(special_defense != null) ? special_defense : 0}</p></b>
                                                                </td>
                                                                <td width="40%" style={{ padding: 0 + "px" }} >
                                                                    <button style={{ width: Math.round(((base_sp_def != null) ? base_sp_def : 0) * 100 / 255) + "%" }}><p>&nbsp;</p></button>
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
                                        <tr style={{ width: "100%" }} >
                                            <td width="100%">
                                                <table style={{ width: "100%", height: "100%" }} >
                                                    <tbody>
                                                        <tr className={(state?.new_colors) ? `${pokemonCommonStyles.pokemon_stats_spc_new}` : `${pokemonCommonStyles.pokemon_stats_spc_old}`} style={{ width: "100%", height: "100%" }} >
                                                            <td width="40%">
                                                                <b><p>SPC: {(special != null) ? special : 0}</p></b>
                                                            </td>
                                                            <td width="40%" style={{ padding: 0 + "px" }} >
                                                                <button style={{ width: Math.round(((base_spc != null) ? base_spc : 0) * 100 / 255) + "%" }}><p>&nbsp;</p></button>
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
                                <tr style={{ width: "100%" }} >
                                    <td width="100%">
                                        <table style={{ width: "100%", height: "100%" }} >
                                            <tbody>
                                                <tr className={(state?.new_colors) ? `${pokemonCommonStyles.pokemon_stats_spd_new}` : `${pokemonCommonStyles.pokemon_stats_spd_old}`} style={{ width: "100%", height: "100%" }} >
                                                    <td width="40%">
                                                        <b><p>SPD: {(speed != null) ? speed : 0}</p></b>
                                                    </td>
                                                    <td width="40%" style={{ padding: 0 + "px" }} >
                                                        <button style={{ width: Math.round(((base_spd != null) ? base_spd : 0) * 100 / 255) + "%" }}><p id="enemy-pokemon-stats-crit-val">CRIT: {PokemonMechanics?.getCritRate((base_spd != null) ? base_spd : 0, crit_stage, false)}%</p></button>
                                                    </td>
                                                    <td width="20%">
                                                        <p>{(speed_modifier != null) ? speed_modifier : 0}</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr style={{ width: "100%" }} >
                                    <td width="100%">
                                        <table style={{ width: "100%", height: "100%" }} >
                                            <tbody>
                                                <tr className={`${pokemonCommonStyles.pokemon_stats_acc_eva_tr}`} style={{ width: "100%", height: "100%" }} >
                                                    <td width="40%" colSpan={ 2 } >
                                                        <b><p>EVA: </p></b>
                                                    </td>
                                                    <td width="10%">
                                                        <p>{(evasion_modifier != null) ? evasion_modifier : 0}</p>
                                                    </td>
                                                    <td width="40%" colSpan={ 2 } >
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
