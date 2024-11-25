#!/usr/bin/perl
use utf8;
use warnings;
use strict;
use Data::Dumper qw(Dumper);

binmode(STDOUT, ":utf8") or die "Cannot set STDOUT to binary mode: $!";

my %movesLookup = ();
my %tmsData = ();
my %hmsData = ();
my %mtsData = ();
# Read the move constants into a string.
open(my $moveconstantsfh, "<:encoding(utf8)", "constants/move_constants.asm") or die "Could not open constants/move_constants.asm: $!";

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
}

# Parse the item constants file
open(my $itemconstantsfh, "<:encoding(utf8)", "constants/item_constants.asm") or die "Could not open constants/item_constants.asm: $!";

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
		$curMT++;
	}
}
close($itemconstantsfh);
$itemconstantsfh = undef;

#print(Dumper(\%movesLookup));
#print(Dumper(\%tmsData));
#print(Dumper(\%hmsData));
print <<END;
function TmsLookup() {
  // Constructor body
}

var tms_lookup = {
END
foreach my $key (sort { int($a) <=> int($b) } keys %tmsData) 
{
	$key = int($key);
	my $value = $tmsData{$key};
	printf("	%02d: %d,\n", $key, $value);
}
print <<END;
};

(function () {
  // Static initialization code
  Object.keys(tms_lookup).forEach(key => {
	  var value = tms_lookup[key];
	  
	  TmsLookup[key] = value;
  });
})();

END

print <<END;
function HmsLookup() {
  // Constructor body
}

var hms_lookup = {
END
foreach my $key (sort { int($a) <=> int($b) } keys %hmsData) 
{
	$key = int($key);
	my $value = $hmsData{$key};
	printf("	%02d: %d,\n", $key, $value);
}
print <<END;
};

(function () {
  // Static initialization code
  Object.keys(hms_lookup).forEach(key => {
	  var value = hms_lookup[key];
	  
	  HmsLookup[key] = value;
  });
})();
END

print <<END;
function MtsLookup() {
  // Constructor body
}

var mts_lookup = {
END
foreach my $key (sort { int($a) <=> int($b) } keys %mtsData) 
{
	$key = int($key);
	my $value = $mtsData{$key};
	printf("	%02d: %d,\n", $key, $value);
}
print <<END;
};

(function () {
  // Static initialization code
  Object.keys(mts_lookup).forEach(key => {
	  var value = mts_lookup[key];
	  
	  MtsLookup[key] = value;
  });
})();
END

print(Dumper(\%mtsData));