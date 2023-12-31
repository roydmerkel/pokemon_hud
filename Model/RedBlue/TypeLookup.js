function TypeLookup() {
}

var type_lookup = {
	0x00: { name: "Normal", css_class: "normal-type" },
	0x01: { name: "Fighting", css_class: "fighting-type" },
	0x02: { name: "Flying", css_class: "flying-type" },
	0x03: { name: "Poison", css_class: "poison-type" },
	0x04: { name: "Ground", css_class: "ground-type" },
	0x05: { name: "Rock", css_class: "rock-type" },
	0x06: { name: "BIRD", css_class: "bird-type" },
	0x07: { name: "Bug", css_class: "bug-type" },
	0x08: { name: "Ghost", css_class: "ghost-type" },
	0x09: { name: "NORMAL", css_class: "fake-type" },
	0x0A: { name: "NORMAL", css_class: "fake-type" },
	0x0B: { name: "NORMAL", css_class: "fake-type" },
	0x0C: { name: "NORMAL", css_class: "fake-type" },
	0x0D: { name: "NORMAL", css_class: "fake-type" },
	0x0E: { name: "NORMAL", css_class: "fake-type" },
	0x0F: { name: "NORMAL", css_class: "fake-type" },
	0x10: { name: "NORMAL", css_class: "fake-type" },
	0x11: { name: "NORMAL", css_class: "fake-type" },
	0x12: { name: "NORMAL", css_class: "fake-type" },
	0x13: { name: "NORMAL", css_class: "fake-type" },
	0x14: { name: "Fire", css_class: "fire-type" },
	0x15: { name: "Water", css_class: "water-type" },
	0x16: { name: "Grass", css_class: "grass-type" },
	0x17: { name: "Electric", css_class: "electric-type" },
	0x18: { name: "Psychic", css_class: "psychic-type" },
	0x19: { name: "Ice", css_class: "ice-type" },
	0x1A: { name: "Dragon", css_class: "dragon-type" },
	0x1B: { name: "9", css_class: "fake-type" },
	0x1C: { name: "9", css_class: "fake-type" },
	0x1D: { name: "9", css_class: "fake-type" },
	0x1E: { name: "9", css_class: "fake-type" },
	0x1F: { name: "9 99", css_class: "fake-type" },
	0x20: { name: "9 9 9 99 9 9 9", css_class: "fake-type" },
	0x21: { name: "9", css_class: "fake-type" },
	0x22: { name: "JT RED? POK\xE9 BB (PKMN) d\xE9 20", css_class: "fake-type" },
	0x23: { name: "9 99 9 9 \\99", css_class: "fake-type" },
	0x24: { name: "I9II9to", css_class: "fake-type" },
	0x25: { name: "9 99", css_class: "fake-type" },
	0x26: { name: "9 9 9 99 9 99", css_class: "fake-type" },
	0x27: { name: "99 9 9 9II99to", css_class: "fake-type" },
	0x28: { name: "9", css_class: "fake-type" },
	0x29: { name: "POK\xE9 BB(PKMN)d\xE9", css_class: "fake-type" },
	0x2A: { name: "99 9 9", css_class: "fake-type" },
	0x2B: { name: "9", css_class: "fake-type" },
	0x2C: { name: "99", css_class: "fake-type" },
	0x2D: { name: "696 9 99 99 9 9 99 99 9 9", css_class: "fake-type" },
	0x2E: { name: "9:L?9D?96699 999'9 99Q99/ 9 9 99 D9 9 99", css_class: "fake-type" },
	0x2F: { name: "9", css_class: "fake-type" },
	0x30: { name: "9 999 999 9 9 99 999 9 9 99 696999 9 99", css_class: "fake-type" },
	0x31: { name: "9", css_class: "fake-type" },
	0x32: { name: "9\xD7 99Z 9 9", css_class: "fake-type" },
	0x33: { name: "99 A9", css_class: "fake-type" },
	0x34: { name: "96 99 99 99 9 999 9 9 9", css_class: "fake-type" },
	0x35: { name: "99 9II9Ito 9", css_class: "fake-type" },
	0x36: { name: "Qi JT RED? POK\xE9 BB(PKMN) d\xE9 W\u2026\u2026N", css_class: "fake-type" },
	0x37: { name: "A9", css_class: "fake-type" },
	0x38: { name: "6 99", css_class: "fake-type" },
	0x39: { name: "9 9", css_class: "fake-type" },
	0x3A: { name: "Qi JT RED? POK\xE9 BB(PKMN) d\xE9 W\u2026\u2026N", css_class: "fake-type" },
	0x3B: { name: "9", css_class: "fake-type" },
	0x3C: { name: "i JT RED? POK\xE9 BB(PKMN) d\xE9 W\u2026\u2026N", css_class: "fake-type" },
	0x3D: { name: "9?'s9? 96 9 999'99 9Q\u26429/ 99 9 9 D9 999 9", css_class: "fake-type" },
	0x3E: { name: "9 9", css_class: "fake-type" },
	0x3F: { name: "\u20BD9\u20BD", css_class: "fake-type" },
	0x40: { name: "9", css_class: "fake-type" },
	0x41: { name: "9", css_class: "fake-type" },
	0x42: { name: "RED? POK\xE9 BB(PKMN) d\xE9", css_class: "fake-type" },
	0x43: { name: "9 9 99 9", css_class: "fake-type" },
	0x44: { name: "9", css_class: "fake-type" },
	0x45: { name: "9 \u20BD99 9", css_class: "fake-type" },
	0x46: { name: "9 99 99 9", css_class: "fake-type" },
	0x47: { name: "9 Y9Y 9", css_class: "fake-type" },
	0x48: { name: "9", css_class: "fake-type" },
	0x49: { name: "9 9 99", css_class: "fake-type" },
	0x4A: { name: "9", css_class: "fake-type" },
	0x4B: { name: "9 99", css_class: "fake-type" },
	0x4C: { name: "POK\xE9 BB(PKMN)d\xE9 W\u2026\u2026N", css_class: "fake-type" },
	0x4D: { name: "POK\xE9 BB(PKMN)d\xE9 W\u2026\u2026N", css_class: "fake-type" },
	0x4E: { name: "h RED", css_class: "fake-type" },
	0x4F: { name: "(blank)", css_class: "fake-type" },
	0x50: { name: "(blank)", css_class: "fake-type" },
	0x51: { name: ",KPkMn(PLAYER NAME) x X", css_class: "fake-type" },
	0x52: { name: "(blank)", css_class: "fake-type" },
	0x53: { name: "8 8 9 2", css_class: "fake-type" },
	0x54: { name: "M j \u30A5Z ;tFROCKETY.\u300E POK\xE9 S ' R > h \u2640 f H j- b", css_class: "fake-type" },
	0x55: { name: "(illegible)", css_class: "fake-type" },
	0x56: { name: "(name of selected move)", css_class: "fake-type" },
	0x57: { name: "\u30A5PC \u30A5TM x'y\u30A5", css_class: "fake-type" },
	0x58: { name: "9", css_class: "fake-type" },
	0x59: { name: "A9 'y\u30A5", css_class: "fake-type" },
	0x5A: { name: "(illegible extremely long name)", css_class: "fake-type" },
	0x5B: { name: "YOUNGSTER", css_class: "fake-type" },
	0x5C: { name: "BUG CATCHER", css_class: "fake-type" },
	0x5D: { name: "LASS", css_class: "fake-type" },
	0x5E: { name: "(blank)", css_class: "fake-type" },
	0x5F: { name: "JR.TRAINER\u2642", css_class: "fake-type" },
	0x60: { name: "JR.TRAINER\u2640", css_class: "fake-type" },
	0x61: { name: "POK\xE9MANIAC", css_class: "fake-type" },
	0x62: { name: "SUPER NERD", css_class: "fake-type" },
	0x63: { name: "(blank)", css_class: "fake-type" },
	0x64: { name: "(blank)", css_class: "fake-type" },
	0x65: { name: "BURGLAR", css_class: "fake-type" },
	0x66: { name: "ENGINEER", css_class: "fake-type" },
	0x67: { name: "JUGGLER", css_class: "fake-type" },
	0x68: { name: "(blank)", css_class: "fake-type" },
	0x69: { name: "SWIMMER", css_class: "fake-type" },
	0x6A: { name: "(blank)", css_class: "fake-type" },
	0x6B: { name: "(blank)", css_class: "fake-type" },
	0x6C: { name: "BEAUTY", css_class: "fake-type" },
	0x6D: { name: "(blank)", css_class: "fake-type" },
	0x6E: { name: "ROCKER", css_class: "fake-type" },
	0x6F: { name: "JUGGLER", css_class: "fake-type" },
	0x70: { name: "(blank)", css_class: "fake-type" },
	0x71: { name: "(blank)", css_class: "fake-type" },
	0x72: { name: "BLACKBELT", css_class: "fake-type" },
	0x73: { name: "(blank)", css_class: "fake-type" },
	0x74: { name: "PROF.OAK", css_class: "fake-type" },
	0x75: { name: "CHIEF", css_class: "fake-type" },
	0x76: { name: "SCIENTIST", css_class: "fake-type" },
	0x77: { name: "(blank)", css_class: "fake-type" },
	0x78: { name: "ROCKET", css_class: "fake-type" },
	0x79: { name: "COOLTRAINER\u2642", css_class: "fake-type" },
	0x7A: { name: "COOLTRAINER\u2640", css_class: "fake-type" },
	0x7B: { name: "(blank)", css_class: "fake-type" },
	0x7C: { name: "(blank)", css_class: "fake-type" },
	0x7D: { name: "(blank)", css_class: "fake-type" },
	0x7E: { name: "(blank)", css_class: "fake-type" },
	0x7F: { name: "(blank)", css_class: "fake-type" },
	0x80: { name: "NORMAL", css_class: "fake-type" },
	0x81: { name: "FIGHTING", css_class: "fake-type" },
	0x82: { name: "FLYING", css_class: "fake-type" },
	0x83: { name: "POISON", css_class: "fake-type" },
	0x84: { name: "GROUND", css_class: "fake-type" },
	0x85: { name: "ROCK", css_class: "fake-type" },
	0x86: { name: "BIRD", css_class: "fake-type" },
	0x87: { name: "BUG", css_class: "fake-type" },
	0x88: { name: "GHOST", css_class: "fake-type" },
	0x89: { name: "NORMAL", css_class: "fake-type" },
	0x8A: { name: "NORMAL", css_class: "fake-type" },
	0x8B: { name: "NORMAL", css_class: "fake-type" },
	0x8C: { name: "NORMAL", css_class: "fake-type" },
	0x8D: { name: "NORMAL", css_class: "fake-type" },
	0x8E: { name: "NORMAL", css_class: "fake-type" },
	0x8F: { name: "NORMAL", css_class: "fake-type" },
	0x90: { name: "NORMAL", css_class: "fake-type" },
	0x91: { name: "NORMAL", css_class: "fake-type" },
	0x92: { name: "NORMAL", css_class: "fake-type" },
	0x93: { name: "NORMAL", css_class: "fake-type" },
	0x94: { name: "FIRE", css_class: "fake-type" },
	0x95: { name: "WATER", css_class: "fake-type" },
	0x96: { name: "GRASS", css_class: "fake-type" },
	0x97: { name: "ELECTRIC", css_class: "fake-type" },
	0x98: { name: "PSYCHIC", css_class: "fake-type" },
	0x99: { name: "ICE", css_class: "fake-type" },
	0x9A: { name: "DRAGON", css_class: "fake-type" },
	0x9D: { name: "9", css_class: "fake-type" },
	0xA5: { name: "9 99", css_class: "fake-type" },
	0xA9: { name: "POK\xE9 BB(PKMN)d\xE9", css_class: "fake-type" },
	0xB1: { name: "9", css_class: "fake-type" },
	0xC0: { name: "9", css_class: "fake-type" },
	0xC8: { name: "9", css_class: "fake-type" },
	0xE8: { name: "(blank)", css_class: "fake-type" },
};

(function () {
  Object.keys(type_lookup).forEach(key => {
	  var value = type_lookup[key];
	  
	  TypeLookup[key] = value;
  });
})();