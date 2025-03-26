export interface IPokemonExperienceGroup {
    name: string,
    exp_to_level: (level: number) => number
};

export default IPokemonExperienceGroup;
