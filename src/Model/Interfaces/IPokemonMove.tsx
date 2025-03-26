export interface IPokemonMoveInternal {
    initial: number[],
    levelup: string | { [key: number | string]: string | number | number[] },
    tms: string | number[],
    hms: string | number[],
    mts: string | number[],
    egg_moves: number[],
    event_moves: number[],
    trade_moves: number[],
    cross_gen_trade_moves: number[]
};

export interface IPokemonMove {
    initial: number[],
    levelup: string | Map<number | string, string | number | number[]>,
    tms: string | number[],
    hms: string | number[],
    mts: string | number[],
    egg_moves: number[],
    event_moves: number[],
    trade_moves: number[],
    cross_gen_trade_moves: number[]
};

export default IPokemonMove;
