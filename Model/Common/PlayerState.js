function PlayerState(name, playerId, teamCount, team, expandedTeam, badges, pokedexSeen, pokedexCaught, starterPokemon, starterPokemonInt, joypadSimulation, joypadIgnore) {
	this.name = name;
	this.playerId = playerId;
	this.teamCount = teamCount;
	this.team = team;
	this.expandedTeam = expandedTeam;
	this.badges = badges;
	this.listeners = [];
	this.pokedexSeen = pokedexSeen;
	this.pokedexCaught = pokedexCaught;
	this.starterPokemon = starterPokemon;
	this.starterPokemonInt = starterPokemonInt;
    this.joypadSimulation = joypadSimulation;
    this.joypadIgnore = joypadIgnore;
	this.gamehook = null;
}

PlayerState.ConstructPlayerStateFromGamehook = function (gamehook) {
	var name = "";
	var playerId = 0;
	var teamCount = 0;
	var pokedexSeen = [];
	var pokedexCaught = [];
	var starterPokemon = "";
	var starterPokemonInt = 0;
	var joypadSimulation = 0;
	var joypadIgnore = 0xFF;
	var team = [];
	var expandedTeam = [];
	var badges = [];
	for(var i = 0; i < 152; i++) {
		pokedexSeen.push(false);
		pokedexCaught.push(false);
	}

	if(gamehook.properties.player.name && (gamehook.properties.player.name.value || gamehook.properties.player.name === "")) {
		name = gamehook.properties.player.name.value;
	}
	if(gamehook.properties.player.playerId && gamehook.properties.player.playerId.value) {
		playerId = gamehook.properties.player.playerId.value;
	}
	if(gamehook.properties.player.teamCount && gamehook.properties.player.teamCount.value) {
		teamCount = gamehook.properties.player.teamCount.value;
	}
	if(gamehook.properties.player.pokedexSeen && gamehook.properties.player.pokedexSeen.value) {
		pokedexSeen = gamehook.properties.player.pokedexSeen.value;
	}
	if(gamehook.properties.player.pokedexCaught && gamehook.properties.player.pokedexCaught.value) {
		pokedexCaught = gamehook.properties.player.pokedexCaught.value;
	}
	if(gamehook.properties.player.starterPokemon && gamehook.properties.player.starterPokemon.value) {
		starterPokemon = gamehook.properties.player.starterPokemon.value;
	}
	if(gamehook.properties.player.starterPokemonInt && gamehook.properties.player.starterPokemonInt.value) {
		starterPokemonInt = gamehook.properties.player.starterPokemonInt.value;
	}
	if(gamehook.properties.player.joypadSimulation && gamehook.properties.player.joypadSimulation.value) {
		joypadSimulation = gamehook.properties.player.joypadSimulation.value;
	}
	if(gamehook.properties.player.joypadIgnore && gamehook.properties.player.joypadIgnore.value) {
		joypadIgnore = gamehook.properties.player.joypadIgnore.value;
	}
	
	if(gamehook.properties.player.team) {
		for(var i in gamehook.properties.player.team) {
		//for(var i = 0; i < gamehook.properties.player.team.length; i++) {
			team.push(PlayerTeamPokemonState.ConstructPlayerTeamPokemonStateFromGamehook(gamehook, i, gamehook.properties.player.team));
		}
	}
	//if(gamehook.properties.player.expandedTeam) {
	//	for(var i in gamehook.properties.player.expandedTeam) {
	//	//for(var i = 0; i < gamehook.properties.player.expandedTeam.length; i++) {
	//		expandedTeam.push(PlayerTeamPokemonState.ConstructPlayerTeamPokemonStateFromGamehook(gamehook, i, gamehook.properties.player.expandedTeam));
	//	}
	//}
	
	if(gamehook.properties.player.badges && Object.keys(gamehook.properties.player.badges).length) {
		for(var i = 0; i < Object.keys(gamehook.properties.player.badges).length; i++) {
			var propName = "badge" + (i + 1).toString();
			if(gamehook.properties && gamehook.properties.player && gamehook.properties.player.badges && gamehook.properties.player.badges[propName] && (gamehook.properties.player.badges[propName].value || gamehook.properties.player.badges[propName].value === 0 || gamehook.properties.player.badges[propName].value === false)) {
				badges.push(gamehook.properties.player.badges[propName].value);
			} else {						
				badges.push(false);
			}
		}
	}
	
	var newObj = new PlayerState(name, playerId, teamCount, team, expandedTeam, badges, pokedexSeen, pokedexCaught, starterPokemon, starterPokemonInt, joypadSimulation, joypadIgnore);
	
	newObj.gamehook = gamehook;
	
	gamehook.properties.player.teamCount.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onTeamCountChange:", x.value);
			newObj.onTeamCountChange(x.value);
		}
	});
	gamehook.properties.player.playerId.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onPlayerIdChange:", x.value);
			newObj.onPlayerIdChange(x.value);
		}
	});
	gamehook.properties.player.name.change(async(x) => {
		if(x && (x.value || x.value === "")) {
			//console.log("onNameChange:", x.value);
			newObj.onNameChange(x.value);
		}
	});
	gamehook.properties.player.pokedexSeen.change(async(x) => {
		if(x && (x.value || x.value === "")) {
			//console.log("onPokedexSeenChange:", x.value);
			newObj.onPokedexSeenChange(x.value);
		}
	});
	gamehook.properties.player.pokedexCaught.change(async(x) => {
		if(x && (x.value || x.value === "")) {
			//console.log("onPokedexCaughtChange:", x.value);
			newObj.onPokedexCaughtChange(x.value);
		}
	});
	gamehook.properties.player.starterPokemon.change(async(x) => {
		if(x && (x.value || x.value === "")) {
			//console.log("onStarterPokemonChange:", x.value);
			newObj.onStarterPokemonChange(x.value);
		}
	});
	gamehook.properties.player.starterPokemonInt.change(async(x) => {
		if(x && (x.value || x.value === "")) {
			//console.log("onStarterPokemonIntChange:", x.value);
			newObj.onStarterPokemonIntChange(x.value);
		}
	});
	gamehook.properties.player.joypadSimulation.change(async(x) => {
		if(x && (x.value || x.value === "")) {
			//console.log("onJoypadSimulationChange:", x.value);
			newObj.onJoypadSimulationChange(x.value);
		}
	});
	gamehook.properties.player.joypadIgnore.change(async(x) => {
		if(x && (x.value || x.value === "")) {
			//console.log("onJoypadIgnoreChange:", x.value);
			newObj.onJoypadIgnoreChange(x.value);
		}
	});
	
	team.forEach((teamMember) => {
		teamMember.listen(newObj);
	});
	
	if(gamehook.properties.player.badges && Object.keys(gamehook.properties.player.badges).length) {
		for(var i = 0; i < Object.keys(gamehook.properties.player.badges).length; i++) {
			(function(newObj, gamehook, badges, badgeIdx) {
				var propName = "badge" + (badgeIdx + 1).toString();
				gamehook.properties.player.badges[propName].change(async(x) => {
					if(x && (x.value || x.value === false || x.value === 0)) {
						badges[badgeIdx] = x.value;
						//console.log("onBadgeChange[", badgeIdx, "]:", x.value);
						newObj.onBadgeChange(x.value);
					}
				});
				
			})(newObj, gamehook, badges, i);
		}
	}
	
	return newObj;
};

//PlayerState.static = null;
//PlayerState.staticMethod = function() {
//};
PlayerState.prototype.onNameChange = function (newName) {
	this.name = newName;

	this.listeners.forEach((listener) => {
		listener.onPlayerStateChange(this);
	});
};

PlayerState.prototype.onPlayerIdChange = function (newPlayerId) {
	this.playerId = newPlayerId;

	this.listeners.forEach((listener) => {
		listener.onPlayerStateChange(this);
	});
};

PlayerState.prototype.onTeamCountChange = function (newTeamCount) {
	this.teamCount = newTeamCount;

	this.listeners.forEach((listener) => {
		listener.onPlayerStateChange(this);
	});
};

PlayerState.prototype.onPokedexSeenChange = function (newPokedexSeen) {
	this.pokedexSeen = newPokedexSeen;

	this.listeners.forEach((listener) => {
		listener.onPlayerStateChange(this);
	});
};

PlayerState.prototype.onPokedexCaughtChange = function (newPokedexCaught) {
	this.pokedexCaught = newPokedexCaught;

	this.listeners.forEach((listener) => {
		listener.onPlayerStateChange(this);
	});
};

PlayerState.prototype.onStarterPokemonChange = function (newStarterPokemon) {
	this.starterPokemon = newStarterPokemon;

	this.listeners.forEach((listener) => {
		listener.onPlayerStateChange(this);
	});
};

PlayerState.prototype.onStarterPokemonIntChange = function (newStarterPokemonInt) {
	this.starterPokemonInt = newStarterPokemonInt;

	this.listeners.forEach((listener) => {
		listener.onPlayerStateChange(this);
	});
};

PlayerState.prototype.onJoypadSimulationChange = function (newJoypadSimulation) {
	this.joypadSimulation = newJoypadSimulation;

	this.listeners.forEach((listener) => {
		listener.onPlayerStateChange(this);
	});
};

PlayerState.prototype.onJoypadIgnoreChange = function (newJoypadIgnore) {
	this.joypadIgnore = newJoypadIgnore;

	this.listeners.forEach((listener) => {
		listener.onPlayerStateChange(this);
	});
};

PlayerState.prototype.onTeamChange = function (team) {
	//console.log("onTeamChange");
	this.listeners.forEach((listener) => {
		listener.onPlayerStateChange(this);
	});
};

PlayerState.prototype.onBadgeChange = function (badge) {
	//console.log("onBadgeChange");
	this.listeners.forEach((listener) => {
		listener.onPlayerStateChange(this);
	});
};

PlayerState.prototype.listen = function (obj) {
	this.listeners.push(obj);
};

(function () {
  // Static initialization code
})();