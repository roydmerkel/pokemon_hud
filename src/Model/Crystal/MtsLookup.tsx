export class MtsLookup {
	private static mtsLookupKV = {
		1: 53,
		2: 85,
		3: 58,
	};
  
	private static keyValuePairs = Object.entries(this.mtsLookupKV);
	public static mtsLookup = new Map(this.keyValuePairs);
};

export default MtsLookup;
