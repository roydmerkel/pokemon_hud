import GameHookProperty from 'GameHookProperty';
import IModelClasses from 'IModelClasses';

export interface IState {
    gamehookLoaded: boolean,
    isConnected: boolean,
    pokemonModelSet: boolean,
    changeCallbacksSet: boolean,
    properties: { [key: string | number]: GameHookProperty<any> } | null,
    new_colors: boolean,
    in_obtain_pokemon_flow: boolean,
    modelClasses: IModelClasses
}

export default IState;
