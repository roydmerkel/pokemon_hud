function PokemonExperienceGroupsLookup() {
  // Constructor body
}

function toUnsigned(val) {
	if(val >= 0) {
		return val;
	} else {
		return 0x1000000 - val;
	}
}

function multAndTrunc(a, b) {
	return (a * b) & 0xFFFFFF;
}

function divAndTrunc(a, b) {
	return ((a & 0xFFFFFF) / b) & 0xFFFFFF;
}

function addAndTrunc(a, b) {
	return (a + b) & 0xFFFFFF;
}

function growthRate(n, a, b, c, d, e) {
	/*var cur1 = multAndTrunc(divAndTrunc(multAndTrunc(multAndTrunc(n, n), n), b), a);
	var cur2 = multAndTrunc(multAndTrunc(n, n), c);
	var cur3 = multAndTrunc(d, n);
	var cur4 = e;
	
	var cur = addAndTrunc(addAndTrunc(addAndTrunc(cur1, cur2), cur3), cur4);*/
	var cur1 = n * n * n / b * a;
	var cur2 = n * n * c;
	var cur3 = n * d;
	var cur4 = e;
	
	var cur = (cur1 + cur2 + cur3 + cur4);
	if(cur < 0) {
		cur = 0x1000000 + cur;
	}
	cur = cur & 0xFFFFFF;
	
	return cur;
}

var experience_groups = {
	"": { name: "", exp_to_level: function(level) { return 0; } },
	0x00: { name: "GROWTH_MEDIUM_FAST", exp_to_level: function(level) { return growthRate(level, 1, 1,   0,   0,   0); } },
	0x01: { name: "GROWTH_SLIGHTLY_FAST", exp_to_level: function(level) { return growthRate(level, 3, 4,  10,   0,  -30); } },
	0x02: { name: "GROWTH_SLIGHTLY_SLOW", exp_to_level: function(level) { return growthRate(level, 3, 4,  20,   0,  -70); } },
	0x03: { name: "GROWTH_MEDIUM_SLOW", exp_to_level: function(level) { return growthRate(level, 6, 5, -15, 100, -140); } },
	0x04: { name: "GROWTH_FAST", exp_to_level: function(level) { return growthRate(level, 4, 5,   0,   0,   0); } },
	0x05: { name: "GROWTH_SLOW", exp_to_level: function(level) { return growthRate(level, 5, 4,   0,   0,   0); } },
	0x0d: { name: "GLITCH", exp_to_level: function(level) { return growthRate(level, 4, 7, -112, 219, -184); } },
	0x1a: { name: "GLITCH", exp_to_level: function(level) { return growthRate(level, 0, 1, 33, 155, -80); } },
	0x1d: { name: "GLITCH", exp_to_level: function(level) { return growthRate(level, 1, 7, 67, 65, -32); } },
	0x37: { name: "GLITCH", exp_to_level: function(level) { return growthRate(level, 5, 12, 81, 4, -48); } },
	0x4b: { name: "GLITCH", exp_to_level: function(level) { return growthRate(level, 12, 13, 127, 43, -250); } },
	0x57: { name: "GLITCH", exp_to_level: function(level) { return growthRate(level, 2, 3, 24, 18, -33); } },
	0x64: { name: "GLITCH", exp_to_level: function(level) { return growthRate(level, 2, 1, 32, 80, -205); } },
	0x80: { name: "GROWTH_MEDIUM_FAST_COPY", exp_to_level: function(level) { return growthRate(level, 1, 1, 0, 0, 0); } },
	0x81: { name: "GROWTH_SLIGHTLY_FAST_COPY", exp_to_level: function(level) { return growthRate(level, 3, 4, 10, 0, -30); } },
	0x88: { name: "GLITCH", exp_to_level: function(level) { return growthRate(level, 3, 5, -122, 38, -204); } },
	0xa5: { name: "GLITCH", exp_to_level: function(level) { return growthRate(level, 1, 4, 60, 33, -215); } },
	0xd1: { name: "GLITCH", exp_to_level: function(level) { return growthRate(level, 4, 7, 14, 1, -205); } },
};

(function () {
  // Static initialization code
  Object.keys(experience_groups).forEach(key => {
	  var value = experience_groups[key];
	  
	  PokemonExperienceGroupsLookup[key] = value;
  });
})();
