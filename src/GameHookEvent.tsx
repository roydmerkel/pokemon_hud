export interface GameHookEvent {
    name: string
    memoryContainer: string | null
    address: number | null
    bank: number | null
    eventType: string | null
    description: string | null
    length: number | null
    size: number | null
    bits: string | null
    enabled: boolean | null

    enable(): Promise<void>
    disable(): Promise<void>

    toString(): string
}

export default GameHookEvent;
