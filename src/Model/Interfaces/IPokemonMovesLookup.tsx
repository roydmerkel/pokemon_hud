import IPokemonMove from './IPokemonMove';

export interface IPokemonMovesLookup {
    pokemonTmsLookup: Map<number | string, IPokemonMove>
};

export default IPokemonMovesLookup;
