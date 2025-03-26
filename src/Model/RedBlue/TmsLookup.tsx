import ITmsLookup from '../Interfaces/ITmsLookup'
import { NumberOrString } from 'Util'

export class TmsLookup implements ITmsLookup {
    private tmsLookupKV: { [key: number | string]: number } = {
        1: 5,
        2: 13,
        3: 14,
        4: 18,
        5: 25,
        6: 92,
        7: 32,
        8: 34,
        9: 36,
        10: 38,
        11: 61,
        12: 55,
        13: 58,
        14: 59,
        15: 63,
        16: 6,
        17: 66,
        18: 68,
        19: 69,
        20: 99,
        21: 72,
        22: 76,
        23: 82,
        24: 85,
        25: 87,
        26: 89,
        27: 90,
        28: 91,
        29: 94,
        30: 100,
        31: 102,
        32: 104,
        33: 115,
        34: 117,
        35: 118,
        36: 120,
        37: 121,
        38: 126,
        39: 129,
        40: 130,
        41: 135,
        42: 138,
        43: 143,
        44: 156,
        45: 86,
        46: 149,
        47: 153,
        48: 157,
        49: 161,
        50: 164,
    };

    private keyValuePairs: [number | string, number][] = Object.entries(this.tmsLookupKV).map(([key, value]) => [NumberOrString(key), value]);
    public tmsLookup: Map<number | string, number> = new Map<number | string, number>(this.keyValuePairs);
};

export default TmsLookup;
