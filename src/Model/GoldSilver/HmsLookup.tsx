export class HmsLookup {
    private static hmsLookupKV = {
        1: 15,
        2: 19,
        3: 57,
        4: 70,
        5: 148,
        6: 250,
        7: 127,
    };

    private static keyValuePairs = Object.entries(this.hmsLookupKV);
    public static hmsLookup = new Map(this.keyValuePairs);
};

export default HmsLookup;
