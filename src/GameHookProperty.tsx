export interface GameHookProperty<Type> {
    path: string
    type: string
    memoryContainer: string | null
    address: number | null
    length: number | null
    size: number | null
    bits: string | null
    reference: string | null
    description: string | null

    value: Type | null
    bytes: number[] | null
    isFrozen: boolean | null
    isReadOnly: boolean | null

    set(value: Type, freeze: boolean): Promise<void>
    setBytes(bytes: number[], freeze: boolean): Promise<void>

    freeze(freeze?: number): Promise<void>

    change(fn: (property: GameHookProperty<Type>, oldProperty: GameHookProperty<Type>) => void): void

    once(fn: (property: GameHookProperty<Type>, oldProperty: GameHookProperty<Type>) => void): void

    toString(): string

    [otherOptions: string]: GameHookProperty<any> | number[] | string | number | null | Type | boolean | Promise<void> | ((value: Type, freeze: boolean) => Promise<void>) | ((bytes: number[], freeze: boolean) => Promise<void>) | ((freeze?: number) => Promise<void>) | ((fn: (property: GameHookProperty<Type>, oldProperty: GameHookProperty<Type>) => void) => void)
}

export default GameHookProperty;
