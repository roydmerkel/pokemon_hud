import * as baseStyles from '../../../Base.module';
import * as typeStyles from '../../../Types.module';
import * as pokemonCommonStyles from '../../../PokemonCommon.module';
import { StateContext } from '../../../StateContext'
import { ILastPokemonStats, IStateContext } from '../../../IStateContext';
import { IState } from '../../../IState';
import { IPlayTimeState } from '../../../IPlayTimeState';
import { IPersistentState } from '../../../IPersistentState';

import { FunctionComponent, useContext, Dispatch, SetStateAction } from 'react';
import { IPokemonStatsLookup } from '../../../Model/Interfaces/IPokemonStatsLookup';
import { IPokemonMechanics } from '../../../Model/Interfaces/IPokemonMechanics';
import { IPokemonGen1BaseStats, IPokemonGen2BaseStats, IPokemonStats } from '../../../Model/Interfaces/IPokemonStats';

const CurrentPokemonStats: FunctionComponent = () => {
    const { stateContext, playTimeStateContext, persistentStateContext, inBattleContext, inTitleContext, lastPokemonContext, lastEnemyPokemonContext }: IStateContext = useContext<IStateContext>(StateContext);
    const { state, setState }: { state: IState | null, setState: Dispatch<SetStateAction<IState>> | null } = stateContext;
    const { playTimeState, setPlayTimeState }: { playTimeState: IPlayTimeState | null, setPlayTimeState: Dispatch<SetStateAction<IPlayTimeState>> | null } = playTimeStateContext;
    const { persistentState, setPersistentState }: { persistentState: IPersistentState | null, setPersistentState: Dispatch<SetStateAction<IPersistentState>> | null } = persistentStateContext;
    const { inBattle, setInBattle }: { inBattle: boolean | null, setInBattle: Dispatch<SetStateAction<boolean>> | null } = inBattleContext;
    const { inTitle, setInTitle }: { inTitle: boolean | null, setInTitle: Dispatch<SetStateAction<boolean>> | null } = inTitleContext;
    const { lastPokemon, setLastPokemon }: { lastPokemon: ILastPokemonStats | null, setLastPokemon: Dispatch<SetStateAction<ILastPokemonStats | null>> | null } = lastPokemonContext;
    const { lastEnemyPokemon, setLastEnemyPokemon }: { lastEnemyPokemon: ILastPokemonStats | null, setLastEnemyPokemon: Dispatch<SetStateAction<ILastPokemonStats | null>> | null } = lastEnemyPokemonContext;

    const in_battle: null | boolean = inBattle;

    var PokemonStatsLookup: null | undefined | IPokemonStatsLookup = state?.modelClasses?.PokemonStatsLookup;
    var PokemonMechanics: undefined | null | IPokemonMechanics = state?.modelClasses?.PokemonMechanics;
    var team_count_key: string = (in_battle) ? "battle.player.team_count" : "player.team_count";
    var active_pokemon_key: string = (in_battle) ? "battle.player.active_pokemon" : "player.active_pokemon";
    var team_key: string = (in_battle) ? "battle.player.team" : "player.team";
    var indexNumber: undefined | null | number = state?.properties?.[active_pokemon_key + ".index_number"]?.value;
    var dex_number: undefined | null | number = state?.properties?.[active_pokemon_key + ".dex_number"]?.value;

    var level: undefined | null | number = state?.properties?.[active_pokemon_key + ".level"]?.value;
    var hp: undefined | null | number = state?.properties?.[active_pokemon_key + ".stats.hp"]?.value;
    var hp_max: undefined | null | number = state?.properties?.[active_pokemon_key + ".stats.hp_max"]?.value;
    var attack: undefined | null | number = state?.properties?.[active_pokemon_key + ".stats.attack"]?.value;
    var defense: undefined | null | number = state?.properties?.[active_pokemon_key + ".stats.defense"]?.value;
    var special_attack: undefined | null | number = state?.properties?.[active_pokemon_key + ".stats.special_attack"]?.value;
    var special_defense: undefined | null | number = state?.properties?.[active_pokemon_key + ".stats.special_defense"]?.value;
    var special: undefined | null | number = state?.properties?.[active_pokemon_key + ".stats.special"]?.value;
    var speed: undefined | null | number = state?.properties?.[active_pokemon_key + ".stats.speed"]?.value;
    var pokemon_stats: undefined | null | IPokemonStats = PokemonStatsLookup?.statsLookup?.get(((indexNumber != null) ? indexNumber : 0));
    var team_count: number = state?.properties?.[team_count_key]?.value ?? 0;
    var base_hp: undefined | number;
    var base_atk: undefined | number;
    var base_def: undefined | number;
    var base_spc: undefined | number;
    var base_sp_atk: undefined | number;
    var base_sp_def: undefined | number;
    var base_spd: undefined | number;
    var base_stats: undefined | IPokemonGen1BaseStats | IPokemonGen2BaseStats;
    if (typeof pokemon_stats?.base_stats == 'undefined') {
        pokemon_stats = PokemonStatsLookup?.statsLookup?.get("");
        base_stats = (typeof pokemon_stats?.base_stats == 'string') ? undefined : pokemon_stats?.base_stats;
    } else {
        base_stats = (typeof pokemon_stats?.base_stats == 'string') ? lastPokemon?.base_stats : pokemon_stats?.base_stats;
    }
    var base_hp: undefined | number = base_stats?.hp;
    var base_atk: undefined | number = base_stats?.atk;
    var base_def: undefined | number = base_stats?.def;
    var base_spc: undefined | number = (base_stats != undefined && 'spc' in base_stats) ? base_stats?.spc : undefined;
    var base_sp_atk: undefined | number = (base_stats != undefined && 'sp_atk' in base_stats) ? base_stats?.sp_atk : undefined;
    var base_sp_def: undefined | number = (base_stats != undefined && 'sp_def' in base_stats) ? base_stats?.sp_def : undefined;
    var base_spd: undefined | number = base_stats?.spd;

    var focus_energy: undefined | null | number | boolean = state?.properties?.[active_pokemon_key + ".effects.focus_energy"]?.value;
    var held_item: undefined | null | number | string = state?.properties?.[active_pokemon_key + ".effects.held_item"]?.value;
    var transformed: undefined | null | number | boolean = state?.properties?.[active_pokemon_key + ".effects.transformed"]?.value;
    var cur_move: undefined | null | number | string = state?.properties?.[active_pokemon_key + ".cur_move"]?.value;

    var hp_modifier: undefined | null | number = state?.properties?.[active_pokemon_key + ".modifiers.hp"]?.value;
    var attack_modifier: undefined | null | number = state?.properties?.[active_pokemon_key + ".modifiers.attack"]?.value;
    var defense_modifier: undefined | null | number = state?.properties?.[active_pokemon_key + ".modifiers.defense"]?.value;
    var speed_modifier: undefined | null | number = state?.properties?.[active_pokemon_key + ".modifiers.speed"]?.value;
    var special_modifier: undefined | null | number = state?.properties?.[active_pokemon_key + ".modifiers.special"]?.value;
    var special_attack_modifier: undefined | null | number = state?.properties?.[active_pokemon_key + ".modifiers.special_attack"]?.value;
    var special_defense_modifier: undefined | null | number = state?.properties?.[active_pokemon_key + ".modifiers.special_defense"]?.value;
    var accuracy_modifier: undefined | null | number = state?.properties?.[active_pokemon_key + ".modifiers.accuracy"]?.value;
    var evasion_modifier: undefined | null | number = state?.properties?.[active_pokemon_key + ".modifiers.evasion"]?.value;

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

    var highCritMove: boolean = false;
    switch (cur_move) {
        case "Aeroblast":
        case "Crabhammer":
        case "Cross Chop":
        case "Karate Chop":
        case "Razor Leaf":
        case "Razor Wind":
        case "Slash":
            highCritMove = true;
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
                        <table style={{ width: "100%", height: "100%" }} className={`${pokemonCommonStyles.pokemon_stats}`}>
                            <thead>
                                <tr>
                                    <th>LV. {(level != null) ? level : 0} STATS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ width: "100%" }} >
                                    <td width="100%">
                                        <table style={{ width: "100%", height: "100%" }}>
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
                                        <table style={{ width: "100%", height: "100%" }}>
                                            <tbody>
                                                <tr className={(state?.new_colors) ? `${pokemonCommonStyles.pokemon_stats_att_new}` : `${pokemonCommonStyles.pokemon_stats_att_old}`} style={{ width: "100%", height: "100%" }}>
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
                                <tr style={{ width: "100%" }}>
                                    <td width="100%">
                                        <table style={{ width: "100%", height: "100%" }}>
                                            <tbody>
                                                <tr className={(state?.new_colors) ? `${pokemonCommonStyles.pokemon_stats_def_new}` : `${pokemonCommonStyles.pokemon_stats_def_old}`} style={{ width: "100%", height: "100%" }}>
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
                                    (state?.properties?.["meta.generation"] != null &&
                                        ((typeof state?.properties?.["meta.generation"] == 'string' && state?.properties?.["meta.generation"] == "2") ||
                                            (typeof state?.properties?.["meta.generation"] == 'number' && state?.properties?.["meta.generation"] == 2))) ?
                                        <>
                                            <tr style={{ width: "100%" }}>
                                                <td width="100%">
                                                    <table style={{ width: "100%", height: "100%" }}>
                                                        <tbody>
                                                            <tr className={(state?.new_colors) ? `${pokemonCommonStyles.pokemon_stats_spc_atk_new}` : `${pokemonCommonStyles.pokemon_stats_spc_atk_old}`} style={{ width: "100%", height: "100%" }}>
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
                                            <tr style={{ width: "100%" }}>
                                                <td width="100%">
                                                    <table style={{ width: "100%", height: "100%" }}>
                                                        <tbody>
                                                            <tr className={(state?.new_colors) ? `${pokemonCommonStyles.pokemon_stats_spc_def_new}` : `${pokemonCommonStyles.pokemon_stats_spc_def_old}`} style={{ width: "100%", height: "100%" }}>
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
                                        <tr style={{ width: "100%" }}>
                                            <td width="100%">
                                                <table style={{ width: "100%", height: "100%" }}>
                                                    <tbody>
                                                        <tr className={(state?.new_colors) ? `${pokemonCommonStyles.pokemon_stats_spc_new}` : `${pokemonCommonStyles.pokemon_stats_spc_old}`} style={{ width: "100%", height: "100%" }}>
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
                                <tr style={{ width: "100%" }}>
                                    <td width="100%">
                                        <table style={{ width: "100%", height: "100%" }}>
                                            <tbody>
                                                <tr className={(state?.new_colors) ? `${pokemonCommonStyles.pokemon_stats_spd_new}` : `${pokemonCommonStyles.pokemon_stats_spd_old}`} style={{ width: "100%", height: "100%" }}>
                                                    <td width="40%">
                                                        <b><p>SPD: {(speed != null) ? speed : 0}</p></b>
                                                    </td>
                                                    <td width="40%" style={{ padding: 0 + "px" }} >
                                                        <button style={{ width: Math.round(((base_spd != null) ? base_spd : 0) * 100 / 255) + "%" }}><p>CRIT: {PokemonMechanics?.getCritRate((base_spd != null) ? base_spd : 0, crit_stage, highCritMove)}%</p></button>
                                                    </td>
                                                    <td width="20%">
                                                        <p>{(speed_modifier != null) ? speed_modifier : 0}</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr style={{ width: "100%" }}>
                                    <td width="100%">
                                        <table style={{ width: "100%", height: "100%" }}>
                                            <tbody>
                                                <tr className={`${pokemonCommonStyles.pokemon_stats_acc_eva_tr}`} style={{ width: "100%", height: "100%" }}>
                                                    <td width="40%" colSpan={2}>
                                                        <b><p>EVA: </p></b>
                                                    </td>
                                                    <td width="10%">
                                                        <p>{(evasion_modifier != null) ? evasion_modifier : 0}</p>
                                                    </td>
                                                    <td width="40%" colSpan={2}>
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

export default CurrentPokemonStats;
