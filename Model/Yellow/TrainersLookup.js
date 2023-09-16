function TrainersLookup() {
  // Constructor body
}

// https://static.merkelhaus.us/overlayimages/trainers/team_rocket_jessie_james__ingame_battle_sprite__by_ogjazz_defuy5c-fullview.png
// https://static.merkelhaus.us/overlayimages/trainers/team_rocket_butch_cassidy__ingame_battle_sprite__by_ogjazz_defwg8e-fullview.png

var trainers_lookup = {
	"": { 
		name: "",
		class: "",
		//image: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D",
		image: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D",
		reference: "https://stackoverflow.com/a/19126281"
	}, // undefined / default value. 
	"0": { 
		name: "YOUNGSTER",
		class: "Youngster",
		//image: "https://archives.bulbagarden.net/media/upload/d/d5/Spr_FRLG_Youngster.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Youngster.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Youngster.png"
	},
	"1": { 
		name: "BUG CATCHER",
		class: "BugCatcher",
		//image: "https://archives.bulbagarden.net/media/upload/b/b9/Spr_FRLG_Bug_Catcher.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Bug_Catcher.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Bug_Catcher.png"
	},
	"2": { 
		name: "LASS",
		class: "Lass",
		//image: "https://archives.bulbagarden.net/media/upload/4/46/Spr_FRLG_Lass.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Lass.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Lass.png"
	},
	"3": { 
		name: "SAILOR",
		class: "Sailor",
		//image: "https://archives.bulbagarden.net/media/upload/8/82/Spr_RS_Sailor_JP.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_RS_Sailor_JP.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_RS_Sailor_JP.png"
	},
	"4": { 
		name: "JR.TRAINER\u2642",
		class: "JrTrainerM",
		//image: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Camper.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/File:Spr_FRLG_Camper.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Camper.png"
	},
	"5": { 
		name: "JR.TRAINER\u2640",
		class: "JrTrainerF",
		//image: "https://archives.bulbagarden.net/media/upload/a/a0/Spr_FRLG_Picnicker.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Picnicker.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Picnicker.png"
	},
	"6": { 
		name: "POK\xE9MANIAC",
		class: "Pokemaniac",
		//image: "https://archives.bulbagarden.net/media/upload/0/0e/Spr_FRLG_Pok%C3%A9Maniac.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Pok%C3%A9Maniac.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Pok%C3%A9Maniac.png"
	},
	"7": { 
		name: "SUPER NERD",
		class: "SuperNerd",
		//image: "https://archives.bulbagarden.net/media/upload/1/1f/Spr_FRLG_Super_Nerd.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Super_Nerd.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Super_Nerd.png"
	},
	"8": { 
		name: "HIKER",
		class: "Hiker",
		//image: "https://archives.bulbagarden.net/media/upload/8/8c/Spr_FRLG_Hiker.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Hiker.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Hiker.png"
	},
	"9": { 
		name: "BIKER",
		class: "Biker",
		//image: "https://archives.bulbagarden.net/media/upload/6/6e/Spr_FRLG_Biker.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Biker.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Biker.png"
	},
	"10": { 
		name: "BURGLAR",
		class: "Burglar",
		//image: "https://archives.bulbagarden.net/media/upload/7/78/Spr_FRLG_Burglar.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Burglar.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Burglar.png"
	},
	"11": { 
		name: "ENGINEER",
		class: "Engineer",
		//image: "https://archives.bulbagarden.net/media/upload/7/71/Spr_FRLG_Engineer.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Engineer.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Engineer.png"
	},
	"12": { 
		name: "JUGGLER",
		class: "UnusedJuggler",
		//image: "https://archives.bulbagarden.net/media/upload/5/50/Spr_FRLG_Juggler.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Juggler.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Juggler.png"
	},
	"13": { 
		name: "FISHERMAN",
		class: "Fisher",
		//image: "https://archives.bulbagarden.net/media/upload/c/c7/Spr_FRLG_Fisherman.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Fisherman.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Fisherman.png"
	},
	"14": { 
		name: "SWIMMER",
		class: "Swimmer",
		//image: "https://archives.bulbagarden.net/media/upload/9/95/Spr_FRLG_Swimmer_M.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Swimmer_M.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Swimmer_M.png"
	},
	"15": { 
		name: "CUE BALL",
		class: "CueBall",
		//image: "https://archives.bulbagarden.net/media/upload/1/19/Spr_FRLG_Cue_Ball.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Cue_Ball.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Cue_Ball.png"
	},
	"16": { 
		name: "GAMBLER",
		class: "Gambler",
		//image: "https://archives.bulbagarden.net/media/upload/1/1e/Spr_FRLG_Gamer.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Gamer.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Gamer.png"
	},
	"17": { 
		name: "BEAUTY",
		class: "Beauty",
		//image: "https://archives.bulbagarden.net/media/upload/3/39/Spr_FRLG_Beauty.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Beauty.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Beauty.png"
	},
	"18": { name: "PSYCHIC",
		class: "Psychic",
		//image: "https://archives.bulbagarden.net/media/upload/e/ea/Spr_FRLG_Psychic_M.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Psychic_M.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Psychic_M.png"
	},
	"19": { name: "ROCKER",
		class: "Rocker",
		//image: "https://archives.bulbagarden.net/media/upload/f/f3/Spr_FRLG_Rocker.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Rocker.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Rocker.png"
	},
	"20": { name: "JUGGLER",
		class: "Juggler",
		//image: "https://archives.bulbagarden.net/media/upload/5/50/Spr_FRLG_Juggler.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Juggler.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Juggler.png"
	},
	"21": { name: "TAMER",
		class: "Tamer",
		//image: "https://archives.bulbagarden.net/media/upload/8/89/Spr_FRLG_Tamer.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Tamer.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Tamer.png"
	},
	"22": { name: "BIRD KEEPER",
		class: "BirdKeeper",
		//image: "https://archives.bulbagarden.net/media/upload/b/b2/Spr_FRLG_Bird_Keeper.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Bird_Keeper.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Bird_Keeper.png"
	},
	"23": { name: "BLACKBELT",
		class: "Blackbelt",
		//image: "https://archives.bulbagarden.net/media/upload/8/8e/Spr_FRLG_Black_Belt.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Black_Belt.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Black_Belt.png"
	},
	"24": { name: "RIVAL1",
		class: "Rival1",
		//image: "https://archives.bulbagarden.net/media/upload/0/02/Spr_FRLG_Blue_1.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Blue_1.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Blue_1.png"
	},
	"25": { name: "PROF.OAK",
		class: "ProfOak",
		//image: "https://archives.bulbagarden.net/media/upload/4/4c/Spr_FRLG_Oak.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Oak.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Oak.png"
	},
	"26": { name: "CHIEF",
		class: "Chief",
		//image: "https://archives.bulbagarden.net/media/upload/f/f9/Spr_FRLG_Scientist.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Scientist.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Scientist.png"
	},
	"27": { name: "SCIENTIST",
		class: "Scientist",
		//image: "https://archives.bulbagarden.net/media/upload/f/f9/Spr_FRLG_Scientist.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Scientist.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Scientist.png"
	},
	"28": { name: "GIOVANNI",
		class: "Giovanni",
		//image: "https://archives.bulbagarden.net/media/upload/4/41/Spr_FRLG_Giovanni.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Giovanni.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Giovanni.png"
	},
	"29": { name: "ROCKET",
		class: "Rocket",
		//image: "https://archives.bulbagarden.net/media/upload/8/85/Spr_FRLG_Team_Rocket_Grunt_M.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Team_Rocket_Grunt_M.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Team_Rocket_Grunt_M.png"
	},
	"30": { name: "COOLTRAINER\u2642",
		class: "CooltrainerM",
		//image: "https://archives.bulbagarden.net/media/upload/b/b8/Spr_FRLG_Cooltrainer_M.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Cooltrainer_M.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Cooltrainer_M.png"
	},
	"31": { name: "COOLTRAINER\u2640",
		class: "CooltrainerF",
		//image: "https://archives.bulbagarden.net/media/upload/7/7f/Spr_FRLG_Cooltrainer_F.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Cooltrainer_F.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Cooltrainer_F.png"
	},
	"32": { name: "BRUNO",
		class: "Bruno",
		//image: "https://archives.bulbagarden.net/media/upload/f/f7/Spr_FRLG_Bruno.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Bruno.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Bruno.png"
	},
	"33": { name: "BROCK",
		class: "Brock",
		//image: "https://archives.bulbagarden.net/media/upload/7/7c/Spr_FRLG_Brock.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Brock.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Brock.png"
	},
	"34": { name: "MISTY",
		class: "Misty",
		//image: "https://archives.bulbagarden.net/media/upload/2/2c/Spr_FRLG_Misty.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Misty.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Misty.png"
	},
	"35": { name: "LT.SURGE",
		class: "LtSurge",
		//image: "https://archives.bulbagarden.net/media/upload/5/5c/Spr_FRLG_Lt_Surge.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Lt_Surge.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Lt_Surge.png"
	},
	"36": { name: "ERIKA",
		class: "Erika",
		//image: "https://archives.bulbagarden.net/media/upload/c/c9/Spr_FRLG_Erika.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Erika.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Erika.png"
	},
	"37": { name: "KOGA",
		class: "Koga",
		//image: "https://archives.bulbagarden.net/media/upload/0/02/Spr_FRLG_Koga.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Koga.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Koga.png"
	},
	"38": { name: "BLAINE",
		class: "Blaine",
		//image: "https://archives.bulbagarden.net/media/upload/6/6d/Spr_FRLG_Blaine.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Blaine.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Blaine.png"
	},
	"39": { name: "SABRINA",
		class: "Sabrina",
		//image: "https://archives.bulbagarden.net/media/upload/d/dd/Spr_FRLG_Sabrina.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Sabrina.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Sabrina.png"
	},
	"40": { name: "GENTLEMAN",
		class: "Gentleman",
		//image: "https://archives.bulbagarden.net/media/upload/9/94/Spr_FRLG_Gentleman.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Gentleman.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Gentleman.png"
	},
	"41": { name: "RIVAL2",
		class: "Rival2",
		//image: "https://archives.bulbagarden.net/media/upload/e/e2/Spr_FRLG_Blue_2.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Blue_2.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Blue_2.png"
	},
	"42": { name: "RIVAL3",
		class: "Rival3",
		//image: "https://archives.bulbagarden.net/media/upload/1/10/Spr_FRLG_Blue_3.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Blue_3.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Blue_3.png"
	},
	"43": { name: "LORELEI",
		class: "Lorelei",
		//image: "https://archives.bulbagarden.net/media/upload/d/db/Spr_FRLG_Lorelei.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Lorelei.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Lorelei.png"
	},
	"44": { name: "CHANNELER",
		class: "Channeler",
		//image: "https://archives.bulbagarden.net/media/upload/1/1e/Spr_FRLG_Channeler.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Channeler.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Channeler.png"
	},
	"45": { name: "AGATHA",
		class: "Agatha",
		//image: "https://archives.bulbagarden.net/media/upload/5/56/Spr_FRLG_Agatha.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Agatha.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Agatha.png"
	},
	"46": { name: "LANCE",
		class: "Lance",
		//image: "https://archives.bulbagarden.net/media/upload/f/fb/Spr_FRLG_Lance.png",
		image: "https://static.merkelhaus.us/overlayimages/trainers/Spr_FRLG_Lance.png",
		reference: "https://archives.bulbagarden.net/wiki/File:Spr_FRLG_Lance.png"
	},
};

(function () {
  // Static initialization code
  Object.keys(trainers_lookup).forEach(key => {
	  var value = trainers_lookup[key];
	  
	  TrainersLookup[key] = value;
  });
})();
