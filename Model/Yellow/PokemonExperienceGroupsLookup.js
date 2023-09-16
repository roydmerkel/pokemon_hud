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
	0x06: { name: "GLITCH", exp_to_level: function(level) { return growthRate(level, 1, 10, -75, 95, -32); } },
	0x10: { name: "GLITCH", exp_to_level: function(level) { return growthRate(level, 1, 1, 62, 145, -34); } },
	0x20: { name: "GLITCH", exp_to_level: function(level) { return growthRate(level, 12, 13, 63, 62, -48); } },
	0x22: { name: "GLITCH", exp_to_level: function(level) { return growthRate(level, 12, 13, 63, 62, -48); } },
	0x23: { name: "GLITCH", exp_to_level: function(level) { return growthRate(level, 0, 1, 33, 60, -79); } },
	0x25: { name: "GLITCH", exp_to_level: function(level) { return growthRate(level, 0, 1, 24, 27, -33); } },
	0x7b: { name: "GLITCH", exp_to_level: function(level) { return growthRate(level, 3, 2,  -55,   79,  -208); } },
	0x81: { name: "GROWTH_SLIGHTLY_FAST_COPY", exp_to_level: function(level) { return growthRate(level, 3, 4,  10,   0,  -30); } },
	0x84: { name: "GROWTH_FAST_COPY", exp_to_level: function(level) { return growthRate(level, 4, 5,   0,   0,   0); } },
	0x86: { name: "GLITCH", exp_to_level: function(level) { return growthRate(level, 1, 10, -75, 95, -32); } },
	0x91: { name: "GLITCH", exp_to_level: function(level) { return growthRate(level, 1, 2, -13, 201, -62); } },
	0x95: { name: "GLITCH", exp_to_level: function(level) { return growthRate(level, 8, 0, 34, 54, -145); } },
	0xff: { name: "GLITCH", exp_to_level: function(level) { return growthRate(level, 5, 0, 23, 239, -64); } },
};

(function () {
  // Static initialization code
  Object.keys(experience_groups).forEach(key => {
	  var value = experience_groups[key];
	  
	  PokemonExperienceGroupsLookup[key] = value;
  });
})();
