#!/usr/bin/perl
use utf8;
use warnings;
use strict;
use Data::Dumper qw(Dumper);
use List::Util qw(uniq);
use Fcntl qw(SEEK_SET SEEK_CUR SEEK_END);

my $POKEMON_BASE_STATS_RED_START = 0x383DE;
my $POKEMON_BASE_STATS_YELLOW_START = 0x383DE;
my $POKEMON_BASE_STATS_CRYSTAL_START = 0x51424;
my $POKEMON_BASE_STATS_GOLD_START = 0x51B0B;
my $POKEMON_BASE_STATS_GEN1_ENTRY_OFFSET = 0x383FA - 0x383DE;
my $POKEMON_BASE_STATS_GEN2_ENTRY_OFFSET = 0x51444 - 0x51424;

my $POKEMON_BONUS_POKEMON_BASE_STATS_RED_START = 0x425B;
my $POKEMON_BONUS_POKEMON_BASE_STATS_YELLOW_START = 0x39446;
my $POKEMON_BONUS_POKEMON_BASE_STATS_GOLD_START = 0x00;
my $POKEMON_BONUS_POKEMON_BASE_STATS_CRYSTAL_START = 0x00;


my $POKEMON_EVOS_ATTACKS_RED_START = 0x3B1D8;
my $POKEMON_EVOS_ATTACKS_YELLOW_START = 0x3B361;
my $POKEMON_EVOS_ATTACKS_GOLD_START = 0x429B3;
my $POKEMON_EVOS_ATTACKS_CRYSTAL_START = 0x427A7;
my $POKEMON_EVOS_ATTACKS_RED_MEMORY_START = 0x71d8;
my $POKEMON_EVOS_ATTACKS_YELLOW_MEMORY_START = 0x7361;
my $POKEMON_EVOS_ATTACKS_GOLD_MEMORY_START = 0x69b3;
my $POKEMON_EVOS_ATTACKS_CRYSTAL_MEMORY_START = 0x67a7;
my $POKEMON_EVOS_ATTACKS_POINTERS_RED_START = 0x3B05C;
my $POKEMON_EVOS_ATTACKS_POINTERS_YELLOW_START = 0x3B1E5;
my $POKEMON_EVOS_ATTACKS_POINTERS_GOLD_START = 0x427BD;
my $POKEMON_EVOS_ATTACKS_POINTERS_CRYSTAL_START = 0x425B1;
my $POKEMON_EVOS_ATTACKS_POINTERS_RED_MEMORY_START = 0x705c;
my $POKEMON_EVOS_ATTACKS_POINTERS_YELLOW_MEMORY_START = 0x71e5;
my $POKEMON_EVOS_ATTACKS_POINTERS_GOLD_MEMORY_START = 0x67bd;
my $POKEMON_EVOS_ATTACKS_POINTERS_CRYSTAL_MEMORY_START = 0x65b1;

my $POKEMON_EGG_MOVES_RED_START = 0x00;
my $POKEMON_EGG_MOVES_YELLOW_START = 0x00;
my $POKEMON_EGG_MOVES_GOLD_START = 0x23BF4;
my $POKEMON_EGG_MOVES_CRYSTAL_START = 0x23D07;
my $POKEMON_EGG_MOVES_POINTERS_RED_START = 0x00;
my $POKEMON_EGG_MOVES_POINTERS_YELLOW_START = 0x00;
my $POKEMON_EGG_MOVES_POINTERS_GOLD_START = 0x239FE;
my $POKEMON_EGG_MOVES_POINTERS_CRYSTAL_START = 0x23B11;
my $POKEMON_EGG_MOVES_POINTERS_RED_MEMORY_START = 0x00;
my $POKEMON_EGG_MOVES_POINTERS_YELLOW_MEMORY_START = 0x00;
my $POKEMON_EGG_MOVES_POINTERS_GOLD_MEMORY_START = 0x7BF4;
my $POKEMON_EGG_MOVES_POINTERS_CRYSTAL_MEMORY_START = 0x7D07;

my $POKEMON_DEX_ORDER_TABLE_RED_START = 0x41024;
my $POKEMON_DEX_ORDER_TABLE_YELLOW_START = 0x410B1;

my %eventPokemonByGen = (
	1 => {
		22 => [ # Fearow
			{
				"name" => "Pokemon Stamp campaign",
				"moves" => [ "GROWL", "LEER", "FURY_ATTACK", "PAY_DAY" ],
			},
		],
		25 => [ # Pikachu
			{
				"name" => "Nintendo Power Pikachu",
				"moves" => [ "THUNDERSHOCK", "GROWL", "SURF" ],
			},
			{
				"name" => "Flying Pikachu",
				"moves" => [ "THUNDERSHOCK", "GROWL", "FLY" ],
			},
			{
				"name" => "Surfing Pikachu",
				"moves" => [ "THUNDERSHOCK", "GROWL", "SURF" ],
			},
			{
				"name" => "Pokemon 2 Idea Contest Surfing Pikachu",
				"moves" => [ "THUNDERSHOCK", "GROWL", "SURF" ],
			},
			{
				"name" => "Nintendo 64 Surfing Pikachu",
				"moves" => [ "THUNDERSHOCK", "GROWL", "SURF" ],
			},
			{
				"name" => "Summer 1998 Pokemon Battle Tour Pikachu",
				"moves" => [ "THUNDERSHOCK", "GROWL", "SURF" ],
			},
		],
		54 => [ # Psyduck
			{
				"name" => "Amnesia Psyduck",
				"moves" => [ "SCRATCH", "AMNESIA" ],
			},
		],
		78 => [ # Rapidash
			{
				"name" => "Pokemon Stamp campaign",
				"moves" => [ "EMBER", "FIRE_SPIN", "STOMP", "PAY_DAY" ],
			},
		],
		129 => [ # Magikarp
			{
				"name" => "University Magikarp",
				"moves" => [ "SPLASH", "DRAGON_RAGE" ],
			},
		],
	},
	2 => {
		1 => [ # Bulbasaur
			{
				"name" => "Pokemon Center Mystery Egg #3",
				"moves" => [ "TACKLE", "GROWL", "ANCIENTPOWER" ],
			},
			{
				"name" => "AncientPower Bulbasaur",
				"moves" => [ "TACKLE", "GROWL", "ANCIENTPOWER" ],
			},
		],
		4 => [ # Charmander
			{
				"name" => "Pokemon Center Mystery Egg #3",
				"moves" => [ "SCRATCH", "GROWL", "CRUNCH" ],
			},
			{
				"name" => "Crunch Charmander",
				"moves" => [ "SCRATCH", "GROWL", "CRUNCH" ],
			},
		],
		7 => [ # SQUIRTLE
			{
				"name" => "Zap Cannon Squirtle",
				"moves" => [ "TACKLE", "TAIL_WHIP", "ZAP_CANNON" ],
			},
		],
		21 => [ # SPEAROW
			{
				"name" => "SonicBoom Spearow",
				"moves" => [ "PECK", "GROWL", "SONICBOOM" ],
			},
		],
		29 => [ # NIDORAN Female
			{
				"name" => "Lovely Kiss Nidoran Female",
				"moves" => [ "GROWL", "TACKLE", "LOVELY_KISS" ],
			},
			{
				"name" => "Moonlight Nidoran Female",
				"moves" => [ "GROWL", "TACKLE", "MOONLIGHT" ],
			},
			{
				"name" => "Sweet Kiss Nidoran Female",
				"moves" => [ "GROWL", "TACKLE", "SWEET_KISS" ],
			},
		],
		32 => [ # NIDORAN Male
			{
				"name" => "Lovely Kiss Nidoran Male",
				"moves" => [ "LEER", "TACKLE", "LOVELY_KISS" ],
			},
			{
				"name" => "Morning Sun Nidoran Male",
				"moves" => [ "LEER", "TACKLE", "MORNING_SUN" ],
			},
			{
				"name" => "Sweet Kiss Nidoran Male",
				"moves" => [ "LEER", "TACKLE", "SWEET_KISS" ],
			},
		],
		41 => [ # ZUBAT
			{
				"name" => "Flail Zubat",
				"moves" => [ "LEECH_LIFE", "FLAIL" ],
			},
		],
		43 => [ # ODDISH
			{
				"name" => "Leech Seed Oddish",
				"moves" => [ "ABSORB", "LEECH_SEED" ],
			},
		],
		46 => [ # PARAS
			{
				"name" => "Synthesis Paras",
				"moves" => [ "SCRATCH", "SYNTHESIS" ],
			},
		],
		54 => [ # Psyduck
			{
				"name" => "Pokemon Center Mystery Egg #2",
				"moves" => [ "SCRATCH", "TAIL_WHIP", "PETAL_DANCE" ],
			},
			{
				"name" => "Petal Dance Psyduck",
				"moves" => [ "SCRATCH", "TAIL_WHIP", "PETAL_DANCE" ],
			},
			{
				"name" => "Tri Attack Psyduck",
				"moves" => [ "SCRATCH", "TAIL_WHIP", "TRI_ATTACK" ],
			},
		],
		60 => [ # POLIWAG
			{
				"name" => "Growth Poliwag",
				"moves" => [ "BUBBLE", "GROWTH" ],
			},
			{
				"name" => "Lovely Kiss Poliwag",
				"moves" => [ "BUBBLE", "LOVELY_KISS" ],
			},
			{
				"name" => "Sweet Kiss Poliwag",
				"moves" => [ "BUBBLE", "SWEET_KISS" ],
			},
		],
		63 => [ # ABRA
			{
				"name" => "Foresight Abra",
				"moves" => [ "TELEPORT", "FORESIGHT" ],
			},
		],
		66 => [ # MACHOP
			{
				"name" => "False Swipe Machop",
				"moves" => [ "LOW_KICK", "LEER", "FALSE_SWIPE" ],
			},
			{
				"name" => "Thrash Machop",
				"moves" => [ "LOW_KICK", "LEER", "THRASH" ],
			},
		],
		69 => [ # BELLSPROUT
			{
				"name" => "Lovely Kiss Bellsprout",
				"moves" => [ "VINE_WHIP", "LOVELY_KISS" ],
			},
			{
				"name" => "Sweet Kiss Bellsprout",
				"moves" => [ "VINE_WHIP", "SWEET_KISS" ],
			},
		],
		72 => [ # TENTACOOL
			{
				"name" => "Confuse Ray Tentacool",
				"moves" => [ "POISON_STING", "CONFUSE_RAY" ],
			},
		],
		74 => [ # GEODUDE
			{
				"name" => "Rapid Spin Geodude",
				"moves" => [ "TACKLE", "RAPID_SPIN" ],
			},
		],
		77 => [ # PONYTA
			{
				"name" => "Low Kick Ponyta",
				"moves" => [ "TACKLE", "GROWL", "LOW_KICK" ],
			},
		],
		81 => [ # MAGNEMITE
			{
				"name" => "Agility Magnemite",
				"moves" => [ "TACKLE", "AGILITY" ],
			},
		],
		83 => [ # FARFETCH'D
			{
				"name" => "Fury Cutter Farfetch'd",
				"moves" => [ "PECK", "FURY_CUTTER" ],
			},
			{
				"name" => "Baton Pass Farfetch'd",
				"moves" => [ "BATON_PASS", "SWORDS_DANCE", "AGILITY", "SLASH" ],
			},
		],
		84 => [ # DODUO
			{
				"name" => "Low Kick Doduo",
				"moves" => [ "PECK", "GROWL", "LOW_KICK" ],
			},
		],
		86 => [ # SEEL
			{
				"name" => "Flail Seel",
				"moves" => [ "HEADBUTT", "GROWL", "FLAIL" ],
			},
		],
		95 => [ # ONIX
			{
				"name" => "Sharpen Onix",
				"moves" => [ "TACKLE", "SCREECH", "SHARPEN" ],
			},
		],
		96 => [ # DROWZEE
			{
				"name" => "Amnesia Drowzee",
				"moves" => [ "POUND", "HYPNOSIS", "AMNESIA" ],
			},
		],
		98 => [ # KRABBY
			{
				"name" => "Metal Claw Krabby",
				"moves" => [ "BUBBLE", "LEER", "METAL_CLAW" ],
			},
		],
		100 => [ # VOLTORB
			{
				"name" => "Agility Voltorb",
				"moves" => [ "TACKLE", "AGILITY" ],
			},
		],
		102 => [ # EXEGGCUTE
			{
				"name" => "Sweet Scent Exeggcute",
				"moves" => [ "BARRAGE", "HYPNOSIS", "SWEET_SCENT" ],
			},
		],
		104 => [ # CUBONE
			{
				"name" => "Fury Attack Cubone",
				"moves" => [ "GROWL", "TAIL_WHIP", "FURY_ATTACK" ],
			},
		],
		108 => [ # LICKITUNG
			{
				"name" => "DoubleSlap Lickitung",
				"moves" => [ "LICK", "DOUBLESLAP" ],
			},
		],
		113 => [ # CHANSEY
			{
				"name" => "Sweet Scent Chansey",
				"moves" => [ "POUND", "SWEET_SCENT" ],
			},
		],
		114 => [ # TANGELA
			{
				"name" => "Synthesis Tangela",
				"moves" => [ "CONSTRICT", "SLEEP_POWDER", "SYNTHESIS" ],
			},
		],
		115 => [ # KANGASKHAN
			{
				"name" => "Faint Attack Kangaskhan",
				"moves" => [ "COMET_PUNCH", "FAINT_ATTACK" ],
			},
		],
		116 => [ # HORSEA
			{
				"name" => "Haze Horsea",
				"moves" => [ "BUBBLE", "HAZE" ],
			},
		],
		118 => [ # GOLDEEN
			{
				"name" => "Swords Dance Goldeen",
				"moves" => [ "PECK", "TAIL_WHIP", "SWORDS_DANCE" ],
			},
		],
		120 => [ # STARYU
			{
				"name" => "Twister Staryu",
				"moves" => [ "TACKLE", "HARDEN", "TWISTER" ],
			},
		],
		122 => [ # MR. MIME
			{
				"name" => "Mind Reader Mr. Mime",
				"moves" => [ "BARRIER", "MIND_READER" ],
			},
		],
		123 => [ # SCYTHER
			{
				"name" => "SonicBoom Scyther",
				"moves" => [ "QUICK_ATTACK", "LEER", "SONICBOOM" ],
			},
		],
		127 => [ # PINSIR
			{
				"name" => "Rock Throw Pinsir",
				"moves" => [ "VICEGRIP", "ROCK_THROW" ],
			},
		],
		128 => [ # TAUROS
			{
				"name" => "Quick Attack Tauros",
				"moves" => [ "TACKLE", "TAIL_WHIP", "QUICK_ATTACK" ],
			},
		],
		129 => [ # MAGIKARP
			{
				"name" => "Bubble Magikarp",
				"moves" => [ "SPLASH", "BUBBLE" ],
			},
			{
				"name" => "Reversal Magikarp",
				"moves" => [ "SPLASH", "REVERSAL" ],
			},
		],
		131 => [ # LAPRAS
			{
				"name" => "Bite Lapras",
				"moves" => [ "WATER_GUN", "GROWL", "SING", "BITE" ],
			},
			{
				"name" => "Future Sight Lapras",
				"moves" => [ "WATER_GUN", "GROWL", "SING", "FUTURE_SIGHT" ],
			},
		],
		133 => [ # EEVEE
			{
				"name" => "Growth Eevee",
				"moves" => [ "TACKLE", "TAIL_WHIP", "GROWTH" ],
			},
		],
		137 => [ # PORYGON
			{
				"name" => "Barrier Porygon",
				"moves" => [ "TACKLE", "CONVERSION", "CONVERSION2", "BARRIER" ],
			},
		],
		138 => [ # OMANYTE
			{
				"name" => "Rock Throw Omanyte",
				"moves" => [ "CONSTRICT", "WITHDRAW", "ROCK_THROW" ],
			},
		],
		140 => [ # KABUTO
			{
				"name" => "Rock Throw Kabuto",
				"moves" => [ "SCRATCH", "HARDEN", "ROCK_THROW" ],
			},
		],
		142 => [ # AERODACTYL
			{
				"name" => "Rock Throw Aerodactyl",
				"moves" => [ "WING_ATTACK", "ROCK_THROW" ],
			},
		],
		143 => [ # SNORLAX
			{
				"name" => "Lovely Kiss Snorlax",
				"moves" => [ "TACKLE", "LOVELY_KISS" ],
			},
			{
				"name" => "Splash Snorlax",
				"moves" => [ "TACKLE", "SPLASH" ],
			},
			{
				"name" => "Sweet Kiss Snorlax",
				"moves" => [ "TACKLE", "SWEET_KISS" ],
			},
		],
		147 => [ # dratini
			{
				"name" => "Master's Quiz",
				"moves" => [ "WRAP", "EXTREMESPEED", "THUNDER_WAVE", "TWISTER" ],
			},
			{
				"name" => "Hydro Pump Dratini",
				"moves" => [ "WRAP", "LEER", "HYDRO_PUMP" ],
			},
		],
		152 => [ # Chikorita
			{
				"name" => "Pokemon Center Mystery Egg #1",
				"moves" => [ "TACKLE", "GROWL", "PETAL_DANCE" ],
			},
			{
				"name" => "Pokemon Center Mystery Egg #2",
				"moves" => [ "TACKLE", "GROWL", "PETAL_DANCE" ],
			},
			{
				"name" => "Petal Dance Chikorita",
				"moves" => [ "TACKLE", "GROWL", "PETAL_DANCE" ],
			},
		],
		155 => [ # CYNDAQUIL
			{
				"name" => "Double-Edge Cyndaquil",
				"moves" => [ "TACKLE", "LEER", "DOUBLE_EDGE" ],
			},
		],
		158 => [ # Totodile
			{
				"name" => "Pokemon Center Mystery Egg #3",
				"moves" => [ "SCRATCH", "LEER", "SUBMISSION" ],
			},
			{
				"name" => "Submission Totodile",
				"moves" => [ "SCRATCH", "LEER", "SUBMISSION" ],
			},
		],
		161 => [ # SENTRET
			{
				"name" => "Dizzy Punch Sentret",
				"moves" => [ "TACKLE", "DEFENSE_CURL", "DIZZY_PUNCH" ],
			},
		],
		163 => [ # Hoothoot
			{
				"name" => "Pokemon Center Mystery Egg #3",
				"moves" => [ "TACKLE", "GROWL", "NIGHT_SHADE" ],
			},
			{
				"name" => "Night Shade Hoothoot",
				"moves" => [ "TACKLE", "GROWL", "NIGHT_SHADE" ],
			},
		],
		165 => [ # LEDYBA
			{
				"name" => "Barrier Ledyba",
				"moves" => [ "TACKLE", "BARRIER" ],
			},
		],
		167 => [ # SPINARAK
			{
				"name" => "Growth Spinarak",
				"moves" => [ "POISON_STING", "STRING_SHOT", "GROWTH" ],
			},
		],
		170 => [ # CHINCHOU
			{
				"name" => "Light Screen Chinchou",
				"moves" => [ "BUBBLE", "THUNDER_WAVE", "SUPERSONIC", "LIGHT_SCREEN" ],
			},
		],
		172 => [ # pichu
			{
				"name" => "Odd Egg",
				"moves" => [ "THUNDERSHOCK", "CHARM", "DIZZY_PUNCH" ],
			},
			{
				"name" => "Pokemon Center Mystery Egg #1",
				"moves" => [ "THUNDERSHOCK", "CHARM", "SING" ],
			},
			{
				"name" => "Pokemon Center Mystery Egg #2",
				"moves" => [ "THUNDERSHOCK", "CHARM", "PETAL_DANCE" ],
			},
			{
				"name" => "Pokemon Center Mystery Egg #3",
				"moves" => [ "THUNDERSHOCK", "CHARM", "SING" ],
			},
			{
				"name" => "Dizzy Punch Pichu",
				"moves" => [ "THUNDERSHOCK", "CHARM", "DIZZY_PUNCH" ],
			},
			{
				"name" => "Petal Dance Pichu",
				"moves" => [ "THUNDERSHOCK", "CHARM", "PETAL_DANCE" ],
			},
			{
				"name" => "Scary Face Pichu",
				"moves" => [ "THUNDERSHOCK", "CHARM", "SCARY_FACE" ],
			},
			{
				"name" => "Sing Pichu",
				"moves" => [ "THUNDERSHOCK", "CHARM", "SING" ],
			},
		],
		173 => [ # cleffa
			{
				"name" => "Odd Egg",
				"moves" => [ "POUND", "CHARM", "DIZZY_PUNCH" ],
			},
			{
				"name" => "Pokemon Center Mystery Egg #1",
				"moves" => [ "POUND", "CHARM", "ENCORE", "SWIFT" ],
			},
			{
				"name" => "Pokemon Center Mystery Egg #2",
				"moves" => [ "POUND", "CHARM", "ENCORE", "PETAL_DANCE" ],
			},
			{
				"name" => "Petal Dance Cleffa",
				"moves" => [ "POUND", "CHARM", "ENCORE", "PETAL_DANCE" ],
			},
			{
				"name" => "Scary Face Cleffa",
				"moves" => [ "POUND", "CHARM", "ENCORE", "SCARY_FACE" ],
			},
			{
				"name" => "Swift Cleffa",
				"moves" => [ "POUND", "CHARM", "ENCORE", "SWIFT" ],
			},
		],
		174 => [ # Igglybuff
			{
				"name" => "Odd Egg",
				"moves" => [ "SING", "CHARM", "DIZZY_PUNCH" ],
			},
			{
				"name" => "Pokemon Center Mystery Egg #2",
				"moves" => [ "SING", "CHARM", "DEFENSE_CURL", "PETAL_DANCE" ],
			},
			{
				"name" => "Mimic Igglybuff",
				"moves" => [ "SING", "CHARM", "DEFENSE_CURL", "MIMIC" ],
			},
			{
				"name" => "Petal Dance Igglybuff",
				"moves" => [ "SING", "CHARM", "DEFENSE_CURL", "PETAL_DANCE" ],
			},
			{
				"name" => "Scary Face Igglybuff",
				"moves" => [ "SING", "CHARM", "DEFENSE_CURL", "SCARY_FACE" ],
			},
		],
		177 => [ # NATU
			{
				"name" => "Safeguard Natu",
				"moves" => [ "PECK", "LEER", "SAFEGUARD" ],
			},
		],
		183 => [ # MARILL
			{
				"name" => "Dizzy Punch Marill",
				"moves" => [ "TACKLE", "DEFENSE_CURL", "DIZZY_PUNCH" ],
			},
			{
				"name" => "Hydro Pump Marill",
				"moves" => [ "TACKLE", "DEFENSE_CURL", "HYDRO_PUMP" ],
			},
			{
				"name" => "Scary Face Marill",
				"moves" => [ "TACKLE", "DEFENSE_CURL", "SCARY_FACE" ],
			},
		],
		185 => [ # SUDOWOODO
			{
				"name" => "Substitute Sudowoodo",
				"moves" => [ "ROCK_THROW", "MIMIC", "SUBSTITUTE" ],
			},
		],
		187 => [ # HOPPIP
			{
				"name" => "Agility Hoppip",
				"moves" => [ "SPLASH", "SYNTHESIS", "TAIL_WHIP", "AGILITY" ],
			},
		],
		190 => [ # AIPOM
			{
				"name" => "Mimic Aipom",
				"moves" => [ "SCRATCH", "TAIL_WHIP", "MIMIC" ],
			},
		],
		191 => [ # SUNKERN
			{
				"name" => "Splash Sunkern",
				"moves" => [ "ABSORB", "GROWTH", "SPLASH" ],
			},
		],
		193 => [ # YANMA
			{
				"name" => "Steel Wing Yanma",
				"moves" => [ "TACKLE", "FORESIGHT", "STEEL_WING" ],
			},
			{
				"name" => "Sweet Kiss Yanma",
				"moves" => [ "TACKLE", "FORESIGHT", "SWEET_KISS" ],
			},
		],
		194 => [ # Wooper
			{
				"name" => "Pokemon Center Mystery Egg #1",
				"moves" => [ "WATER_GUN", "TAIL_WHIP", "BELLY_DRUM" ],
			},
			{
				"name" => "Belly Drum Wooper",
				"moves" => [ "WATER_GUN", "TAIL_WHIP", "BELLY_DRUM" ],
			},
			{
				"name" => "Scary Face Wooper",
				"moves" => [ "WATER_GUN", "TAIL_WHIP", "SCARY_FACE" ],
			},
		],
		198 => [ # MURKROW
			{
				"name" => "Beat Up Murkrow",
				"moves" => [ "PECK", "BEAT_UP" ],
			},
		],
		200 => [ # MISDREAVUS
			{
				"name" => "Hypnosis Misdreavus",
				"moves" => [ "GROWL", "PSYWAVE", "HYPNOSIS" ],
			},
		],
		202 => [ # WOBBUFFET
			{
				"name" => "Mimic Wobbuffet",
				"moves" => [ "MIRROR_COAT", "SAFEGUARD", "DESTINY_BOND", "MIMIC" ],
			},
		],
		204 => [ # PINECO
			{
				"name" => "Substitute Pineco",
				"moves" => [ "TACKLE", "PROTECT", "SUBSTITUTE" ],
			},
		],
		206 => [ # DUNSPARCE
			{
				"name" => "Fury Attack Dunsparce",
				"moves" => [ "RAGE", "DEFENSE_CURL", "FURY_ATTACK" ],
			},
			{
				"name" => "Horn Drill Dunsparce",
				"moves" => [ "RAGE", "DEFENSE_CURL", "HORN_DRILL" ],
			},
		],
		207 => [ # Gligar
			{
				"name" => "Earthquake Gligar",
				"moves" => [ "EARTHQUAKE", "POISON_STING", "COUNTER", "WING_ATTACK" ],
			},
		],
		209 => [ # SNUBBULL
			{
				"name" => "Lovely Kiss Snubbull",
				"moves" => [ "TACKLE", "SCARY_FACE", "TAIL_WHIP", "LOVELY_KISS" ],
			},
		],
		211 => [ # QWILFISH
			{
				"name" => "Double-Edge Qwilfish",
				"moves" => [ "TACKLE", "POISON_STING", "DOUBLE_EDGE" ],
			},
		],
		214 => [ # HERACROSS
			{
				"name" => "Seismic Toss Heracross",
				"moves" => [ "TACKLE", "LEER", "SEISMIC_TOSS" ],
			},
		],
		215 => [ # SNEASEL
			{
				"name" => "Moonlight Sneasel",
				"moves" => [ "SCRATCH", "LEER", "MOONLIGHT" ],
			},
		],
		216 => [ # TEDDIURSA
			{
				"name" => "Sweet Scent Teddiursa",
				"moves" => [ "SCRATCH", "LEER", "SWEET_SCENT" ],
			},
		],
		220 => [ # SWINUB
			{
				"name" => "Whirlwind Swinub",
				"moves" => [ "TACKLE", "WHIRLWIND" ],
			},
		],
		223 => [ # REMORAID
			{
				"name" => "Amnesia Remoraid",
				"moves" => [ "WATER_GUN", "AMNESIA" ],
			},
			{
				"name" => "Mist Remoraid",
				"moves" => [ "WATER_GUN", "MIST" ],
			},
		],
		225 => [ # DELIBIRD
			{
				"name" => "Pay Day Delibird",
				"moves" => [ "PRESENT", "PAY_DAY" ],
			},
			{
				"name" => "Spikes Delibird",
				"moves" => [ "PRESENT", "SPIKES" ],
			},
		],
		226 => [ # MANTINE
			{
				"name" => "Gust Mantine",
				"moves" => [ "TACKLE", "BUBBLE", "GUST" ],
			},
		],
		227 => [ # SKARMORY
			{
				"name" => "Fury Cutter Skarmory",
				"moves" => [ "LEER", "PECK", "FURY_CUTTER" ],
			},
		],
		231 => [ # Phanpy
			{
				"name" => "Pokemon Center Mystery Egg #1",
				"moves" => [ "TACKLE", "GROWL", "ENCORE" ],
			},
			{
				"name" => "Absorb Phanpy",
				"moves" => [ "TACKLE", "GROWL", "ABSORB" ],
			},
		],
		234 => [ # STANTLER
			{
				"name" => "Safeguard Stantler",
				"moves" => [ "TACKLE", "SAFEGUARD" ],
			},
		],
		236 => [ # Tyrogue
			{
				"name" => "Odd Egg",
				"moves" => [ "TACKLE", "DIZZY_PUNCH" ],
			},
			{
				"name" => "Rage Tyrogue",
				"moves" => [ "TACKLE", "RAGE" ],
			},
		],
		238 => [ # Smoochum
			{
				"name" => "Odd Egg",
				"moves" => [ "POUND", "LICK", "DIZZY_PUNCH" ],
			},
			{
				"name" => "Pokemon Center Mystery Egg #1",
				"moves" => [ "POUND", "LICK", "METRONOME" ],
			},
			{
				"name" => "Pokemon Center Mystery Egg #2",
				"moves" => [ "POUND", "LICK", "PETAL_DANCE" ],
			},
			{
				"name" => "Metronome Smoochum",
				"moves" => [ "POUND", "LICK", "METRONOME" ],
			},
			{
				"name" => "Petal Dance Smoochum",
				"moves" => [ "POUND", "LICK", "PETAL_DANCE" ],
			},
		],
		239 => [ # Elekid
			{
				"name" => "Odd Egg",
				"moves" => [ "QUICK_ATTACK", "LEER", "DIZZY_PUNCH" ],
			},
			{
				"name" => "Dizzy Punch Elekid",
				"moves" => [ "QUICK_ATTACK", "LEER", "DIZZY_PUNCH" ],
			},
			{
				"name" => "Pursuit Elekid",
				"moves" => [ "QUICK_ATTACK", "LEER", "PURSUIT" ],
			},
		],
		240 => [ # Magby
			{
				"name" => "Odd Egg",
				"moves" => [ "EMBER", "DIZZY_PUNCH" ],
			},
			{
				"name" => "Faint Attack Magby",
				"moves" => [ "EMBER", "FAINT_ATTACK" ],
			},
		],
		241 => [ # MILTANK
			{
				"name" => "Mega Kick Miltank",
				"moves" => [ "TACKLE", "GROWL", "MEGA_KICK" ],
			},
		],
		246 => [ # LARVITAR
			{
				"name" => "Rage Larvitar",
				"moves" => [ "BITE", "LEER", "RAGE" ],
			},
		],
	},
);

# parse the index order and constant names.
binmode(STDOUT, ":utf8") or die "Cannot set STDOUT to binary mode: $!";

if ($#ARGV != 7)
{
	print("argc: $#ARGV\n");
	print("wrong number of args: expected: $0 <red rom file> <yellow rom file> <gold rom file> <crystal rom file> <red dissasembly root> <yellow dissasembly root> <gold dissasembly root> <crystal disassembly root>\n");
	die();
}

my $redromfile = $ARGV[0];
my $yellowromfile = $ARGV[1];
my $goldromfile = $ARGV[2];
my $crystalromfile = $ARGV[3];
my $reddisassembyDir = $ARGV[4];
my $yellowdisassembyDir = $ARGV[5];
my $golddisassembyDir = $ARGV[6];
my $crystaldisassembyDir = $ARGV[7];

if(! (-e $redromfile))
{
	print("can't find red rom file: $redromfile\n");
	die();
}

if(! (-e $yellowromfile))
{
	print("can't find yellow rom file: $yellowromfile\n");
	die();
}

if(! (-e $goldromfile))
{
	print("can't find gold rom file: $goldromfile\n");
	die();
}

if(! (-e $crystalromfile))
{
	print("can't find crystal rom file: $crystalromfile\n");
	die();
}

if(! (-d $reddisassembyDir))
{
	print("unknown red dissassembly dir: $reddisassembyDir\n");
	die();
}

if(! (-d $yellowdisassembyDir))
{
	print("unknown red dissassembly dir: $yellowdisassembyDir\n");
	die();
}

if(! (-d $golddisassembyDir))
{
	print("unknown red dissassembly dir: $golddisassembyDir\n");
	die();
}

if(! (-d $crystaldisassembyDir))
{
	print("unknown red dissassembly dir: $crystaldisassembyDir\n");
	die();
}

if(!($redromfile =~ /(^.*?[\\\/])?[^\\\/]*[Rr][Ee][Dd][^\\\/]*$/))
{
	print("name doesn't seem to look like a red rom file: $redromfile\n");
	die();
}
elsif(!($yellowromfile =~ /^(.*?[\\\/])?[^\\\/]*[Yy][Ee][Ll][Ll][Oo][Ww][^\\\/]*$/))
{
	print("name doesn't seem to look like a yellow rom file: $yellowromfile\n");
	die();
}
elsif(!($goldromfile =~ /(^.*?[\\\/])?[^\\\/]*[Gg][Oo][Ll][Dd][^\\\/]*$/))
{
	print("name doesn't seem to look like a gold rom file: $goldromfile\n");
	die();
}
elsif(!($crystalromfile =~ /^(.*?[\\\/])?[^\\\/]*[Cc][Rr][Yy][Ss][Tt][Aa][Ll][^\\\/]*$/))
{
	print("name doesn't seem to look like a crystal rom file: $crystalromfile\n");
	die();
}

if(!($reddisassembyDir =~ /(^.*?[\\\/])?[^\\\/]*[Rr][Ee][Dd][^\\\/]*$/))
{
	print("red dissassemby dir name doesn't seem to look like a red dissassembly folder: $reddisassembyDir\n");
	die();
}
elsif(!($yellowdisassembyDir =~ /^(.*?[\\\/])?[^\\\/]*[Yy][Ee][Ll][Ll][Oo][Ww][^\\\/]*$/))
{
	print("yellow dissassemby dir name doesn't seem to look like a yellow dissassembly folder: $yellowdisassembyDir\n");
	die();
}
elsif(!($golddisassembyDir =~ /(^.*?[\\\/])?[^\\\/]*[Gg][Oo][Ll][Dd][^\\\/]*$/))
{
	print("gold dissassemby dir name doesn't seem to look like a gold dissassembly folder: $golddisassembyDir\n");
	die();
}
elsif(!($crystaldisassembyDir =~ /^(.*?[\\\/])?[^\\\/]*[Cc][Rr][Yy][Ss][Tt][Aa][Ll][^\\\/]*$/))
{
	print("crystal dissassemby dir name doesn't seem to look like a crystal dissassembly folder: $crystaldisassembyDir\n");
	die();
}

my @roms = ( $redromfile, $yellowromfile, $goldromfile, $crystalromfile );
my @dissassemblydirs = ( $reddisassembyDir, $yellowdisassembyDir, $golddisassembyDir, $crystaldisassembyDir );
my @games = ( "red/blue", "yellow", "gold/silver", "crystal" );
my @gens = ( 1, 1, 2, 2 );
my @othergens = ( 2, 2, 1, 1 );
my @dexOrderTableOffsets = ( $POKEMON_DEX_ORDER_TABLE_RED_START, $POKEMON_DEX_ORDER_TABLE_YELLOW_START, 0, 0 );
my @baseStatsOffsets = ( $POKEMON_BASE_STATS_RED_START, $POKEMON_BASE_STATS_YELLOW_START, $POKEMON_BASE_STATS_GOLD_START, $POKEMON_BASE_STATS_CRYSTAL_START );
my @baseStatsEntryOffsets = ( $POKEMON_BASE_STATS_GEN1_ENTRY_OFFSET, $POKEMON_BASE_STATS_GEN1_ENTRY_OFFSET, $POKEMON_BASE_STATS_GEN2_ENTRY_OFFSET, $POKEMON_BASE_STATS_GEN2_ENTRY_OFFSET );
my @bonusPokemonEntryOffsets = ( $POKEMON_BONUS_POKEMON_BASE_STATS_RED_START, $POKEMON_BONUS_POKEMON_BASE_STATS_YELLOW_START, $POKEMON_BONUS_POKEMON_BASE_STATS_GOLD_START, $POKEMON_BONUS_POKEMON_BASE_STATS_CRYSTAL_START );

my @bonusPokemonPokedexEntrys = ( 151, 151, 0, 0 );
my @numBasePokemons = ( 150, 150, 251, 251 );
my @hasDisconnectedBonusPokemons = ( 1 == 1, 1 == 1, 1 == 0, 1 == 0 );
my @minPokemonIndexs = ( 1, 1, 1, 1 );
my @maxPokemonIndexs = ( 190, 190, 251, 251 );
my @minPokedexs = ( 1, 1, 1, 1 );
my @maxPokedexs = ( 151, 151, 251, 251 );

my @pokemonEvosAttacksPointersRomOffsets = ( $POKEMON_EVOS_ATTACKS_POINTERS_RED_START, $POKEMON_EVOS_ATTACKS_POINTERS_YELLOW_START, $POKEMON_EVOS_ATTACKS_POINTERS_GOLD_START, $POKEMON_EVOS_ATTACKS_POINTERS_CRYSTAL_START );
my @pokemonEvosAttacksPointersMemoryOffsets = ( $POKEMON_EVOS_ATTACKS_POINTERS_RED_MEMORY_START, $POKEMON_EVOS_ATTACKS_POINTERS_YELLOW_MEMORY_START, $POKEMON_EVOS_ATTACKS_POINTERS_GOLD_MEMORY_START, $POKEMON_EVOS_ATTACKS_POINTERS_CRYSTAL_MEMORY_START );
my @pokemonEvosAttacksRomOffsets = ( $POKEMON_EVOS_ATTACKS_RED_START, $POKEMON_EVOS_ATTACKS_YELLOW_START, $POKEMON_EVOS_ATTACKS_GOLD_START, $POKEMON_EVOS_ATTACKS_CRYSTAL_START );
my @pokemonEvosAttacksMemoryOffsets = ($POKEMON_EVOS_ATTACKS_RED_MEMORY_START, $POKEMON_EVOS_ATTACKS_YELLOW_MEMORY_START, $POKEMON_EVOS_ATTACKS_GOLD_MEMORY_START, $POKEMON_EVOS_ATTACKS_CRYSTAL_MEMORY_START );

my @pokemonEggMovesRomOffsets = ( $POKEMON_EGG_MOVES_RED_START, $POKEMON_EGG_MOVES_YELLOW_START, $POKEMON_EGG_MOVES_GOLD_START, $POKEMON_EGG_MOVES_CRYSTAL_START );
my @pokemonEggMovesPointersRomOffsets = ( $POKEMON_EGG_MOVES_POINTERS_RED_START, $POKEMON_EGG_MOVES_POINTERS_YELLOW_START, $POKEMON_EGG_MOVES_POINTERS_GOLD_START, $POKEMON_EGG_MOVES_POINTERS_CRYSTAL_START );
my @pokemonEggMovesPointersMemoryOffsets = ( $POKEMON_EGG_MOVES_POINTERS_RED_MEMORY_START, $POKEMON_EGG_MOVES_POINTERS_YELLOW_MEMORY_START, $POKEMON_EGG_MOVES_POINTERS_GOLD_MEMORY_START, $POKEMON_EGG_MOVES_POINTERS_CRYSTAL_MEMORY_START );

my %redMovesLookup = ();
my %yellowMovesLookup = ();
my %goldMovesLookup = ();
my %crystalMovesLookup = ();

my %redMoveConstantsLookup = ();
my %yellowMoveConstantsLookup = ();
my %goldMoveConstantsLookup = ();
my %crystalMoveConstantsLookup = ();

my %redTmsData = ();
my %yellowTmsData = ();
my %goldTmsData = ();
my %crystalTmsData = ();

my %redHmsData = ();
my %yellowHmsData = ();
my %goldHmsData = ();
my %crystalHmsData = ();

my %redMtsData = ();
my %yellowMtsData = ();
my %goldMtsData = ();
my %crystalMtsData = ();

my %redTmToMoveConstMap = ();
my %yellowTmToMoveConstMap = ();
my %goldTmToMoveConstMap = ();
my %crystalTmToMoveConstMap = ();

my %redHmToMoveConstMap = ();
my %yelloHmToMoveConstMap = ();
my %goldHmToMoveConstMap = ();
my %crystalHmToMoveConstMap = ();

my %redMtToMoveConstMap = ();
my %yellowMtToMoveConstMap = ();
my %goldMtToMoveConstMap = ();
my %crystalMtToMoveConstMap = ();

my %redMoveConstToTmMap = ();
my %yellowMoveConstToTmMap = ();
my %goldMoveConstToTmMap = ();
my %crystalMoveConstToTmMap = ();

my %redMoveConstToHmMap = ();
my %yellowMoveConstToHmMap = ();
my %goldMoveConstToHmMap = ();
my %crystalMoveConstToHmMap = ();

my %redMoveConstToMTMap = ();
my %yellowMoveConstToMTMap = ();
my %goldMoveConstToMTMap = ();
my %crystalMoveConstToMTMap = ();

my %redPokedexOrder = ();
my %yellowPokedexOrder = ();
my %goldPokedexOrder = ();
my %crystalPokedexOrder = ();

my %redIndexOrder = ();
my %yellowIndexOrder = ();
my %goldIndexOrder = ();
my %crystalIndexOrder = ();

my %redPokemonInitialMoves = ();
my %redPokemonLevelUpMoves = ();
my %redPokemonEggMoves = ();
my %redPokemonEventMoves = ();
my %redPokemonTMs = ();
my %redPokemonHMs = ();
my %redPokemonMTs = ();
my %redPokemonEvolutions = ();
my %redPokemonNames = ();

my %yellowPokemonInitialMoves = ();
my %yellowPokemonLevelUpMoves = ();
my %yellowPokemonEggMoves = ();
my %yellowPokemonEventMoves = ();
my %yellowPokemonTMs = ();
my %yellowPokemonHMs = ();
my %yellowPokemonMTs = ();
my %yellowPokemonEvolutions = ();
my %yellowPokemonNames = ();

my %goldPokemonInitialMoves = ();
my %goldPokemonLevelUpMoves = ();
my %goldPokemonEggMoves = ();
my %goldPokemonEventMoves = ();
my %goldPokemonTMs = ();
my %goldPokemonHMs = ();
my %goldPokemonMTs = ();
my %goldPokemonEvolutions = ();
my %goldPokemonNames = ();

my %crystalPokemonInitialMoves = ();
my %crystalPokemonLevelUpMoves = ();
my %crystalPokemonEggMoves = ();
my %crystalPokemonEventMoves = ();
my %crystalPokemonTMs = ();
my %crystalPokemonHMs = ();
my %crystalPokemonMTs = ();
my %crystalPokemonEvolutions = ();
my %crystalPokemonNames = ();

my %redPokemonMoves = ();
my %yellowPokemonMoves = ();
my %goldPokemonMoves = ();
my %crystalPokemonMoves = ();

my @movesLookups = ( \%redMovesLookup, \%yellowMovesLookup, \%goldMovesLookup, \%crystalMovesLookup );
my @moveConstantsLookups = ( \%redMoveConstantsLookup, \%yellowMoveConstantsLookup, \%goldMoveConstantsLookup, \%crystalMoveConstantsLookup );
my @tmsDatas = ( \%redTmsData, \%yellowTmsData, \%goldTmsData, \%crystalTmsData );
my @hmsDatas = ( \%redHmsData, \%yellowHmsData, \%goldHmsData, \%crystalHmsData );
my @mtsDatas = ( \%redMtsData, \%yellowMtsData, \%goldMtsData, \%crystalMtsData );
my @tmToMoveConstMaps = ( \%redTmToMoveConstMap, \%yellowTmToMoveConstMap, \%goldTmToMoveConstMap, \%crystalTmToMoveConstMap );
my @hmToMoveConstMaps = ( \%redHmToMoveConstMap, \%yelloHmToMoveConstMap, \%goldHmToMoveConstMap, \%crystalHmToMoveConstMap );
my @mtToMoveConstMaps = ( \%redMtToMoveConstMap, \%yellowMtToMoveConstMap, \%goldMtToMoveConstMap, \%crystalMtToMoveConstMap );
my @moveConstToTmMaps = ( \%redMoveConstToTmMap, \%yellowMoveConstToTmMap, \%goldMoveConstToTmMap, \%crystalMoveConstToTmMap );
my @moveConstToHmMaps = ( \%redMoveConstToHmMap, \%yellowMoveConstToHmMap, \%goldMoveConstToHmMap, \%crystalMoveConstToHmMap );
my @moveConstToMTMaps = ( \%redMoveConstToMTMap, \%yellowMoveConstToMTMap, \%goldMoveConstToMTMap, \%crystalMoveConstToMTMap );
my @numTMsHMsMTss = ( 0, 0, 0, 0 );
my @numTMss = ( 0, 0, 0, 0 );
my @numHMss = ( 0, 0, 0, 0 );
my @numMTss = ( 0, 0, 0, 0 );
my @pokedexOrders = (\%redPokedexOrder, \%yellowPokedexOrder, \%goldPokedexOrder, \%crystalPokedexOrder);
my @indexOrders = (\%redIndexOrder, \%yellowIndexOrder, \%goldIndexOrder, \%crystalIndexOrder);

my @pokemonInitialMovess = ( \%redPokemonInitialMoves, \%yellowPokemonInitialMoves, \%goldPokemonInitialMoves, \%crystalPokemonInitialMoves );
my @pokemonLevelUpMovess = ( \%redPokemonLevelUpMoves, \%yellowPokemonLevelUpMoves, \%goldPokemonLevelUpMoves, \%crystalPokemonLevelUpMoves );
my @pokemonEggMovess = ( \%redPokemonEggMoves, \%yellowPokemonEggMoves, \%goldPokemonEggMoves, \%crystalPokemonEggMoves );
my @pokemonEventMovess = ( \%redPokemonEventMoves, \%yellowPokemonEventMoves, \%goldPokemonEventMoves, \%crystalPokemonEventMoves );
my @pokemonTMss = ( \%redPokemonTMs, \%yellowPokemonTMs, \%goldPokemonTMs, \%crystalPokemonTMs );
my @pokemonHMss = ( \%redPokemonHMs, \%yellowPokemonHMs, \%goldPokemonHMs, \%crystalPokemonHMs );
my @pokemonMTss = ( \%redPokemonMTs, \%yellowPokemonMTs, \%goldPokemonMTs, \%crystalPokemonMTs );

my @pokemonEvolutionss = ( \%redPokemonEvolutions, \%yellowPokemonEvolutions, \%goldPokemonEvolutions, \%crystalPokemonEvolutions );
my @pokemonNamess = ( \%redPokemonNames, \%yellowPokemonNames, \%goldPokemonNames, \%crystalPokemonNames );

my @pokemonMovess = ( \%redPokemonMoves, \%yellowPokemonMoves, \%goldPokemonMoves, \%crystalPokemonMoves);

for(my $i = 0; $i <= $#roms; $i++)
{
	my $disassembyDir = $dissassemblydirs[$i];
	my $movesLookup = $movesLookups[$i];
	my $moveConstantsLookup = $moveConstantsLookups[$i];
	my $tmsData = $tmsDatas[$i];
	my $hmsData = $hmsDatas[$i];
	my $mtsData = $mtsDatas[$i];
	my $tmToMoveConstMap = $tmToMoveConstMaps[$i];
	my $hmToMoveConstMap = $hmToMoveConstMaps[$i];
	my $mtToMoveConstMap = $mtToMoveConstMaps[$i];
	my $moveConstToTmMap = $moveConstToTmMaps[$i];
	my $moveConstToHmMap = $moveConstToHmMaps[$i];
	my $moveConstToMTMap = $moveConstToMTMaps[$i];
	
	# Read the move constants into a string.
	open(my $moveconstantsfh, "<:encoding(utf8)", "$disassembyDir/constants/move_constants.asm") or die "Could not open $disassembyDir/constants/move_constants.asm: $!";

	my $moveConstantsData = "";
	my $namesLength = 0;
	my $buffer;
	my $bytesread = read($moveconstantsfh, $buffer, 10240);
	while($bytesread)
	{
		$moveConstantsData = $moveConstantsData . $buffer;
		$bytesread = read($moveconstantsfh, $buffer, 10240);
	}
	if(!defined $bytesread)
	{
		die("Read failed for $moveconstantsfh: $!");
	}

	close($moveconstantsfh);
	$moveconstantsfh = undef;

	$moveConstantsData =~ /^; move ids(.*)?DEF NUM_ATTACKS EQU/s;
	$moveConstantsData = $1;

	while ($moveConstantsData =~ /const\s+([^\s]*)\s*;\s*([0-9A-Fa-f]{2,2})/sg) {
		$$movesLookup{$1} = hex($2);
		$$moveConstantsLookup{hex($2)} = $1;
	}

	# Parse the item constants file
	open(my $itemconstantsfh, "<:encoding(utf8)", "$disassembyDir/constants/item_constants.asm") or die "Could not open $disassembyDir/constants/item_constants.asm: $!";

	my $curTM = 1;
	my $curHM = 1;
	my $curMT = 1;
	while(<$itemconstantsfh>) {
		my $line = $_;
		if($line =~ /^\s*add_tm\s+([A-Za-z0-9_]+)\s*(;\s*)?/g)
		{
			my $moveKey = $1;
			if(!(defined($$movesLookup{$moveKey})) || !(exists($$movesLookup{$moveKey})))
			{
				print("missing move: $moveKey\n");
				die();
			}
			$$tmsData{$curTM} = $$movesLookup{$moveKey};
			$$tmToMoveConstMap{$curTM} = $moveKey;
			$$moveConstToTmMap{$moveKey} = $curTM;
			$curTM++;
		}
		elsif($line =~ /^\s*add_hm\s+([A-Za-z0-9_]+)\s*(;\s*)?/g)
		{
			my $moveKey = $1;
			if(!(defined($$movesLookup{$moveKey})) || !(exists($$movesLookup{$moveKey})))
			{
				print("missing move: $moveKey\n");
				die();
			}
			$$hmsData{$curHM} = $$movesLookup{$moveKey};
			$$hmToMoveConstMap{$curHM} = $moveKey;
			$$moveConstToHmMap{$moveKey} = $curHM;
			$curHM++;
		}
		elsif($line =~ /^\s*add_mt\s+([A-Za-z0-9_]+)\s*(;\s*)?/g)
		{
			my $moveKey = $1;
			if(!(defined($$movesLookup{$moveKey})) || !(exists($$movesLookup{$moveKey})))
			{
				print("missing move: $moveKey\n");
				die();
			}
			$$mtsData{$curMT} = $$movesLookup{$moveKey};
			$$mtToMoveConstMap{$curMT} = $moveKey;
			$$moveConstToMTMap{$moveKey} = $curMT;
			$curMT++;
		}
	}
	close($itemconstantsfh);
	$itemconstantsfh = undef;

	my $numTMsHMsMTs = scalar(keys(%{$tmsData})) + scalar(keys(%{$hmsData})) + scalar(keys(%{$mtsData}));
	my $numTMs = scalar(keys(%{$tmsData}));
	my $numHMs = scalar(keys(%{$hmsData}));
	my $numMTs = scalar(keys(%{$mtsData}));
	
	$numTMsHMsMTss[$i] = $numTMsHMsMTs;
	$numTMss[$i] = $numTMs;
	$numHMss[$i] = $numHMs;
	$numMTss[$i] = $numMTs;

	my $gen = $gens[$i];
	my $rom = $roms[$i];

	my $baseStatsOffset = $baseStatsOffsets[$i];
	my $baseStatsEntryOffset = $baseStatsEntryOffsets[$i];
	
	my $bonusPokemonEntryOffset = $bonusPokemonEntryOffsets[$i];
	my $bonusPokemonPokedexEntry = $bonusPokemonPokedexEntrys[$i];
	
	my $numBasePokemon = $numBasePokemons[$i];
	my $hasDisconnectedBonusPokemon = $hasDisconnectedBonusPokemons[$i];

	my $pokemonInitialMoves = $pokemonInitialMovess[$i];
	my $pokemonLevelUpMoves = $pokemonLevelUpMovess[$i];
	my $pokemonEggMoves = $pokemonEggMovess[$i];
	my $pokemonEventMoves = $pokemonEventMovess[$i];
	my $pokemonTMs = $pokemonTMss[$i];
	my $pokemonHMs = $pokemonHMss[$i];
	my $pokemonMTs = $pokemonMTss[$i];
	my $pokemonMoves = $pokemonMovess[$i];
	my $pokemonEvolutions = $pokemonEvolutionss[$i];

	my $pokemonEvosAttacksPointersRomOffset = $pokemonEvosAttacksPointersRomOffsets[$i];
	my $pokemonEvosAttacksPointersMemoryOffset = $pokemonEvosAttacksPointersMemoryOffsets[$i];
	my $pokemonEvosAttacksRomOffset = $pokemonEvosAttacksRomOffsets[$i];
	my $pokemonEvosAttacksMemoryOffset = $pokemonEvosAttacksMemoryOffsets[$i];

	my $pokemonEggMovesRomOffset = $pokemonEggMovesRomOffsets[$i];
	my $pokemonEggMovesPointersRomOffset = $pokemonEggMovesPointersRomOffsets[$i];
	my $pokemonEggMovesPointersMemoryOffset = $pokemonEggMovesPointersMemoryOffsets[$i];

	my $minPokemonIndex = $minPokemonIndexs[$i];
	my $maxPokemonIndex = $maxPokemonIndexs[$i];

	my $minPokedex = $minPokedexs[$i];
	my $maxPokedex = $maxPokedexs[$i];

	# read the rom into a file.
	open(my $romfh, '<:raw', $rom) or die "Could not open $rom: $!";
	binmode($romfh) or (close($romfh), die "Cannot set $romfh to binary mode: $!");
	seek($romfh, 0, SEEK_SET) or (close($romfh), die "Cannot seek $romfh to move names: $!");
	my @romBytes = ();
	my $dataLength = 0;
	$bytesread = read($romfh, $buffer, 10240);
	while($bytesread)
	{
		$dataLength += $bytesread;
		for(my $i = 0; $i < $bytesread; $i++)
		{
				push(@romBytes, ord(substr($buffer, $i, 1)));
		}
		
		$bytesread = read($romfh, $buffer, 10240);
	}
	if(!defined $bytesread)
	{
		die("Read failed for $romfh: $!");
	}

	close($romfh);
	$romfh = undef;
	
	# parse the pokedex order.
	my $pokedexOrder = $pokedexOrders[$i];
	if($gen == 1)
	{
		my $offset = $dexOrderTableOffsets[$i];
		for(my $i = $minPokemonIndex; $i <= $maxPokemonIndex; $i++)
		{
			$$pokedexOrder{$i} = $romBytes[$offset];
			$offset++;
		}
		for(my $i = 0; $i < $minPokemonIndex; $i++)
		{
			$$pokedexOrder{$i} = 0;
		}
		for(my $i = $maxPokemonIndex + 1; $i <= 255; $i++)
		{
			$$pokedexOrder{$i} = 0;
		}
	}
	else
	{
		for(my $i = $minPokemonIndex; $i <= $maxPokemonIndex; $i++)
		{
			$$pokedexOrder{$i} = $i;
		}
		for(my $i = 0; $i < $minPokemonIndex; $i++)
		{
			$$pokedexOrder{$i} = 0;
		}
		for(my $i = $maxPokemonIndex + 1; $i <= 255; $i++)
		{
			$$pokedexOrder{$i} = 0;
		}
	}
	
	my $indexOrder = $indexOrders[$i];
	if($gen == 1)
	{
		my $offset = $dexOrderTableOffsets[$i];
		for(my $i = $minPokedex; $i <= $maxPokedex; $i++)
		{
			my $curOffset = $offset;
			my $found = (1 == 0);
			
			while(!$found)
			{
				my $byte = $romBytes[$curOffset];
				if($byte == $i)
				{
					$found = (1 == 1);
				}
				else
				{
					$curOffset++;
				}
			}
			$$indexOrder{$i} = $curOffset - $offset + 1;
		}
		for(my $i = 0; $i < $minPokedex; $i++)
		{
			$$indexOrder{$i} = 0;
		}
		for(my $i = $maxPokedex + 1; $i <= 255; $i++)
		{
			$$indexOrder{$i} = 0;
		}
	}
	else
	{
		for(my $i = $minPokemonIndex; $i <= $maxPokemonIndex; $i++)
		{
			$$indexOrder{$i} = $i;
		}
		for(my $i = 0; $i < $minPokemonIndex; $i++)
		{
			$$indexOrder{$i} = 0;
		}
		for(my $i = $maxPokemonIndex + 1; $i <= 255; $i++)
		{
			$$indexOrder{$i} = 0;
		}
	}
	
	# parse the base stats.
	my $curOffset = $baseStatsOffset;
	for(my $i = 0; $i < $numBasePokemon; $i++)
	{
		my @types = ();
		my @tms = ();
		my @hms = ();
		my @mts = ();
		my @initial = ();
		my %levelup = ();
		my @eggMoves = ();
		my @eventMoves = ();
		my @evolutions = ();
		my $idx = 0;
		my $hp = 0;
		my $atk = 0;
		my $def = 0;
		my $spd = 0;
		my $spc = 0;
		my $spcA = 0;
		my $spcD = 0;
		my @typs = ( 0, 0 );
		
		$idx = $romBytes[$curOffset];
		$curOffset++;
		$hp = $romBytes[$curOffset];
		$curOffset++;
		$atk = $romBytes[$curOffset];
		$curOffset++;
		$def = $romBytes[$curOffset];
		$curOffset++;
		$spd = $romBytes[$curOffset];
		$curOffset++;
		if($gen == 1)
		{
			$spc = $romBytes[$curOffset];
			$curOffset++;
		}
		else
		{
			$spcA = $romBytes[$curOffset];
			$curOffset++;
			$spcD = $romBytes[$curOffset];
			$curOffset++;
		}
		
		@typs = ($romBytes[$curOffset], $romBytes[$curOffset + 1]);
		$curOffset += 2;
		
		$curOffset++; # catch rate.
		$curOffset++; # base exp.
		
		if($gen == 2)
		{
			$curOffset += 2; # items
			$curOffset++; # sex ratio
			$curOffset++; # unknown 1.
			$curOffset++; # steps to hatch.
			$curOffset++; # unknown 2.
		}
		
		$curOffset++; # front dimensions.
		$curOffset += 4; # front and back front pic pointers.
		
		# initial moveset from gen 1.
		if($gen == 1)
		{
			my $moveConstant = $$moveConstantsLookup{$romBytes[$curOffset]};
			if($moveConstant ne "NO_MOVE")
			{
				#push(@initial, $romBytes[$curOffset]);
				push(@initial, $moveConstant);
			}
			$curOffset++;
			$moveConstant = $$moveConstantsLookup{$romBytes[$curOffset]};
			if($moveConstant ne "NO_MOVE")
			{
				#push(@initial, $romBytes[$curOffset]);
				push(@initial, $moveConstant);
			}
			$curOffset++;
			$moveConstant = $$moveConstantsLookup{$romBytes[$curOffset]};
			if($moveConstant ne "NO_MOVE")
			{
				#push(@initial, $romBytes[$curOffset]);
				push(@initial, $moveConstant);
			}
			$curOffset++;
			$moveConstant = $$moveConstantsLookup{$romBytes[$curOffset]};
			if($moveConstant ne "NO_MOVE")
			{
				#push(@initial, $romBytes[$curOffset]);
				push(@initial, $moveConstant);
			}
			$curOffset++;
		}

		my $growthRate = $romBytes[$curOffset];
		$curOffset++;
		
		if($gen == 2)
		{
			$curOffset++; # egg groups.
		}
		
		my @tmHmMTs = ( );
		my $tmHmMtBytes = int((($numTMsHMsMTs + 7) / 8));
		for(my $j = 0; $j < $tmHmMtBytes; $j++)
		{
			push(@tmHmMTs, $romBytes[$curOffset]);
			$curOffset++;
		}
		
		if($typs[0] == $typs[1])
		{
			push(@types, $typs[0]);
		}
		else
		{
			push(@types, $typs[0]);
			push(@types, $typs[1]);
		}

		for(my $j = 1; $j <= $numTMsHMsMTs; $j++)
		{
			my $n = int(($j - 1) / 8);
			my $b = ($j - 1) % 8;
			my $m = 1 << $b;
			if(($tmHmMTs[$n] & $m) != 0)
			{
				if($j <= $numTMs)
				{
					push(@tms, $$tmToMoveConstMap{$j});
					#push(@tms, $j);
				}
				elsif($j <= $numTMs + $numHMs)
				{
					push(@hms, $$hmToMoveConstMap{$j - $numTMs});
					#push(@hms, $j - $numTMs);
				}
				elsif($j <= $numTMs + $numHMs + $numMTs)
				{
					push(@mts, $$mtToMoveConstMap{$j - $numTMs - $numHMs});
					#push(@mts, $j - $numTMs - $numHMs);
				}
			}
		}
		
		if($gen == 1)
		{
			$curOffset++; # gen 1 padding.
		}
		
		$$pokemonInitialMoves{$i + 1} = \@initial;
		$$pokemonLevelUpMoves{$i + 1} = \%levelup;
		$$pokemonEggMoves{$i + 1} = \@eggMoves;
		$$pokemonEventMoves{$i + 1} = \@eventMoves;
		$$pokemonTMs{$i + 1} = \@tms;
		$$pokemonHMs{$i + 1} = \@hms;
		$$pokemonMTs{$i + 1} = \@mts;
		$$pokemonEvolutions{$i + 1} = \@evolutions;
	}
	if($hasDisconnectedBonusPokemon)
	{
		if($bonusPokemonEntryOffset != 0x00)
		{
			my $i = $bonusPokemonPokedexEntry - 1;
			my $curOffset = $bonusPokemonEntryOffset;
			
			my @types = ();
			my @tms = ();
			my @hms = ();
			my @mts = ();
			my @initial = ();
			my %levelup = ();
			my @eggMoves = ();
			my @eventMoves = ();
			my @evolutions = ();
			my $idx = 0;
			my $hp = 0;
			my $atk = 0;
			my $def = 0;
			my $spd = 0;
			my $spc = 0;
			my $spcA = 0;
			my $spcD = 0;
			my @typs = ( 0, 0 );
			
			$idx = $romBytes[$curOffset];
			$curOffset++;
			$hp = $romBytes[$curOffset];
			$curOffset++;
			$atk = $romBytes[$curOffset];
			$curOffset++;
			$def = $romBytes[$curOffset];
			$curOffset++;
			$spd = $romBytes[$curOffset];
			$curOffset++;
			if($gen == 1)
			{
				$spc = $romBytes[$curOffset];
				$curOffset++;
			}
			else
			{
				$spcA = $romBytes[$curOffset];
				$curOffset++;
				$spcD = $romBytes[$curOffset];
				$curOffset++;
			}
			
			@typs = ($romBytes[$curOffset], $romBytes[$curOffset + 1]);
			$curOffset += 2;
			
			$curOffset++; # catch rate.
			$curOffset++; # base exp.
			
			if($gen == 2)
			{
				$curOffset += 2; # items
				$curOffset++; # sex ratio
				$curOffset++; # unknown 1.
				$curOffset++; # steps to hatch.
				$curOffset++; # unknown 2.
			}
			
			$curOffset++; # front dimensions.
			$curOffset += 4; # front and back front pic pointers.
			
			# initial moveset from gen 1.
			if($gen == 1)
			{
				my $moveConstant = $$moveConstantsLookup{$romBytes[$curOffset]};
				if($moveConstant ne "NO_MOVE")
				{
					#push(@initial, $romBytes[$curOffset]);
					push(@initial, $moveConstant);
				}
				$curOffset++;
				$moveConstant = $$moveConstantsLookup{$romBytes[$curOffset]};
				if($moveConstant ne "NO_MOVE")
				{
					#push(@initial, $romBytes[$curOffset]);
					push(@initial, $moveConstant);
				}
				$curOffset++;
				$moveConstant = $$moveConstantsLookup{$romBytes[$curOffset]};
				if($moveConstant ne "NO_MOVE")
				{
					#push(@initial, $romBytes[$curOffset]);
					push(@initial, $moveConstant);
				}
				$curOffset++;
				$moveConstant = $$moveConstantsLookup{$romBytes[$curOffset]};
				if($moveConstant ne "NO_MOVE")
				{
					#push(@initial, $romBytes[$curOffset]);
					push(@initial, $moveConstant);
				}
				$curOffset++;
			}

			my $growthRate = $romBytes[$curOffset];
			$curOffset++;
			
			if($gen == 2)
			{
				$curOffset++; # egg groups.
			}
			
			my @tmHmMTs = ( );
			my $tmHmMtBytes = int((($numTMsHMsMTs + 7) / 8));
			for(my $j = 0; $j < $tmHmMtBytes; $j++)
			{
				push(@tmHmMTs, $romBytes[$curOffset]);
				$curOffset++;
			}
			
			if($typs[0] == $typs[1])
			{
				push(@types, $typs[0]);
			}
			else
			{
				push(@types, $typs[0]);
				push(@types, $typs[1]);
			}

			for(my $j = 1; $j <= $numTMsHMsMTs; $j++)
			{
				my $n = int(($j - 1) / 8);
				my $b = ($j - 1) % 8;
				my $m = 1 << $b;
				if(($tmHmMTs[$n] & $m) != 0)
				{
					if($j <= $numTMs)
					{
						push(@tms, $$tmToMoveConstMap{$j});
						#push(@tms, $j);
					}
					elsif($j <= $numTMs + $numHMs)
					{
						push(@hms, $$hmToMoveConstMap{$j - $numTMs});
						#push(@hms, $j - $numTMs);
					}
					elsif($j <= $numTMs + $numHMs + $numMTs)
					{
						push(@mts, $$mtToMoveConstMap{$j - $numTMs - $numHMs});
						#push(@mts, $j - $numTMs - $numHMs);
					}
				}
			}
			
			if($gen == 1)
			{
				$curOffset++; # gen 1 padding.
			}
			
			$$pokemonInitialMoves{$i + 1} = \@initial;
			$$pokemonLevelUpMoves{$i + 1} = \%levelup;
			$$pokemonEggMoves{$i + 1} = \@eggMoves;
			$$pokemonEventMoves{$i + 1} = \@eventMoves;
			$$pokemonTMs{$i + 1} = \@tms;
			$$pokemonHMs{$i + 1} = \@hms;
			$$pokemonMTs{$i + 1} = \@mts;
			$$pokemonEvolutions{$i + 1} = \@evolutions;
		}
	}

	# parse the evolutions, initial moves (in gen 2) and level up moves (in gen 2)
	$curOffset = $pokemonEvosAttacksPointersRomOffset;
	for(my $i = $minPokemonIndex; $i <= $maxPokemonIndex; $i++)
	{
		my $lowerByte = $romBytes[$curOffset];
		my $higherByte = $romBytes[$curOffset + 1];
		my $memoryOffset = ($higherByte << 8) | $lowerByte;
		my $romOffset = $memoryOffset - $pokemonEvosAttacksMemoryOffset;
		my $romAddr = $pokemonEvosAttacksRomOffset + $romOffset;
		my $pokemonEvosAttacksOffset = $romAddr;
	
		$curOffset += 2;
		
		my $pokedex = $$pokedexOrder{$i};
		my $initial = $$pokemonInitialMoves{$pokedex};
		my $levelup = $$pokemonLevelUpMoves{$pokedex};
		my $evolutions = $$pokemonEvolutions{$pokedex};
		if($pokedex != 0)
		{
			while(1)
			{
				if($romBytes[$pokemonEvosAttacksOffset] == 0)
				{
					$pokemonEvosAttacksOffset++;
					last;
				}
				elsif($romBytes[$pokemonEvosAttacksOffset] == 1) # EVOLVE_LEVEL
				{
					$pokemonEvosAttacksOffset++;
					my $level = $romBytes[$pokemonEvosAttacksOffset];
					$pokemonEvosAttacksOffset++;
					my $species = $romBytes[$pokemonEvosAttacksOffset];
					$pokemonEvosAttacksOffset++;
					
					#printf("gen: %d, pokedex: %d, evolution: %s, level: %d, species: %d\n", $gen, $pokedex, "EVOLVE_LEVEL", $level, $species);
					push(@{$evolutions}, $$pokedexOrder{$species});
				}
				elsif($romBytes[$pokemonEvosAttacksOffset] == 2) # EVOLVE_ITEM
				{
					$pokemonEvosAttacksOffset++;
					my $usedItem = $romBytes[$pokemonEvosAttacksOffset];
					$pokemonEvosAttacksOffset++;
					my $level = 0;
					if($gen == 1)
					{
						$level = $romBytes[$pokemonEvosAttacksOffset];
						$pokemonEvosAttacksOffset++;
					}
					my $species = $romBytes[$pokemonEvosAttacksOffset];
					$pokemonEvosAttacksOffset++;
					
					#printf("gen: %d, pokedex: %d, evolution: %s, usedItem: %d, level: %d, species: %d\n", $gen, $pokedex, "EVOLVE_ITEM", $usedItem, $level, $species);
					push(@{$evolutions}, $$pokedexOrder{$species});
				}
				elsif($romBytes[$pokemonEvosAttacksOffset] == 3) # EVOLVE_TRADE
				{
					$pokemonEvosAttacksOffset++;
					my $heldItem = 0;
					if($gen == 2)
					{
						$heldItem = $romBytes[$pokemonEvosAttacksOffset];
						$pokemonEvosAttacksOffset++;
					}
					my $level = 0;
					if($gen == 1)
					{
						$level = $romBytes[$pokemonEvosAttacksOffset];
						$pokemonEvosAttacksOffset++;
					}
					my $species = $romBytes[$pokemonEvosAttacksOffset];
					$pokemonEvosAttacksOffset++;
					
					#printf("gen: %d, pokedex: %d, evolution: %s, heldItem: %d, level: %d, species: %d\n", $gen, $pokedex, "EVOLVE_TRADE", $heldItem, $level, $species);
					push(@{$evolutions}, $$pokedexOrder{$species});
				}
				elsif($romBytes[$pokemonEvosAttacksOffset] == 4) # EVOLVE_HAPPINESS
				{
					$pokemonEvosAttacksOffset++;
					my $happynessTrigger = $romBytes[$pokemonEvosAttacksOffset];
					$pokemonEvosAttacksOffset++;
					my $species = $romBytes[$pokemonEvosAttacksOffset];
					$pokemonEvosAttacksOffset++;
					
					#printf("gen: %d, pokedex: %d, evolution: %s, happynessTrigger: %d, species: %d\n", $gen, $pokedex, "EVOLVE_HAPPINESS", $happynessTrigger, $species);
					push(@{$evolutions}, $$pokedexOrder{$species});
				}
				elsif($romBytes[$pokemonEvosAttacksOffset] == 5) # EVOLVE_STAT
				{
					$pokemonEvosAttacksOffset++;
					my $level = $romBytes[$pokemonEvosAttacksOffset];
					$pokemonEvosAttacksOffset++;
					my $atkDefConstant = $romBytes[$pokemonEvosAttacksOffset];
					$pokemonEvosAttacksOffset++;
					my $species = $romBytes[$pokemonEvosAttacksOffset];
					$pokemonEvosAttacksOffset++;
					
					#printf("gen: %d, pokedex: %d, evolution: %s, level: %d, atkDefConstant: %d, species: %d\n", $gen, $pokedex, "EVOLVE_STAT", $level, $atkDefConstant, $species);
					push(@{$evolutions}, $$pokedexOrder{$species});
					
				}
				else
				{
					$pokemonEvosAttacksOffset++;
					print("unexpected evolution trigger: " . (($i + 1) % 256) . ", " . $romBytes[$pokemonEvosAttacksOffset] . "\n");
					die();
				}
			}
			
			while(1)
			{
				if($romBytes[$pokemonEvosAttacksOffset] == 0)
				{
					$pokemonEvosAttacksOffset++;
					last;
				}
				else
				{
					my $level = $romBytes[$pokemonEvosAttacksOffset];
					$pokemonEvosAttacksOffset++;
					my $move = $romBytes[$pokemonEvosAttacksOffset];
					$pokemonEvosAttacksOffset++;
					
					if($level <= 1)
					{
						#push(@{$initial}, $move);
						push(@{$initial}, $$moveConstantsLookup{$move});
					}
					else
					{
						if(exists $$levelup{$level} && defined $$levelup{$level})
						{
							if(!ref($$levelup{$level}))
							{
								my @movearr = ();
								push(@movearr, $$levelup{$level});
								$$levelup{$level} = \@movearr;
							}
							push(@{$$levelup{$level}}, $$moveConstantsLookup{$move});
						}
						else
						{
							$$levelup{$level} = $$moveConstantsLookup{$move};
						}
					}
				}
			}
		}
	}
	
	# parse the egg moves
	$curOffset = $pokemonEggMovesPointersRomOffset;
	if($pokemonEggMovesRomOffset > 0)
	{
		for(my $i = $minPokemonIndex; $i <= $maxPokemonIndex; $i++)
		{
			my $lowerByte = $romBytes[$curOffset];
			my $higherByte = $romBytes[$curOffset + 1];
			my $memoryOffset = ($higherByte << 8) | $lowerByte;
			my $romOffset = $memoryOffset - $pokemonEggMovesPointersMemoryOffset;
			my $romAddr = $pokemonEggMovesRomOffset + $romOffset;
			my $eggMovesOffset = $romAddr;
		
			$curOffset += 2;
			
			my $pokedex = $$pokedexOrder{$i};
			if($pokedex != 0)
			{
				my $eggMoves = $$pokemonEggMoves{$pokedex};
				
				while(1)
				{
					if($romBytes[$eggMovesOffset] != 0xFF)
					{
						my $eggMove = $romBytes[$eggMovesOffset];
						push(@{$eggMoves}, $$moveConstantsLookup{$eggMove});
						#push(@{$eggMoves}, $eggMove);
						$eggMovesOffset++;
					}
					else
					{
						$eggMovesOffset++;
						last;
					}
				}
			}
		}
	}
	
	# find the event moves.
	my $eventPokemonByCurrentGen = $eventPokemonByGen{$gen};
	for(my $i = $minPokedex; $i <= $maxPokedex; $i++)
	{
		my $initial = $$pokemonInitialMoves{$i};
		my $levelup = $$pokemonLevelUpMoves{$i};
		my $eggMoves = $$pokemonEggMoves{$i};
		my $tms = $$pokemonTMs{$i};
		my $hms = $$pokemonHMs{$i};
		my $mts = $$pokemonMTs{$i};
		
		my @possibleEventMoves = ();
		if(exists $$eventPokemonByCurrentGen{$i} && defined $$eventPokemonByCurrentGen{$i})
		{
			my $eventPokemons = $$eventPokemonByCurrentGen{$i};
			for my $eventPokemon (@{$eventPokemons})
			{
				for my $move (@{$$eventPokemon{"moves"}})
				{
					push(@possibleEventMoves, $move);
				}
			}
			
			for my $move (@{$initial})
			{
				my @newPossibleEventMoves = grep { $_ ne $move } @possibleEventMoves;
				@possibleEventMoves = @newPossibleEventMoves;
			}
			
			for my $move (values %{$levelup})
			{
				my @newPossibleEventMoves = grep { $_ ne $move } @possibleEventMoves;
				@possibleEventMoves = @newPossibleEventMoves;
			}
			
			for my $move (@{$eggMoves})
			{
				my @newPossibleEventMoves = grep { $_ ne $move } @possibleEventMoves;
				@possibleEventMoves = @newPossibleEventMoves;
			}
			
			for my $move (@{$tms})
			{
				my @newPossibleEventMoves = grep { $_ ne $move } @possibleEventMoves;
				@possibleEventMoves = @newPossibleEventMoves;
			}
			
			for my $move (@{$hms})
			{
				my @newPossibleEventMoves = grep { $_ ne $move } @possibleEventMoves;
				@possibleEventMoves = @newPossibleEventMoves;
			}
			
			for my $move (@{$mts})
			{
				my @newPossibleEventMoves = grep { $_ ne $move } @possibleEventMoves;
				@possibleEventMoves = @newPossibleEventMoves;
			}
		}
		my @uniquePossibleEventMoves = uniq(@possibleEventMoves);
		@possibleEventMoves = @uniquePossibleEventMoves;
		
		$$pokemonEventMoves{$i} = \@possibleEventMoves;
	}
	
	# flatten the moves.
	for(my $i = $minPokedex; $i <= $maxPokedex; $i++)
	{
		my $initial = $$pokemonInitialMoves{$i};
		my $levelup = $$pokemonLevelUpMoves{$i};
		my $eggMoves = $$pokemonEggMoves{$i};
		my $tms = $$pokemonTMs{$i};
		my $hms = $$pokemonHMs{$i};
		my $mts = $$pokemonMTs{$i};
		my $eventMoves = $$pokemonEventMoves{$i};
		
		my @moves = ();
		
		for my $initialMove (@{$initial})
		{
			push(@moves, $initialMove);
		}
		
		for my $level (keys %{$levelup})
		{
			my $moves = $$levelup{$level};
			if(ref($moves) eq "ARRAY")
			{
				if($gen == 2)
				{
					for my $move (@{$moves})
					{
						push(@moves, $move);
					}
				}
				else
				{
					my $move = $$moves[0];
					push(@moves, $move);
				}
			}
			else
			{
				push(@moves, $moves);
			}
			
		}
		
		for my $tm (@{$tms})
		{
			push(@moves, $tm);
		}

		for my $hm (@{$hms})
		{
			push(@moves, $hm);
		}

		for my $mt (@{$mts})
		{
			push(@moves, $mt);
		}

		for my $eggMove (@{$eggMoves})
		{
			push(@moves, $eggMove);
		}
		
		for my $eventMove (@{$eventMoves})
		{
			push(@moves, $eventMove);
		}
		
		my @mvs = uniq(@moves);
		$$pokemonMoves{$i} = \@mvs;
	}
}

# push up moves along evolutionary lines.
sub processEvolution {
	my ($parentPokedex, $pokedex, $pokemonEvolutions, $pokemonMoves) = @_;
	
	my @moves = (@{$$pokemonMoves{$parentPokedex}}, @{$$pokemonMoves{$pokedex}});
	my @dedupMoves = uniq(@moves);
	
	$$pokemonMoves{$pokedex} = \@dedupMoves;
	
	my $evolutions = $$pokemonEvolutions{$pokedex};
	for my $evolution (@{$evolutions}) {
		processEvolution($pokedex, $evolution, $pokemonEvolutions, $pokemonMoves);
	}
}

for(my $i = 0; $i <= $#roms; $i++)
{
	my $pokemonEvolutions = $pokemonEvolutionss[$i];
	my $pokemonMoves = $pokemonMovess[$i];
	my $minPokedex = $minPokedexs[$i];
	my $maxPokedex = $maxPokedexs[$i];
	
	for(my $j = $minPokedex; $j <= $maxPokedex; $j++)
	{
		my $evolutions = $$pokemonEvolutions{$j};
		
		for my $evolution (@{$evolutions}) {
			processEvolution($j, $evolution, $pokemonEvolutions, $pokemonMoves);
		}
	}
}

#coalesce the moves by generation into flat lists for comparing cross gen.
my %movesByGen = ();

for(my $i = 0; $i <= $#pokemonMovess; $i++)
{
	my $gen = $gens[$i];
	my $rom = $roms[$i];
	my $pokemonMoves = $pokemonMovess[$i];
	if(!(defined $movesByGen{$gen}) || !(exists $movesByGen{$gen}))
	{
		my %pokemonMoves = ();
		$movesByGen{$gen} = \%pokemonMoves;
	}
	my $movesByCurGen = $movesByGen{$gen};
	
	for my $j (keys %{$pokemonMoves})
	{
		my $moveset = $$pokemonMoves{$j};
		
		if(!(defined $$movesByCurGen{$j}) || !(exists $$movesByCurGen{$j}))
		{
			my @moves = ();
			$$movesByCurGen{$j} = \@moves;
		}
		
		push(@{$$movesByCurGen{$j}}, @{$moveset});
		my @uniqueMoves = uniq(@{$$movesByCurGen{$j}});
		$$movesByCurGen{$j} = \@uniqueMoves;
	}
}

# figure out moves that exist in one variation but not another in the same gen.
my @movesSpecificToVersion = ();

sub arrayexists {
	my ($element, $arrRef) = @_;
	
	my @elements = grep { $_ eq $element } @{$arrRef};

	return (@elements);
}

for(my $i = 0; $i <= $#pokemonMovess; $i++)
{
	my $pokemonMovesI = $pokemonMovess[$i];
	
	if(!(defined $movesSpecificToVersion[$i]) || !(exists $movesSpecificToVersion[$i]))
	{
		my %pokemonMoves = ();
		push(@movesSpecificToVersion, \%pokemonMoves);
	}
	my $movesByVersion = $movesSpecificToVersion[$i];
	
	for(my $j = 0; $j <= $#pokemonMovess; $j++)
	{
		if($i == $j)
		{
			next;
		}

		my $pokemonMovesJ = $pokemonMovess[$j];
		my $genI = $gens[$i];
		my $genJ = $gens[$j];
		my $romI = $roms[$i];
		my $romJ = $roms[$j];
		
		if($genI == $genJ)
		{
			for my $k (keys %{$pokemonMovesI})
			{
				my $movesetI = $$pokemonMovesI{$k};
				my $movesetJ = $$pokemonMovesJ{$k};
				
				if(!(defined $$movesByVersion{$k}) || !(exists $$movesByVersion{$k}))
				{
					my @moves = ();
					$$movesByVersion{$k} = \@moves;
				}
				
				my @tradeMoves = grep { !arrayexists($_, $movesetI) } @{$movesetJ}; 
				$$movesByVersion{$k} = \@tradeMoves;
			}
		}
	}
}

# figure out the moves that exist in the other gen, but not the current.
my @movesSpecificToVersionGeneration = ();

for(my $i = 0; $i <= $#pokemonMovess; $i++)
{
	my $gen = $gens[$i];
	my $othergen = $othergens[$i];
	my $rom = $roms[$i];
	my $pokemonMoves = $pokemonMovess[$i];
	my $otherGenPokemonMoves = $movesByGen{$othergen};
	my $moveConstantsLookup = $moveConstantsLookups[$i];
	my @moveConstants = values %{$moveConstantsLookup};
	
	if(!(defined $movesSpecificToVersionGeneration[$i]) || !(exists $movesSpecificToVersionGeneration[$i]))
	{
		my %pokemonMoves = ();
		push(@movesSpecificToVersionGeneration, \%pokemonMoves);
	}
	my $movesByGenerationVersion = $movesSpecificToVersionGeneration[$i];
	
	for my $j (keys %{$pokemonMoves})
	{
		my $moveset = $$pokemonMoves{$j};
		
		if(!(defined $$movesByGenerationVersion{$j}) || !(exists $$movesByGenerationVersion{$j}))
		{
			my @moves = ();
			$$movesByGenerationVersion{$j} = \@moves;
		}
		
		my $othergenmoveset = $$otherGenPokemonMoves{$j};
		my @possibleTradeMoves = grep { arrayexists($_, \@moveConstants) } @{$othergenmoveset};
		
		my @tradeMoves = grep { !arrayexists($_, $moveset) } @possibleTradeMoves;
		
		$$movesByGenerationVersion{$j} = \@tradeMoves;
		#print("gen: $gen, rom: $rom, pokedex: $j, tradeMoves: " . Dumper(\@tradeMoves) . "\n");
	}
}

for my $i (0..$#dissassemblydirs)
{
	my $disassembyDir = $dissassemblydirs[$i];
	my $pokemonNames = $pokemonNamess[$i];
	my $minPokemonIndex = $minPokemonIndexs[$i];
	my $maxPokemonIndex = $maxPokemonIndexs[$i];
	my $pokedexOrder = $pokedexOrders[$i];
	
	open(my $pokemonnamesfh, "<:encoding(utf8)", "$disassembyDir/data/pokemon/names.asm") or die "Could not open $disassembyDir/data/pokemon/names.asm: $!";

	my $curPokemonIdx = 1;
	for(my $i = $minPokemonIndex; $i <= $maxPokemonIndex; $i++)
	{
		$$pokemonNames{$i} = "";
	}

	while(<$pokemonnamesfh>) {
		my $line = $_;
		if($line =~ /^\s+db\s+"([^\"]*)"\s*/g)
		{
			my $name = $1;
			$name =~ s/@//g;
			$name =~ s/([^\x00-\x7F])/sprintf "\\x{%04x}",ord($1)/eg;
			my $pokedex = $$pokedexOrder{$curPokemonIdx};
			$$pokemonNames{$pokedex} = $name;
			$curPokemonIdx = ($curPokemonIdx + 1) % 256;
		}
	}
}

#print(Dumper(\@movesLookups, \@moveConstantsLookups, \@tmsDatas, \@hmsDatas, \@mtsDatas, \@tmToMoveConstMaps, \@hmToMoveConstMaps, \@mtToMoveConstMaps, \@moveConstToTmMaps, \@moveConstToHmMaps, \@moveConstToMTMaps));
#print(Dumper(\@numTMsHMsMTss, \@numTMss, \@numHMss, \@numMTss));
#print(Dumper(\@pokedexOrders));
#print(Dumper(\@indexOrders));
#print(Dumper(\@pokemonInitialMovess, \@pokemonTMss, \@pokemonHMss, \@pokemonMTss));
#print(Dumper(\@pokemonInitialMovess));
#print(Dumper(\@pokemonLevelUpMovess));
#print(Dumper(\@pokemonEggMovess));
#print(Dumper(\@pokemonMovess));
#print(Dumper(\@pokemonEvolutionss));
#print(Dumper(\%movesByGen));
#print(Dumper(\@movesSpecificToVersion));
#print(Dumper(\@movesSpecificToVersionGeneration));
#print(Dumper(\%eventPokemonByGen));
#print(Dumper(\@pokemonNamess));

for my $i (0..$#movesSpecificToVersion)
{
	print("trade moves[$games[$i]]:\n");
	my $minPokedex = $minPokedexs[$i];
	my $maxPokedex = $maxPokedexs[$i];
	my $pokemonNames = $pokemonNamess[$i];
	my $indexOrder = $indexOrders[$i];
	my $movesLookup = $movesLookups[$i];
	my %indexes = ();
	for(my $j = 0; $j <= 255; $j++)
	{
		$indexes{$j} = 0;
	}
	for my $j ($minPokedex..$maxPokedex)
	{
		$indexes{$j} = $$indexOrder{$j};
	}
	my @indexeskeys = sort { $indexes{$a} <=> $indexes{$b} } (keys %indexes);
	
	print("\t{\n");
	for my $j (@indexeskeys)
	{
		if((exists $indexes{$j}) && (defined $$indexOrder{$j}) && $$indexOrder{$j} && (scalar @{$movesSpecificToVersion[$i]{$j}} != 0))
		{
			printf("\t\t% 3d: [\n", $indexes{$j});
			for my $move (@{$movesSpecificToVersion[$i]{$j}})
			{
				print("\t\t\t" . $$movesLookup{$move} . ",\n");
			}
			printf("\t\t     ], // %s\n", $$pokemonNames{$j});
		}
	}
	print("\t},\n\n");
}

for my $i (0..$#movesSpecificToVersionGeneration)
{
	print("cross gen trade moves[$games[$i]]:\n");
	my $minPokedex = $minPokedexs[$i];
	my $maxPokedex = $maxPokedexs[$i];
	my $pokemonNames = $pokemonNamess[$i];
	my $indexOrder = $indexOrders[$i];
	my $movesLookup = $movesLookups[$i];
	my %indexes = ();
	for(my $j = 0; $j <= 255; $j++)
	{
		$indexes{$j} = 0;
	}
	for my $j ($minPokedex..$maxPokedex)
	{
		$indexes{$j} = $$indexOrder{$j};
	}
	my @indexeskeys = sort { $indexes{$a} <=> $indexes{$b} } (keys %indexes);
	
	print("\t{\n");
	for my $j (@indexeskeys)
	{
		if((exists $indexes{$j}) && (defined $indexes{$j}) && $indexes{$j} && (scalar @{$movesSpecificToVersionGeneration[$i]{$j}} != 0))
		{
			printf("\t\t% 3d: [\n", $indexes{$j});
			for my $move (@{$movesSpecificToVersionGeneration[$i]{$j}})
			{
				print("\t\t\t" . $$movesLookup{$move} . ",\n");
			}
			printf("\t\t     ], // %s\n", $$pokemonNames{$j});
		}
	}
	print("\t},\n\n");
}