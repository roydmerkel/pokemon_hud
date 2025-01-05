import { useEffect, useState, useRef, FunctionComponent } from 'react';

import SpeciesNameLookup from './Model/GoldSilver/SpeciesNameLookup';
import SpeciesImageLookup from './Model/GoldSilver/SpeciesImageLookup';
import PokemonMechanics from './Model/GoldSilver/PokemonMechanics';
import DexIndexToPokemonIndex from './Model/GoldSilver/DexIndexToPokemonIndex';
import PokemonStatsLookup from './Model/GoldSilver/PokemonStatsLookup';
import TypeLookup from './Model/GoldSilver/TypeLookup';
import PokemonExperienceGroupsLookup from './Model/GoldSilver/PokemonExperienceGroupsLookup';
import PokemonMovesLookup from './Model/GoldSilver/PokemonMovesLookup';
import TmsLookup from './Model/GoldSilver/TmsLookup';
import HmsLookup from './Model/GoldSilver/HmsLookup';
import MtsLookup from './Model/GoldSilver/MtsLookup';
import MoveLookup from './Model/GoldSilver/MoveLookup';

const TestGoldMonsApp: FunctionComponent = () => {
    function GetMons() {
        var mons = [];

        for (var i = PokemonMechanics.getMinimumPokedexGlitchId(); i <= PokemonMechanics.getMaximumPokedexGlitchId(); i++) {
            var stats = PokemonStatsLookup.statsLookup.get(i.toString());
            var initial = PokemonMovesLookup.pokemonTmsLookup.get(i.toString()).initial;
            var levelup = PokemonMovesLookup.pokemonTmsLookup.get(i.toString()).levelup;
            var levelupEntries = [];
            initial = initial.map((x) => { return MoveLookup.moveLookup.get(x.toString()).name; });
            if (levelup === Object(levelup)) {
                levelup.forEach((value, key) => {
                    if (Array.isArray(value)) {
                        value.forEach((val) => {
                            levelupEntries.push(key.toString() + ": " + MoveLookup.moveLookup.get(val.toString()).name);
                        });
                    }
                    else if (value === "last") {
                        levelupEntries.push(key.toString() + ": " + value);
                    }
                    else {
                        levelupEntries.push(key.toString() + ": " + MoveLookup.moveLookup.get(value.toString()).name);
                    }
                });
            }
            else {
                levelupEntries.push(levelup);
            }
            var tms = PokemonMovesLookup.pokemonTmsLookup.get(i.toString()).tms;
            if (tms !== Object(tms)) {
                tms = [tms];
            }
            else {
                var newtms = [];
                tms.forEach((tm) => { newtms.push(MoveLookup.moveLookup.get(TmsLookup.tmsLookup.get(tm.toString()).toString()).name); });
                tms = newtms;
            }
            var hms = PokemonMovesLookup.pokemonTmsLookup.get(i.toString()).hms;
            if (hms !== Object(hms)) {
                hms = [hms];
            }
            else {
                var newhms = [];
                hms.forEach((hm) => { newhms.push(MoveLookup.moveLookup.get(HmsLookup.hmsLookup.get(hm.toString()).toString()).name); });
                hms = newhms;
            }
            var mts = PokemonMovesLookup.pokemonTmsLookup.get(i.toString()).mts;
            if (mts !== Object(mts)) {
                mts = [mts];
            }
            else {
                var newmts = [];
                mts.forEach((mt) => { newmts.push(MoveLookup.moveLookup.get(MtsLookup.mtsLookup.get(mt.toString()).toString()).name); });
                mts = newmts;
            }
            var egg_moves = PokemonMovesLookup.pokemonTmsLookup.get(i.toString()).egg_moves;
            if (egg_moves !== Object(egg_moves)) {
                egg_moves = [egg_moves];
            }
            else {
                var newegg_moves = [];
                egg_moves.forEach((egg_move) => { newegg_moves.push(MoveLookup.moveLookup.get(egg_move.toString()).name); });
                egg_moves = newegg_moves;
            }
            mons.push(<tr width="100%" height="100%">
                <td>{i.toString()}</td>
                <td>{SpeciesNameLookup.pokemonSpeciesNameLookup.get(i.toString())}</td>
                <td>{DexIndexToPokemonIndex.indexPokemonLookup.get(i.toString())}</td>
                <td>{stats.base_stats.hp}</td>
                <td>{stats.base_stats.atk}</td>
                <td>{stats.base_stats.def}</td>
                <td>{stats.base_stats.spd}</td>
                <td>{stats.base_stats.sp_atk}</td>
                <td>{stats.base_stats.sp_def}</td>
                <td>{PokemonExperienceGroupsLookup.experienceGroups.get(stats.growth_rate.toString()).name}</td>
                <td>{PokemonExperienceGroupsLookup.experienceGroups.get(stats.growth_rate.toString()).exp_to_level(100)}</td>
                <td>{((stats.types && 0 in stats.types) ? TypeLookup.typeLookup.get(stats.types[0].toString()).name : "N/A")}</td>
                <td>{((stats.types && 1 in stats.types) ? TypeLookup.typeLookup.get(stats.types[1].toString()).name : "N/A")}</td>
                <td>{initial.join(", ")}</td>
                <td>{levelupEntries.join(", ")}</td>
                <td>{tms.join(", ")}</td>
                <td>{hms.join(", ")}</td>
                <td>{mts.join(", ")}</td>
                <td>{egg_moves.join(", ")}</td>
                <td>{SpeciesImageLookup.pokemonImageSourceLookup.get(i.toString())}</td>
                <td><img src={SpeciesImageLookup.pokemonImageLookup.get(i.toString())} /></td>
            </tr>);
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
        <table width="100%" height="100%">
            <thead>
                <tr width="100%" height="100%">
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

export default TestGoldMonsApp;
