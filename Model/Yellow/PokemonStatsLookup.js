function PokemonStatsLookup() {
  // Constructor body
}

var stats_lookup = {
	"": { growth_rate: "",
			base_stats: { "hp": 0, "atk": 0, "def": 0, "spd": 0, "spc": 0 },
			types: [ 0, 0 ],
	},
	"-5": { growth_rate: 0x06,
			base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
			types: [ 0, 37 ],
	}, //Ghost
	"-4": { growth_rate: 0x06,
			base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
			types: [ 0, 37 ],
	}, //Aerodactyl Fossil
	"-3": { growth_rate: 0x06,
			base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
			types: [ 0, 37 ],
	}, //Kabutops Fossil
	"-2": { growth_rate: 0x06,
			base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
			types: [ 0, 37 ],
	}, //MissingNo
	"-1": { growth_rate: 0x05,
			base_stats: { "hp": 60, "atk": 75, "def": 85, "spd": 115, "spc": 100 },
			types: [ 21, 24 ],
	}, //Q
	0: { growth_rate: 0x22,
			base_stats: { "hp": 33, "atk": 233, "def": 206, "spd": 17, "spc": 236 },
			types: [ 207, 14 ],
	}, //3TRAINERPOKé₽
	1: { growth_rate: 0x03,
			base_stats: { "hp": 45, "atk": 49, "def": 49, "spd": 45, "spc": 65 },
			types: [ 22, 3 ],
	}, //BULBASAUR
	2: { growth_rate: 0x03,
			base_stats: { "hp": 60, "atk": 62, "def": 63, "spd": 60, "spc": 80 },
			types: [ 22, 3 ],
	}, //IVYSAUR
	3: { growth_rate: 0x03,
			base_stats: { "hp": 80, "atk": 82, "def": 83, "spd": 80, "spc": 100 },
			types: [ 22, 3 ],
	}, //VENUSAUR
	4: { growth_rate: 0x03,
			base_stats: { "hp": 39, "atk": 52, "def": 43, "spd": 65, "spc": 50 },
			types: [ 20 ],
	}, //CHARMANDER
	5: { growth_rate: 0x03,
			base_stats: { "hp": 58, "atk": 64, "def": 58, "spd": 80, "spc": 65 },
			types: [ 20 ],
	}, //CHARMELEON
	6: { growth_rate: 0x03,
			base_stats: { "hp": 78, "atk": 84, "def": 78, "spd": 100, "spc": 85 },
			types: [ 20, 2 ],
	}, //CHARIZARD
	7: { growth_rate: 0x03,
			base_stats: { "hp": 44, "atk": 48, "def": 65, "spd": 43, "spc": 50 },
			types: [ 21 ],
	}, //SQUIRTLE
	8: { growth_rate: 0x03,
			base_stats: { "hp": 59, "atk": 63, "def": 80, "spd": 58, "spc": 65 },
			types: [ 21 ],
	}, //WARTORTLE
	9: { growth_rate: 0x03,
			base_stats: { "hp": 79, "atk": 83, "def": 100, "spd": 78, "spc": 85 },
			types: [ 21 ],
	}, //BLASTOISE
	10: { growth_rate: 0x00,
			base_stats: { "hp": 45, "atk": 30, "def": 35, "spd": 45, "spc": 20 },
			types: [ 7 ],
	}, //CATERPIE
	11: { growth_rate: 0x00,
			base_stats: { "hp": 50, "atk": 20, "def": 55, "spd": 30, "spc": 25 },
			types: [ 7 ],
	}, //METAPOD
	12: { growth_rate: 0x00,
			base_stats: { "hp": 60, "atk": 45, "def": 50, "spd": 70, "spc": 80 },
			types: [ 7, 2 ],
	}, //BUTTERFREE
	13: { growth_rate: 0x00,
			base_stats: { "hp": 40, "atk": 35, "def": 30, "spd": 50, "spc": 20 },
			types: [ 7, 3 ],
	}, //WEEDLE
	14: { growth_rate: 0x00,
			base_stats: { "hp": 45, "atk": 25, "def": 50, "spd": 35, "spc": 25 },
			types: [ 7, 3 ],
	}, //KAKUNA
	15: { growth_rate: 0x00,
			base_stats: { "hp": 65, "atk": 80, "def": 40, "spd": 75, "spc": 45 },
			types: [ 7, 3 ],
	}, //BEEDRILL
	16: { growth_rate: 0x03,
			base_stats: { "hp": 40, "atk": 45, "def": 40, "spd": 56, "spc": 35 },
			types: [ 0, 2 ],
	}, //PIDGEY
	17: { growth_rate: 0x03,
			base_stats: { "hp": 63, "atk": 60, "def": 55, "spd": 71, "spc": 50 },
			types: [ 0, 2 ],
	}, //PIDGEOTTO
	18: { growth_rate: 0x03,
			base_stats: { "hp": 83, "atk": 80, "def": 75, "spd": 91, "spc": 70 },
			types: [ 0, 2 ],
	}, //PIDGEOT
	19: { growth_rate: 0x00,
			base_stats: { "hp": 30, "atk": 56, "def": 35, "spd": 72, "spc": 25 },
			types: [ 0 ],
	}, //RATTATA
	20: { growth_rate: 0x00,
			base_stats: { "hp": 55, "atk": 81, "def": 60, "spd": 97, "spc": 50 },
			types: [ 0 ],
	}, //RATICATE
	21: { growth_rate: 0x00,
			base_stats: { "hp": 40, "atk": 60, "def": 30, "spd": 70, "spc": 31 },
			types: [ 0, 2 ],
	}, //SPEAROW
	22: { growth_rate: 0x00,
			base_stats: { "hp": 65, "atk": 90, "def": 65, "spd": 100, "spc": 61 },
			types: [ 0, 2 ],
	}, //FEAROW
	23: { growth_rate: 0x00,
			base_stats: { "hp": 35, "atk": 60, "def": 44, "spd": 55, "spc": 40 },
			types: [ 3 ],
	}, //EKANS
	24: { growth_rate: 0x00,
			base_stats: { "hp": 60, "atk": 85, "def": 69, "spd": 80, "spc": 65 },
			types: [ 3 ],
	}, //ARBOK
	25: { growth_rate: 0x00,
			base_stats: { "hp": 35, "atk": 55, "def": 30, "spd": 90, "spc": 50 },
			types: [ 23 ],
	}, //PIKACHU
	26: { growth_rate: 0x00,
			base_stats: { "hp": 60, "atk": 90, "def": 55, "spd": 100, "spc": 90 },
			types: [ 23 ],
	}, //RAICHU
	27: { growth_rate: 0x00,
			base_stats: { "hp": 50, "atk": 75, "def": 85, "spd": 40, "spc": 30 },
			types: [ 4 ],
	}, //SANDSHREW
	28: { growth_rate: 0x00,
			base_stats: { "hp": 75, "atk": 100, "def": 110, "spd": 65, "spc": 55 },
			types: [ 4 ],
	}, //SANDSLASH
	29: { growth_rate: 0x03,
			base_stats: { "hp": 55, "atk": 47, "def": 52, "spd": 41, "spc": 40 },
			types: [ 3 ],
	}, //NIDORAN\u2640
	30: { growth_rate: 0x03,
			base_stats: { "hp": 70, "atk": 62, "def": 67, "spd": 56, "spc": 55 },
			types: [ 3 ],
	}, //NIDORINA
	31: { growth_rate: 0x03,
			base_stats: { "hp": 90, "atk": 82, "def": 87, "spd": 76, "spc": 75 },
			types: [ 3, 4 ],
	}, //NIDOQUEEN
	32: { growth_rate: 0x03,
			base_stats: { "hp": 46, "atk": 57, "def": 40, "spd": 50, "spc": 40 },
			types: [ 3 ],
	}, //NIDORAN\u2642
	33: { growth_rate: 0x03,
			base_stats: { "hp": 61, "atk": 72, "def": 57, "spd": 65, "spc": 55 },
			types: [ 3 ],
	}, //NIDORINO
	34: { growth_rate: 0x03,
			base_stats: { "hp": 81, "atk": 92, "def": 77, "spd": 85, "spc": 75 },
			types: [ 3, 4 ],
	}, //NIDOKING
	35: { growth_rate: 0x04,
			base_stats: { "hp": 70, "atk": 45, "def": 48, "spd": 35, "spc": 60 },
			types: [ 0 ],
	}, //CLEFAIRY
	36: { growth_rate: 0x04,
			base_stats: { "hp": 95, "atk": 70, "def": 73, "spd": 60, "spc": 85 },
			types: [ 0 ],
	}, //CLEFABLE
	37: { growth_rate: 0x00,
			base_stats: { "hp": 38, "atk": 41, "def": 40, "spd": 65, "spc": 65 },
			types: [ 20 ],
	}, //VULPIX
	38: { growth_rate: 0x00,
			base_stats: { "hp": 73, "atk": 76, "def": 75, "spd": 100, "spc": 100 },
			types: [ 20 ],
	}, //NINETALES
	39: { growth_rate: 0x04,
			base_stats: { "hp": 115, "atk": 45, "def": 20, "spd": 20, "spc": 25 },
			types: [ 0 ],
	}, //JIGGLYPUFF
	40: { growth_rate: 0x04,
			base_stats: { "hp": 140, "atk": 70, "def": 45, "spd": 45, "spc": 50 },
			types: [ 0 ],
	}, //WIGGLYTUFF
	41: { growth_rate: 0x00,
			base_stats: { "hp": 40, "atk": 45, "def": 35, "spd": 55, "spc": 40 },
			types: [ 3, 2 ],
	}, //ZUBAT
	42: { growth_rate: 0x00,
			base_stats: { "hp": 75, "atk": 80, "def": 70, "spd": 90, "spc": 75 },
			types: [ 3, 2 ],
	}, //GOLBAT
	43: { growth_rate: 0x03,
			base_stats: { "hp": 45, "atk": 50, "def": 55, "spd": 30, "spc": 75 },
			types: [ 22, 3 ],
	}, //ODDISH
	44: { growth_rate: 0x03,
			base_stats: { "hp": 60, "atk": 65, "def": 70, "spd": 40, "spc": 85 },
			types: [ 22, 3 ],
	}, //GLOOM
	45: { growth_rate: 0x03,
			base_stats: { "hp": 75, "atk": 80, "def": 85, "spd": 50, "spc": 100 },
			types: [ 22, 3 ],
	}, //VILEPLUME
	46: { growth_rate: 0x00,
			base_stats: { "hp": 35, "atk": 70, "def": 55, "spd": 25, "spc": 55 },
			types: [ 7, 22 ],
	}, //PARAS
	47: { growth_rate: 0x00,
			base_stats: { "hp": 60, "atk": 95, "def": 80, "spd": 30, "spc": 80 },
			types: [ 7, 22 ],
	}, //PARASECT
	48: { growth_rate: 0x00,
			base_stats: { "hp": 60, "atk": 55, "def": 50, "spd": 45, "spc": 40 },
			types: [ 7, 3 ],
	}, //VENONAT
	49: { growth_rate: 0x00,
			base_stats: { "hp": 70, "atk": 65, "def": 60, "spd": 90, "spc": 90 },
			types: [ 7, 3 ],
	}, //VENOMOTH
	50: { growth_rate: 0x00,
			base_stats: { "hp": 10, "atk": 55, "def": 25, "spd": 95, "spc": 45 },
			types: [ 4 ],
	}, //DIGLETT
	51: { growth_rate: 0x00,
			base_stats: { "hp": 35, "atk": 80, "def": 50, "spd": 120, "spc": 70 },
			types: [ 4 ],
	}, //DUGTRIO
	52: { growth_rate: 0x00,
			base_stats: { "hp": 40, "atk": 45, "def": 35, "spd": 90, "spc": 40 },
			types: [ 0 ],
	}, //MEOWTH
	53: { growth_rate: 0x00,
			base_stats: { "hp": 65, "atk": 70, "def": 60, "spd": 115, "spc": 65 },
			types: [ 0 ],
	}, //PERSIAN
	54: { growth_rate: 0x00,
			base_stats: { "hp": 50, "atk": 52, "def": 48, "spd": 55, "spc": 50 },
			types: [ 21 ],
	}, //PSYDUCK
	55: { growth_rate: 0x00,
			base_stats: { "hp": 80, "atk": 82, "def": 78, "spd": 85, "spc": 80 },
			types: [ 21 ],
	}, //GOLDUCK
	56: { growth_rate: 0x00,
			base_stats: { "hp": 40, "atk": 80, "def": 35, "spd": 70, "spc": 35 },
			types: [ 1 ],
	}, //MANKEY
	57: { growth_rate: 0x00,
			base_stats: { "hp": 65, "atk": 105, "def": 60, "spd": 95, "spc": 60 },
			types: [ 1 ],
	}, //PRIMEAPE
	58: { growth_rate: 0x05,
			base_stats: { "hp": 55, "atk": 70, "def": 45, "spd": 60, "spc": 50 },
			types: [ 20 ],
	}, //GROWLITHE
	59: { growth_rate: 0x05,
			base_stats: { "hp": 90, "atk": 110, "def": 80, "spd": 95, "spc": 80 },
			types: [ 20 ],
	}, //ARCANINE
	60: { growth_rate: 0x03,
			base_stats: { "hp": 40, "atk": 50, "def": 40, "spd": 90, "spc": 40 },
			types: [ 21 ],
	}, //POLIWAG
	61: { growth_rate: 0x03,
			base_stats: { "hp": 65, "atk": 65, "def": 65, "spd": 90, "spc": 50 },
			types: [ 21 ],
	}, //POLIWHIRL
	62: { growth_rate: 0x03,
			base_stats: { "hp": 90, "atk": 85, "def": 95, "spd": 70, "spc": 70 },
			types: [ 21, 1 ],
	}, //POLIWRATH
	63: { growth_rate: 0x03,
			base_stats: { "hp": 25, "atk": 20, "def": 15, "spd": 90, "spc": 105 },
			types: [ 24 ],
	}, //ABRA
	64: { growth_rate: 0x03,
			base_stats: { "hp": 40, "atk": 35, "def": 30, "spd": 105, "spc": 120 },
			types: [ 24 ],
	}, //KADABRA
	65: { growth_rate: 0x03,
			base_stats: { "hp": 55, "atk": 50, "def": 45, "spd": 120, "spc": 135 },
			types: [ 24 ],
	}, //ALAKAZAM
	66: { growth_rate: 0x03,
			base_stats: { "hp": 70, "atk": 80, "def": 50, "spd": 35, "spc": 35 },
			types: [ 1 ],
	}, //MACHOP
	67: { growth_rate: 0x03,
			base_stats: { "hp": 80, "atk": 100, "def": 70, "spd": 45, "spc": 50 },
			types: [ 1 ],
	}, //MACHOKE
	68: { growth_rate: 0x03,
			base_stats: { "hp": 90, "atk": 130, "def": 80, "spd": 55, "spc": 65 },
			types: [ 1 ],
	}, //MACHAMP
	69: { growth_rate: 0x03,
			base_stats: { "hp": 50, "atk": 75, "def": 35, "spd": 40, "spc": 70 },
			types: [ 22, 3 ],
	}, //BELLSPROUT
	70: { growth_rate: 0x03,
			base_stats: { "hp": 65, "atk": 90, "def": 50, "spd": 55, "spc": 85 },
			types: [ 22, 3 ],
	}, //WEEPINBELL
	71: { growth_rate: 0x03,
			base_stats: { "hp": 80, "atk": 105, "def": 65, "spd": 70, "spc": 100 },
			types: [ 22, 3 ],
	}, //VICTREEBEL
	72: { growth_rate: 0x05,
			base_stats: { "hp": 40, "atk": 40, "def": 35, "spd": 70, "spc": 100 },
			types: [ 21, 3 ],
	}, //TENTACOOL
	73: { growth_rate: 0x05,
			base_stats: { "hp": 80, "atk": 70, "def": 65, "spd": 100, "spc": 120 },
			types: [ 21, 3 ],
	}, //TENTACRUEL
	74: { growth_rate: 0x03,
			base_stats: { "hp": 40, "atk": 80, "def": 100, "spd": 20, "spc": 30 },
			types: [ 5, 4 ],
	}, //GEODUDE
	75: { growth_rate: 0x03,
			base_stats: { "hp": 55, "atk": 95, "def": 115, "spd": 35, "spc": 45 },
			types: [ 5, 4 ],
	}, //GRAVELER
	76: { growth_rate: 0x03,
			base_stats: { "hp": 80, "atk": 110, "def": 130, "spd": 45, "spc": 55 },
			types: [ 5, 4 ],
	}, //GOLEM
	77: { growth_rate: 0x00,
			base_stats: { "hp": 50, "atk": 85, "def": 55, "spd": 90, "spc": 65 },
			types: [ 20 ],
	}, //PONYTA
	78: { growth_rate: 0x00,
			base_stats: { "hp": 65, "atk": 100, "def": 70, "spd": 105, "spc": 80 },
			types: [ 20 ],
	}, //RAPIDASH
	79: { growth_rate: 0x00,
			base_stats: { "hp": 90, "atk": 65, "def": 65, "spd": 15, "spc": 40 },
			types: [ 21, 24 ],
	}, //SLOWPOKE
	80: { growth_rate: 0x00,
			base_stats: { "hp": 95, "atk": 75, "def": 110, "spd": 30, "spc": 80 },
			types: [ 21, 24 ],
	}, //SLOWBRO
	81: { growth_rate: 0x00,
			base_stats: { "hp": 25, "atk": 35, "def": 70, "spd": 45, "spc": 95 },
			types: [ 23 ],
	}, //MAGNEMITE
	82: { growth_rate: 0x00,
			base_stats: { "hp": 50, "atk": 60, "def": 95, "spd": 70, "spc": 120 },
			types: [ 23 ],
	}, //MAGNETON
	83: { growth_rate: 0x00,
			base_stats: { "hp": 52, "atk": 65, "def": 55, "spd": 60, "spc": 58 },
			types: [ 0, 2 ],
	}, //FARFETCH'D
	84: { growth_rate: 0x00,
			base_stats: { "hp": 35, "atk": 85, "def": 45, "spd": 75, "spc": 35 },
			types: [ 0, 2 ],
	}, //DODUO
	85: { growth_rate: 0x00,
			base_stats: { "hp": 60, "atk": 110, "def": 70, "spd": 100, "spc": 60 },
			types: [ 0, 2 ],
	}, //DODRIO
	86: { growth_rate: 0x00,
			base_stats: { "hp": 65, "atk": 45, "def": 55, "spd": 45, "spc": 70 },
			types: [ 21 ],
	}, //SEEL
	87: { growth_rate: 0x00,
			base_stats: { "hp": 90, "atk": 70, "def": 80, "spd": 70, "spc": 95 },
			types: [ 21, 25 ],
	}, //DEWGONG
	88: { growth_rate: 0x00,
			base_stats: { "hp": 80, "atk": 80, "def": 50, "spd": 25, "spc": 40 },
			types: [ 3 ],
	}, //GRIMER
	89: { growth_rate: 0x00,
			base_stats: { "hp": 105, "atk": 105, "def": 75, "spd": 50, "spc": 65 },
			types: [ 3 ],
	}, //MUK
	90: { growth_rate: 0x05,
			base_stats: { "hp": 30, "atk": 65, "def": 100, "spd": 40, "spc": 45 },
			types: [ 21 ],
	}, //SHELLDER
	91: { growth_rate: 0x05,
			base_stats: { "hp": 50, "atk": 95, "def": 180, "spd": 70, "spc": 85 },
			types: [ 21, 25 ],
	}, //CLOYSTER
	92: { growth_rate: 0x03,
			base_stats: { "hp": 30, "atk": 35, "def": 30, "spd": 80, "spc": 100 },
			types: [ 8, 3 ],
	}, //GASTLY
	93: { growth_rate: 0x03,
			base_stats: { "hp": 45, "atk": 50, "def": 45, "spd": 95, "spc": 115 },
			types: [ 8, 3 ],
	}, //HAUNTER
	94: { growth_rate: 0x03,
			base_stats: { "hp": 60, "atk": 65, "def": 60, "spd": 110, "spc": 130 },
			types: [ 8, 3 ],
	}, //GENGAR
	95: { growth_rate: 0x00,
			base_stats: { "hp": 35, "atk": 45, "def": 160, "spd": 70, "spc": 30 },
			types: [ 5, 4 ],
	}, //ONIX
	96: { growth_rate: 0x00,
			base_stats: { "hp": 60, "atk": 48, "def": 45, "spd": 42, "spc": 90 },
			types: [ 24 ],
	}, //DROWZEE
	97: { growth_rate: 0x00,
			base_stats: { "hp": 85, "atk": 73, "def": 70, "spd": 67, "spc": 115 },
			types: [ 24 ],
	}, //HYPNO
	98: { growth_rate: 0x00,
			base_stats: { "hp": 30, "atk": 105, "def": 90, "spd": 50, "spc": 25 },
			types: [ 21 ],
	}, //KRABBY
	99: { growth_rate: 0x00,
			base_stats: { "hp": 55, "atk": 130, "def": 115, "spd": 75, "spc": 50 },
			types: [ 21 ],
	}, //KINGLER
	100: { growth_rate: 0x00,
			base_stats: { "hp": 40, "atk": 30, "def": 50, "spd": 100, "spc": 55 },
			types: [ 23 ],
	}, //VOLTORB
	101: { growth_rate: 0x00,
			base_stats: { "hp": 60, "atk": 50, "def": 70, "spd": 140, "spc": 80 },
			types: [ 23 ],
	}, //ELECTRODE
	102: { growth_rate: 0x05,
			base_stats: { "hp": 60, "atk": 40, "def": 80, "spd": 40, "spc": 60 },
			types: [ 22, 24 ],
	}, //EXEGGCUTE
	103: { growth_rate: 0x05,
			base_stats: { "hp": 95, "atk": 95, "def": 85, "spd": 55, "spc": 125 },
			types: [ 22, 24 ],
	}, //EXEGGUTOR
	104: { growth_rate: 0x00,
			base_stats: { "hp": 50, "atk": 50, "def": 95, "spd": 35, "spc": 40 },
			types: [ 4 ],
	}, //CUBONE
	105: { growth_rate: 0x00,
			base_stats: { "hp": 60, "atk": 80, "def": 110, "spd": 45, "spc": 50 },
			types: [ 4 ],
	}, //MAROWAK
	106: { growth_rate: 0x00,
			base_stats: { "hp": 50, "atk": 120, "def": 53, "spd": 87, "spc": 35 },
			types: [ 1 ],
	}, //HITMONLEE
	107: { growth_rate: 0x00,
			base_stats: { "hp": 50, "atk": 105, "def": 79, "spd": 76, "spc": 35 },
			types: [ 1 ],
	}, //HITMONCHAN
	108: { growth_rate: 0x00,
			base_stats: { "hp": 90, "atk": 55, "def": 75, "spd": 30, "spc": 60 },
			types: [ 0 ],
	}, //LICKITUNG
	109: { growth_rate: 0x00,
			base_stats: { "hp": 40, "atk": 65, "def": 95, "spd": 35, "spc": 60 },
			types: [ 3 ],
	}, //KOFFING
	110: { growth_rate: 0x00,
			base_stats: { "hp": 65, "atk": 90, "def": 120, "spd": 60, "spc": 85 },
			types: [ 3 ],
	}, //WEEZING
	111: { growth_rate: 0x05,
			base_stats: { "hp": 80, "atk": 85, "def": 95, "spd": 25, "spc": 30 },
			types: [ 4, 5 ],
	}, //RHYHORN
	112: { growth_rate: 0x05,
			base_stats: { "hp": 105, "atk": 130, "def": 120, "spd": 40, "spc": 45 },
			types: [ 4, 5 ],
	}, //RHYDON
	113: { growth_rate: 0x04,
			base_stats: { "hp": 250, "atk": 5, "def": 5, "spd": 50, "spc": 105 },
			types: [ 0 ],
	}, //CHANSEY
	114: { growth_rate: 0x00,
			base_stats: { "hp": 65, "atk": 55, "def": 115, "spd": 60, "spc": 100 },
			types: [ 22 ],
	}, //TANGELA
	115: { growth_rate: 0x00,
			base_stats: { "hp": 105, "atk": 95, "def": 80, "spd": 90, "spc": 40 },
			types: [ 0 ],
	}, //KANGASKHAN
	116: { growth_rate: 0x00,
			base_stats: { "hp": 30, "atk": 40, "def": 70, "spd": 60, "spc": 70 },
			types: [ 21 ],
	}, //HORSEA
	117: { growth_rate: 0x00,
			base_stats: { "hp": 55, "atk": 65, "def": 95, "spd": 85, "spc": 95 },
			types: [ 21 ],
	}, //SEADRA
	118: { growth_rate: 0x00,
			base_stats: { "hp": 45, "atk": 67, "def": 60, "spd": 63, "spc": 50 },
			types: [ 21 ],
	}, //GOLDEEN
	119: { growth_rate: 0x00,
			base_stats: { "hp": 80, "atk": 92, "def": 65, "spd": 68, "spc": 80 },
			types: [ 21 ],
	}, //SEAKING
	120: { growth_rate: 0x05,
			base_stats: { "hp": 30, "atk": 45, "def": 55, "spd": 85, "spc": 70 },
			types: [ 21 ],
	}, //STARYU
	121: { growth_rate: 0x05,
			base_stats: { "hp": 60, "atk": 75, "def": 85, "spd": 115, "spc": 100 },
			types: [ 21, 24 ],
	}, //STARMIE
	122: { growth_rate: 0x00,
			base_stats: { "hp": 40, "atk": 45, "def": 65, "spd": 90, "spc": 100 },
			types: [ 24 ],
	}, //MR.MIME
	123: { growth_rate: 0x00,
			base_stats: { "hp": 70, "atk": 110, "def": 80, "spd": 105, "spc": 55 },
			types: [ 7, 2 ],
	}, //SCYTHER
	124: { growth_rate: 0x00,
			base_stats: { "hp": 65, "atk": 50, "def": 35, "spd": 95, "spc": 95 },
			types: [ 25, 24 ],
	}, //JYNX
	125: { growth_rate: 0x00,
			base_stats: { "hp": 65, "atk": 83, "def": 57, "spd": 105, "spc": 85 },
			types: [ 23 ],
	}, //ELECTABUZZ
	126: { growth_rate: 0x00,
			base_stats: { "hp": 65, "atk": 95, "def": 57, "spd": 93, "spc": 85 },
			types: [ 20 ],
	}, //MAGMAR
	127: { growth_rate: 0x05,
			base_stats: { "hp": 65, "atk": 125, "def": 100, "spd": 85, "spc": 55 },
			types: [ 7 ],
	}, //PINSIR
	128: { growth_rate: 0x05,
			base_stats: { "hp": 75, "atk": 100, "def": 95, "spd": 110, "spc": 70 },
			types: [ 0 ],
	}, //TAUROS
	129: { growth_rate: 0x05,
			base_stats: { "hp": 20, "atk": 10, "def": 55, "spd": 80, "spc": 20 },
			types: [ 21 ],
	}, //MAGIKARP
	130: { growth_rate: 0x05,
			base_stats: { "hp": 95, "atk": 125, "def": 79, "spd": 81, "spc": 100 },
			types: [ 21, 2 ],
	}, //GYARADOS
	131: { growth_rate: 0x05,
			base_stats: { "hp": 130, "atk": 85, "def": 80, "spd": 60, "spc": 95 },
			types: [ 21, 25 ],
	}, //LAPRAS
	132: { growth_rate: 0x00,
			base_stats: { "hp": 48, "atk": 48, "def": 48, "spd": 48, "spc": 48 },
			types: [ 0 ],
	}, //DITTO
	133: { growth_rate: 0x00,
			base_stats: { "hp": 55, "atk": 55, "def": 50, "spd": 55, "spc": 65 },
			types: [ 0 ],
	}, //EEVEE
	134: { growth_rate: 0x00,
			base_stats: { "hp": 130, "atk": 65, "def": 60, "spd": 65, "spc": 110 },
			types: [ 21 ],
	}, //VAPOREON
	135: { growth_rate: 0x00,
			base_stats: { "hp": 65, "atk": 65, "def": 60, "spd": 130, "spc": 110 },
			types: [ 23 ],
	}, //JOLTEON
	136: { growth_rate: 0x00,
			base_stats: { "hp": 65, "atk": 130, "def": 60, "spd": 65, "spc": 110 },
			types: [ 20 ],
	}, //FLAREON
	137: { growth_rate: 0x00,
			base_stats: { "hp": 65, "atk": 60, "def": 70, "spd": 40, "spc": 75 },
			types: [ 0 ],
	}, //PORYGON
	138: { growth_rate: 0x00,
			base_stats: { "hp": 35, "atk": 40, "def": 100, "spd": 35, "spc": 90 },
			types: [ 5, 21 ],
	}, //OMANYTE
	139: { growth_rate: 0x00,
			base_stats: { "hp": 70, "atk": 60, "def": 125, "spd": 55, "spc": 115 },
			types: [ 5, 21 ],
	}, //OMASTAR
	140: { growth_rate: 0x00,
			base_stats: { "hp": 30, "atk": 80, "def": 90, "spd": 55, "spc": 45 },
			types: [ 5, 21 ],
	}, //KABUTO
	141: { growth_rate: 0x00,
			base_stats: { "hp": 60, "atk": 115, "def": 105, "spd": 80, "spc": 70 },
			types: [ 5, 21 ],
	}, //KABUTOPS
	142: { growth_rate: 0x05,
			base_stats: { "hp": 80, "atk": 105, "def": 65, "spd": 130, "spc": 60 },
			types: [ 5, 2 ],
	}, //AERODACTYL
	143: { growth_rate: 0x05,
			base_stats: { "hp": 160, "atk": 110, "def": 65, "spd": 30, "spc": 65 },
			types: [ 0 ],
	}, //SNORLAX
	144: { growth_rate: 0x05,
			base_stats: { "hp": 90, "atk": 85, "def": 100, "spd": 85, "spc": 125 },
			types: [ 25, 2 ],
	}, //ARTICUNO
	145: { growth_rate: 0x05,
			base_stats: { "hp": 90, "atk": 90, "def": 85, "spd": 100, "spc": 125 },
			types: [ 23, 2 ],
	}, //ZAPDOS
	146: { growth_rate: 0x05,
			base_stats: { "hp": 90, "atk": 100, "def": 90, "spd": 90, "spc": 125 },
			types: [ 20, 2 ],
	}, //MOLTRES
	147: { growth_rate: 0x05,
			base_stats: { "hp": 41, "atk": 64, "def": 45, "spd": 50, "spc": 50 },
			types: [ 26 ],
	}, //DRATINI
	148: { growth_rate: 0x05,
			base_stats: { "hp": 61, "atk": 84, "def": 65, "spd": 70, "spc": 70 },
			types: [ 26 ],
	}, //DRAGONAIR
	149: { growth_rate: 0x05,
			base_stats: { "hp": 91, "atk": 134, "def": 95, "spd": 80, "spc": 100 },
			types: [ 26, 2 ],
	}, //DRAGONITE
	150: { growth_rate: 0x05,
			base_stats: { "hp": 106, "atk": 110, "def": 90, "spd": 130, "spc": 154 },
			types: [ 24 ],
	}, //MEWTWO
	151: { growth_rate: 0x03,
			base_stats: { "hp": 100, "atk": 100, "def": 100, "spd": 100, "spc": 100 },
			types: [ 24 ],
	}, //MEW
};

(function () {
  // Static initialization code
  Object.keys(stats_lookup).forEach(key => {
	  var value = stats_lookup[key];
	  
	  PokemonStatsLookup[key] = value;
  });
})();
