function PokemonMovesLookup() {
  // Constructor body
}

var pokemon_tms_lookup = {
	"": { initial: [ ],
			levelup: {}, 
			tms: [ ], 
			hms: [ ], 
	}, // undefined / default value. 
	"-5": { initial: [ 55, 55, 143 ], 
			levelup: "last", 
			tms: "last", 
			hms: "last",
	}, // ghost missingno. -- learnset and tms/hms equal to last pokemon seen
	"-4": { initial: [ 55, 55, 143 ], 
			levelup: "last", 
			tms: "last", 
			hms: "last",
	}, // aerodactyl fossil missingno. -- learnset and tms/hms equal to last pokemon seen
	"-3": { initial: [ 55, 55, 143 ], 
			levelup: "last", 
			tms: "last", 
			hms: "last",
	}, // kabutops fossil missingno. -- learnset and tms/hms equal to last pokemon seen
	"-2": { initial: [ 55, 55, 143 ], 
			levelup: [ ], 
			tms: [ 1, 2, 3, 5, 6, 9, 10, 11, 13, 14, 17, 19, 20, 25, 26, 27, 29, 30, 43, 44, 45, 49 ], 
			hms: [ 1, 2],
	}, // missingno.
	"-1": { initial: [ 10, 45, 52, 43 ],
		levelup: { 
			1: 28,
			9: 14,
			11: 21,
			19: 250,
			28: 0,
			30: 209,
			32: 62,
			33: 229,
			38: 209,
			40: 2,
			48: 250,
			62: 0,
			99: 209,
			114: 19,
			119: 205,
			126: 71,
			144: 71,
			145: 207,
			146: 207,
			148: 207,
			163: 205,
			167: 32,
			185: 207,
			204: 33,
			205: 21,
			207: 167,
			209: 245,
			225: 1,
			229: 33,
			234: 73,
			241: 234,
			250: 148,
			254: 3,
		}, 
		tms: [ 1, 3, 5, 6, 8, 9, 10, 15, 17, 18, 19, 20, 23, 26, 27, 28, 31, 32, 33, 34, 38, 39, 40, 44, 50 ], 
		hms: [ 1, 4 ],
	}, //'M (255)
	"0": { 
		initial: [ 55, 55, 143 ],
		levelup: { 136: 1 }, 
		tms: [ 1, 2, 3, 5, 6, 9, 10, 11, 13, 14, 17, 19, 20, 25, 26, 27, 29, 30, 43, 44, 45, 49 ], 
		hms: [ 1, 2 ], 
	}, //'M (000)
	1: { initial: [ 33, 45 ],
			levelup: { 
				7: 73,
				13: 22,
				20: 77,
				27: 75,
				34: 74,
				41: 79,
				48: 76,
			},
			tms: [ 3, 6, 8, 9, 10, 20, 21, 22, 31, 32, 33, 34, 44, 50 ],
			hms: [ 1 ],
	}, //BULBASAUR
	2: { initial: [ 33, 45, 73 ],
			levelup: { 
				7: 73,
				13: 22,
				22: 77,
				30: 75,
				38: 74,
				46: 79,
				54: 76,
			},
			tms: [ 3, 6, 8, 9, 10, 20, 21, 22, 31, 32, 33, 34, 44, 50 ],
			hms: [ 1 ],
	}, //IVYSAUR
	3: { initial: [ 33, 45, 73, 22 ],
			levelup: { 
				7: 73,
				13: 22,
				22: 77,
				30: 75,
				43: 74,
				55: 79,
				65: 76,
			},
			tms: [ 3, 6, 8, 9, 10, 15, 20, 21, 22, 31, 32, 33, 34, 44, 50 ],
			hms: [ 1 ],
	}, //VENUSAUR
	4: { initial: [ 10, 45 ],
			levelup: { 
				9: 52,
				15: 43,
				22: 99,
				30: 163,
				38: 53,
				46: 83,
			},
			tms: [ 1, 3, 5, 6, 8, 9, 10, 17, 18, 19, 20, 23, 28, 31, 32, 33, 34, 38, 39, 40, 44, 50 ],
			hms: [ 1, 4 ],
	}, //CHARMANDER
	5: { initial: [ 10, 45, 52 ],
			levelup: { 
				9: 52,
				15: 43,
				24: 99,
				33: 163,
				42: 53,
				56: 83,
			},
			tms: [ 1, 3, 5, 6, 8, 9, 10, 17, 18, 19, 20, 23, 28, 31, 32, 33, 34, 38, 39, 40, 44, 50 ],
			hms: [ 1, 4 ],
	}, //CHARMELEON
	6: { initial: [ 10, 45, 52, 43 ],
			levelup: { 
				9: 52,
				15: 43,
				24: 99,
				36: 163,
				46: 53,
				55: 83,
			},
			tms: [ 1, 3, 5, 6, 8, 9, 10, 15, 17, 18, 19, 20, 23, 26, 27, 28, 31, 32, 33, 34, 38, 39, 40, 44, 50 ],
			hms: [ 1, 4 ],
	}, //CHARIZARD
	7: { initial: [ 33, 39 ],
			levelup: { 
				8: 145,
				15: 55,
				22: 44,
				28: 110,
				35: 130,
				42: 56,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 11, 12, 13, 14, 17, 18, 19, 20, 28, 31, 32, 33, 34, 40, 44, 50 ],
			hms: [ 3, 4 ],
	}, //SQUIRTLE
	8: { initial: [ 33, 39, 145 ],
			levelup: { 
				8: 145,
				15: 55,
				24: 44,
				31: 110,
				39: 130,
				47: 56,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 11, 12, 13, 14, 17, 18, 19, 20, 28, 31, 32, 33, 34, 40, 44, 50 ],
			hms: [ 3, 4 ],
	}, //WARTORTLE
	9: { initial: [ 33, 39, 145, 55 ],
			levelup: { 
				8: 145,
				15: 55,
				24: 44,
				31: 110,
				42: 130,
				52: 56,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 26, 27, 28, 31, 32, 33, 34, 40, 44, 50 ],
			hms: [ 3, 4 ],
	}, //BLASTOISE
	10: { initial: [ 33, 81 ],
			levelup: { 
			},
			tms: [  ],
			hms: [  ],
	}, //CATERPIE
	11: { initial: [ 106 ],
			levelup: { 
			},
			tms: [  ],
			hms: [  ],
	}, //METAPOD
	12: { initial: [ 93 ],
			levelup: { 
				12: 93,
				15: 77,
				16: 78,
				17: 79,
				21: 48,
				26: 18,
				32: 60,
			},
			tms: [ 2, 4, 6, 9, 10, 15, 20, 21, 22, 29, 30, 31, 32, 33, 34, 39, 44, 46, 50 ],
			hms: [  ],
	}, //BUTTERFREE
	13: { initial: [ 40, 81 ],
			levelup: { 
			},
			tms: [  ],
			hms: [  ],
	}, //WEEDLE
	14: { initial: [ 106 ],
			levelup: { 
			},
			tms: [  ],
			hms: [  ],
	}, //KAKUNA
	15: { initial: [ 31 ],
			levelup: { 
				12: 31,
				16: 116,
				20: 41,
				25: 99,
				30: 42,
				35: 97,
			},
			tms: [ 3, 6, 9, 10, 15, 20, 21, 31, 32, 33, 34, 39, 40, 44, 50 ],
			hms: [ 1 ],
	}, //BEEDRILL
	16: { initial: [ 16 ],
			levelup: { 
				5: 28,
				12: 98,
				19: 18,
				28: 17,
				36: 97,
				44: 119,
			},
			tms: [ 2, 4, 6, 9, 10, 20, 31, 32, 33, 34, 39, 43, 44, 50 ],
			hms: [ 2 ],
	}, //PIDGEY
	17: { initial: [ 16, 28 ],
			levelup: { 
				5: 28,
				12: 98,
				21: 18,
				31: 17,
				40: 97,
				49: 119,
			},
			tms: [ 2, 4, 6, 9, 10, 20, 31, 32, 33, 34, 39, 43, 44, 50 ],
			hms: [ 2 ],
	}, //PIDGEOTTO
	18: { initial: [ 16, 28, 98 ],
			levelup: { 
				5: 28,
				12: 98,
				21: 18,
				31: 17,
				44: 97,
				54: 119,
			},
			tms: [ 2, 4, 6, 9, 10, 15, 20, 31, 32, 33, 34, 39, 43, 44, 50 ],
			hms: [ 2 ],
	}, //PIDGEOT
	19: { initial: [ 33, 39 ],
			levelup: { 
				7: 98,
				14: 158,
				23: 116,
				34: 162,
			},
			tms: [ 6, 8, 9, 10, 11, 12, 14, 20, 24, 25, 28, 31, 32, 34, 39, 40, 44, 50 ],
			hms: [  ],
	}, //RATTATA
	20: { initial: [ 33, 39, 98 ],
			levelup: { 
				7: 98,
				14: 158,
				27: 116,
				41: 162,
			},
			tms: [ 6, 8, 9, 10, 11, 12, 13, 14, 15, 20, 24, 25, 28, 31, 32, 34, 39, 40, 44, 50 ],
			hms: [  ],
	}, //RATICATE
	21: { initial: [ 64, 45 ],
			levelup: { 
				9: 43,
				15: 31,
				22: 119,
				29: 65,
				36: 97,
			},
			tms: [ 2, 4, 6, 9, 10, 20, 31, 32, 34, 39, 43, 44, 50 ],
			hms: [ 2 ],
	}, //SPEAROW
	22: { initial: [ 64, 45, 43 ],
			levelup: { 
				9: 43,
				15: 31,
				25: 119,
				34: 65,
				43: 97,
			},
			tms: [ 2, 4, 6, 9, 10, 15, 20, 31, 32, 34, 39, 43, 44, 50 ],
			hms: [ 2 ],
	}, //FEAROW
	23: { initial: [ 35, 43 ],
			levelup: { 
				10: 40,
				17: 44,
				24: 137,
				31: 103,
				38: 51,
			},
			tms: [ 6, 8, 9, 10, 20, 21, 26, 27, 28, 31, 32, 34, 40, 44, 48, 50 ],
			hms: [ 4 ],
	}, //EKANS
	24: { initial: [ 35, 43, 40 ],
			levelup: { 
				10: 40,
				17: 44,
				27: 137,
				36: 103,
				47: 51,
			},
			tms: [ 6, 8, 9, 10, 15, 20, 21, 26, 27, 28, 31, 32, 34, 40, 44, 48, 50 ],
			hms: [ 4 ],
	}, //ARBOK
	25: { initial: [ 84, 45 ],
			levelup: { 
				9: 86,
				16: 98,
				26: 129,
				33: 97,
				43: 87,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 16, 17, 19, 20, 24, 25, 31, 32, 33, 34, 39, 40, 44, 45, 50 ],
			hms: [ 5 ],
	}, //PIKACHU
	26: { initial: [ 84, 45, 86 ],
			levelup: { 
			},
			tms: [ 1, 5, 6, 8, 9, 10, 15, 16, 17, 19, 20, 24, 25, 31, 32, 33, 34, 39, 40, 44, 45, 50 ],
			hms: [ 5 ],
	}, //RAICHU
	27: { initial: [ 10 ],
			levelup: { 
				10: 28,
				17: 163,
				24: 40,
				31: 129,
				38: 154,
			},
			tms: [ 3, 6, 8, 9, 10, 17, 19, 20, 26, 27, 28, 31, 32, 34, 39, 40, 44, 48, 50 ],
			hms: [ 1, 4 ],
	}, //SANDSHREW
	28: { initial: [ 10, 28 ],
			levelup: { 
				10: 28,
				17: 163,
				27: 40,
				36: 129,
				47: 154,
			},
			tms: [ 3, 6, 8, 9, 10, 15, 17, 19, 20, 26, 27, 28, 31, 32, 34, 39, 40, 44, 48, 50 ],
			hms: [ 1, 4 ],
	}, //SANDSLASH
	29: { initial: [ 45, 33 ],
			levelup: { 
				8: 10,
				14: 40,
				21: 39,
				29: 44,
				36: 154,
				43: 24,
			},
			tms: [ 6, 8, 9, 10, 14, 20, 24, 25, 31, 32, 33, 34, 40, 44, 50 ],
			hms: [  ],
	}, //NIDORAN\u2640
	30: { initial: [ 45, 33, 10 ],
			levelup: { 
				8: 10,
				14: 40,
				23: 39,
				32: 44,
				41: 154,
				50: 24,
			},
			tms: [ 6, 7, 8, 9, 10, 11, 12, 13, 14, 20, 24, 25, 31, 32, 33, 34, 40, 44, 50 ],
			hms: [  ],
	}, //NIDORINA
	31: { initial: [ 33, 10, 39, 34 ],
			levelup: { 
				8: 10,
				14: 40,
				23: 34,
			},
			tms: [ 1, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 25, 26, 27, 31, 32, 33, 34, 38, 40, 44, 48, 50 ],
			hms: [ 3, 4 ],
	}, //NIDOQUEEN
	32: { initial: [ 43, 33 ],
			levelup: { 
				8: 30,
				14: 40,
				21: 116,
				29: 31,
				36: 32,
				43: 24,
			},
			tms: [ 6, 7, 8, 9, 10, 14, 20, 24, 25, 31, 32, 33, 34, 40, 44, 50 ],
			hms: [  ],
	}, //NIDORAN\u2642
	33: { initial: [ 43, 33, 30 ],
			levelup: { 
				8: 30,
				14: 40,
				23: 116,
				32: 31,
				41: 32,
				50: 24,
			},
			tms: [ 6, 7, 8, 9, 10, 11, 12, 13, 14, 20, 24, 25, 31, 32, 33, 34, 40, 44, 50 ],
			hms: [  ],
	}, //NIDORINO
	34: { initial: [ 33, 30, 40, 37 ],
			levelup: { 
				8: 30,
				14: 40,
				23: 37,
			},
			tms: [ 1, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 25, 26, 27, 31, 32, 33, 34, 38, 40, 44, 48, 50 ],
			hms: [ 3, 4 ],
	}, //NIDOKING
	35: { initial: [ 1, 45 ],
			levelup: { 
				13: 47,
				18: 3,
				24: 107,
				31: 118,
				39: 111,
				48: 113,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 11, 12, 13, 14, 17, 18, 19, 20, 22, 24, 25, 29, 30, 31, 32, 33, 34, 35, 38, 40, 44, 45, 46, 49, 50 ],
			hms: [ 4, 5 ],
	}, //CLEFAIRY
	36: { initial: [ 47, 3, 107, 118 ],
			levelup: { 
			},
			tms: [ 1, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 22, 24, 25, 29, 30, 31, 32, 33, 34, 35, 38, 40, 44, 45, 46, 49, 50 ],
			hms: [ 4, 5 ],
	}, //CLEFABLE
	37: { initial: [ 52, 39 ],
			levelup: { 
				16: 98,
				21: 46,
				28: 109,
				35: 53,
				42: 83,
			},
			tms: [ 6, 8, 9, 10, 20, 28, 31, 32, 33, 34, 38, 39, 40, 44, 50 ],
			hms: [  ],
	}, //VULPIX
	38: { initial: [ 52, 39, 98, 46 ],
			levelup: { 
			},
			tms: [ 6, 8, 9, 10, 15, 20, 28, 31, 32, 33, 34, 38, 39, 40, 44, 50 ],
			hms: [  ],
	}, //NINETALES
	39: { initial: [ 47 ],
			levelup: { 
				9: 1,
				14: 50,
				19: 111,
				24: 3,
				29: 156,
				34: 34,
				39: 38,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 11, 12, 13, 14, 17, 18, 19, 20, 22, 24, 25, 29, 30, 31, 32, 33, 34, 38, 40, 44, 45, 46, 49, 50 ],
			hms: [ 4, 5 ],
	}, //JIGGLYPUFF
	40: { initial: [ 47, 50, 111, 3 ],
			levelup: { 
			},
			tms: [ 1, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 22, 24, 25, 29, 30, 31, 32, 33, 34, 38, 40, 44, 45, 46, 49, 50 ],
			hms: [ 4, 5 ],
	}, //WIGGLYTUFF
	41: { initial: [ 141 ],
			levelup: { 
				10: 48,
				15: 44,
				21: 109,
				28: 17,
				36: 114,
			},
			tms: [ 2, 4, 6, 9, 10, 20, 21, 31, 32, 34, 39, 44, 50 ],
			hms: [  ],
	}, //ZUBAT
	42: { initial: [ 141, 103, 44 ],
			levelup: { 
				10: 48,
				15: 44,
				21: 109,
				32: 17,
				43: 114,
			},
			tms: [ 2, 4, 6, 9, 10, 15, 20, 21, 31, 32, 34, 39, 44, 50 ],
			hms: [  ],
	}, //GOLBAT
	43: { initial: [ 71 ],
			levelup: { 
				15: 77,
				17: 78,
				19: 79,
				24: 51,
				33: 80,
				46: 76,
			},
			tms: [ 3, 6, 9, 10, 20, 21, 22, 31, 32, 33, 34, 44, 50 ],
			hms: [ 1 ],
	}, //ODDISH
	44: { initial: [ 71, 77, 78 ],
			levelup: { 
				15: 77,
				17: 78,
				19: 79,
				28: 51,
				38: 80,
				52: 76,
			},
			tms: [ 3, 6, 9, 10, 20, 21, 22, 31, 32, 33, 34, 44, 50 ],
			hms: [ 1 ],
	}, //GLOOM
	45: { initial: [ 78, 79, 51, 80 ],
			levelup: { 
				15: 77,
				17: 78,
				19: 79,
			},
			tms: [ 3, 6, 8, 9, 10, 15, 20, 21, 22, 31, 32, 33, 34, 44, 50 ],
			hms: [ 1 ],
	}, //VILEPLUME
	46: { initial: [ 10 ],
			levelup: { 
				13: 78,
				20: 141,
				27: 147,
				34: 163,
				41: 74,
			},
			tms: [ 3, 6, 8, 9, 10, 20, 21, 22, 28, 31, 32, 33, 34, 40, 44, 50 ],
			hms: [ 1 ],
	}, //PARAS
	47: { initial: [ 10, 78, 141 ],
			levelup: { 
				13: 78,
				20: 141,
				30: 147,
				39: 163,
				48: 74,
			},
			tms: [ 3, 6, 8, 9, 10, 15, 20, 21, 22, 28, 31, 32, 33, 34, 40, 44, 50 ],
			hms: [ 1 ],
	}, //PARASECT
	48: { initial: [ 33, 50 ],
			levelup: { 
				24: 77,
				27: 141,
				30: 78,
				35: 60,
				38: 79,
				43: 94,
			},
			tms: [ 6, 9, 10, 20, 21, 22, 29, 31, 32, 33, 34, 44, 46, 50 ],
			hms: [  ],
	}, //VENONAT
	49: { initial: [ 33, 50, 77, 141 ],
			levelup: { 
				24: 77,
				27: 141,
				30: 78,
				38: 60,
				43: 79,
				50: 94,
			},
			tms: [ 2, 4, 6, 9, 10, 15, 20, 21, 22, 29, 30, 31, 32, 33, 34, 39, 44, 46, 50 ],
			hms: [  ],
	}, //VENOMOTH
	50: { initial: [ 10 ],
			levelup: { 
				15: 45,
				19: 91,
				24: 28,
				31: 163,
				40: 89,
			},
			tms: [ 6, 8, 9, 10, 20, 26, 27, 28, 31, 32, 34, 44, 48, 50 ],
			hms: [  ],
	}, //DIGLETT
	51: { initial: [ 10, 45, 91 ],
			levelup: { 
				15: 45,
				19: 91,
				24: 28,
				35: 163,
				47: 89,
			},
			tms: [ 6, 8, 9, 10, 15, 20, 26, 27, 28, 31, 32, 34, 44, 48, 50 ],
			hms: [  ],
	}, //DUGTRIO
	52: { initial: [ 10, 45 ],
			levelup: { 
				12: 44,
				17: 6,
				24: 103,
				33: 154,
				44: 163,
			},
			tms: [ 6, 8, 9, 10, 11, 12, 16, 20, 24, 25, 31, 32, 34, 39, 40, 44, 50 ],
			hms: [  ],
	}, //MEOWTH
	53: { initial: [ 10, 45, 44, 103 ],
			levelup: { 
				12: 44,
				17: 6,
				24: 103,
				37: 154,
				51: 163,
			},
			tms: [ 6, 8, 9, 10, 11, 12, 15, 16, 20, 24, 25, 31, 32, 34, 39, 40, 44, 50 ],
			hms: [  ],
	}, //PERSIAN
	54: { initial: [ 10 ],
			levelup: { 
				28: 39,
				31: 50,
				36: 93,
				43: 154,
				52: 56,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 28, 31, 32, 34, 39, 40, 44, 50 ],
			hms: [ 3, 4 ],
	}, //PSYDUCK
	55: { initial: [ 10, 39, 50 ],
			levelup: { 
				28: 39,
				31: 50,
				39: 93,
				48: 154,
				59: 56,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 28, 31, 32, 34, 39, 40, 44, 50 ],
			hms: [ 3, 4 ],
	}, //GOLDUCK
	56: { initial: [ 10, 43 ],
			levelup: { 
				15: 2,
				21: 154,
				27: 116,
				33: 69,
				39: 37,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 16, 17, 18, 19, 20, 24, 25, 28, 31, 32, 34, 35, 39, 40, 44, 48, 50 ],
			hms: [ 4 ],
	}, //MANKEY
	57: { initial: [ 10, 43, 2, 154 ],
			levelup: { 
				15: 2,
				21: 154,
				27: 116,
				37: 69,
				46: 37,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 15, 16, 17, 18, 19, 20, 24, 25, 28, 31, 32, 34, 35, 39, 40, 44, 48, 50 ],
			hms: [ 4 ],
	}, //PRIMEAPE
	58: { initial: [ 44, 46 ],
			levelup: { 
				18: 52,
				23: 43,
				30: 36,
				39: 97,
				50: 53,
			},
			tms: [ 6, 8, 9, 10, 20, 23, 28, 31, 32, 33, 34, 38, 39, 40, 44, 50 ],
			hms: [  ],
	}, //GROWLITHE
	59: { initial: [ 46, 52, 43, 36 ],
			levelup: { 
			},
			tms: [ 6, 8, 9, 10, 15, 20, 23, 28, 30, 31, 32, 33, 34, 38, 39, 40, 44, 50 ],
			hms: [  ],
	}, //ARCANINE
	60: { initial: [ 145 ],
			levelup: { 
				16: 95,
				19: 55,
				25: 3,
				31: 34,
				38: 133,
				45: 56,
			},
			tms: [ 6, 8, 9, 10, 11, 12, 13, 14, 20, 29, 31, 32, 34, 40, 44, 46, 50 ],
			hms: [ 3 ],
	}, //POLIWAG
	61: { initial: [ 145, 95, 55 ],
			levelup: { 
				16: 95,
				19: 55,
				26: 3,
				33: 34,
				41: 133,
				49: 56,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 11, 12, 13, 14, 17, 18, 19, 20, 26, 27, 29, 31, 32, 34, 35, 40, 44, 46, 50 ],
			hms: [ 3, 4 ],
	}, //POLIWHIRL
	62: { initial: [ 95, 55, 3, 34 ],
			levelup: { 
				16: 95,
				19: 55,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 26, 27, 29, 31, 32, 34, 35, 40, 44, 46, 50 ],
			hms: [ 3, 4 ],
	}, //POLIWRATH
	63: { initial: [ 100 ],
			levelup: { 
			},
			tms: [ 1, 5, 6, 8, 9, 10, 17, 18, 19, 20, 29, 30, 31, 32, 33, 34, 35, 40, 44, 45, 46, 49, 50 ],
			hms: [ 5 ],
	}, //ABRA
	64: { initial: [ 100, 93, 50 ],
			levelup: { 
				16: 93,
				20: 50,
				27: 60,
				31: 105,
				38: 94,
				42: 115,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 17, 18, 19, 20, 28, 29, 30, 31, 32, 33, 34, 35, 40, 44, 45, 46, 49, 50 ],
			hms: [ 5 ],
	}, //KADABRA
	65: { initial: [ 100, 93, 50 ],
			levelup: { 
				16: 93,
				20: 50,
				27: 60,
				31: 105,
				38: 94,
				42: 115,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 15, 17, 18, 19, 20, 28, 29, 30, 31, 32, 33, 34, 35, 40, 44, 45, 46, 49, 50 ],
			hms: [ 5 ],
	}, //ALAKAZAM
	66: { initial: [ 2 ],
			levelup: { 
				20: 67,
				25: 43,
				32: 116,
				39: 69,
				46: 66,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 17, 18, 19, 20, 26, 27, 28, 31, 32, 34, 35, 38, 40, 44, 48, 50 ],
			hms: [ 4 ],
	}, //MACHOP
	67: { initial: [ 2, 67, 43 ],
			levelup: { 
				20: 67,
				25: 43,
				36: 116,
				44: 69,
				52: 66,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 17, 18, 19, 20, 26, 27, 28, 31, 32, 34, 35, 38, 40, 44, 48, 50 ],
			hms: [ 4 ],
	}, //MACHOKE
	68: { initial: [ 2, 67, 43 ],
			levelup: { 
				20: 67,
				25: 43,
				36: 116,
				44: 69,
				52: 66,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 15, 17, 18, 19, 20, 26, 27, 28, 31, 32, 34, 35, 38, 40, 44, 48, 50 ],
			hms: [ 4 ],
	}, //MACHAMP
	69: { initial: [ 22, 74 ],
			levelup: { 
				13: 35,
				15: 77,
				18: 79,
				21: 78,
				26: 51,
				33: 75,
				42: 21,
			},
			tms: [ 3, 6, 9, 10, 20, 21, 22, 31, 32, 33, 34, 44, 50 ],
			hms: [ 1 ],
	}, //BELLSPROUT
	70: { initial: [ 22, 74, 35 ],
			levelup: { 
				13: 35,
				15: 77,
				18: 79,
				23: 78,
				29: 51,
				38: 75,
				49: 21,
			},
			tms: [ 3, 6, 9, 10, 20, 21, 22, 31, 32, 33, 34, 44, 50 ],
			hms: [ 1 ],
	}, //WEEPINBELL
	71: { initial: [ 79, 78, 51, 75 ],
			levelup: { 
				13: 35,
				15: 77,
				18: 79,
			},
			tms: [ 3, 6, 8, 9, 10, 15, 20, 21, 22, 31, 32, 33, 34, 44, 50 ],
			hms: [ 1 ],
	}, //VICTREEBEL
	72: { initial: [ 51 ],
			levelup: { 
				7: 48,
				13: 35,
				18: 40,
				22: 55,
				27: 132,
				33: 112,
				40: 103,
				48: 56,
			},
			tms: [ 3, 6, 9, 10, 11, 12, 13, 14, 20, 21, 31, 32, 33, 34, 40, 44, 50 ],
			hms: [ 1, 3 ],
	}, //TENTACOOL
	73: { initial: [ 51, 48, 35 ],
			levelup: { 
				7: 48,
				13: 35,
				18: 40,
				22: 55,
				27: 132,
				35: 112,
				43: 103,
				50: 56,
			},
			tms: [ 3, 6, 9, 10, 11, 12, 13, 14, 15, 20, 21, 31, 32, 33, 34, 40, 44, 50 ],
			hms: [ 1, 3 ],
	}, //TENTACRUEL
	74: { initial: [ 33 ],
			levelup: { 
				11: 111,
				16: 88,
				21: 120,
				26: 106,
				31: 89,
				36: 153,
			},
			tms: [ 1, 6, 8, 9, 10, 17, 18, 19, 20, 26, 27, 28, 31, 32, 34, 35, 36, 38, 44, 47, 48, 50 ],
			hms: [ 4 ],
	}, //GEODUDE
	75: { initial: [ 33, 111 ],
			levelup: { 
				11: 111,
				16: 88,
				21: 120,
				29: 106,
				36: 89,
				43: 153,
			},
			tms: [ 1, 6, 8, 9, 10, 17, 18, 19, 20, 26, 27, 28, 31, 32, 34, 35, 36, 38, 44, 47, 48, 50 ],
			hms: [ 4 ],
	}, //GRAVELER
	76: { initial: [ 33, 111 ],
			levelup: { 
				11: 111,
				16: 88,
				21: 120,
				29: 106,
				36: 89,
				43: 153,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 15, 17, 18, 19, 20, 26, 27, 28, 31, 32, 34, 35, 36, 38, 44, 47, 48, 50 ],
			hms: [ 4 ],
	}, //GOLEM
	77: { initial: [ 52 ],
			levelup: { 
				30: 39,
				32: 23,
				35: 45,
				39: 83,
				43: 36,
				48: 97,
			},
			tms: [ 6, 7, 8, 9, 10, 20, 31, 32, 33, 34, 38, 39, 40, 44, 50 ],
			hms: [  ],
	}, //PONYTA
	78: { initial: [ 52, 39, 23, 45 ],
			levelup: { 
				30: 39,
				32: 23,
				35: 45,
				39: 83,
				47: 36,
				55: 97,
			},
			tms: [ 6, 7, 8, 9, 10, 15, 20, 31, 32, 33, 34, 38, 39, 40, 44, 50 ],
			hms: [  ],
	}, //RAPIDASH
	79: { initial: [ 93 ],
			levelup: { 
				18: 50,
				22: 29,
				27: 45,
				33: 55,
				40: 133,
				48: 94,
			},
			tms: [ 6, 8, 9, 10, 11, 12, 13, 14, 16, 20, 26, 27, 28, 29, 30, 31, 32, 33, 34, 38, 39, 40, 44, 45, 46, 49, 50 ],
			hms: [ 3, 4, 5 ],
	}, //SLOWPOKE
	80: { initial: [ 93, 50, 29 ],
			levelup: { 
				18: 50,
				22: 29,
				27: 45,
				33: 55,
				37: 110,
				44: 133,
				55: 94,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 26, 27, 28, 29, 30, 31, 32, 33, 34, 38, 39, 40, 44, 45, 46, 49, 50 ],
			hms: [ 3, 4, 5 ],
	}, //SLOWBRO
	81: { initial: [ 33 ],
			levelup: { 
				21: 49,
				25: 84,
				29: 48,
				35: 86,
				41: 129,
				47: 103,
			},
			tms: [ 6, 9, 10, 20, 24, 25, 30, 31, 32, 33, 34, 39, 44, 45, 50 ],
			hms: [ 5 ],
	}, //MAGNEMITE
	82: { initial: [ 33, 49, 84 ],
			levelup: { 
				21: 49,
				25: 84,
				29: 48,
				38: 86,
				46: 129,
				54: 103,
			},
			tms: [ 6, 9, 10, 15, 20, 24, 25, 30, 31, 32, 33, 34, 39, 44, 45, 50 ],
			hms: [ 5 ],
	}, //MAGNETON
	83: { initial: [ 64, 28 ],
			levelup: { 
				7: 43,
				15: 31,
				23: 14,
				31: 97,
				39: 163,
			},
			tms: [ 2, 3, 4, 6, 8, 9, 10, 20, 31, 32, 33, 34, 39, 40, 44, 50 ],
			hms: [ 1, 2 ],
	}, //FARFETCH'D
	84: { initial: [ 64 ],
			levelup: { 
				20: 45,
				24: 31,
				30: 65,
				36: 99,
				40: 161,
				44: 97,
			},
			tms: [ 4, 6, 8, 9, 10, 20, 31, 32, 33, 34, 40, 43, 44, 49, 50 ],
			hms: [ 2 ],
	}, //DODUO
	85: { initial: [ 64, 45, 31 ],
			levelup: { 
				20: 45,
				24: 31,
				30: 65,
				39: 99,
				45: 161,
				51: 97,
			},
			tms: [ 4, 6, 8, 9, 10, 15, 20, 31, 32, 33, 34, 40, 43, 44, 49, 50 ],
			hms: [ 2 ],
	}, //DODRIO
	86: { initial: [ 29 ],
			levelup: { 
				30: 45,
				35: 62,
				40: 156,
				45: 36,
				50: 58,
			},
			tms: [ 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 20, 31, 32, 34, 40, 44, 50 ],
			hms: [ 3, 4 ],
	}, //SEEL
	87: { initial: [ 29, 45, 62 ],
			levelup: { 
				30: 45,
				35: 62,
				44: 156,
				50: 36,
				56: 58,
			},
			tms: [ 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 20, 31, 32, 34, 40, 44, 50 ],
			hms: [ 3, 4 ],
	}, //DEWGONG
	88: { initial: [ 1, 50 ],
			levelup: { 
				30: 139,
				33: 107,
				37: 124,
				42: 106,
				48: 103,
				55: 151,
			},
			tms: [ 6, 8, 20, 21, 24, 25, 31, 32, 34, 36, 38, 44, 47, 50 ],
			hms: [  ],
	}, //GRIMER
	89: { initial: [ 1, 50, 139 ],
			levelup: { 
				30: 139,
				33: 107,
				37: 124,
				45: 106,
				53: 103,
				60: 151,
			},
			tms: [ 6, 8, 15, 20, 21, 24, 25, 31, 32, 34, 36, 38, 44, 47, 50 ],
			hms: [  ],
	}, //MUK
	90: { initial: [ 33, 110 ],
			levelup: { 
				18: 48,
				23: 128,
				30: 62,
				39: 43,
				50: 58,
			},
			tms: [ 6, 9, 10, 11, 12, 13, 14, 20, 30, 31, 32, 33, 34, 36, 39, 44, 47, 49, 50 ],
			hms: [ 3 ],
	}, //SHELLDER
	91: { initial: [ 110, 48, 128, 62 ],
			levelup: { 
				50: 131,
			},
			tms: [ 6, 9, 10, 11, 12, 13, 14, 15, 20, 30, 31, 32, 33, 34, 36, 39, 44, 47, 49, 50 ],
			hms: [ 3 ],
	}, //CLOYSTER
	92: { initial: [ 122, 109, 101 ],
			levelup: { 
				27: 95,
				35: 138,
			},
			tms: [ 6, 20, 21, 24, 25, 29, 31, 32, 34, 36, 42, 44, 46, 47, 50 ],
			hms: [  ],
	}, //GASTLY
	93: { initial: [ 122, 109, 101 ],
			levelup: { 
				29: 95,
				38: 138,
			},
			tms: [ 6, 20, 21, 24, 25, 29, 31, 32, 34, 36, 42, 44, 46, 47, 50 ],
			hms: [  ],
	}, //HAUNTER
	94: { initial: [ 122, 109, 101 ],
			levelup: { 
				29: 95,
				38: 138,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 15, 17, 18, 19, 20, 21, 24, 25, 29, 31, 32, 34, 35, 36, 40, 42, 44, 46, 47, 50 ],
			hms: [ 4 ],
	}, //GENGAR
	95: { initial: [ 33, 103 ],
			levelup: { 
				15: 20,
				19: 88,
				25: 99,
				33: 21,
				43: 106,
			},
			tms: [ 6, 8, 9, 10, 20, 26, 27, 28, 31, 32, 34, 36, 40, 44, 47, 48, 50 ],
			hms: [ 4 ],
	}, //ONIX
	96: { initial: [ 1, 95 ],
			levelup: { 
				12: 50,
				17: 93,
				24: 29,
				29: 139,
				32: 94,
				37: 96,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 17, 18, 19, 20, 29, 30, 31, 32, 33, 34, 35, 40, 42, 44, 45, 46, 49, 50 ],
			hms: [ 5 ],
	}, //DROWZEE
	97: { initial: [ 1, 95, 50, 93 ],
			levelup: { 
				12: 50,
				17: 93,
				24: 29,
				33: 139,
				37: 94,
				43: 96,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 15, 17, 18, 19, 20, 29, 30, 31, 32, 33, 34, 35, 40, 42, 44, 45, 46, 49, 50 ],
			hms: [ 5 ],
	}, //HYPNO
	98: { initial: [ 145, 43 ],
			levelup: { 
				20: 11,
				25: 12,
				30: 23,
				35: 152,
				40: 106,
			},
			tms: [ 3, 6, 8, 9, 10, 11, 12, 13, 14, 20, 31, 32, 34, 44, 50 ],
			hms: [ 1, 3, 4 ],
	}, //KRABBY
	99: { initial: [ 145, 43, 11 ],
			levelup: { 
				20: 11,
				25: 12,
				34: 23,
				42: 152,
				49: 106,
			},
			tms: [ 3, 6, 8, 9, 10, 11, 12, 13, 14, 15, 20, 31, 32, 34, 44, 50 ],
			hms: [ 1, 3, 4 ],
	}, //KINGLER
	100: { initial: [ 33, 103 ],
			levelup: { 
				17: 49,
				22: 120,
				29: 113,
				36: 129,
				43: 153,
			},
			tms: [ 6, 9, 20, 24, 25, 30, 31, 32, 33, 34, 36, 39, 44, 45, 47, 50 ],
			hms: [ 5 ],
	}, //VOLTORB
	101: { initial: [ 33, 103, 49 ],
			levelup: { 
				17: 49,
				22: 120,
				29: 113,
				40: 129,
				50: 153,
			},
			tms: [ 6, 9, 15, 20, 24, 25, 30, 31, 32, 33, 34, 36, 39, 40, 44, 45, 47, 50 ],
			hms: [ 5 ],
	}, //ELECTRODE
	102: { initial: [ 140, 95 ],
			levelup: { 
				25: 115,
				28: 73,
				32: 78,
				37: 77,
				42: 76,
				48: 79,
			},
			tms: [ 6, 9, 10, 20, 29, 30, 31, 32, 33, 34, 36, 37, 44, 46, 47, 50 ],
			hms: [  ],
	}, //EXEGGCUTE
	103: { initial: [ 140, 95 ],
			levelup: { 
				28: 23,
			},
			tms: [ 6, 9, 10, 15, 20, 21, 22, 29, 30, 31, 32, 33, 34, 36, 37, 44, 46, 47, 50 ],
			hms: [ 4 ],
	}, //EXEGGUTOR
	104: { initial: [ 125, 45 ],
			levelup: { 
				25: 43,
				31: 116,
				38: 37,
				43: 155,
				46: 99,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 11, 12, 13, 14, 17, 18, 19, 20, 26, 27, 28, 31, 32, 34, 38, 40, 44, 50 ],
			hms: [ 4 ],
	}, //CUBONE
	105: { initial: [ 125, 45, 43, 116 ],
			levelup: { 
				25: 43,
				33: 116,
				41: 37,
				48: 155,
				55: 99,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 26, 27, 28, 31, 32, 34, 38, 40, 44, 50 ],
			hms: [ 4 ],
	}, //MAROWAK
	106: { initial: [ 24, 96 ],
			levelup: { 
				33: 27,
				38: 26,
				43: 116,
				48: 136,
				53: 25,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 17, 18, 19, 20, 31, 32, 34, 35, 39, 40, 44, 50 ],
			hms: [ 4 ],
	}, //HITMONLEE
	107: { initial: [ 4, 97 ],
			levelup: { 
				33: 7,
				38: 8,
				43: 9,
				48: 5,
				53: 68,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 17, 18, 19, 20, 31, 32, 34, 35, 39, 40, 44, 50 ],
			hms: [ 4 ],
	}, //HITMONCHAN
	108: { initial: [ 35, 48 ],
			levelup: { 
				7: 23,
				15: 50,
				23: 111,
				31: 21,
				39: 103,
			},
			tms: [ 1, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 24, 25, 26, 27, 31, 32, 34, 38, 40, 44, 50 ],
			hms: [ 1, 3, 4 ],
	}, //LICKITUNG
	109: { initial: [ 33, 123 ],
			levelup: { 
				32: 124,
				37: 108,
				40: 120,
				45: 114,
				48: 153,
			},
			tms: [ 6, 20, 24, 25, 31, 32, 34, 36, 38, 44, 47, 50 ],
			hms: [  ],
	}, //KOFFING
	110: { initial: [ 33, 123, 124 ],
			levelup: { 
				32: 124,
				39: 108,
				43: 120,
				49: 114,
				53: 153,
			},
			tms: [ 6, 15, 20, 24, 25, 31, 32, 34, 36, 38, 44, 47, 50 ],
			hms: [  ],
	}, //WEEZING
	111: { initial: [ 30 ],
			levelup: { 
				30: 23,
				35: 39,
				40: 31,
				45: 32,
				50: 43,
				55: 36,
			},
			tms: [ 6, 7, 8, 9, 10, 20, 24, 25, 26, 27, 28, 31, 32, 34, 38, 40, 44, 48, 50 ],
			hms: [ 4 ],
	}, //RHYHORN
	112: { initial: [ 30, 23, 39, 31 ],
			levelup: { 
				30: 23,
				35: 39,
				40: 31,
				48: 32,
				55: 43,
				64: 36,
			},
			tms: [ 1, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 25, 26, 27, 28, 31, 32, 34, 38, 40, 44, 48, 50 ],
			hms: [ 3, 4 ],
	}, //RHYDON
	113: { initial: [ 1, 3 ],
			levelup: { 
				24: 47,
				30: 45,
				38: 107,
				44: 111,
				48: 113,
				54: 38,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 22, 24, 25, 29, 30, 31, 32, 33, 34, 35, 37, 38, 40, 41, 44, 45, 46, 49, 50 ],
			hms: [ 4, 5 ],
	}, //CHANSEY
	114: { initial: [ 132, 20 ],
			levelup: { 
				29: 71,
				32: 77,
				36: 78,
				39: 79,
				45: 21,
				49: 74,
			},
			tms: [ 3, 6, 8, 9, 10, 15, 20, 21, 22, 31, 32, 34, 40, 44, 50 ],
			hms: [ 1 ],
	}, //TANGELA
	115: { initial: [ 4, 99 ],
			levelup: { 
				26: 44,
				31: 39,
				36: 5,
				41: 43,
				46: 146,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 24, 25, 26, 27, 31, 32, 34, 38, 40, 44, 48, 50 ],
			hms: [ 3, 4 ],
	}, //KANGASKHAN
	116: { initial: [ 145 ],
			levelup: { 
				19: 108,
				24: 43,
				30: 55,
				37: 97,
				45: 56,
			},
			tms: [ 6, 9, 10, 11, 12, 13, 14, 20, 31, 32, 34, 39, 40, 44, 50 ],
			hms: [ 3 ],
	}, //HORSEA
	117: { initial: [ 145, 108 ],
			levelup: { 
				19: 108,
				24: 43,
				30: 55,
				41: 97,
				52: 56,
			},
			tms: [ 6, 9, 10, 11, 12, 13, 14, 15, 20, 31, 32, 34, 39, 40, 44, 50 ],
			hms: [ 3 ],
	}, //SEADRA
	118: { initial: [ 64, 39 ],
			levelup: { 
				19: 48,
				24: 30,
				30: 31,
				37: 127,
				45: 32,
				54: 97,
			},
			tms: [ 6, 7, 9, 10, 11, 12, 13, 14, 20, 31, 32, 34, 39, 40, 44, 50 ],
			hms: [ 3 ],
	}, //GOLDEEN
	119: { initial: [ 64, 39, 48 ],
			levelup: { 
				19: 48,
				24: 30,
				30: 31,
				39: 127,
				48: 32,
				54: 97,
			},
			tms: [ 6, 7, 9, 10, 11, 12, 13, 14, 15, 20, 31, 32, 34, 39, 40, 44, 50 ],
			hms: [ 3 ],
	}, //SEAKING
	120: { initial: [ 33 ],
			levelup: { 
				17: 55,
				22: 106,
				27: 105,
				32: 129,
				37: 107,
				42: 113,
				47: 56,
			},
			tms: [ 6, 9, 10, 11, 12, 13, 14, 20, 24, 25, 29, 30, 31, 32, 33, 34, 39, 40, 44, 45, 46, 49, 50 ],
			hms: [ 3, 5 ],
	}, //STARYU
	121: { initial: [ 33, 55, 106 ],
			levelup: { 
			},
			tms: [ 6, 9, 10, 11, 12, 13, 14, 15, 20, 24, 25, 29, 30, 31, 32, 33, 34, 39, 40, 44, 45, 46, 49, 50 ],
			hms: [ 3, 5 ],
	}, //STARMIE
	122: { initial: [ 93, 112 ],
			levelup: { 
				15: 93,
				23: 113,
				31: 3,
				39: 96,
				47: 164,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 15, 17, 18, 19, 20, 22, 24, 25, 29, 30, 31, 32, 33, 34, 35, 40, 44, 45, 46, 50 ],
			hms: [ 5 ],
	}, //MR.MIME
	123: { initial: [ 98 ],
			levelup: { 
				17: 43,
				20: 116,
				24: 104,
				29: 163,
				35: 14,
				42: 97,
			},
			tms: [ 3, 6, 9, 10, 15, 20, 31, 32, 34, 39, 40, 44, 50 ],
			hms: [ 1 ],
	}, //SCYTHER
	124: { initial: [ 1, 142 ],
			levelup: { 
				18: 122,
				23: 3,
				31: 8,
				39: 34,
				47: 37,
				58: 59,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 29, 30, 31, 32, 33, 34, 35, 40, 44, 46, 50 ],
			hms: [  ],
	}, //JYNX
	125: { initial: [ 98, 43 ],
			levelup: { 
				34: 84,
				37: 103,
				42: 9,
				49: 113,
				54: 87,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 15, 17, 18, 19, 20, 24, 25, 29, 30, 31, 32, 33, 34, 35, 39, 40, 44, 45, 46, 50 ],
			hms: [ 4, 5 ],
	}, //ELECTABUZZ
	126: { initial: [ 52 ],
			levelup: { 
				36: 43,
				39: 109,
				43: 7,
				48: 108,
				52: 123,
				55: 53,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 15, 17, 18, 19, 20, 29, 30, 31, 32, 34, 35, 38, 40, 44, 46, 50 ],
			hms: [ 4 ],
	}, //MAGMAR
	127: { initial: [ 11 ],
			levelup: { 
				25: 69,
				30: 12,
				36: 116,
				43: 106,
				49: 163,
				54: 14,
			},
			tms: [ 3, 6, 8, 9, 10, 15, 17, 19, 20, 31, 32, 34, 44, 50 ],
			hms: [ 1, 4 ],
	}, //PINSIR
	128: { initial: [ 33 ],
			levelup: { 
				21: 23,
				28: 39,
				35: 43,
				44: 99,
				51: 36,
			},
			tms: [ 6, 7, 8, 9, 10, 13, 14, 15, 20, 24, 25, 26, 27, 31, 32, 34, 38, 40, 44, 50 ],
			hms: [ 4 ],
	}, //TAUROS
	129: { initial: [ 150 ],
			levelup: { 
				15: 33,
			},
			tms: [  ],
			hms: [  ],
	}, //MAGIKARP
	130: { initial: [ 44, 82, 43, 56 ],
			levelup: { 
				20: 44,
				25: 82,
				32: 43,
				41: 56,
				52: 63,
			},
			tms: [ 6, 8, 9, 10, 11, 12, 13, 14, 15, 20, 23, 24, 25, 31, 32, 33, 34, 38, 40, 44, 50 ],
			hms: [ 3, 4 ],
	}, //GYARADOS
	131: { initial: [ 55, 45 ],
			levelup: { 
				16: 47,
				20: 54,
				25: 34,
				31: 109,
				38: 58,
				46: 56,
			},
			tms: [ 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 22, 23, 24, 25, 29, 31, 32, 33, 34, 40, 44, 46, 50 ],
			hms: [ 3, 4 ],
	}, //LAPRAS
	132: { initial: [ 144 ],
			levelup: { 
			},
			tms: [  ],
			hms: [  ],
	}, //DITTO
	133: { initial: [ 33, 28 ],
			levelup: { 
				27: 98,
				31: 39,
				37: 44,
				45: 36,
			},
			tms: [ 6, 8, 9, 10, 20, 31, 32, 33, 34, 39, 40, 44, 50 ],
			hms: [  ],
	}, //EEVEE
	134: { initial: [ 33, 28, 98, 55 ],
			levelup: { 
				27: 98,
				31: 55,
				37: 39,
				40: 44,
				42: 151,
				44: 114,
				48: 54,
				54: 56,
			},
			tms: [ 6, 8, 9, 10, 11, 12, 13, 14, 15, 20, 31, 32, 33, 34, 39, 40, 44, 50 ],
			hms: [ 3 ],
	}, //VAPOREON
	135: { initial: [ 33, 28, 98, 84 ],
			levelup: { 
				27: 98,
				31: 84,
				37: 39,
				40: 86,
				42: 24,
				44: 97,
				48: 42,
				54: 87,
			},
			tms: [ 6, 8, 9, 10, 15, 20, 24, 25, 31, 32, 33, 34, 39, 40, 44, 45, 50 ],
			hms: [ 5 ],
	}, //JOLTEON
	136: { initial: [ 33, 28, 98, 52 ],
			levelup: { 
				27: 98,
				31: 52,
				37: 39,
				40: 44,
				42: 43,
				44: 83,
				48: 99,
				54: 53,
			},
			tms: [ 6, 8, 9, 10, 15, 20, 31, 32, 33, 34, 38, 39, 40, 44, 50 ],
			hms: [  ],
	}, //FLAREON
	137: { initial: [ 33, 159, 160 ],
			levelup: { 
				23: 60,
				28: 105,
				35: 97,
				42: 161,
			},
			tms: [ 6, 9, 10, 13, 14, 15, 20, 24, 25, 29, 30, 31, 32, 33, 34, 39, 40, 44, 45, 46, 49, 50 ],
			hms: [ 5 ],
	}, //PORYGON
	138: { initial: [ 55, 110 ],
			levelup: { 
				34: 30,
				39: 43,
				46: 131,
				53: 56,
			},
			tms: [ 6, 8, 9, 10, 11, 12, 13, 14, 20, 31, 32, 33, 34, 44, 50 ],
			hms: [ 3 ],
	}, //OMANYTE
	139: { initial: [ 55, 110, 30 ],
			levelup: { 
				34: 30,
				39: 43,
				44: 131,
				49: 56,
			},
			tms: [ 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 19, 20, 31, 32, 33, 34, 40, 44, 50 ],
			hms: [ 3 ],
	}, //OMASTAR
	140: { initial: [ 10, 106 ],
			levelup: { 
				34: 71,
				39: 163,
				44: 43,
				49: 56,
			},
			tms: [ 6, 8, 9, 10, 11, 12, 13, 14, 20, 31, 32, 33, 34, 44, 50 ],
			hms: [ 3 ],
	}, //KABUTO
	141: { initial: [ 10, 106, 71 ],
			levelup: { 
				34: 71,
				39: 163,
				46: 43,
				53: 56,
			},
			tms: [ 2, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 17, 19, 20, 31, 32, 33, 34, 40, 44, 50 ],
			hms: [ 3 ],
	}, //KABUTOPS
	142: { initial: [ 17, 97 ],
			levelup: { 
				33: 48,
				38: 44,
				45: 36,
				54: 63,
			},
			tms: [ 2, 4, 6, 9, 10, 15, 20, 23, 31, 32, 33, 34, 38, 39, 43, 44, 50 ],
			hms: [ 2 ],
	}, //AERODACTYL
	143: { initial: [ 29, 133, 156 ],
			levelup: { 
				35: 34,
				41: 106,
				48: 38,
				56: 63,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 24, 25, 26, 27, 29, 31, 32, 33, 34, 35, 36, 38, 40, 44, 46, 48, 50 ],
			hms: [ 3, 4 ],
	}, //SNORLAX
	144: { initial: [ 64, 58 ],
			levelup: { 
				51: 59,
				55: 97,
				60: 54,
			},
			tms: [ 2, 4, 6, 9, 10, 11, 12, 13, 14, 15, 20, 31, 32, 33, 34, 39, 43, 44, 50 ],
			hms: [ 2 ],
	}, //ARTICUNO
	145: { initial: [ 84, 65 ],
			levelup: { 
				51: 87,
				55: 97,
				60: 113,
			},
			tms: [ 2, 4, 6, 9, 10, 15, 20, 24, 25, 31, 32, 33, 34, 39, 43, 44, 45, 50 ],
			hms: [ 2, 5 ],
	}, //ZAPDOS
	146: { initial: [ 64, 83 ],
			levelup: { 
				51: 43,
				55: 97,
				60: 143,
			},
			tms: [ 2, 4, 6, 9, 10, 15, 20, 31, 32, 33, 34, 38, 39, 43, 44, 50 ],
			hms: [ 2 ],
	}, //MOLTRES
	147: { initial: [ 35, 43 ],
			levelup: { 
				10: 86,
				20: 97,
				30: 21,
				40: 82,
				50: 63,
			},
			tms: [ 6, 8, 9, 10, 11, 12, 13, 14, 20, 23, 24, 25, 31, 32, 33, 34, 38, 39, 40, 44, 45, 50 ],
			hms: [ 3 ],
	}, //DRATINI
	148: { initial: [ 35, 43, 86 ],
			levelup: { 
				10: 86,
				20: 97,
				35: 21,
				45: 82,
				55: 63,
			},
			tms: [ 6, 7, 8, 9, 10, 11, 12, 13, 14, 20, 23, 24, 25, 31, 32, 33, 34, 38, 39, 40, 44, 45, 50 ],
			hms: [ 3 ],
	}, //DRAGONAIR
	149: { initial: [ 35, 43, 86, 97 ],
			levelup: { 
				10: 86,
				20: 97,
				35: 21,
				45: 82,
				60: 63,
			},
			tms: [ 2, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 23, 24, 25, 31, 32, 33, 34, 38, 39, 40, 44, 45, 50 ],
			hms: [ 3, 4 ],
	}, //DRAGONITE
	150: { initial: [ 93, 50, 129, 94 ],
			levelup: { 
				63: 112,
				66: 94,
				70: 105,
				75: 54,
				81: 133,
			},
			tms: [ 1, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 24, 25, 29, 30, 31, 32, 33, 34, 35, 36, 38, 40, 44, 45, 46, 49, 50 ],
			hms: [ 4, 5 ],
	}, //MEWTWO
	151: { initial: [ 1 ],
			levelup: { 
				10: 144,
				20: 5,
				30: 118,
				40: 94,
			},
			tms: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50 ],
			hms: [ 1, 2, 3, 4, 5 ],
	}, //MEW
};

(function () {
  // Static initialization code
  Object.keys(pokemon_tms_lookup).forEach(key => {
	  var value = pokemon_tms_lookup[key];
	  
	  PokemonMovesLookup[key] = value;
  });
})();
