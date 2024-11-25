#!/usr/bin/perl
use utf8;
use warnings;
use strict;
use Data::Dumper qw(Dumper);
use List::Util qw(uniq);
use Fcntl qw(SEEK_SET SEEK_CUR SEEK_END);

my $POKEMON_BASE_STATS_CRYSTAL_START = 0x51424;
my $POKEMON_BASE_STATS_GOLD_START = 0x51B0B;
my $POKEMON_BASE_STATS_ENTRY_OFFSET = 0x51444 - 0x51424;

my $POKEMON_EVOS_ATTACKS_CRYSTAL_START = 0x427A7;
my $POKEMON_EVOS_ATTACKS_GOLD_START = 0x429B3;
my $POKEMON_EVOS_ATTACKS_POINTERS_CRYSTAL_START = 0x425B1;
my $POKEMON_EVOS_ATTACKS_POINTERS_GOLD_START = 0x427BD;
my $POKEMON_EVOS_ATTACKS_POINTERS_CRYSTAL_MEMORY_START = 0x67a7;
my $POKEMON_EVOS_ATTACKS_POINTERS_GOLD_MEMORY_START = 0x69b3;

my $POKEMON_EGG_MOVES_CRYSTAL_START = 0x23D07;
my $POKEMON_EGG_MOVES_GOLD_START = 0x23BF4;
my $POKEMON_EGG_MOVES_POINTERS_CRYSTAL_START = 0x23B11;
my $POKEMON_EGG_MOVES_GOLD_POINTERS_START = 0x239FE;
my $POKEMON_EGG_MOVES_POINTERS_CRYSTAL_MEMORY_START = 0x7D07;
my $POKEMON_EGG_MOVES_GOLD_POINTERS_MEMORY_START = 0x7BF4;


my $POKEMON_BASE_STATS_START;
my $POKEMON_EVOS_ATTACKS_START;
my $POKEMON_EVOS_ATTACKS_POINTERS_START;
my $POKEMON_EVOS_ATTACKS_POINTERS_MEMORY_START;
my $POKEMON_EGG_MOVES_START;
my $POKEMON_EGG_MOVES_POINTERS_START;
my $POKEMON_EGG_MOVES_POINTERS_MEMORY_START;
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

#deterine which rom file we are using and the offsets of the base stats data in the pokemon rom file.
if($romfile =~ /(^.*?[\\\/])?[^\\\/]*[Gg][Oo][Ll][Dd][^\\\/]*$/)
{
	$POKEMON_BASE_STATS_START = $POKEMON_BASE_STATS_GOLD_START;
	$POKEMON_EVOS_ATTACKS_START = $POKEMON_EVOS_ATTACKS_GOLD_START;
	$POKEMON_EVOS_ATTACKS_POINTERS_START = $POKEMON_EVOS_ATTACKS_POINTERS_GOLD_START;
	$POKEMON_EVOS_ATTACKS_POINTERS_MEMORY_START = $POKEMON_EVOS_ATTACKS_POINTERS_GOLD_MEMORY_START;
	$POKEMON_EGG_MOVES_START = $POKEMON_EGG_MOVES_GOLD_START;
	$POKEMON_EGG_MOVES_POINTERS_START = $POKEMON_EGG_MOVES_GOLD_POINTERS_START;
	$POKEMON_EGG_MOVES_POINTERS_MEMORY_START = $POKEMON_EGG_MOVES_GOLD_POINTERS_MEMORY_START;
	print("gold\n");
}
elsif($romfile =~ /^(.*?[\\\/])?[^\\\/]*[Cc][Rr][Yy][Ss][Tt][Aa][Ll][^\\\/]*$/)
{
	$POKEMON_BASE_STATS_START = $POKEMON_BASE_STATS_CRYSTAL_START;
	$POKEMON_EVOS_ATTACKS_START = $POKEMON_EVOS_ATTACKS_CRYSTAL_START;
	$POKEMON_EVOS_ATTACKS_POINTERS_START = $POKEMON_EVOS_ATTACKS_POINTERS_CRYSTAL_START;
	$POKEMON_EVOS_ATTACKS_POINTERS_MEMORY_START = $POKEMON_EVOS_ATTACKS_POINTERS_CRYSTAL_MEMORY_START;
	$POKEMON_EGG_MOVES_START = $POKEMON_EGG_MOVES_CRYSTAL_START;
	$POKEMON_EGG_MOVES_POINTERS_START = $POKEMON_EGG_MOVES_POINTERS_CRYSTAL_START;
	$POKEMON_EGG_MOVES_POINTERS_MEMORY_START = $POKEMON_EGG_MOVES_POINTERS_CRYSTAL_MEMORY_START;
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

$pokemonConstantsData =~ /^; pokemon ids(.*?[\r\n])(\s|[\r\n])*; Unown forms/s;
$pokemonConstantsData = $1;

while ($pokemonConstantsData =~ /const\s+([^\s]*)\s*(?:;\s*([0-9A-Fa-f]{2,2}))?/sg) {
	$pokemonIndexToConstantsLookup{hex($2)} = $1;
	$pokemonConstantsToIndicesLookup{$1} = hex($2);
}

# manually add the glitchmon
$pokemonIndexToConstantsLookup{0xFC} = "?????FC";
$pokemonIndexToConstantsLookup{0xFE} = "?????FE";
$pokemonIndexToConstantsLookup{0xFF} = "?????FF";
$pokemonIndexToConstantsLookup{0x00} = "?????00";
$pokemonConstantsToIndicesLookup{"?????FC"} = 0xFC;
$pokemonConstantsToIndicesLookup{"?????FE"} = 0xFE;
$pokemonConstantsToIndicesLookup{"?????FF"} = 0xFF;
$pokemonConstantsToIndicesLookup{"?????00"} = 0x00;

# read the base stats directly from ROM
open(my $pokemonbasestatsfh, '<:raw', $ARGV[0]) or die "Could not open $ARGV[0]: $!";
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
for(my $i = 0; $i < 256; $i++)
{
	my %curPokemonStats = ();
	my %curPokemonMoves = ();
	my %baseStats = ();
	my $curOffset = $i * $POKEMON_BASE_STATS_ENTRY_OFFSET;
	my $idx = $baseStatBytes[$curOffset + 0];
	my $hp = $baseStatBytes[$curOffset + 1];
	my $atk = $baseStatBytes[$curOffset + 2];
	my $def = $baseStatBytes[$curOffset + 3];
	my $spd = $baseStatBytes[$curOffset + 4];
	my $spcA = $baseStatBytes[$curOffset + 5];
	my $spcD = $baseStatBytes[$curOffset + 6];
	my @typs = ($baseStatBytes[$curOffset + 7], $baseStatBytes[$curOffset + 8]);
	my @types = ();
	my @tms = ();
	my @hms = ();
	my @mts = ();
	# 9 = cath_rate
	# 10 - base exp
	# 11 12 - items
	# 13 - sex ratio
	# 14 - unknown
	# 15 - steps to hatch
	# 16 - unknown 2'
	# 17 - front dimensions
	# 18 19 20 21 unused
	my $growthRate = $baseStatBytes[$curOffset + 22];
	# 23 - egg groups
	# 24-31 - tms/hms/tutor moves
	my @tmHmMTs = ($baseStatBytes[$curOffset + 24], $baseStatBytes[$curOffset + 25], 
					$baseStatBytes[$curOffset + 26], $baseStatBytes[$curOffset + 27], 
					$baseStatBytes[$curOffset + 28], $baseStatBytes[$curOffset + 29],
					$baseStatBytes[$curOffset + 30], $baseStatBytes[$curOffset + 31]);
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
	$baseStats{"sp_atk"} = $spcA;
	$baseStats{"sp_def"} = $spcD;
	
	$curPokemonStats{"growth_rate"} = $growthRate;
	$curPokemonStats{"base_stats"} = \%baseStats;
	$curPokemonStats{"types"} = \@types;
	$curPokemonMoves{"tms"} = \@tms;
	$curPokemonMoves{"hms"} = \@hms;
	$curPokemonMoves{"mts"} = \@mts;
	
	$pokemonStats{(($i + 1) % 256)} = \%curPokemonStats;
	$pokemonMoves{(($i + 1) % 256)} = \%curPokemonMoves;
}

# read the base stats directly from ROM
open(my $pokemonevosattacksfh, '<:raw', $ARGV[0]) or die "Could not open $ARGV[0]: $!";
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

my $pokemonEvosAttacksPointersOffset = $POKEMON_EVOS_ATTACKS_POINTERS_START;
for(my $i = 0; $i < 256; $i++)
{
	my @evolutions = ();
	my %levelup = ();
	my @initial = ();
	my $lowerByte = $evosAttacksBytes[$pokemonEvosAttacksPointersOffset];
	my $higherByte = $evosAttacksBytes[$pokemonEvosAttacksPointersOffset + 1];
	my $memoryOffset = ($higherByte << 8) | $lowerByte;
	my $romOffset = $memoryOffset - $POKEMON_EVOS_ATTACKS_POINTERS_MEMORY_START;
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
			my $species = $evosAttacksBytes[$pokemonEvosAttacksOffset];
			$pokemonEvosAttacksOffset++;
			
			my %evolution = ();
			$evolution{"evolution"} = "EVOLVE_ITEM";
			$evolution{"usedItem"} = $usedItem;
			$evolution{"species"} = $species;
			
			push(@evolutions, \%evolution);
		}
		elsif($evosAttacksBytes[$pokemonEvosAttacksOffset] == 3) # EVOLVE_TRADE
		{
			$pokemonEvosAttacksOffset++;
			my $heldItem = $evosAttacksBytes[$pokemonEvosAttacksOffset];
			$pokemonEvosAttacksOffset++;
			my $species = $evosAttacksBytes[$pokemonEvosAttacksOffset];
			$pokemonEvosAttacksOffset++;
						
			my %evolution = ();
			$evolution{"evolution"} = "EVOLVE_TRADE";
			$evolution{"heldItem"} = $heldItem;
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
			#print("unexpected evolution trigger: " . (($i + 1) % 256) . ", " . $evosAttacksBytes[$pokemonEvosAttacksOffset] . "\n");
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
	
	#$pokemonEvosAttacksData{(($i + 1) % 256)} = \%pokemonEvosAttackData;
	$pokemonMoves{(($i + 1) % 256)}{"initial"} = \@initial;
	$pokemonMoves{(($i + 1) % 256)}{"levelup"} = \%levelup;
}

# read the egg moves directly from ROM
open(my $pokemoneggmovesfh, '<:raw', $ARGV[0]) or die "Could not open $ARGV[0]: $!";
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
for(my $i = 0; $i < 256; $i++)
{
	my @egMoves = ();
	my $lowerByte = $eggMovesBytes[$eggMovesPointersOffset];
	my $higherByte = $eggMovesBytes[$eggMovesPointersOffset + 1];
	my $memoryOffset = ($higherByte << 8) | $lowerByte;
	my $romOffset = $memoryOffset - $POKEMON_EGG_MOVES_POINTERS_MEMORY_START;
	my $romAddr = $POKEMON_EGG_MOVES_START + $romOffset;
	my $eggMovesOffset = $romAddr;
	$eggMovesPointersOffset+=2;
	
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
	my @eggMoves = uniq(@egMoves);
	$pokemonMoves{(($i + 1) % 256)}{"egg_moves"} = \@eggMoves;
}

# Parse the charmap
open(my $pokemonnamesfh, "<:encoding(utf8)", "$disassembyDir/data/pokemon/names.asm") or die "Could not open $disassembyDir/data/pokemon/names.asm: $!";

my %pokemonNames = ();
my $curPokemonIdx = 0;
while(<$pokemonnamesfh>) {
	my $line = $_;
	if($line =~ /^\s+db\s+"([^\"]*)"\s*/g)
	{
		my $name = $1;
		$name =~ s/@//g;
		$name =~ s/([^\x00-\x7F])/sprintf "\\x{%04x}",ord($1)/eg;
		$pokemonNames{(($curPokemonIdx + 1) % 256)} = $name;
		$curPokemonIdx++;
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
#print(Dumper(\%pokemonNames));

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
	printf("\t%d: { growth_rate: 0x%02x,\n\t\t\tbase_stats: { \"hp\": %d, \"atk\": %d, \"def\": %d, \"spd\": %d, \"sp_atk\": %d, \"sp_def\": %d },\n\t\t\ttypes: [ %s ],\n\t}, // %s\n", 
		$i, $pokemonStats{$i}{"growth_rate"}, $pokemonStats{$i}{"base_stats"}{"hp"}, $pokemonStats{$i}{"base_stats"}{"atk"}, $pokemonStats{$i}{"base_stats"}{"def"},
		$pokemonStats{$i}{"base_stats"}{"spd"}, $pokemonStats{$i}{"base_stats"}{"sp_atk"}, $pokemonStats{$i}{"base_stats"}{"sp_def"}, 
		join(", ", map { sprintf "%d", $_ } @{$pokemonStats{$i}{"types"}}), $pokemonNames{$i});
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
	printf("\t0x%02x: %d,\n", $i, $i);
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
	printf("\t%d: %d,\n", $i, $i);
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