#!/usr/bin/perl
use utf8;
use warnings;
use strict;
use Data::Dumper qw(Dumper);
use Fcntl qw(SEEK_SET SEEK_CUR SEEK_END);

my $MOVE_NAMES_CRYSTAL_START = 0x1C9F29;
my $MOVE_TABLE_CRYSTAL_DATA = 0x41AFB;
my $MOVE_NAMES_GOLD_START = 0x1B1574;
my $MOVE_TABLE_GOLD_DATA = 0x41AFE;

my $MOVE_NAMES_START;
my $MOVE_TABLE_DATA;
	
my @moves = ();
my @moveNames = ();
my %charMap = ();

binmode(STDOUT, ":utf8") or die "Cannot set STDOUT to binary mode: $!";

if ($#ARGV != 0)
{
	print("argc: $#ARGV\n");
	print("wrong number of args: expected: $0 <rom file>\n");
	die();
}

my $romfile = $ARGV[0];

#deterine which rom file we are using and the offsets of the base stats data in the pokemon rom file.
if($romfile =~ /(^.*?[\\\/])?[^\\\/]*[Gg][Oo][Ll][Dd][^\\\/]*$/)
{
	$MOVE_NAMES_START = $MOVE_NAMES_GOLD_START;
	$MOVE_TABLE_DATA = $MOVE_TABLE_GOLD_DATA;
	print("gold\n");
}
elsif($romfile =~ /^(.*?[\\\/])?[^\\\/]*[Cc][Rr][Yy][Ss][Tt][Aa][Ll][^\\\/]*$/)
{
	$MOVE_NAMES_START = $MOVE_NAMES_CRYSTAL_START;
	$MOVE_TABLE_DATA = $MOVE_TABLE_CRYSTAL_DATA;
	print("crystal\n");
}
else
{
	print("unknown rom file: $romfile\n");
	die();
}

# Parse the charmap
open(my $charmapfh, "<:encoding(utf8)", "constants/charmap.asm") or die "Could not open constants/charmap.asm: $!";

while(<$charmapfh>) {
	my $line = $_;
	if($line =~ /^\s+charmap\s+"([^\"]*)"\s*,\s+\$([0-9A-Fa-f]{2,2})\s*/)
	{
		my $char = $1;
		my $key = hex($2);
		
		if($char eq "<NULL>")
		{
			$char = "\0";
		}
		if($char eq "<PLAY_G>")
		{
			$char = "<PLAYER>";
		}
		elsif($char eq "<CR>")
		{
			$char = "\r";
		}
		elsif($char eq "<BSP>")
		{
			$char = " ";
		}
		elsif($char eq "<LF>")
		{
			$char = "\n";
		}
		elsif($char eq "<POKE>")
		{
			$char = "POKE";
		}
		elsif($char eq "<WBR>")
		{
			$char = "\n";
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
			$char = "KE";
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

open(my $movenamesfh, '<:raw', $romfile) or die "Could not open $romfile: $!";
#binmode($movenamesfh) or (close($movenamesfh), die "Cannot set $movenamesfh to binary mode: $!");
seek($movenamesfh, $MOVE_NAMES_START, SEEK_SET) or (close($movenamesfh), die "Cannot seek $movenamesfh to move names: $!");
my @namechars = ();
my $namesLength = 0;
my $buffer;
my $bytesread = read($movenamesfh, $buffer, 10240);
while($bytesread)
{
	$namesLength += $bytesread;
	for(my $i = 0; $i < $bytesread; $i++)
	{
			push(@namechars, substr($buffer, $i, 1));
	}
	
	$bytesread = read($movenamesfh, $buffer, 10240);
}
if(!defined $bytesread)
{
	die("Read failed for $movenamesfh: $!");
}

close($movenamesfh);
$movenamesfh = undef;

# transform the list of chars into their equivelent utf8 versions.
for(my $i = 0; $i < $namesLength; $i++)
{
	if(exists($charMap{ord($namechars[$i])}) && defined($charMap{ord($namechars[$i])}))
	{
		$namechars[$i] = $charMap{ord($namechars[$i])}
	}
	else
	{
		$namechars[$i] = ord($namechars[$i]);
	}
}

# reconstruct an array of name strings from the harvested and translated chars, stopping when we get 255.
my @names = ();
my $terminated = (1 == 0);
my $currentName = "";
my $nameCount = 0;
for(my $i = 0; $i < $namesLength; $i++)
{
	my $nameChar = $namechars[$i];
	
	for(my $j = 0; $j < length($nameChar); $j++)
	{
		my $ch = substr($nameChar, $j, 1);
		if($ch eq "@")
		{
			$terminated = (1 == 1);
			last;
		}
		else
		{
			$currentName = $currentName . $ch;
		}
	}
	if($terminated)
	{
		$terminated = (1 == 0);
		push(@names, $currentName);
		$currentName = "";
		$nameCount++;
		if($nameCount == 0x100)
		{
			last;
		}
	}
}
if($nameCount != 0x100)
{
	push(@names, $currentName);
}

# find the max normal name length, our harvested glitch names must not go past that length.
my $maxNameLength = 0;
for(my $i = 0; $i < 251; $i++)
{
	if(length($names[$i]) > $maxNameLength)
	{
		$maxNameLength = length($names[$i]);
	}
}

# truncate all strings to the max name length.
for(my $i = 0; $i < $nameCount; $i++)
{
	if(length($names[$i]) > $maxNameLength)
	{
		$names[$i] = substr($names[$i], 0, $maxNameLength);
	}
}

# read move data bytes.
open(my $movedatafh, '<:raw', $romfile) or die "Could not open $romfile: $!";
#binmode($movedatafh) or (close($movedatafh), die "Cannot set $movedatafh to binary mode: $!");
seek($movedatafh, $MOVE_TABLE_DATA, SEEK_SET) or (close($movedatafh), die "Cannot seek $movedatafh to move names: $!");
my @movedatabytes = ();
my $moveDataLength = 0;
$bytesread = read($movedatafh, $buffer, 10240);
while($bytesread)
{
	$moveDataLength += $bytesread;
	for(my $i = 0; $i < $bytesread; $i++)
	{
			push(@movedatabytes, ord(substr($buffer, $i, 1)));
	}
	
	$bytesread = read($movedatafh, $buffer, 10240);
}
if(!defined $bytesread)
{
	die("Read failed for $movedatafh: $!");
}

close($movedatafh);
$movedatafh = undef;

my $movesCount = 0;
my @movesData = ();
for(my $i = 0; $i < $moveDataLength; $i += 7)
{
	my %moveData = ();
	my $name = $names[$movesCount];
	
	$name =~ s/\0/\\0/g;
	$name =~ s/\n/\\n/g;
	$name =~ s/\r/\\r/g;
	$moveData{"name"} = $name;
	$moveData{"pp"} = $movedatabytes[$i + 5];
	$moveData{"accuracy"} = $movedatabytes[$i + 4];
	$moveData{"power"} = $movedatabytes[$i + 2];
	$moveData{"type"} = $movedatabytes[$i + 3];
	push(@movesData, \%moveData);
	$movesCount++;
	
	if($movesCount == 0x100)
	{
		last;
	}
}
#no warnings 'redefine';
#local *Data::Dumper::qquote = sub { qq["${\(shift)}"] };
## Use the Pure Perl implementation of Dumper
#local $Data::Dumper::Useperl = 1;
#print Dumper(\%charMap);
#print Dumper(%charMap{0x4a});
#print Dumper(\@names);
#print Dumper($maxNameLength);
#print Dumper($movesCount);
#print Dumper(\@movesData);
print("var move_lookup = {\n");
for(my $i = 0; $i <= $#movesData; $i++)
{
	printf("\t%d: { name: \"%s\", pp: %d, accuracy: %d, power: %d, type: 0x%02x },\n", (($i + 1) % 256), $movesData[$i]{"name"}, $movesData[$i]{"pp"}, $movesData[$i]{"accuracy"}, $movesData[$i]{"power"}, $movesData[$i]{"type"});
}
print("};\n");