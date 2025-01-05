export class PokemonStatsLookup {
    private static statsLookupKV = {
        "": {
            growth_rate: "",
            base_stats: { "hp": 0, "atk": 0, "def": 0, "spd": 0, "spc": 0 },
            types: [0],
        },
        0: {
            growth_rate: 0x22,
            base_stats: { "hp": 33, "atk": 233, "def": 206, "spd": 17, "spc": 236 },
            types: [207, 14],
        }, // 3TRAINERPOKé<ED>
        1: {
            growth_rate: 0x05,
            base_stats: { "hp": 105, "atk": 130, "def": 120, "spd": 40, "spc": 45 },
            types: [4, 5],
        }, // RHYDON
        2: {
            growth_rate: 0x00,
            base_stats: { "hp": 105, "atk": 95, "def": 80, "spd": 90, "spc": 40 },
            types: [0],
        }, // KANGASKHAN
        3: {
            growth_rate: 0x03,
            base_stats: { "hp": 46, "atk": 57, "def": 40, "spd": 50, "spc": 40 },
            types: [3],
        }, // NIDORAN♂
        4: {
            growth_rate: 0x04,
            base_stats: { "hp": 70, "atk": 45, "def": 48, "spd": 35, "spc": 60 },
            types: [0],
        }, // CLEFAIRY
        5: {
            growth_rate: 0x00,
            base_stats: { "hp": 40, "atk": 60, "def": 30, "spd": 70, "spc": 31 },
            types: [0, 2],
        }, // SPEAROW
        6: {
            growth_rate: 0x00,
            base_stats: { "hp": 40, "atk": 30, "def": 50, "spd": 100, "spc": 55 },
            types: [23],
        }, // VOLTORB
        7: {
            growth_rate: 0x03,
            base_stats: { "hp": 81, "atk": 92, "def": 77, "spd": 85, "spc": 75 },
            types: [3, 4],
        }, // NIDOKING
        8: {
            growth_rate: 0x00,
            base_stats: { "hp": 95, "atk": 75, "def": 110, "spd": 30, "spc": 80 },
            types: [21, 24],
        }, // SLOWBRO
        9: {
            growth_rate: 0x03,
            base_stats: { "hp": 60, "atk": 62, "def": 63, "spd": 60, "spc": 80 },
            types: [22, 3],
        }, // IVYSAUR
        10: {
            growth_rate: 0x05,
            base_stats: { "hp": 95, "atk": 95, "def": 85, "spd": 55, "spc": 125 },
            types: [22, 24],
        }, // EXEGGUTOR
        11: {
            growth_rate: 0x00,
            base_stats: { "hp": 90, "atk": 55, "def": 75, "spd": 30, "spc": 60 },
            types: [0],
        }, // LICKITUNG
        12: {
            growth_rate: 0x05,
            base_stats: { "hp": 60, "atk": 40, "def": 80, "spd": 40, "spc": 60 },
            types: [22, 24],
        }, // EXEGGCUTE
        13: {
            growth_rate: 0x00,
            base_stats: { "hp": 80, "atk": 80, "def": 50, "spd": 25, "spc": 40 },
            types: [3],
        }, // GRIMER
        14: {
            growth_rate: 0x03,
            base_stats: { "hp": 60, "atk": 65, "def": 60, "spd": 110, "spc": 130 },
            types: [8, 3],
        }, // GENGAR
        15: {
            growth_rate: 0x03,
            base_stats: { "hp": 55, "atk": 47, "def": 52, "spd": 41, "spc": 40 },
            types: [3],
        }, // NIDORAN♀
        16: {
            growth_rate: 0x03,
            base_stats: { "hp": 90, "atk": 82, "def": 87, "spd": 76, "spc": 75 },
            types: [3, 4],
        }, // NIDOQUEEN
        17: {
            growth_rate: 0x00,
            base_stats: { "hp": 50, "atk": 50, "def": 95, "spd": 35, "spc": 40 },
            types: [4],
        }, // CUBONE
        18: {
            growth_rate: 0x05,
            base_stats: { "hp": 80, "atk": 85, "def": 95, "spd": 25, "spc": 30 },
            types: [4, 5],
        }, // RHYHORN
        19: {
            growth_rate: 0x05,
            base_stats: { "hp": 130, "atk": 85, "def": 80, "spd": 60, "spc": 95 },
            types: [21, 25],
        }, // LAPRAS
        20: {
            growth_rate: 0x05,
            base_stats: { "hp": 90, "atk": 110, "def": 80, "spd": 95, "spc": 80 },
            types: [20],
        }, // ARCANINE
        21: {
            growth_rate: 0x03,
            base_stats: { "hp": 100, "atk": 100, "def": 100, "spd": 100, "spc": 100 },
            types: [24],
        }, // MEW
        22: {
            growth_rate: 0x05,
            base_stats: { "hp": 95, "atk": 125, "def": 79, "spd": 81, "spc": 100 },
            types: [21, 2],
        }, // GYARADOS
        23: {
            growth_rate: 0x05,
            base_stats: { "hp": 30, "atk": 65, "def": 100, "spd": 40, "spc": 45 },
            types: [21],
        }, // SHELLDER
        24: {
            growth_rate: 0x05,
            base_stats: { "hp": 40, "atk": 40, "def": 35, "spd": 70, "spc": 100 },
            types: [21, 3],
        }, // TENTACOOL
        25: {
            growth_rate: 0x03,
            base_stats: { "hp": 30, "atk": 35, "def": 30, "spd": 80, "spc": 100 },
            types: [8, 3],
        }, // GASTLY
        26: {
            growth_rate: 0x00,
            base_stats: { "hp": 70, "atk": 110, "def": 80, "spd": 105, "spc": 55 },
            types: [7, 2],
        }, // SCYTHER
        27: {
            growth_rate: 0x05,
            base_stats: { "hp": 30, "atk": 45, "def": 55, "spd": 85, "spc": 70 },
            types: [21],
        }, // STARYU
        28: {
            growth_rate: 0x03,
            base_stats: { "hp": 79, "atk": 83, "def": 100, "spd": 78, "spc": 85 },
            types: [21],
        }, // BLASTOISE
        29: {
            growth_rate: 0x05,
            base_stats: { "hp": 65, "atk": 125, "def": 100, "spd": 85, "spc": 55 },
            types: [7],
        }, // PINSIR
        30: {
            growth_rate: 0x00,
            base_stats: { "hp": 65, "atk": 55, "def": 115, "spd": 60, "spc": 100 },
            types: [22],
        }, // TANGELA
        31: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        32: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        33: {
            growth_rate: 0x05,
            base_stats: { "hp": 55, "atk": 70, "def": 45, "spd": 60, "spc": 50 },
            types: [20],
        }, // GROWLITHE
        34: {
            growth_rate: 0x00,
            base_stats: { "hp": 35, "atk": 45, "def": 160, "spd": 70, "spc": 30 },
            types: [5, 4],
        }, // ONIX
        35: {
            growth_rate: 0x00,
            base_stats: { "hp": 65, "atk": 90, "def": 65, "spd": 100, "spc": 61 },
            types: [0, 2],
        }, // FEAROW
        36: {
            growth_rate: 0x03,
            base_stats: { "hp": 40, "atk": 45, "def": 40, "spd": 56, "spc": 35 },
            types: [0, 2],
        }, // PIDGEY
        37: {
            growth_rate: 0x00,
            base_stats: { "hp": 90, "atk": 65, "def": 65, "spd": 15, "spc": 40 },
            types: [21, 24],
        }, // SLOWPOKE
        38: {
            growth_rate: 0x03,
            base_stats: { "hp": 40, "atk": 35, "def": 30, "spd": 105, "spc": 120 },
            types: [24],
        }, // KADABRA
        39: {
            growth_rate: 0x03,
            base_stats: { "hp": 55, "atk": 95, "def": 115, "spd": 35, "spc": 45 },
            types: [5, 4],
        }, // GRAVELER
        40: {
            growth_rate: 0x04,
            base_stats: { "hp": 250, "atk": 5, "def": 5, "spd": 50, "spc": 105 },
            types: [0],
        }, // CHANSEY
        41: {
            growth_rate: 0x03,
            base_stats: { "hp": 80, "atk": 100, "def": 70, "spd": 45, "spc": 50 },
            types: [1],
        }, // MACHOKE
        42: {
            growth_rate: 0x00,
            base_stats: { "hp": 40, "atk": 45, "def": 65, "spd": 90, "spc": 100 },
            types: [24],
        }, // MR.MIME
        43: {
            growth_rate: 0x00,
            base_stats: { "hp": 50, "atk": 120, "def": 53, "spd": 87, "spc": 35 },
            types: [1],
        }, // HITMONLEE
        44: {
            growth_rate: 0x00,
            base_stats: { "hp": 50, "atk": 105, "def": 79, "spd": 76, "spc": 35 },
            types: [1],
        }, // HITMONCHAN
        45: {
            growth_rate: 0x00,
            base_stats: { "hp": 60, "atk": 85, "def": 69, "spd": 80, "spc": 65 },
            types: [3],
        }, // ARBOK
        46: {
            growth_rate: 0x00,
            base_stats: { "hp": 60, "atk": 95, "def": 80, "spd": 30, "spc": 80 },
            types: [7, 22],
        }, // PARASECT
        47: {
            growth_rate: 0x00,
            base_stats: { "hp": 50, "atk": 52, "def": 48, "spd": 55, "spc": 50 },
            types: [21],
        }, // PSYDUCK
        48: {
            growth_rate: 0x00,
            base_stats: { "hp": 60, "atk": 48, "def": 45, "spd": 42, "spc": 90 },
            types: [24],
        }, // DROWZEE
        49: {
            growth_rate: 0x03,
            base_stats: { "hp": 80, "atk": 110, "def": 130, "spd": 45, "spc": 55 },
            types: [5, 4],
        }, // GOLEM
        50: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        51: {
            growth_rate: 0x00,
            base_stats: { "hp": 65, "atk": 95, "def": 57, "spd": 93, "spc": 85 },
            types: [20],
        }, // MAGMAR
        52: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        53: {
            growth_rate: 0x00,
            base_stats: { "hp": 65, "atk": 83, "def": 57, "spd": 105, "spc": 85 },
            types: [23],
        }, // ELECTABUZZ
        54: {
            growth_rate: 0x00,
            base_stats: { "hp": 50, "atk": 60, "def": 95, "spd": 70, "spc": 120 },
            types: [23],
        }, // MAGNETON
        55: {
            growth_rate: 0x00,
            base_stats: { "hp": 40, "atk": 65, "def": 95, "spd": 35, "spc": 60 },
            types: [3],
        }, // KOFFING
        56: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        57: {
            growth_rate: 0x00,
            base_stats: { "hp": 40, "atk": 80, "def": 35, "spd": 70, "spc": 35 },
            types: [1],
        }, // MANKEY
        58: {
            growth_rate: 0x00,
            base_stats: { "hp": 65, "atk": 45, "def": 55, "spd": 45, "spc": 70 },
            types: [21],
        }, // SEEL
        59: {
            growth_rate: 0x00,
            base_stats: { "hp": 10, "atk": 55, "def": 25, "spd": 95, "spc": 45 },
            types: [4],
        }, // DIGLETT
        60: {
            growth_rate: 0x05,
            base_stats: { "hp": 75, "atk": 100, "def": 95, "spd": 110, "spc": 70 },
            types: [0],
        }, // TAUROS
        61: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        62: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        63: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        64: {
            growth_rate: 0x00,
            base_stats: { "hp": 52, "atk": 65, "def": 55, "spd": 60, "spc": 58 },
            types: [0, 2],
        }, // FARFETCH'D
        65: {
            growth_rate: 0x00,
            base_stats: { "hp": 60, "atk": 55, "def": 50, "spd": 45, "spc": 40 },
            types: [7, 3],
        }, // VENONAT
        66: {
            growth_rate: 0x05,
            base_stats: { "hp": 91, "atk": 134, "def": 95, "spd": 80, "spc": 100 },
            types: [26, 2],
        }, // DRAGONITE
        67: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        68: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        69: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        70: {
            growth_rate: 0x00,
            base_stats: { "hp": 35, "atk": 85, "def": 45, "spd": 75, "spc": 35 },
            types: [0, 2],
        }, // DODUO
        71: {
            growth_rate: 0x03,
            base_stats: { "hp": 40, "atk": 50, "def": 40, "spd": 90, "spc": 40 },
            types: [21],
        }, // POLIWAG
        72: {
            growth_rate: 0x00,
            base_stats: { "hp": 65, "atk": 50, "def": 35, "spd": 95, "spc": 95 },
            types: [25, 24],
        }, // JYNX
        73: {
            growth_rate: 0x05,
            base_stats: { "hp": 90, "atk": 100, "def": 90, "spd": 90, "spc": 125 },
            types: [20, 2],
        }, // MOLTRES
        74: {
            growth_rate: 0x05,
            base_stats: { "hp": 90, "atk": 85, "def": 100, "spd": 85, "spc": 125 },
            types: [25, 2],
        }, // ARTICUNO
        75: {
            growth_rate: 0x05,
            base_stats: { "hp": 90, "atk": 90, "def": 85, "spd": 100, "spc": 125 },
            types: [23, 2],
        }, // ZAPDOS
        76: {
            growth_rate: 0x00,
            base_stats: { "hp": 48, "atk": 48, "def": 48, "spd": 48, "spc": 48 },
            types: [0],
        }, // DITTO
        77: {
            growth_rate: 0x00,
            base_stats: { "hp": 40, "atk": 45, "def": 35, "spd": 90, "spc": 40 },
            types: [0],
        }, // MEOWTH
        78: {
            growth_rate: 0x00,
            base_stats: { "hp": 30, "atk": 105, "def": 90, "spd": 50, "spc": 25 },
            types: [21],
        }, // KRABBY
        79: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        80: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        81: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        82: {
            growth_rate: 0x00,
            base_stats: { "hp": 38, "atk": 41, "def": 40, "spd": 65, "spc": 65 },
            types: [20],
        }, // VULPIX
        83: {
            growth_rate: 0x00,
            base_stats: { "hp": 73, "atk": 76, "def": 75, "spd": 100, "spc": 100 },
            types: [20],
        }, // NINETALES
        84: {
            growth_rate: 0x00,
            base_stats: { "hp": 35, "atk": 55, "def": 30, "spd": 90, "spc": 50 },
            types: [23],
        }, // PIKACHU
        85: {
            growth_rate: 0x00,
            base_stats: { "hp": 60, "atk": 90, "def": 55, "spd": 100, "spc": 90 },
            types: [23],
        }, // RAICHU
        86: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        87: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        88: {
            growth_rate: 0x05,
            base_stats: { "hp": 41, "atk": 64, "def": 45, "spd": 50, "spc": 50 },
            types: [26],
        }, // DRATINI
        89: {
            growth_rate: 0x05,
            base_stats: { "hp": 61, "atk": 84, "def": 65, "spd": 70, "spc": 70 },
            types: [26],
        }, // DRAGONAIR
        90: {
            growth_rate: 0x00,
            base_stats: { "hp": 30, "atk": 80, "def": 90, "spd": 55, "spc": 45 },
            types: [5, 21],
        }, // KABUTO
        91: {
            growth_rate: 0x00,
            base_stats: { "hp": 60, "atk": 115, "def": 105, "spd": 80, "spc": 70 },
            types: [5, 21],
        }, // KABUTOPS
        92: {
            growth_rate: 0x00,
            base_stats: { "hp": 30, "atk": 40, "def": 70, "spd": 60, "spc": 70 },
            types: [21],
        }, // HORSEA
        93: {
            growth_rate: 0x00,
            base_stats: { "hp": 55, "atk": 65, "def": 95, "spd": 85, "spc": 95 },
            types: [21],
        }, // SEADRA
        94: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        95: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        96: {
            growth_rate: 0x00,
            base_stats: { "hp": 50, "atk": 75, "def": 85, "spd": 40, "spc": 30 },
            types: [4],
        }, // SANDSHREW
        97: {
            growth_rate: 0x00,
            base_stats: { "hp": 75, "atk": 100, "def": 110, "spd": 65, "spc": 55 },
            types: [4],
        }, // SANDSLASH
        98: {
            growth_rate: 0x00,
            base_stats: { "hp": 35, "atk": 40, "def": 100, "spd": 35, "spc": 90 },
            types: [5, 21],
        }, // OMANYTE
        99: {
            growth_rate: 0x00,
            base_stats: { "hp": 70, "atk": 60, "def": 125, "spd": 55, "spc": 115 },
            types: [5, 21],
        }, // OMASTAR
        100: {
            growth_rate: 0x04,
            base_stats: { "hp": 115, "atk": 45, "def": 20, "spd": 20, "spc": 25 },
            types: [0],
        }, // JIGGLYPUFF
        101: {
            growth_rate: 0x04,
            base_stats: { "hp": 140, "atk": 70, "def": 45, "spd": 45, "spc": 50 },
            types: [0],
        }, // WIGGLYTUFF
        102: {
            growth_rate: 0x00,
            base_stats: { "hp": 55, "atk": 55, "def": 50, "spd": 55, "spc": 65 },
            types: [0],
        }, // EEVEE
        103: {
            growth_rate: 0x00,
            base_stats: { "hp": 65, "atk": 130, "def": 60, "spd": 65, "spc": 110 },
            types: [20],
        }, // FLAREON
        104: {
            growth_rate: 0x00,
            base_stats: { "hp": 65, "atk": 65, "def": 60, "spd": 130, "spc": 110 },
            types: [23],
        }, // JOLTEON
        105: {
            growth_rate: 0x00,
            base_stats: { "hp": 130, "atk": 65, "def": 60, "spd": 65, "spc": 110 },
            types: [21],
        }, // VAPOREON
        106: {
            growth_rate: 0x03,
            base_stats: { "hp": 70, "atk": 80, "def": 50, "spd": 35, "spc": 35 },
            types: [1],
        }, // MACHOP
        107: {
            growth_rate: 0x00,
            base_stats: { "hp": 40, "atk": 45, "def": 35, "spd": 55, "spc": 40 },
            types: [3, 2],
        }, // ZUBAT
        108: {
            growth_rate: 0x00,
            base_stats: { "hp": 35, "atk": 60, "def": 44, "spd": 55, "spc": 40 },
            types: [3],
        }, // EKANS
        109: {
            growth_rate: 0x00,
            base_stats: { "hp": 35, "atk": 70, "def": 55, "spd": 25, "spc": 55 },
            types: [7, 22],
        }, // PARAS
        110: {
            growth_rate: 0x03,
            base_stats: { "hp": 65, "atk": 65, "def": 65, "spd": 90, "spc": 50 },
            types: [21],
        }, // POLIWHIRL
        111: {
            growth_rate: 0x03,
            base_stats: { "hp": 90, "atk": 85, "def": 95, "spd": 70, "spc": 70 },
            types: [21, 1],
        }, // POLIWRATH
        112: {
            growth_rate: 0x00,
            base_stats: { "hp": 40, "atk": 35, "def": 30, "spd": 50, "spc": 20 },
            types: [7, 3],
        }, // WEEDLE
        113: {
            growth_rate: 0x00,
            base_stats: { "hp": 45, "atk": 25, "def": 50, "spd": 35, "spc": 25 },
            types: [7, 3],
        }, // KAKUNA
        114: {
            growth_rate: 0x00,
            base_stats: { "hp": 65, "atk": 80, "def": 40, "spd": 75, "spc": 45 },
            types: [7, 3],
        }, // BEEDRILL
        115: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        116: {
            growth_rate: 0x00,
            base_stats: { "hp": 60, "atk": 110, "def": 70, "spd": 100, "spc": 60 },
            types: [0, 2],
        }, // DODRIO
        117: {
            growth_rate: 0x00,
            base_stats: { "hp": 65, "atk": 105, "def": 60, "spd": 95, "spc": 60 },
            types: [1],
        }, // PRIMEAPE
        118: {
            growth_rate: 0x00,
            base_stats: { "hp": 35, "atk": 80, "def": 50, "spd": 120, "spc": 70 },
            types: [4],
        }, // DUGTRIO
        119: {
            growth_rate: 0x00,
            base_stats: { "hp": 70, "atk": 65, "def": 60, "spd": 90, "spc": 90 },
            types: [7, 3],
        }, // VENOMOTH
        120: {
            growth_rate: 0x00,
            base_stats: { "hp": 90, "atk": 70, "def": 80, "spd": 70, "spc": 95 },
            types: [21, 25],
        }, // DEWGONG
        121: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        122: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        123: {
            growth_rate: 0x00,
            base_stats: { "hp": 45, "atk": 30, "def": 35, "spd": 45, "spc": 20 },
            types: [7],
        }, // CATERPIE
        124: {
            growth_rate: 0x00,
            base_stats: { "hp": 50, "atk": 20, "def": 55, "spd": 30, "spc": 25 },
            types: [7],
        }, // METAPOD
        125: {
            growth_rate: 0x00,
            base_stats: { "hp": 60, "atk": 45, "def": 50, "spd": 70, "spc": 80 },
            types: [7, 2],
        }, // BUTTERFREE
        126: {
            growth_rate: 0x03,
            base_stats: { "hp": 90, "atk": 130, "def": 80, "spd": 55, "spc": 65 },
            types: [1],
        }, // MACHAMP
        127: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        128: {
            growth_rate: 0x00,
            base_stats: { "hp": 80, "atk": 82, "def": 78, "spd": 85, "spc": 80 },
            types: [21],
        }, // GOLDUCK
        129: {
            growth_rate: 0x00,
            base_stats: { "hp": 85, "atk": 73, "def": 70, "spd": 67, "spc": 115 },
            types: [24],
        }, // HYPNO
        130: {
            growth_rate: 0x00,
            base_stats: { "hp": 75, "atk": 80, "def": 70, "spd": 90, "spc": 75 },
            types: [3, 2],
        }, // GOLBAT
        131: {
            growth_rate: 0x05,
            base_stats: { "hp": 106, "atk": 110, "def": 90, "spd": 130, "spc": 154 },
            types: [24],
        }, // MEWTWO
        132: {
            growth_rate: 0x05,
            base_stats: { "hp": 160, "atk": 110, "def": 65, "spd": 30, "spc": 65 },
            types: [0],
        }, // SNORLAX
        133: {
            growth_rate: 0x05,
            base_stats: { "hp": 20, "atk": 10, "def": 55, "spd": 80, "spc": 20 },
            types: [21],
        }, // MAGIKARP
        134: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        135: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        136: {
            growth_rate: 0x00,
            base_stats: { "hp": 105, "atk": 105, "def": 75, "spd": 50, "spc": 65 },
            types: [3],
        }, // MUK
        137: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        138: {
            growth_rate: 0x00,
            base_stats: { "hp": 55, "atk": 130, "def": 115, "spd": 75, "spc": 50 },
            types: [21],
        }, // KINGLER
        139: {
            growth_rate: 0x05,
            base_stats: { "hp": 50, "atk": 95, "def": 180, "spd": 70, "spc": 85 },
            types: [21, 25],
        }, // CLOYSTER
        140: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        141: {
            growth_rate: 0x00,
            base_stats: { "hp": 60, "atk": 50, "def": 70, "spd": 140, "spc": 80 },
            types: [23],
        }, // ELECTRODE
        142: {
            growth_rate: 0x04,
            base_stats: { "hp": 95, "atk": 70, "def": 73, "spd": 60, "spc": 85 },
            types: [0],
        }, // CLEFABLE
        143: {
            growth_rate: 0x00,
            base_stats: { "hp": 65, "atk": 90, "def": 120, "spd": 60, "spc": 85 },
            types: [3],
        }, // WEEZING
        144: {
            growth_rate: 0x00,
            base_stats: { "hp": 65, "atk": 70, "def": 60, "spd": 115, "spc": 65 },
            types: [0],
        }, // PERSIAN
        145: {
            growth_rate: 0x00,
            base_stats: { "hp": 60, "atk": 80, "def": 110, "spd": 45, "spc": 50 },
            types: [4],
        }, // MAROWAK
        146: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        147: {
            growth_rate: 0x03,
            base_stats: { "hp": 45, "atk": 50, "def": 45, "spd": 95, "spc": 115 },
            types: [8, 3],
        }, // HAUNTER
        148: {
            growth_rate: 0x03,
            base_stats: { "hp": 25, "atk": 20, "def": 15, "spd": 90, "spc": 105 },
            types: [24],
        }, // ABRA
        149: {
            growth_rate: 0x03,
            base_stats: { "hp": 55, "atk": 50, "def": 45, "spd": 120, "spc": 135 },
            types: [24],
        }, // ALAKAZAM
        150: {
            growth_rate: 0x03,
            base_stats: { "hp": 63, "atk": 60, "def": 55, "spd": 71, "spc": 50 },
            types: [0, 2],
        }, // PIDGEOTTO
        151: {
            growth_rate: 0x03,
            base_stats: { "hp": 83, "atk": 80, "def": 75, "spd": 91, "spc": 70 },
            types: [0, 2],
        }, // PIDGEOT
        152: {
            growth_rate: 0x05,
            base_stats: { "hp": 60, "atk": 75, "def": 85, "spd": 115, "spc": 100 },
            types: [21, 24],
        }, // STARMIE
        153: {
            growth_rate: 0x03,
            base_stats: { "hp": 45, "atk": 49, "def": 49, "spd": 45, "spc": 65 },
            types: [22, 3],
        }, // BULBASAUR
        154: {
            growth_rate: 0x03,
            base_stats: { "hp": 80, "atk": 82, "def": 83, "spd": 80, "spc": 100 },
            types: [22, 3],
        }, // VENUSAUR
        155: {
            growth_rate: 0x05,
            base_stats: { "hp": 80, "atk": 70, "def": 65, "spd": 100, "spc": 120 },
            types: [21, 3],
        }, // TENTACRUEL
        156: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        157: {
            growth_rate: 0x00,
            base_stats: { "hp": 45, "atk": 67, "def": 60, "spd": 63, "spc": 50 },
            types: [21],
        }, // GOLDEEN
        158: {
            growth_rate: 0x00,
            base_stats: { "hp": 80, "atk": 92, "def": 65, "spd": 68, "spc": 80 },
            types: [21],
        }, // SEAKING
        159: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        160: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        161: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        162: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        163: {
            growth_rate: 0x00,
            base_stats: { "hp": 50, "atk": 85, "def": 55, "spd": 90, "spc": 65 },
            types: [20],
        }, // PONYTA
        164: {
            growth_rate: 0x00,
            base_stats: { "hp": 65, "atk": 100, "def": 70, "spd": 105, "spc": 80 },
            types: [20],
        }, // RAPIDASH
        165: {
            growth_rate: 0x00,
            base_stats: { "hp": 30, "atk": 56, "def": 35, "spd": 72, "spc": 25 },
            types: [0],
        }, // RATTATA
        166: {
            growth_rate: 0x00,
            base_stats: { "hp": 55, "atk": 81, "def": 60, "spd": 97, "spc": 50 },
            types: [0],
        }, // RATICATE
        167: {
            growth_rate: 0x03,
            base_stats: { "hp": 61, "atk": 72, "def": 57, "spd": 65, "spc": 55 },
            types: [3],
        }, // NIDORINO
        168: {
            growth_rate: 0x03,
            base_stats: { "hp": 70, "atk": 62, "def": 67, "spd": 56, "spc": 55 },
            types: [3],
        }, // NIDORINA
        169: {
            growth_rate: 0x03,
            base_stats: { "hp": 40, "atk": 80, "def": 100, "spd": 20, "spc": 30 },
            types: [5, 4],
        }, // GEODUDE
        170: {
            growth_rate: 0x00,
            base_stats: { "hp": 65, "atk": 60, "def": 70, "spd": 40, "spc": 75 },
            types: [0],
        }, // PORYGON
        171: {
            growth_rate: 0x05,
            base_stats: { "hp": 80, "atk": 105, "def": 65, "spd": 130, "spc": 60 },
            types: [5, 2],
        }, // AERODACTYL
        172: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        173: {
            growth_rate: 0x00,
            base_stats: { "hp": 25, "atk": 35, "def": 70, "spd": 45, "spc": 95 },
            types: [23],
        }, // MAGNEMITE
        174: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        175: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        176: {
            growth_rate: 0x03,
            base_stats: { "hp": 39, "atk": 52, "def": 43, "spd": 65, "spc": 50 },
            types: [20],
        }, // CHARMANDER
        177: {
            growth_rate: 0x03,
            base_stats: { "hp": 44, "atk": 48, "def": 65, "spd": 43, "spc": 50 },
            types: [21],
        }, // SQUIRTLE
        178: {
            growth_rate: 0x03,
            base_stats: { "hp": 58, "atk": 64, "def": 58, "spd": 80, "spc": 65 },
            types: [20],
        }, // CHARMELEON
        179: {
            growth_rate: 0x03,
            base_stats: { "hp": 59, "atk": 63, "def": 80, "spd": 58, "spc": 65 },
            types: [21],
        }, // WARTORTLE
        180: {
            growth_rate: 0x03,
            base_stats: { "hp": 78, "atk": 84, "def": 78, "spd": 100, "spc": 85 },
            types: [20, 2],
        }, // CHARIZARD
        181: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // MISSINGNO.
        182: {
            growth_rate: "last",
            base_stats: "last",
            types: "last",
        }, // Kabutops Fossil
        183: {
            growth_rate: "last",
            base_stats: "last",
            types: "last",
        }, // Aerodactyl Fossil
        184: {
            growth_rate: "last",
            base_stats: "last",
            types: "last",
        }, // Ghost
        185: {
            growth_rate: 0x03,
            base_stats: { "hp": 45, "atk": 50, "def": 55, "spd": 30, "spc": 75 },
            types: [22, 3],
        }, // ODDISH
        186: {
            growth_rate: 0x03,
            base_stats: { "hp": 60, "atk": 65, "def": 70, "spd": 40, "spc": 85 },
            types: [22, 3],
        }, // GLOOM
        187: {
            growth_rate: 0x03,
            base_stats: { "hp": 75, "atk": 80, "def": 85, "spd": 50, "spc": 100 },
            types: [22, 3],
        }, // VILEPLUME
        188: {
            growth_rate: 0x03,
            base_stats: { "hp": 50, "atk": 75, "def": 35, "spd": 40, "spc": 70 },
            types: [22, 3],
        }, // BELLSPROUT
        189: {
            growth_rate: 0x03,
            base_stats: { "hp": 65, "atk": 90, "def": 50, "spd": 55, "spc": 85 },
            types: [22, 3],
        }, // WEEPINBELL
        190: {
            growth_rate: 0x03,
            base_stats: { "hp": 80, "atk": 105, "def": 65, "spd": 70, "spc": 100 },
            types: [22, 3],
        }, // VICTREEBEL
        191: {
            growth_rate: 0x00,
            base_stats: { "hp": 14, "atk": 165, "def": 108, "spd": 0, "spc": 18 },
            types: [57, 0],
        }, // 4𝐀4𝐇┘
        192: {
            growth_rate: 0x00,
            base_stats: { "hp": 95, "atk": 75, "def": 110, "spd": 30, "spc": 80 },
            types: [21, 24],
        }, // 4𝐁4𝐈Hy
        193: {
            growth_rate: 0x84,
            base_stats: { "hp": 134, "atk": 139, "def": 132, "spd": 145, "spc": 80 },
            types: [147, 128],
        }, // ♀.
        194: {
            growth_rate: 0x05,
            base_stats: { "hp": 2, "atk": 2, "def": 104, "spd": 3, "spc": 1 },
            types: [89, 3],
        }, // pPkMnp''
        195: {
            growth_rate: 0x00,
            base_stats: { "hp": 65, "atk": 80, "def": 40, "spd": 75, "spc": 45 },
            types: [7, 3],
        }, // ゥ(Z4
        196: {
            growth_rate: 0x81,
            base_stats: { "hp": 132, "atk": 145, "def": 140, "spd": 128, "spc": 141 },
            types: [80, 146],
        }, // Xゥ-×ゥ,
        197: {
            growth_rate: 0x00,
            base_stats: { "hp": 80, "atk": 82, "def": 78, "spd": 85, "spc": 80 },
            types: [21],
        }, // 4..<NULL>x
        198: {
            growth_rate: 0x00,
            base_stats: { "hp": 90, "atk": 65, "def": 65, "spd": 15, "spc": 40 },
            types: [21, 24],
        }, // 𝐆ぅァ7g
        199: {
            growth_rate: 0x03,
            base_stats: { "hp": 78, "atk": 84, "def": 78, "spd": 100, "spc": 85 },
            types: [20, 2],
        }, // <PAGE>u\n
        200: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // <PAGE>g𝐄<PAGE>g
        201: {
            growth_rate: 0x03,
            base_stats: { "hp": 61, "atk": 72, "def": 57, "spd": 65, "spc": 55 },
            types: [3],
        }, // <PAGE>ァ/gJ1
        202: {
            growth_rate: 0x95,
            base_stats: { "hp": 53, "atk": 3, "def": 2, "spd": 126, "spc": 3 },
            types: [3, 115],
        }, // <PAGE><PAGE>.
        203: {
            growth_rate: 0x00,
            base_stats: { "hp": 25, "atk": 35, "def": 70, "spd": 45, "spc": 95 },
            types: [23],
        }, // .pゥ’
        204: {
            growth_rate: 0x03,
            base_stats: { "hp": 79, "atk": 83, "def": 100, "spd": 78, "spc": 85 },
            types: [21],
        }, // .8
        205: {
            growth_rate: 0x03,
            base_stats: { "hp": 79, "atk": 83, "def": 100, "spd": 78, "spc": 85 },
            types: [21],
        }, // ゥ.B<PAGE>
        206: {
            growth_rate: 0x03,
            base_stats: { "hp": 79, "atk": 83, "def": 100, "spd": 78, "spc": 85 },
            types: [21],
        }, // PkMn𝐈<PAGE>pゥぁゥぇ
        207: {
            growth_rate: 0x03,
            base_stats: { "hp": 79, "atk": 83, "def": 100, "spd": 78, "spc": 85 },
            types: [21],
        }, // 4,ゥァ
        208: {
            growth_rate: 0x03,
            base_stats: { "hp": 45, "atk": 50, "def": 45, "spd": 95, "spc": 115 },
            types: [8, 3],
        }, // <PAGE><PAGE>ゥ'
        209: {
            growth_rate: 0x00,
            base_stats: { "hp": 35, "atk": 85, "def": 45, "spd": 75, "spc": 35 },
            types: [0, 2],
        }, // B<PAGE>ァ┘h
        210: {
            growth_rate: 0x03,
            base_stats: { "hp": 61, "atk": 72, "def": 57, "spd": 65, "spc": 55 },
            types: [3],
        }, // PkMn𝐈<PAGE>?<PAGE>A
        211: {
            growth_rate: 0x05,
            base_stats: { "hp": 75, "atk": 100, "def": 95, "spd": 110, "spc": 70 },
            types: [0],
        }, // ゥぁゥぇ]
        212: {
            growth_rate: 0x05,
            base_stats: { "hp": 160, "atk": 110, "def": 65, "spd": 30, "spc": 65 },
            types: [0],
        }, // <PAGE><PAGE><PAGE>ゥ
        213: {
            growth_rate: 0x03,
            base_stats: { "hp": 45, "atk": 49, "def": 49, "spd": 45, "spc": 65 },
            types: [22, 3],
        }, // 'ゥ.\n\n
        214: {
            growth_rate: 0x03,
            base_stats: { "hp": 39, "atk": 52, "def": 43, "spd": 65, "spc": 50 },
            types: [20],
        }, // PkMn𝐈<PAGE>pゥぁゥぇ
        215: {
            growth_rate: 0x03,
            base_stats: { "hp": 40, "atk": 45, "def": 40, "spd": 56, "spc": 35 },
            types: [0, 2],
        }, // <PAGE><PAGE>B
        216: {
            growth_rate: 0x84,
            base_stats: { "hp": 134, "atk": 139, "def": 132, "spd": 145, "spc": 80 },
            types: [147, 128],
        }, // <PAGE>PkMn𝐈<PAGE><PAGE>
        217: {
            growth_rate: 0x00,
            base_stats: { "hp": 77, "atk": 185, "def": 36, "spd": 0, "spc": 19 },
            types: [36, 165],
        }, // ゥぁ<NULL>ゥぇ
        218: {
            growth_rate: 0x00,
            base_stats: { "hp": 40, "atk": 60, "def": 30, "spd": 70, "spc": 31 },
            types: [0, 2],
        }, // ]<PAGE><PAGE><PAGE>
        219: {
            growth_rate: 0x00,
            base_stats: { "hp": 14, "atk": 165, "def": 108, "spd": 0, "spc": 18 },
            types: [57, 0],
        }, // ゥ'B<PAGE>
        220: {
            growth_rate: 0x86,
            base_stats: { "hp": 148, "atk": 145, "def": 134, "spd": 139, "spc": 128 },
            types: [145, 80],
        }, // PkMn𝐈<PAGE>pゥぁゥぇ
        221: {
            growth_rate: 0x91,
            base_stats: { "hp": 130, "atk": 136, "def": 132, "spd": 141, "spc": 147 },
            types: [136, 146],
        }, // 4,ゥァ
        222: {
            growth_rate: 0x7b,
            base_stats: { "hp": 16, "atk": 112, "def": 123, "spd": 112, "spc": 0 },
            types: [20, 125],
        }, // <PAGE><PAGE>”┘8
        223: {
            growth_rate: 0x03,
            base_stats: { "hp": 90, "atk": 85, "def": 95, "spd": 70, "spc": 70 },
            types: [21, 1],
        }, // pぇ”
        224: {
            growth_rate: 0x25,
            base_stats: { "hp": 24, "atk": 92, "def": 58, "spd": 0, "spc": 20 },
            types: [17, 0],
        }, // ┘8pぇァ
        225: {
            growth_rate: 0x02,
            base_stats: { "hp": 2, "atk": 94, "def": 0, "spd": 47, "spc": 1 },
            types: [1],
        }, // 'r'r4
        226: {
            growth_rate: 0x86,
            base_stats: { "hp": 148, "atk": 145, "def": 134, "spd": 139, "spc": 128 },
            types: [145, 80],
        }, // (h4‘89
        227: {
            growth_rate: 0x91,
            base_stats: { "hp": 130, "atk": 136, "def": 132, "spd": 141, "spc": 147 },
            types: [136, 146],
        }, // 4’894‘
        228: {
            growth_rate: 0x00,
            base_stats: { "hp": 14, "atk": 165, "def": 108, "spd": 0, "spc": 18 },
            types: [57, 0],
        }, // 8B4’8<NULL>
        229: {
            growth_rate: 0x00,
            base_stats: { "hp": 65, "atk": 70, "def": 60, "spd": 115, "spc": 65 },
            types: [0],
        }, // Zゥ
        230: {
            growth_rate: 0x20,
            base_stats: { "hp": 4, "atk": 40, "def": 6, "spd": 62, "spc": 78 },
            types: [18, 19],
        }, // “9ゥ‘
        231: {
            growth_rate: 0x81,
            base_stats: { "hp": 132, "atk": 145, "def": 140, "spd": 128, "spc": 141 },
            types: [80, 146],
        }, // ゥ’ゥ.
        232: {
            growth_rate: 0x00,
            base_stats: { "hp": 80, "atk": 92, "def": 65, "spd": 68, "spc": 80 },
            types: [21],
        }, // 4(h4’?<ED>
        233: {
            growth_rate: 0x03,
            base_stats: { "hp": 61, "atk": 72, "def": 57, "spd": 65, "spc": 55 },
            types: [3],
        }, // 4’?
        234: {
            growth_rate: 0x05,
            base_stats: { "hp": 160, "atk": 110, "def": 65, "spd": 30, "spc": 65 },
            types: [0],
        }, // 'rゥ
        235: {
            growth_rate: 0x10,
            base_stats: { "hp": 0, "atk": 48, "def": 0, "spd": 88, "spc": 98 },
            types: [0, 80],
        }, // .4(h4’
        236: {
            growth_rate: 0x03,
            base_stats: { "hp": 63, "atk": 60, "def": 55, "spd": 71, "spc": 50 },
            types: [0, 2],
        }, // ?/
        237: {
            growth_rate: 0xff,
            base_stats: { "hp": 192, "atk": 0, "def": 128, "spd": 16, "spc": 0 },
            types: [0],
        }, // 4(h4’?
        238: {
            growth_rate: 0x10,
            base_stats: { "hp": 0, "atk": 48, "def": 0, "spd": 88, "spc": 98 },
            types: [0, 80],
        }, // <ED>pゥ.4(
        239: {
            growth_rate: 0x04,
            base_stats: { "hp": 140, "atk": 70, "def": 45, "spd": 45, "spc": 50 },
            types: [0],
        }, // h4pゥ·ゥ…
        240: {
            growth_rate: 0x03,
            base_stats: { "hp": 78, "atk": 84, "def": 78, "spd": 100, "spc": 85 },
            types: [20, 2],
        }, // ゥ(I'
        241: {
            growth_rate: 0x03,
            base_stats: { "hp": 61, "atk": 72, "def": 57, "spd": 65, "spc": 55 },
            types: [3],
        }, // 'B'ゥ
        242: {
            growth_rate: 0x05,
            base_stats: { "hp": 65, "atk": 125, "def": 100, "spd": 85, "spc": 55 },
            types: [7],
        }, // ゥゥェゥ▷
        243: {
            growth_rate: 0x10,
            base_stats: { "hp": 0, "atk": 48, "def": 0, "spd": 88, "spc": 98 },
            types: [0, 80],
        }, // ゥ▲ゥ▼┘ゥ
        244: {
            growth_rate: 0x03,
            base_stats: { "hp": 63, "atk": 60, "def": 55, "spd": 71, "spc": 50 },
            types: [0, 2],
        }, // ♂pゥ
        245: {
            growth_rate: 0x05,
            base_stats: { "hp": 160, "atk": 110, "def": 65, "spd": 30, "spc": 65 },
            types: [0],
        }, // ぇ▼ぇpゥぁ
        246: {
            growth_rate: 0x10,
            base_stats: { "hp": 0, "atk": 48, "def": 0, "spd": 88, "spc": 98 },
            types: [0, 80],
        }, // ゥぇ<ED>A
        247: {
            growth_rate: 0x03,
            base_stats: { "hp": 45, "atk": 49, "def": 49, "spd": 45, "spc": 65 },
            types: [22, 3],
        }, // PkMn<NULL><NULL><NULL>
        248: {
            growth_rate: 0x05,
            base_stats: { "hp": 90, "atk": 85, "def": 100, "spd": 85, "spc": 125 },
            types: [25, 2],
        }, // ゥ<PAGE>4ぁ\n4
        249: {
            growth_rate: 0x06,
            base_stats: { "hp": 178, "atk": 19, "def": 11, "spd": 0, "spc": 23 },
            types: [17, 37],
        }, // ぇ<ED><PAGE>└
        250: {
            growth_rate: 0x00,
            base_stats: { "hp": 65, "atk": 95, "def": 57, "spd": 93, "spc": 85 },
            types: [20],
        }, // ゥ▼│ゥ♂
        251: {
            growth_rate: 0x03,
            base_stats: { "hp": 83, "atk": 80, "def": 75, "spd": 91, "spc": 70 },
            types: [0, 2],
        }, // Fぅ┌q,
        252: {
            growth_rate: 0x03,
            base_stats: { "hp": 45, "atk": 50, "def": 55, "spd": 30, "spc": 75 },
            types: [22, 3],
        }, // ゥ<ED>4Mnゥ
        253: {
            growth_rate: 0x00,
            base_stats: { "hp": 50, "atk": 75, "def": 85, "spd": 40, "spc": 30 },
            types: [4],
        }, // ×'rゥ.4-
        254: {
            growth_rate: 0x00,
            base_stats: { "hp": 50, "atk": 20, "def": 55, "spd": 30, "spc": 25 },
            types: [7],
        }, // ゥ/4ァ4,
        255: {
            growth_rate: 0x05,
            base_stats: { "hp": 60, "atk": 75, "def": 85, "spd": 115, "spc": 100 },
            types: [21, 24],
        }, // Qぉ<NULL>h
    };

    private static keyValuePairs = Object.entries(this.statsLookupKV);
    public static statsLookup = new Map(this.keyValuePairs);
};

export default PokemonStatsLookup;
