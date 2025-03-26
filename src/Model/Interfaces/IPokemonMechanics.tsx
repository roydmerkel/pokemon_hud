export interface IPokemonMechanics {
    getCritRate: (baseSpeed: number, critStage: number, highCritMove: boolean) => number
    getMinimumPokedexGlitchId: () => number
    getMaximumPokedexGlitchId: () => number
    getMinimumPokedexId: () => number
    getMaximumPokedexId: () => number
    getHP: (attackDV: number, defenseDV: number, speedDV: number, specialDV: number, hpDV: number, level: number, baseHP: number, hpStatExp: number) => number
    getAtk: (attackDV: number, defenseDV: number, speedDV: number, specialDV: number, hpDV: number, level: number, baseATK: number, atkStatExp: number) => number
    getDef: (attackDV: number, defenseDV: number, speedDV: number, specialDV: number, hpDV: number, level: number, baseDef: number, defStatExp: number) => number
    getSpd: (attackDV: number, defenseDV: number, speedDV: number, specialDV: number, hpDV: number, level: number, baseSpd: number, spdStatExp: number) => number
    getSpc: (attackDV: number, defenseDV: number, speedDV: number, specialDV: number, hpDV: number, level: number, baseSpc: number, spcStatExp: number) => number
    getSpAtk: (attackDV: number, defenseDV: number, speedDV: number, specialAttackDV: number, specialDefenseDV: number, hpDV: number, level: number, baseSpAtk: number, spAtkStatExp: number) => number
    getSpDef: (attackDV: number, defenseDV: number, speedDV: number, specialAttackDV: number, specialDefenseDV: number, hpDV: number, level: number, baseSpDef: number, spDefStatExp: number) => number
};

export default IPokemonMechanics;
