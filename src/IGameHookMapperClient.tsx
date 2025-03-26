import GameHookProperty from 'GameHookProperty';
import GameHookEvent from 'GameHookEvent';
import GlossaryItem from 'GameHookGlossaryItem';
import MapperMeta from 'GameHookMapperMeta';

export interface IGameHookMapperClient {
    meta: MapperMeta
    properties: { [key: string | number]: GameHookProperty<any> }
    events: GameHookEvent[]
    glossary: GlossaryItem[]

    connected: boolean

    mapperLoaded(): boolean

    get(path: string): GameHookProperty<any>

    loadMapper(): Promise<void>

    connect(): Promise<void>

    onConnected(): void
    onDisconnected(): void

    onGameHookError(err: Error): void
    onMapperLoaded(): void
    onMapperLoadError(err: Error): void
    onDriverError(err: Error): void
    onPropertyChanged(property: GameHookProperty<any>, oldProperty: GameHookProperty<any>, fieldsChanged: string[]): void
    onImmediateReadValues(property: GameHookProperty<any>, immediateReadValues: any[]): void
    onTriggeredEvents(event: GameHookEvent): void
    onEnabledEvents(event: GameHookEvent): void
    onDisabledEvents(event: GameHookEvent): void

    onUiBuilderScreenSaved(id: string | number): void
}

export default IGameHookMapperClient;
