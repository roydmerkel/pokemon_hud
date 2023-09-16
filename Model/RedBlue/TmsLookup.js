function TmsLookup() {
  // Constructor body
}

var tms_lookup = {
	01: 5,
	02: 13,
	03: 14,
	04: 18,
	05: 25,
	06: 92,
	07: 32,
	08: 34,
	09: 36,
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

(function () {
  // Static initialization code
  Object.keys(tms_lookup).forEach(key => {
	  var value = tms_lookup[key];
	  
	  TmsLookup[key] = value;
  });
})();