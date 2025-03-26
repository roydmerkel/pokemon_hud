import * as styles from './CurrentPokemonImage.module';
import * as baseStyles from '../../../Base.module';
import * as typeStyles from '../../../Types.module';
import { StateContext } from '../../../StateContext'
import { ILastPokemonStats, IStateContext } from '../../../IStateContext';
import { IState } from '../../../IState';
import { IPlayTimeState } from '../../../IPlayTimeState';
import { IPersistentState } from '../../../IPersistentState';
import { ITypeLookup } from '../../../Model/Interfaces/ITypeLookup';
import { ISpeciesImageLookup } from '../../../Model/Interfaces/ISpeciesImageLookup';
import { IType } from '../../../Model/Interfaces/IType';

import { FunctionComponent, useContext, Dispatch, SetStateAction } from 'react';

const CurrentPokemonImage: FunctionComponent = () => {
    const { stateContext, playTimeStateContext, persistentStateContext, inBattleContext, inTitleContext, lastPokemonContext, lastEnemyPokemonContext }: IStateContext = useContext<IStateContext>(StateContext);
    const { state, setState }: { state: IState | null, setState: Dispatch<SetStateAction<IState>> | null } = stateContext;
    const { playTimeState, setPlayTimeState }: { playTimeState: IPlayTimeState | null, setPlayTimeState: Dispatch<SetStateAction<IPlayTimeState>> | null } = playTimeStateContext;
    const { persistentState, setPersistentState }: { persistentState: IPersistentState | null, setPersistentState: Dispatch<SetStateAction<IPersistentState>> | null } = persistentStateContext;
    const { inBattle, setInBattle }: { inBattle: boolean | null, setInBattle: Dispatch<SetStateAction<boolean>> | null } = inBattleContext;
    const { inTitle, setInTitle }: { inTitle: boolean | null, setInTitle: Dispatch<SetStateAction<boolean>> | null } = inTitleContext;
    const { lastPokemon, setLastPokemon }: { lastPokemon: ILastPokemonStats | null, setLastPokemon: Dispatch<SetStateAction<ILastPokemonStats | null>> | null } = lastPokemonContext;
    const { lastEnemyPokemon, setLastEnemyPokemon }: { lastEnemyPokemon: ILastPokemonStats | null, setLastEnemyPokemon: Dispatch<SetStateAction<ILastPokemonStats | null>> | null } = lastEnemyPokemonContext;

    var type1val: undefined | null | number = state?.properties?.["player.active_pokemon.type_1_val"]?.value;
    var type2val: undefined | null | number = state?.properties?.["player.active_pokemon.type_2_val"]?.value;
    var indexNumber: undefined | null | number = state?.properties?.["player.active_pokemon.index_number"]?.value;
    var TypeLookup: undefined | null | ITypeLookup = state?.modelClasses?.TypeLookup;
    var SpeciesImageLookup: undefined | null | ISpeciesImageLookup = state?.modelClasses?.SpeciesImageLookup;
    var type1: undefined | null | IType;
    var type2: undefined | null | IType;

    if (type1val != null) {
        type1 = TypeLookup?.typeLookup?.get(type1val);
        if (type1 == undefined) {
            type1 = null;
        }
    }

    if (type2val != null) {
        type2 = TypeLookup?.typeLookup?.get(type2val);
        if (type2 == undefined) {
            type2 = null;
        }
    }

    if (type2val == type1val) {
        type2 = null;
    }

    var image: undefined | string = (typeof indexNumber == 'number') ? SpeciesImageLookup?.pokemonImageLookup?.get(indexNumber) : SpeciesImageLookup?.pokemonImageLookup?.get("");
    var source: undefined | string = (typeof indexNumber == 'number') ? SpeciesImageLookup?.pokemonImageSourceLookup?.get(indexNumber) : SpeciesImageLookup?.pokemonImageSourceLookup?.get("");

    return (
        <table style={{ height: "100%" }}>
            <tbody>
                <tr style={{ width: "100%", height: "60%", alignItems: "center", textAlign: "center" }}>
                    <td>
                        <img className={`${styles.pokemon_image} ${baseStyles.img_hor}`} src={image} />
                    </td>
                </tr>
                <tr style={{ width: "100%", alignItems: "center", textAlign: "center" }}>
                    <td>
                        <a href={source}>{source}</a>
                    </td>
                </tr>
                <tr style={{ width: "100%", alignItems: "center", textAlign: "center" }}>
                    <td>
                        <p className={styles.pokemon_species_name}></p>
                    </td>
                </tr>
                <tr style={{ width: "100%", alignItems: "center", textAlign: "center" }}>
                    <td>
                        <p className={styles.pokemon_nickname}></p>
                    </td>
                </tr>
                <tr style={{ width: "100%", alignItems: "center", textAlign: "center" }}>
                    <td>
                        <table>
                            <tbody>
                                <tr>
                                    <td className={(type1 != null) ? ((state?.new_colors) ? type1.new_css_class : type1.old_css_class) : `${typeStyles.no_type} ${baseStyles.hide_vertical}`}><span>{(type1 != null) ? type1.name : ""}</span></td>
                                    <td className={(type2 != null) ? ((state?.new_colors) ? type2.new_css_class : type2.old_css_class) : `${typeStyles.no_type} ${baseStyles.hide_vertical}`}><span>{(type2 != null) ? type2.name : ""}</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default CurrentPokemonImage;
