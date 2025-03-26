import IPokemonExperienceGroup from './IPokemonExperienceGroup';

export interface IPokemonExperienceGroupsLookup {
    experienceGroups: Map<number | string, IPokemonExperienceGroup>
};

export default IPokemonExperienceGroupsLookup;
