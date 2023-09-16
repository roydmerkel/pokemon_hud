use Data::Dump "pp";
use strict;
use JSON;

my $const_value;
my %pokemon_index;
my %index_pokemon;
my %pokedex_index;
my %index_pokedex;
my $const_name;
my $index_value;
my $index_value_2;
my %dex_pokedex_pokemon;
my %dex_pokemon_pokedex;
my %dex_pokedex_index_pokemon_index;
my %dex_pokemon_index_pokedex_index;
my %pokemon_index_name;
my %pokemon_name;
my %pokemon_level_up_moves;
my %pokemon_evolutions;
my %jump_table_level_up_moves;
my %jump_table_evolutions;
my $tableStart;
my $tableEnd;
my $curJumpTable;
my $curJumpTableState;
my @baseStateIncludes;
my $hasDex;
my $curDex;
my $hasSpriteDimensions;
my $hasSpritePics;
my $hasInitialMoves;
my $hasGrowthRate;
my %initial_moves;
my %tm_moves;
my %hm_moves;
my %base_stats;
my %types;
my $tmhmStart;
my $tmhmEnd;
my $hasBaseStats;
my $hasTypes;
my %moves_indexes;
my %indexes_moves;
my %tms_moves;
my %moves_tms;
my %hms_moves;
my %moves_hms;
my @pokedexIndexes;
my %types_indexes;
my %indexes_types;
my %pokemon_growth_rates;

sub uniq {
    my %seen;
    grep !$seen{$_}++, @_;
}

binmode(STDOUT, ":unicode");

$const_value=0;
%types_indexes = ();
%indexes_types = ();
open(my $type_constants_fh, "<:encoding(UTF-8)", "constants/type_constants.asm")   or die "Can't open < constants/type_constants.asm: $!";
while( my $line = <$type_constants_fh>)  {   
    if ( $line =~ /^\s*const_def\s+([^\s]+)\s*(;.*)?$/) {
		$const_value=$1;
    } elsif ( $line =~ /^\s*const_def\s*(;.*)?$/) {
		$const_value=0;
	} elsif( $line =~ /^\s*const_next\s+([^\s]+)\s*(;.*)?$/) {
		$const_value=$1;
	} elsif( $line =~ /^\s*const_skip\s*(;.*)?$/) {
		$const_value++;
	} elsif( $line =~ /^\s*const\s+([^\s]*)\s*(;.*)?$/) {
		$const_name = $1;
		$types_indexes{$const_name} = $const_value;
		$indexes_types{$const_value} = $const_name;
		
		$const_value++;
	}
}
close($type_constants_fh);

$const_value=0;
%pokemon_index = ();
%index_pokemon = ();
open(my $pokemon_constants_fh, "<:encoding(UTF-8)", "constants/pokemon_constants.asm")   or die "Can't open < constants/pokemon_constants.asm: $!";
while( my $line = <$pokemon_constants_fh>)  {   
    if ( $line =~ /^\s*const_def\s+([^\s]+)\s*(;.*)?$/) {
		$const_value=$1;
    } elsif ( $line =~ /^\s*const_def\s*(;.*)?$/) {
		$const_value=0;
	} elsif( $line =~ /^\s*const_skip\s*(;.*)?$/) {
		$const_value++;
	} elsif( $line =~ /^\s*const\s+([^\s]*)\s*(;.*)?$/) {
		$const_name = $1;
		$pokemon_index{$const_name} = $const_value;
		$index_pokemon{$const_value} = $const_name;
		
		$const_value++;
	}
}
close($pokemon_constants_fh);

$const_value=0;
%pokedex_index = ();
%index_pokedex = ();
open(my $pokedex_constants_fh, "<:encoding(UTF-8)", "constants/pokedex_constants.asm")   or die "Can't open < constants/pokedex_constants.asm: $!";
while( my $line = <$pokedex_constants_fh>)  {   
    if ( $line =~ /^\s*const_def\s+([^\s]*)\s*(;.*)?$/) {
		$const_value=$1;
    } elsif ( $line =~ /^\s*const_def\s*(;.*)?$/) {
		$const_value=0;
	} elsif( $line =~ /^\s*const_skip\s*(;.*)?$/) {
		$const_value++;
	} elsif( $line =~ /^\s*const\s+([^\s]*)\s*(;.*)?$/) {
		$const_name = $1;
		$pokedex_index{$const_name} = $const_value;
		$index_pokedex{$const_value} = $const_name;
		$const_value++;
	}
}
close($pokedex_constants_fh);

$index_value=1;
%dex_pokedex_pokemon = ();
%dex_pokemon_pokedex = ();
%dex_pokedex_index_pokemon_index = ();
%dex_pokemon_index_pokedex_index = ();
open(my $dex_order_fh, "<:encoding(UTF-8)", "data/pokemon/dex_order.asm")   or die "Can't open < data/pokemon/dex_order.asm: $!";
while( my $line = <$dex_order_fh>)  {
	if ( $line =~ /^\s*db\s+([^\s]*)\s*(;.*)?$/ ) {
		if ( $index_pokemon{$index_value} ) {
			if($1 eq 0)
			{
				$dex_pokedex_pokemon{$index_pokemon{$index_value}} = "NO_MON";
				$dex_pokemon_pokedex{"NO_MON"} = $index_pokemon{$index_value};
				
				$dex_pokedex_index_pokemon_index{0} = $index_value;
				$dex_pokemon_index_pokedex_index{$index_value} = 0;
			}
			else
			
			{
				$dex_pokedex_pokemon{$index_pokemon{$index_value}} = $1;
				$dex_pokemon_pokedex{$1} = $index_pokemon{$index_value};
				
				$dex_pokedex_index_pokemon_index{$pokedex_index{$1}} = $index_value;
				$dex_pokemon_index_pokedex_index{$index_value} = $pokedex_index{$1};
			}
		}
		$index_value++;
	}
}
close($dex_order_fh);

$index_value=1;
%pokemon_index_name = ();
%pokemon_name = ();
open(my $names_fh, "<:encoding(UTF-8)", "data/pokemon/names.asm") or die "Can't open < data/pokemon/dex_order.asm: $!";
while( my $line = <$names_fh>)  {
	if ( $line =~ /^\s*db\s+\"([^\"]*)\"\s*(;.*)?$/ ) {
		my $name = $1;
		$name =~ s/@+/ /g;
		$name =~ s/ +$//g;
		
		my $tempName = "";
		for my $i (0..length($name)-1) {
			my $char = substr($name, $i, 1);
			my $charord = ord($char);
			if ($charord >= 128)
			{
				$tempName .= '\u' . sprintf("%04X", $charord) . "";
			}
			else
			{
				$tempName .= $char;
			}
		}
		
		$pokemon_index_name{$index_value} = $tempName;
		$pokemon_name{$index_pokemon{$index_value}} = $tempName;
		$index_value++;
	}
}
close($names_fh);

%moves_indexes = ();
%indexes_moves = ();
$index_value=1;
open(my $names_fh, "<:encoding(UTF-8)", "data/moves/moves.asm") or die "Can't open < data/moves/moves.asm: $!";
while( my $line = <$names_fh>)  {
	if($line =~ /^\s*move\s+([^,\s]*)\s*,\s*.*$/) {
		$moves_indexes{$1} = $index_value;
		$indexes_moves{$index_value} = $1;
		$index_value++;
	}
}
close($names_fh);

%tms_moves = ();
%moves_tms = ();
%hms_moves = ();
%moves_hms = ();
$index_value=1;
$index_value_2 = 1;
open(my $item_constants_fh, "<:encoding(UTF-8)", "constants/item_constants.asm") or die "Can't open < constants/item_constants.asm: $!";
while( my $line = <$item_constants_fh>)  {
	if($line =~ /^\s*add_hm\s+([^,\s]*)\s*(;.*)?$/)
	{
		$hms_moves{$index_value} = $1;
		$moves_hms{$1} = $index_value;
		$index_value++;
	} elsif($line =~ /^\s*add_tm\s+([^,\s]*)\s*(;.*)?$/) {
		$tms_moves{$index_value_2} = $1;
		$moves_tms{$1} = $index_value_2;
		$index_value_2++;
	}
}
close($item_constants_fh);

$index_value=1;
%pokemon_level_up_moves=();
%pokemon_evolutions=();
%jump_table_level_up_moves = ();
%jump_table_evolutions = ();
$tableStart = (1 == 0);
$tableEnd = (1 == 0);
$curJumpTable = "";
$curJumpTableState = 0;
open(my $names_fh, "<:encoding(UTF-8)", "data/pokemon/evos_moves.asm") or die "Can't open < data/pokemon/evos_moves.asm: $!";
while (my $line = <$names_fh>) {
	if(!$tableStart && $line =~ /^\s*EvosMovesPointerTable:\s*(;.*)?$/)
	{
		$tableStart = (1 == 1);
	} elsif($tableStart && $line =~ /^\s*assert_table_length\s+.*$/) {
		$tableEnd = (1 == 1);
	} elsif($tableStart && !$tableEnd && $line =~ /^\s*d[a-zA-z]\s+([^\s]*)\s*(;.*)?$/) {
		$pokemon_level_up_moves{$index_value} = {};
		$pokemon_evolutions{$index_value} = { "level" => {}, "item" => {}, "trade" => []};
		$jump_table_level_up_moves{$1} = $pokemon_level_up_moves{$index_value};
		$jump_table_evolutions{$1} = $pokemon_evolutions{$index_value};
		$index_value++;
	} elsif($tableStart && $tableEnd && $line =~ /^\s*([^:]*):\s*(;.*)?$/) {
		$curJumpTable=$1;
		$curJumpTableState = 0;
	} elsif($curJumpTableState == 0 && $curJumpTable ne "" && $line =~ /^\s*;\s*Evolutions\s*$/) {
		$curJumpTableState = 1;
	} elsif($curJumpTableState == 1 && $line =~ /^\s*d[a-zA-Z]\s+EV_LEVEL\s*,\s*([0-9]+)\s*,\s*([^\s,]*)\s*(;.*)?$/) {
		my $evolutions = $jump_table_evolutions{$curJumpTable};
		my $level = $$evolutions{"level"};
		$$level{$1} = $pokedex_index{$dex_pokedex_pokemon{$2}};
	} elsif($curJumpTableState == 1 && $line =~ /^\s*d[a-zA-Z]\s+EV_ITEM\s*,\s*([^\s,]*)\s*,\s*([0-9]+)\s*,\s*([^\s,]*)\s*(;.*)?$/) {
		my $evolutions = $jump_table_evolutions{$curJumpTable};
		my $item = $$evolutions{"item"};
		$$item{$1} = $pokedex_index{$dex_pokedex_pokemon{$3}};
	} elsif($curJumpTableState == 1 && $line =~ /^\s*d[a-zA-Z]\s+EV_TRADE\s*,\s*([0-9]+)\s*,\s*([^\s,]*)\s*(;.*)?$/) {
		my $evolutions = $jump_table_evolutions{$curJumpTable};
		my $trade = $$evolutions{"trade"};
		push @$trade, $pokedex_index{$dex_pokedex_pokemon{$2}};
	} elsif($curJumpTableState == 1 && $line =~ /^\s*d[a-zA-Z]\s+0\s*(;.*)?$/) {
	} elsif($curJumpTableState == 1 && $line =~ /^\s*d[a-zA-Z]\s+(.*)$/) {
		print "unhandled: $1\n";
	} elsif($curJumpTableState == 1 && $curJumpTable ne "" && $line =~ /^\s*;\s*Learnset\s*$/) {
		$curJumpTableState = 2;
	} elsif($curJumpTableState == 2 && $line =~ /^\s*d[a-zA-Z]\s+([0-9]+)\s*,\s*([^\s,]*)\s*(;.*)?$/) {
		my $level_up = $jump_table_level_up_moves{$curJumpTable};
		if(!$$level_up{$1}) {
			$$level_up{$1} = [];
		}
		my $moves = $$level_up{$1};
		push(@$moves, $moves_indexes{$2});
	} elsif($curJumpTableState == 2 && $line =~ /^\s*d[a-zA-Z]\s+0\s*(;.*)?$/) {
	}
}
close($names_fh);

my $has_mew = (1 == 0);
$index_value=1;
@baseStateIncludes = ();
open(my $base_stats_fh, "<:encoding(UTF-8)", "data/pokemon/base_stats.asm") or die "Can't open < data/pokemon/base_stats.asm: $!";
while (my $line = <$base_stats_fh>) {
	if($line =~ /^\s*INCLUDE\s+\"([^\"]*)\"\s*(;.*)?$/) {
		push(@baseStateIncludes, $1);
		if($1 =~ /\/mew\.asm$/) {
			$has_mew = (1 == 1);
		}
	} elsif($line =~ /^\s*INCLUDE\s+([^\s]*)\s*(;.*)?$/) {
		push(@baseStateIncludes, $1);
		if($1 =~ /\/mew\.asm$/) {
			$has_mew = (1 == 1);
		}
	}
}
close($base_stats_fh);

if(!$has_mew)
{
	open(my $mew_fh, "<:encoding(UTF-8)", "data/pokemon/mew.asm") or die "Can't open < data/pokemon/mew.asm: $!";
	while (my $line = <$mew_fh>) {
		if($line =~ /^\s*INCLUDE\s+\"([^\"]*)\"\s*(;.*)?$/) {
			push(@baseStateIncludes, $1);
		} elsif($line =~ /^\s*INCLUDE\s+([^\s]*)\s*(;.*)?$/) {
			push(@baseStateIncludes, $1);
		}
	}
	close($mew_fh);
}

%initial_moves = ();
%tm_moves = ();
%hm_moves = ();
%base_stats = ();
%types = ();
%pokemon_growth_rates = ();
for my $include (@baseStateIncludes) {
	$hasDex = (1 == 0);
	$tmhmStart = (1 == 0);
	$tmhmEnd = (1 == 0);
	$hasBaseStats = (1 == 0);
	$hasTypes = (1 == 0);
	$hasSpriteDimensions = (1 == 0);
	$hasSpritePics = (1 == 0);
	$hasInitialMoves = (1 == 0);
	$hasGrowthRate = (1 == 0);
	$curDex = 0;
	open(my $fh, "<:encoding(UTF-8)", $include) or die "Can't open < $include: $!";
	while (my $line = <$fh>) {
		if(!$hasDex && $line =~ /^\s*d[a-zA-Z]\s+([^\s]*)\s*(;.*)?$/) {
			$hasDex = (1 == 1);
			$curDex = $pokedex_index{$1};
			$initial_moves{$curDex} = [];
			$tm_moves{$curDex} = [];
			$hm_moves{$curDex} = [];
			$base_stats{$curDex} = { hp => 0, atk => 0, def => 0, spd => 0, spc => 0 };
			$types{$curDex} = [];
			$pokemon_growth_rates{$curDex} = "";
		} elsif($hasDex && !$hasBaseStats && $line =~ /^\s*[dD][a-zA-Z]\s+([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*(;.*)?$/) {
			$hasBaseStats = (1 == 1);
			my $baseStatRef = $base_stats{$curDex};
			$$baseStatRef{"hp"} = $1;
			$$baseStatRef{"atk"} = $2;
			$$baseStatRef{"def"} = $3;
			$$baseStatRef{"spd"} = $4;
			$$baseStatRef{"spc"} = $5;
		} elsif($hasDex && $hasBaseStats && !$hasTypes && $line =~ /^\s*[dD][a-zA-Z]\s+([0-9A-Za-z_-]*)\s*,\s*([0-9A-Za-z_-]*)\s*(;.*)$/) {
			$hasTypes = (1 == 1);
			my $curTypes = $types{$curDex};
			#push(@$curTypes, $1);
			push(@$curTypes, $types_indexes{$1});
			if(!($1 eq $2))
			{
				#push(@$curTypes, $2);
				push(@$curTypes, $types_indexes{$2});
			}
		} elsif($hasDex && $hasBaseStats && $hasTypes && !$hasSpriteDimensions && $line =~ /^\s*[Ii][Nn][Cc][Bb][Ii][Nn]\s+.*$/) {
			$hasSpriteDimensions = (1 == 1);
		} elsif($hasDex && $hasBaseStats && $hasTypes && $hasSpriteDimensions && !$hasSpritePics && $line =~ /^\s*[dD][a-zA-Z]\s+.*$/) {
			$hasSpritePics = (1 == 1);
		} elsif($hasDex && $hasBaseStats && $hasTypes && $hasSpriteDimensions && $hasSpritePics && !$hasInitialMoves && $line =~ /^\s*[dD][a-zA-Z]\s+([a-zA-Z_]+)\s*,\s*([a-zA-Z_]+)\s*,\s*([a-zA-Z_]+)\s*,\s*([a-zA-Z_]+)\s*(;.*)?$/) {
			$hasInitialMoves = (1 == 1);
			my $curInitialMoves = $initial_moves{$curDex};
			if(!($1 eq "NO_MOVE") && !($1 eq "UNUSED") && !($1 eq ""))
			{
				push(@$curInitialMoves, $moves_indexes{$1});
			}
			if(!($2 eq "NO_MOVE") && !($2 eq "UNUSED") && !($2 eq ""))
			{
				push(@$curInitialMoves, $moves_indexes{$2});
			}
			if(!($3 eq "NO_MOVE") && !($3 eq "UNUSED") && !($3 eq ""))
			{
				push(@$curInitialMoves, $moves_indexes{$3});
			}
			if(!($4 eq "NO_MOVE") && !($4 eq "UNUSED") && !($4 eq ""))
			{
				push(@$curInitialMoves, $moves_indexes{$4});
			}
		} elsif($hasDex && $hasBaseStats && $hasTypes && $hasSpriteDimensions && $hasSpritePics && $hasInitialMoves && !$hasGrowthRate && $line =~ /^\s*[dD][a-zA-Z]\s+(GROWTH[A-Za-z_-]*)\s*(;.*)?$/) {
			$hasGrowthRate = (1 == 1);
			$pokemon_growth_rates{$curDex} = $1;
		} elsif($hasDex && $hasBaseStats && $hasTypes && $hasSpriteDimensions && $hasSpritePics && $hasInitialMoves && $hasGrowthRate && $line =~ /^\s*;\s*tm\/hm\s+learnset\s*(;.*)?$/) {
			$tmhmStart = (1 == 1);
		} elsif($hasDex && $hasBaseStats && $hasTypes && $hasSpriteDimensions && $hasSpritePics && $hasInitialMoves && $hasGrowthRate && $line =~ /^\s*;\s*end\s*(;.*)?$/) {
			$tmhmEnd = (1 == 1);
		} elsif($hasDex && $hasBaseStats && $hasTypes && $hasSpriteDimensions && $hasSpritePics && $hasInitialMoves && $hasGrowthRate && $tmhmStart && !$tmhmEnd && $line =~ /^\s*tmhm\s+(.*?)\s*(;.*?)?(\\)?$/) {
			my $curTMMoves = $tm_moves{$curDex};
			my $curHMMoves = $hm_moves{$curDex};
			my @moves = split(/\s*,\s*/, $1);
			for my $move (@moves) {
				if(!($move eq "") && !($move eq "NO_MOVE") && !($move eq "UNUSED"))
				{
					if(exists($moves_tms{$move})) {
						push(@$curTMMoves, $moves_tms{$move});
						#push(@$curTMMoves, $move);
					} elsif(exists($moves_hms{$move})) {
						push(@$curHMMoves, $moves_hms{$move});
						#push(@$curHMMoves, $move);
					} else {
						push(@$curTMMoves, $move);
					}
				}
			}
		} elsif($hasDex && $hasBaseStats && $hasTypes && $hasSpriteDimensions && $hasSpritePics && $hasInitialMoves && $hasGrowthRate && $tmhmStart && !$tmhmEnd && $line =~ /^\s*(.*?)\s*(;.*?)?(\\)?$/) {
			my $curTMMoves = $tm_moves{$curDex};
			my $curHMMoves = $hm_moves{$curDex};
			my @moves = split(/\s*,\s*/, $1);
			for my $move (@moves) {
				if(!($move eq "") && !($move eq "NO_MOVE") && !($move eq "UNUSED"))
				{
					if(exists($moves_tms{$move})) {
						push(@$curTMMoves, $moves_tms{$move});
						#push(@$curTMMoves, $move);
					} elsif(exists($moves_hms{$move})) {
						push(@$curHMMoves, $moves_hms{$move});
						#push(@$curHMMoves, $move);
					} else {
						push(@$curTMMoves, $move);
					}
				}
			}
		}
	}
	close($fh);
}

#print "index_pokemon: " . pp(%index_pokemon) . "\n";
#print "pokemon_index: " . pp(%pokemon_index) . "\n";
#print "pokedex_index: " . pp(%pokedex_index) . "\n";
#print "index_pokedex: " . pp(%index_pokedex) . "\n";
#print "dex_pokedex_pokemon: " . to_json(\%dex_pokedex_pokemon) . "\n";
#print "dex_pokemon_pokedex: " . to_json(\%dex_pokemon_pokedex) . "\n";
#print "dex_pokedex_index_pokemon_index: " . to_json(\%dex_pokedex_index_pokemon_index) . "\n";
#print "dex_pokemon_index_pokedex_index: " . to_json(\%dex_pokemon_index_pokedex_index) . "\n";
#print "pokemon_index_name: " . to_json(\%pokemon_index_name) . "\n";
#print "pokemon_name: " . to_json(\%pokemon_name) . "\n";
#print "jump_table_level_up_moves: " . pp(\%jump_table_level_up_moves) . "\n";
#print "jump_table_evolutions: " . pp(\%jump_table_evolutions) . "\n";
#print "pokemon_level_up_moves: " . pp(\%pokemon_level_up_moves) . "\n";
#print "pokemon_evolutions: " . pp(\%pokemon_evolutions) . "\n";
#print "baseStateIncludes: " . pp(\@baseStateIncludes) . "\n";
#print "initial_moves: " . pp(\%initial_moves) . "\n";
#print "tm_moves: " . pp(\%tm_moves) . "\n";
#print "hm_moves: " . pp(\%hm_moves) . "\n";

#print "moves_indexes: " . pp(\%moves_indexes) . "\n";
#print "indexes_moves: " . pp(\%indexes_moves) . "\n";

#print "tms_moves: " . pp(\%tms_moves) . "\n";
#print "moves_tms: " . pp(\%moves_tms) . "\n";
#print "hms_moves: " . pp(\%hms_moves) . "\n";
#print "moves_hms: " . pp(\%moves_hms) . "\n";

@pokedexIndexes = keys(%index_pokedex);
@pokedexIndexes = sort {$a <=> $b} @pokedexIndexes;

#print "pokedexIndexes: " . pp(\@pokedexIndexes) . "\n";

my $hasInitialMove;
my $hasTMMove;
my $hasHMMove;
my $hasLevelUpMove;
my $curBaseStats;
my $hasTypes;
for my $pokedexIndex (@pokedexIndexes) {
	$hasInitialMove = (1 == 0);
	$hasTMMove = (1 == 0);
	$hasHMMove = (1 == 0);
	print "\t$pokedexIndex: {";
	my $pokemonIndex = $dex_pokedex_index_pokemon_index{$pokedexIndex};
	print " initial: [ ";
	my $initialMovesPtr = $initial_moves{$pokedexIndex};
	for my $initialMove (@$initialMovesPtr) {
		if($hasInitialMove)
		{
			print ", ";
		}
		else
		{
			$hasInitialMove = (1 == 1);
		}
		print $initialMove;
	}
	print " ],\n";
	my $level_up_moves = $pokemon_level_up_moves{$pokemonIndex};
	print "\t\t\tlevelup: { \n";
	my @level_up_move_keys = keys(%$level_up_moves);
	@level_up_move_keys = sort {$a <=> $b} @level_up_move_keys;
	#print "level_up_move_keys: " . pp(\@level_up_move_keys) . "\n";
	for my $level_up_level (@level_up_move_keys) {
		my $level_up = @$level_up_moves{$level_up_level};
		my @level_up_array = @$level_up;
		$hasLevelUpMove = (1 == 0);
		print "\t\t\t\t$level_up_level: ";
		if(scalar @level_up_array > 1)
		{
			print "[ ";
		}
		for my $move (@level_up_array) {
			if($hasLevelUpMove)
			{
				print ", ";
			}
			else
			{
				$hasLevelUpMove = (1 == 1);
			}
			print $move;
		}
		if(scalar @level_up_array > 1)
		{
			print " ]";
		}
		print ",\n";
	}
	print "\t\t\t},\n";
	my $tms = $tm_moves{$pokedexIndex};
	my $hms = $hm_moves{$pokedexIndex};
	print "\t\t\ttms: [ ";
	for my $move (@$tms) {
		if($hasTMMove)
		{
			print ", ";
		}
		else
		{
			$hasTMMove = (1 == 1);
		}
		print $move;
	}
	print " ],\n";
	print "\t\t\thms: [ ";
	for my $move (@$hms) {
		if($hasHMMove)
		{
			print ", ";
		}
		else
		{
			$hasHMMove = (1 == 1);
		}
		print $move;
	}
	print " ],\n";
	print "\t}, //" . $pokemon_index_name{$pokemonIndex} . "\n";
}

for my $pokedexIndex (@pokedexIndexes) {
	$hasInitialMove = (1 == 0);
	$hasTMMove = (1 == 0);
	$hasHMMove = (1 == 0);
	$hasTypes = (1 == 0);
	print "\t$pokedexIndex: {";
	print " growth_rate: \"" . $pokemon_growth_rates{$pokedexIndex} . "\",\n";
	my $pokemonIndex = $dex_pokedex_index_pokemon_index{$pokedexIndex};
	$curBaseStats = $base_stats{$pokedexIndex};
	print "\t\t\tbase_stats: { ";
	print "\"hp\": " . $$curBaseStats{hp} . ", ";
	print "\"atk\": " . $$curBaseStats{atk} . ", ";
	print "\"def\": " . $$curBaseStats{def} . ", ";
	print "\"spd\": " . $$curBaseStats{spd} . ", ";
	print "\"spc\": " . $$curBaseStats{spc} . "";
	print " },\n";
	print "\t\t\ttypes: [ ";
	my $curTypes = $types{$pokedexIndex};
	for my $type (@$curTypes) {
		if(!$hasTypes) {
			$hasTypes = (1 == 1);
		} else {
			print ", ";
		}
		print $type;
	}
	print " ],\n";
	print "\t}, //" . $pokemon_index_name{$pokemonIndex} . "\n";
}

#print "dex_pokedex_index_pokemon_index: " . to_json(\%dex_pokedex_index_pokemon_index) . "\n";

#print "base_stats: " . to_json(\%base_stats) . "\n";
#print "types:" . to_json(\%types) . "\n";

#print "types_indexes: " . pp(\%types_indexes) . "\n";
#print "indexes_types: " . pp(\%indexes_types) . "\n";

#print "pokemon_growth_rates: " . pp(\%pokemon_growth_rates) . "\n";
