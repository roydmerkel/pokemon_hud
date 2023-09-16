function DexIndexToPokemonIndex() {
  // Constructor body
}

var index_pokemon_lookup = {
	54:47,
	103:10,
	112:1,
	137:170,
	36:142,
	21:5,
	144:74,
	85:116,
	68:126,
	25:84,
	81:173,
	121:152,
	87:120,
	80:8,
	129:133,
	33:167,
	39:100,
	125:53,
	20:166,
	27:96,
	44:186,
	113:40,
	102:12,
	98:78,
	78:164,
	18:151,
	4:176,
	151:21,
	22:35,
	105:145,
	122:42,
	111:18,
	82:54,
	130:22,
	109:55,
	119:158,
	101:141,
	148:89,
	123:26,
	146:73,
	5:178,
	115:2,
	117:93,
	6:180,
	132:76,
	29:15,
	23:108,
	120:27,
	37:82,
	30:168,
	83:64,
	89:136,
	26:85,
	14:113,
	7:177,
	31:16,
	9:28,
	86:58,
	107:44,
	133:102,
	35:4,
	127:29,
	150:131,
	1:153,
	48:65,
	74:169,
	94:14,
	131:19,
	110:143,
	32:3,
	139:99,
	100:6,
	58:33,
	135:104,
	64:38,
	47:46,
	40:101,
	51:118,
	16:36,
	142:171,
	114:30,
	24:45,
	55:128,
	84:70,
	128:60,
	13:112,
	45:187,
	19:165,
	0:0,
	104:17,
	57:117,
	41:107,
	50:59,
	126:51,
	143:132,
	38:83,
	124:72,
	52:77,
	106:43,
	66:106,
	108:11,
	79:37,
	99:138,
	93:147,
	141:91,
	73:155,
	8:179,
	149:66,
	118:157,
	116:92,
	42:130,
	2:9,
	76:49,
	69:188,
	96:48,
	145:75,
	63:148,
	53:144,
	59:20,
	147:88,
	134:105,
	17:150,
	46:109,
	10:123,
	92:25,
	72:24,
	34:7,
	56:57,
	11:124,
	62:111,
	43:185,
	15:114,
	49:119,
	60:71,
	95:34,
	75:39,
	67:41,
	71:190,
	3:154,
	91:139,
	140:90,
	12:125,
	28:97,
	70:189,
	90:23,
	65:149,
	77:163,
	138:98,
	97:129,
	88:13,
	136:103,
	61:110,
	"-1": 255,
	"-2": 31,
	"-3": 182,
	"-4": 183,
	"-5": 184
};

(function () {
  // Static initialization code
  Object.keys(index_pokemon_lookup).forEach(key => {
	  var value = index_pokemon_lookup[key];
	  
	  DexIndexToPokemonIndex[key] = value;
  });
})();