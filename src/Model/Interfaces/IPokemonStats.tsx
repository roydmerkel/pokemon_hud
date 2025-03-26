export interface IPokemonGen1BaseStats {
    "hp": number,
    "atk": number,
    "def": number,
    "spd": number,
    "spc": number
}
export interface IPokemonGen2BaseStats {
    "hp": number,
    "atk": number,
    "def": number,
    "spd": number,
    "sp_atk": number,
    "sp_def": number
}
export interface IPokemonStats {
    growth_rate: number | string,
    base_stats: IPokemonGen2BaseStats | IPokemonGen1BaseStats | string,
    types: number[] | string
};

export default IPokemonStats;
