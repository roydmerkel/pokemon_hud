import ITrainer from './ITrainer';
export interface ITrainersLookup {
    trainersLookup: Map<string | number, ITrainer>
};

export default ITrainersLookup;

