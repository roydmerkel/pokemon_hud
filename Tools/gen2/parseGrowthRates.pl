#!/usr/bin/perl
use utf8;
use warnings;
use strict;
use Data::Dumper qw(Dumper);
use List::Util qw(uniq);
use Array::Compare;
use Fcntl qw(SEEK_SET SEEK_CUR SEEK_END);

my $POKEMON_GROWTH_RATES_CRYSTAL_START = 0x50EFA;
my $POKEMON_GROWTH_RATES_GOLD_START = 0x51603;

my $POKEMON_GROWTH_RATES_START;

# parse the index order and constant names.
binmode(STDOUT, ":utf8") or die "Cannot set STDOUT to binary mode: $!";

if ($#ARGV != 1)
{
	print("argc: $#ARGV\n");
	print("wrong number of args: expected: $0 <rom file> <disassembly folder>\n");
	die();
}

my $romfile = $ARGV[0];

#deterine which rom file we are using and the offsets of the base stats data in the pokemon rom file.
if($romfile =~ /(^.*?[\\\/])?[^\\\/]*[Gg][Oo][Ll][Dd][^\\\/]*$/)
{
	$POKEMON_GROWTH_RATES_START = $POKEMON_GROWTH_RATES_GOLD_START;
	print("gold\n");
}
elsif($romfile =~ /^(.*?[\\\/])?[^\\\/]*[Cc][Rr][Yy][Ss][Tt][Aa][Ll][^\\\/]*$/)
{
	$POKEMON_GROWTH_RATES_START = $POKEMON_GROWTH_RATES_CRYSTAL_START;
	print("crystal\n");
}
else
{
	print("unknown rom file: $romfile\n");
	die();
}

my $disassembyDir = $ARGV[1];

if(! -d $ARGV[1])
{
	print("unknown dissassembly dir: $disassembyDir\n");
	die();
}

# read the base stats directly from ROM
open(my $pokemongrowthratesfh, '<:raw', $romfile) or die "Could not open $romfile: $!";
binmode($pokemongrowthratesfh) or (close($pokemongrowthratesfh), die "Cannot set $pokemongrowthratesfh to binary mode: $!");
seek($pokemongrowthratesfh, $POKEMON_GROWTH_RATES_START, SEEK_SET) or (close($pokemongrowthratesfh), die "Cannot seek $pokemongrowthratesfh to move names: $!");
my @growthTableBytes = ();
my $baseDataLength = 0;
my $buffer;
my $bytesread = read($pokemongrowthratesfh, $buffer, 4 * 8);
while($bytesread && ($baseDataLength < 4 * 257))
{
	$baseDataLength += $bytesread;
	for(my $i = 0; $i < $bytesread; $i++)
	{
			push(@growthTableBytes, ord(substr($buffer, $i, 1)));
	}
	
	$bytesread = read($pokemongrowthratesfh, $buffer, 4 * 8);
}
if(!defined $bytesread)
{
	die("Read failed for $pokemongrowthratesfh: $!");
}

close($pokemongrowthratesfh);
$pokemongrowthratesfh = undef;

my $growthRatesTableOffset = 0;
my %growthRates = ();
for(my $i = 0; $i < 256; $i++)
{
	my @growthConstants = ();
	my %growthRate = ();
	my $a = ((($growthTableBytes[$growthRatesTableOffset] & 0xF0) >> 4) & 0x0F);
	my $b = ($growthTableBytes[$growthRatesTableOffset] & 0x0F);
	$growthRatesTableOffset++;
	my $c = $growthTableBytes[$growthRatesTableOffset];
	$growthRatesTableOffset++;
	if(($c & 0x80) != 0)
	{
		$c = ($c & (~0x80));
		$c = -$c;
	}
	my $d = $growthTableBytes[$growthRatesTableOffset];
	$growthRatesTableOffset++;
	my $e = $growthTableBytes[$growthRatesTableOffset];
	$growthRatesTableOffset++;
	
	push(@growthConstants, $a, $b, $c, $d, $e);
	$growthRate{"name"} = "GLITCH";
	$growthRate{"growthRate"} = \@growthConstants;
	
	$growthRates{$i} = \%growthRate;
}

# harvest known name constants.
open(my $pokemondataconstantsfh, "<:encoding(utf8)", "$disassembyDir/constants/pokemon_data_constants.asm") or die "Could not open $disassembyDir/constants/pokemon_data_constants.asm: $!";

my $curGrowthRate = 0;
while(<$pokemondataconstantsfh>) {
	my $line = $_;
	if($line =~ /^\s*const\s+(GROWTH_[A-Za-z0-9_]+)\s*/g)
	{
		$growthRates{$curGrowthRate}{"name"} = $1;
		$curGrowthRate++;
	}
}
close($pokemondataconstantsfh);
$pokemondataconstantsfh = undef;

# harvest clones.
my $comp = Array::Compare->new;
for(my $i = 0; $i < 256 - 1; $i++)
{
	for(my $j = $i + 1; $j < 256; $j++)
	{
		my @growthRatesI = @{$growthRates{$i}{"growthRate"}};
		my @growthRatesJ = @{$growthRates{$j}{"growthRate"}};
		if($comp->compare(\@growthRatesI, \@growthRatesJ))
		{
			if($growthRates{$j}{"name"} =~ /^.*_COPY$/)
			{
			}
			elsif($growthRates{$i}{"name"} =~ /^.*_COPY$/)
			{
				$growthRates{$j}{"name"} = $growthRates{$i}{"name"};
			}
			elsif($growthRates{$i}{"name"} =~ /^GLITCH$/)
			{
				$growthRates{$j}{"name"} = sprintf("GLITCH_%02X_COPY", $i);
			}
			else
			{
				$growthRates{$j}{"name"} = sprintf("%s_COPY", $growthRates{$i}{"name"});
			}
		}
	}
}

# print out the resultant class.
print <<END;
function PokemonExperienceGroupsLookup() {
  // Constructor body
}

function toUnsigned(val) {
	if(val >= 0) {
		return val;
	} else {
		return 0x1000000 - val;
	}
}

function multAndTrunc(a, b) {
	return (a * b) & 0xFFFFFF;
}

function divAndTrunc(a, b) {
	return ((a & 0xFFFFFF) / b) & 0xFFFFFF;
}

function addAndTrunc(a, b) {
	return (a + b) & 0xFFFFFF;
}

function growthRate(n, a, b, c, d, e) {
	/*var cur1 = multAndTrunc(divAndTrunc(multAndTrunc(multAndTrunc(n, n), n), b), a);
	var cur2 = multAndTrunc(multAndTrunc(n, n), c);
	var cur3 = multAndTrunc(d, n);
	var cur4 = e;
	
	var cur = addAndTrunc(addAndTrunc(addAndTrunc(cur1, cur2), cur3), cur4);*/
	var cur1 = n * n * n / b * a;
	var cur2 = n * n * c;
	var cur3 = n * d;
	var cur4 = e;
	
	var cur = (cur1 + cur2 + cur3 + cur4);
	if(cur < 0) {
		cur = 0x1000000 + cur;
	}
	cur = cur & 0xFFFFFF;
	
	return cur;
}

var experience_groups = {
	"": { name: "", exp_to_level: function(level) { return 0; } },
END
for(my $i = 0; $i < 256; $i++)
{
	printf("	0x%02x: { name: \"%s\", exp_to_level: function(level) { return growthRate(level, %d, %d,   %d,   %d,   %d); } },\n", 
		$i, $growthRates{$i}{"name"}, $growthRates{$i}{"growthRate"}[0], $growthRates{$i}{"growthRate"}[1], $growthRates{$i}{"growthRate"}[2], 
		$growthRates{$i}{"growthRate"}[3], $growthRates{$i}{"growthRate"}[4]);
}
print <<END;
};

(function () {
  // Static initialization code
  Object.keys(experience_groups).forEach(key => {
	  var value = experience_groups[key];
	  
	  PokemonExperienceGroupsLookup[key] = value;
  });
})();
END
