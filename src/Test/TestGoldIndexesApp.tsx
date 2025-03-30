import { useEffect, useState, useRef, FunctionComponent } from 'react';

import SpeciesNameLookup from '../Model/GoldSilver/SpeciesNameLookup';
import SpeciesImageLookup from '../Model/GoldSilver/SpeciesImageLookup';
import PokemonMechanics from '../Model/GoldSilver/PokemonMechanics';
import PokemonIndexToDexIndex from '../Model/GoldSilver/PokemonIndexToDexIndex';
import PokemonStatsLookup from '../Model/GoldSilver/PokemonStatsLookup';
import TypeLookup from '../Model/GoldSilver/TypeLookup';
import PokemonExperienceGroupsLookup from '../Model/GoldSilver/PokemonExperienceGroupsLookup';
import PokemonMovesLookup from '../Model/GoldSilver/PokemonMovesLookup';
import TmsLookup from '../Model/GoldSilver/TmsLookup';
import HmsLookup from '../Model/GoldSilver/HmsLookup';
import MtsLookup from '../Model/GoldSilver/MtsLookup';
import MoveLookup from '../Model/GoldSilver/MoveLookup';
import IMove from '../Model/Interfaces/IMove';
import IPokemonExperienceGroup from '../Model/Interfaces/IPokemonExperienceGroup';
import IPokemonMove from '../Model/Interfaces/IPokemonMove';
import { IPokemonStats, IPokemonGen1BaseStats, IPokemonGen2BaseStats } from '../Model/Interfaces/IPokemonStats';
import IType from '../Model/Interfaces/IType';

const TestGoldIndexesApp: FunctionComponent = () => {
    var pokemonIndexToDexIndex: PokemonIndexToDexIndex = new PokemonIndexToDexIndex();
    var pokemonStatsLookup: PokemonStatsLookup = new PokemonStatsLookup();
    var pokemonMovesLookup: PokemonMovesLookup = new PokemonMovesLookup();
    var moveLookup: MoveLookup = new MoveLookup();
    var tmsLookup: TmsLookup = new TmsLookup();
    var hmsLookup: HmsLookup = new HmsLookup();
    var mtsLookup: MtsLookup = new MtsLookup();
    var speciesNameLookup: SpeciesNameLookup = new SpeciesNameLookup();
    var pokemonExperienceGroupsLookup: PokemonExperienceGroupsLookup = new PokemonExperienceGroupsLookup();
    var typeLookup: TypeLookup = new TypeLookup();
    var speciesImageLookup: SpeciesImageLookup = new SpeciesImageLookup();

    function GetMons(): JSX.Element[] {
        var mons: JSX.Element[] = [];

        for (var i: number = 0; i <= 255; i++) {
            var pokedex: number | undefined = pokemonIndexToDexIndex.pokemonIndexLookup.get(i);
            if (pokedex || pokedex === 0) {
                var stats: IPokemonStats | undefined = pokemonStatsLookup.statsLookup.get(i);
                var tmsLookupEntry: IPokemonMove | undefined = pokemonMovesLookup.pokemonTmsLookup.get(i);
                var initial: number[] | string[] = (tmsLookupEntry) ? tmsLookupEntry.initial : [] as number[];
                var levelup: string | Map<string | number, string | number | number[]> = (tmsLookupEntry) ? tmsLookupEntry.levelup : new Map<string | number, number | number[]>();
                var levelupEntries: string[] = [];
                initial = initial.map((x: number) => {
                    var moveLookupEnt: IMove | undefined = moveLookup.moveLookup.get(x);
                    if (moveLookupEnt)
                        return moveLookupEnt.name;
                }).filter((value: string | undefined): boolean => value !== undefined) as string[];
                if (typeof levelup == 'string') {
                    levelupEntries.push(levelup);
                }
                else {
                    levelup.forEach((value: string | number | number[], key: string | number) => {
                        if (Array.isArray(value)) {
                            value.forEach((val: number) => {
                                var moveLookupEnt: IMove | undefined = moveLookup.moveLookup.get(val);
                                if (moveLookupEnt)
                                    levelupEntries.push(key.toString() + ": " + moveLookupEnt.name);
                            });
                        }
                        else if (value === "last") {
                            levelupEntries.push(key.toString() + ": " + value);
                        }
                        else {
                            var moveLookupEnt: IMove | undefined = moveLookup.moveLookup.get(value);
                            if (moveLookupEnt)
                                levelupEntries.push(key.toString() + ": " + moveLookupEnt.name);
                        }
                    });
                }
                var tms: string | number[] | string[] = (tmsLookupEntry) ? tmsLookupEntry.tms : [];
                if (typeof tms == "string") {
                    tms = [tms];
                }
                else {
                    var newtms: string[] = [];
                    tms.forEach((tm: number) => {
                        var tmsLookupEnt: number | unknown = tmsLookup.tmsLookup.get(tm);
                        if (typeof tmsLookupEnt == 'number') {
                            var moveLookupEnt: IMove | undefined = moveLookup.moveLookup.get(tmsLookupEnt);
                            if (moveLookupEnt)
                                newtms.push(moveLookupEnt.name);
                        }
                    });
                    tms = newtms;
                }
                var hms: string | number[] | string[] = (tmsLookupEntry) ? tmsLookupEntry.hms : [];
                if (typeof hms == "string") {
                    hms = [hms];
                }
                else {
                    var newhms: string[] = [];
                    hms.forEach((hm: number) => {
                        var hmsLookupEnt: number | unknown = hmsLookup.hmsLookup.get(hm);
                        if (typeof hmsLookupEnt == 'number') {
                            var moveLookupEnt: IMove | undefined = moveLookup.moveLookup.get(hmsLookupEnt);
                            if (moveLookupEnt)
                                newhms.push(moveLookupEnt.name);
                        }
                    });
                    hms = newhms;
                }
                var mts: string | number[] | string[] = (tmsLookupEntry) ? tmsLookupEntry.mts : [];
                if (typeof mts == "string") {
                    mts = [mts];
                }
                else {
                    var newmts: string[] = [];
                    mts.forEach((mt: number) => {
                        var mtsLookupEnt: number | unknown = mtsLookup.mtsLookup.get(mt);
                        if (typeof mtsLookupEnt == 'number') {
                            var moveLookupEnt: IMove | undefined = moveLookup.moveLookup.get(mtsLookupEnt);
                            if (moveLookupEnt)
                                newmts.push(moveLookupEnt.name);
                        }
                    });
                    mts = newmts;
                }
                var egg_moves: string | number[] | string[] = (tmsLookupEntry) ? tmsLookupEntry.egg_moves : [];
                if (typeof egg_moves == "string") {
                    egg_moves = [egg_moves];
                }
                else {
                    var newegg_moves: string[] = [];
                    egg_moves.forEach((egg_move: number) => {
                        var eggMoveEnt: IMove | undefined = moveLookup.moveLookup.get(egg_move);
                        if (eggMoveEnt)
                            newegg_moves.push(eggMoveEnt.name);
                    });
                    egg_moves = newegg_moves;
                }
                var base_stats: IPokemonGen2BaseStats | IPokemonGen1BaseStats | string = (stats) ? ((typeof stats == 'string') ? stats : ((stats.base_stats) ? stats.base_stats : "undefined")) : "undefined"
                var growth_rate: string | number | undefined = (stats && stats.growth_rate) ? stats.growth_rate : undefined
                var experience_group: IPokemonExperienceGroup | undefined = (growth_rate && pokemonExperienceGroupsLookup.experienceGroups.has(growth_rate)) ? pokemonExperienceGroupsLookup.experienceGroups.get(growth_rate) : undefined;
                var types: number[] | string | undefined = (stats && stats.types) ? stats.types : undefined
                var types0: number | undefined = (types && typeof types != "string" && 0 in types) ? types[0] : undefined;
                var types1: number | undefined = (types && typeof types != "string" && 1 in types) ? types[1] : undefined;
                var typeLookupEnt0: IType | undefined = (types0 && typeLookup.typeLookup.has(types0)) ? typeLookup.typeLookup.get(types0) : undefined;
                var typeLookupEnt1: IType | undefined = (types1 && typeLookup.typeLookup.has(types1)) ? typeLookup.typeLookup.get(types1) : undefined;
                var types0Str: string = (types) ? ((typeof types == "string") ? types : ((typeLookupEnt0) ? typeLookupEnt0.name : "N/A")) : "N/A";
                var types1Str: string = (types) ? ((typeof types == "string") ? "N/A" : ((typeLookupEnt1) ? typeLookupEnt1.name : "N/A")) : "N/A";
                mons.push(<tr style={{ width: '100%', height: '100%' }}>
                    <td>{i.toString()}</td>
                    <td>{speciesNameLookup.pokemonSpeciesNameLookup.get(i)}</td>
                    <td>{i}</td>
                    <td>{(base_stats) ? ((typeof base_stats == 'string') ? base_stats : base_stats.hp) : "undefined"}</td>
                    <td>{(base_stats) ? ((typeof base_stats == 'string') ? base_stats : base_stats.atk) : "undefined"}</td>
                    <td>{(base_stats) ? ((typeof base_stats == 'string') ? base_stats : base_stats.def) : "undefined"}</td>
                    <td>{(base_stats) ? ((typeof base_stats == 'string') ? base_stats : base_stats.spd) : "undefined"}</td>
                    <td>{(base_stats) ? ((typeof base_stats == 'string') ? base_stats : (("sp_atk" in base_stats) ? base_stats.sp_atk : "undefined")) : "undefined"}</td>
                    <td>{(base_stats) ? ((typeof base_stats == 'string') ? base_stats : (("sp_def" in base_stats) ? base_stats.sp_def : "undefined")) : "undefined"}</td>
                    <td>{(experience_group) ? experience_group.name : "undefined"}</td>
                    <td>{(experience_group) ? experience_group.exp_to_level(100) : "undefined"}</td>
                    <td>{types0Str}</td>
                    <td>{types1Str}</td>
                    <td>{initial.join(", ")}</td>
                    <td>{levelupEntries.join(", ")}</td>
                    <td>{tms.join(", ")}</td>
                    <td>{hms.join(", ")}</td>
                    <td>{mts.join(", ")}</td>
                    <td>{egg_moves.join(", ")}</td>
                    <td>{speciesImageLookup.pokemonImageSourceLookup.get(i)}</td>
                    <td><img src={speciesImageLookup.pokemonImageLookup.get(i)} /></td>
                </tr>);
            }
        }
        return mons;
    }

    return (
        //<div>
        //  <div className={styles.title}>CSS module works!</div>
        //  <div className={styles.subtitle}>CSS module + Tailwind works!</div>
        //  <div
        //    className={
        //      'border-[10px] border-solid border-red-800 rounded-full w-[200px] h-[200px] flex items-center justify-center text-center'
        //    }
        //  >
        //    Tailwind works!
        //  </div>
        //  <SamplePage />
        //</div>
        <table style={{ width: '100%', height: '100%' }}>
            <thead>
                <tr style={{ width: '100%', height: '100%' }}>
                    <th>pokedex number</th>
                    <th>Name</th>
                    <th>index</th>
                    <th>hp</th>
                    <th>atk</th>
                    <th>def</th>
                    <th>spd</th>
                    <th>sp.Atk</th>
                    <th>sp.Def</th>
                    <th>growth rate</th>
                    <th>exp to 100</th>
                    <th>type 1</th>
                    <th>type 2</th>
                    <th>initial moveset</th>
                    <th>level up moveset</th>
                    <th>tms</th>
                    <th>hms</th>
                    <th>mts</th>
                    <th>egg moves</th>
                    <th>source</th>
                    <th>image</th>
                </tr>
            </thead>
            <tbody>
                {GetMons()}
            </tbody>
        </table>
    );
};

export default TestGoldIndexesApp;
