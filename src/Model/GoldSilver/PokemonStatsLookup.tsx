export class PokemonStatsLookup {
	private static statsLookupKV = {
		"": { growth_rate: "",
				base_stats: { "hp": 0, "atk": 0, "def": 0, "spd": 0, "sp_atk": 0, "sp_def": 0 },
				types: [ 0 ],
		},
		0: { growth_rate: 0x80,
				base_stats: { "hp": 224, "atk": 1, "def": 188, "spd": 67, "sp_atk": 163, "sp_def": 213 },
				types: [ 9, 241 ],
		}, // ?????
		1: { growth_rate: 0x03,
				base_stats: { "hp": 45, "atk": 49, "def": 49, "spd": 45, "sp_atk": 65, "sp_def": 65 },
				types: [ 22, 3 ],
		}, // BULBASAUR
		2: { growth_rate: 0x03,
				base_stats: { "hp": 60, "atk": 62, "def": 63, "spd": 60, "sp_atk": 80, "sp_def": 80 },
				types: [ 22, 3 ],
		}, // IVYSAUR
		3: { growth_rate: 0x03,
				base_stats: { "hp": 80, "atk": 82, "def": 83, "spd": 80, "sp_atk": 100, "sp_def": 100 },
				types: [ 22, 3 ],
		}, // VENUSAUR
		4: { growth_rate: 0x03,
				base_stats: { "hp": 39, "atk": 52, "def": 43, "spd": 65, "sp_atk": 60, "sp_def": 50 },
				types: [ 20 ],
		}, // CHARMANDER
		5: { growth_rate: 0x03,
				base_stats: { "hp": 58, "atk": 64, "def": 58, "spd": 80, "sp_atk": 80, "sp_def": 65 },
				types: [ 20 ],
		}, // CHARMELEON
		6: { growth_rate: 0x03,
				base_stats: { "hp": 78, "atk": 84, "def": 78, "spd": 100, "sp_atk": 109, "sp_def": 85 },
				types: [ 20, 2 ],
		}, // CHARIZARD
		7: { growth_rate: 0x03,
				base_stats: { "hp": 44, "atk": 48, "def": 65, "spd": 43, "sp_atk": 50, "sp_def": 64 },
				types: [ 21 ],
		}, // SQUIRTLE
		8: { growth_rate: 0x03,
				base_stats: { "hp": 59, "atk": 63, "def": 80, "spd": 58, "sp_atk": 65, "sp_def": 80 },
				types: [ 21 ],
		}, // WARTORTLE
		9: { growth_rate: 0x03,
				base_stats: { "hp": 79, "atk": 83, "def": 100, "spd": 78, "sp_atk": 85, "sp_def": 105 },
				types: [ 21 ],
		}, // BLASTOISE
		10: { growth_rate: 0x00,
				base_stats: { "hp": 45, "atk": 30, "def": 35, "spd": 45, "sp_atk": 20, "sp_def": 20 },
				types: [ 7 ],
		}, // CATERPIE
		11: { growth_rate: 0x00,
				base_stats: { "hp": 50, "atk": 20, "def": 55, "spd": 30, "sp_atk": 25, "sp_def": 25 },
				types: [ 7 ],
		}, // METAPOD
		12: { growth_rate: 0x00,
				base_stats: { "hp": 60, "atk": 45, "def": 50, "spd": 70, "sp_atk": 80, "sp_def": 80 },
				types: [ 7, 2 ],
		}, // BUTTERFREE
		13: { growth_rate: 0x00,
				base_stats: { "hp": 40, "atk": 35, "def": 30, "spd": 50, "sp_atk": 20, "sp_def": 20 },
				types: [ 7, 3 ],
		}, // WEEDLE
		14: { growth_rate: 0x00,
				base_stats: { "hp": 45, "atk": 25, "def": 50, "spd": 35, "sp_atk": 25, "sp_def": 25 },
				types: [ 7, 3 ],
		}, // KAKUNA
		15: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 80, "def": 40, "spd": 75, "sp_atk": 45, "sp_def": 80 },
				types: [ 7, 3 ],
		}, // BEEDRILL
		16: { growth_rate: 0x03,
				base_stats: { "hp": 40, "atk": 45, "def": 40, "spd": 56, "sp_atk": 35, "sp_def": 35 },
				types: [ 0, 2 ],
		}, // PIDGEY
		17: { growth_rate: 0x03,
				base_stats: { "hp": 63, "atk": 60, "def": 55, "spd": 71, "sp_atk": 50, "sp_def": 50 },
				types: [ 0, 2 ],
		}, // PIDGEOTTO
		18: { growth_rate: 0x03,
				base_stats: { "hp": 83, "atk": 80, "def": 75, "spd": 91, "sp_atk": 70, "sp_def": 70 },
				types: [ 0, 2 ],
		}, // PIDGEOT
		19: { growth_rate: 0x00,
				base_stats: { "hp": 30, "atk": 56, "def": 35, "spd": 72, "sp_atk": 25, "sp_def": 35 },
				types: [ 0 ],
		}, // RATTATA
		20: { growth_rate: 0x00,
				base_stats: { "hp": 55, "atk": 81, "def": 60, "spd": 97, "sp_atk": 50, "sp_def": 70 },
				types: [ 0 ],
		}, // RATICATE
		21: { growth_rate: 0x00,
				base_stats: { "hp": 40, "atk": 60, "def": 30, "spd": 70, "sp_atk": 31, "sp_def": 31 },
				types: [ 0, 2 ],
		}, // SPEAROW
		22: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 90, "def": 65, "spd": 100, "sp_atk": 61, "sp_def": 61 },
				types: [ 0, 2 ],
		}, // FEAROW
		23: { growth_rate: 0x00,
				base_stats: { "hp": 35, "atk": 60, "def": 44, "spd": 55, "sp_atk": 40, "sp_def": 54 },
				types: [ 3 ],
		}, // EKANS
		24: { growth_rate: 0x00,
				base_stats: { "hp": 60, "atk": 85, "def": 69, "spd": 80, "sp_atk": 65, "sp_def": 79 },
				types: [ 3 ],
		}, // ARBOK
		25: { growth_rate: 0x00,
				base_stats: { "hp": 35, "atk": 55, "def": 30, "spd": 90, "sp_atk": 50, "sp_def": 40 },
				types: [ 23 ],
		}, // PIKACHU
		26: { growth_rate: 0x00,
				base_stats: { "hp": 60, "atk": 90, "def": 55, "spd": 100, "sp_atk": 90, "sp_def": 80 },
				types: [ 23 ],
		}, // RAICHU
		27: { growth_rate: 0x00,
				base_stats: { "hp": 50, "atk": 75, "def": 85, "spd": 40, "sp_atk": 20, "sp_def": 30 },
				types: [ 4 ],
		}, // SANDSHREW
		28: { growth_rate: 0x00,
				base_stats: { "hp": 75, "atk": 100, "def": 110, "spd": 65, "sp_atk": 45, "sp_def": 55 },
				types: [ 4 ],
		}, // SANDSLASH
		29: { growth_rate: 0x03,
				base_stats: { "hp": 55, "atk": 47, "def": 52, "spd": 41, "sp_atk": 40, "sp_def": 40 },
				types: [ 3 ],
		}, // NIDORAN♀
		30: { growth_rate: 0x03,
				base_stats: { "hp": 70, "atk": 62, "def": 67, "spd": 56, "sp_atk": 55, "sp_def": 55 },
				types: [ 3 ],
		}, // NIDORINA
		31: { growth_rate: 0x03,
				base_stats: { "hp": 90, "atk": 82, "def": 87, "spd": 76, "sp_atk": 75, "sp_def": 85 },
				types: [ 3, 4 ],
		}, // NIDOQUEEN
		32: { growth_rate: 0x03,
				base_stats: { "hp": 46, "atk": 57, "def": 40, "spd": 50, "sp_atk": 40, "sp_def": 40 },
				types: [ 3 ],
		}, // NIDORAN♂
		33: { growth_rate: 0x03,
				base_stats: { "hp": 61, "atk": 72, "def": 57, "spd": 65, "sp_atk": 55, "sp_def": 55 },
				types: [ 3 ],
		}, // NIDORINO
		34: { growth_rate: 0x03,
				base_stats: { "hp": 81, "atk": 92, "def": 77, "spd": 85, "sp_atk": 85, "sp_def": 75 },
				types: [ 3, 4 ],
		}, // NIDOKING
		35: { growth_rate: 0x04,
				base_stats: { "hp": 70, "atk": 45, "def": 48, "spd": 35, "sp_atk": 60, "sp_def": 65 },
				types: [ 0 ],
		}, // CLEFAIRY
		36: { growth_rate: 0x04,
				base_stats: { "hp": 95, "atk": 70, "def": 73, "spd": 60, "sp_atk": 85, "sp_def": 90 },
				types: [ 0 ],
		}, // CLEFABLE
		37: { growth_rate: 0x00,
				base_stats: { "hp": 38, "atk": 41, "def": 40, "spd": 65, "sp_atk": 50, "sp_def": 65 },
				types: [ 20 ],
		}, // VULPIX
		38: { growth_rate: 0x00,
				base_stats: { "hp": 73, "atk": 76, "def": 75, "spd": 100, "sp_atk": 81, "sp_def": 100 },
				types: [ 20 ],
		}, // NINETALES
		39: { growth_rate: 0x04,
				base_stats: { "hp": 115, "atk": 45, "def": 20, "spd": 20, "sp_atk": 45, "sp_def": 25 },
				types: [ 0 ],
		}, // JIGGLYPUFF
		40: { growth_rate: 0x04,
				base_stats: { "hp": 140, "atk": 70, "def": 45, "spd": 45, "sp_atk": 75, "sp_def": 50 },
				types: [ 0 ],
		}, // WIGGLYTUFF
		41: { growth_rate: 0x00,
				base_stats: { "hp": 40, "atk": 45, "def": 35, "spd": 55, "sp_atk": 30, "sp_def": 40 },
				types: [ 3, 2 ],
		}, // ZUBAT
		42: { growth_rate: 0x00,
				base_stats: { "hp": 75, "atk": 80, "def": 70, "spd": 90, "sp_atk": 65, "sp_def": 75 },
				types: [ 3, 2 ],
		}, // GOLBAT
		43: { growth_rate: 0x03,
				base_stats: { "hp": 45, "atk": 50, "def": 55, "spd": 30, "sp_atk": 75, "sp_def": 65 },
				types: [ 22, 3 ],
		}, // ODDISH
		44: { growth_rate: 0x03,
				base_stats: { "hp": 60, "atk": 65, "def": 70, "spd": 40, "sp_atk": 85, "sp_def": 75 },
				types: [ 22, 3 ],
		}, // GLOOM
		45: { growth_rate: 0x03,
				base_stats: { "hp": 75, "atk": 80, "def": 85, "spd": 50, "sp_atk": 100, "sp_def": 90 },
				types: [ 22, 3 ],
		}, // VILEPLUME
		46: { growth_rate: 0x00,
				base_stats: { "hp": 35, "atk": 70, "def": 55, "spd": 25, "sp_atk": 45, "sp_def": 55 },
				types: [ 7, 22 ],
		}, // PARAS
		47: { growth_rate: 0x00,
				base_stats: { "hp": 60, "atk": 95, "def": 80, "spd": 30, "sp_atk": 60, "sp_def": 80 },
				types: [ 7, 22 ],
		}, // PARASECT
		48: { growth_rate: 0x00,
				base_stats: { "hp": 60, "atk": 55, "def": 50, "spd": 45, "sp_atk": 40, "sp_def": 55 },
				types: [ 7, 3 ],
		}, // VENONAT
		49: { growth_rate: 0x00,
				base_stats: { "hp": 70, "atk": 65, "def": 60, "spd": 90, "sp_atk": 90, "sp_def": 75 },
				types: [ 7, 3 ],
		}, // VENOMOTH
		50: { growth_rate: 0x00,
				base_stats: { "hp": 10, "atk": 55, "def": 25, "spd": 95, "sp_atk": 35, "sp_def": 45 },
				types: [ 4 ],
		}, // DIGLETT
		51: { growth_rate: 0x00,
				base_stats: { "hp": 35, "atk": 80, "def": 50, "spd": 120, "sp_atk": 50, "sp_def": 70 },
				types: [ 4 ],
		}, // DUGTRIO
		52: { growth_rate: 0x00,
				base_stats: { "hp": 40, "atk": 45, "def": 35, "spd": 90, "sp_atk": 40, "sp_def": 40 },
				types: [ 0 ],
		}, // MEOWTH
		53: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 70, "def": 60, "spd": 115, "sp_atk": 65, "sp_def": 65 },
				types: [ 0 ],
		}, // PERSIAN
		54: { growth_rate: 0x00,
				base_stats: { "hp": 50, "atk": 52, "def": 48, "spd": 55, "sp_atk": 65, "sp_def": 50 },
				types: [ 21 ],
		}, // PSYDUCK
		55: { growth_rate: 0x00,
				base_stats: { "hp": 80, "atk": 82, "def": 78, "spd": 85, "sp_atk": 95, "sp_def": 80 },
				types: [ 21 ],
		}, // GOLDUCK
		56: { growth_rate: 0x00,
				base_stats: { "hp": 40, "atk": 80, "def": 35, "spd": 70, "sp_atk": 35, "sp_def": 45 },
				types: [ 1 ],
		}, // MANKEY
		57: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 105, "def": 60, "spd": 95, "sp_atk": 60, "sp_def": 70 },
				types: [ 1 ],
		}, // PRIMEAPE
		58: { growth_rate: 0x05,
				base_stats: { "hp": 55, "atk": 70, "def": 45, "spd": 60, "sp_atk": 70, "sp_def": 50 },
				types: [ 20 ],
		}, // GROWLITHE
		59: { growth_rate: 0x05,
				base_stats: { "hp": 90, "atk": 110, "def": 80, "spd": 95, "sp_atk": 100, "sp_def": 80 },
				types: [ 20 ],
		}, // ARCANINE
		60: { growth_rate: 0x03,
				base_stats: { "hp": 40, "atk": 50, "def": 40, "spd": 90, "sp_atk": 40, "sp_def": 40 },
				types: [ 21 ],
		}, // POLIWAG
		61: { growth_rate: 0x03,
				base_stats: { "hp": 65, "atk": 65, "def": 65, "spd": 90, "sp_atk": 50, "sp_def": 50 },
				types: [ 21 ],
		}, // POLIWHIRL
		62: { growth_rate: 0x03,
				base_stats: { "hp": 90, "atk": 85, "def": 95, "spd": 70, "sp_atk": 70, "sp_def": 90 },
				types: [ 21, 1 ],
		}, // POLIWRATH
		63: { growth_rate: 0x03,
				base_stats: { "hp": 25, "atk": 20, "def": 15, "spd": 90, "sp_atk": 105, "sp_def": 55 },
				types: [ 24 ],
		}, // ABRA
		64: { growth_rate: 0x03,
				base_stats: { "hp": 40, "atk": 35, "def": 30, "spd": 105, "sp_atk": 120, "sp_def": 70 },
				types: [ 24 ],
		}, // KADABRA
		65: { growth_rate: 0x03,
				base_stats: { "hp": 55, "atk": 50, "def": 45, "spd": 120, "sp_atk": 135, "sp_def": 85 },
				types: [ 24 ],
		}, // ALAKAZAM
		66: { growth_rate: 0x03,
				base_stats: { "hp": 70, "atk": 80, "def": 50, "spd": 35, "sp_atk": 35, "sp_def": 35 },
				types: [ 1 ],
		}, // MACHOP
		67: { growth_rate: 0x03,
				base_stats: { "hp": 80, "atk": 100, "def": 70, "spd": 45, "sp_atk": 50, "sp_def": 60 },
				types: [ 1 ],
		}, // MACHOKE
		68: { growth_rate: 0x03,
				base_stats: { "hp": 90, "atk": 130, "def": 80, "spd": 55, "sp_atk": 65, "sp_def": 85 },
				types: [ 1 ],
		}, // MACHAMP
		69: { growth_rate: 0x03,
				base_stats: { "hp": 50, "atk": 75, "def": 35, "spd": 40, "sp_atk": 70, "sp_def": 30 },
				types: [ 22, 3 ],
		}, // BELLSPROUT
		70: { growth_rate: 0x03,
				base_stats: { "hp": 65, "atk": 90, "def": 50, "spd": 55, "sp_atk": 85, "sp_def": 45 },
				types: [ 22, 3 ],
		}, // WEEPINBELL
		71: { growth_rate: 0x03,
				base_stats: { "hp": 80, "atk": 105, "def": 65, "spd": 70, "sp_atk": 100, "sp_def": 60 },
				types: [ 22, 3 ],
		}, // VICTREEBEL
		72: { growth_rate: 0x05,
				base_stats: { "hp": 40, "atk": 40, "def": 35, "spd": 70, "sp_atk": 50, "sp_def": 100 },
				types: [ 21, 3 ],
		}, // TENTACOOL
		73: { growth_rate: 0x05,
				base_stats: { "hp": 80, "atk": 70, "def": 65, "spd": 100, "sp_atk": 80, "sp_def": 120 },
				types: [ 21, 3 ],
		}, // TENTACRUEL
		74: { growth_rate: 0x03,
				base_stats: { "hp": 40, "atk": 80, "def": 100, "spd": 20, "sp_atk": 30, "sp_def": 30 },
				types: [ 5, 4 ],
		}, // GEODUDE
		75: { growth_rate: 0x03,
				base_stats: { "hp": 55, "atk": 95, "def": 115, "spd": 35, "sp_atk": 45, "sp_def": 45 },
				types: [ 5, 4 ],
		}, // GRAVELER
		76: { growth_rate: 0x03,
				base_stats: { "hp": 80, "atk": 110, "def": 130, "spd": 45, "sp_atk": 55, "sp_def": 65 },
				types: [ 5, 4 ],
		}, // GOLEM
		77: { growth_rate: 0x00,
				base_stats: { "hp": 50, "atk": 85, "def": 55, "spd": 90, "sp_atk": 65, "sp_def": 65 },
				types: [ 20 ],
		}, // PONYTA
		78: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 100, "def": 70, "spd": 105, "sp_atk": 80, "sp_def": 80 },
				types: [ 20 ],
		}, // RAPIDASH
		79: { growth_rate: 0x00,
				base_stats: { "hp": 90, "atk": 65, "def": 65, "spd": 15, "sp_atk": 40, "sp_def": 40 },
				types: [ 21, 24 ],
		}, // SLOWPOKE
		80: { growth_rate: 0x00,
				base_stats: { "hp": 95, "atk": 75, "def": 110, "spd": 30, "sp_atk": 100, "sp_def": 80 },
				types: [ 21, 24 ],
		}, // SLOWBRO
		81: { growth_rate: 0x00,
				base_stats: { "hp": 25, "atk": 35, "def": 70, "spd": 45, "sp_atk": 95, "sp_def": 55 },
				types: [ 23, 9 ],
		}, // MAGNEMITE
		82: { growth_rate: 0x00,
				base_stats: { "hp": 50, "atk": 60, "def": 95, "spd": 70, "sp_atk": 120, "sp_def": 70 },
				types: [ 23, 9 ],
		}, // MAGNETON
		83: { growth_rate: 0x00,
				base_stats: { "hp": 52, "atk": 65, "def": 55, "spd": 60, "sp_atk": 58, "sp_def": 62 },
				types: [ 0, 2 ],
		}, // FARFETCH'D
		84: { growth_rate: 0x00,
				base_stats: { "hp": 35, "atk": 85, "def": 45, "spd": 75, "sp_atk": 35, "sp_def": 35 },
				types: [ 0, 2 ],
		}, // DODUO
		85: { growth_rate: 0x00,
				base_stats: { "hp": 60, "atk": 110, "def": 70, "spd": 100, "sp_atk": 60, "sp_def": 60 },
				types: [ 0, 2 ],
		}, // DODRIO
		86: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 45, "def": 55, "spd": 45, "sp_atk": 45, "sp_def": 70 },
				types: [ 21 ],
		}, // SEEL
		87: { growth_rate: 0x00,
				base_stats: { "hp": 90, "atk": 70, "def": 80, "spd": 70, "sp_atk": 70, "sp_def": 95 },
				types: [ 21, 25 ],
		}, // DEWGONG
		88: { growth_rate: 0x00,
				base_stats: { "hp": 80, "atk": 80, "def": 50, "spd": 25, "sp_atk": 40, "sp_def": 50 },
				types: [ 3 ],
		}, // GRIMER
		89: { growth_rate: 0x00,
				base_stats: { "hp": 105, "atk": 105, "def": 75, "spd": 50, "sp_atk": 65, "sp_def": 100 },
				types: [ 3 ],
		}, // MUK
		90: { growth_rate: 0x05,
				base_stats: { "hp": 30, "atk": 65, "def": 100, "spd": 40, "sp_atk": 45, "sp_def": 25 },
				types: [ 21 ],
		}, // SHELLDER
		91: { growth_rate: 0x05,
				base_stats: { "hp": 50, "atk": 95, "def": 180, "spd": 70, "sp_atk": 85, "sp_def": 45 },
				types: [ 21, 25 ],
		}, // CLOYSTER
		92: { growth_rate: 0x03,
				base_stats: { "hp": 30, "atk": 35, "def": 30, "spd": 80, "sp_atk": 100, "sp_def": 35 },
				types: [ 8, 3 ],
		}, // GASTLY
		93: { growth_rate: 0x03,
				base_stats: { "hp": 45, "atk": 50, "def": 45, "spd": 95, "sp_atk": 115, "sp_def": 55 },
				types: [ 8, 3 ],
		}, // HAUNTER
		94: { growth_rate: 0x03,
				base_stats: { "hp": 60, "atk": 65, "def": 60, "spd": 110, "sp_atk": 130, "sp_def": 75 },
				types: [ 8, 3 ],
		}, // GENGAR
		95: { growth_rate: 0x00,
				base_stats: { "hp": 35, "atk": 45, "def": 160, "spd": 70, "sp_atk": 30, "sp_def": 45 },
				types: [ 5, 4 ],
		}, // ONIX
		96: { growth_rate: 0x00,
				base_stats: { "hp": 60, "atk": 48, "def": 45, "spd": 42, "sp_atk": 43, "sp_def": 90 },
				types: [ 24 ],
		}, // DROWZEE
		97: { growth_rate: 0x00,
				base_stats: { "hp": 85, "atk": 73, "def": 70, "spd": 67, "sp_atk": 73, "sp_def": 115 },
				types: [ 24 ],
		}, // HYPNO
		98: { growth_rate: 0x00,
				base_stats: { "hp": 30, "atk": 105, "def": 90, "spd": 50, "sp_atk": 25, "sp_def": 25 },
				types: [ 21 ],
		}, // KRABBY
		99: { growth_rate: 0x00,
				base_stats: { "hp": 55, "atk": 130, "def": 115, "spd": 75, "sp_atk": 50, "sp_def": 50 },
				types: [ 21 ],
		}, // KINGLER
		100: { growth_rate: 0x00,
				base_stats: { "hp": 40, "atk": 30, "def": 50, "spd": 100, "sp_atk": 55, "sp_def": 55 },
				types: [ 23 ],
		}, // VOLTORB
		101: { growth_rate: 0x00,
				base_stats: { "hp": 60, "atk": 50, "def": 70, "spd": 140, "sp_atk": 80, "sp_def": 80 },
				types: [ 23 ],
		}, // ELECTRODE
		102: { growth_rate: 0x05,
				base_stats: { "hp": 60, "atk": 40, "def": 80, "spd": 40, "sp_atk": 60, "sp_def": 45 },
				types: [ 22, 24 ],
		}, // EXEGGCUTE
		103: { growth_rate: 0x05,
				base_stats: { "hp": 95, "atk": 95, "def": 85, "spd": 55, "sp_atk": 125, "sp_def": 65 },
				types: [ 22, 24 ],
		}, // EXEGGUTOR
		104: { growth_rate: 0x00,
				base_stats: { "hp": 50, "atk": 50, "def": 95, "spd": 35, "sp_atk": 40, "sp_def": 50 },
				types: [ 4 ],
		}, // CUBONE
		105: { growth_rate: 0x00,
				base_stats: { "hp": 60, "atk": 80, "def": 110, "spd": 45, "sp_atk": 50, "sp_def": 80 },
				types: [ 4 ],
		}, // MAROWAK
		106: { growth_rate: 0x00,
				base_stats: { "hp": 50, "atk": 120, "def": 53, "spd": 87, "sp_atk": 35, "sp_def": 110 },
				types: [ 1 ],
		}, // HITMONLEE
		107: { growth_rate: 0x00,
				base_stats: { "hp": 50, "atk": 105, "def": 79, "spd": 76, "sp_atk": 35, "sp_def": 110 },
				types: [ 1 ],
		}, // HITMONCHAN
		108: { growth_rate: 0x00,
				base_stats: { "hp": 90, "atk": 55, "def": 75, "spd": 30, "sp_atk": 60, "sp_def": 75 },
				types: [ 0 ],
		}, // LICKITUNG
		109: { growth_rate: 0x00,
				base_stats: { "hp": 40, "atk": 65, "def": 95, "spd": 35, "sp_atk": 60, "sp_def": 45 },
				types: [ 3 ],
		}, // KOFFING
		110: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 90, "def": 120, "spd": 60, "sp_atk": 85, "sp_def": 70 },
				types: [ 3 ],
		}, // WEEZING
		111: { growth_rate: 0x05,
				base_stats: { "hp": 80, "atk": 85, "def": 95, "spd": 25, "sp_atk": 30, "sp_def": 30 },
				types: [ 4, 5 ],
		}, // RHYHORN
		112: { growth_rate: 0x05,
				base_stats: { "hp": 105, "atk": 130, "def": 120, "spd": 40, "sp_atk": 45, "sp_def": 45 },
				types: [ 4, 5 ],
		}, // RHYDON
		113: { growth_rate: 0x04,
				base_stats: { "hp": 250, "atk": 5, "def": 5, "spd": 50, "sp_atk": 35, "sp_def": 105 },
				types: [ 0 ],
		}, // CHANSEY
		114: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 55, "def": 115, "spd": 60, "sp_atk": 100, "sp_def": 40 },
				types: [ 22 ],
		}, // TANGELA
		115: { growth_rate: 0x00,
				base_stats: { "hp": 105, "atk": 95, "def": 80, "spd": 90, "sp_atk": 40, "sp_def": 80 },
				types: [ 0 ],
		}, // KANGASKHAN
		116: { growth_rate: 0x00,
				base_stats: { "hp": 30, "atk": 40, "def": 70, "spd": 60, "sp_atk": 70, "sp_def": 25 },
				types: [ 21 ],
		}, // HORSEA
		117: { growth_rate: 0x00,
				base_stats: { "hp": 55, "atk": 65, "def": 95, "spd": 85, "sp_atk": 95, "sp_def": 45 },
				types: [ 21 ],
		}, // SEADRA
		118: { growth_rate: 0x00,
				base_stats: { "hp": 45, "atk": 67, "def": 60, "spd": 63, "sp_atk": 35, "sp_def": 50 },
				types: [ 21 ],
		}, // GOLDEEN
		119: { growth_rate: 0x00,
				base_stats: { "hp": 80, "atk": 92, "def": 65, "spd": 68, "sp_atk": 65, "sp_def": 80 },
				types: [ 21 ],
		}, // SEAKING
		120: { growth_rate: 0x05,
				base_stats: { "hp": 30, "atk": 45, "def": 55, "spd": 85, "sp_atk": 70, "sp_def": 55 },
				types: [ 21 ],
		}, // STARYU
		121: { growth_rate: 0x05,
				base_stats: { "hp": 60, "atk": 75, "def": 85, "spd": 115, "sp_atk": 100, "sp_def": 85 },
				types: [ 21, 24 ],
		}, // STARMIE
		122: { growth_rate: 0x00,
				base_stats: { "hp": 40, "atk": 45, "def": 65, "spd": 90, "sp_atk": 100, "sp_def": 120 },
				types: [ 24 ],
		}, // MR.MIME
		123: { growth_rate: 0x00,
				base_stats: { "hp": 70, "atk": 110, "def": 80, "spd": 105, "sp_atk": 55, "sp_def": 80 },
				types: [ 7, 2 ],
		}, // SCYTHER
		124: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 50, "def": 35, "spd": 95, "sp_atk": 115, "sp_def": 95 },
				types: [ 25, 24 ],
		}, // JYNX
		125: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 83, "def": 57, "spd": 105, "sp_atk": 95, "sp_def": 85 },
				types: [ 23 ],
		}, // ELECTABUZZ
		126: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 95, "def": 57, "spd": 93, "sp_atk": 100, "sp_def": 85 },
				types: [ 20 ],
		}, // MAGMAR
		127: { growth_rate: 0x05,
				base_stats: { "hp": 65, "atk": 125, "def": 100, "spd": 85, "sp_atk": 55, "sp_def": 70 },
				types: [ 7 ],
		}, // PINSIR
		128: { growth_rate: 0x05,
				base_stats: { "hp": 75, "atk": 100, "def": 95, "spd": 110, "sp_atk": 40, "sp_def": 70 },
				types: [ 0 ],
		}, // TAUROS
		129: { growth_rate: 0x05,
				base_stats: { "hp": 20, "atk": 10, "def": 55, "spd": 80, "sp_atk": 15, "sp_def": 20 },
				types: [ 21 ],
		}, // MAGIKARP
		130: { growth_rate: 0x05,
				base_stats: { "hp": 95, "atk": 125, "def": 79, "spd": 81, "sp_atk": 60, "sp_def": 100 },
				types: [ 21, 2 ],
		}, // GYARADOS
		131: { growth_rate: 0x05,
				base_stats: { "hp": 130, "atk": 85, "def": 80, "spd": 60, "sp_atk": 85, "sp_def": 95 },
				types: [ 21, 25 ],
		}, // LAPRAS
		132: { growth_rate: 0x00,
				base_stats: { "hp": 48, "atk": 48, "def": 48, "spd": 48, "sp_atk": 48, "sp_def": 48 },
				types: [ 0 ],
		}, // DITTO
		133: { growth_rate: 0x00,
				base_stats: { "hp": 55, "atk": 55, "def": 50, "spd": 55, "sp_atk": 45, "sp_def": 65 },
				types: [ 0 ],
		}, // EEVEE
		134: { growth_rate: 0x00,
				base_stats: { "hp": 130, "atk": 65, "def": 60, "spd": 65, "sp_atk": 110, "sp_def": 95 },
				types: [ 21 ],
		}, // VAPOREON
		135: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 65, "def": 60, "spd": 130, "sp_atk": 110, "sp_def": 95 },
				types: [ 23 ],
		}, // JOLTEON
		136: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 130, "def": 60, "spd": 65, "sp_atk": 95, "sp_def": 110 },
				types: [ 20 ],
		}, // FLAREON
		137: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 60, "def": 70, "spd": 40, "sp_atk": 85, "sp_def": 75 },
				types: [ 0 ],
		}, // PORYGON
		138: { growth_rate: 0x00,
				base_stats: { "hp": 35, "atk": 40, "def": 100, "spd": 35, "sp_atk": 90, "sp_def": 55 },
				types: [ 5, 21 ],
		}, // OMANYTE
		139: { growth_rate: 0x00,
				base_stats: { "hp": 70, "atk": 60, "def": 125, "spd": 55, "sp_atk": 115, "sp_def": 70 },
				types: [ 5, 21 ],
		}, // OMASTAR
		140: { growth_rate: 0x00,
				base_stats: { "hp": 30, "atk": 80, "def": 90, "spd": 55, "sp_atk": 55, "sp_def": 45 },
				types: [ 5, 21 ],
		}, // KABUTO
		141: { growth_rate: 0x00,
				base_stats: { "hp": 60, "atk": 115, "def": 105, "spd": 80, "sp_atk": 65, "sp_def": 70 },
				types: [ 5, 21 ],
		}, // KABUTOPS
		142: { growth_rate: 0x05,
				base_stats: { "hp": 80, "atk": 105, "def": 65, "spd": 130, "sp_atk": 60, "sp_def": 75 },
				types: [ 5, 2 ],
		}, // AERODACTYL
		143: { growth_rate: 0x05,
				base_stats: { "hp": 160, "atk": 110, "def": 65, "spd": 30, "sp_atk": 65, "sp_def": 110 },
				types: [ 0 ],
		}, // SNORLAX
		144: { growth_rate: 0x05,
				base_stats: { "hp": 90, "atk": 85, "def": 100, "spd": 85, "sp_atk": 95, "sp_def": 125 },
				types: [ 25, 2 ],
		}, // ARTICUNO
		145: { growth_rate: 0x05,
				base_stats: { "hp": 90, "atk": 90, "def": 85, "spd": 100, "sp_atk": 125, "sp_def": 90 },
				types: [ 23, 2 ],
		}, // ZAPDOS
		146: { growth_rate: 0x05,
				base_stats: { "hp": 90, "atk": 100, "def": 90, "spd": 90, "sp_atk": 125, "sp_def": 85 },
				types: [ 20, 2 ],
		}, // MOLTRES
		147: { growth_rate: 0x05,
				base_stats: { "hp": 41, "atk": 64, "def": 45, "spd": 50, "sp_atk": 50, "sp_def": 50 },
				types: [ 26 ],
		}, // DRATINI
		148: { growth_rate: 0x05,
				base_stats: { "hp": 61, "atk": 84, "def": 65, "spd": 70, "sp_atk": 70, "sp_def": 70 },
				types: [ 26 ],
		}, // DRAGONAIR
		149: { growth_rate: 0x05,
				base_stats: { "hp": 91, "atk": 134, "def": 95, "spd": 80, "sp_atk": 100, "sp_def": 100 },
				types: [ 26, 2 ],
		}, // DRAGONITE
		150: { growth_rate: 0x05,
				base_stats: { "hp": 106, "atk": 110, "def": 90, "spd": 130, "sp_atk": 154, "sp_def": 90 },
				types: [ 24 ],
		}, // MEWTWO
		151: { growth_rate: 0x03,
				base_stats: { "hp": 100, "atk": 100, "def": 100, "spd": 100, "sp_atk": 100, "sp_def": 100 },
				types: [ 24 ],
		}, // MEW
		152: { growth_rate: 0x03,
				base_stats: { "hp": 45, "atk": 49, "def": 65, "spd": 45, "sp_atk": 49, "sp_def": 65 },
				types: [ 22 ],
		}, // CHIKORITA
		153: { growth_rate: 0x03,
				base_stats: { "hp": 60, "atk": 62, "def": 80, "spd": 60, "sp_atk": 63, "sp_def": 80 },
				types: [ 22 ],
		}, // BAYLEEF
		154: { growth_rate: 0x03,
				base_stats: { "hp": 80, "atk": 82, "def": 100, "spd": 80, "sp_atk": 83, "sp_def": 100 },
				types: [ 22 ],
		}, // MEGANIUM
		155: { growth_rate: 0x03,
				base_stats: { "hp": 39, "atk": 52, "def": 43, "spd": 65, "sp_atk": 60, "sp_def": 50 },
				types: [ 20 ],
		}, // CYNDAQUIL
		156: { growth_rate: 0x03,
				base_stats: { "hp": 58, "atk": 64, "def": 58, "spd": 80, "sp_atk": 80, "sp_def": 65 },
				types: [ 20 ],
		}, // QUILAVA
		157: { growth_rate: 0x03,
				base_stats: { "hp": 78, "atk": 84, "def": 78, "spd": 100, "sp_atk": 109, "sp_def": 85 },
				types: [ 20 ],
		}, // TYPHLOSION
		158: { growth_rate: 0x03,
				base_stats: { "hp": 50, "atk": 65, "def": 64, "spd": 43, "sp_atk": 44, "sp_def": 48 },
				types: [ 21 ],
		}, // TOTODILE
		159: { growth_rate: 0x03,
				base_stats: { "hp": 65, "atk": 80, "def": 80, "spd": 58, "sp_atk": 59, "sp_def": 63 },
				types: [ 21 ],
		}, // CROCONAW
		160: { growth_rate: 0x03,
				base_stats: { "hp": 85, "atk": 105, "def": 100, "spd": 78, "sp_atk": 79, "sp_def": 83 },
				types: [ 21 ],
		}, // FERALIGATR
		161: { growth_rate: 0x00,
				base_stats: { "hp": 35, "atk": 46, "def": 34, "spd": 20, "sp_atk": 35, "sp_def": 45 },
				types: [ 0 ],
		}, // SENTRET
		162: { growth_rate: 0x00,
				base_stats: { "hp": 85, "atk": 76, "def": 64, "spd": 90, "sp_atk": 45, "sp_def": 55 },
				types: [ 0 ],
		}, // FURRET
		163: { growth_rate: 0x00,
				base_stats: { "hp": 60, "atk": 30, "def": 30, "spd": 50, "sp_atk": 36, "sp_def": 56 },
				types: [ 0, 2 ],
		}, // HOOTHOOT
		164: { growth_rate: 0x00,
				base_stats: { "hp": 100, "atk": 50, "def": 50, "spd": 70, "sp_atk": 76, "sp_def": 96 },
				types: [ 0, 2 ],
		}, // NOCTOWL
		165: { growth_rate: 0x04,
				base_stats: { "hp": 40, "atk": 20, "def": 30, "spd": 55, "sp_atk": 40, "sp_def": 80 },
				types: [ 7, 2 ],
		}, // LEDYBA
		166: { growth_rate: 0x04,
				base_stats: { "hp": 55, "atk": 35, "def": 50, "spd": 85, "sp_atk": 55, "sp_def": 110 },
				types: [ 7, 2 ],
		}, // LEDIAN
		167: { growth_rate: 0x04,
				base_stats: { "hp": 40, "atk": 60, "def": 40, "spd": 30, "sp_atk": 40, "sp_def": 40 },
				types: [ 7, 3 ],
		}, // SPINARAK
		168: { growth_rate: 0x04,
				base_stats: { "hp": 70, "atk": 90, "def": 70, "spd": 40, "sp_atk": 60, "sp_def": 60 },
				types: [ 7, 3 ],
		}, // ARIADOS
		169: { growth_rate: 0x00,
				base_stats: { "hp": 85, "atk": 90, "def": 80, "spd": 130, "sp_atk": 70, "sp_def": 80 },
				types: [ 3, 2 ],
		}, // CROBAT
		170: { growth_rate: 0x05,
				base_stats: { "hp": 75, "atk": 38, "def": 38, "spd": 67, "sp_atk": 56, "sp_def": 56 },
				types: [ 21, 23 ],
		}, // CHINCHOU
		171: { growth_rate: 0x05,
				base_stats: { "hp": 125, "atk": 58, "def": 58, "spd": 67, "sp_atk": 76, "sp_def": 76 },
				types: [ 21, 23 ],
		}, // LANTURN
		172: { growth_rate: 0x00,
				base_stats: { "hp": 20, "atk": 40, "def": 15, "spd": 60, "sp_atk": 35, "sp_def": 35 },
				types: [ 23 ],
		}, // PICHU
		173: { growth_rate: 0x04,
				base_stats: { "hp": 50, "atk": 25, "def": 28, "spd": 15, "sp_atk": 45, "sp_def": 55 },
				types: [ 0 ],
		}, // CLEFFA
		174: { growth_rate: 0x04,
				base_stats: { "hp": 90, "atk": 30, "def": 15, "spd": 15, "sp_atk": 40, "sp_def": 20 },
				types: [ 0 ],
		}, // IGGLYBUFF
		175: { growth_rate: 0x04,
				base_stats: { "hp": 35, "atk": 20, "def": 65, "spd": 20, "sp_atk": 40, "sp_def": 65 },
				types: [ 0 ],
		}, // TOGEPI
		176: { growth_rate: 0x04,
				base_stats: { "hp": 55, "atk": 40, "def": 85, "spd": 40, "sp_atk": 80, "sp_def": 105 },
				types: [ 0, 2 ],
		}, // TOGETIC
		177: { growth_rate: 0x00,
				base_stats: { "hp": 40, "atk": 50, "def": 45, "spd": 70, "sp_atk": 70, "sp_def": 45 },
				types: [ 24, 2 ],
		}, // NATU
		178: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 75, "def": 70, "spd": 95, "sp_atk": 95, "sp_def": 70 },
				types: [ 24, 2 ],
		}, // XATU
		179: { growth_rate: 0x03,
				base_stats: { "hp": 55, "atk": 40, "def": 40, "spd": 35, "sp_atk": 65, "sp_def": 45 },
				types: [ 23 ],
		}, // MAREEP
		180: { growth_rate: 0x03,
				base_stats: { "hp": 70, "atk": 55, "def": 55, "spd": 45, "sp_atk": 80, "sp_def": 60 },
				types: [ 23 ],
		}, // FLAAFFY
		181: { growth_rate: 0x03,
				base_stats: { "hp": 90, "atk": 75, "def": 75, "spd": 55, "sp_atk": 115, "sp_def": 90 },
				types: [ 23 ],
		}, // AMPHAROS
		182: { growth_rate: 0x03,
				base_stats: { "hp": 75, "atk": 80, "def": 85, "spd": 50, "sp_atk": 90, "sp_def": 100 },
				types: [ 22 ],
		}, // BELLOSSOM
		183: { growth_rate: 0x04,
				base_stats: { "hp": 70, "atk": 20, "def": 50, "spd": 40, "sp_atk": 20, "sp_def": 50 },
				types: [ 21 ],
		}, // MARILL
		184: { growth_rate: 0x04,
				base_stats: { "hp": 100, "atk": 50, "def": 80, "spd": 50, "sp_atk": 50, "sp_def": 80 },
				types: [ 21 ],
		}, // AZUMARILL
		185: { growth_rate: 0x00,
				base_stats: { "hp": 70, "atk": 100, "def": 115, "spd": 30, "sp_atk": 30, "sp_def": 65 },
				types: [ 5 ],
		}, // SUDOWOODO
		186: { growth_rate: 0x03,
				base_stats: { "hp": 90, "atk": 75, "def": 75, "spd": 70, "sp_atk": 90, "sp_def": 100 },
				types: [ 21 ],
		}, // POLITOED
		187: { growth_rate: 0x03,
				base_stats: { "hp": 35, "atk": 35, "def": 40, "spd": 50, "sp_atk": 35, "sp_def": 55 },
				types: [ 22, 2 ],
		}, // HOPPIP
		188: { growth_rate: 0x03,
				base_stats: { "hp": 55, "atk": 45, "def": 50, "spd": 80, "sp_atk": 45, "sp_def": 65 },
				types: [ 22, 2 ],
		}, // SKIPLOOM
		189: { growth_rate: 0x03,
				base_stats: { "hp": 75, "atk": 55, "def": 70, "spd": 110, "sp_atk": 55, "sp_def": 85 },
				types: [ 22, 2 ],
		}, // JUMPLUFF
		190: { growth_rate: 0x04,
				base_stats: { "hp": 55, "atk": 70, "def": 55, "spd": 85, "sp_atk": 40, "sp_def": 55 },
				types: [ 0 ],
		}, // AIPOM
		191: { growth_rate: 0x03,
				base_stats: { "hp": 30, "atk": 30, "def": 30, "spd": 30, "sp_atk": 30, "sp_def": 30 },
				types: [ 22 ],
		}, // SUNKERN
		192: { growth_rate: 0x03,
				base_stats: { "hp": 75, "atk": 75, "def": 55, "spd": 30, "sp_atk": 105, "sp_def": 85 },
				types: [ 22 ],
		}, // SUNFLORA
		193: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 65, "def": 45, "spd": 95, "sp_atk": 75, "sp_def": 45 },
				types: [ 7, 2 ],
		}, // YANMA
		194: { growth_rate: 0x00,
				base_stats: { "hp": 55, "atk": 45, "def": 45, "spd": 15, "sp_atk": 25, "sp_def": 25 },
				types: [ 21, 4 ],
		}, // WOOPER
		195: { growth_rate: 0x00,
				base_stats: { "hp": 95, "atk": 85, "def": 85, "spd": 35, "sp_atk": 65, "sp_def": 65 },
				types: [ 21, 4 ],
		}, // QUAGSIRE
		196: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 65, "def": 60, "spd": 110, "sp_atk": 130, "sp_def": 95 },
				types: [ 24 ],
		}, // ESPEON
		197: { growth_rate: 0x00,
				base_stats: { "hp": 95, "atk": 65, "def": 110, "spd": 65, "sp_atk": 60, "sp_def": 130 },
				types: [ 27 ],
		}, // UMBREON
		198: { growth_rate: 0x03,
				base_stats: { "hp": 60, "atk": 85, "def": 42, "spd": 91, "sp_atk": 85, "sp_def": 42 },
				types: [ 27, 2 ],
		}, // MURKROW
		199: { growth_rate: 0x00,
				base_stats: { "hp": 95, "atk": 75, "def": 80, "spd": 30, "sp_atk": 100, "sp_def": 110 },
				types: [ 21, 24 ],
		}, // SLOWKING
		200: { growth_rate: 0x04,
				base_stats: { "hp": 60, "atk": 60, "def": 60, "spd": 85, "sp_atk": 85, "sp_def": 85 },
				types: [ 8 ],
		}, // MISDREAVUS
		201: { growth_rate: 0x00,
				base_stats: { "hp": 48, "atk": 72, "def": 48, "spd": 48, "sp_atk": 72, "sp_def": 48 },
				types: [ 24 ],
		}, // UNOWN
		202: { growth_rate: 0x00,
				base_stats: { "hp": 190, "atk": 33, "def": 58, "spd": 33, "sp_atk": 33, "sp_def": 58 },
				types: [ 24 ],
		}, // WOBBUFFET
		203: { growth_rate: 0x00,
				base_stats: { "hp": 70, "atk": 80, "def": 65, "spd": 85, "sp_atk": 90, "sp_def": 65 },
				types: [ 0, 24 ],
		}, // GIRAFARIG
		204: { growth_rate: 0x00,
				base_stats: { "hp": 50, "atk": 65, "def": 90, "spd": 15, "sp_atk": 35, "sp_def": 35 },
				types: [ 7 ],
		}, // PINECO
		205: { growth_rate: 0x00,
				base_stats: { "hp": 75, "atk": 90, "def": 140, "spd": 40, "sp_atk": 60, "sp_def": 60 },
				types: [ 7, 9 ],
		}, // FORRETRESS
		206: { growth_rate: 0x00,
				base_stats: { "hp": 100, "atk": 70, "def": 70, "spd": 45, "sp_atk": 65, "sp_def": 65 },
				types: [ 0 ],
		}, // DUNSPARCE
		207: { growth_rate: 0x03,
				base_stats: { "hp": 65, "atk": 75, "def": 105, "spd": 85, "sp_atk": 35, "sp_def": 65 },
				types: [ 4, 2 ],
		}, // GLIGAR
		208: { growth_rate: 0x00,
				base_stats: { "hp": 75, "atk": 85, "def": 200, "spd": 30, "sp_atk": 55, "sp_def": 65 },
				types: [ 9, 4 ],
		}, // STEELIX
		209: { growth_rate: 0x04,
				base_stats: { "hp": 60, "atk": 80, "def": 50, "spd": 30, "sp_atk": 40, "sp_def": 40 },
				types: [ 0 ],
		}, // SNUBBULL
		210: { growth_rate: 0x04,
				base_stats: { "hp": 90, "atk": 120, "def": 75, "spd": 45, "sp_atk": 60, "sp_def": 60 },
				types: [ 0 ],
		}, // GRANBULL
		211: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 95, "def": 75, "spd": 85, "sp_atk": 55, "sp_def": 55 },
				types: [ 21, 3 ],
		}, // QWILFISH
		212: { growth_rate: 0x00,
				base_stats: { "hp": 70, "atk": 130, "def": 100, "spd": 65, "sp_atk": 55, "sp_def": 80 },
				types: [ 7, 9 ],
		}, // SCIZOR
		213: { growth_rate: 0x03,
				base_stats: { "hp": 20, "atk": 10, "def": 230, "spd": 5, "sp_atk": 10, "sp_def": 230 },
				types: [ 7, 5 ],
		}, // SHUCKLE
		214: { growth_rate: 0x05,
				base_stats: { "hp": 80, "atk": 125, "def": 75, "spd": 85, "sp_atk": 40, "sp_def": 95 },
				types: [ 7, 1 ],
		}, // HERACROSS
		215: { growth_rate: 0x03,
				base_stats: { "hp": 55, "atk": 95, "def": 55, "spd": 115, "sp_atk": 35, "sp_def": 75 },
				types: [ 27, 25 ],
		}, // SNEASEL
		216: { growth_rate: 0x00,
				base_stats: { "hp": 60, "atk": 80, "def": 50, "spd": 40, "sp_atk": 50, "sp_def": 50 },
				types: [ 0 ],
		}, // TEDDIURSA
		217: { growth_rate: 0x00,
				base_stats: { "hp": 90, "atk": 130, "def": 75, "spd": 55, "sp_atk": 75, "sp_def": 75 },
				types: [ 0 ],
		}, // URSARING
		218: { growth_rate: 0x00,
				base_stats: { "hp": 40, "atk": 40, "def": 40, "spd": 20, "sp_atk": 70, "sp_def": 40 },
				types: [ 20 ],
		}, // SLUGMA
		219: { growth_rate: 0x00,
				base_stats: { "hp": 50, "atk": 50, "def": 120, "spd": 30, "sp_atk": 80, "sp_def": 80 },
				types: [ 20, 5 ],
		}, // MAGCARGO
		220: { growth_rate: 0x05,
				base_stats: { "hp": 50, "atk": 50, "def": 40, "spd": 50, "sp_atk": 30, "sp_def": 30 },
				types: [ 25, 4 ],
		}, // SWINUB
		221: { growth_rate: 0x05,
				base_stats: { "hp": 100, "atk": 100, "def": 80, "spd": 50, "sp_atk": 60, "sp_def": 60 },
				types: [ 25, 4 ],
		}, // PILOSWINE
		222: { growth_rate: 0x04,
				base_stats: { "hp": 55, "atk": 55, "def": 85, "spd": 35, "sp_atk": 65, "sp_def": 85 },
				types: [ 21, 5 ],
		}, // CORSOLA
		223: { growth_rate: 0x00,
				base_stats: { "hp": 35, "atk": 65, "def": 35, "spd": 65, "sp_atk": 65, "sp_def": 35 },
				types: [ 21 ],
		}, // REMORAID
		224: { growth_rate: 0x00,
				base_stats: { "hp": 75, "atk": 105, "def": 75, "spd": 45, "sp_atk": 105, "sp_def": 75 },
				types: [ 21 ],
		}, // OCTILLERY
		225: { growth_rate: 0x04,
				base_stats: { "hp": 45, "atk": 55, "def": 45, "spd": 75, "sp_atk": 65, "sp_def": 45 },
				types: [ 25, 2 ],
		}, // DELIBIRD
		226: { growth_rate: 0x05,
				base_stats: { "hp": 65, "atk": 40, "def": 70, "spd": 70, "sp_atk": 80, "sp_def": 140 },
				types: [ 21, 2 ],
		}, // MANTINE
		227: { growth_rate: 0x05,
				base_stats: { "hp": 65, "atk": 80, "def": 140, "spd": 70, "sp_atk": 40, "sp_def": 70 },
				types: [ 9, 2 ],
		}, // SKARMORY
		228: { growth_rate: 0x05,
				base_stats: { "hp": 45, "atk": 60, "def": 30, "spd": 65, "sp_atk": 80, "sp_def": 50 },
				types: [ 27, 20 ],
		}, // HOUNDOUR
		229: { growth_rate: 0x05,
				base_stats: { "hp": 75, "atk": 90, "def": 50, "spd": 95, "sp_atk": 110, "sp_def": 80 },
				types: [ 27, 20 ],
		}, // HOUNDOOM
		230: { growth_rate: 0x00,
				base_stats: { "hp": 75, "atk": 95, "def": 95, "spd": 85, "sp_atk": 95, "sp_def": 95 },
				types: [ 21, 26 ],
		}, // KINGDRA
		231: { growth_rate: 0x00,
				base_stats: { "hp": 90, "atk": 60, "def": 60, "spd": 40, "sp_atk": 40, "sp_def": 40 },
				types: [ 4 ],
		}, // PHANPY
		232: { growth_rate: 0x00,
				base_stats: { "hp": 90, "atk": 120, "def": 120, "spd": 50, "sp_atk": 60, "sp_def": 60 },
				types: [ 4 ],
		}, // DONPHAN
		233: { growth_rate: 0x00,
				base_stats: { "hp": 85, "atk": 80, "def": 90, "spd": 60, "sp_atk": 105, "sp_def": 95 },
				types: [ 0 ],
		}, // PORYGON2
		234: { growth_rate: 0x05,
				base_stats: { "hp": 73, "atk": 95, "def": 62, "spd": 85, "sp_atk": 85, "sp_def": 65 },
				types: [ 0 ],
		}, // STANTLER
		235: { growth_rate: 0x04,
				base_stats: { "hp": 55, "atk": 20, "def": 35, "spd": 75, "sp_atk": 20, "sp_def": 45 },
				types: [ 0 ],
		}, // SMEARGLE
		236: { growth_rate: 0x00,
				base_stats: { "hp": 35, "atk": 35, "def": 35, "spd": 35, "sp_atk": 35, "sp_def": 35 },
				types: [ 1 ],
		}, // TYROGUE
		237: { growth_rate: 0x00,
				base_stats: { "hp": 50, "atk": 95, "def": 95, "spd": 70, "sp_atk": 35, "sp_def": 110 },
				types: [ 1 ],
		}, // HITMONTOP
		238: { growth_rate: 0x00,
				base_stats: { "hp": 45, "atk": 30, "def": 15, "spd": 65, "sp_atk": 85, "sp_def": 65 },
				types: [ 25, 24 ],
		}, // SMOOCHUM
		239: { growth_rate: 0x00,
				base_stats: { "hp": 45, "atk": 63, "def": 37, "spd": 95, "sp_atk": 65, "sp_def": 55 },
				types: [ 23 ],
		}, // ELEKID
		240: { growth_rate: 0x00,
				base_stats: { "hp": 45, "atk": 75, "def": 37, "spd": 83, "sp_atk": 70, "sp_def": 55 },
				types: [ 20 ],
		}, // MAGBY
		241: { growth_rate: 0x05,
				base_stats: { "hp": 95, "atk": 80, "def": 105, "spd": 100, "sp_atk": 40, "sp_def": 70 },
				types: [ 0 ],
		}, // MILTANK
		242: { growth_rate: 0x04,
				base_stats: { "hp": 255, "atk": 10, "def": 10, "spd": 55, "sp_atk": 75, "sp_def": 135 },
				types: [ 0 ],
		}, // BLISSEY
		243: { growth_rate: 0x05,
				base_stats: { "hp": 90, "atk": 85, "def": 75, "spd": 115, "sp_atk": 115, "sp_def": 100 },
				types: [ 23 ],
		}, // RAIKOU
		244: { growth_rate: 0x05,
				base_stats: { "hp": 115, "atk": 115, "def": 85, "spd": 100, "sp_atk": 90, "sp_def": 75 },
				types: [ 20 ],
		}, // ENTEI
		245: { growth_rate: 0x05,
				base_stats: { "hp": 100, "atk": 75, "def": 115, "spd": 85, "sp_atk": 90, "sp_def": 115 },
				types: [ 21 ],
		}, // SUICUNE
		246: { growth_rate: 0x05,
				base_stats: { "hp": 50, "atk": 64, "def": 50, "spd": 41, "sp_atk": 45, "sp_def": 50 },
				types: [ 5, 4 ],
		}, // LARVITAR
		247: { growth_rate: 0x05,
				base_stats: { "hp": 70, "atk": 84, "def": 70, "spd": 51, "sp_atk": 65, "sp_def": 70 },
				types: [ 5, 4 ],
		}, // PUPITAR
		248: { growth_rate: 0x05,
				base_stats: { "hp": 100, "atk": 134, "def": 110, "spd": 61, "sp_atk": 95, "sp_def": 100 },
				types: [ 5, 27 ],
		}, // TYRANITAR
		249: { growth_rate: 0x05,
				base_stats: { "hp": 106, "atk": 90, "def": 130, "spd": 110, "sp_atk": 90, "sp_def": 154 },
				types: [ 24, 2 ],
		}, // LUGIA
		250: { growth_rate: 0x05,
				base_stats: { "hp": 106, "atk": 130, "def": 90, "spd": 90, "sp_atk": 110, "sp_def": 154 },
				types: [ 20, 2 ],
		}, // HO-OH
		251: { growth_rate: 0x03,
				base_stats: { "hp": 100, "atk": 100, "def": 100, "spd": 100, "sp_atk": 100, "sp_def": 100 },
				types: [ 24, 22 ],
		}, // CELEBI
		252: { growth_rate: 0xff,
				base_stats: { "hp": 21, "atk": 51, "def": 22, "spd": 75, "sp_atk": 23, "sp_def": 98 },
				types: [ 24, 121 ],
		}, // ?????
		253: { growth_rate: 0x0f,
				base_stats: { "hp": 4, "atk": 68, "def": 8, "spd": 15, "sp_atk": 13, "sp_def": 14 },
				types: [ 9, 12 ],
		}, // EGG
		254: { growth_rate: 0xe0,
				base_stats: { "hp": 244, "atk": 0, "def": 234, "spd": 0, "sp_atk": 245, "sp_def": 0 },
				types: [ 71, 255 ],
		}, // ?????
		255: { growth_rate: 0x0e,
				base_stats: { "hp": 127, "atk": 21, "def": 192, "spd": 192, "sp_atk": 240, "sp_def": 48 },
				types: [ 124, 12 ],
		}, // ?????
	};

	private static keyValuePairs = Object.entries(this.statsLookupKV);
	public static statsLookup = new Map(this.keyValuePairs);
};

export default PokemonStatsLookup;