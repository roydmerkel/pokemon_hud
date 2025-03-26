import * as styles from './EnemyPokemonImage.module';
import * as baseStyles from '../../../../../Base.module';
import * as typeStyles from '../../../../../Types.module';
import { StateContext } from '../../../../../StateContext';

import { Dispatch, FunctionComponent, SetStateAction, useContext } from 'react';
import { IPersistentState } from '../../../../../IPersistentState';
import { IPlayTimeState } from '../../../../../IPlayTimeState';
import { IState } from '../../../../../IState';
import { IStateContext, ILastPokemonStats } from '../../../../../IStateContext';
import { ISpeciesImageLookup } from '../../../../../Model/Interfaces/ISpeciesImageLookup';
import { ITrainersLookup } from '../../../../../Model/Interfaces/ITrainersLookup';
import { ISpeciesNameLookup } from '../../../../../Model/Interfaces/ISpeciesNameLookup';
import { ITypeLookup } from '../../../../../Model/Interfaces/ITypeLookup';
import { IType } from '../../../../../Model/Interfaces/IType';
import { ITrainer, ITrainerTeam } from '../../../../../Model/Interfaces/ITrainer';

const EnemyPokemonImage: FunctionComponent = () => {
    const { stateContext, playTimeStateContext, persistentStateContext, inBattleContext, inTitleContext, lastPokemonContext, lastEnemyPokemonContext }: IStateContext = useContext<IStateContext>(StateContext);
    const { state, setState }: { state: IState | null, setState: Dispatch<SetStateAction<IState>> | null } = stateContext;
    const { playTimeState, setPlayTimeState }: { playTimeState: IPlayTimeState | null, setPlayTimeState: Dispatch<SetStateAction<IPlayTimeState>> | null } = playTimeStateContext;
    const { persistentState, setPersistentState }: { persistentState: IPersistentState | null, setPersistentState: Dispatch<SetStateAction<IPersistentState>> | null } = persistentStateContext;
    const { inBattle, setInBattle }: { inBattle: boolean | null, setInBattle: Dispatch<SetStateAction<boolean>> | null } = inBattleContext;
    const { inTitle, setInTitle }: { inTitle: boolean | null, setInTitle: Dispatch<SetStateAction<boolean>> | null } = inTitleContext;
    const { lastPokemon, setLastPokemon }: { lastPokemon: ILastPokemonStats | null, setLastPokemon: Dispatch<SetStateAction<ILastPokemonStats | null>> | null } = lastPokemonContext;
    const { lastEnemyPokemon, setLastEnemyPokemon }: { lastEnemyPokemon: ILastPokemonStats | null, setLastEnemyPokemon: Dispatch<SetStateAction<ILastPokemonStats | null>> | null } = lastEnemyPokemonContext;

    var type1int: undefined | null | number = state?.properties?.["battle.opponent.active_pokemon.type_1_int"]?.value;
    var type2int: undefined | null | number = state?.properties?.["battle.opponent.active_pokemon.type_2_int"]?.value;
    var type1: undefined | null | IType = null;
    var type2: undefined | null | IType = null;
    var indexNumber: number = state?.properties?.["battle.opponent.active_pokemon.index_number"]?.value ?? 0;
    var TypeLookup: undefined | null | ITypeLookup = state?.modelClasses?.TypeLookup;
    var SpeciesImageLookup: undefined | null | ISpeciesImageLookup = state?.modelClasses?.SpeciesImageLookup;
    var TrainersLookup: undefined | null | ITrainersLookup = state?.modelClasses?.TrainersLookup;
    var SpeciesNameLookup: undefined | null | ISpeciesNameLookup = state?.modelClasses?.SpeciesNameLookup;

    var trainer_int: number = state?.properties?.["battle.opponent.trainer_int"]?.value ?? 0;
    var team_id: number = state?.properties?.["battle.opponent.id"]?.value ?? 0;

    if (type1int != null) {
        type1 = TypeLookup?.typeLookup?.get(type1int);
    }

    if (type2int != null) {
        type2 = TypeLookup?.typeLookup?.get(type2int);
    }

    if (type2int == type1int) {
        type2 = null;
    }

    var trainer: undefined | ITrainer = TrainersLookup?.trainersLookup?.get(trainer_int);
    var team: undefined | ITrainerTeam = trainer?.teams?.get(team_id);

    var trainer_img: string = (team && team.image) ? team.image : ((trainer && trainer.image) ? trainer.image : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D");
    var trainer_reference: string = (team && team.reference) ? team.reference : ((trainer && trainer.reference) ? trainer.reference : "https://stackoverflow.com/a/19126281");
    var trainer_name: string = (team && team.fullname) ? team.fullname : (((trainer && trainer.name) ? trainer.name : "") + " " + ((team && team.name) ? team.name : ""))
    trainer_name = trainer_name.replace("***RivalName***", state?.properties?.["rival.name"]?.value);
    var image: string = SpeciesImageLookup?.pokemonImageLookup?.get(indexNumber) ?? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D";
    var source: string = SpeciesImageLookup?.pokemonImageSourceLookup?.get(indexNumber) ?? "https://stackoverflow.com/a/19126281";
    var name: string = SpeciesNameLookup?.pokemonSpeciesNameLookup?.get(indexNumber) ?? "";

    const in_battle = inBattle;

    return (
        <table style={{ height: "100%" }} >
            <tbody>
                <tr style={{ width: "100%", height: "60%", textAlign: "center", verticalAlign: "center" }}>
                    <td>
                        <table>
                            <tbody>
                                <tr>
                                    <td className={`${styles.enemy_pokemon_trainer_images_container}`}>
                                        <img id="enemy_trainer_image" className={`${styles.enemy_trainer_image}`} src={trainer_img} />
                                        <img id="enemy_pokemon_image" className={`${styles.enemy_pokemon_image}`} src={image} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr style={{ width: "100%", textAlign: "center", verticalAlign: "center" }} >
                    <td>
                        <table>
                            <tbody>
                                <tr id="enemy_trainer_image_reference_tr">
                                    <td>
                                        trainer:
                                    </td>
                                    <td>
                                        <a id="enemy_trainer_image_reference" href={trainer_reference}>{trainer_reference}</a>
                                    </td>
                                </tr>
                                <tr id="enemy_pokemon_image_reference_tr">
                                    <td>
                                        pokemon:
                                    </td>
                                    <td>
                                        <a id="enemy_pokemon_image_reference" href={source}>{source}</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr style={{ width: "100%", textAlign: "center", verticalAlign: "center" }} >
                    <td>
                        <p id="enemy_pokemon_trainer_prefix" style={{ fontSize: 24 + "px", color: "white" }}>{trainer_name}</p>
                        <p id="enemy_pokemon_species_name" style={{ fontSize: 24 + "px", color: "white" }}>{name}</p>
                    </td>
                </tr>
                <tr style={{ width: "100%", textAlign: "center", verticalAlign: "center" }} >
                    <td>
                        <table>
                            <tbody>
                                <tr>
                                    <td width="60px" height="20px" className={(type1 != null) ? ((state?.new_colors) ? type1.new_css_class : type1.old_css_class) : `${typeStyles.no_type} ${baseStyles.hide_vertical}`}><span>{(type1 != null) ? type1.name : ""}</span></td>
                                    <td width="60px" height="20px" className={(type2 != null) ? ((state?.new_colors) ? type2.new_css_class : type2.old_css_class) : `${typeStyles.no_type} ${baseStyles.hide_vertical}`}><span>{(type2 != null) ? type2.name : ""}</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default EnemyPokemonImage;
