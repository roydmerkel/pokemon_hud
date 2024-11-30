#!/usr/bin/perl
use utf8;
use warnings;
use strict;
use Data::Dumper qw(Dumper);
use List::Util qw(uniq min);
use Fcntl qw(SEEK_SET SEEK_CUR SEEK_END);

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
my $POKEMON_EVOS_ATTACKS_POINTERS_CRYSTAL_MEMORY_START = 0x67a7;
my $POKEMON_EVOS_ATTACKS_POINTERS_GOLD_MEMORY_START = 0x69b3;

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
my $POKEMON_EGG_MOVES_POINTERS_CRYSTAL_MEMORY_START = 0x7D07;
my $POKEMON_EGG_MOVES_GOLD_POINTERS_MEMORY_START = 0x7BF4;

my $POKEMON_DEX_ORDER_TABLE_RED_START = 0x41024;
my $POKEMON_DEX_ORDER_TABLE_YELLOW_START = 0x410B1;
my $POKEMON_DEX_ORDER_TABLE_GOLD_START = 0x00;
my $POKEMON_DEX_ORDER_TABLE_CRYSTAL_START = 0x00;

my $POKEMON_BASE_STATS_START;
my $POKEMON_EVOS_ATTACKS_START;
my $POKEMON_EVOS_ATTACKS_MEMORY_START;
my $POKEMON_EVOS_ATTACKS_POINTERS_START;
my $POKEMON_EVOS_ATTACKS_POINTERS_MEMORY_START;
my $POKEMON_EGG_MOVES_START;
my $POKEMON_EGG_MOVES_POINTERS_START;
my $POKEMON_EGG_MOVES_POINTERS_MEMORY_START;
my $POKEMON_BASE_STATS_ENTRY_OFFSET;

my $POKEDEX_ORDER_TABLE_START;

my $POKEMON_BONUS_POKEMON_BASE_STATS_START;
my $POKEMON_BONUS_POKEMON_POKEDEX;
my $POKEMON_BONUS_POKEMON_INDEX;

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
	$gen = 2;
	print("crystal\n");
}
else
{
	print("unknown rom file: $romfile\n");
	die();
}

# parse the rom file.
open(my $pokemonconstantsfh, "<:encoding(utf8)", "$disassembyDir/constants/pokemon_constants.asm") or die "Could not open $disassembyDir/constants/pokemon_constants.asm: $!";

my %pokemonIndexToConstantsLookup = ();
my %pokemonConstantsToIndicesLookup = ();
my %pokedexToIndexLookup = ();
my %indexToPokedexLookup = ();

my $pokemonConstantsData = "";
$namesLength = 0;
$bytesread = read($pokemonconstantsfh, $buffer, 10240);
while($bytesread)
{
	$pokemonConstantsData = $pokemonConstantsData . $buffer;
	$bytesread = read($pokemonconstantsfh, $buffer, 10240);
}
if(!defined $bytesread)
{
	die("Read failed for $pokemonconstantsfh: $!");
}

close($pokemonconstantsfh);
$pokemonconstantsfh = undef;

$pokemonConstantsData =~ /^; pokemon ids(.*?[\r\n])(\s|[\r\n])*(?:(?:; Unown forms)|(?:; starters))/s;
$pokemonConstantsData = $1;

while ($pokemonConstantsData =~ /const\s+([^\s]*)\s*(?:;\s*\$?([0-9A-Fa-f]{2,2}))?/sg) {
	$pokemonIndexToConstantsLookup{hex($2)} = $1;
	$pokemonConstantsToIndicesLookup{$1} = hex($2);
}

if($romfile =~ /(^.*?[\\\/])?[^\\\/]*[Rr][Ee][Dd][^\\\/]*$/ || $romfile =~ /(^.*?[\\\/])?[^\\\/]*[Yy][Ee][Ll][Ll][Oo][Ww][^\\\/]*$/)
{
	while ($pokemonConstantsData =~ /const_skip\s+;\s*\$?([0-9A-Fa-f]{2,2})/sg) {
		$pokemonIndexToConstantsLookup{hex($1)} = "NO_MON";
	}
}
else
{
	# manually add the glitchmon
	$pokemonIndexToConstantsLookup{0xFC} = "?????FC";
	$pokemonIndexToConstantsLookup{0xFE} = "?????FE";
	$pokemonIndexToConstantsLookup{0xFF} = "?????FF";
	$pokemonIndexToConstantsLookup{0x00} = "?????00";
	$pokemonConstantsToIndicesLookup{"?????FC"} = 0xFC;
	$pokemonConstantsToIndicesLookup{"?????FE"} = 0xFE;
	$pokemonConstantsToIndicesLookup{"?????FF"} = 0xFF;
	$pokemonConstantsToIndicesLookup{"?????00"} = 0x00;
}

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

	for(my $i = 0; $i <= 255; $i++)
	{
		if(!(defined $pokedexToIndexLookup{$i}) || !(exists $pokedexToIndexLookup{$i}))
		{
			my @arr = ();
			$pokedexToIndexLookup{$i} = \@arr;
		}
		if(!(defined $indexToPokedexLookup{$i}) || !(exists $indexToPokedexLookup{$i}))
		{
			my @arr = ();
			$indexToPokedexLookup{$i} = \@arr;
		}
		
	}
	# find all the bytes referencing each pokedex byte, this is our index.
	for(my $i = 0; $i <= 255; $i++)
	{
		my $offset = 0;
		my $romoffset = $POKEDEX_ORDER_TABLE_START + $offset;
		my $found = (1 == 0);
		
		while(!$found)
		{
			my $byte = $pokemonIndexDataLookupBytes[$romoffset];
			if($byte == ($i))
			{
				push(@{$pokedexToIndexLookup{$byte}}, ($offset + 1) % 256);
				push(@{$indexToPokedexLookup{($offset + 1) % 256}}, $byte);
				$found = (1 == 1);
			}
			else
			{
				$offset++;
				$romoffset++;
			}
		}
	}
	# use the reverse, but only for first 190 instances, and only whre a mapping doesn't exist.
	for(my $i = 0; $i <= 255; $i++)
	{
		my $offset = $i;
		my $romoffset = $POKEDEX_ORDER_TABLE_START + $offset;
		my $byte = $pokemonIndexDataLookupBytes[$romoffset];
		push(@{$pokedexToIndexLookup{$byte}}, ($offset + 1) % 256);
		push(@{$indexToPokedexLookup{($offset + 1) % 256}}, $byte);
		
		my @t = uniq(@{$pokedexToIndexLookup{$byte}});
		$pokedexToIndexLookup{$byte} = \@t;
		
		my @t2 = uniq(@{$indexToPokedexLookup{$offset % 256}});
		$indexToPokedexLookup{$offset % 256} = \@t2;
	}
}
else
{
	for(my $i = 0; $i <= 255; $i++)
	{
		my $index = $i;
		if($i == 0)
		{
			$index = 1;
		}
		else
		{
			$index = ($i + 1) % 256;
		}
		$pokedexToIndexLookup{$index} = [ ($i + 1) % 256 ];
		$indexToPokedexLookup{($i + 1) % 256} = [ $index ];
	}
}

# read the base stats directly from ROM
open(my $pokemonbasestatsfh, '<:raw', $romfile) or die "Could not open $romfile: $!";
binmode($pokemonbasestatsfh) or (close($pokemonbasestatsfh), die "Cannot set $pokemonbasestatsfh to binary mode: $!");
seek($pokemonbasestatsfh, $POKEMON_BASE_STATS_START, SEEK_SET) or (close($pokemonbasestatsfh), die "Cannot seek $pokemonbasestatsfh to move names: $!");
my @baseStatBytes = ();
my $baseDataLength = 0;
$bytesread = read($pokemonbasestatsfh, $buffer, $POKEMON_BASE_STATS_ENTRY_OFFSET * 16);
while($bytesread && ($baseDataLength < $POKEMON_BASE_STATS_ENTRY_OFFSET * 256))
{
	$baseDataLength += $bytesread;
	for(my $i = 0; $i < $bytesread; $i++)
	{
			push(@baseStatBytes, ord(substr($buffer, $i, 1)));
	}
	
	$bytesread = read($pokemonbasestatsfh, $buffer, $POKEMON_BASE_STATS_ENTRY_OFFSET * 16);
}
if(!defined $bytesread)
{
	die("Read failed for $pokemonbasestatsfh: $!");
}

close($pokemonbasestatsfh);
$pokemonbasestatsfh = undef;

# parse the stats into an array;
my %pokemonStats = ();
my %pokemonMoves = ();
for(my $index = 0; $index <= 255; $index++)
{
	my @pokedexes = @{$indexToPokedexLookup{$index}};
	for my $pokedex (@pokedexes)
	{
		my %curPokemonStats = ();
		my %curPokemonMoves = ();
		my %baseStats = ();
		my $curOffset = $pokedex;
		if($curOffset == 0)
		{
			$curOffset = 255;
		}
		else
		{
			$curOffset = $curOffset - 1;
		}
		$curOffset = $curOffset * $POKEMON_BASE_STATS_ENTRY_OFFSET;
		my $idx = $baseStatBytes[$curOffset + 0];
		my $hp = $baseStatBytes[$curOffset + 1];
		my $atk = $baseStatBytes[$curOffset + 2];
		my $def = $baseStatBytes[$curOffset + 3];
		my $spd = $baseStatBytes[$curOffset + 4];
		my $spc;
		my $spcA;
		my $spcD;
		my @typs;
		my @types = ();
		my @tms = ();
		my @hms = ();
		my @mts = ();
		if($gen == 1)
		{
			$spc = $baseStatBytes[$curOffset + 5];
			@typs = ($baseStatBytes[$curOffset + 6], $baseStatBytes[$curOffset + 7]);
			
			# 8 = cath_rate
			# 9 - base exp
		}
		else
		{
			$spcA = $baseStatBytes[$curOffset + 5];
			$spcD = $baseStatBytes[$curOffset + 6];
			@typs = ($baseStatBytes[$curOffset + 7], $baseStatBytes[$curOffset + 8]);
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
			if($baseStatBytes[$curOffset + 15])
			{
				push(@initial, $baseStatBytes[$curOffset + 15]);
			}
			if($baseStatBytes[$curOffset + 16])
			{
				push(@initial, $baseStatBytes[$curOffset + 16]);
			}
			if($baseStatBytes[$curOffset + 17])
			{
				push(@initial, $baseStatBytes[$curOffset + 17]);
			}
			if($baseStatBytes[$curOffset + 18])
			{
				push(@initial, $baseStatBytes[$curOffset + 18]);
			}

			$curPokemonMoves{"initial"} = \@initial;
		}
		
		my $growthRate;

		if($gen == 1)
		{		
			$growthRate = $baseStatBytes[$curOffset + 19];
		}
		else
		{
			$growthRate = $baseStatBytes[$curOffset + 22];
		}
		
		# N.A./23 - egg groups
		# 20-26/24-31 - tms/hms/tutor moves
		
		my @tmHmMTs;
		if($gen == 1)
		{
			@tmHmMTs = ($baseStatBytes[$curOffset + 20], $baseStatBytes[$curOffset + 21], 
						$baseStatBytes[$curOffset + 22], $baseStatBytes[$curOffset + 23], 
						$baseStatBytes[$curOffset + 24], $baseStatBytes[$curOffset + 25],
						$baseStatBytes[$curOffset + 26]);
		}
		else
		{
			@tmHmMTs = ($baseStatBytes[$curOffset + 24], $baseStatBytes[$curOffset + 25], 
						$baseStatBytes[$curOffset + 26], $baseStatBytes[$curOffset + 27], 
						$baseStatBytes[$curOffset + 28], $baseStatBytes[$curOffset + 29],
						$baseStatBytes[$curOffset + 30], $baseStatBytes[$curOffset + 31]);
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
					#push(@tms, $tmToMoveConstMap{$j});
					push(@tms, $j);
				}
				elsif($j <= $numTMs + $numHMs)
				{
					#push(@hms, $hmToMoveConstMap{$j - $numTMs});
					push(@hms, $j - $numTMs);
				}
				elsif($j <= $numTMs + $numHMs + $numMTs)
				{
					#push(@mts, $mtToMoveConstMap{$j - $numTMs - $numHMs});
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
		$curPokemonMoves{"hms"} = \@hms;
		$curPokemonMoves{"mts"} = \@mts;
		
		$pokemonStats{$pokedex} = \%curPokemonStats;
		$pokemonMoves{$pokedex} = \%curPokemonMoves;
	}
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
	my @hms = ();
	my @mts = ();
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
		if($bonusStatBytes[$curOffset + 15])
		{
			push(@initial, $bonusStatBytes[$curOffset + 15]);
		}
		if($bonusStatBytes[$curOffset + 16])
		{
			push(@initial, $bonusStatBytes[$curOffset + 16]);
		}
		if($bonusStatBytes[$curOffset + 17])
		{
			push(@initial, $bonusStatBytes[$curOffset + 17]);
		}
		if($bonusStatBytes[$curOffset + 18])
		{
			push(@initial, $bonusStatBytes[$curOffset + 18]);
		}

		$curPokemonMoves{"initial"} = \@initial;
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
				#push(@tms, $tmToMoveConstMap{$j});
				push(@tms, $j);
			}
			elsif($j <= $numTMs + $numHMs)
			{
				#push(@hms, $hmToMoveConstMap{$j - $numTMs});
				push(@hms, $j - $numTMs);
			}
			elsif($j <= $numTMs + $numHMs + $numMTs)
			{
				#push(@mts, $mtToMoveConstMap{$j - $numTMs - $numHMs});
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
	$curPokemonMoves{"hms"} = \@hms;
	$curPokemonMoves{"mts"} = \@mts;
	
	$pokemonStats{$pokedex} = \%curPokemonStats;
	$pokemonMoves{$pokedex} = \%curPokemonMoves;
}
	
# read the base stats directly from ROM
open(my $pokemonevosattacksfh, '<:raw', $romfile) or die "Could not open $romfile: $!";
binmode($pokemonevosattacksfh) or (close($pokemonevosattacksfh), die "Cannot set $pokemonevosattacksfh to binary mode: $!");
seek($pokemonevosattacksfh, 0, SEEK_SET) or (close($pokemonevosattacksfh), die "Cannot seek $pokemonevosattacksfh to move names: $!");
my @evosAttacksBytes = ();
my $evosAttacksDataLength = 0;
$bytesread = read($pokemonevosattacksfh, $buffer, 10240);
while($bytesread)
{
	$evosAttacksDataLength += $bytesread;
	for(my $i = 0; $i < $bytesread; $i++)
	{
			push(@evosAttacksBytes, ord(substr($buffer, $i, 1)));
	}
	
	$bytesread = read($pokemonevosattacksfh, $buffer, 10240);
}
if(!defined $bytesread)
{
	die("Read failed for $pokemonevosattacksfh: $!");
}

close($pokemonevosattacksfh);
$pokemonevosattacksfh = undef;

my %evosAttacksSet = ();
for(my $i = 0; $i < 255; $i++)
{
	$evosAttacksSet{$i} = (1 == 0);
}

my $pokemonEvosAttacksPointersOffset = $POKEMON_EVOS_ATTACKS_POINTERS_START;
for(my $index = 1; $index <= 256; $index++)
{
	my @evolutions = ();
	my %levelup = ();
	my @initial;
	my @pokedexes = @{$indexToPokedexLookup{$index % 256}};
	if($gen == 1)
	{
		@initial = @{$pokemonMoves{$pokedexes[0]}{"initial"}};
	}
	else
	{
		@initial = ();
	}

	my $lowerByte = $evosAttacksBytes[$pokemonEvosAttacksPointersOffset];
	my $higherByte = $evosAttacksBytes[$pokemonEvosAttacksPointersOffset + 1];
	my $memoryOffset = ($higherByte << 8) | $lowerByte;
	my $romOffset = $memoryOffset - $POKEMON_EVOS_ATTACKS_MEMORY_START;
	my $romAddr = $POKEMON_EVOS_ATTACKS_START + $romOffset;
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
		elsif($evosAttacksBytes[$pokemonEvosAttacksOffset] == 4) # EVOLVE_HAPPINESS
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
		elsif($evosAttacksBytes[$pokemonEvosAttacksOffset] == 5) # EVOLVE_STAT
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
			$pokemonEvosAttacksOffset++;
			#print("unexpected evolution trigger: " . $index . "," . $pokedex . ", " . $evosAttacksBytes[$pokemonEvosAttacksOffset] . "\n");
			#die();
		}
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
			
			if($level <= 1)
			{
				push(@initial, $move);
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
			}
		}
	}
	
	#$pokemonEvosAttackData{"evolutions"} = \@evolutions;
	#$pokemonEvosAttackData{"attacks"} = \@attacks;
		
	for my $pokedex (@pokedexes)
	{
		if(!$evosAttacksSet{$pokedex})
		{
			$evosAttacksSet{$pokedex} = (1 == 1);
			#$pokemonEvosAttacksData{$pokedex} = \%pokemonEvosAttackData;
			$pokemonMoves{$pokedex}{"initial"} = \@initial;
			$pokemonMoves{$pokedex}{"levelup"} = \%levelup;
		}
	}
}

if($POKEMON_EGG_MOVES_START)
{
	my %eggMovesSet = ();
	for(my $i = 0; $i < 255; $i++)
	{
		$eggMovesSet{$i} = (1 == 0);
	}

	# read the egg moves directly from ROM
	open(my $pokemoneggmovesfh, '<:raw', $romfile) or die "Could not open $romfile: $!";
	binmode($pokemoneggmovesfh) or (close($pokemoneggmovesfh), die "Cannot set $pokemoneggmovesfh to binary mode: $!");
	seek($pokemoneggmovesfh, 0, SEEK_SET) or (close($pokemoneggmovesfh), die "Cannot seek $pokemoneggmovesfh to move names: $!");
	my @eggMovesBytes = ();
	my $evosEggMovesDataLength = 0;
	$bytesread = read($pokemoneggmovesfh, $buffer, 10240);
	while($bytesread)
	{
		$evosEggMovesDataLength += $bytesread;
		for(my $i = 0; $i < $bytesread; $i++)
		{
				push(@eggMovesBytes, ord(substr($buffer, $i, 1)));
		}
		
		$bytesread = read($pokemoneggmovesfh, $buffer, 10240);
	}
	if(!defined $bytesread)
	{
		die("Read failed for $pokemoneggmovesfh: $!");
	}

	close($pokemoneggmovesfh);
	$pokemoneggmovesfh = undef;

	my $eggMovesPointersOffset = $POKEMON_EGG_MOVES_POINTERS_START;
	# step through the pointers.
	for(my $index = 1; $index <= 256; $index++)
	{
		my @egMoves = ();
		my $lowerByte = $eggMovesBytes[$eggMovesPointersOffset];
		my $higherByte = $eggMovesBytes[$eggMovesPointersOffset + 1];
		my $memoryOffset = ($higherByte << 8) | $lowerByte;
		my $romOffset = $memoryOffset - $POKEMON_EGG_MOVES_POINTERS_MEMORY_START;
		my $romAddr = $POKEMON_EGG_MOVES_START + $romOffset;
		my $eggMovesOffset = $romAddr;
		$eggMovesPointersOffset+=2;
		
		my @pokedexes = @{$indexToPokedexLookup{$index % 256}};
		
		while(1)
		{
			if($eggMovesBytes[$eggMovesOffset] != 0xFF)
			{
				my $eggMove = $eggMovesBytes[$eggMovesOffset];
				#push(@egMoves, $moveConstantsLookup{$eggMove});
				push(@egMoves, $eggMove);
				$eggMovesOffset++;
			}
			else
			{
				$eggMovesOffset++;
				last;
			}
		}
		
		for my $pokedex (@pokedexes)
		{
			if(!$eggMovesSet{$pokedex})
			{
				my @eggMoves = uniq(@egMoves);
				$pokemonMoves{$pokedex}{"egg_moves"} = \@eggMoves;
				$eggMovesSet{$pokedex} = (1 == 1);
			}
		}
	}
}
else
{
	for(my $i = 0; $i < 256; $i++)
	{
		my @eggMoves = ();
		$pokemonMoves{(($i + 1) % 256)}{"egg_moves"} = \@eggMoves;
	}
}

# Parse the charmap
open(my $pokemonnamesfh, "<:encoding(utf8)", "$disassembyDir/data/pokemon/names.asm") or die "Could not open $disassembyDir/data/pokemon/names.asm: $!";

my %pokemonNames = ();
my $curPokemonIdx = 1;
for(my $i = 0; $i < 256; $i++)
{
	$pokemonNames{$i} = "";
}
while(<$pokemonnamesfh>) {
	my $line = $_;
	if($line =~ /^\s+db\s+"([^\"]*)"\s*/g)
	{
		my $name = $1;
		$name =~ s/@//g;
		$name =~ s/([^\x00-\x7F])/sprintf "\\x{%04x}",ord($1)/eg;
		my @pokedexes = @{$indexToPokedexLookup{$curPokemonIdx}};
		for my $pokedex (@pokedexes)
		{
			$pokemonNames{$pokedex} = $name;
		}
		$curPokemonIdx = ($curPokemonIdx + 1) % 256;
	}
}

#print(Dumper($pokemonConstantsData));
#print(Dumper(\%pokemonIndexToConstantsLookup));
#print(Dumper(\%pokemonConstantsToIndicesLookup));
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
print(Dumper(\%pokemonNames));

#print(Dumper(\%pokedexToIndexLookup));
#print(Dumper(\%indexToPokedexLookup));

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
for(my $i = 0; $i < 256; $i++)
{
	print("i: $i\n");
	if($gen == 1)
	{
		my $growthRate = $pokemonStats{$i}{"growth_rate"};
		my $hp = $pokemonStats{$i}{"base_stats"}{"hp"};
		my $atk = $pokemonStats{$i}{"base_stats"}{"atk"};
		my $def = $pokemonStats{$i}{"base_stats"}{"def"};
		my $spd = $pokemonStats{$i}{"base_stats"}{"spd"};
		my $spc = $pokemonStats{$i}{"base_stats"}{"spc"};
		my @types = @{$pokemonStats{$i}{"types"}};
		my $name = $pokemonNames{$i};
		printf("\t%d: { growth_rate: 0x%02x,\n\t\t\tbase_stats: { \"hp\": %d, \"atk\": %d, \"def\": %d, \"spd\": %d, \"spc\": %d },\n\t\t\ttypes: [ %s ],\n\t}, // %s\n", 
			$i, $growthRate, $hp, $atk, $def, $spd, $spc, 
			join(", ", map { sprintf "%d", $_ } @types), $name);
	}
	else
	{
		my $growthRate = $pokemonStats{$i}{"growth_rate"};
		my $hp = $pokemonStats{$i}{"base_stats"}{"hp"};
		my $atk = $pokemonStats{$i}{"base_stats"}{"atk"};
		my $def = $pokemonStats{$i}{"base_stats"}{"def"};
		my $spd = $pokemonStats{$i}{"base_stats"}{"spd"};
		my $spAtk = $pokemonStats{$i}{"base_stats"}{"sp_atk"};
		my $spDef = $pokemonStats{$i}{"base_stats"}{"sp_def"};
		my @types = @{$pokemonStats{$i}{"types"}};
		my $name = $pokemonNames{$i};
		printf("\t%d: { growth_rate: 0x%02x,\n\t\t\tbase_stats: { \"hp\": %d, \"atk\": %d, \"def\": %d, \"spd\": %d, \"sp_atk\": %d, \"sp_def\": %d },\n\t\t\ttypes: [ %s ],\n\t}, // %s\n", 
			$i, $growthRate, $hp, $atk, $def, $spd, $spAtk, $spDef, 
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
		}, // undefined / default value. 
END
for(my $i = 0; $i < 256; $i++)
{
	my $levelup = $pokemonMoves{$i}{"levelup"};
	my %levelupHash = %{ $levelup};
	my @levelupKeysUnsorted = keys %levelupHash;
	my @levelupKeys = sort {$a <=> $b} @levelupKeysUnsorted;
	my @initialUnsorted = @{$pokemonMoves{$i}{"initial"}};
	my @initial = sort {$a <=> $b} @initialUnsorted;
	my $curPokemonMovesRef = $pokemonMoves{$i};
	my %curPokemonMoves = %{ $curPokemonMovesRef};
	my @tmsUnsorted = @{$curPokemonMoves{"tms"}};
	my @hmsUnsorted = @{$curPokemonMoves{"hms"}};
	my @mtsUnsorted = @{$curPokemonMoves{"mts"}};
	my @eggMovesUnsorted = @{$curPokemonMoves{"egg_moves"}};
	my @tms = sort {$a <=> $b} @tmsUnsorted;
	my @hms = sort {$a <=> $b} @hmsUnsorted;
	my @mts = sort {$a <=> $b} @mtsUnsorted;
	my @eggMoves = sort {$a <=> $b} @eggMovesUnsorted;
	printf("\t\t%d: { initial: [ %s ],\n\t\t\t\tlevelup: { \n%s\t\t\t\t},\n\t\t\t\ttms: [ %s ],\n\t\t\t\thms: [ %s ],\n\t\t\t\tmts: [ %s ],\n\t\t\t\tegg_moves: [ %s ],\n\t\t}, // %s\n",
		$i, 
		join(", ", map { sprintf ("%d", $_) } @initialUnsorted),
		join("", map { (ref($levelupHash{$_}) ? sprintf ("\t\t\t\t\t%d: [ %s ],\n", $_, join(", ", @{$levelupHash{$_}})) : sprintf ("\t\t\t\t\t%d: %d,\n", $_, $levelupHash{$_})) } @levelupKeys),
		join(", ", map { sprintf ("%d", $_) } @tms),
		join(", ", map { sprintf ("%d", $_) } @hms),
		join(", ", map { sprintf ("%d", $_) } @mts),
		join(", ", map { sprintf ("%d", $_) } @eggMoves),
		$pokemonNames{$i}
		);
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
for(my $i = 0; $i < 256; $i++)
{
	printf("\t\"%d\": \"%s\",\n", $i, $pokemonNames{$i});
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
	printf("\t0x%02x: %d,\n", $i, min(@{$indexToPokedexLookup{$index}}));
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
	printf("\t%d: %d,\n", $i, min(@{$pokedexToIndexLookup{$index}}));
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