export class PokemonStatsLookup {
	private static statsLookupKV = {
		"": { growth_rate: "",
				base_stats: { "hp": 0, "atk": 0, "def": 0, "spd": 0, "spc": 0 },
				types: [ 0 ],
		},
		0: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // 'M
		1: { growth_rate: 0x05,
				base_stats: { "hp": 105, "atk": 130, "def": 120, "spd": 40, "spc": 45 },
				types: [ 4, 5 ],
		}, // RHYDON
		2: { growth_rate: 0x00,
				base_stats: { "hp": 105, "atk": 95, "def": 80, "spd": 90, "spc": 40 },
				types: [ 0 ],
		}, // KANGASKHAN
		3: { growth_rate: 0x03,
				base_stats: { "hp": 46, "atk": 57, "def": 40, "spd": 50, "spc": 40 },
				types: [ 3 ],
		}, // NIDORAN♂
		4: { growth_rate: 0x04,
				base_stats: { "hp": 70, "atk": 45, "def": 48, "spd": 35, "spc": 60 },
				types: [ 0 ],
		}, // CLEFAIRY
		5: { growth_rate: 0x00,
				base_stats: { "hp": 40, "atk": 60, "def": 30, "spd": 70, "spc": 31 },
				types: [ 0, 2 ],
		}, // SPEAROW
		6: { growth_rate: 0x00,
				base_stats: { "hp": 40, "atk": 30, "def": 50, "spd": 100, "spc": 55 },
				types: [ 23 ],
		}, // VOLTORB
		7: { growth_rate: 0x03,
				base_stats: { "hp": 81, "atk": 92, "def": 77, "spd": 85, "spc": 75 },
				types: [ 3, 4 ],
		}, // NIDOKING
		8: { growth_rate: 0x00,
				base_stats: { "hp": 95, "atk": 75, "def": 110, "spd": 30, "spc": 80 },
				types: [ 21, 24 ],
		}, // SLOWBRO
		9: { growth_rate: 0x03,
				base_stats: { "hp": 60, "atk": 62, "def": 63, "spd": 60, "spc": 80 },
				types: [ 22, 3 ],
		}, // IVYSAUR
		10: { growth_rate: 0x05,
				base_stats: { "hp": 95, "atk": 95, "def": 85, "spd": 55, "spc": 125 },
				types: [ 22, 24 ],
		}, // EXEGGUTOR
		11: { growth_rate: 0x00,
				base_stats: { "hp": 90, "atk": 55, "def": 75, "spd": 30, "spc": 60 },
				types: [ 0 ],
		}, // LICKITUNG
		12: { growth_rate: 0x05,
				base_stats: { "hp": 60, "atk": 40, "def": 80, "spd": 40, "spc": 60 },
				types: [ 22, 24 ],
		}, // EXEGGCUTE
		13: { growth_rate: 0x00,
				base_stats: { "hp": 80, "atk": 80, "def": 50, "spd": 25, "spc": 40 },
				types: [ 3 ],
		}, // GRIMER
		14: { growth_rate: 0x03,
				base_stats: { "hp": 60, "atk": 65, "def": 60, "spd": 110, "spc": 130 },
				types: [ 8, 3 ],
		}, // GENGAR
		15: { growth_rate: 0x03,
				base_stats: { "hp": 55, "atk": 47, "def": 52, "spd": 41, "spc": 40 },
				types: [ 3 ],
		}, // NIDORAN♀
		16: { growth_rate: 0x03,
				base_stats: { "hp": 90, "atk": 82, "def": 87, "spd": 76, "spc": 75 },
				types: [ 3, 4 ],
		}, // NIDOQUEEN
		17: { growth_rate: 0x00,
				base_stats: { "hp": 50, "atk": 50, "def": 95, "spd": 35, "spc": 40 },
				types: [ 4 ],
		}, // CUBONE
		18: { growth_rate: 0x05,
				base_stats: { "hp": 80, "atk": 85, "def": 95, "spd": 25, "spc": 30 },
				types: [ 4, 5 ],
		}, // RHYHORN
		19: { growth_rate: 0x05,
				base_stats: { "hp": 130, "atk": 85, "def": 80, "spd": 60, "spc": 95 },
				types: [ 21, 25 ],
		}, // LAPRAS
		20: { growth_rate: 0x05,
				base_stats: { "hp": 90, "atk": 110, "def": 80, "spd": 95, "spc": 80 },
				types: [ 20 ],
		}, // ARCANINE
		21: { growth_rate: 0x03,
				base_stats: { "hp": 100, "atk": 100, "def": 100, "spd": 100, "spc": 100 },
				types: [ 24 ],
		}, // MEW
		22: { growth_rate: 0x05,
				base_stats: { "hp": 95, "atk": 125, "def": 79, "spd": 81, "spc": 100 },
				types: [ 21, 2 ],
		}, // GYARADOS
		23: { growth_rate: 0x05,
				base_stats: { "hp": 30, "atk": 65, "def": 100, "spd": 40, "spc": 45 },
				types: [ 21 ],
		}, // SHELLDER
		24: { growth_rate: 0x05,
				base_stats: { "hp": 40, "atk": 40, "def": 35, "spd": 70, "spc": 100 },
				types: [ 21, 3 ],
		}, // TENTACOOL
		25: { growth_rate: 0x03,
				base_stats: { "hp": 30, "atk": 35, "def": 30, "spd": 80, "spc": 100 },
				types: [ 8, 3 ],
		}, // GASTLY
		26: { growth_rate: 0x00,
				base_stats: { "hp": 70, "atk": 110, "def": 80, "spd": 105, "spc": 55 },
				types: [ 7, 2 ],
		}, // SCYTHER
		27: { growth_rate: 0x05,
				base_stats: { "hp": 30, "atk": 45, "def": 55, "spd": 85, "spc": 70 },
				types: [ 21 ],
		}, // STARYU
		28: { growth_rate: 0x03,
				base_stats: { "hp": 79, "atk": 83, "def": 100, "spd": 78, "spc": 85 },
				types: [ 21 ],
		}, // BLASTOISE
		29: { growth_rate: 0x05,
				base_stats: { "hp": 65, "atk": 125, "def": 100, "spd": 85, "spc": 55 },
				types: [ 7 ],
		}, // PINSIR
		30: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 55, "def": 115, "spd": 60, "spc": 100 },
				types: [ 22 ],
		}, // TANGELA
		31: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		32: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		33: { growth_rate: 0x05,
				base_stats: { "hp": 55, "atk": 70, "def": 45, "spd": 60, "spc": 50 },
				types: [ 20 ],
		}, // GROWLITHE
		34: { growth_rate: 0x00,
				base_stats: { "hp": 35, "atk": 45, "def": 160, "spd": 70, "spc": 30 },
				types: [ 5, 4 ],
		}, // ONIX
		35: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 90, "def": 65, "spd": 100, "spc": 61 },
				types: [ 0, 2 ],
		}, // FEAROW
		36: { growth_rate: 0x03,
				base_stats: { "hp": 40, "atk": 45, "def": 40, "spd": 56, "spc": 35 },
				types: [ 0, 2 ],
		}, // PIDGEY
		37: { growth_rate: 0x00,
				base_stats: { "hp": 90, "atk": 65, "def": 65, "spd": 15, "spc": 40 },
				types: [ 21, 24 ],
		}, // SLOWPOKE
		38: { growth_rate: 0x03,
				base_stats: { "hp": 40, "atk": 35, "def": 30, "spd": 105, "spc": 120 },
				types: [ 24 ],
		}, // KADABRA
		39: { growth_rate: 0x03,
				base_stats: { "hp": 55, "atk": 95, "def": 115, "spd": 35, "spc": 45 },
				types: [ 5, 4 ],
		}, // GRAVELER
		40: { growth_rate: 0x04,
				base_stats: { "hp": 250, "atk": 5, "def": 5, "spd": 50, "spc": 105 },
				types: [ 0 ],
		}, // CHANSEY
		41: { growth_rate: 0x03,
				base_stats: { "hp": 80, "atk": 100, "def": 70, "spd": 45, "spc": 50 },
				types: [ 1 ],
		}, // MACHOKE
		42: { growth_rate: 0x00,
				base_stats: { "hp": 40, "atk": 45, "def": 65, "spd": 90, "spc": 100 },
				types: [ 24 ],
		}, // MR.MIME
		43: { growth_rate: 0x00,
				base_stats: { "hp": 50, "atk": 120, "def": 53, "spd": 87, "spc": 35 },
				types: [ 1 ],
		}, // HITMONLEE
		44: { growth_rate: 0x00,
				base_stats: { "hp": 50, "atk": 105, "def": 79, "spd": 76, "spc": 35 },
				types: [ 1 ],
		}, // HITMONCHAN
		45: { growth_rate: 0x00,
				base_stats: { "hp": 60, "atk": 85, "def": 69, "spd": 80, "spc": 65 },
				types: [ 3 ],
		}, // ARBOK
		46: { growth_rate: 0x00,
				base_stats: { "hp": 60, "atk": 95, "def": 80, "spd": 30, "spc": 80 },
				types: [ 7, 22 ],
		}, // PARASECT
		47: { growth_rate: 0x00,
				base_stats: { "hp": 50, "atk": 52, "def": 48, "spd": 55, "spc": 50 },
				types: [ 21 ],
		}, // PSYDUCK
		48: { growth_rate: 0x00,
				base_stats: { "hp": 60, "atk": 48, "def": 45, "spd": 42, "spc": 90 },
				types: [ 24 ],
		}, // DROWZEE
		49: { growth_rate: 0x03,
				base_stats: { "hp": 80, "atk": 110, "def": 130, "spd": 45, "spc": 55 },
				types: [ 5, 4 ],
		}, // GOLEM
		50: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		51: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 95, "def": 57, "spd": 93, "spc": 85 },
				types: [ 20 ],
		}, // MAGMAR
		52: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		53: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 83, "def": 57, "spd": 105, "spc": 85 },
				types: [ 23 ],
		}, // ELECTABUZZ
		54: { growth_rate: 0x00,
				base_stats: { "hp": 50, "atk": 60, "def": 95, "spd": 70, "spc": 120 },
				types: [ 23 ],
		}, // MAGNETON
		55: { growth_rate: 0x00,
				base_stats: { "hp": 40, "atk": 65, "def": 95, "spd": 35, "spc": 60 },
				types: [ 3 ],
		}, // KOFFING
		56: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		57: { growth_rate: 0x00,
				base_stats: { "hp": 40, "atk": 80, "def": 35, "spd": 70, "spc": 35 },
				types: [ 1 ],
		}, // MANKEY
		58: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 45, "def": 55, "spd": 45, "spc": 70 },
				types: [ 21 ],
		}, // SEEL
		59: { growth_rate: 0x00,
				base_stats: { "hp": 10, "atk": 55, "def": 25, "spd": 95, "spc": 45 },
				types: [ 4 ],
		}, // DIGLETT
		60: { growth_rate: 0x05,
				base_stats: { "hp": 75, "atk": 100, "def": 95, "spd": 110, "spc": 70 },
				types: [ 0 ],
		}, // TAUROS
		61: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		62: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		63: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		64: { growth_rate: 0x00,
				base_stats: { "hp": 52, "atk": 65, "def": 55, "spd": 60, "spc": 58 },
				types: [ 0, 2 ],
		}, // FARFETCH'D
		65: { growth_rate: 0x00,
				base_stats: { "hp": 60, "atk": 55, "def": 50, "spd": 45, "spc": 40 },
				types: [ 7, 3 ],
		}, // VENONAT
		66: { growth_rate: 0x05,
				base_stats: { "hp": 91, "atk": 134, "def": 95, "spd": 80, "spc": 100 },
				types: [ 26, 2 ],
		}, // DRAGONITE
		67: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		68: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		69: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		70: { growth_rate: 0x00,
				base_stats: { "hp": 35, "atk": 85, "def": 45, "spd": 75, "spc": 35 },
				types: [ 0, 2 ],
		}, // DODUO
		71: { growth_rate: 0x03,
				base_stats: { "hp": 40, "atk": 50, "def": 40, "spd": 90, "spc": 40 },
				types: [ 21 ],
		}, // POLIWAG
		72: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 50, "def": 35, "spd": 95, "spc": 95 },
				types: [ 25, 24 ],
		}, // JYNX
		73: { growth_rate: 0x05,
				base_stats: { "hp": 90, "atk": 100, "def": 90, "spd": 90, "spc": 125 },
				types: [ 20, 2 ],
		}, // MOLTRES
		74: { growth_rate: 0x05,
				base_stats: { "hp": 90, "atk": 85, "def": 100, "spd": 85, "spc": 125 },
				types: [ 25, 2 ],
		}, // ARTICUNO
		75: { growth_rate: 0x05,
				base_stats: { "hp": 90, "atk": 90, "def": 85, "spd": 100, "spc": 125 },
				types: [ 23, 2 ],
		}, // ZAPDOS
		76: { growth_rate: 0x00,
				base_stats: { "hp": 48, "atk": 48, "def": 48, "spd": 48, "spc": 48 },
				types: [ 0 ],
		}, // DITTO
		77: { growth_rate: 0x00,
				base_stats: { "hp": 40, "atk": 45, "def": 35, "spd": 90, "spc": 40 },
				types: [ 0 ],
		}, // MEOWTH
		78: { growth_rate: 0x00,
				base_stats: { "hp": 30, "atk": 105, "def": 90, "spd": 50, "spc": 25 },
				types: [ 21 ],
		}, // KRABBY
		79: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		80: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		81: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		82: { growth_rate: 0x00,
				base_stats: { "hp": 38, "atk": 41, "def": 40, "spd": 65, "spc": 65 },
				types: [ 20 ],
		}, // VULPIX
		83: { growth_rate: 0x00,
				base_stats: { "hp": 73, "atk": 76, "def": 75, "spd": 100, "spc": 100 },
				types: [ 20 ],
		}, // NINETALES
		84: { growth_rate: 0x00,
				base_stats: { "hp": 35, "atk": 55, "def": 30, "spd": 90, "spc": 50 },
				types: [ 23 ],
		}, // PIKACHU
		85: { growth_rate: 0x00,
				base_stats: { "hp": 60, "atk": 90, "def": 55, "spd": 100, "spc": 90 },
				types: [ 23 ],
		}, // RAICHU
		86: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		87: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		88: { growth_rate: 0x05,
				base_stats: { "hp": 41, "atk": 64, "def": 45, "spd": 50, "spc": 50 },
				types: [ 26 ],
		}, // DRATINI
		89: { growth_rate: 0x05,
				base_stats: { "hp": 61, "atk": 84, "def": 65, "spd": 70, "spc": 70 },
				types: [ 26 ],
		}, // DRAGONAIR
		90: { growth_rate: 0x00,
				base_stats: { "hp": 30, "atk": 80, "def": 90, "spd": 55, "spc": 45 },
				types: [ 5, 21 ],
		}, // KABUTO
		91: { growth_rate: 0x00,
				base_stats: { "hp": 60, "atk": 115, "def": 105, "spd": 80, "spc": 70 },
				types: [ 5, 21 ],
		}, // KABUTOPS
		92: { growth_rate: 0x00,
				base_stats: { "hp": 30, "atk": 40, "def": 70, "spd": 60, "spc": 70 },
				types: [ 21 ],
		}, // HORSEA
		93: { growth_rate: 0x00,
				base_stats: { "hp": 55, "atk": 65, "def": 95, "spd": 85, "spc": 95 },
				types: [ 21 ],
		}, // SEADRA
		94: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		95: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		96: { growth_rate: 0x00,
				base_stats: { "hp": 50, "atk": 75, "def": 85, "spd": 40, "spc": 30 },
				types: [ 4 ],
		}, // SANDSHREW
		97: { growth_rate: 0x00,
				base_stats: { "hp": 75, "atk": 100, "def": 110, "spd": 65, "spc": 55 },
				types: [ 4 ],
		}, // SANDSLASH
		98: { growth_rate: 0x00,
				base_stats: { "hp": 35, "atk": 40, "def": 100, "spd": 35, "spc": 90 },
				types: [ 5, 21 ],
		}, // OMANYTE
		99: { growth_rate: 0x00,
				base_stats: { "hp": 70, "atk": 60, "def": 125, "spd": 55, "spc": 115 },
				types: [ 5, 21 ],
		}, // OMASTAR
		100: { growth_rate: 0x04,
				base_stats: { "hp": 115, "atk": 45, "def": 20, "spd": 20, "spc": 25 },
				types: [ 0 ],
		}, // JIGGLYPUFF
		101: { growth_rate: 0x04,
				base_stats: { "hp": 140, "atk": 70, "def": 45, "spd": 45, "spc": 50 },
				types: [ 0 ],
		}, // WIGGLYTUFF
		102: { growth_rate: 0x00,
				base_stats: { "hp": 55, "atk": 55, "def": 50, "spd": 55, "spc": 65 },
				types: [ 0 ],
		}, // EEVEE
		103: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 130, "def": 60, "spd": 65, "spc": 110 },
				types: [ 20 ],
		}, // FLAREON
		104: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 65, "def": 60, "spd": 130, "spc": 110 },
				types: [ 23 ],
		}, // JOLTEON
		105: { growth_rate: 0x00,
				base_stats: { "hp": 130, "atk": 65, "def": 60, "spd": 65, "spc": 110 },
				types: [ 21 ],
		}, // VAPOREON
		106: { growth_rate: 0x03,
				base_stats: { "hp": 70, "atk": 80, "def": 50, "spd": 35, "spc": 35 },
				types: [ 1 ],
		}, // MACHOP
		107: { growth_rate: 0x00,
				base_stats: { "hp": 40, "atk": 45, "def": 35, "spd": 55, "spc": 40 },
				types: [ 3, 2 ],
		}, // ZUBAT
		108: { growth_rate: 0x00,
				base_stats: { "hp": 35, "atk": 60, "def": 44, "spd": 55, "spc": 40 },
				types: [ 3 ],
		}, // EKANS
		109: { growth_rate: 0x00,
				base_stats: { "hp": 35, "atk": 70, "def": 55, "spd": 25, "spc": 55 },
				types: [ 7, 22 ],
		}, // PARAS
		110: { growth_rate: 0x03,
				base_stats: { "hp": 65, "atk": 65, "def": 65, "spd": 90, "spc": 50 },
				types: [ 21 ],
		}, // POLIWHIRL
		111: { growth_rate: 0x03,
				base_stats: { "hp": 90, "atk": 85, "def": 95, "spd": 70, "spc": 70 },
				types: [ 21, 1 ],
		}, // POLIWRATH
		112: { growth_rate: 0x00,
				base_stats: { "hp": 40, "atk": 35, "def": 30, "spd": 50, "spc": 20 },
				types: [ 7, 3 ],
		}, // WEEDLE
		113: { growth_rate: 0x00,
				base_stats: { "hp": 45, "atk": 25, "def": 50, "spd": 35, "spc": 25 },
				types: [ 7, 3 ],
		}, // KAKUNA
		114: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 80, "def": 40, "spd": 75, "spc": 45 },
				types: [ 7, 3 ],
		}, // BEEDRILL
		115: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		116: { growth_rate: 0x00,
				base_stats: { "hp": 60, "atk": 110, "def": 70, "spd": 100, "spc": 60 },
				types: [ 0, 2 ],
		}, // DODRIO
		117: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 105, "def": 60, "spd": 95, "spc": 60 },
				types: [ 1 ],
		}, // PRIMEAPE
		118: { growth_rate: 0x00,
				base_stats: { "hp": 35, "atk": 80, "def": 50, "spd": 120, "spc": 70 },
				types: [ 4 ],
		}, // DUGTRIO
		119: { growth_rate: 0x00,
				base_stats: { "hp": 70, "atk": 65, "def": 60, "spd": 90, "spc": 90 },
				types: [ 7, 3 ],
		}, // VENOMOTH
		120: { growth_rate: 0x00,
				base_stats: { "hp": 90, "atk": 70, "def": 80, "spd": 70, "spc": 95 },
				types: [ 21, 25 ],
		}, // DEWGONG
		121: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		122: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		123: { growth_rate: 0x00,
				base_stats: { "hp": 45, "atk": 30, "def": 35, "spd": 45, "spc": 20 },
				types: [ 7 ],
		}, // CATERPIE
		124: { growth_rate: 0x00,
				base_stats: { "hp": 50, "atk": 20, "def": 55, "spd": 30, "spc": 25 },
				types: [ 7 ],
		}, // METAPOD
		125: { growth_rate: 0x00,
				base_stats: { "hp": 60, "atk": 45, "def": 50, "spd": 70, "spc": 80 },
				types: [ 7, 2 ],
		}, // BUTTERFREE
		126: { growth_rate: 0x03,
				base_stats: { "hp": 90, "atk": 130, "def": 80, "spd": 55, "spc": 65 },
				types: [ 1 ],
		}, // MACHAMP
		127: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		128: { growth_rate: 0x00,
				base_stats: { "hp": 80, "atk": 82, "def": 78, "spd": 85, "spc": 80 },
				types: [ 21 ],
		}, // GOLDUCK
		129: { growth_rate: 0x00,
				base_stats: { "hp": 85, "atk": 73, "def": 70, "spd": 67, "spc": 115 },
				types: [ 24 ],
		}, // HYPNO
		130: { growth_rate: 0x00,
				base_stats: { "hp": 75, "atk": 80, "def": 70, "spd": 90, "spc": 75 },
				types: [ 3, 2 ],
		}, // GOLBAT
		131: { growth_rate: 0x05,
				base_stats: { "hp": 106, "atk": 110, "def": 90, "spd": 130, "spc": 154 },
				types: [ 24 ],
		}, // MEWTWO
		132: { growth_rate: 0x05,
				base_stats: { "hp": 160, "atk": 110, "def": 65, "spd": 30, "spc": 65 },
				types: [ 0 ],
		}, // SNORLAX
		133: { growth_rate: 0x05,
				base_stats: { "hp": 20, "atk": 10, "def": 55, "spd": 80, "spc": 20 },
				types: [ 21 ],
		}, // MAGIKARP
		134: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		135: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		136: { growth_rate: 0x00,
				base_stats: { "hp": 105, "atk": 105, "def": 75, "spd": 50, "spc": 65 },
				types: [ 3 ],
		}, // MUK
		137: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		138: { growth_rate: 0x00,
				base_stats: { "hp": 55, "atk": 130, "def": 115, "spd": 75, "spc": 50 },
				types: [ 21 ],
		}, // KINGLER
		139: { growth_rate: 0x05,
				base_stats: { "hp": 50, "atk": 95, "def": 180, "spd": 70, "spc": 85 },
				types: [ 21, 25 ],
		}, // CLOYSTER
		140: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		141: { growth_rate: 0x00,
				base_stats: { "hp": 60, "atk": 50, "def": 70, "spd": 140, "spc": 80 },
				types: [ 23 ],
		}, // ELECTRODE
		142: { growth_rate: 0x04,
				base_stats: { "hp": 95, "atk": 70, "def": 73, "spd": 60, "spc": 85 },
				types: [ 0 ],
		}, // CLEFABLE
		143: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 90, "def": 120, "spd": 60, "spc": 85 },
				types: [ 3 ],
		}, // WEEZING
		144: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 70, "def": 60, "spd": 115, "spc": 65 },
				types: [ 0 ],
		}, // PERSIAN
		145: { growth_rate: 0x00,
				base_stats: { "hp": 60, "atk": 80, "def": 110, "spd": 45, "spc": 50 },
				types: [ 4 ],
		}, // MAROWAK
		146: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		147: { growth_rate: 0x03,
				base_stats: { "hp": 45, "atk": 50, "def": 45, "spd": 95, "spc": 115 },
				types: [ 8, 3 ],
		}, // HAUNTER
		148: { growth_rate: 0x03,
				base_stats: { "hp": 25, "atk": 20, "def": 15, "spd": 90, "spc": 105 },
				types: [ 24 ],
		}, // ABRA
		149: { growth_rate: 0x03,
				base_stats: { "hp": 55, "atk": 50, "def": 45, "spd": 120, "spc": 135 },
				types: [ 24 ],
		}, // ALAKAZAM
		150: { growth_rate: 0x03,
				base_stats: { "hp": 63, "atk": 60, "def": 55, "spd": 71, "spc": 50 },
				types: [ 0, 2 ],
		}, // PIDGEOTTO
		151: { growth_rate: 0x03,
				base_stats: { "hp": 83, "atk": 80, "def": 75, "spd": 91, "spc": 70 },
				types: [ 0, 2 ],
		}, // PIDGEOT
		152: { growth_rate: 0x05,
				base_stats: { "hp": 60, "atk": 75, "def": 85, "spd": 115, "spc": 100 },
				types: [ 21, 24 ],
		}, // STARMIE
		153: { growth_rate: 0x03,
				base_stats: { "hp": 45, "atk": 49, "def": 49, "spd": 45, "spc": 65 },
				types: [ 22, 3 ],
		}, // BULBASAUR
		154: { growth_rate: 0x03,
				base_stats: { "hp": 80, "atk": 82, "def": 83, "spd": 80, "spc": 100 },
				types: [ 22, 3 ],
		}, // VENUSAUR
		155: { growth_rate: 0x05,
				base_stats: { "hp": 80, "atk": 70, "def": 65, "spd": 100, "spc": 120 },
				types: [ 21, 3 ],
		}, // TENTACRUEL
		156: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		157: { growth_rate: 0x00,
				base_stats: { "hp": 45, "atk": 67, "def": 60, "spd": 63, "spc": 50 },
				types: [ 21 ],
		}, // GOLDEEN
		158: { growth_rate: 0x00,
				base_stats: { "hp": 80, "atk": 92, "def": 65, "spd": 68, "spc": 80 },
				types: [ 21 ],
		}, // SEAKING
		159: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		160: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		161: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		162: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		163: { growth_rate: 0x00,
				base_stats: { "hp": 50, "atk": 85, "def": 55, "spd": 90, "spc": 65 },
				types: [ 20 ],
		}, // PONYTA
		164: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 100, "def": 70, "spd": 105, "spc": 80 },
				types: [ 20 ],
		}, // RAPIDASH
		165: { growth_rate: 0x00,
				base_stats: { "hp": 30, "atk": 56, "def": 35, "spd": 72, "spc": 25 },
				types: [ 0 ],
		}, // RATTATA
		166: { growth_rate: 0x00,
				base_stats: { "hp": 55, "atk": 81, "def": 60, "spd": 97, "spc": 50 },
				types: [ 0 ],
		}, // RATICATE
		167: { growth_rate: 0x03,
				base_stats: { "hp": 61, "atk": 72, "def": 57, "spd": 65, "spc": 55 },
				types: [ 3 ],
		}, // NIDORINO
		168: { growth_rate: 0x03,
				base_stats: { "hp": 70, "atk": 62, "def": 67, "spd": 56, "spc": 55 },
				types: [ 3 ],
		}, // NIDORINA
		169: { growth_rate: 0x03,
				base_stats: { "hp": 40, "atk": 80, "def": 100, "spd": 20, "spc": 30 },
				types: [ 5, 4 ],
		}, // GEODUDE
		170: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 60, "def": 70, "spd": 40, "spc": 75 },
				types: [ 0 ],
		}, // PORYGON
		171: { growth_rate: 0x05,
				base_stats: { "hp": 80, "atk": 105, "def": 65, "spd": 130, "spc": 60 },
				types: [ 5, 2 ],
		}, // AERODACTYL
		172: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		173: { growth_rate: 0x00,
				base_stats: { "hp": 25, "atk": 35, "def": 70, "spd": 45, "spc": 95 },
				types: [ 23 ],
		}, // MAGNEMITE
		174: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		175: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		176: { growth_rate: 0x03,
				base_stats: { "hp": 39, "atk": 52, "def": 43, "spd": 65, "spc": 50 },
				types: [ 20 ],
		}, // CHARMANDER
		177: { growth_rate: 0x03,
				base_stats: { "hp": 44, "atk": 48, "def": 65, "spd": 43, "spc": 50 },
				types: [ 21 ],
		}, // SQUIRTLE
		178: { growth_rate: 0x03,
				base_stats: { "hp": 58, "atk": 64, "def": 58, "spd": 80, "spc": 65 },
				types: [ 20 ],
		}, // CHARMELEON
		179: { growth_rate: 0x03,
				base_stats: { "hp": 59, "atk": 63, "def": 80, "spd": 58, "spc": 65 },
				types: [ 21 ],
		}, // WARTORTLE
		180: { growth_rate: 0x03,
				base_stats: { "hp": 78, "atk": 84, "def": 78, "spd": 100, "spc": 85 },
				types: [ 20, 2 ],
		}, // CHARIZARD
		181: { growth_rate: 0x1a,
				base_stats: { "hp": 33, "atk": 136, "def": 0, "spd": 29, "spc": 6 },
				types: [ 6, 0 ],
		}, // MISSINGNO.
		182: { growth_rate: "last",
				base_stats: "last",
				types: "last",
		}, // Kabutops fossil
		183: { growth_rate: "last",
				base_stats: "last",
				types: "last",
		}, // Aerodactyl fossil
		184: { growth_rate: "last",
				base_stats: "last",
				types: "last",
		}, // Ghost
		185: { growth_rate: 0x03,
				base_stats: { "hp": 45, "atk": 50, "def": 55, "spd": 30, "spc": 75 },
				types: [ 22, 3 ],
		}, // ODDISH
		186: { growth_rate: 0x03,
				base_stats: { "hp": 60, "atk": 65, "def": 70, "spd": 40, "spc": 85 },
				types: [ 22, 3 ],
		}, // GLOOM
		187: { growth_rate: 0x03,
				base_stats: { "hp": 75, "atk": 80, "def": 85, "spd": 50, "spc": 100 },
				types: [ 22, 3 ],
		}, // VILEPLUME
		188: { growth_rate: 0x03,
				base_stats: { "hp": 50, "atk": 75, "def": 35, "spd": 40, "spc": 70 },
				types: [ 22, 3 ],
		}, // BELLSPROUT
		189: { growth_rate: 0x03,
				base_stats: { "hp": 65, "atk": 90, "def": 50, "spd": 55, "spc": 85 },
				types: [ 22, 3 ],
		}, // WEEPINBELL
		190: { growth_rate: 0x03,
				base_stats: { "hp": 80, "atk": 105, "def": 65, "spd": 70, "spc": 100 },
				types: [ 22, 3 ],
		}, // VICTREEBEL
		191: { growth_rate: 0x37,
				base_stats: { "hp": 37, "atk": 0, "def": 40, "spd": 178, "spc": 19 },
				types: [ 11, 0 ],
		}, // ▲A
		192: { growth_rate: 0x03,
				base_stats: { "hp": 65, "atk": 65, "def": 65, "spd": 90, "spc": 50 },
				types: [ 21 ],
		}, // a<PAGE><PAGE>
		193: { growth_rate: 0x80,
				base_stats: { "hp": 232, "atk": 147, "def": 145, "spd": 128, "spc": 136 },
				types: [ 141, 132 ],
		}, // ゥ
		194: { growth_rate: 0x1d,
				base_stats: { "hp": 179, "atk": 96, "def": 209, "spd": 96, "spc": 21 },
				types: [ 97, 39 ],
		}, // ゥ.4
		195: { growth_rate: 0x03,
				base_stats: { "hp": 60, "atk": 65, "def": 60, "spd": 110, "spc": 130 },
				types: [ 8, 3 ],
		}, // hPOKé𝐒┐
		196: { growth_rate: 0x80,
				base_stats: { "hp": 232, "atk": 147, "def": 145, "spd": 128, "spc": 136 },
				types: [ 141, 132 ],
		}, // POKéWTRAINER
		197: { growth_rate: 0x37,
				base_stats: { "hp": 37, "atk": 0, "def": 40, "spd": 178, "spc": 19 },
				types: [ 11, 0 ],
		}, // PkMn<PAGE>┐└
		198: { growth_rate: 0x03,
				base_stats: { "hp": 90, "atk": 85, "def": 95, "spd": 70, "spc": 70 },
				types: [ 21, 1 ],
		}, // ゥL│ゥM4
		199: { growth_rate: 0x80,
				base_stats: { "hp": 232, "atk": 147, "def": 145, "spd": 128, "spc": 136 },
				types: [ 141, 132 ],
		}, // ♀pゥゥゥT
		200: { growth_rate: 0x1d,
				base_stats: { "hp": 179, "atk": 96, "def": 209, "spd": 96, "spc": 21 },
				types: [ 97, 39 ],
		}, // ゥU?
		201: { growth_rate: 0x00,
				base_stats: { "hp": 35, "atk": 45, "def": 160, "spd": 70, "spc": 30 },
				types: [ 5, 4 ],
		}, // ぉゥ8
		202: { growth_rate: 0x80,
				base_stats: { "hp": 232, "atk": 147, "def": 145, "spd": 128, "spc": 136 },
				types: [ 141, 132 ],
		}, // PC4SH<NULL>.
		203: { growth_rate: 0x03,
				base_stats: { "hp": 63, "atk": 60, "def": 55, "spd": 71, "spc": 50 },
				types: [ 0, 2 ],
		}, // ┘\np
		204: { growth_rate: 0x00,
				base_stats: { "hp": 40, "atk": 80, "def": 35, "spd": 70, "spc": 35 },
				types: [ 1 ],
		}, // PkMnぉ┌n
		205: { growth_rate: 0x00,
				base_stats: { "hp": 25, "atk": 35, "def": 70, "spd": 45, "spc": 95 },
				types: [ 23 ],
		}, // TRAINER
		206: { growth_rate: 0x00,
				base_stats: { "hp": 60, "atk": 85, "def": 69, "spd": 80, "spc": 65 },
				types: [ 3 ],
		}, // ▼WGd
		207: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 80, "def": 40, "spd": 75, "spc": 45 },
				types: [ 7, 3 ],
		}, // OPkMn4X
		208: { growth_rate: 0x37,
				base_stats: { "hp": 37, "atk": 0, "def": 40, "spd": 178, "spc": 19 },
				types: [ 11, 0 ],
		}, // PkMn”PkMnT
		209: { growth_rate: 0x03,
				base_stats: { "hp": 90, "atk": 85, "def": 95, "spd": 70, "spc": 70 },
				types: [ 21, 1 ],
		}, // 4𝐁84𝐂8
		210: { growth_rate: 0x80,
				base_stats: { "hp": 232, "atk": 147, "def": 145, "spd": 128, "spc": 136 },
				types: [ 141, 132 ],
		}, // ゥ'
		211: { growth_rate: 0x1d,
				base_stats: { "hp": 179, "atk": 96, "def": 209, "spd": 96, "spc": 21 },
				types: [ 97, 39 ],
		}, // Mp'uゥ
		212: { growth_rate: 0x03,
				base_stats: { "hp": 60, "atk": 65, "def": 60, "spd": 110, "spc": 130 },
				types: [ 8, 3 ],
		}, // AゥG
		213: { growth_rate: 0x80,
				base_stats: { "hp": 232, "atk": 147, "def": 145, "spd": 128, "spc": 136 },
				types: [ 141, 132 ],
		}, // pゥゥ𝐋ゥ
		214: { growth_rate: 0x37,
				base_stats: { "hp": 37, "atk": 0, "def": 40, "spd": 178, "spc": 19 },
				types: [ 11, 0 ],
		}, // 4h
		215: { growth_rate: 0x03,
				base_stats: { "hp": 65, "atk": 65, "def": 65, "spd": 90, "spc": 50 },
				types: [ 21 ],
		}, // <NULL>ゥWPkMn)
		216: { growth_rate: 0x80,
				base_stats: { "hp": 232, "atk": 147, "def": 145, "spd": 128, "spc": 136 },
				types: [ 141, 132 ],
		}, // PkMnaPkMnゥ♂fPkMnk
		217: { growth_rate: 0x1d,
				base_stats: { "hp": 179, "atk": 96, "def": 209, "spd": 96, "spc": 21 },
				types: [ 97, 39 ],
		}, // PkMnRPkMn𝐁?
		218: { growth_rate: 0x00,
				base_stats: { "hp": 35, "atk": 45, "def": 160, "spd": 70, "spc": 30 },
				types: [ 5, 4 ],
		}, // 𝐁𝐂𝐆
		219: { growth_rate: 0x80,
				base_stats: { "hp": 232, "atk": 147, "def": 145, "spd": 128, "spc": 136 },
				types: [ 141, 132 ],
		}, // 𝐂Y𝐂c
		220: { growth_rate: 0x03,
				base_stats: { "hp": 63, "atk": 60, "def": 55, "spd": 71, "spc": 50 },
				types: [ 0, 2 ],
		}, // 𝐂yPkMn2PkMn
		221: { growth_rate: 0x05,
				base_stats: { "hp": 80, "atk": 70, "def": 65, "spd": 100, "spc": 120 },
				types: [ 21, 3 ],
		}, // 7PkMn'v
		222: { growth_rate: 0x00,
				base_stats: { "hp": 25, "atk": 35, "def": 70, "spd": 45, "spc": 95 },
				types: [ 23 ],
		}, // -PkMn<PAGE>
		223: { growth_rate: 0x37,
				base_stats: { "hp": 37, "atk": 0, "def": 40, "spd": 178, "spc": 19 },
				types: [ 11, 0 ],
		}, // .PkMn
		224: { growth_rate: 0x00,
				base_stats: { "hp": 60, "atk": 110, "def": 70, "spd": 100, "spc": 60 },
				types: [ 0, 2 ],
		}, // /PkMn▼PkMn
		225: { growth_rate: 0x88,
				base_stats: { "hp": 80, "atk": 143, "def": 145, "spd": 142, "spc": 133 },
				types: [ 232, 142 ],
		}, // <PAGE>'v\n
		226: { growth_rate: 0xa5,
				base_stats: { "hp": 21, "atk": 33, "def": 176, "spd": 0, "spc": 19 },
				types: [ 165, 59 ],
		}, // ……<PLAYER>……
		227: { growth_rate: 0x64,
				base_stats: { "hp": 19, "atk": 114, "def": 114, "spd": 0, "spc": 20 },
				types: [ 123, 112 ],
		}, // │……]……
		228: { growth_rate: 0x57,
				base_stats: { "hp": 14, "atk": 0, "def": 12, "spd": 121, "spc": 254 },
				types: [ 7, 200 ],
		}, // 
		229: { growth_rate: 0xa5,
				base_stats: { "hp": 21, "atk": 33, "def": 176, "spd": 0, "spc": 19 },
				types: [ 165, 59 ],
		}, // C\n<NULL>POKé4\n
		230: { growth_rate: 0x64,
				base_stats: { "hp": 19, "atk": 114, "def": 114, "spd": 0, "spc": 20 },
				types: [ 123, 112 ],
		}, // ぇぁゥ
		231: { growth_rate: 0x4b,
				base_stats: { "hp": 30, "atk": 182, "def": 32, "spd": 2, "spc": 54 },
				types: [ 1, 43 ],
		}, // pゥ\n4<ED>
		232: { growth_rate: 0xa5,
				base_stats: { "hp": 21, "atk": 33, "def": 176, "spd": 0, "spc": 19 },
				types: [ 165, 59 ],
		}, // X\n\nぃ\nC\n
		233: { growth_rate: 0x57,
				base_stats: { "hp": 14, "atk": 0, "def": 12, "spd": 121, "spc": 254 },
				types: [ 7, 200 ],
		}, // c\n\n7\n\n\n“\n\n
		234: { growth_rate: 0x1d,
				base_stats: { "hp": 179, "atk": 96, "def": 209, "spd": 96, "spc": 21 },
				types: [ 97, 39 ],
		}, // A\n\n<NULL>﹕z\n
		235: { growth_rate: 0x00,
				base_stats: { "hp": 60, "atk": 110, "def": 70, "spd": 100, "spc": 60 },
				types: [ 0, 2 ],
		}, // \n﹕\nq\n\n\n
		236: { growth_rate: 0x88,
				base_stats: { "hp": 80, "atk": 143, "def": 145, "spd": 142, "spc": 133 },
				types: [ 232, 142 ],
		}, // 4\n 4
		237: { growth_rate: 0xd1,
				base_stats: { "hp": 33, "atk": 129, "def": 218, "spd": 24, "spc": 3 },
				types: [ 33, 157 ],
		}, // hゥ
		238: { growth_rate: 0x57,
				base_stats: { "hp": 14, "atk": 0, "def": 12, "spd": 121, "spc": 254 },
				types: [ 7, 200 ],
		}, // ﹕g
		239: { growth_rate: 0xd1,
				base_stats: { "hp": 33, "atk": 129, "def": 218, "spd": 24, "spc": 3 },
				types: [ 33, 157 ],
		}, // ゥ<ED>'M┘
		240: { growth_rate: 0x4b,
				base_stats: { "hp": 30, "atk": 182, "def": 32, "spd": 2, "spc": 54 },
				types: [ 1, 43 ],
		}, // \nゥ<ED>
		241: { growth_rate: 0x81,
				base_stats: { "hp": 142, "atk": 142, "def": 139, "spd": 147, "spc": 145 },
				types: [ 128, 136 ],
		}, // 94
		242: { growth_rate: 0x8b,
				base_stats: { "hp": 146, "atk": 152, "def": 130, "spd": 135, "spc": 136 },
				types: [ 130, 80 ],
		}, // ゥ﹕
		243: { growth_rate: 0x00,
				base_stats: { "hp": 60, "atk": 90, "def": 55, "spd": 100, "spc": 90 },
				types: [ 23 ],
		}, // ゥ﹕
		244: { growth_rate: 0x37,
				base_stats: { "hp": 34, "atk": 0, "def": 19, "spd": 169, "spc": 106 },
				types: [ 169 ],
		}, // ゥ<ED>
		245: { growth_rate: 0x0d,
				base_stats: { "hp": 55, "atk": 143, "def": 55, "spd": 13, "spc": 0 },
				types: [ 28, 55 ],
		}, // \nゥ
		246: { growth_rate: 0x04,
				base_stats: { "hp": 140, "atk": 70, "def": 45, "spd": 45, "spc": 50 },
				types: [ 0 ],
		}, // G'Mp
		247: { growth_rate: 0x03,
				base_stats: { "hp": 83, "atk": 80, "def": 75, "spd": 91, "spc": 70 },
				types: [ 0, 2 ],
		}, // 'Ng'Mp
		248: { growth_rate: 0x00,
				base_stats: { "hp": 30, "atk": 56, "def": 35, "spd": 72, "spc": 25 },
				types: [ 0 ],
		}, // 'Ngゥ<ED>
		249: { growth_rate: 0x81,
				base_stats: { "hp": 142, "atk": 142, "def": 139, "spd": 147, "spc": 145 },
				types: [ 128, 136 ],
		}, // 94h
		250: { growth_rate: 0x03,
				base_stats: { "hp": 61, "atk": 72, "def": 57, "spd": 65, "spc": 55 },
				types: [ 3 ],
		}, // \n
		251: { growth_rate: 0x00,
				base_stats: { "hp": 35, "atk": 45, "def": 160, "spd": 70, "spc": 30 },
				types: [ 5, 4 ],
		}, // 'M'Ng
		252: { growth_rate: 0x00,
				base_stats: { "hp": 25, "atk": 35, "def": 70, "spd": 45, "spc": 95 },
				types: [ 23 ],
		}, // O
		253: { growth_rate: 0x00,
				base_stats: { "hp": 65, "atk": 65, "def": 60, "spd": 130, "spc": 110 },
				types: [ 23 ],
		}, // ゥ<ED>6ゥ
		254: { growth_rate: 0x00,
				base_stats: { "hp": 90, "atk": 65, "def": 65, "spd": 15, "spc": 40 },
				types: [ 21, 24 ],
		}, // 𝐋'M
		255: { growth_rate: 0x03,
				base_stats: { "hp": 78, "atk": 84, "def": 78, "spd": 100, "spc": 85 },
				types: [ 20, 2 ],
		}, // 'M
	};

	private static keyValuePairs = Object.entries(this.statsLookupKV);
	public static statsLookup = new Map(this.keyValuePairs);
};

export default PokemonStatsLookup;
