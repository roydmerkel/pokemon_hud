import IHmsLookup from "../Interfaces/IHmsLookup";
import { NumberOrString } from 'Util'

export class HmsLookup implements IHmsLookup {
    private hmsLookupKV: { [key: number | string]: number } = {
        1: 15,
        2: 19,
        3: 57,
        4: 70,
        5: 148,
        6: 250,
        7: 127,
    };

    private keyValuePairs: [string | number, number][] = Object.entries(this.hmsLookupKV).map(([key, value]) => [NumberOrString(key), value]);
    public hmsLookup: Map<string | number, number> = new Map<string | number, number>(this.keyValuePairs);
};

export default HmsLookup;
