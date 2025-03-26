import IPokemonStats from './IPokemonStats';
export interface IPokemonStatsLookup {
    statsLookup: Map<string | number, IPokemonStats>
};

export default IPokemonStatsLookup;
