import * as styles from './CurrentPokemonImage.module';
import * as baseStyles from '../../../Base.module';
import * as typeStyles from '../../../Types.module';

import { FunctionComponent } from 'react';

const CurrentPokemonImage: FunctionComponent = ({ gamehookLoaded, isConnected, pokemonModelSet, properties, playTime, gen, new_colors, modelClasses, in_battle }) => {
  var type1 = properties?.["player.active_pokemon.type_1_val"]?.value;
  var type2 = properties?.["player.active_pokemon.type_2_val"]?.value;
  var indexNumber = properties?.["player.active_pokemon.index_number"]?.value;
  var TypeLookup = modelClasses?.TypeLookup;
  var SpeciesImageLookup = modelClasses?.SpeciesImageLookup;
  
  if(type1 != null)
  {
	type1 = TypeLookup?.typeLookup?.get(type1.toString());
  }

  if(type2 != null)
  {
	type2 = TypeLookup?.typeLookup?.get(type2.toString());
  }
  
  if(type2 == type1)
  {
	type2 = null;
  }
  
  var image = SpeciesImageLookup?.pokemonImageLookup?.get(indexNumber?.toString());
  var source = SpeciesImageLookup?.pokemonImageSourceLookup?.get(indexNumber?.toString());
  
  return (
    <table height="100%">
      <tbody>
        <tr width="100%" height="60%" align="center">
          <td>
            <img className={`${styles.pokemon_image} ${baseStyles.img_hor}`} src={image}/>
          </td>
        </tr>
        <tr width="100%" align="center">
          <td>
            <a href={source}>{source}</a>
          </td>
        </tr>
        <tr width="100%" align="center">
          <td>
            <p className={styles.pokemon_species_name}></p>
          </td>
        </tr>
        <tr width="100%" align="center">
          <td>
            <p className={styles.pokemon_nickname}></p>
          </td>
        </tr>
        <tr width="100%" align="center">
          <td>
            <table>
              <tbody>
                <tr>
                  <td className={(type1 != null) ? ((new_colors) ? type1.new_css_class : type1.old_css_class) : `${typeStyles.no_type} ${baseStyles.hide_vertical}`}><span>{(type1 != null) ? type1.name : ""}</span></td>
                  <td className={(type2 != null) ? ((new_colors) ? type2.new_css_class : type2.old_css_class) : `${typeStyles.no_type} ${baseStyles.hide_vertical}`}><span>{(type2 != null) ? type2.name : ""}</span></td>
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
