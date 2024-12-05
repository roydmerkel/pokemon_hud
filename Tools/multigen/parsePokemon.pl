#!/usr/bin/perl
use utf8;
use warnings;
use strict;
use Data::Dumper qw(Dumper);
use List::Util qw(uniq min max);
use Fcntl qw(SEEK_SET SEEK_CUR SEEK_END);

my $debug = (1 == 0);
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

my $POKEMON_BASE_STATS_RED_START = 0x383DE;
my $POKEMON_BASE_STATS_YELLOW_START = 0x383DE;
my $POKEMON_BASE_STATS_CRYSTAL_START = 0x51424;
my $POKEMON_BASE_STATS_GOLD_START = 0x51B0B;
my $POKEMON_BASE_STATS_GEN1_ENTRY_OFFSET = 0x383FA - 0x383DE;
my $POKEMON_BASE_STATS_GEN2_ENTRY_OFFSET = 0x51444 - 0x51424;
my $POKEMON_BASE_STATS_RED_MEMORY_OFFSET = 0x43de;
my $POKEMON_BASE_STATS_YELLOW_MEMORY_OFFSET = 0x43de;
my $POKEMON_BASE_STATS_GOLD_MEMORY_OFFSET = 0x5b0b;
my $POKEMON_BASE_STATS_CRYSTAL_MEMORY_OFFSET = 0x5424;

my $POKEMON_BONUS_POKEMON_BASE_STATS_RED_START = 0x425B;
my $POKEMON_BONUS_POKEMON_BASE_STATS_YELLOW_START = 0x39446;
my $POKEMON_BONUS_POKEMON_BASE_STATS_GOLD_START = 0x00;
my $POKEMON_BONUS_POKEMON_BASE_STATS_CRYSTAL_START = 0x00;

my $POKEMON_BONUS_POKEMON_POKEDEX_RED = 151;
my $POKEMON_BONUS_POKEMON_POKEDEX_YELLOW = 151;
my $POKEMON_BONUS_POKEMON_POKEDEX_GOLD = 0;
my $POKEMON_BONUS_POKEMON_POKEDEX_CRYSTAL = 0;

my $POKEMON_BONUS_POKEMON_INDEX_RED = 0x15;
my $POKEMON_BONUS_POKEMON_INDEX_YELLOW = 0x15;
my $POKEMON_BONUS_POKEMON_INDEX_GOLD = 0x00;
my $POKEMON_BONUS_POKEMON_INDEX_CRYSTAL = 0x00;
 
my $POKEMON_EVOS_ATTACKS_RED_START = 0x3B1D8;
my $POKEMON_EVOS_ATTACKS_YELLOW_START = 0x3B361;
my $POKEMON_EVOS_ATTACKS_CRYSTAL_START = 0x427A7;
my $POKEMON_EVOS_ATTACKS_GOLD_START = 0x429B3;
my $POKEMON_EVOS_ATTACKS_RED_MEMORY_START = 0x71d8;
my $POKEMON_EVOS_ATTACKS_YELLOW_MEMORY_START = 0x7361;
my $POKEMON_EVOS_ATTACKS_GOLD_MEMORY_START = 0x69b3;
my $POKEMON_EVOS_ATTACKS_CRYSTAL_MEMORY_START = 0x67a7;
my $POKEMON_EVOS_ATTACKS_POINTERS_RED_START = 0x3B05C;
my $POKEMON_EVOS_ATTACKS_POINTERS_YELLOW_START = 0x3B1E5;
my $POKEMON_EVOS_ATTACKS_POINTERS_CRYSTAL_START = 0x425B1;
my $POKEMON_EVOS_ATTACKS_POINTERS_GOLD_START = 0x427BD;
my $POKEMON_EVOS_ATTACKS_POINTERS_RED_MEMORY_START = 0x705c;
my $POKEMON_EVOS_ATTACKS_POINTERS_YELLOW_MEMORY_START = 0x71e5;
my $POKEMON_EVOS_ATTACKS_POINTERS_CRYSTAL_MEMORY_START = 0x65b1;
my $POKEMON_EVOS_ATTACKS_POINTERS_GOLD_MEMORY_START = 0x67bd;

my $POKEMON_EGG_MOVES_RED_START = 0x00;
my $POKEMON_EGG_MOVES_YELLOW_START = 0x00;
my $POKEMON_EGG_MOVES_CRYSTAL_START = 0x23D07;
my $POKEMON_EGG_MOVES_GOLD_START = 0x23BF4;
my $POKEMON_EGG_MOVES_POINTERS_RED_START = 0x00;
my $POKEMON_EGG_MOVES_POINTERS_YELLOW_START = 0x00;
my $POKEMON_EGG_MOVES_POINTERS_CRYSTAL_START = 0x23B11;
my $POKEMON_EGG_MOVES_GOLD_POINTERS_START = 0x239FE;
my $POKEMON_EGG_MOVES_POINTERS_RED_MEMORY_START = 0x00;
my $POKEMON_EGG_MOVES_POINTERS_YELLOW_MEMORY_START = 0x00;
my $POKEMON_EGG_MOVES_POINTERS_CRYSTAL_MEMORY_START = 0x7b11;
my $POKEMON_EGG_MOVES_GOLD_POINTERS_MEMORY_START = 0x79fe;

my $POKEMON_DEX_ORDER_TABLE_RED_START = 0x41024;
my $POKEMON_DEX_ORDER_TABLE_YELLOW_START = 0x410B1;
my $POKEMON_DEX_ORDER_TABLE_GOLD_START = 0x00;
my $POKEMON_DEX_ORDER_TABLE_CRYSTAL_START = 0x00;

my $NUM_POKEMON_INDEXES_RED = 190;
my $NUM_POKEMON_INDEXES_YELLOW = 190;
my $NUM_POKEMON_INDEXES_GOLD = 256;
my $NUM_POKEMON_INDEXES_CRYSTAL = 256;

my $POKEMON_BASE_STATS_START;
my $POKEMON_EVOS_ATTACKS_START;
my $POKEMON_EVOS_ATTACKS_MEMORY_START;
my $POKEMON_EVOS_ATTACKS_POINTERS_START;
my $POKEMON_EVOS_ATTACKS_POINTERS_MEMORY_START;
my $POKEMON_EGG_MOVES_START;
my $POKEMON_EGG_MOVES_POINTERS_START;
my $POKEMON_EGG_MOVES_POINTERS_MEMORY_START;
my $POKEMON_BASE_STATS_ENTRY_OFFSET;
my $POKEMON_BASE_STATS_MEMORY_OFFSET;

my $POKEMON_NAMES_RED_MEMORY_START = 0x421e;
my $POKEMON_NAMES_YELLOW_MEMORY_START = 0x4000;
my $POKEMON_NAMES_GOLD_MEMORY_START = 0x4b74;
my $POKEMON_NAMES_CRYSTAL_MEMORY_START = 0x7384;
my $POKEMON_RED_NAME_LENGTH = 10;
my $POKEMON_YELLOW_NAME_LENGTH = 10;
my $POKEMON_GOLD_NAME_LENGTH = 10;
my $POKEMON_CRYSTAL_NAME_LENGTH = 10;

my $POKEDEX_ORDER_TABLE_START;

my $POKEMON_BONUS_POKEMON_BASE_STATS_START;
my $POKEMON_BONUS_POKEMON_POKEDEX;
my $POKEMON_BONUS_POKEMON_INDEX;
my $NUM_POKEMON_INDEXES;

my @POKEMON_RED_MOVES_MEMORY_MAP = ( 
	{ "start" => 0x0000, "end" => 0x3FFF, "rom_start" => 0x0000, "rom_end" => 0x3FFF },
	{ "start" => 0x4000, "end" => 0x7FFF, "rom_start" => 0x38000, "rom_end" => 0x3BFFF },
	{ "start" => 0x8000, "end" => 0xBFFF }
);

my @POKEMON_RED_STATS_MEMORY_MAP = ( 
	{ "start" => 0x0000, "end" => 0x3FFF, "rom_start" => 0x0000, "rom_end" => 0x3FFF },
	{ "start" => 0x4000, "end" => 0x7FFF, "rom_start" => 0x38000, "rom_end" => 0x3BFFF },
	{ "start" => 0x8000, "end" => 0xBFFF }
);

my @POKEMON_RED_NAMES_MEMORY_MAP = ( 
	{ "start" => 0x0000, "end" => 0x3FFF, "rom_start" => 0x0000, "rom_end" => 0x3FFF },
	{ "start" => 0x4000, "end" => 0x7FFF, "rom_start" => 0x1C000, "rom_end" => 0x1FFFF },
	{ "start" => 0x8000, "end" => 0xBFFF },
);

my @POKEMON_RED_EGG_MOVE_POINTERS_MEMORY_MAP = ( 
);

my @POKEMON_RED_EGG_MOVES_MEMORY_MAP = ( 
);

my @POKEMON_YELLOW_MOVES_MEMORY_MAP = ( 
	{ "start" => 0x0000, "end" => 0x3FFF, "rom_start" => 0x0000, "rom_end" => 0x3FFF },
	{ "start" => 0x4000, "end" => 0x7FFF, "rom_start" => 0x38000, "rom_end" => 0x3BFFF },
	{ "start" => 0x8000, "end" => 0xBFFF },
);

my @POKEMON_YELLOW_STATS_MEMORY_MAP = ( 
	{ "start" => 0x0000, "end" => 0x3FFF, "rom_start" => 0x0000, "rom_end" => 0x3FFF },
	{ "start" => 0x4000, "end" => 0x7FFF, "rom_start" => 0x38000, "rom_end" => 0x3BFFF },
	{ "start" => 0x8000, "end" => 0xBFFF },
);

my @POKEMON_YELLOW_NAMES_MEMORY_MAP = ( 
	{ "start" => 0x0000, "end" => 0x3FFF, "rom_start" => 0x0000, "rom_end" => 0x3FFF },
	{ "start" => 0x4000, "end" => 0x7FFF, "rom_start" => 0xE8000, "rom_end" => 0xEBFFF },
	{ "start" => 0x8000, "end" => 0xBFFF },
);

my @POKEMON_YELLOW_EGG_MOVE_POINTERS_MEMORY_MAP = ( 
);

my @POKEMON_YELLOW_EGG_MOVES_MEMORY_MAP = ( 
);

my @POKEMON_CRYSTAL_STATS_MEMORY_MAP = ( 
	{ "start" => 0x0000, "end" => 0x3FFF, "rom_start" => 0x0000, "rom_end" => 0x3FFF },
	{ "start" => 0x4000, "end" => 0x7FFF, "rom_start" => 0x50000, "rom_end" => 0x53FFF },
	{ "start" => 0x9000, "end" => 0x9FFF },
	{ "start" => 0xA000, "end" => 0xBFFF },
	{ "start" => 0xC000, "end" => 0xCFFF },
	{ "start" => 0xD000, "end" => 0xFF7F },
	{ "start" => 0xFF80, "end" => 0xFFFF },
);

my @POKEMON_CRYSTAL_MOVES_MEMORY_MAP = ( 
	{ "start" => 0x0000, "end" => 0x3FFF, "rom_start" => 0x0000, "rom_end" => 0x3FFF },
	{ "start" => 0x4000, "end" => 0x7FFF, "rom_start" => 0x40000, "rom_end" => 0x43FFF },
	{ "start" => 0x8000, "end" => 0x9FFF },
	{ "start" => 0xA000, "end" => 0xBFFF },
	{ "start" => 0xC000, "end" => 0xCFFF },
	{ "start" => 0xD000, "end" => 0xFF7F },
	{ "start" => 0xFF80, "end" => 0xFFFF },
);

my @POKEMON_CRYSTAL_NAMES_MEMORY_MAP = ( 
	{ "start" => 0x0000, "end" => 0x3FFF, "rom_start" => 0x0000, "rom_end" => 0x3FFF },
	{ "start" => 0x4000, "end" => 0x7FFF, "rom_start" => 0x50000, "rom_end" => 0x53FFF },
	{ "start" => 0x8000, "end" => 0x9FFF },
	{ "start" => 0xA000, "end" => 0xBFFF },
	{ "start" => 0xC000, "end" => 0xCFFF },
	{ "start" => 0xD000, "end" => 0xFF7F },
	{ "start" => 0xFF80, "end" => 0xFFFF },
);

my @POKEMON_CRYSTAL_EGG_MOVE_POINTERS_MEMORY_MAP = ( 
	{ "start" => 0x0000, "end" => 0x3FFF, "rom_start" => 0x0000, "rom_end" => 0x3FFF },
	{ "start" => 0x4000, "end" => 0x7FFF, "rom_start" => 0x20000, "rom_end" => 0x23FFF },
	{ "start" => 0x8000, "end" => 0x9FFF },
	{ "start" => 0xA000, "end" => 0xBFFF },
	{ "start" => 0xC000, "end" => 0xCFFF },
	{ "start" => 0xD000, "end" => 0xFF7F },
	{ "start" => 0xFF80, "end" => 0xFFFF },
);

my @POKEMON_CRYSTAL_EGG_MOVES_MEMORY_MAP = ( 
	{ "start" => 0x0000, "end" => 0x3FFF, "rom_start" => 0x0000, "rom_end" => 0x3FFF },
	{ "start" => 0x4000, "end" => 0x7FFF, "rom_start" => 0x20000, "rom_end" => 0x23FFF },
	{ "start" => 0x8000, "end" => 0x9FFF },
	{ "start" => 0xA000, "end" => 0xBFFF },
	{ "start" => 0xC000, "end" => 0xCFFF },
	{ "start" => 0xD000, "end" => 0xFF7F },
	{ "start" => 0xFF80, "end" => 0xFFFF },
);

my @POKEMON_GOLD_STATS_MEMORY_MAP = ( 
	{ "start" => 0x0000, "end" => 0x3FFF, "rom_start" => 0x0000, "rom_end" => 0x3FFF },
	{ "start" => 0x4000, "end" => 0x7FFF, "rom_start" => 0x50000, "rom_end" => 0x53FFF },
	{ "start" => 0x8000, "end" => 0x9FFF },
	{ "start" => 0xA000, "end" => 0xBFFF },
	{ "start" => 0xC000, "end" => 0xCFFF },
	{ "start" => 0xD000, "end" => 0xFF7F },
	{ "start" => 0xFF80, "end" => 0xFFFF },
);

my @POKEMON_GOLD_MOVES_MEMORY_MAP = ( 
	{ "start" => 0x0000, "end" => 0x3FFF, "rom_start" => 0x0000, "rom_end" => 0x3FFF },
	{ "start" => 0x4000, "end" => 0x7FFF, "rom_start" => 0x40000, "rom_end" => 0x43FFF },
	{ "start" => 0x8000, "end" => 0x9FFF },
	{ "start" => 0xA000, "end" => 0xBFFF },
	{ "start" => 0xC000, "end" => 0xCFFF },
	{ "start" => 0xD000, "end" => 0xFF7F },
	{ "start" => 0xFF80, "end" => 0xFFFF },
);

my @POKEMON_GOLD_NAMES_MEMORY_MAP = ( 
	{ "start" => 0x0000, "end" => 0x3FFF, "rom_start" => 0x0000, "rom_end" => 0x3FFF },
	{ "start" => 0x4000, "end" => 0x7FFF, "rom_start" => 0x1B0000, "rom_end" => 0x1B3FFF },
	{ "start" => 0x8000, "end" => 0x9FFF },
	{ "start" => 0xA000, "end" => 0xBFFF },
	{ "start" => 0xC000, "end" => 0xCFFF },
	{ "start" => 0xD000, "end" => 0xFF7F },
	{ "start" => 0xFF80, "end" => 0xFFFF },
);

my @POKEMON_GOLD_EGG_MOVE_POINTERS_MEMORY_MAP = ( 
	{ "start" => 0x0000, "end" => 0x3FFF, "rom_start" => 0x0000, "rom_end" => 0x3FFF },
	{ "start" => 0x4000, "end" => 0x7FFF, "rom_start" => 0x20000, "rom_end" => 0x23FFF },
	{ "start" => 0x8000, "end" => 0x9FFF },
	{ "start" => 0xA000, "end" => 0xBFFF },
	{ "start" => 0xC000, "end" => 0xCFFF },
	{ "start" => 0xD000, "end" => 0xFF7F },
	{ "start" => 0xFF80, "end" => 0xFFFF },
);

my @POKEMON_GOLD_EGG_MOVES_MEMORY_MAP = ( 
	{ "start" => 0x0000, "end" => 0x3FFF, "rom_start" => 0x0000, "rom_end" => 0x3FFF },
	{ "start" => 0x4000, "end" => 0x7FFF, "rom_start" => 0x20000, "rom_end" => 0x23FFF },
	{ "start" => 0x8000, "end" => 0x9FFF },
	{ "start" => 0xA000, "end" => 0xBFFF },
	{ "start" => 0xC000, "end" => 0xCFFF },
	{ "start" => 0xD000, "end" => 0xFF7F },
	{ "start" => 0xFF80, "end" => 0xFFFF },
);

my $POKEMON_MOVES_MEMORY_MAP;
my $POKEMON_STATS_MEMORY_MAP;
my $POKEMON_NAMES_MEMORY_MAP;
my $POKEMON_EGG_MOVE_POINTERS_MEMORY_MAP;
my $POKEMON_EGG_MOVES_MEMORY_MAP;
my $POKEMON_MOVES_MEMORY_START;
my $POKEMON_MOVES_MEMORY_END;
my $POKEMON_STATS_MEMORY_START;
my $POKEMON_STATS_MEMORY_END;
my $POKEMON_NAMES_MEMORY_START;
my $POKEMON_NAMES_MEMORY_END;
my $POKEMON_EGG_MOVE_POINTERS_MEMORY_START;
my $POKEMON_EGG_MOVE_POINTERS_MEMORY_END;
my $POKEMON_EGG_MOVES_MEMORY_START;
my $POKEMON_EGG_MOVES_MEMORY_END;
my $POKEMON_NAME_LENGTH;
my $POKEMON_NAMES_MEMORY_OFFSET;

# parse the index order and constant names.
binmode(STDOUT, ":utf8") or die "Cannot set STDOUT to binary mode: $!";

if ($#ARGV != 1)
{
	print("argc: $#ARGV\n");
	print("wrong number of args: expected: $0 <rom file> <dissasembly root>\n");
	die();
}

my $romfile = $ARGV[0];
my $disassembyDir = $ARGV[1];

if(! -d $disassembyDir)
{
	print("unknown dissassembly dir: $disassembyDir\n");
	die();
}

# move and tm data lookup tables.
my %movesLookup = ();
my %moveConstantsLookup = ();
my %tmsData = ();
my %hmsData = ();
my %mtsData = ();
my %tmToMoveConstMap = ();
my %hmToMoveConstMap = ();
my %mtToMoveConstMap = ();
my %moveConstToTmMap = ();
my %moveConstToHmMap = ();
my %moveConstToMTMap = ();

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
    $movesLookup{$1} = hex($2);
	$moveConstantsLookup{hex($2)} = $1;
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
		if(!(defined($movesLookup{$moveKey})) || !(exists($movesLookup{$moveKey})))
		{
			print("missing move: $moveKey\n");
			die();
		}
		$tmsData{$curTM} = $movesLookup{$moveKey};
		$tmToMoveConstMap{$curTM} = $moveKey;
		$moveConstToTmMap{$moveKey} = $curTM;
		$curTM++;
	}
	elsif($line =~ /^\s*add_hm\s+([A-Za-z0-9_]+)\s*(;\s*)?/g)
	{
		my $moveKey = $1;
		if(!(defined($movesLookup{$moveKey})) || !(exists($movesLookup{$moveKey})))
		{
			print("missing move: $moveKey\n");
			die();
		}
		$hmsData{$curHM} = $movesLookup{$moveKey};
		$hmToMoveConstMap{$curHM} = $moveKey;
		$moveConstToHmMap{$moveKey} = $curHM;
		$curHM++;
	}
	elsif($line =~ /^\s*add_mt\s+([A-Za-z0-9_]+)\s*(;\s*)?/g)
	{
		my $moveKey = $1;
		if(!(defined($movesLookup{$moveKey})) || !(exists($movesLookup{$moveKey})))
		{
			print("missing move: $moveKey\n");
			die();
		}
		$mtsData{$curMT} = $movesLookup{$moveKey};
		$mtToMoveConstMap{$curMT} = $moveKey;
		$moveConstToMTMap{$moveKey} = $curMT;
		$curMT++;
	}
}
close($itemconstantsfh);
$itemconstantsfh = undef;

my $numTMsHMsMTs = scalar(keys(%tmsData)) + scalar(keys(%hmsData)) + scalar(keys(%mtsData));
my $numTMs = scalar(keys(%tmsData));
my $numHMs = scalar(keys(%hmsData));
my $numMTs = scalar(keys(%mtsData));

my $gen = 0;

#deterine which rom file we are using and the offsets of the base stats data in the pokemon rom file.
if($romfile =~ /(^.*?[\\\/])?[^\\\/]*[Rr][Ee][Dd][^\\\/]*$/)
{
	$POKEMON_BASE_STATS_START = $POKEMON_BASE_STATS_RED_START;
	$POKEMON_EVOS_ATTACKS_START = $POKEMON_EVOS_ATTACKS_RED_START;
	$POKEMON_EVOS_ATTACKS_MEMORY_START = $POKEMON_EVOS_ATTACKS_RED_MEMORY_START;
	$POKEMON_EVOS_ATTACKS_POINTERS_START = $POKEMON_EVOS_ATTACKS_POINTERS_RED_START;
	$POKEMON_EVOS_ATTACKS_POINTERS_MEMORY_START = $POKEMON_EVOS_ATTACKS_POINTERS_RED_MEMORY_START;
	$POKEMON_EGG_MOVES_START = $POKEMON_EGG_MOVES_RED_START;
	$POKEMON_EGG_MOVES_POINTERS_START = $POKEMON_EGG_MOVES_POINTERS_RED_START;
	$POKEMON_EGG_MOVES_POINTERS_MEMORY_START = $POKEMON_EGG_MOVES_POINTERS_RED_MEMORY_START;
	$POKEMON_BASE_STATS_ENTRY_OFFSET = $POKEMON_BASE_STATS_GEN1_ENTRY_OFFSET;
	$POKEDEX_ORDER_TABLE_START = $POKEMON_DEX_ORDER_TABLE_RED_START;
	$POKEMON_BONUS_POKEMON_BASE_STATS_START = $POKEMON_BONUS_POKEMON_BASE_STATS_RED_START;
	$POKEMON_BONUS_POKEMON_POKEDEX = $POKEMON_BONUS_POKEMON_POKEDEX_RED;
	$POKEMON_BONUS_POKEMON_INDEX = $POKEMON_BONUS_POKEMON_INDEX_RED;
	$NUM_POKEMON_INDEXES = $NUM_POKEMON_INDEXES_RED;
	$POKEMON_MOVES_MEMORY_MAP = \@POKEMON_RED_MOVES_MEMORY_MAP;
	$POKEMON_STATS_MEMORY_MAP = \@POKEMON_RED_STATS_MEMORY_MAP;
	$POKEMON_NAMES_MEMORY_MAP = \@POKEMON_RED_NAMES_MEMORY_MAP;
	$POKEMON_EGG_MOVE_POINTERS_MEMORY_MAP = \@POKEMON_RED_EGG_MOVE_POINTERS_MEMORY_MAP;
	$POKEMON_EGG_MOVES_MEMORY_MAP = \@POKEMON_RED_EGG_MOVES_MEMORY_MAP;
	$POKEMON_BASE_STATS_MEMORY_OFFSET = $POKEMON_BASE_STATS_RED_MEMORY_OFFSET;
	$POKEMON_NAME_LENGTH = $POKEMON_RED_NAME_LENGTH;
	$POKEMON_NAMES_MEMORY_OFFSET = $POKEMON_NAMES_RED_MEMORY_START;
	$gen = 1;
	print("red\n");
}
elsif($romfile =~ /(^.*?[\\\/])?[^\\\/]*[Yy][Ee][Ll][Ll][Oo][Ww][^\\\/]*$/)
{
	$POKEMON_BASE_STATS_START = $POKEMON_BASE_STATS_YELLOW_START;
	$POKEMON_EVOS_ATTACKS_START = $POKEMON_EVOS_ATTACKS_YELLOW_START;
	$POKEMON_EVOS_ATTACKS_MEMORY_START = $POKEMON_EVOS_ATTACKS_YELLOW_MEMORY_START;
	$POKEMON_EVOS_ATTACKS_POINTERS_START = $POKEMON_EVOS_ATTACKS_POINTERS_YELLOW_START;
	$POKEMON_EVOS_ATTACKS_POINTERS_MEMORY_START = $POKEMON_EVOS_ATTACKS_POINTERS_YELLOW_MEMORY_START;
	$POKEMON_EGG_MOVES_START = $POKEMON_EGG_MOVES_YELLOW_START;
	$POKEMON_EGG_MOVES_POINTERS_START = $POKEMON_EGG_MOVES_POINTERS_YELLOW_START;
	$POKEMON_EGG_MOVES_POINTERS_MEMORY_START = $POKEMON_EGG_MOVES_POINTERS_YELLOW_MEMORY_START;
	$POKEMON_BASE_STATS_ENTRY_OFFSET = $POKEMON_BASE_STATS_GEN1_ENTRY_OFFSET;
	$POKEDEX_ORDER_TABLE_START = $POKEMON_DEX_ORDER_TABLE_YELLOW_START;
	$POKEMON_BONUS_POKEMON_BASE_STATS_START = $POKEMON_BONUS_POKEMON_BASE_STATS_YELLOW_START;
	$POKEMON_BONUS_POKEMON_POKEDEX = $POKEMON_BONUS_POKEMON_POKEDEX_YELLOW;
	$POKEMON_BONUS_POKEMON_INDEX = $POKEMON_BONUS_POKEMON_INDEX_YELLOW;
	$NUM_POKEMON_INDEXES = $NUM_POKEMON_INDEXES_YELLOW;
	$POKEMON_MOVES_MEMORY_MAP = \@POKEMON_YELLOW_MOVES_MEMORY_MAP;
	$POKEMON_STATS_MEMORY_MAP = \@POKEMON_YELLOW_STATS_MEMORY_MAP;
	$POKEMON_NAMES_MEMORY_MAP = \@POKEMON_YELLOW_NAMES_MEMORY_MAP;
	$POKEMON_EGG_MOVE_POINTERS_MEMORY_MAP = \@POKEMON_YELLOW_EGG_MOVE_POINTERS_MEMORY_MAP;
	$POKEMON_EGG_MOVES_MEMORY_MAP = \@POKEMON_YELLOW_EGG_MOVES_MEMORY_MAP;
	$POKEMON_BASE_STATS_MEMORY_OFFSET = $POKEMON_BASE_STATS_YELLOW_MEMORY_OFFSET;
	$POKEMON_NAME_LENGTH = $POKEMON_YELLOW_NAME_LENGTH;
	$POKEMON_NAMES_MEMORY_OFFSET = $POKEMON_NAMES_YELLOW_MEMORY_START;
	$gen = 1;
	print("yellow\n");
}
elsif($romfile =~ /(^.*?[\\\/])?[^\\\/]*[Gg][Oo][Ll][Dd][^\\\/]*$/)
{
	$POKEMON_BASE_STATS_START = $POKEMON_BASE_STATS_GOLD_START;
	$POKEMON_EVOS_ATTACKS_START = $POKEMON_EVOS_ATTACKS_GOLD_START;
	$POKEMON_EVOS_ATTACKS_MEMORY_START = $POKEMON_EVOS_ATTACKS_GOLD_MEMORY_START;
	$POKEMON_EVOS_ATTACKS_POINTERS_START = $POKEMON_EVOS_ATTACKS_POINTERS_GOLD_START;
	$POKEMON_EVOS_ATTACKS_POINTERS_MEMORY_START = $POKEMON_EVOS_ATTACKS_POINTERS_GOLD_MEMORY_START;
	$POKEMON_EGG_MOVES_START = $POKEMON_EGG_MOVES_GOLD_START;
	$POKEMON_EGG_MOVES_POINTERS_START = $POKEMON_EGG_MOVES_GOLD_POINTERS_START;
	$POKEMON_EGG_MOVES_POINTERS_MEMORY_START = $POKEMON_EGG_MOVES_GOLD_POINTERS_MEMORY_START;
	$POKEMON_BASE_STATS_ENTRY_OFFSET = $POKEMON_BASE_STATS_GEN2_ENTRY_OFFSET;
	$POKEDEX_ORDER_TABLE_START = $POKEMON_DEX_ORDER_TABLE_GOLD_START;
	$POKEMON_BONUS_POKEMON_BASE_STATS_START = $POKEMON_BONUS_POKEMON_BASE_STATS_GOLD_START;
	$POKEMON_BONUS_POKEMON_POKEDEX = $POKEMON_BONUS_POKEMON_POKEDEX_GOLD;
	$POKEMON_BONUS_POKEMON_INDEX = $POKEMON_BONUS_POKEMON_INDEX_GOLD;
	$NUM_POKEMON_INDEXES = $NUM_POKEMON_INDEXES_GOLD;
	$POKEMON_MOVES_MEMORY_MAP = \@POKEMON_GOLD_MOVES_MEMORY_MAP;
	$POKEMON_STATS_MEMORY_MAP = \@POKEMON_GOLD_STATS_MEMORY_MAP;
	$POKEMON_NAMES_MEMORY_MAP = \@POKEMON_GOLD_NAMES_MEMORY_MAP;
	$POKEMON_EGG_MOVE_POINTERS_MEMORY_MAP = \@POKEMON_GOLD_EGG_MOVE_POINTERS_MEMORY_MAP;
	$POKEMON_EGG_MOVES_MEMORY_MAP = \@POKEMON_GOLD_EGG_MOVES_MEMORY_MAP;
	$POKEMON_BASE_STATS_MEMORY_OFFSET = $POKEMON_BASE_STATS_GOLD_MEMORY_OFFSET;
	$POKEMON_NAME_LENGTH = $POKEMON_GOLD_NAME_LENGTH;
	$POKEMON_NAMES_MEMORY_OFFSET = $POKEMON_NAMES_GOLD_MEMORY_START;
	$gen = 2;
	print("gold\n");
}
elsif($romfile =~ /^(.*?[\\\/])?[^\\\/]*[Cc][Rr][Yy][Ss][Tt][Aa][Ll][^\\\/]*$/)
{
	$POKEMON_BASE_STATS_START = $POKEMON_BASE_STATS_CRYSTAL_START;
	$POKEMON_EVOS_ATTACKS_START = $POKEMON_EVOS_ATTACKS_CRYSTAL_START;
	$POKEMON_EVOS_ATTACKS_MEMORY_START = $POKEMON_EVOS_ATTACKS_CRYSTAL_MEMORY_START;
	$POKEMON_EVOS_ATTACKS_POINTERS_START = $POKEMON_EVOS_ATTACKS_POINTERS_CRYSTAL_START;
	$POKEMON_EVOS_ATTACKS_POINTERS_MEMORY_START = $POKEMON_EVOS_ATTACKS_POINTERS_CRYSTAL_MEMORY_START;
	$POKEMON_EGG_MOVES_START = $POKEMON_EGG_MOVES_CRYSTAL_START;
	$POKEMON_EGG_MOVES_POINTERS_START = $POKEMON_EGG_MOVES_POINTERS_CRYSTAL_START;
	$POKEMON_EGG_MOVES_POINTERS_MEMORY_START = $POKEMON_EGG_MOVES_POINTERS_CRYSTAL_MEMORY_START;
	$POKEMON_BASE_STATS_ENTRY_OFFSET = $POKEMON_BASE_STATS_GEN2_ENTRY_OFFSET;
	$POKEDEX_ORDER_TABLE_START = $POKEMON_DEX_ORDER_TABLE_CRYSTAL_START;
	$POKEMON_BONUS_POKEMON_BASE_STATS_START = $POKEMON_BONUS_POKEMON_BASE_STATS_CRYSTAL_START;
	$POKEMON_BONUS_POKEMON_POKEDEX = $POKEMON_BONUS_POKEMON_POKEDEX_CRYSTAL;
	$POKEMON_BONUS_POKEMON_INDEX = $POKEMON_BONUS_POKEMON_INDEX_CRYSTAL;
	$NUM_POKEMON_INDEXES = $NUM_POKEMON_INDEXES_CRYSTAL;
	$POKEMON_MOVES_MEMORY_MAP = \@POKEMON_CRYSTAL_MOVES_MEMORY_MAP;
	$POKEMON_STATS_MEMORY_MAP = \@POKEMON_CRYSTAL_STATS_MEMORY_MAP;
	$POKEMON_NAMES_MEMORY_MAP = \@POKEMON_CRYSTAL_NAMES_MEMORY_MAP;
	$POKEMON_EGG_MOVE_POINTERS_MEMORY_MAP = \@POKEMON_CRYSTAL_EGG_MOVE_POINTERS_MEMORY_MAP;
	$POKEMON_EGG_MOVES_MEMORY_MAP = \@POKEMON_CRYSTAL_EGG_MOVES_MEMORY_MAP;
	$POKEMON_BASE_STATS_MEMORY_OFFSET = $POKEMON_BASE_STATS_CRYSTAL_MEMORY_OFFSET;
	$POKEMON_NAME_LENGTH = $POKEMON_CRYSTAL_NAME_LENGTH;
	$POKEMON_NAMES_MEMORY_OFFSET = $POKEMON_NAMES_CRYSTAL_MEMORY_START;
	$gen = 2;
	print("crystal\n");
}
else
{
	print("unknown rom file: $romfile\n");
	die();
}
$POKEMON_MOVES_MEMORY_START = min(map { $$_{"start"}; } @{$POKEMON_MOVES_MEMORY_MAP});
$POKEMON_MOVES_MEMORY_END = max(map { $$_{"end"}; } @{$POKEMON_MOVES_MEMORY_MAP});
$POKEMON_STATS_MEMORY_START = min(map { $$_{"start"}; } @{$POKEMON_STATS_MEMORY_MAP});
$POKEMON_STATS_MEMORY_END = max(map { $$_{"end"}; } @{$POKEMON_STATS_MEMORY_MAP});
$POKEMON_NAMES_MEMORY_START = min(map { $$_{"start"}; } @{$POKEMON_NAMES_MEMORY_MAP});
$POKEMON_NAMES_MEMORY_END = max(map { $$_{"end"}; } @{$POKEMON_NAMES_MEMORY_MAP});
$POKEMON_EGG_MOVE_POINTERS_MEMORY_START = min(map { $$_{"start"}; } @{$POKEMON_EGG_MOVE_POINTERS_MEMORY_MAP});
$POKEMON_EGG_MOVE_POINTERS_MEMORY_END = max(map { $$_{"end"}; } @{$POKEMON_EGG_MOVE_POINTERS_MEMORY_MAP});
$POKEMON_EGG_MOVES_MEMORY_START = min(map { $$_{"start"}; } @{$POKEMON_EGG_MOVES_MEMORY_MAP});
$POKEMON_EGG_MOVES_MEMORY_END = max(map { $$_{"end"}; } @{$POKEMON_EGG_MOVES_MEMORY_MAP});

my %pokedexToIndexLookup = ();
my %indexToPokedexLookup = ();

# read the index<->pokedex mapping for gen 1 carts.
if($POKEDEX_ORDER_TABLE_START)
{
	open(my $pokemonindexlookupfh, '<:raw', $romfile) or die "Could not open $romfile: $!";
	binmode($pokemonindexlookupfh) or (close($pokemonindexlookupfh), die "Cannot set $pokemonindexlookupfh to binary mode: $!");
	seek($pokemonindexlookupfh, 0, SEEK_SET) or (close($pokemonindexlookupfh), die "Cannot seek $pokemonindexlookupfh to move names: $!");
	my @pokemonIndexDataLookupBytes = ();
	my $pokemonIndexDataLength = 0;
	$bytesread = read($pokemonindexlookupfh, $buffer, 102400);
	while($bytesread)
	{
		$pokemonIndexDataLength += $bytesread;
		for(my $i = 0; $i < $bytesread; $i++)
		{
				push(@pokemonIndexDataLookupBytes, ord(substr($buffer, $i, 1)));
		}
		
		$bytesread = read($pokemonindexlookupfh, $buffer, 102400);
	}
	if(!defined $bytesread)
	{
		die("Read failed for $pokemonindexlookupfh: $!");
	}

	close($pokemonindexlookupfh);
	$pokemonindexlookupfh = undef;

	# define pokedex <-> index as the cart defines them.
	for(my $index = 1; $index <= 256; $index++)
	{
		my $offset = $index - 1;
		if($offset < 0)
		{
			$offset += 256;
		}
		my $romoffset = $POKEDEX_ORDER_TABLE_START + $offset;
		my $byte = $pokemonIndexDataLookupBytes[$romoffset];
		$indexToPokedexLookup{$index % 256} = $byte;
	}
	for(my $pokedex = 1; $pokedex <= 256; $pokedex++)
	{
		my $offset = 0;
		my $romoffset = $POKEDEX_ORDER_TABLE_START + $offset;
		my $found = (1 == 0);
		
		while(!$found)
		{
			my $byte = $pokemonIndexDataLookupBytes[$romoffset];
			$offset++;
			$romoffset++;
			if($byte == ($pokedex % 256))
			{
				$found = (1 == 1);
			}
		}
		$pokedexToIndexLookup{$pokedex % 256} = $offset % 256;
	}
}
else
{
	for(my $i = 0; $i <= 255; $i++)
	{
		$pokedexToIndexLookup{$i} = $i;
		$indexToPokedexLookup{$i} = $i;
	}
}

# read the base stats directly from ROM
open(my $pokemonbasestatsfh, '<:raw', $romfile) or die "Could not open $romfile: $!";
binmode($pokemonbasestatsfh) or (close($pokemonbasestatsfh), die "Cannot set $pokemonbasestatsfh to binary mode: $!");
seek($pokemonbasestatsfh, 0, SEEK_SET) or (close($pokemonbasestatsfh), die "Cannot seek $pokemonbasestatsfh to move names: $!");
my @baseStatBytes = ();
my $baseDataLength = 0;
$bytesread = read($pokemonbasestatsfh, $buffer, 10240);
while($bytesread)
{
	$baseDataLength += $bytesread;
	for(my $i = 0; $i < $bytesread; $i++)
	{
			push(@baseStatBytes, ord(substr($buffer, $i, 1)));
	}
	
	$bytesread = read($pokemonbasestatsfh, $buffer, 10240);
}
if(!defined $bytesread)
{
	die("Read failed for $pokemonbasestatsfh: $!");
}

close($pokemonbasestatsfh);
$pokemonbasestatsfh = undef;

# use the memory map for the cart to read the rom into the memory state.
# initialize the memory image with zeros.
my @pokemonStatsMemoryData = ();
for(my $i = 0; $i <= $POKEMON_STATS_MEMORY_END; $i++)
{
	push(@pokemonStatsMemoryData, 0);
}

# copy the data from the segments.
for my $segment (@{$POKEMON_STATS_MEMORY_MAP})
{
	if(exists $$segment{"rom_start"} && defined $$segment{"rom_start"} && exists $$segment{"rom_end"} && defined $$segment{"rom_end"})
	{
		my $i = $$segment{"start"};
		my $j = $$segment{"rom_start"};
		for(; $j <= $$segment{"rom_end"}; $i++, $j++)
		{
			$pokemonStatsMemoryData[$i] = $baseStatBytes[$j];
		}
	}
}

# parse the stats into an array;
my %pokemonStats = ();
my %pokemonMoves = ();
for(my $index = 1; $index <= 256; $index++)
{
	my $pokedex = $indexToPokedexLookup{$index % 256};
	my %curPokemonStats = ();
	my %curPokemonMoves = ();
	my %baseStats = ();
	my $offset = $pokedex;
	if($offset == 0)
	{
		$offset = 255;
	}
	else
	{
		$offset = $offset - 1;
	}
	my $curOffset = $POKEMON_BASE_STATS_MEMORY_OFFSET + $offset * $POKEMON_BASE_STATS_ENTRY_OFFSET;
	my $idx = $pokemonStatsMemoryData[$curOffset + 0];
	my $hp = $pokemonStatsMemoryData[$curOffset + 1];
	my $atk = $pokemonStatsMemoryData[$curOffset + 2];
	my $def = $pokemonStatsMemoryData[$curOffset + 3];
	my $spd = $pokemonStatsMemoryData[$curOffset + 4];
	my $spc;
	my $spcA;
	my $spcD;
	my @typs;
	my @types = ();
	my @tms = ();
	my @tmConstants = ();
	my @hms = ();
	my @hmConstants = ();
	my @mts = ();
	my @mtConstants = ();
	my @eggMoves = ();
	my @eggMoveConstants = ();
	my @eventMoves = ();
	my @eventMoveConstants = ();
	if($gen == 1)
	{
		$spc = $pokemonStatsMemoryData[$curOffset + 5];
		@typs = ($pokemonStatsMemoryData[$curOffset + 6], $pokemonStatsMemoryData[$curOffset + 7]);
		
		# 8 = cath_rate
		# 9 - base exp
	}
	else
	{
		$spcA = $pokemonStatsMemoryData[$curOffset + 5];
		$spcD = $pokemonStatsMemoryData[$curOffset + 6];
		@typs = ($pokemonStatsMemoryData[$curOffset + 7], $pokemonStatsMemoryData[$curOffset + 8]);
		# 9 = cath_rate
		# 10 - base exp
		# 11 12 - items
		# 13 - sex ratio
		# 14 - unknown
		# 15 - steps to hatch
		# 16 - unknown 2'
	}

	# 10/17 - front dimensions
	
	# 11-14/18-21 front and back pic pointers/unused
	
	if($gen == 1)
	{
		my @initial;
		my @initialConstants;
		if($pokemonStatsMemoryData[$curOffset + 15])
		{
			push(@initial, $pokemonStatsMemoryData[$curOffset + 15]);
			if(defined $moveConstantsLookup{$pokemonStatsMemoryData[$curOffset + 15]})
			{
				push(@initialConstants, $moveConstantsLookup{$pokemonStatsMemoryData[$curOffset + 15]});
			}
			else
			{
				push(@initialConstants, sprintf("GLITCH%02x", $pokemonStatsMemoryData[$curOffset + 15]));
			}
		}
		if($pokemonStatsMemoryData[$curOffset + 16])
		{
			push(@initial, $pokemonStatsMemoryData[$curOffset + 16]);
			if(defined $moveConstantsLookup{$pokemonStatsMemoryData[$curOffset + 16]})
			{
				push(@initialConstants, $moveConstantsLookup{$pokemonStatsMemoryData[$curOffset + 16]});
			}
			else
			{
				push(@initialConstants, sprintf("GLITCH%02x", $pokemonStatsMemoryData[$curOffset + 16]));
			}
		}
		if($pokemonStatsMemoryData[$curOffset + 17])
		{
			push(@initial, $pokemonStatsMemoryData[$curOffset + 17]);
			if(defined $moveConstantsLookup{$pokemonStatsMemoryData[$curOffset + 17]})
			{
				push(@initialConstants, $moveConstantsLookup{$pokemonStatsMemoryData[$curOffset + 17]});
			}
			else
			{
				push(@initialConstants, sprintf("GLITCH%02x", $pokemonStatsMemoryData[$curOffset + 17]));
			}
		}
		if($pokemonStatsMemoryData[$curOffset + 18])
		{
			push(@initial, $pokemonStatsMemoryData[$curOffset + 18]);
			if(defined $moveConstantsLookup{$pokemonStatsMemoryData[$curOffset + 18]})
			{
				push(@initialConstants, $moveConstantsLookup{$pokemonStatsMemoryData[$curOffset + 18]});
			}
			else
			{
				push(@initialConstants, sprintf("GLITCH%02x", $pokemonStatsMemoryData[$curOffset + 18]));
			}
		}

		$curPokemonMoves{"initial"} = \@initial;
		$curPokemonMoves{"initialConstants"} = \@initialConstants;
	}
	
	my $growthRate;

	if($gen == 1)
	{		
		$growthRate = $pokemonStatsMemoryData[$curOffset + 19];
	}
	else
	{
		$growthRate = $pokemonStatsMemoryData[$curOffset + 22];
	}
	
	# N.A./23 - egg groups
	# 20-26/24-31 - tms/hms/tutor moves
	
	my @tmHmMTs;
	if($gen == 1)
	{
		@tmHmMTs = ($pokemonStatsMemoryData[$curOffset + 20], $pokemonStatsMemoryData[$curOffset + 21], 
					$pokemonStatsMemoryData[$curOffset + 22], $pokemonStatsMemoryData[$curOffset + 23], 
					$pokemonStatsMemoryData[$curOffset + 24], $pokemonStatsMemoryData[$curOffset + 25],
					$pokemonStatsMemoryData[$curOffset + 26]);
	}
	else
	{
		@tmHmMTs = ($pokemonStatsMemoryData[$curOffset + 24], $pokemonStatsMemoryData[$curOffset + 25], 
					$pokemonStatsMemoryData[$curOffset + 26], $pokemonStatsMemoryData[$curOffset + 27], 
					$pokemonStatsMemoryData[$curOffset + 28], $pokemonStatsMemoryData[$curOffset + 29],
					$pokemonStatsMemoryData[$curOffset + 30], $pokemonStatsMemoryData[$curOffset + 31]);
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
				push(@tmConstants, $tmToMoveConstMap{$j});
				push(@tms, $j);
			}
			elsif($j <= $numTMs + $numHMs)
			{
				push(@hmConstants, $hmToMoveConstMap{$j - $numTMs});
				push(@hms, $j - $numTMs);
			}
			elsif($j <= $numTMs + $numHMs + $numMTs)
			{
				push(@mtConstants, $mtToMoveConstMap{$j - $numTMs - $numHMs});
				push(@mts, $j - $numTMs - $numHMs);
			}
		}
	}
	
	$baseStats{"hp"} = $hp;
	$baseStats{"atk"} = $atk;
	$baseStats{"def"} = $def;
	$baseStats{"spd"} = $spd;
	if($gen == 1)
	{
		$baseStats{"spc"} = $spc;
	}
	else
	{
		$baseStats{"sp_atk"} = $spcA;
		$baseStats{"sp_def"} = $spcD;
	}
	
	$curPokemonStats{"growth_rate"} = $growthRate;
	$curPokemonStats{"base_stats"} = \%baseStats;
	$curPokemonStats{"types"} = \@types;
	$curPokemonMoves{"tms"} = \@tms;
	$curPokemonMoves{"tmConstants"} = \@tmConstants;
	$curPokemonMoves{"hms"} = \@hms;
	$curPokemonMoves{"hmConstants"} = \@hmConstants;
	$curPokemonMoves{"mts"} = \@mts;
	$curPokemonMoves{"mtConstants"} = \@mtConstants;
	$curPokemonMoves{"egg_moves"} = \@eggMoves;
	$curPokemonMoves{"egg_movesConstants"} = \@eggMoveConstants;
	$curPokemonMoves{"event_moves"} = \@eventMoves;
	$curPokemonMoves{"event_moveConstants"} = \@eventMoveConstants;
	
	$pokemonStats{$index % 256} = \%curPokemonStats;
	$pokemonMoves{$index % 256} = \%curPokemonMoves;
}

if($POKEMON_BONUS_POKEMON_BASE_STATS_START)
{
	# read the base stats directly from ROM
	open(my $pokemonbonusstatsfh, '<:raw', $romfile) or die "Could not open $romfile: $!";
	binmode($pokemonbonusstatsfh) or (close($pokemonbonusstatsfh), die "Cannot set $pokemonbonusstatsfh to binary mode: $!");
	seek($pokemonbonusstatsfh, 0, SEEK_SET) or (close($pokemonbonusstatsfh), die "Cannot seek $pokemonbonusstatsfh to move names: $!");
	my @bonusStatBytes = ();
	my $baseDataLength = 0;
	$bytesread = read($pokemonbonusstatsfh, $buffer, 10240);
	while($bytesread)
	{
		$baseDataLength += $bytesread;
		for(my $i = 0; $i < $bytesread; $i++)
		{
				push(@bonusStatBytes, ord(substr($buffer, $i, 1)));
		}
		
		$bytesread = read($pokemonbonusstatsfh, $buffer, 10240);
	}
	if(!defined $bytesread)
	{
		die("Read failed for $pokemonbonusstatsfh: $!");
	}

	close($pokemonbonusstatsfh);
	$pokemonbonusstatsfh = undef;

	my $index = $POKEMON_BONUS_POKEMON_INDEX;
	my $pokedex = $POKEMON_BONUS_POKEMON_POKEDEX;
	my %curPokemonStats = ();
	my %curPokemonMoves = ();
	my %baseStats = ();
	my $curOffset = $POKEMON_BONUS_POKEMON_BASE_STATS_START;
	my $idx = $bonusStatBytes[$curOffset + 0];
	my $hp = $bonusStatBytes[$curOffset + 1];
	my $atk = $bonusStatBytes[$curOffset + 2];
	my $def = $bonusStatBytes[$curOffset + 3];
	my $spd = $bonusStatBytes[$curOffset + 4];
	my $spc;
	my $spcA;
	my $spcD;
	my @typs;
	my @types = ();
	my @tms = ();
	my @tmConstants = ();
	my @hms = ();
	my @hmConstants = ();
	my @mts = ();
	my @mtConstants = ();
	my @eggMoves = ();
	my @eggMoveConstants = ();
	my @eventMoves = ();
	my @eventMoveConstants = ();
	if($gen == 1)
	{
		$spc = $bonusStatBytes[$curOffset + 5];
		@typs = ($bonusStatBytes[$curOffset + 6], $bonusStatBytes[$curOffset + 7]);
		
		# 8 = cath_rate
		# 9 - base exp
	}
	else
	{
		$spcA = $bonusStatBytes[$curOffset + 5];
		$spcD = $bonusStatBytes[$curOffset + 6];
		@typs = ($bonusStatBytes[$curOffset + 7], $bonusStatBytes[$curOffset + 8]);
		# 9 = cath_rate
		# 10 - base exp
		# 11 12 - items
		# 13 - sex ratio
		# 14 - unknown
		# 15 - steps to hatch
		# 16 - unknown 2'
	}

	# 10/17 - front dimensions
	
	# 11-14/18-21 front and back pic pointers/unused
	
	if($gen == 1)
	{
		my @initial;
		my @initialConstants;
		if($bonusStatBytes[$curOffset + 15])
		{
			push(@initial, $bonusStatBytes[$curOffset + 15]);
			if(defined $moveConstantsLookup{$bonusStatBytes[$curOffset + 15]})
			{
				push(@initialConstants, $moveConstantsLookup{$bonusStatBytes[$curOffset + 15]});
			}
			else
			{
				push(@initialConstants, sprintf("GLITCH%02x", $bonusStatBytes[$curOffset + 15]));
			}
		}
		if($bonusStatBytes[$curOffset + 16])
		{
			push(@initial, $bonusStatBytes[$curOffset + 16]);
			if(defined $moveConstantsLookup{$bonusStatBytes[$curOffset + 16]})
			{
				push(@initialConstants, $moveConstantsLookup{$bonusStatBytes[$curOffset + 16]});
			}
			else
			{
				push(@initialConstants, sprintf("GLITCH%02x", $bonusStatBytes[$curOffset + 16]));
			}
		}
		if($bonusStatBytes[$curOffset + 17])
		{
			push(@initial, $bonusStatBytes[$curOffset + 17]);
			if(defined $moveConstantsLookup{$bonusStatBytes[$curOffset + 17]})
			{
				push(@initialConstants, $moveConstantsLookup{$bonusStatBytes[$curOffset + 17]});
			}
			else
			{
				push(@initialConstants, sprintf("GLITCH%02x", $bonusStatBytes[$curOffset + 17]));
			}
		}
		if($bonusStatBytes[$curOffset + 18])
		{
			push(@initial, $bonusStatBytes[$curOffset + 18]);
			if(defined $moveConstantsLookup{$bonusStatBytes[$curOffset + 18]})
			{
				push(@initialConstants, $moveConstantsLookup{$bonusStatBytes[$curOffset + 18]});
			}
			else
			{
				push(@initialConstants, sprintf("GLITCH%02x", $bonusStatBytes[$curOffset + 18]));
			}
		}

		$curPokemonMoves{"initial"} = \@initial;
		$curPokemonMoves{"initialConstants"} = \@initialConstants;
	}
	
	my $growthRate;

	if($gen == 1)
	{		
		$growthRate = $bonusStatBytes[$curOffset + 19];
	}
	else
	{
		$growthRate = $bonusStatBytes[$curOffset + 22];
	}
	
	# N.A./23 - egg groups
	# 20-26/24-31 - tms/hms/tutor moves
	
	my @tmHmMTs;
	if($gen == 1)
	{
		@tmHmMTs = ($bonusStatBytes[$curOffset + 20], $bonusStatBytes[$curOffset + 21], 
					$bonusStatBytes[$curOffset + 22], $bonusStatBytes[$curOffset + 23], 
					$bonusStatBytes[$curOffset + 24], $bonusStatBytes[$curOffset + 25],
					$bonusStatBytes[$curOffset + 26]);
	}
	else
	{
		@tmHmMTs = ($bonusStatBytes[$curOffset + 24], $bonusStatBytes[$curOffset + 25], 
					$bonusStatBytes[$curOffset + 26], $bonusStatBytes[$curOffset + 27], 
					$bonusStatBytes[$curOffset + 28], $bonusStatBytes[$curOffset + 29],
					$bonusStatBytes[$curOffset + 30], $bonusStatBytes[$curOffset + 31]);
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
				push(@tmConstants, $tmToMoveConstMap{$j});
				push(@tms, $j);
			}
			elsif($j <= $numTMs + $numHMs)
			{
				push(@hmConstants, $hmToMoveConstMap{$j - $numTMs});
				push(@hms, $j - $numTMs);
			}
			elsif($j <= $numTMs + $numHMs + $numMTs)
			{
				push(@mtConstants, $mtToMoveConstMap{$j - $numTMs - $numHMs});
				push(@mts, $j - $numTMs - $numHMs);
			}
		}
	}
	
	$baseStats{"hp"} = $hp;
	$baseStats{"atk"} = $atk;
	$baseStats{"def"} = $def;
	$baseStats{"spd"} = $spd;
	if($gen == 1)
	{
		$baseStats{"spc"} = $spc;
	}
	else
	{
		$baseStats{"sp_atk"} = $spcA;
		$baseStats{"sp_def"} = $spcD;
	}
	
	$curPokemonStats{"growth_rate"} = $growthRate;
	$curPokemonStats{"base_stats"} = \%baseStats;
	$curPokemonStats{"types"} = \@types;
	$curPokemonMoves{"tms"} = \@tms;
	$curPokemonMoves{"tmConstants"} = \@tmConstants;
	$curPokemonMoves{"hms"} = \@hms;
	$curPokemonMoves{"hmConstants"} = \@hmConstants;
	$curPokemonMoves{"mts"} = \@mts;
	$curPokemonMoves{"mtConstants"} = \@mtConstants;
	$curPokemonMoves{"egg_moves"} = \@eggMoves;
	$curPokemonMoves{"egg_movesConstants"} = \@eggMoveConstants;
	$curPokemonMoves{"event_moves"} = \@eventMoves;
	$curPokemonMoves{"event_moveConstants"} = \@eventMoveConstants;
	
	$pokemonStats{$index % 256} = \%curPokemonStats;
	$pokemonMoves{$index % 256} = \%curPokemonMoves;
}
	
# read the base stats directly from ROM
open(my $pokemonevosattacksfh, '<:raw', $romfile) or die "Could not open $romfile: $!";
binmode($pokemonevosattacksfh) or (close($pokemonevosattacksfh), die "Cannot set $pokemonevosattacksfh to binary mode: $!");
seek($pokemonevosattacksfh, 0, SEEK_SET) or (close($pokemonevosattacksfh), die "Cannot seek $pokemonevosattacksfh to move names: $!");
my @evosAttacksRomBytes = ();
my $evosAttacksDataLength = 0;
$bytesread = read($pokemonevosattacksfh, $buffer, 10240);
while($bytesread)
{
	$evosAttacksDataLength += $bytesread;
	for(my $i = 0; $i < $bytesread; $i++)
	{
			push(@evosAttacksRomBytes, ord(substr($buffer, $i, 1)));
	}
	
	$bytesread = read($pokemonevosattacksfh, $buffer, 10240);
}
if(!defined $bytesread)
{
	die("Read failed for $pokemonevosattacksfh: $!");
}

close($pokemonevosattacksfh);
$pokemonevosattacksfh = undef;

# use the memory map for the cart to read the rom into the memory state.
# initialize the memory image with zeros.
my @evosAttacksBytes = ();
for(my $i = 0; $i <= $POKEMON_MOVES_MEMORY_END; $i++)
{
	push(@evosAttacksBytes, 0);
}

# copy the data from the segments.
for my $segment (@{$POKEMON_MOVES_MEMORY_MAP})
{
	if(exists $$segment{"rom_start"} && defined $$segment{"rom_start"} && exists $$segment{"rom_end"} && defined $$segment{"rom_end"})
	{
		my $i = $$segment{"start"};
		my $j = $$segment{"rom_start"};
		for(; $j <= $$segment{"rom_end"}; $i++, $j++)
		{
			$evosAttacksBytes[$i] = $evosAttacksRomBytes[$j];
		}
	}
}

my $pokemonEvosAttacksPointersOffset = $POKEMON_EVOS_ATTACKS_POINTERS_MEMORY_START;
for(my $index = 1; $index <= 256; $index++)
{
	my @evolutions = ();
	my %levelup = ();
	my %levelupConstants = ();
	my @initial;
	my @initialConstants;
	if($gen == 1)
	{
		@initial = @{$pokemonMoves{$index % 256}{"initial"}};
		@initialConstants = @{$pokemonMoves{$index % 256}{"initialConstants"}};
	}
	else
	{
		@initial = ();
		@initialConstants = ();
	}

	my $lowerByte = $evosAttacksBytes[$pokemonEvosAttacksPointersOffset];
	my $higherByte = $evosAttacksBytes[$pokemonEvosAttacksPointersOffset + 1];
	my $romAddr = ($higherByte << 8) | $lowerByte;
	my $pokemonEvosAttacksOffset = $romAddr;
	$pokemonEvosAttacksPointersOffset+=2;
	
	while(1)
	{
		if($evosAttacksBytes[$pokemonEvosAttacksOffset] == 0)
		{
			$pokemonEvosAttacksOffset++;
			last;
		}
		elsif($evosAttacksBytes[$pokemonEvosAttacksOffset] == 1) # EVOLVE_LEVEL
		{
			$pokemonEvosAttacksOffset++;
			my $level = $evosAttacksBytes[$pokemonEvosAttacksOffset];
			$pokemonEvosAttacksOffset++;
			my $species = $evosAttacksBytes[$pokemonEvosAttacksOffset];
			$pokemonEvosAttacksOffset++;
			
			my %evolution = ();
			$evolution{"evolution"} = "EVOLVE_LEVEL";
			$evolution{"level"} = $level;
			$evolution{"species"} = $species;
			
			push(@evolutions, \%evolution);
		}
		elsif($evosAttacksBytes[$pokemonEvosAttacksOffset] == 2) # EVOLVE_ITEM
		{
			$pokemonEvosAttacksOffset++;
			my $usedItem = $evosAttacksBytes[$pokemonEvosAttacksOffset];
			$pokemonEvosAttacksOffset++;
			my $level = 0;
			if($gen == 1)
			{
				$level = $evosAttacksBytes[$pokemonEvosAttacksOffset];
				$pokemonEvosAttacksOffset++;
			}
			my $species = $evosAttacksBytes[$pokemonEvosAttacksOffset];
			$pokemonEvosAttacksOffset++;
			
			my %evolution = ();
			$evolution{"evolution"} = "EVOLVE_ITEM";
			$evolution{"usedItem"} = $usedItem;
			if($gen == 1)
			{
				$evolution{"level"} = $level;
			}
			$evolution{"species"} = $species;
			
			push(@evolutions, \%evolution);
		}
		elsif($evosAttacksBytes[$pokemonEvosAttacksOffset] == 3) # EVOLVE_TRADE
		{
			$pokemonEvosAttacksOffset++;
			my $heldItem = 0;
			if($gen == 2)
			{
				$heldItem = $evosAttacksBytes[$pokemonEvosAttacksOffset];
				$pokemonEvosAttacksOffset++;
			}
			my $level = 0;
			if($gen == 1)
			{
				$level = $evosAttacksBytes[$pokemonEvosAttacksOffset];
				$pokemonEvosAttacksOffset++;
			}
			my $species = $evosAttacksBytes[$pokemonEvosAttacksOffset];
			$pokemonEvosAttacksOffset++;
						
			my %evolution = ();
			$evolution{"evolution"} = "EVOLVE_TRADE";
			if($gen == 2)
			{
				$evolution{"heldItem"} = $heldItem;
			}
			if($gen == 1)
			{
				$evolution{"level"} = $level;
			}
			$evolution{"species"} = $species;
			
			push(@evolutions, \%evolution);
		}
		elsif($gen != 1 && $evosAttacksBytes[$pokemonEvosAttacksOffset] == 4) # EVOLVE_HAPPINESS
		{
			$pokemonEvosAttacksOffset++;
			my $happynessTrigger = $evosAttacksBytes[$pokemonEvosAttacksOffset];
			$pokemonEvosAttacksOffset++;
			my $species = $evosAttacksBytes[$pokemonEvosAttacksOffset];
			$pokemonEvosAttacksOffset++;
			
			my %evolution = ();
			$evolution{"evolution"} = "EVOLVE_HAPPINESS";
			$evolution{"happynessTrigger"} = $happynessTrigger;
			$evolution{"species"} = $species;
			
			push(@evolutions, \%evolution);
		}
		elsif($gen != 1 && $evosAttacksBytes[$pokemonEvosAttacksOffset] == 5) # EVOLVE_STAT
		{
			$pokemonEvosAttacksOffset++;
			my $level = $evosAttacksBytes[$pokemonEvosAttacksOffset];
			$pokemonEvosAttacksOffset++;
			my $atkDefConstant = $evosAttacksBytes[$pokemonEvosAttacksOffset];
			$pokemonEvosAttacksOffset++;
			my $species = $evosAttacksBytes[$pokemonEvosAttacksOffset];
			$pokemonEvosAttacksOffset++;
			
			my %evolution = ();
			$evolution{"evolution"} = "EVOLVE_STAT";
			$evolution{"level"} = $level;
			$evolution{"atkDefConstant"} = $atkDefConstant;
			$evolution{"species"} = $species;
			
			push(@evolutions, \%evolution);
		}
		else
		{
			# gen 1 treats glitch evolutions the same as trade evolutions.
			if($gen == 1)
			{
				$pokemonEvosAttacksOffset++;
				my $heldItem = 0;
				if($gen == 2)
				{
					$heldItem = $evosAttacksBytes[$pokemonEvosAttacksOffset];
					$pokemonEvosAttacksOffset++;
				}
				my $level = 0;
				if($gen == 1)
				{
					$level = $evosAttacksBytes[$pokemonEvosAttacksOffset];
					$pokemonEvosAttacksOffset++;
				}
				my $species = $evosAttacksBytes[$pokemonEvosAttacksOffset];
				$pokemonEvosAttacksOffset++;
							
				my %evolution = ();
				$evolution{"evolution"} = "EVOLVE_TRADE";
				if($gen == 2)
				{
					$evolution{"heldItem"} = $heldItem;
				}
				if($gen == 1)
				{
					$evolution{"level"} = $level;
				}
				$evolution{"species"} = $species;
				
				push(@evolutions, \%evolution);
			}
			else
			{
				$pokemonEvosAttacksOffset++;
			}
			#print("unexpected evolution trigger: " . $index . "," . $pokedex . ", " . $evosAttacksBytes[$pokemonEvosAttacksOffset] . "\n");
			#die();
		}
	}
	
	# gen 1 looks for 0 in evolutions table before moves table, so go back to beginnning and find the 0 for glitchmons.
	if($gen == 1)
	{
		$pokemonEvosAttacksOffset = $romAddr;
		while($evosAttacksBytes[$pokemonEvosAttacksOffset])
		{
			$pokemonEvosAttacksOffset++;
		}
		$pokemonEvosAttacksOffset++;
	}
	while(1)
	{
		if($evosAttacksBytes[$pokemonEvosAttacksOffset] == 0)
		{
			$pokemonEvosAttacksOffset++;
			last;
		}
		else
		{
			my $level = $evosAttacksBytes[$pokemonEvosAttacksOffset];
			$pokemonEvosAttacksOffset++;
			my $move = $evosAttacksBytes[$pokemonEvosAttacksOffset];
			$pokemonEvosAttacksOffset++;
			
			# in gen 1 initial moves are in pokemon structure, but gen 2 has them in level up hash, 
			# structured this way for glitch pokemon in gen 1 with level 1 "learned moves"
			if($level <= 1 && $gen != 1)
			{
				push(@initial, $move);
				if(defined $moveConstantsLookup{$move})
				{
					push(@initialConstants, $moveConstantsLookup{$move});
				}
				else
				{
					push(@initialConstants, sprintf("GLITCH%02x", $move));
				}
			}
			else
			{
				if(exists $levelup{$level} && defined $levelup{$level})
				{
					if(!ref($levelup{$level}))
					{
						my @movearr = ();
						push(@movearr, $levelup{$level});
						$levelup{$level} = \@movearr;
					}
					push(@{$levelup{$level}}, $move);
				}
				else
				{
					$levelup{$level} = $move;
				}
				
				if(exists $levelupConstants{$level} && defined $levelupConstants{$level})
				{
					if(!ref($levelupConstants{$level}))
					{
						my @movearr = ();
						push(@movearr, $levelupConstants{$level});
						$levelupConstants{$level} = \@movearr;
					}
					
					if(defined $moveConstantsLookup{$move})
					{
						push(@{$levelupConstants{$level}}, $moveConstantsLookup{$move});
					}
					else
					{
						push(@{$levelupConstants{$level}}, sprintf("GLITCH%02x", $move));
					}
				}
				else
				{
					if(defined $moveConstantsLookup{$move})
					{
						$levelupConstants{$level} = $moveConstantsLookup{$move};
					}
					else
					{
						$levelupConstants{$level} = sprintf("GLITCH%02x", $move);
					}
				}
			}
		}
	}
	
	#$pokemonEvosAttackData{"evolutions"} = \@evolutions;
	#$pokemonEvosAttackData{"attacks"} = \@attacks;
		
	#$pokemonEvosAttacksData{$index % 256} = \%pokemonEvosAttackData;
	$pokemonMoves{$index % 256}{"initial"} = \@initial;
	$pokemonMoves{$index % 256}{"initialConstants"} = \@initialConstants;
	$pokemonMoves{$index % 256}{"levelup"} = \%levelup;
	$pokemonMoves{$index % 256}{"levelupConstants"} = \%levelupConstants;
}

if($POKEMON_EGG_MOVES_START)
{
	# read the egg moves directly from ROM
	open(my $pokemoneggmovesfh, '<:raw', $romfile) or die "Could not open $romfile: $!";
	binmode($pokemoneggmovesfh) or (close($pokemoneggmovesfh), die "Cannot set $pokemoneggmovesfh to binary mode: $!");
	seek($pokemoneggmovesfh, 0, SEEK_SET) or (close($pokemoneggmovesfh), die "Cannot seek $pokemoneggmovesfh to move names: $!");
	my @eggMoveRomBytes = ();
	my $evosEggMovesDataLength = 0;
	$bytesread = read($pokemoneggmovesfh, $buffer, 10240);
	while($bytesread)
	{
		$evosEggMovesDataLength += $bytesread;
		for(my $i = 0; $i < $bytesread; $i++)
		{
				push(@eggMoveRomBytes, ord(substr($buffer, $i, 1)));
		}
		
		$bytesread = read($pokemoneggmovesfh, $buffer, 10240);
	}
	if(!defined $bytesread)
	{
		die("Read failed for $pokemoneggmovesfh: $!");
	}

	close($pokemoneggmovesfh);
	$pokemoneggmovesfh = undef;

	# use the memory map for the cart to read the rom into the memory state for egg move pointers.
	# initialize the memory image with zeros.
	my @eggMovePointersBytes = ();
	for(my $i = 0; $i <= $POKEMON_EGG_MOVE_POINTERS_MEMORY_END; $i++)
	{
		push(@eggMovePointersBytes, 0);
	}

	# copy the data from the segments.
	for my $segment (@{$POKEMON_EGG_MOVE_POINTERS_MEMORY_MAP})
	{
		if(exists $$segment{"rom_start"} && defined $$segment{"rom_start"} && exists $$segment{"rom_end"} && defined $$segment{"rom_end"})
		{
			my $i = $$segment{"start"};
			my $j = $$segment{"rom_start"};
			for(; $j <= $$segment{"rom_end"}; $i++, $j++)
			{
				$eggMovePointersBytes[$i] = $eggMoveRomBytes[$j];
			}
		}
	}

	# use the memory map for the cart to read the rom into the memory state for egg moves.
	# initialize the memory image with zeros.
	my @eggMovesBytes = ();
	for(my $i = 0; $i <= $POKEMON_EGG_MOVES_MEMORY_END; $i++)
	{
		push(@eggMovesBytes, 0);
	}

	# copy the data from the segments.
	for my $segment (@{$POKEMON_EGG_MOVES_MEMORY_MAP})
	{
		if(exists $$segment{"rom_start"} && defined $$segment{"rom_start"} && exists $$segment{"rom_end"} && defined $$segment{"rom_end"})
		{
			my $i = $$segment{"start"};
			my $j = $$segment{"rom_start"};
			for(; $j <= $$segment{"rom_end"}; $i++, $j++)
			{
				$eggMovesBytes[$i] = $eggMoveRomBytes[$j];
			}
		}
	}
	
	my $eggMovesPointersOffset = $POKEMON_EGG_MOVES_POINTERS_MEMORY_START;
	# step through the pointers.
	for(my $index = 1; $index <= 256; $index++)
	{
		my @egMoves = ();
		my @egMoveConstants = ();
		my $lowerByte = $eggMovePointersBytes[$eggMovesPointersOffset];
		my $higherByte = $eggMovePointersBytes[$eggMovesPointersOffset + 1];
		my $romAddr = ($higherByte << 8) | $lowerByte;
		my $eggMovesOffset = $romAddr;
		$eggMovesPointersOffset+=2;
		
		while($eggMovesBytes[$eggMovesOffset])
		{
			if($eggMovesBytes[$eggMovesOffset] != 0xFF)
			{
				my $eggMove = $eggMovesBytes[$eggMovesOffset];
				
				if(defined $moveConstantsLookup{$eggMove})
				{
					push(@egMoveConstants, $moveConstantsLookup{$eggMove});
				}
				else
				{
					push(@egMoveConstants, sprintf("GLITCH%02x", $eggMove));
				}
				push(@egMoves, $eggMove);
				$eggMovesOffset++;
			}
			else
			{
				$eggMovesOffset++;
				last;
			}
		}
		
		my @eggMoves = uniq(@egMoves);
		my @eggMoveConstants = uniq(@egMoveConstants);
		$pokemonMoves{$index % 256}{"egg_moves"} = \@eggMoves;
		$pokemonMoves{$index % 256}{"egg_movesConstants"} = \@eggMoveConstants;
	}
}
else
{
	for(my $i = 0; $i < 256; $i++)
	{
		my @eggMoves = ();
		my @eggMoveConstants = ();
		$pokemonMoves{(($i + 1) % 256)}{"egg_moves"} = \@eggMoves;
		$pokemonMoves{(($i + 1) % 256)}{"egg_movesConstants"} = \@eggMoveConstants;
	}
}

# add the event moves.
my $eventPokemon = $eventPokemonByGen{int($gen)};
for(my $index = 1; $index <= $NUM_POKEMON_INDEXES; $index++)
{
	my $pokedex = $indexToPokedexLookup{$index % 256};
	my @eventMoves = ();
	my @eventMoveConstants = ();
	my $pokemons = (defined $$eventPokemon{$pokedex} && exists $$eventPokemon{$pokedex}) ? $$eventPokemon{$pokedex} : undef;
	
	my $pokemonMoveset = $pokemonMoves{$index % 256};
	if($pokemons)
	{
		my @moves = ();
		for my $tm (@{$$pokemonMoveset{"tms"}})
		{
			if(!(defined $tmToMoveConstMap{$tm}))
			{
				die();
			}
			push(@moves, $tmToMoveConstMap{$tm});
		}
		for my $hm (@{$$pokemonMoveset{"hms"}})
		{
			if(!(defined $hmToMoveConstMap{$hm}))
			{
				die();
			}
			push(@moves, $hmToMoveConstMap{$hm});
		}
		for my $mt (@{$$pokemonMoveset{"mts"}})
		{
			if(!(defined $mtToMoveConstMap{$mt}))
			{
				die();
			}
			push(@moves, $mtToMoveConstMap{$mt});
		}
		for my $initial (@{$$pokemonMoveset{"initial"}})
		{
			if(!(defined $moveConstantsLookup{$initial}))
			{
				die();
			}
			push(@moves, $moveConstantsLookup{$initial});
		}
		
		for my $level (sort { $a <=> $b } (keys %{$$pokemonMoveset{"levelup"}}))
		{
			my $levelUpMoveset = $$pokemonMoveset{"levelup"};
			if(!(defined $levelUpMoveset))
			{
				die();
			}
			my $mv = $$levelUpMoveset{$level};
			if(!(defined $mv))
			{
				die();
			}
			if(ref $mv eq "ARRAY")
			{
				foreach my $mv2 (@{$mv})
				{
					my $move = $moveConstantsLookup{$mv2};
					if(defined $move)
					{
						push(@moves, $move);
					}
				}
			}
			else
			{
				my $move = $moveConstantsLookup{$mv};
				if(defined $move)
				{
					push(@moves, $move);
				}
			}
		}
			
		for my $pokemon (@{$pokemons})
		{
			for my $move (@{$$pokemon{"moves"}})
			{
				my $found = (1 == 0);
				for my $m (@moves)
				{
					if($m eq $move)
					{
						$found = (1 == 1);
						last;
					}
				}
				if(!$found)
				{
					my $alreadyInList = (1 == 0);
					for my $eventMove (@eventMoves)
					{
						if($move eq $eventMove)
						{
							$alreadyInList = (1 == 1);
							last;
						}
					}
					if(!$alreadyInList)
					{
						push(@eventMoves, $move);
					}
				}
			}
		}
		
		my @eventMoveIds = ();
		for my $moveConstant (@eventMoves)
		{
			push(@eventMoveIds, $movesLookup{$moveConstant});
		}
		@eventMoveConstants = @eventMoves;
		@eventMoves = @eventMoveIds;
	}
	$$pokemonMoveset{"event_moves"} = \@eventMoves;
	$$pokemonMoveset{"event_moveConstants"} = \@eventMoveConstants;
}

# Parse the charmap
my %charMap = ();
open(my $charmapfh, "<:encoding(utf8)", "$disassembyDir/constants/charmap.asm") or die "Could not open $disassembyDir/constants/charmap.asm: $!";

my $readChar = (1 == 0);
while(<$charmapfh>) {
	my $line = $_;
	if($line =~ /^\s*; Control characters/)
	{
		$readChar = (1 == 1);
	}
	elsif($line =~ /^\s*; Actual characters (from gfx\/font\/font_extra.png)/)
	{
		$readChar = (1 == 1);
	}
	elsif($line =~ /^\s*; Actual characters (from gfx\/font\/font_battle_extra.png)/)
	{
		$readChar = (1 == 0);
	}
	elsif($line =~ /^\s*; Actual characters (from other graphics files)/)
	{
		$readChar = (1 == 1);
	}
	elsif($line =~ /^\s*; Actual characters (from gfx\/font\/font.png)/)
	{
		$readChar = (1 == 1);
	}
	elsif($line =~ /^\s*; Japanese kana, for those bits of text that were not translated to English/)
	{
		$readChar = (1 == 0);
	}
	elsif($line =~ /^\s+charmap\s+"([^\"]*)"\s*,\s+\$([0-9A-Fa-f]{2,2})\s*/)
	{
		if(!$readChar)
		{
			next;
		}
		
		my $char = $1;
		my $key = hex($2);
		
		if($char eq "<NULL>")
		{
			$char = "<NULL>";
		}
		if($char eq "<PLAY_G>")
		{
			$char = "<PLAYER>";
		}
		elsif($char eq "<CR>")
		{
			$char = "<CR>";
		}
		elsif($char eq "<BSP>")
		{
			$char = " ";
		}
		elsif($char eq "<LF>")
		{
			$char = "<LF>";
		}
		elsif($char eq "<POKE>")
		{
			$char = "POK\x{00E9}";
		}
		elsif($char eq "<WBR>")
		{
			$char = "\n";
		}
		elsif($char eq "<RED>")
		{
			$char = "<PLAYER>";
		}
		elsif($char eq "<GREEN>")
		{
			$char = "<RIVAL>";
		}
		elsif($char eq "<ENEMY>")
		{
			$char = "<ENEMY>";
		}
		elsif($char eq "<PKMN>")
		{
			$char = "PkMn";
		}
		elsif($char eq "<_CONT>")
		{
			$char = "\n";
		}
		elsif($char eq "<SCROLL>")
		{
			$char = "\n\n";
		}
		elsif($char eq "<NEXT>")
		{
			$char = "\n";
		}
		elsif($char eq "<LINE>")
		{
			$char = "\n";
		}
		elsif($char eq "@")
		{
			$char = "@";
		}
		elsif($char eq "<PARA>")
		{
			$char = "\n";
		}
		elsif($char eq "#")
		{
			$char = "POK\x{00E9}";
		}
		elsif($char eq "<CONT>")
		{
			$char = "\n";
		}
		elsif($char eq "<\x{2026}\x{2026}>")
		{
			$char = "\x{2026}\x{2026}";
		}
		elsif($char eq "\x{00A5}")
		{
			$char = "\x{20BD}";
		}
		elsif($char eq "<DONE>")
		{
			$char = "@";
		}
		elsif($char eq "<PROMPT>")
		{
			$char = "\n@";
		}
		elsif($char eq "<PC>")
		{
			$char = "PC";
		}
		elsif($char eq "<TM>")
		{
			$char = "TM";
		}
		elsif($char eq "<TRAINER>")
		{
			$char = "TRAINER";
		}
		elsif($char eq "<ROCKET>")
		{
			$char = "ROCKET";
		}
		elsif($char eq "<DEXEND>")
		{
			$char = ".@";
		}
		elsif($char eq "<BOLD_A>")
		{
			$char = "\x{1D400}";
		}
		elsif($char eq "<BOLD_B>")
		{
			$char = "\x{1D401}";
		}
		elsif($char eq "<BOLD_C>")
		{
			$char = "\x{1D402}";
		}
		elsif($char eq "<BOLD_D>")
		{
			$char = "\x{1D403}";
		}
		elsif($char eq "<BOLD_E>")
		{
			$char = "\x{1D404}";
		}
		elsif($char eq "<BOLD_F>")
		{
			$char = "\x{1D405}";
		}
		elsif($char eq "<BOLD_G>")
		{
			$char = "\x{1D406}";
		}
		elsif($char eq "<BOLD_H>")
		{
			$char = "\x{1D407}";
		}
		elsif($char eq "<BOLD_I>")
		{
			$char = "\x{1D408}";
		}
		elsif($char eq "<BOLD_V>")
		{
			$char = "\x{1D415}";
		}
		elsif($char eq "<BOLD_S>")
		{
			$char = "\x{1D412}";
		}
		elsif($char eq "<BOLD_L>")
		{
			$char = "\x{1D40B}";
		}
		elsif($char eq "<BOLD_M>")
		{
			$char = "\x{1D40C}";
		}
		elsif($char eq "<COLON>")
		{
			$char = "\x{FE55}";
		}
		elsif($char eq "<PO>")
		{
			$char = "PO";
		}
		elsif($char eq "<KE>")
		{
			$char = "K\x{00E9}";
		}
		elsif($char eq "<LV>")
		{
			$char = ":L";
		}
		elsif($char eq "<DO>")
		{
			$char = "\x{3069}";
		}
		elsif($char eq "<ID>")
		{
			$char = "ID";
		}
		elsif($char eq "<PK>")
		{
			$char = "Pk";
		}
		elsif($char eq "<MN>")
		{
			$char = "Mn";
		}
		elsif($char eq "<DOT>")
		{
			$char = ".";
		}
		elsif($char eq "<JP_14>")
		{
			$char = "\x{30CA}\x{FF9E}";
		}
		elsif($char eq "<JP_18>")
		{
			$char = "\x{30CE}\x{309B}";
		}
		elsif($char eq "<NI>")
		{
			$char = "\x{306B}\x{3000}";
		}
		elsif($char eq "<TTE>")
		{
			$char = "\x{3063}\x{3066}";
		}
		elsif($char eq "<WO>")
		{
			$char = "\x{3092}\x{3000}";
		}
		elsif($char eq "<TA!>")
		{
			$char = "\x{305F}\x{FF01}";
		}
		elsif($char eq "<KOUGEKI>")
		{
			$char = "\x{3053}\x{3046}\x{3052}\x{304D}";
		}
		elsif($char eq "<WA>")
		{
			$char = "\x{306F}\x{3000}";
		}
		elsif($char eq "<NO>")
		{
			$char = "\x{306E}\x{3000}";
		}
		elsif($char eq "<ROUTE>")
		{
			$char = "\x{3070}\x{3093}\x{3000}\x{3069}\x{3046}\x{308D}";
		}
		elsif($char eq "<WATASHI>")
		{
			$char = "\x{308F}\x{305F}\x{3057}";
		}
		elsif($char eq "<KOKO_WA>")
		{
			$char = "\x{3053}\x{3053}\x{306F}";
		}
		elsif($char eq "<GA>")
		{
			$char = "\x{304C}\x{3000}";
		}
		
		if(!(exists $charMap{$key}) && !(defined $charMap{$key}))
		{
			$charMap{$key} = $char;
		}
	}
}

close($charmapfh);
$charmapfh=undef;

#read the names from rom.
#$POKEMON_NAMES_MEMORY_MAP
#$POKEMON_NAMES_MEMORY_START
#$POKEMON_NAMES_MEMORY_END
#$POKEMON_NAME_LENGTH
#$POKEMON_NAMES_MEMORY_OFFSET
open(my $pokemonnamesfh, '<:raw', $romfile) or die "Could not open $romfile: $!";
binmode($pokemonnamesfh) or (close($pokemonnamesfh), die "Cannot set $pokemonnamesfh to binary mode: $!");
seek($pokemonnamesfh, 0, SEEK_SET) or (close($pokemonnamesfh), die "Cannot seek $pokemonnamesfh to move names: $!");
my @namesBytes = ();
$namesLength = 0;
$bytesread = read($pokemonnamesfh, $buffer, 10240);
while($bytesread)
{
	$namesLength += $bytesread;
	for(my $i = 0; $i < $bytesread; $i++)
	{
			push(@namesBytes, ord(substr($buffer, $i, 1)));
	}
	
	$bytesread = read($pokemonnamesfh, $buffer, 10240);
}
if(!defined $bytesread)
{
	die("Read failed for $pokemonnamesfh: $!");
}

close($pokemonnamesfh);
$pokemonnamesfh = undef;

# use the memory map for the cart to read the rom into the memory state.
# initialize the memory image with zeros.
my @pokemonNamesMemoryData = ();
for(my $i = 0; $i <= $POKEMON_NAMES_MEMORY_END; $i++)
{
	push(@pokemonNamesMemoryData, 0);
}

# copy the data from the segments.
for my $segment (@{$POKEMON_NAMES_MEMORY_MAP})
{
	if(exists $$segment{"rom_start"} && defined $$segment{"rom_start"} && exists $$segment{"rom_end"} && defined $$segment{"rom_end"})
	{
		my $i = $$segment{"start"};
		my $j = $$segment{"rom_start"};
		for(; $j <= $$segment{"rom_end"}; $i++, $j++)
		{
			$pokemonNamesMemoryData[$i] = $namesBytes[$j];
		}
	}
}

my %pokemonNames = ();
my $romOffset = $POKEMON_NAMES_MEMORY_OFFSET;
for(my $index = 1; $index <= 256; $index++)
{
	$pokemonNames{$index % 256} = "";
	for(my $ch = 0; $ch  < $POKEMON_NAME_LENGTH; $ch++)
	{
		my $byte = $pokemonNamesMemoryData[$romOffset + $ch];
		if(defined $charMap{$byte} && exists $charMap{$byte})
		{
			my $terminated = (1 == 0);
			for my $c (split //, $charMap{$byte})
			{
				if($c eq '@')
				{
					$terminated = (1 == 1);
					last;
				}
				else
				{
					$pokemonNames{$index % 256} = $pokemonNames{$index % 256} . $c;
				}
			}
		}
	}
	$romOffset += $POKEMON_NAME_LENGTH;
}

#print(Dumper(\@baseStatBytes));

#print(Dumper(\%movesLookup));
#print(Dumper(\%tmsData));
#print(Dumper(\%hmsData));
#print(Dumper(\%mtsData));
#print(Dumper(\%tmToMoveConstMap));
#print(Dumper(\%hmToMoveConstMap));
#print(Dumper(\%mtToMoveConstMap));
#print(Dumper(\%moveConstToTmMap));
#print(Dumper(\%moveConstToHmMap));
#print(Dumper(\%moveConstToMTMap));
#print(Dumper($numTMsHMsMTs));
#print(Dumper($numTMs));
#print(Dumper($numHMs));
#print(Dumper($numMTs));
#print(Dumper(\%pokemonStats));
#print(Dumper(\%pokemonMoves));
#print(Dumper(\%pokemonNames));

#print(Dumper(\%pokedexToIndexLookup));
#print(Dumper(\%indexToPokedexLookup));

if($gen == 1)
{
	print <<END;
function PokemonStatsLookup() {
  // Constructor body
}

var stats_lookup = {
	"": { growth_rate: "",
			base_stats: { "hp": 0, "atk": 0, "def": 0, "spd": 0, "spc": 0 },
			types: [ 0 ],
	},
END
}
else
{
	print <<END;
function PokemonStatsLookup() {
  // Constructor body
}

var stats_lookup = {
	"": { growth_rate: "",
			base_stats: { "hp": 0, "atk": 0, "def": 0, "spd": 0, "sp_atk": 0, "sp_def": 0 },
			types: [ 0 ],
	},
END
}
for(my $index = 0; $index < 256; $index++)
{
	if($gen == 1)
	{
		my $growthRate = $pokemonStats{$index}{"growth_rate"};
		my $hp = $pokemonStats{$index}{"base_stats"}{"hp"};
		my $atk = $pokemonStats{$index}{"base_stats"}{"atk"};
		my $def = $pokemonStats{$index}{"base_stats"}{"def"};
		my $spd = $pokemonStats{$index}{"base_stats"}{"spd"};
		my $spc = $pokemonStats{$index}{"base_stats"}{"spc"};
		my @types = @{$pokemonStats{$index}{"types"}};
		my $name = $pokemonNames{$index};
		printf("\t%d: { growth_rate: 0x%02x,\n\t\t\tbase_stats: { \"hp\": %d, \"atk\": %d, \"def\": %d, \"spd\": %d, \"spc\": %d },\n\t\t\ttypes: [ %s ],\n\t}, // %s\n", 
			$index, $growthRate, $hp, $atk, $def, $spd, $spc, 
			join(", ", map { sprintf "%d", $_ } @types), $name);
	}
	else
	{
		my $growthRate = $pokemonStats{$index}{"growth_rate"};
		my $hp = $pokemonStats{$index}{"base_stats"}{"hp"};
		my $atk = $pokemonStats{$index}{"base_stats"}{"atk"};
		my $def = $pokemonStats{$index}{"base_stats"}{"def"};
		my $spd = $pokemonStats{$index}{"base_stats"}{"spd"};
		my $spAtk = $pokemonStats{$index}{"base_stats"}{"sp_atk"};
		my $spDef = $pokemonStats{$index}{"base_stats"}{"sp_def"};
		my @types = @{$pokemonStats{$index}{"types"}};
		my $name = $pokemonNames{$index};
		printf("\t%d: { growth_rate: 0x%02x,\n\t\t\tbase_stats: { \"hp\": %d, \"atk\": %d, \"def\": %d, \"spd\": %d, \"sp_atk\": %d, \"sp_def\": %d },\n\t\t\ttypes: [ %s ],\n\t}, // %s\n", 
			$index, $growthRate, $hp, $atk, $def, $spd, $spAtk, $spDef, 
			join(", ", map { sprintf "%d", $_ } @types), $name);
	}
}
print <<END;
};

(function () {
  // Static initialization code
  Object.keys(stats_lookup).forEach(key => {
	  var value = stats_lookup[key];
	  
	  PokemonStatsLookup[key] = value;
  });
})();
END

print <<END;
function PokemonMovesLookup() {
  // Constructor body
}

var pokemon_tms_lookup = {
		"": { initial: [ ],
				levelup: {}, 
				tms: [ ], 
				hms: [ ], 
				mts: [ ],
				egg_moves: [ ],
				event_moves: [ ],
		}, // undefined / default value. 
END
for(my $index = 0; $index < 256; $index++)
{
	my $levelup = $pokemonMoves{$index}{"levelup"};
	my %levelupHash = %{ $levelup};
	my @levelupKeysUnsorted = keys %levelupHash;
	my @levelupKeys = sort {$a <=> $b} @levelupKeysUnsorted;
	my $levelupConstants = $pokemonMoves{$index}{"levelupConstants"};
	my %levelupConstantsHash = %{ $levelupConstants};
	my @levelupConstantKeysUnsorted = keys %levelupConstantsHash;
	my @levelupConstantKeys = sort {$a <=> $b} @levelupConstantKeysUnsorted;
	my @initialUnsorted = @{$pokemonMoves{$index}{"initial"}};
	my @initial = sort {$a <=> $b} @initialUnsorted;
	my @initialConstantsUnsorted = @{$pokemonMoves{$index}{"initialConstants"}};
	my @initialConstants = sort {$a cmp $b} @initialConstantsUnsorted;
	my $curPokemonMovesRef = $pokemonMoves{$index};
	my %curPokemonMoves = %{ $curPokemonMovesRef};
	my @tmsUnsorted = @{$curPokemonMoves{"tms"}};
	my @hmsUnsorted = @{$curPokemonMoves{"hms"}};
	my @mtsUnsorted = @{$curPokemonMoves{"mts"}};
	my @tmConstantsUnsorted = @{$curPokemonMoves{"tmConstants"}};
	my @hmConstantsUnsorted = @{$curPokemonMoves{"hmConstants"}};
	my @mtConstantsUnsorted = @{$curPokemonMoves{"mtConstants"}};
	my @eggMovesUnsorted = @{$curPokemonMoves{"egg_moves"}};
	my @eggMoveConstantsUnsorted = @{$curPokemonMoves{"egg_movesConstants"}};
	my @eventMovesUnsorted = @{$curPokemonMoves{"event_moves"}};
	my @eventMoveConstantsUnsorted = @{$curPokemonMoves{"event_moveConstants"}};
	my @tms = sort {$a <=> $b} @tmsUnsorted;
	my @hms = sort {$a <=> $b} @hmsUnsorted;
	my @mts = sort {$a <=> $b} @mtsUnsorted;
	my @tmConstants = sort {$a cmp $b} @tmConstantsUnsorted;
	my @hmConstants = sort {$a cmp $b} @hmConstantsUnsorted;
	my @mtConstants = sort {$a cmp $b} @mtConstantsUnsorted;
	my @eggMoves = sort {$a <=> $b} @eggMovesUnsorted;
	my @eggMoveConstants = sort {$a cmp $b} @eggMoveConstantsUnsorted;
	my @eventMoves = sort { $a <=> $b } @eventMovesUnsorted;
	my @eventMoveConstants = sort { $a cmp $b } @eventMoveConstantsUnsorted;
	if($debug)
	{
		printf("\t\t%d: { initial: [ %s ],\n\t\t\t\tinitial_constants: [ %s ],\n\t\t\t\tlevelup: { \n%s\t\t\t\t},\n\t\t\t\tlevelup_constants: { \n%s\t\t\t\t},\n\t\t\t\ttms: [ %s ],\n\t\t\t\ttmConstants: [ %s ],\n\t\t\t\thms: [ %s ],\n\t\t\t\thmConstants: [ %s ],\n\t\t\t\tmts: [ %s ],\n\t\t\t\tmtConstants: [ %s ],\n\t\t\t\tegg_moves: [ %s ],\n\t\t\t\tegg_move_constants: [ %s ],\n\t\t\t\tevent_moves: [ %s ],\n\t\t\t\tevent_moveConstants: [ %s ],\n\n\t\t}, // %s\n",
			$index, 
			join(", ", map { sprintf ("%d", $_) } @initialUnsorted),
			join(", ", map { sprintf ("\"%s\"", $_) } @initialConstants),
			join("", map { (ref($levelupHash{$_}) ? sprintf ("\t\t\t\t\t%d: [ %s ],\n", $_, join(", ", @{$levelupHash{$_}})) : sprintf ("\t\t\t\t\t%d: %d,\n", $_, $levelupHash{$_})) } @levelupKeys),
			join("", map { (ref($levelupConstantsHash{$_}) ? sprintf ("\t\t\t\t\t%d: [ %s ],\n", $_, join(", ", map({ "\"" . $_  . "\""} @{$levelupConstantsHash{$_}}))) : sprintf ("\t\t\t\t\t%d: \"%s\",\n", $_, $levelupConstantsHash{$_})) } @levelupConstantKeys),
			join(", ", map { sprintf ("%d", $_) } @tms),
			join(", ", map { sprintf ("\"%s\"", $_) } @tmConstants),
			join(", ", map { sprintf ("%d", $_) } @hms),
			join(", ", map { sprintf ("\"%s\"", $_) } @hmConstants),
			join(", ", map { sprintf ("%d", $_) } @mts),
			join(", ", map { sprintf ("\"%s\"", $_) } @mtConstants),
			join(", ", map { sprintf ("%d", $_) } @eggMoves),
			join(", ", map { sprintf ("\"%s\"", $_) } @eggMoveConstants),
			join(", ", map { sprintf ("%d", $_) } @eventMoves),
			join(", ", map { sprintf ("\"%s\"", $_) } @eventMoveConstants),
			$pokemonNames{$index}
			);
	}
	else
	{
		printf("\t\t%d: { initial: [ %s ],\n\t\t\t\tlevelup: { \n%s\t\t\t\t},\n\t\t\t\ttms: [ %s ],\n\t\t\t\thms: [ %s ],\n\t\t\t\tmts: [ %s ],\n\t\t\t\tegg_moves: [ %s ],\n\t\t\t\tevent_moves: [ %s ],\n\n\t\t}, // %s\n",
			$index, 
			join(", ", map { sprintf ("%d", $_) } @initialUnsorted),
			join("", map { (ref($levelupHash{$_}) ? sprintf ("\t\t\t\t\t%d: [ %s ],\n", $_, join(", ", @{$levelupHash{$_}})) : sprintf ("\t\t\t\t\t%d: %d,\n", $_, $levelupHash{$_})) } @levelupKeys),
			join(", ", map { sprintf ("%d", $_) } @tms),
			join(", ", map { sprintf ("%d", $_) } @hms),
			join(", ", map { sprintf ("%d", $_) } @mts),
			join(", ", map { sprintf ("%d", $_) } @eggMoves),
			join(", ", map { sprintf ("%s", $_) } @eventMoves),
			$pokemonNames{$index}
			);
	}
}
print <<END;
};

(function () {
  // Static initialization code
  Object.keys(pokemon_tms_lookup).forEach(key => {
	  var value = pokemon_tms_lookup[key];
	  
	  PokemonMovesLookup[key] = value;
  });
})();
END

print <<END;
function SpeciesNameLookup() {
  // Constructor body
}

var pokemon_species_lookup = { 
END
for(my $index = 0; $index < 256; $index++)
{
	printf("\t\"%d\": \"%s\",\n", $index, $pokemonNames{$index});
}
print <<END;
};

(function () {
  // Static initialization code
  Object.keys(pokemon_species_lookup).forEach(key => {
	  var value = pokemon_species_lookup[key];
	  
	  SpeciesNameLookup[key] = value;
  });
})();
END

print <<END;
function PokemonIndexToDexIndex() {
  // Constructor body
}

var pokemon_index_lookup = {
END
for(my $i = 0; $i < 256; $i++)
{
	my $index = $i;
	printf("\t0x%02x: %d,\n", $i, $indexToPokedexLookup{$index});
}
print <<END;
};

(function () {
  // Static initialization code
  Object.keys(pokemon_index_lookup).forEach(key => {
	  var value = pokemon_index_lookup[key];
	  
	  PokemonIndexToDexIndex[key] = value;
  });
})();
END

print <<END;
function DexIndexToPokemonIndex() {
  // Constructor body
}

var index_pokemon_lookup = {
END
for(my $i = 0; $i < 256; $i++)
{
	my $index = $i;
	printf("\t%d: %d,\n", $i, $pokedexToIndexLookup{$index});
}
print <<END;
};

(function () {
  // Static initialization code
  Object.keys(index_pokemon_lookup).forEach(key => {
	  var value = index_pokemon_lookup[key];
	  
	  DexIndexToPokemonIndex[key] = value;
  });
})();
END