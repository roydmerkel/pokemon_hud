function HmsLookup() {
  // Constructor body
}

var hms_lookup = {
	01: 15,
	02: 19,
	03: 57,
	04: 70,
	05: 148,
};

(function () {
  // Static initialization code
  Object.keys(hms_lookup).forEach(key => {
	  var value = hms_lookup[key];
	  
	  HmsLookup[key] = value;
  });
})();