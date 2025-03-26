export interface ITrainerTeam {
    name?: string,
    fullname?: string,
    image?: string,
    reference?: string,
    prefix?: string
};

export interface ITrainerInternal {
    name: string,
    class: string,
    image: string,
    reference: string,
    teams: {
        [key: string | number]: ITrainerTeam
    }
};

export interface ITrainer {
    name: string,
    class: string,
    image: string,
    reference: string,
    teams: Map<string | number, ITrainerTeam>
};

export default ITrainer;
