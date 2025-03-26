import ITypeLookup from './Model/Interfaces/ITypeLookup'
import IPokemonStatsLookup from './Model/Interfaces/IPokemonStatsLookup'
import ISpeciesImageLookup from './Model/Interfaces/ISpeciesImageLookup'
import IPokemonMechanics from './Model/Interfaces/IPokemonMechanics'
import ITrainersLookup from './Model/Interfaces/ITrainersLookup'
import ISpeciesNameLookup from './Model/Interfaces/ISpeciesNameLookup'
import IMoveLookup from './Model/Interfaces/IMoveLookup'
import IPokemonMovesLookup from './Model/Interfaces/IPokemonMovesLookup'
import ITmsLookup from './Model/Interfaces/ITmsLookup'
import IHmsLookup from './Model/Interfaces/IHmsLookup'
import IMtsLookup from './Model/Interfaces/IMtsLookup'
import ITitleFirstRows from './Model/Interfaces/ITitleFirstRows'

export interface IModelClasses {
    TypeLookup: ITypeLookup | null,
    PokemonStatsLookup: IPokemonStatsLookup | null,
    SpeciesImageLookup: ISpeciesImageLookup | null,
    PokemonMechanics: IPokemonMechanics | null,
    TrainersLookup: ITrainersLookup | null,
    SpeciesNameLookup: ISpeciesNameLookup | null,
    MoveLookup: IMoveLookup | null,
    PokemonMovesLookup: IPokemonMovesLookup | null,
    TmsLookup: ITmsLookup | null,
    HmsLookup: IHmsLookup | null,
    MtsLookup: IMtsLookup | null,
    TitleFirstRows: ITitleFirstRows | null
}

export default IModelClasses
