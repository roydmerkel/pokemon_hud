function BattleState(type, animationTurn, specialType, curOpponent, battleResult, lowHealthAlarm, attackDamage, 
					 trainer, playerPokemon, enemyPokemon, battleStart, trainerDefeated, nextAttackDamage) {
	this.type = type; // string
	this.animationTurn = animationTurn; // string
	this.specialType = specialType; // string
	this.curOpponent = curOpponent; // int
	this.battleResult = battleResult; // string
	this.lowHealthAlarm = lowHealthAlarm; // string
	this.attackDamage = attackDamage; // int
	this.trainer = trainer; // object
	this.playerPokemon = playerPokemon; // object
	this.enemyPokemon = enemyPokemon; // object
	this.battleStart = battleStart; // int
	this.trainerDefeated = trainerDefeated; // int
	this.nextAttackDamage = nextAttackDamage; // int
	this.listeners = [];
	this.gamehook = null;
}

BattleState.ConstructBattleStateFromGamehook = function (gamehook) {
	var type = "";
	var animationTurn = "";
	var specialType = "";
	var curOpponent = 0;
	var battleResult = "";
	var lowHealthAlarm = "";
	var attackDamage = 0;
	var trainer = null;
	var playerPokemon = null;
	var enemyPokemon = null;
	var battleStart = 0;
	var trainerDefeated = 0;
	var nextAttackDamage = 0;

	if(gamehook.properties.battle && gamehook.properties.battle.mode && (gamehook.properties.battle.mode.value || gamehook.properties.battle.mode.value === "")) {
		type = gamehook.properties.battle.mode.value;
	} else if(gamehook.properties.battle && gamehook.properties.battle.type && (gamehook.properties.battle.type.value || gamehook.properties.battle.type.value === "")) {
		type = gamehook.properties.battle.type.value;
	}
	
	if(gamehook.properties.battle && gamehook.properties.battle.animationTurn && (gamehook.properties.battle.animationTurn.value || gamehook.properties.battle.animationTurn.value === "")) {
		animationTurn = gamehook.properties.battle.animationTurn.value;
	}
	
	if(gamehook.properties.battle && gamehook.properties.battle.specialType && (gamehook.properties.battle.specialType.value || gamehook.properties.battle.specialType.value === "")) {
		specialType = gamehook.properties.battle.specialType.value;
	} else if(gamehook.properties.battle && gamehook.properties.battle.type && (gamehook.properties.battle.type.value || gamehook.properties.battle.type.value === "")) {
		specialType = gamehook.properties.battle.type.value;
	}

	if(gamehook.properties.battle && gamehook.properties.battle.curOpponent && (gamehook.properties.battle.curOpponent.value || gamehook.properties.battle.curOpponent.value === 0)) {
		curOpponent = gamehook.properties.battle.curOpponent.value;
	}
	
	if(gamehook.properties.battle && gamehook.properties.battle.battleResult && (gamehook.properties.battle.battleResult.value || gamehook.properties.battle.battleResult.value === "")) {
		battleResult = gamehook.properties.battle.battleResult.value;
	} else if(gamehook.properties.battle && gamehook.properties.battle.result && (gamehook.properties.battle.result.value || gamehook.properties.battle.result.value === "")) {
		battleResult = gamehook.properties.battle.result.value;
	}
	
	if(gamehook.properties.battle && gamehook.properties.battle.lowHealthAlarm && (gamehook.properties.battle.lowHealthAlarm.value || gamehook.properties.battle.lowHealthAlarm.value === "")) {
		lowHealthAlarm = gamehook.properties.battle.lowHealthAlarm.value;
	}
	
	if(gamehook.properties.battle && gamehook.properties.battle.attackDamage && (gamehook.properties.battle.attackDamage.value || gamehook.properties.battle.attackDamage.value === 0)) {
		attackDamage = gamehook.properties.battle.attackDamage.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.other && gamehook.properties.battle.other.battleStart && (gamehook.properties.battle.other.battleStart.value || gamehook.properties.battle.other.battleStart.value === 0)) {
		battleStart = gamehook.properties.battle.other.battleStart.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.turnInfo && gamehook.properties.battle.turnInfo.battleStart && (gamehook.properties.battle.turnInfo.battleStart.value || gamehook.properties.battle.turnInfo.battleStart.value === 0)) {
		battleStart = gamehook.properties.battle.turnInfo.battleStart.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.other && gamehook.properties.battle.other.trainerDefeated && (gamehook.properties.battle.other.trainerDefeated.value || gamehook.properties.battle.other.trainerDefeated.value === 0)) {
		trainerDefeated = gamehook.properties.battle.other.trainerDefeated.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.turnInfo && gamehook.properties.battle.turnInfo.trainerDefeated && (gamehook.properties.battle.turnInfo.trainerDefeated.value || gamehook.properties.battle.turnInfo.trainerDefeated.value === 0)) {
		trainerDefeated = gamehook.properties.battle.turnInfo.trainerDefeated.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.other && gamehook.properties.battle.other.nextAttackDamage && (gamehook.properties.battle.other.nextAttackDamage.value || gamehook.properties.battle.other.nextAttackDamage.value === 0)) {
		nextAttackDamage = gamehook.properties.battle.other.nextAttackDamage.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.turnInfo && gamehook.properties.battle.turnInfo.nextAttackDamage && (gamehook.properties.battle.turnInfo.nextAttackDamage.value || gamehook.properties.battle.turnInfo.nextAttackDamage.value === 0)) {
		nextAttackDamage = gamehook.properties.battle.turnInfo.nextAttackDamage.value;
	}

	trainer = BattleTrainerState.ConstructBattleTrainerStateFromGamehook(gamehook);
	playerPokemon = BattlePlayerTeamPokemonState.ConstructBattlePlayerTeamPokemonStateFromGamehook(gamehook);
	enemyPokemon = BattleEnemyPokemonState.ConstructBattleEnemyPokemonStateFromGamehook(gamehook);
	
	var newObj = new BattleState(type, animationTurn, specialType, curOpponent, battleResult, lowHealthAlarm, attackDamage, 
								 trainer, playerPokemon, enemyPokemon, battleStart, trainerDefeated, nextAttackDamage);
	
	newObj.gamehook = gamehook;
	
	if(gamehook.properties.battle.mode) {
		gamehook.properties.battle.mode.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onBattleTypeChange:", x.value);
				newObj.onBattleTypeChange(x.value);
			}
		});
	} else if(gamehook.properties.battle.type)  {
		gamehook.properties.battle.type.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onBattleTypeChange:", x.value);
				newObj.onBattleTypeChange(x.value);
			}
		});
	}
	
	gamehook.properties.battle.animationTurn.change(async(x) => {
		if(x && (x.value || x.value === "")) {
			//console.log("onAnimationTurnChange:", x.value);
			newObj.onAnimationTurnChange(x.value);
		}
	});
	
	if(gamehook.properties.battle.specialType) {
		gamehook.properties.battle.specialType.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onBattleSpecialTypeChange:", x.value);
				newObj.onBattleSpecialTypeChange(x.value);
			}
		});
	} else if(gamehook.properties.battle.type)  {
		gamehook.properties.battle.type.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onBattleSpecialTypeChange:", x.value);
				newObj.onBattleSpecialTypeChange(x.value);
			}
		});
	}
	
	gamehook.properties.battle.curOpponent.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onCurOpponentChange:", x.value);
			newObj.onCurOpponentChange(x.value);
		}
	});

	if(gamehook.properties.battle.battleResult) {
		gamehook.properties.battle.battleResult.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onBattleResultChange:", x.value);
				newObj.onBattleResultChange(x.value);
			}
		});
	} else if(gamehook.properties.battle.result)  {
		gamehook.properties.battle.result.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onBattleResultChange:", x.value);
				newObj.onBattleResultChange(x.value);
			}
		});
	}
	
	gamehook.properties.battle.lowHealthAlarm.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onLowHealthAlarmChange:", x.value);
			newObj.onLowHealthAlarmChange(x.value);
		}
	});

	gamehook.properties.battle.attackDamage.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onAttackDamageChange:", x.value);
			newObj.onAttackDamageChange(x.value);
		}
	});
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.other && gamehook.properties.battle.other.battleStart) {
		gamehook.properties.battle.other.battleStart.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onBattleStartChange:", x.value);
				newObj.onBattleStartChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.turnInfo && gamehook.properties.battle.turnInfo.battleStart) {
		gamehook.properties.battle.turnInfo.battleStart.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onBattleStartChange:", x.value);
				newObj.onBattleStartChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.other && gamehook.properties.battle.other.trainerDefeated) {
		gamehook.properties.battle.other.trainerDefeated.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onTrainerDefeatedChange:", x.value);
				newObj.onTrainerDefeatedChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.turnInfo && gamehook.properties.battle.turnInfo.trainerDefeated) {
		gamehook.properties.battle.turnInfo.trainerDefeated.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onTrainerDefeatedChange:", x.value);
				newObj.onTrainerDefeatedChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.other && gamehook.properties.battle.other.nextAttackDamage) {
		gamehook.properties.battle.other.nextAttackDamage.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onNextAttackDamageChange:", x.value);
				newObj.onNextAttackDamageChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.turnInfo && gamehook.properties.battle.turnInfo.nextAttackDamage) {
		gamehook.properties.battle.turnInfo.nextAttackDamage.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onNextAttackDamageChange:", x.value);
				newObj.onNextAttackDamageChange(x.value);
			}
		});
	}
	
	trainer.listen(newObj);
	playerPokemon.listen(newObj);
	enemyPokemon.listen(newObj);
	
	return newObj;
};

//BattleState.static = null;
//BattleState.staticMethod = function() {
//};
BattleState.prototype.onBattleTypeChange = function (newType) {
	this.type = newType;

	this.listeners.forEach((listener) => {
		listener.onBattleStateChange(this);
	});
};

BattleState.prototype.onAnimationTurnChange = function (newAnimationTurn) {
	this.animationTurn = newAnimationTurn;

	this.listeners.forEach((listener) => {
		listener.onBattleStateChange(this);
	});
};

BattleState.prototype.onBattleSpecialTypeChange = function (newSpecialType) {
	this.specialType = newSpecialType;

	this.listeners.forEach((listener) => {
		listener.onBattleStateChange(this);
	});
};

BattleState.prototype.onCurOpponentChange = function (newCurOpponent) {
	this.curOpponent = newCurOpponent;

	this.listeners.forEach((listener) => {
		listener.onBattleStateChange(this);
	});
};

BattleState.prototype.onBattleResultChange = function (newBattleResult) {
	this.battleResult = newBattleResult;

	this.listeners.forEach((listener) => {
		listener.onBattleStateChange(this);
	});
};

BattleState.prototype.onLowHealthAlarmChange = function (newLowHealthAlarm) {
	this.lowHealthAlarm = newLowHealthAlarm;

	this.listeners.forEach((listener) => {
		listener.onBattleStateChange(this);
	});
};

BattleState.prototype.onAttackDamageChange = function (newAttackDamage) {
	this.attackDamage = newAttackDamage;

	this.listeners.forEach((listener) => {
		listener.onBattleStateChange(this);
	});
};

BattleState.prototype.onBattleStartChange = function (newBattleStart) {
	this.battleStart = newBattleStart;

	this.listeners.forEach((listener) => {
		listener.onBattleStateChange(this);
	});
};

BattleState.prototype.onTrainerDefeatedChange = function (newTrainerDefeated) {
	this.trainerDefeated = newTrainerDefeated;

	this.listeners.forEach((listener) => {
		listener.onBattleStateChange(this);
	});
};

BattleState.prototype.onNextAttackDamageChange = function (newNextAttackDamage) {
	this.nextAttackDamage = newNextAttackDamage;

	this.listeners.forEach((listener) => {
		listener.onBattleStateChange(this);
	});
};

BattleState.prototype.onBattleTrainerStateChange = function (trainer) {
	//console.log("onBattleTrainerStateChange");
	this.listeners.forEach((listener) => {
		listener.onBattleStateChange(this);
	});
};

BattleState.prototype.onBattlePlayerTeamPokemonChange = function (trainer) {
	//console.log("onBattlePlayerTeamPokemonChange");
	this.listeners.forEach((listener) => {
		listener.onBattleStateChange(this);
	});
};

BattleState.prototype.onBattleEnemyPokemonChange = function (trainer) {
	//console.log("onBattleEnemyPokemonChange");
	this.listeners.forEach((listener) => {
		listener.onBattleStateChange(this);
	});
};

BattleState.prototype.listen = function (obj) {
	this.listeners.push(obj);
};

(function () {
  // Static initialization code
})();