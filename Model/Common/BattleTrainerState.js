function BattleTrainerState(name, trainerClass, number, gymLeader, totalPokemon, team) {
	this.name = name; // string
	this.trainerClass = trainerClass; // string
	this.number = number; // int
	this.gymLeader = gymLeader; // int 
	this.totalPokemon = totalPokemon; // int
	this.team = team; // array
	this.listeners = [];
	this.gamehook = null;
}

BattleTrainerState.ConstructBattleTrainerStateFromGamehook = function (gamehook) {
	var name = "";
	var trainerClass = "";
	var number = 0;
	var gymLeader = 0;
	var totalPokemon = 0;
	var team = [];
				
	if(gamehook.properties.battle && gamehook.properties.battle.trainer && gamehook.properties.battle.trainer.name && gamehook.properties.battle.trainer.name.value) {
		name = gamehook.properties.battle.trainer.name.value;
	}

	if(gamehook.properties.battle && gamehook.properties.battle.trainer && gamehook.properties.battle.trainer.class && gamehook.properties.battle.trainer.class.value) {
		trainerClass = gamehook.properties.battle.trainer.class.value;
	}

	if(gamehook.properties.battle && gamehook.properties.battle.trainer && gamehook.properties.battle.trainer.number && gamehook.properties.battle.trainer.number.value) {
		number = gamehook.properties.battle.trainer.number.value;
	}

	if(gamehook.properties.battle && gamehook.properties.battle.trainer && gamehook.properties.battle.trainer.gymLeader && gamehook.properties.battle.trainer.gymLeader.value) {
		gymLeader = gamehook.properties.battle.trainer.gymLeader.value;
	}

	if(gamehook.properties.battle && gamehook.properties.battle.trainer && gamehook.properties.battle.trainer.totalPokemon && gamehook.properties.battle.trainer.totalPokemon.value) {
		totalPokemon = gamehook.properties.battle.trainer.totalPokemon.value;
	}
	
	if(gamehook.properties.battle && gamehook.properties.battle.trainer.team) {
		for(var i in gamehook.properties.battle.trainer.team) {
		//for(var i = 0; i < gamehook.properties.battle.trainer.team.length; i++) {
			team.push(PlayerTeamPokemonState.ConstructPlayerTeamPokemonStateFromGamehook(gamehook, i, gamehook.properties.battle.trainer.team));
		}
	}
	
	var newObj = new BattleTrainerState(name, trainerClass, number, gymLeader, totalPokemon, team);
	newObj.gamehook = gamehook;

	gamehook.properties.battle.trainer.name.change(async(x) => {
		if(x && (x.value || x.value === "")) {
			//console.log("onNameChange:", x.value);
			newObj.onNameChange(x.value);
		}
	});

	gamehook.properties.battle.trainer.class.change(async(x) => {
		if(x && (x.value || x.value === "")) {
			//console.log("onClassChange:", x.value);
			newObj.onClassChange(x.value);
		}
	});

	gamehook.properties.battle.trainer.number.change(async(x) => {
		if(x && (x.value || x.value === "")) {
			//console.log("onNumberChange:", x.value);
			newObj.onNumberChange(x.value);
		}
	});

	gamehook.properties.battle.trainer.gymLeader.change(async(x) => {
		if(x && (x.value || x.value === "")) {
			//console.log("onGymLeaderChange:", x.value);
			newObj.onGymLeaderChange(x.value);
		}
	});

	gamehook.properties.battle.trainer.totalPokemon.change(async(x) => {
		if(x && (x.value || x.value === "")) {
			//console.log("onTotalPokemonChange:", x.value);
			newObj.onTotalPokemonChange(x.value);
		}
	});
	
	team.forEach((teamMember) => {
		teamMember.listen(newObj);
	});
	
	return newObj;
};

//PlayerState.static = null;
//PlayerState.staticMethod = function() {
//};
BattleTrainerState.prototype.onNameChange = function (newName) {
	this.name = newName;

	this.listeners.forEach((listener) => {
		listener.onBattleTrainerStateChange(this);
	});
};

BattleTrainerState.prototype.onClassChange = function (newClass) {
	this.trainerClass = newClass;

	this.listeners.forEach((listener) => {
		listener.onBattleTrainerStateChange(this);
	});
};

BattleTrainerState.prototype.onNumberChange = function (newNumber) {
	this.number = newNumber;

	this.listeners.forEach((listener) => {
		listener.onBattleTrainerStateChange(this);
	});
};

BattleTrainerState.prototype.onGymLeaderChange = function (newGymLeader) {
	this.gymLeader = newGymLeader;

	this.listeners.forEach((listener) => {
		listener.onBattleTrainerStateChange(this);
	});
};

BattleTrainerState.prototype.onTotalPokemonChange = function (newTotalPokemon) {
	this.totalPokemon = newTotalPokemon;

	this.listeners.forEach((listener) => {
		listener.onBattleTrainerStateChange(this);
	});
};

BattleTrainerState.prototype.onTeamChange = function (team) {
	//console.log("onTeamChange");
	this.listeners.forEach((listener) => {
		listener.onBattleTrainerStateChange(this);
	});
};

BattleTrainerState.prototype.listen = function (obj) {
	this.listeners.push(obj);
};

(function () {
  // Static initialization code
})();