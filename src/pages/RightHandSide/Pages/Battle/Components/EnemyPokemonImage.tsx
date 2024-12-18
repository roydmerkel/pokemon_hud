import * as styles from './EnemyPokemonImage.module';
import * as baseStyles from '../../../../../Base.module';
import * as typeStyles from '../../../../../Types.module';
import { StateContext } from '../../../../../StateContext';

import { FunctionComponent, useContext } from 'react';

const EnemyPokemonImage: FunctionComponent = () => {
    const { stateContext, playTimeStateContext, persistentStateContext, inBattleContext } = useContext(StateContext);
    const { state, setState } = stateContext;
    const { playTimeState, setPlayTimeState } = playTimeStateContext;
    const { persistentState, setPersistentState } = persistentStateContext;
    const { inBattle, setInBattle } = inBattleContext;

    var type1 = state?.properties?.["battle.opponent.active_pokemon.type_1_int"]?.value;
    var type2 = state?.properties?.["battle.opponent.active_pokemon.type_2_int"]?.value;
    var indexNumber = state?.properties?.["battle.opponent.active_pokemon.index_number"]?.value;
    var TypeLookup = state?.modelClasses?.TypeLookup;
    var SpeciesImageLookup = state?.modelClasses?.SpeciesImageLookup;
    var TrainersLookup = state?.modelClasses?.TrainersLookup;
    var SpeciesNameLookup = state?.modelClasses?.SpeciesNameLookup;

    var trainer_int = state?.properties?.["battle.opponent.trainer_int"]?.value;
    var team_id = state?.properties?.["battle.opponent.id"]?.value;

    if (type1 != null) {
        type1 = TypeLookup?.typeLookup?.get(type1.toString());
    }

    if (type2 != null) {
        type2 = TypeLookup?.typeLookup?.get(type2.toString());
    }

    if (type2 == type1) {
        type2 = null;
    }

    var trainer = TrainersLookup?.trainersLookup?.get(trainer_int?.toString());
    var team = trainer?.teams?.get(team_id?.toString());

    var trainer_img = (team && team.image) ? team.image : ((trainer && trainer.image) ? trainer.image : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D");
    var trainer_reference = (team && team.reference) ? team.reference : ((trainer && trainer.reference) ? trainer.reference : "https://stackoverflow.com/a/19126281");
    var trainer_name = (team && team.fullname) ? team.fullname : (((trainer && trainer.name) ? trainer.name : "") + " " + ((team && team.name) ? team.name : ""))
    trainer_name = trainer_name.replace("***RivalName***", state?.properties?.["rival.name"]?.value);
    var image = SpeciesImageLookup?.pokemonImageLookup?.get(indexNumber?.toString());
    var source = SpeciesImageLookup?.pokemonImageSourceLookup?.get(indexNumber?.toString());
    var name = SpeciesNameLookup?.pokemonSpeciesNameLookup?.get(indexNumber?.toString());

    const in_battle = inBattle;

    return (
        <table height="100%">
            <tbody>
                <tr width="100%" height="60%" align="center">
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
                <tr width="100%" align="center">
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
                <tr width="100%" align="center">
                    <td>
                        <p id="enemy_pokemon_trainer_prefix" style={{ fontSize: 24 + "px", color: "white" }}>{trainer_name}</p>
                        <p id="enemy_pokemon_species_name" style={{ fontSize: 24 + "px", color: "white" }}>{name}</p>
                    </td>
                </tr>
                <tr width="100%" align="center">
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
