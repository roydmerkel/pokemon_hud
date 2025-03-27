import { IMoveLookup } from '../../../../../Model/Interfaces/IMoveLookup';
import { ITypeLookup } from '../../../../../Model/Interfaces/ITypeLookup';
import { IPokemonMovesLookup } from '../../../../../Model/Interfaces/IPokemonMovesLookup';
import * as pokemonCommonStyles from '../../../../../PokemonCommon.module';
import * as typeStyles from '../../../../../Types.module';
import * as baseStyles from '../../../../../Base.module';
import { StateContext } from '../../../../../StateContext';

import { FunctionComponent, ElementType, useEffect, useState, useContext, Dispatch, SetStateAction } from 'react';
import { ITmsLookup } from '../../../../../Model/Interfaces/ITmsLookup';
import { IHmsLookup } from '../../../../../Model/Interfaces/IHmsLookup';
import { IMtsLookup } from '../../../../../Model/Interfaces/IMtsLookup';
import { IPokemonMove } from '../../../../../Model/Interfaces/IPokemonMove';
import IPersistentState from '../../../../../IPersistentState';
import IPlayTimeState from '../../../../../IPlayTimeState';
import IState from '../../../../../IState';
import IStateContext, { ILastPokemonStats } from '../../../../../IStateContext';
import { IType } from '../../../../../Model/Interfaces/IType';
import { IMove } from '../../../../../Model/Interfaces/IMove';

type IHudMove = [string | number | undefined, string | undefined, IType | undefined, number | undefined, string | undefined, number | undefined];

const PokemonMoves: FunctionComponent = () => {
    const { stateContext, playTimeStateContext, persistentStateContext, inBattleContext, inTitleContext, lastPokemonContext, lastEnemyPokemonContext }: IStateContext = useContext<IStateContext>(StateContext);
    const { state, setState }: { state: IState | null, setState: Dispatch<SetStateAction<IState>> | null } = stateContext;
    const { playTimeState, setPlayTimeState }: { playTimeState: IPlayTimeState | null, setPlayTimeState: Dispatch<SetStateAction<IPlayTimeState>> | null } = playTimeStateContext;
    const { persistentState, setPersistentState }: { persistentState: IPersistentState | null, setPersistentState: Dispatch<SetStateAction<IPersistentState>> | null } = persistentStateContext;
    const { inBattle, setInBattle }: { inBattle: boolean | null, setInBattle: Dispatch<SetStateAction<boolean>> | null } = inBattleContext;
    const { inTitle, setInTitle }: { inTitle: boolean | null, setInTitle: Dispatch<SetStateAction<boolean>> | null } = inTitleContext;
    const { lastPokemon, setLastPokemon }: { lastPokemon: ILastPokemonStats | null, setLastPokemon: Dispatch<SetStateAction<ILastPokemonStats | null>> | null } = lastPokemonContext;
    const { lastEnemyPokemon, setLastEnemyPokemon }: { lastEnemyPokemon: ILastPokemonStats | null, setLastEnemyPokemon: Dispatch<SetStateAction<ILastPokemonStats | null>> | null } = lastEnemyPokemonContext;

    const [moves, setMoves]: [IHudMove[], Dispatch<SetStateAction<IHudMove[]>>] = useState<IHudMove[]>([]);
    const [indexNumber, setIndexNumber]: [number, Dispatch<SetStateAction<number>>] = useState<number>(0);
    const [page, setPage]: [number, Dispatch<SetStateAction<number>>] = useState<number>(0);
    var MoveLookup: undefined | null | IMoveLookup = state?.modelClasses?.MoveLookup;
    var TypeLookup: undefined | null | ITypeLookup = state?.modelClasses?.TypeLookup;
    var PokemonMovesLookup: undefined | null | IPokemonMovesLookup = state?.modelClasses?.PokemonMovesLookup;
    var TmsLookup: undefined | null | ITmsLookup = state?.modelClasses?.TmsLookup;
    var HmsLookup: undefined | null | IHmsLookup = state?.modelClasses?.HmsLookup;
    var MtsLookup: undefined | null | IMtsLookup = state?.modelClasses?.MtsLookup;
    const ELEMENTS_PER_PAGE: number = 15;
    const UPDATE_INTERVAL: number = 10000;

    var pokemonMoves: undefined | null | IPokemonMove = PokemonMovesLookup?.pokemonTmsLookup?.get(indexNumber);
    const in_battle: null | boolean = inBattle;

    useEffect(
        () => { if (state?.properties?.["player.active_pokemon.index_number"]?.value != indexNumber) { setIndexNumber(state?.properties?.["player.active_pokemon.index_number"]?.value); } },
        [state?.properties?.["player.active_pokemon.index_number"]?.value]
    )

    useEffect(
        () => {
            if (pokemonMoves && MoveLookup && PokemonMovesLookup && TmsLookup && HmsLookup && MtsLookup)
                setMoves(GetMoves(pokemonMoves, MoveLookup, PokemonMovesLookup, TmsLookup, HmsLookup, MtsLookup)); setPage(0);
        },
        [indexNumber]
    )

    function GetMoves(pokemonMoves: IPokemonMove, MoveLookup: IMoveLookup, PokemonMovesLookup: IPokemonMovesLookup, TmsLookup: ITmsLookup, HmsLookup: IHmsLookup, MtsLookup: IMtsLookup): IHudMove[] {
        var moves: IHudMove[] = [];
        if (pokemonMoves && lastPokemon) {
            var levels: (string | number)[] = (typeof pokemonMoves?.levelup == 'string') ? Array.from(lastPokemon?.levelup?.keys()).sort((a, b) => Number(a) - Number(b)) : Array.from(pokemonMoves?.levelup?.keys()).sort((a, b) => Number(a) - Number(b));
            var levelup: Map<number | string, string | number | number[]> = (typeof pokemonMoves?.levelup == 'string') ? lastPokemon?.levelup : pokemonMoves?.levelup;

            for (var level of levels) {
                var move: undefined | string | number | number[] = levelup.get(level);
                if (typeof move == 'undefined') {
                    continue;
                } else if (Array.isArray(move)) {
                    if ((typeof state?.properties?.["meta.generation"] == 'number' && state?.properties?.["meta.generation"] == 1) ||
                        (typeof state?.properties?.["meta.generation"] == 'string' && state?.properties?.["meta.generation"] == "1")) {
                        if (move.length > 0) {
                            var mv : IMove | undefined = MoveLookup?.moveLookup?.get(move[0]);
                            var mvtype: number = mv?.type ?? 0;
                            var typestruct: IType | undefined = TypeLookup?.typeLookup?.get(mvtype);
                            moves.push([level, mv?.name, typestruct, mv?.power, Math.round((mv?.accuracy ?? 0) * 100 / 255)?.toString() + "%", mv?.pp])
                        }
                    }
                    else {
                        for (var curmove of move) {
                            var mv: IMove | undefined = MoveLookup?.moveLookup?.get(curmove);
                            var mvtype: number = mv?.type ?? 0;
                            var typestruct: IType | undefined = TypeLookup?.typeLookup?.get(mvtype);
                            moves.push([level, mv?.name, typestruct, mv?.power, Math.round((mv?.accuracy ?? 0) * 100 / 255)?.toString() + "%", mv?.pp])
                        }
                    }
                }
                else {
                    var mv: IMove | undefined = MoveLookup?.moveLookup?.get(move);
                    var mvtype: number = mv?.type ?? 0;
                    var typestruct: IType | undefined = TypeLookup?.typeLookup?.get(mvtype);
                    moves.push([level, mv?.name, typestruct, mv?.power, Math.round((mv?.accuracy ?? 0) * 100 / 255)?.toString() + "%", mv?.pp])
                }
            }
            for (var hm of pokemonMoves?.hms) {
                var hmNum = hm;
                var hmMove = HmsLookup?.hmsLookup?.get(hm) ?? 0;
                var mv: IMove | undefined = MoveLookup?.moveLookup?.get(hmMove);
                var mvtype: number = mv?.type ?? 0;
                var typestruct: IType | undefined = TypeLookup?.typeLookup?.get(mvtype);
                moves.push([("HM" + ((typeof hmNum != 'string' && hmNum < 10) ? ("0" + hmNum.toString()) : hmNum.toString())), mv?.name, typestruct, mv?.power, Math.round((mv?.accuracy ?? 0) * 100 / 255)?.toString() + "%", mv?.pp])
            }
            for (var tm of pokemonMoves?.tms) {
                var tmNum = tm;
                var tmMove = TmsLookup?.tmsLookup?.get(tm) ?? 0;
                var mv: IMove | undefined = MoveLookup?.moveLookup?.get(tmMove);
                var mvtype: number = mv?.type ?? 0;
                var typestruct: IType | undefined = TypeLookup?.typeLookup?.get(mvtype);
                moves.push([("TM" + ((typeof tmNum != 'string' && tmNum < 10) ? ("0" + tmNum.toString()) : tmNum.toString())), mv?.name, typestruct, mv?.power, Math.round((mv?.accuracy ?? 0) * 100 / 255)?.toString() + "%", mv?.pp])
            }
            for (var mt of pokemonMoves?.mts) {
                var mtsNum = mt;
                var mtMove = MtsLookup?.mtsLookup?.get(mt) ?? 0;
                var mv: IMove | undefined = MoveLookup?.moveLookup?.get(mtMove);
                var mvtype: number = mv?.type ?? 0;
                var typestruct: IType | undefined = TypeLookup?.typeLookup?.get(mvtype);
                moves.push(["TUTOR", mv?.name, typestruct, mv?.power, Math.round((mv?.accuracy ?? 0) * 100 / 255)?.toString() + "%", mv?.pp])
            }
            for (var eggMove of pokemonMoves?.egg_moves) {
                var mv: IMove | undefined = MoveLookup?.moveLookup?.get(eggMove);
                var mvtype: number = mv?.type ?? 0;
                var typestruct: IType | undefined = TypeLookup?.typeLookup?.get(mvtype);
                moves.push(["EGG", mv?.name, typestruct, mv?.power, Math.round((mv?.accuracy ?? 0) * 100 / 255)?.toString() + "%", mv?.pp])
            }
            for (var eventMove of pokemonMoves?.event_moves) {
                var mv: IMove | undefined = MoveLookup?.moveLookup?.get(eventMove);
                var mvtype: number = mv?.type ?? 0;
                var typestruct: IType | undefined = TypeLookup?.typeLookup?.get(mvtype);
                moves.push(["EVENT", mv?.name, typestruct, mv?.power, Math.round((mv?.accuracy ?? 0) * 100 / 255)?.toString() + "%", mv?.pp])
            }
            for (var tradeMove of pokemonMoves?.trade_moves) {
                var mv: IMove | undefined = MoveLookup?.moveLookup?.get(tradeMove);
                var mvtype: number = mv?.type ?? 0;
                var typestruct: IType | undefined = TypeLookup?.typeLookup?.get(mvtype);
                moves.push(["TRADE", mv?.name, typestruct, mv?.power, Math.round((mv?.accuracy ?? 0) * 100 / 255)?.toString() + "%", mv?.pp])
            }
            for (var crossGenTradeMove of pokemonMoves?.cross_gen_trade_moves) {
                var mv: IMove | undefined = MoveLookup?.moveLookup?.get(crossGenTradeMove);
                var mvtype: number = mv?.type ?? 0;
                var typestruct: IType | undefined = TypeLookup?.typeLookup?.get(mvtype);
                moves.push(["TRADE BACK", mv?.name, typestruct, mv?.power, Math.round((mv?.accuracy ?? 0) * 100 / 255)?.toString() + "%", mv?.pp])
            }
        }
        return moves;
    }

    useEffect(() => {
        const interval: NodeJS.Timeout = setInterval(() => { console.log("setInerval:"); setPage((page) => { var newPage: number = (page + 1) % Math.ceil(moves.length / ELEMENTS_PER_PAGE); console.log("newPage: ", newPage); return newPage; }); }, UPDATE_INTERVAL);

        return () => { console.log("clearInterval:"); clearInterval(interval); console.log("reset page to 0."); setPage(0); }
    }, [moves]);

    function GetMovesTableRows(moves: IHudMove[], page: number): JSX.Element[] {
        var ret: JSX.Element[] = [];

        for (var idx = page * ELEMENTS_PER_PAGE; idx < (page + 1) * ELEMENTS_PER_PAGE && idx < moves.length; idx++) {
            var move = moves[idx];

            ret.push(
                <tr>
                    <td>
                        {move[0]}
                    </td>
                    <td>
                        {move[1]}
                    </td>
                    <td className={(move[2] != null) ? ((state?.new_colors) ? move[2]?.new_css_class : move[2]?.old_css_class) : `${typeStyles.no_type} ${baseStyles.hide_vertical}`}>
                        {move[2]?.name}
                    </td>
                    <td>
                        {move[3]}
                    </td>
                    <td>
                        {move[4]}
                    </td>
                    <td>
                        {move[5]}
                    </td>
                </tr>);
        }
        return ret;
    }

    return (
        <table className={`${pokemonCommonStyles.pokemon_moves}`} width="100%">
            <thead>
                <tr>
                    <th colSpan={6}>
                        LEVEL-UP, HM AND TM MOVES
                    </th>
                </tr>
                <tr>
                    <th>
                        LV.
                    </th>
                    <th>
                        MOVE
                    </th>
                    <th>
                        TYPE
                    </th>
                    <th>
                        PWR
                    </th>
                    <th>
                        ACC
                    </th>
                    <th>
                        PP
                    </th>
                </tr>
            </thead>
            <tbody>
                {GetMovesTableRows(moves, page)}
            </tbody>
        </table>
    );
};

export default PokemonMoves;
