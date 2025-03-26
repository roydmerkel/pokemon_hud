import IMtsLookup from "../Interfaces/IMtsLookup";
import { NumberOrString } from 'Util'

export class MtsLookup implements IMtsLookup {
    private mtsLookupKV: { [key: number | string]: number } = {
    };

    private keyValuePairs: [string | number, number][] = Object.entries(this.mtsLookupKV).map(([key, value]) => [NumberOrString(key), value]);
    public mtsLookup: Map<string | number, number> = new Map<string | number, number>(this.keyValuePairs);
};

export default MtsLookup;
