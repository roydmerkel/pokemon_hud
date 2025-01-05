export class MtsLookup {
    private static mtsLookupKV = {
    };

    private static keyValuePairs = Object.entries(this.mtsLookupKV);
    public static mtsLookup = new Map(this.keyValuePairs);
};

export default MtsLookup;
