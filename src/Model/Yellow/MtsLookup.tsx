export class MtsLookup {
	private static mtsLookupKV = {
		1: 57, // pokemon stadium surfing pikachu event...
	};
  
	private static keyValuePairs = Object.entries(this.mtsLookupKV);
	public static mtsLookup = new Map(this.keyValuePairs);
};

export default MtsLookup;
