function BattlePlayerTeamPokemonState(partyPos, nickname, species, pokedexNumber, 
										type1, type2, type1val, type2val, level, catchRate, 
										modStageAttack, modStageDefense, modStageSpeed, modStageSpecial, 
										modStageAccuracy, modStageEvasion, battleStatHp, battleStatMaxHp, 
										battleStatAttack, battleStatDefense, battleStatSpeed, battleStatSpecial,
										battleStatus1, battleStatus2, battleStatusCondition, 
										tempStatusConfusion, tempStatusBadPoison,
										move1, move2, move3, move4, move1int, 
										move2int, move3int, move4int, 
										move1pp, move2pp, move3pp, move4pp, 
										move1ppint, move2ppint, move3ppint, move4ppint,
										bide, thrash, multiHit, flinch, charging, multiTurn,
										invulnerable, confusion, xAccuracy, mist, focusEnergy,
										hasSubstitute, recharge, rage, leechSeeded, toxic,
										lightScreen, reflect, transformed,
										multiHitCounter, confusionCounter, toxicCounter, disableCounter,
										lastMove, lastEffect, lastPower, lastType, lastAccuracy, lastMaxPP) {
	  
	this.partyPos = partyPos; // int
	this.nickname = nickname; // string
	this.species = species; // string
	this.pokedexNumber = pokedexNumber; // int
    this.type1 = type1; // string
    this.type2 = type2; // string
    this.type1val = type1val; // int
    this.type2val = type2val; // int
	this.level = level; // int
	this.catchRate = catchRate; // int
    this.modStageAttack = modStageAttack; // int
    this.modStageDefense = modStageDefense; // int
    this.modStageSpeed = modStageSpeed; // int
    this.modStageSpecial = modStageSpecial; // int
    this.modStageAccuracy = modStageAccuracy; // int
    this.modStageEvasion = modStageEvasion; // int
    this.battleStatHp = battleStatHp; // int
    this.battleStatMaxHp = battleStatMaxHp; // int
    this.battleStatAttack = battleStatAttack; // int
    this.battleStatDefense = battleStatDefense; // int
    this.battleStatSpeed = battleStatSpeed; // int
    this.battleStatSpecial = battleStatSpecial; // int
	this.battleStatus1 = battleStatus1; // string
	this.battleStatus2 = battleStatus2; // string
	this.battleStatusCondition = battleStatusCondition; // string
	this.tempStatusConfusion = tempStatusConfusion; // string
	this.tempStatusBadPoison = tempStatusBadPoison; // string
	this.move1 = move1; // string
	this.move2 = move2; // string
	this.move3 = move3; // string
	this.move4 = move4; // string
	this.move1int = move1int; // int
	this.move2int = move2int; // int
	this.move3int = move3int; // int
	this.move4int = move4int; // int
	this.move1pp = move1pp; // int
	this.move2pp = move2pp; // int
	this.move3pp = move3pp; // int
	this.move4pp = move4pp; // int
	this.move1ppint = move1ppint; // int
	this.move2ppint = move2ppint; // int
	this.move3ppint = move3ppint; // int
	this.move4ppint = move4ppint; // int
	this.bide = bide; // bool
	this.thrash = thrash; // bool
	this.multiHit = multiHit; // bool
	this.flinch = flinch; // bool
	this.charging = charging; // bool
	this.multiTurn = multiTurn; // bool
	this.invulnerable = invulnerable; // bool
	this.confusion = confusion; // bool
	this.xAccuracy = xAccuracy; // bool
	this.mist = mist; // bool
	this.focusEnergy = focusEnergy; // bool
	this.hasSubstitute = hasSubstitute; // bool
	this.recharge = recharge; // bool
	this.rage = rage; // bool
	this.leechSeeded = leechSeeded; // bool
	this.toxic = toxic; // bool
	this.lightScreen = lightScreen; // bool
	this.reflect = reflect; // bool
	this.transformed = transformed; // bool
	this.multiHitCounter = multiHitCounter; // int
	this.confusionCounter = confusionCounter; // int
	this.toxicCounter = toxicCounter; // int
	this.disableCounter = disableCounter; // int
	this.lastMove = lastMove; // string
	this.lastEffect = lastEffect; // int
	this.lastPower = lastPower; // int
	this.lastType = lastType; // string
	this.lastAccuracy = lastAccuracy; // int
	this.lastMaxPP = lastMaxPP; // int
					
	this.listeners = [];
	this.gamehook = null;
}
		
BattlePlayerTeamPokemonState.ConstructBattlePlayerTeamPokemonStateFromGamehook = function (gamehook) {
	var partyPos = 0;
	var nickname = "";
	var species = "";
	var pokedexNumber = 0;
	var type1 = "";
	var type2 = "";
	var type1val = 0;
	var type2val = 0;
	var level = 0;
	var catchRate = 0;
	var modStageAttack = 0;
	var modStageDefense = 0;
	var modStageSpeed = 0;
	var modStageSpecial = 0;
	var modStageAccuracy = 0;
	var modStageEvasion = 0;
	var battleStatHp = 0;
	var battleStatMaxHp = 0;
	var battleStatAttack = 0;
	var battleStatDefense = 0;
	var battleStatSpeed = 0;
	var battleStatSpecial = 0;
	var battleStatus1 = "";
	var battleStatus2 = "";
	var battleStatusCondition = "";
	var tempStatusConfusion = null;
	var tempStatusBadPoison = null;
	var move1 = "";
	var move2 = "";
	var move3 = "";
	var move4 = "";
	var move1int = 0;
	var move2int = 0;
	var move3int = 0;
	var move4int = 0;
	var move1pp = 0;
	var move2pp = 0;
	var move3pp = 0;
	var move4pp = 0;
	var move1ppint = 0;
	var move2ppint = 0;
	var move3ppint = 0;
	var move4ppint = 0;
	var bide = false;
	var thrash = false;
	var multiHit = false;
	var flinch = false;
	var charging = false;
	var multiTurn = false;
	var invulnerable = false;
	var confusion = false;
	var xAccuracy = false;
	var mist = false;
	var focusEnergy = false;
	var hasSubstitute = false;
	var recharge = false;
	var rage = false;
	var leechSeeded = false;
	var toxic = false;
	var lightScreen = false;
	var reflect = false;
	var transformed = false;
	var multiHitCounter = 0;
	var confusionCounter = 0;
	var toxicCounter = 0;
	var disableCounter = 0;
	var lastMove = "";
	var lastEffect = 0;
	var lastPower = 0;
	var lastType = "";
	var lastAccuracy = 0;
	var lastMaxPP = 0;

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.partyPos && gamehook.properties.battle.playerPokemon.partyPos.value) {
		partyPos = gamehook.properties.battle.playerPokemon.partyPos.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.partyPos && gamehook.properties.battle.yourPokemon.partyPos.value) {
		partyPos = gamehook.properties.battle.yourPokemon.partyPos.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.nickname && gamehook.properties.battle.playerPokemon.nickname.value) {
		nickname = gamehook.properties.battle.playerPokemon.nickname.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.nickname && gamehook.properties.battle.yourPokemon.nickname.value) {
		nickname = gamehook.properties.battle.yourPokemon.nickname.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.species && gamehook.properties.battle.playerPokemon.species.value) {
		species = gamehook.properties.battle.playerPokemon.species.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.species && gamehook.properties.battle.yourPokemon.species.value) {
		species = gamehook.properties.battle.yourPokemon.species.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.pokedexNumber && gamehook.properties.battle.playerPokemon.pokedexNumber.value) {
		pokedexNumber = gamehook.properties.battle.playerPokemon.pokedexNumber.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.pokedexNumber && gamehook.properties.battle.yourPokemon.pokedexNumber.value) {
		pokedexNumber = gamehook.properties.battle.yourPokemon.pokedexNumber.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.type1 && gamehook.properties.battle.playerPokemon.type1.value) {
		type1 = gamehook.properties.battle.playerPokemon.type1.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.type1 && gamehook.properties.battle.yourPokemon.type1.value) {
		type1 = gamehook.properties.battle.yourPokemon.type1.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.type2 && gamehook.properties.battle.playerPokemon.type2.value) {
		type2 = gamehook.properties.battle.playerPokemon.type2.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.type2 && gamehook.properties.battle.yourPokemon.type2.value) {
		type2 = gamehook.properties.battle.yourPokemon.type2.value;
	}
		
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.type1int && gamehook.properties.battle.playerPokemon.type1int.value) {
		type1val = gamehook.properties.battle.playerPokemon.type1int.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.type1val && gamehook.properties.battle.yourPokemon.type1val.value) {
		type1val = gamehook.properties.battle.yourPokemon.type1val.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.type2int && gamehook.properties.battle.playerPokemon.type2int.value) {
		type2val = gamehook.properties.battle.playerPokemon.type2int.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.type2val && gamehook.properties.battle.yourPokemon.type2val.value) {
		type2val = gamehook.properties.battle.yourPokemon.type2val.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.level && gamehook.properties.battle.playerPokemon.level.value) {
		level = gamehook.properties.battle.playerPokemon.level.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.level && gamehook.properties.battle.yourPokemon.level.value) {
		level = gamehook.properties.battle.yourPokemon.level.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.catchRate && gamehook.properties.battle.playerPokemon.catchRate.value) {
		catchRate = gamehook.properties.battle.playerPokemon.catchRate.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.catchRate && gamehook.properties.battle.yourPokemon.catchRate.value) {
		catchRate = gamehook.properties.battle.yourPokemon.catchRate.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.modifiers && gamehook.properties.battle.playerPokemon.modifiers.attack && gamehook.properties.battle.playerPokemon.modifiers.attack.value) {
		modStageAttack = gamehook.properties.battle.playerPokemon.modifiers.attack.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.modStageAttack && gamehook.properties.battle.yourPokemon.modStageAttack.value) {
		modStageAttack = gamehook.properties.battle.yourPokemon.modStageAttack.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.modifiers && gamehook.properties.battle.playerPokemon.modifiers.defense && gamehook.properties.battle.playerPokemon.modifiers.defense.value) {
		modStageDefense = gamehook.properties.battle.playerPokemon.modifiers.defense.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.modStageDefense && gamehook.properties.battle.yourPokemon.modStageDefense.value) {
		modStageDefense = gamehook.properties.battle.yourPokemon.modStageDefense.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.modifiers && gamehook.properties.battle.playerPokemon.modifiers.speed && gamehook.properties.battle.playerPokemon.modifiers.speed.value) {
		modStageSpeed = gamehook.properties.battle.playerPokemon.modifiers.speed.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.modStageSpeed && gamehook.properties.battle.yourPokemon.modStageSpeed.value) {
		modStageSpeed = gamehook.properties.battle.yourPokemon.modStageSpeed.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.modifiers && gamehook.properties.battle.playerPokemon.modifiers.special && gamehook.properties.battle.playerPokemon.modifiers.special.value) {
		modStageSpecial = gamehook.properties.battle.playerPokemon.modifiers.special.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.modStageSpecial && gamehook.properties.battle.yourPokemon.modStageSpecial.value) {
		modStageSpecial = gamehook.properties.battle.yourPokemon.modStageSpecial.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.modifiers && gamehook.properties.battle.playerPokemon.modifiers.accuracy && gamehook.properties.battle.playerPokemon.modifiers.accuracy.value) {
		modStageAccuracy = gamehook.properties.battle.playerPokemon.modifiers.accuracy.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.modStageAccuracy && gamehook.properties.battle.yourPokemon.modStageAccuracy.value) {
		modStageAccuracy = gamehook.properties.battle.yourPokemon.modStageAccuracy.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.modifiers && gamehook.properties.battle.playerPokemon.modifiers.evasion && gamehook.properties.battle.playerPokemon.modifiers.evasion.value) {
		modStageEvasion = gamehook.properties.battle.playerPokemon.modifiers.evasion.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.modStageEvasion && gamehook.properties.battle.yourPokemon.modStageEvasion.value) {
		modStageEvasion = gamehook.properties.battle.yourPokemon.modStageEvasion.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.stats && gamehook.properties.battle.playerPokemon.stats.hp && gamehook.properties.battle.playerPokemon.stats.hp.value) {
		battleStatHp = gamehook.properties.battle.playerPokemon.stats.hp.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.battleStatHp && gamehook.properties.battle.yourPokemon.battleStatHp.value) {
		battleStatHp = gamehook.properties.battle.yourPokemon.battleStatHp.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.hp && gamehook.properties.battle.yourPokemon.hp.value) {
		battleStatHp = gamehook.properties.battle.yourPokemon.hp.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.stats && gamehook.properties.battle.playerPokemon.stats.maxHp && gamehook.properties.battle.playerPokemon.stats.maxHp.value) {
		battleStatMaxHp = gamehook.properties.battle.playerPokemon.stats.maxHp.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.battleStatMaxHp && gamehook.properties.battle.yourPokemon.battleStatMaxHp.value) {
		battleStatMaxHp = gamehook.properties.battle.yourPokemon.battleStatMaxHp.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.maxHp && gamehook.properties.battle.yourPokemon.maxHp.value) {
		battleStatMaxHp = gamehook.properties.battle.yourPokemon.maxHp.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.stats && gamehook.properties.battle.playerPokemon.stats.attack && gamehook.properties.battle.playerPokemon.stats.attack.value) {
		battleStatAttack = gamehook.properties.battle.playerPokemon.stats.attack.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.battleStatAttack && gamehook.properties.battle.yourPokemon.battleStatAttack.value) {
		battleStatAttack = gamehook.properties.battle.yourPokemon.battleStatAttack.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.attack && gamehook.properties.battle.yourPokemon.attack.value) {
		battleStatAttack = gamehook.properties.battle.yourPokemon.attack.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.stats && gamehook.properties.battle.playerPokemon.stats.defense && gamehook.properties.battle.playerPokemon.stats.defense.value) {
		battleStatDefense = gamehook.properties.battle.playerPokemon.stats.defense.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.battleStatDefense && gamehook.properties.battle.yourPokemon.battleStatDefense.value) {
		battleStatDefense = gamehook.properties.battle.yourPokemon.battleStatDefense.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.defense && gamehook.properties.battle.yourPokemon.defense.value) {
		battleStatDefense = gamehook.properties.battle.yourPokemon.defense.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.stats && gamehook.properties.battle.playerPokemon.stats.speed && gamehook.properties.battle.playerPokemon.stats.speed.value) {
		battleStatSpeed = gamehook.properties.battle.playerPokemon.stats.speed.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.battleStatSpeed && gamehook.properties.battle.yourPokemon.battleStatSpeed.value) {
		battleStatSpeed = gamehook.properties.battle.yourPokemon.battleStatSpeed.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.speed && gamehook.properties.battle.yourPokemon.speed.value) {
		battleStatSpeed = gamehook.properties.battle.yourPokemon.speed.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.stats && gamehook.properties.battle.playerPokemon.stats.special && gamehook.properties.battle.playerPokemon.stats.special.value) {
		battleStatSpecial = gamehook.properties.battle.playerPokemon.stats.special.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.battleStatSpecial && gamehook.properties.battle.yourPokemon.battleStatSpecial.value) {
		battleStatSpecial = gamehook.properties.battle.yourPokemon.battleStatSpecial.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.special && gamehook.properties.battle.yourPokemon.special.value) {
		battleStatSpecial = gamehook.properties.battle.yourPokemon.special.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.status && gamehook.properties.battle.playerPokemon.status.status1 && gamehook.properties.battle.playerPokemon.status.status1.value) {
		battleStatus1 = gamehook.properties.battle.playerPokemon.status.status1.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.battleStatus1 && gamehook.properties.battle.yourPokemon.battleStatus1.value) {
		battleStatus1 = gamehook.properties.battle.yourPokemon.battleStatus1.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.status && gamehook.properties.battle.playerPokemon.status.status2 && gamehook.properties.battle.playerPokemon.status.status2.value) {
		battleStatus2 = gamehook.properties.battle.playerPokemon.status.status2.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.battleStatus2 && gamehook.properties.battle.yourPokemon.battleStatus2.value) {
		battleStatus2 = gamehook.properties.battle.yourPokemon.battleStatus2.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.status && gamehook.properties.battle.playerPokemon.status.statusCondition && gamehook.properties.battle.playerPokemon.status.statusCondition.value) {
		battleStatusCondition = gamehook.properties.battle.playerPokemon.status.statusCondition.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.battleStatusCondition && gamehook.properties.battle.yourPokemon.battleStatusCondition.value) {
		battleStatusCondition = gamehook.properties.battle.yourPokemon.battleStatusCondition.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.status && gamehook.properties.battle.playerPokemon.status.tempStatusConfusion && gamehook.properties.battle.playerPokemon.status.tempStatusConfusion.value) {
		tempStatusConfusion = gamehook.properties.battle.playerPokemon.status.tempStatusConfusion.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.tempStatusConfusion && gamehook.properties.battle.yourPokemon.tempStatusConfusion.value) {
		tempStatusConfusion = gamehook.properties.battle.yourPokemon.tempStatusConfusion.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.status && gamehook.properties.battle.playerPokemon.status.tempStatusBadPoison && gamehook.properties.battle.playerPokemon.status.tempStatusBadPoison.value) {
		tempStatusBadPoison = gamehook.properties.battle.playerPokemon.status.tempStatusBadPoison.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.tempStatusBadPoison && gamehook.properties.battle.yourPokemon.tempStatusBadPoison.value) {
		tempStatusBadPoison = gamehook.properties.battle.yourPokemon.tempStatusBadPoison.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.moves && gamehook.properties.battle.playerPokemon.moves[0] && gamehook.properties.battle.playerPokemon.moves[0].move && gamehook.properties.battle.playerPokemon.moves[0].move.value) {
		move1 = gamehook.properties.battle.playerPokemon.moves[0].move.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.move1 && gamehook.properties.battle.yourPokemon.move1.value) {
		move1 = gamehook.properties.battle.yourPokemon.move1.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.moves && gamehook.properties.battle.playerPokemon.moves[0] && gamehook.properties.battle.playerPokemon.moves[0].moveint && gamehook.properties.battle.playerPokemon.moves[0].moveint.value) {
		move1int = gamehook.properties.battle.playerPokemon.moves[0].moveint.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.move1int && gamehook.properties.battle.yourPokemon.move1int.value) {
		move1int = gamehook.properties.battle.yourPokemon.move1int.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.moves && gamehook.properties.battle.playerPokemon.moves[0] && gamehook.properties.battle.playerPokemon.moves[0].pp && gamehook.properties.battle.playerPokemon.moves[0].pp.value) {
		move1pp = gamehook.properties.battle.playerPokemon.moves[0].pp.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.move1pp && gamehook.properties.battle.yourPokemon.move1pp.value) {
		move1pp = gamehook.properties.battle.yourPokemon.move1pp.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.moves && gamehook.properties.battle.playerPokemon.moves[0] && gamehook.properties.battle.playerPokemon.moves[0].ppint && gamehook.properties.battle.playerPokemon.moves[0].ppint.value) {
		move1ppint = gamehook.properties.battle.playerPokemon.moves[0].ppint.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.move1ppint && gamehook.properties.battle.yourPokemon.move1ppint.value) {
		move1ppint = gamehook.properties.battle.yourPokemon.move1ppint.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.moves && gamehook.properties.battle.playerPokemon.moves[1] && gamehook.properties.battle.playerPokemon.moves[1].move && gamehook.properties.battle.playerPokemon.moves[1].move.value) {
		move2 = gamehook.properties.battle.playerPokemon.moves[1].move.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.move2 && gamehook.properties.battle.yourPokemon.move2.value) {
		move2 = gamehook.properties.battle.yourPokemon.move2.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.moves && gamehook.properties.battle.playerPokemon.moves[1] && gamehook.properties.battle.playerPokemon.moves[1].moveint && gamehook.properties.battle.playerPokemon.moves[1].moveint.value) {
		move2int = gamehook.properties.battle.playerPokemon.moves[1].moveint.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.move2int && gamehook.properties.battle.yourPokemon.move2int.value) {
		move2int = gamehook.properties.battle.yourPokemon.move2int.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.moves && gamehook.properties.battle.playerPokemon.moves[1] && gamehook.properties.battle.playerPokemon.moves[1].pp && gamehook.properties.battle.playerPokemon.moves[1].pp.value) {
		move2pp = gamehook.properties.battle.playerPokemon.moves[1].pp.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.move2pp && gamehook.properties.battle.yourPokemon.move2pp.value) {
		move2pp = gamehook.properties.battle.yourPokemon.move2pp.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.moves && gamehook.properties.battle.playerPokemon.moves[1] && gamehook.properties.battle.playerPokemon.moves[1].ppint && gamehook.properties.battle.playerPokemon.moves[1].ppint.value) {
		move2ppint = gamehook.properties.battle.playerPokemon.moves[1].ppint.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.move2ppint && gamehook.properties.battle.yourPokemon.move2ppint.value) {
		move2ppint = gamehook.properties.battle.yourPokemon.move2ppint.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.moves && gamehook.properties.battle.playerPokemon.moves[2] && gamehook.properties.battle.playerPokemon.moves[2].move && gamehook.properties.battle.playerPokemon.moves[2].move.value) {
		move3 = gamehook.properties.battle.playerPokemon.moves[2].move.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.move3 && gamehook.properties.battle.yourPokemon.move3.value) {
		move3 = gamehook.properties.battle.yourPokemon.move3.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.moves && gamehook.properties.battle.playerPokemon.moves[2] && gamehook.properties.battle.playerPokemon.moves[2].moveint && gamehook.properties.battle.playerPokemon.moves[2].moveint.value) {
		move3int = gamehook.properties.battle.playerPokemon.moves[2].moveint.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.move3int && gamehook.properties.battle.yourPokemon.move3int.value) {
		move3int = gamehook.properties.battle.yourPokemon.move3int.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.moves && gamehook.properties.battle.playerPokemon.moves[2] && gamehook.properties.battle.playerPokemon.moves[2].pp && gamehook.properties.battle.playerPokemon.moves[2].pp.value) {
		move3pp = gamehook.properties.battle.playerPokemon.moves[2].pp.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.move3pp && gamehook.properties.battle.yourPokemon.move3pp.value) {
		move3pp = gamehook.properties.battle.yourPokemon.move3pp.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.moves && gamehook.properties.battle.playerPokemon.moves[2] && gamehook.properties.battle.playerPokemon.moves[2].ppint && gamehook.properties.battle.playerPokemon.moves[2].ppint.value) {
		move3ppint = gamehook.properties.battle.playerPokemon.moves[2].ppint.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.move3ppint && gamehook.properties.battle.yourPokemon.move3ppint.value) {
		move3ppint = gamehook.properties.battle.yourPokemon.move3ppint.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.moves && gamehook.properties.battle.playerPokemon.moves[3] && gamehook.properties.battle.playerPokemon.moves[3].move && gamehook.properties.battle.playerPokemon.moves[3].move.value) {
		move4 = gamehook.properties.battle.playerPokemon.moves[3].move.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.move4 && gamehook.properties.battle.yourPokemon.move4.value) {
		move4 = gamehook.properties.battle.yourPokemon.move4.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.moves && gamehook.properties.battle.playerPokemon.moves[3] && gamehook.properties.battle.playerPokemon.moves[3].moveint && gamehook.properties.battle.playerPokemon.moves[3].moveint.value) {
		move4int = gamehook.properties.battle.playerPokemon.moves[3].moveint.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.move4int && gamehook.properties.battle.yourPokemon.move4int.value) {
		move4int = gamehook.properties.battle.yourPokemon.move4int.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.moves && gamehook.properties.battle.playerPokemon.moves[3] && gamehook.properties.battle.playerPokemon.moves[3].pp && gamehook.properties.battle.playerPokemon.moves[3].pp.value) {
		move4pp = gamehook.properties.battle.playerPokemon.moves[3].pp.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.move4pp && gamehook.properties.battle.yourPokemon.move4pp.value) {
		move4pp = gamehook.properties.battle.yourPokemon.move4pp.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.moves && gamehook.properties.battle.playerPokemon.moves[3] && gamehook.properties.battle.playerPokemon.moves[3].ppint && gamehook.properties.battle.playerPokemon.moves[3].ppint.value) {
		move4ppint = gamehook.properties.battle.playerPokemon.moves[3].ppint.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.move4ppint && gamehook.properties.battle.yourPokemon.move4ppint.value) {
		move4ppint = gamehook.properties.battle.yourPokemon.move4ppint.value;
	}
		
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.bide && gamehook.properties.battle.playerPokemon.effects.bide.value) {
		bide = gamehook.properties.battle.playerPokemon.effects.bide.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.bide && gamehook.properties.battle.yourPokemon.effects.bide.value) {
		bide = gamehook.properties.battle.yourPokemon.effects.bide.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.thrash && gamehook.properties.battle.playerPokemon.effects.thrash.value) {
		thrash = gamehook.properties.battle.playerPokemon.effects.thrash.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.thrash && gamehook.properties.battle.yourPokemon.effects.thrash.value) {
		thrash = gamehook.properties.battle.yourPokemon.effects.thrash.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.multiHit && gamehook.properties.battle.playerPokemon.effects.multiHit.value) {
		multiHit = gamehook.properties.battle.playerPokemon.effects.multiHit.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.multiHit && gamehook.properties.battle.yourPokemon.effects.multiHit.value) {
		multiHit = gamehook.properties.battle.yourPokemon.effects.multiHit.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.flinch && gamehook.properties.battle.playerPokemon.effects.flinch.value) {
		flinch = gamehook.properties.battle.playerPokemon.effects.flinch.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.flinch && gamehook.properties.battle.yourPokemon.effects.flinch.value) {
		flinch = gamehook.properties.battle.yourPokemon.effects.flinch.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.charging && gamehook.properties.battle.playerPokemon.effects.charging.value) {
		charging = gamehook.properties.battle.playerPokemon.effects.charging.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.charging && gamehook.properties.battle.yourPokemon.effects.charging.value) {
		charging = gamehook.properties.battle.yourPokemon.effects.charging.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.multiTurn && gamehook.properties.battle.playerPokemon.effects.multiTurn.value) {
		multiTurn = gamehook.properties.battle.playerPokemon.effects.multiTurn.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.multiTurn && gamehook.properties.battle.yourPokemon.effects.multiTurn.value) {
		multiTurn = gamehook.properties.battle.yourPokemon.effects.multiTurn.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.invulnerable && gamehook.properties.battle.playerPokemon.effects.invulnerable.value) {
		invulnerable = gamehook.properties.battle.playerPokemon.effects.invulnerable.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.invulnerable && gamehook.properties.battle.yourPokemon.effects.invulnerable.value) {
		invulnerable = gamehook.properties.battle.yourPokemon.effects.invulnerable.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.confusion && gamehook.properties.battle.playerPokemon.effects.confusion.value) {
		confusion = gamehook.properties.battle.playerPokemon.effects.confusion.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.confusion && gamehook.properties.battle.yourPokemon.effects.confusion.value) {
		confusion = gamehook.properties.battle.yourPokemon.effects.confusion.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.xAccuracy && gamehook.properties.battle.playerPokemon.effects.xAccuracy.value) {
		xAccuracy = gamehook.properties.battle.playerPokemon.effects.xAccuracy.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.xAccuracy && gamehook.properties.battle.yourPokemon.effects.xAccuracy.value) {
		xAccuracy = gamehook.properties.battle.yourPokemon.effects.xAccuracy.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.mist && gamehook.properties.battle.playerPokemon.effects.mist.value) {
		mist = gamehook.properties.battle.playerPokemon.effects.mist.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.mist && gamehook.properties.battle.yourPokemon.effects.mist.value) {
		mist = gamehook.properties.battle.yourPokemon.effects.mist.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.focusEnergy && gamehook.properties.battle.playerPokemon.effects.focusEnergy.value) {
		focusEnergy = gamehook.properties.battle.playerPokemon.effects.focusEnergy.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.focusEnergy && gamehook.properties.battle.yourPokemon.effects.focusEnergy.value) {
		focusEnergy = gamehook.properties.battle.yourPokemon.effects.focusEnergy.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.hasSubstitute && gamehook.properties.battle.playerPokemon.effects.hasSubstitute.value) {
		hasSubstitute = gamehook.properties.battle.playerPokemon.effects.hasSubstitute.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.hasSubstitute && gamehook.properties.battle.yourPokemon.effects.hasSubstitute.value) {
		hasSubstitute = gamehook.properties.battle.yourPokemon.effects.hasSubstitute.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.recharge && gamehook.properties.battle.playerPokemon.effects.recharge.value) {
		recharge = gamehook.properties.battle.playerPokemon.effects.recharge.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.recharge && gamehook.properties.battle.yourPokemon.effects.recharge.value) {
		recharge = gamehook.properties.battle.yourPokemon.effects.recharge.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.rage && gamehook.properties.battle.playerPokemon.effects.rage.value) {
		rage = gamehook.properties.battle.playerPokemon.effects.rage.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.rage && gamehook.properties.battle.yourPokemon.effects.rage.value) {
		rage = gamehook.properties.battle.yourPokemon.effects.rage.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.leechSeeded && gamehook.properties.battle.playerPokemon.effects.leechSeeded.value) {
		leechSeeded = gamehook.properties.battle.playerPokemon.effects.leechSeeded.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.leechSeeded && gamehook.properties.battle.yourPokemon.effects.leechSeeded.value) {
		leechSeeded = gamehook.properties.battle.yourPokemon.effects.leechSeeded.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.toxic && gamehook.properties.battle.playerPokemon.effects.toxic.value) {
		toxic = gamehook.properties.battle.playerPokemon.effects.toxic.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.toxic && gamehook.properties.battle.yourPokemon.effects.toxic.value) {
		toxic = gamehook.properties.battle.yourPokemon.effects.toxic.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.lightScreen && gamehook.properties.battle.playerPokemon.effects.lightScreen.value) {
		lightScreen = gamehook.properties.battle.playerPokemon.effects.lightScreen.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.lightScreen && gamehook.properties.battle.yourPokemon.effects.lightScreen.value) {
		lightScreen = gamehook.properties.battle.yourPokemon.effects.lightScreen.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.reflect && gamehook.properties.battle.playerPokemon.effects.reflect.value) {
		reflect = gamehook.properties.battle.playerPokemon.effects.reflect.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.reflect && gamehook.properties.battle.yourPokemon.effects.reflect.value) {
		reflect = gamehook.properties.battle.yourPokemon.effects.reflect.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.transformed && gamehook.properties.battle.playerPokemon.effects.transformed.value) {
		transformed = gamehook.properties.battle.playerPokemon.effects.transformed.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.transformed && gamehook.properties.battle.yourPokemon.effects.transformed.value) {
		transformed = gamehook.properties.battle.yourPokemon.effects.transformed.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.counters && gamehook.properties.battle.playerPokemon.counters.multiHit && gamehook.properties.battle.playerPokemon.counters.multiHit.value) {
		multiHitCounter = gamehook.properties.battle.playerPokemon.counters.multiHit.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.counters && gamehook.properties.battle.yourPokemon.counters.multiHit && gamehook.properties.battle.yourPokemon.counters.multiHit.value) {
		multiHitCounter = gamehook.properties.battle.yourPokemon.counters.multiHit.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.counters && gamehook.properties.battle.playerPokemon.counters.confusion && gamehook.properties.battle.playerPokemon.counters.confusion.value) {
		confusionCounter = gamehook.properties.battle.playerPokemon.counters.confusion.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.counters && gamehook.properties.battle.yourPokemon.counters.confusion && gamehook.properties.battle.yourPokemon.counters.confusion.value) {
		confusionCounter = gamehook.properties.battle.yourPokemon.counters.confusion.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.counters && gamehook.properties.battle.playerPokemon.counters.toxic && gamehook.properties.battle.playerPokemon.counters.toxic.value) {
		toxicCounter = gamehook.properties.battle.playerPokemon.counters.toxic.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.counters && gamehook.properties.battle.yourPokemon.counters.toxic && gamehook.properties.battle.yourPokemon.counters.toxic.value) {
		toxicCounter = gamehook.properties.battle.yourPokemon.counters.toxic.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.counters && gamehook.properties.battle.playerPokemon.counters.disable && gamehook.properties.battle.playerPokemon.counters.disable.value) {
		disableCounter = gamehook.properties.battle.playerPokemon.counters.disable.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.counters && gamehook.properties.battle.yourPokemon.counters.disable && gamehook.properties.battle.yourPokemon.counters.disable.value) {
		disableCounter = gamehook.properties.battle.yourPokemon.counters.disable.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.lastUsedMove && gamehook.properties.battle.yourPokemon.lastUsedMove.move && gamehook.properties.battle.yourPokemon.lastUsedMove.move.value) {
		lastMove = gamehook.properties.battle.yourPokemon.lastUsedMove.move.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.lastUsedMove && gamehook.properties.battle.playerPokemon.lastUsedMove.move && gamehook.properties.battle.playerPokemon.lastUsedMove.move.value) {
		lastMove = gamehook.properties.battle.playerPokemon.lastUsedMove.move.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.lastUsedMove && gamehook.properties.battle.yourPokemon.lastUsedMove.effect && gamehook.properties.battle.yourPokemon.lastUsedMove.effect.value) {
		lastEffect = gamehook.properties.battle.yourPokemon.lastUsedMove.effect.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.lastUsedMove && gamehook.properties.battle.playerPokemon.lastUsedMove.effect && gamehook.properties.battle.playerPokemon.lastUsedMove.effect.value) {
		lastEffect = gamehook.properties.battle.playerPokemon.lastUsedMove.effect.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.lastUsedMove && gamehook.properties.battle.yourPokemon.lastUsedMove.power && gamehook.properties.battle.yourPokemon.lastUsedMove.power.value) {
		lastPower = gamehook.properties.battle.yourPokemon.lastUsedMove.power.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.lastUsedMove && gamehook.properties.battle.playerPokemon.lastUsedMove.power && gamehook.properties.battle.playerPokemon.lastUsedMove.power.value) {
		lastPower = gamehook.properties.battle.playerPokemon.lastUsedMove.power.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.lastUsedMove && gamehook.properties.battle.yourPokemon.lastUsedMove.type && gamehook.properties.battle.yourPokemon.lastUsedMove.type.value) {
		lastType = gamehook.properties.battle.yourPokemon.lastUsedMove.type.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.lastUsedMove && gamehook.properties.battle.playerPokemon.lastUsedMove.type && gamehook.properties.battle.playerPokemon.lastUsedMove.type.value) {
		lastType = gamehook.properties.battle.playerPokemon.lastUsedMove.type.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.lastUsedMove && gamehook.properties.battle.yourPokemon.lastUsedMove.accuracy && gamehook.properties.battle.yourPokemon.lastUsedMove.accuracy.value) {
		lastAccuracy = gamehook.properties.battle.yourPokemon.lastUsedMove.accuracy.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.lastUsedMove && gamehook.properties.battle.playerPokemon.lastUsedMove.accuracy && gamehook.properties.battle.playerPokemon.lastUsedMove.accuracy.value) {
		lastAccuracy = gamehook.properties.battle.playerPokemon.lastUsedMove.accuracy.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.lastUsedMove && gamehook.properties.battle.yourPokemon.lastUsedMove.maxPP && gamehook.properties.battle.yourPokemon.lastUsedMove.maxPP.value) {
		lastMaxPP = gamehook.properties.battle.yourPokemon.lastUsedMove.maxPP.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.lastUsedMove && gamehook.properties.battle.playerPokemon.lastUsedMove.maxPP && gamehook.properties.battle.playerPokemon.lastUsedMove.maxPP.value) {
		lastMaxPP = gamehook.properties.battle.playerPokemon.lastUsedMove.maxPP.value;
	}
	
	var teamMember = new BattlePlayerTeamPokemonState(partyPos, nickname, species, pokedexNumber, 
										type1, type2, type1val, type2val, level, catchRate, 
										modStageAttack, modStageDefense, modStageSpeed, modStageSpecial, 
										modStageAccuracy, modStageEvasion, battleStatHp, battleStatMaxHp, 
										battleStatAttack, battleStatDefense, battleStatSpeed, battleStatSpecial,
										battleStatus1, battleStatus2, battleStatusCondition, 
										tempStatusConfusion, tempStatusBadPoison,
										move1, move2, move3, move4, move1int, 
										move2int, move3int, move4int, 
										move1pp, move2pp, move3pp, move4pp, 
										move1ppint, move2ppint, move3ppint, move4ppint,
										bide, thrash, multiHit, flinch, charging, multiTurn,
										invulnerable, confusion, xAccuracy, mist, focusEnergy,
										hasSubstitute, recharge, rage, leechSeeded, toxic, lightScreen,
										reflect, transformed,
										multiHitCounter, confusionCounter, toxicCounter, disableCounter,
										lastMove, lastEffect, lastPower, lastType, lastAccuracy, lastMaxPP);
	
	teamMember.gamehook = gamehook;

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.partyPos) {
		gamehook.properties.battle.playerPokemon.partyPos.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onPartyPosChange:", x.value);
				teamMember.onPartyPosChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.partyPos) {
		gamehook.properties.battle.yourPokemon.partyPos.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onPartyPosChange:", x.value);
				teamMember.onPartyPosChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.nickname) {
		gamehook.properties.battle.playerPokemon.nickname.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onNicknameChange:", x.value);
				teamMember.onNicknameChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.nickname) {
		gamehook.properties.battle.yourPokemon.nickname.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onNicknameChange:", x.value);
				teamMember.onNicknameChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.species) {
		gamehook.properties.battle.playerPokemon.species.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onSpeciesChange:", x.value);
				teamMember.onSpeciesChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.species) {
		gamehook.properties.battle.yourPokemon.species.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onSpeciesChange:", x.value);
				teamMember.onSpeciesChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.pokedexNumber) {
		gamehook.properties.battle.playerPokemon.pokedexNumber.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onPokedexNumberChange:", x.value);
				teamMember.onPokedexNumberChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.pokedexNumber) {
		gamehook.properties.battle.yourPokemon.pokedexNumber.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onPokedexNumberChange:", x.value);
				teamMember.onPokedexNumberChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.type1) {
		gamehook.properties.battle.playerPokemon.type1.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onType1Change:", x.value);
				teamMember.onType1Change(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.type1) {
		gamehook.properties.battle.yourPokemon.type1.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onType1Change:", x.value);
				teamMember.onType1Change(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.type2) {
		gamehook.properties.battle.playerPokemon.type2.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onType2Change:", x.value);
				teamMember.onType2Change(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.type2) {
		gamehook.properties.battle.yourPokemon.type2.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onType2Change:", x.value);
				teamMember.onType2Change(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.type1int) {
		gamehook.properties.battle.playerPokemon.type1int.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onType1valChange:", x.value);
				teamMember.onType1valChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.type1val) {
		gamehook.properties.battle.yourPokemon.type1val.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onType1valChange:", x.value);
				teamMember.onType1valChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.type2int) {
		gamehook.properties.battle.playerPokemon.type2int.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onType2valChange:", x.value);
				teamMember.onType2valChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.type2val) {
		gamehook.properties.battle.yourPokemon.type2val.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onType2valChange:", x.value);
				teamMember.onType2valChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.level) {
		gamehook.properties.battle.playerPokemon.level.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onLevelChange:", x.value);
				teamMember.onLevelChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.level) {
		gamehook.properties.battle.yourPokemon.level.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onLevelChange:", x.value);
				teamMember.onLevelChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.catchRate) {
		gamehook.properties.battle.playerPokemon.catchRate.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onCatchRateChange:", x.value);
				teamMember.onCatchRateChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.catchRate) {
		gamehook.properties.battle.yourPokemon.catchRate.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onCatchRateChange:", x.value);
				teamMember.onCatchRateChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.modifiers && gamehook.properties.battle.playerPokemon.modifiers.attack && gamehook.properties.battle.playerPokemon.modifiers.attack.value) {
		gamehook.properties.battle.playerPokemon.modifiers.attack.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onModStageAttackChange:", x.value);
				teamMember.onModStageAttackChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.modStageAttack && gamehook.properties.battle.yourPokemon.modStageAttack) {
		gamehook.properties.battle.yourPokemon.modStageAttack.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onModStageAttackChange:", x.value);
				teamMember.onModStageAttackChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.modifiers && gamehook.properties.battle.playerPokemon.modifiers.defense && gamehook.properties.battle.playerPokemon.modifiers.defense) {
		gamehook.properties.battle.playerPokemon.modifiers.defense.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onModStageDefenseChange:", x.value);
				teamMember.onModStageDefenseChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.modStageDefense && gamehook.properties.battle.yourPokemon.modStageDefense) {
		gamehook.properties.battle.yourPokemon.modStageDefense.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onModStageDefenseChange:", x.value);
				teamMember.onModStageDefenseChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.modifiers && gamehook.properties.battle.playerPokemon.modifiers.speed && gamehook.properties.battle.playerPokemon.modifiers.speed) {
		gamehook.properties.battle.playerPokemon.modifiers.speed.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onModStageSpeedChange:", x.value);
				teamMember.onModStageSpeedChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.modStageSpeed && gamehook.properties.battle.yourPokemon.modStageSpeed) {
		gamehook.properties.battle.yourPokemon.modStageSpeed.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onModStageSpeedChange:", x.value);
				teamMember.onModStageSpeedChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.modifiers && gamehook.properties.battle.playerPokemon.modifiers.special && gamehook.properties.battle.playerPokemon.modifiers.special) {
		gamehook.properties.battle.playerPokemon.modifiers.special.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onModStageSpecialChange:", x.value);
				teamMember.onModStageSpecialChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.modStageSpecial && gamehook.properties.battle.yourPokemon.modStageSpecial) {
		gamehook.properties.battle.yourPokemon.modStageSpecial.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onModStageSpecialChange:", x.value);
				teamMember.onModStageSpecialChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.modifiers && gamehook.properties.battle.playerPokemon.modifiers.accuracy && gamehook.properties.battle.playerPokemon.modifiers.accuracy) {
		gamehook.properties.battle.playerPokemon.modifiers.accuracy.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onModStageAccuracyChange:", x.value);
				teamMember.onModStageAccuracyChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.modStageAccuracy && gamehook.properties.battle.yourPokemon.modStageAccuracy) {
		gamehook.properties.battle.yourPokemon.modStageAccuracy.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onModStageAccuracyChange:", x.value);
				teamMember.onModStageAccuracyChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.modifiers && gamehook.properties.battle.playerPokemon.modifiers.evasion && gamehook.properties.battle.playerPokemon.modifiers.evasion) {
		gamehook.properties.battle.playerPokemon.modifiers.evasion.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onModStageEvasionChange:", x.value);
				teamMember.onModStageEvasionChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.modStageEvasion && gamehook.properties.battle.yourPokemon.modStageEvasion) {
		gamehook.properties.battle.yourPokemon.modStageEvasion.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onModStageEvasionChange:", x.value);
				teamMember.onModStageEvasionChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.stats && gamehook.properties.battle.playerPokemon.stats.hp && gamehook.properties.battle.playerPokemon.stats.hp) {
		gamehook.properties.battle.playerPokemon.stats.hp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onBattleStatHpChange:", x.value);
				teamMember.onBattleStatHpChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.battleStatHp && gamehook.properties.battle.yourPokemon.battleStatHp) {
		gamehook.properties.battle.yourPokemon.battleStatHp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onBattleStatHpChange:", x.value);
				teamMember.onBattleStatHpChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.hp && gamehook.properties.battle.yourPokemon.hp) {
		gamehook.properties.battle.yourPokemon.hp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onBattleStatHpChange:", x.value);
				teamMember.onBattleStatHpChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.stats && gamehook.properties.battle.playerPokemon.stats.maxHp && gamehook.properties.battle.playerPokemon.stats.maxHp) {
		gamehook.properties.battle.playerPokemon.stats.maxHp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onBattleStatMaxHpChange:", x.value);
				teamMember.onBattleStatMaxHpChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.battleStatMaxHp && gamehook.properties.battle.yourPokemon.battleStatMaxHp) {
		gamehook.properties.battle.yourPokemon.battleStatMaxHp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onBattleStatMaxHpChange:", x.value);
				teamMember.onBattleStatMaxHpChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.maxHp && gamehook.properties.battle.yourPokemon.maxHp) {
		gamehook.properties.battle.yourPokemon.maxHp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onBattleStatMaxHpChange:", x.value);
				teamMember.onBattleStatMaxHpChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.stats && gamehook.properties.battle.playerPokemon.stats.attack && gamehook.properties.battle.playerPokemon.stats.attack) {
		gamehook.properties.battle.playerPokemon.stats.attack.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onBattleStatAttackChange:", x.value);
				teamMember.onBattleStatAttackChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.battleStatAttack && gamehook.properties.battle.yourPokemon.battleStatAttack) {
		gamehook.properties.battle.yourPokemon.battleStatAttack.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onBattleStatAttackChange:", x.value);
				teamMember.onBattleStatAttackChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.attack && gamehook.properties.battle.yourPokemon.attack) {
		gamehook.properties.battle.yourPokemon.attack.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onBattleStatAttackChange:", x.value);
				teamMember.onBattleStatAttackChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.stats && gamehook.properties.battle.playerPokemon.stats.defense && gamehook.properties.battle.playerPokemon.stats.defense) {
		gamehook.properties.battle.playerPokemon.stats.defense.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onBattleStatDefenseChange:", x.value);
				teamMember.onBattleStatDefenseChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.battleStatDefense && gamehook.properties.battle.yourPokemon.battleStatDefense) {
		gamehook.properties.battle.yourPokemon.battleStatDefense.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onBattleStatDefenseChange:", x.value);
				teamMember.onBattleStatDefenseChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.defense && gamehook.properties.battle.yourPokemon.defense) {
		gamehook.properties.battle.yourPokemon.defense.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onBattleStatDefenseChange:", x.value);
				teamMember.onBattleStatDefenseChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.stats && gamehook.properties.battle.playerPokemon.stats.speed && gamehook.properties.battle.playerPokemon.stats.speed) {
		gamehook.properties.battle.playerPokemon.stats.speed.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onBattleStatSpeedChange:", x.value);
				teamMember.onBattleStatSpeedChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.battleStatSpeed && gamehook.properties.battle.yourPokemon.battleStatSpeed) {
		gamehook.properties.battle.yourPokemon.battleStatSpeed.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onBattleStatSpeedChange:", x.value);
				teamMember.onBattleStatSpeedChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.speed && gamehook.properties.battle.yourPokemon.speed) {
		gamehook.properties.battle.yourPokemon.speed.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onBattleStatSpeedChange:", x.value);
				teamMember.onBattleStatSpeedChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.stats && gamehook.properties.battle.playerPokemon.stats.special && gamehook.properties.battle.playerPokemon.stats.special) {
		gamehook.properties.battle.playerPokemon.stats.special.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onBattleStatSpecialChange:", x.value);
				teamMember.onBattleStatSpecialChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.battleStatSpecial && gamehook.properties.battle.yourPokemon.battleStatSpecial) {
		gamehook.properties.battle.yourPokemon.battleStatSpecial.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onBattleStatSpecialChange:", x.value);
				teamMember.onBattleStatSpecialChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.special && gamehook.properties.battle.yourPokemon.special) {
		gamehook.properties.battle.yourPokemon.special.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onBattleStatSpecialChange:", x.value);
				teamMember.onBattleStatSpecialChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.status && gamehook.properties.battle.playerPokemon.status.status1) {
		gamehook.properties.battle.playerPokemon.status.status1.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onBattleStatus1Change:", x.value);
				teamMember.onBattleStatus1Change(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.battleStatus1) {
		gamehook.properties.battle.yourPokemon.battleStatus1.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onBattleStatus1Change:", x.value);
				teamMember.onBattleStatus1Change(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.status && gamehook.properties.battle.playerPokemon.status.status2) {
		gamehook.properties.battle.playerPokemon.status.status2.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onBattleStatus2Change:", x.value);
				teamMember.onBattleStatus2Change(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.battleStatus2) {
		gamehook.properties.battle.yourPokemon.battleStatus2.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onBattleStatus2Change:", x.value);
				teamMember.onBattleStatus2Change(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.status && gamehook.properties.battle.playerPokemon.status.statusCondition) {
		gamehook.properties.battle.playerPokemon.status.statusCondition.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onBattleStatusConditionChange:", x.value);
				teamMember.onBattleStatusConditionChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.battleStatusCondition) {
		gamehook.properties.battle.yourPokemon.battleStatusCondition.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onBattleStatusConditionChange:", x.value);
				teamMember.onBattleStatusConditionChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.status && gamehook.properties.battle.playerPokemon.status.tempStatusConfusion) {
		gamehook.properties.battle.playerPokemon.status.tempStatusConfusion.change(async(x) => {
			if(x && (x.value || x.value === "" || x.value === null)) {
				//console.log("onTempStatusConfusionChange:", x.value);
				teamMember.onTempStatusConfusionChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.tempStatusConfusion) {
		gamehook.properties.battle.yourPokemon.tempStatusConfusion.change(async(x) => {
			if(x && (x.value || x.value === "" || x.value === null)) {
				//console.log("onTempStatusConfusionChange:", x.value);
				teamMember.onTempStatusConfusionChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.status && gamehook.properties.battle.playerPokemon.status.tempStatusBadPoison) {
		gamehook.properties.battle.playerPokemon.status.tempStatusBadPoison.change(async(x) => {
			if(x && (x.value || x.value === "" || x.value === null)) {
				//console.log("onTempStatusBadPoisonChange:", x.value);
				teamMember.onTempStatusBadPoisonChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.tempStatusBadPoison) {
		gamehook.properties.battle.yourPokemon.tempStatusBadPoison.change(async(x) => {
			if(x && (x.value || x.value === "" || x.value === null)) {
				//console.log("onTempStatusBadPoisonChange:", x.value);
				teamMember.onTempStatusBadPoisonChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.moves && gamehook.properties.battle.playerPokemon.moves[0] && gamehook.properties.battle.playerPokemon.moves[0].move) {
		gamehook.properties.battle.playerPokemon.moves[0].move.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onMove1Change:", x.value);
				teamMember.onMove1Change(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.move1) {
		gamehook.properties.battle.yourPokemon.move1.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onMove1Change:", x.value);
				teamMember.onMove1Change(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.moves && gamehook.properties.battle.playerPokemon.moves[0] && gamehook.properties.battle.playerPokemon.moves[0].moveint) {
		gamehook.properties.battle.playerPokemon.moves[0].moveint.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove1intChange:", x.value);
				teamMember.onMove1intChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.move1int) {
		gamehook.properties.battle.yourPokemon.move1int.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove1intChange:", x.value);
				teamMember.onMove1intChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.moves && gamehook.properties.battle.playerPokemon.moves[0] && gamehook.properties.battle.playerPokemon.moves[0].pp) {
		gamehook.properties.battle.playerPokemon.moves[0].pp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove1ppChange:", x.value);
				teamMember.onMove1ppChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.move1pp) {
		gamehook.properties.battle.yourPokemon.move1pp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove1ppChange:", x.value);
				teamMember.onMove1ppChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.moves && gamehook.properties.battle.playerPokemon.moves[0] && gamehook.properties.battle.playerPokemon.moves[0].ppint) {
		gamehook.properties.battle.playerPokemon.moves[0].ppint.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove1ppintChange:", x.value);
				teamMember.onMove1ppintChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.move1ppint) {
		gamehook.properties.battle.yourPokemon.move1ppint.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove1ppintChange:", x.value);
				teamMember.onMove1ppintChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.moves && gamehook.properties.battle.playerPokemon.moves[1] && gamehook.properties.battle.playerPokemon.moves[1].move) {
		gamehook.properties.battle.playerPokemon.moves[1].move.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onMove2Change:", x.value);
				teamMember.onMove2Change(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.move2) {
		gamehook.properties.battle.yourPokemon.move2.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onMove2Change:", x.value);
				teamMember.onMove2Change(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.moves && gamehook.properties.battle.playerPokemon.moves[1] && gamehook.properties.battle.playerPokemon.moves[1].moveint) {
		gamehook.properties.battle.playerPokemon.moves[1].moveint.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove2intChange:", x.value);
				teamMember.onMove2intChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.move2int) {
		gamehook.properties.battle.yourPokemon.move2int.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove2intChange:", x.value);
				teamMember.onMove2intChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.moves && gamehook.properties.battle.playerPokemon.moves[1] && gamehook.properties.battle.playerPokemon.moves[1].pp) {
		gamehook.properties.battle.playerPokemon.moves[1].pp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove2ppChange:", x.value);
				teamMember.onMove2ppChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.move2pp) {
		gamehook.properties.battle.yourPokemon.move2pp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove2ppChange:", x.value);
				teamMember.onMove2ppChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.moves && gamehook.properties.battle.playerPokemon.moves[1] && gamehook.properties.battle.playerPokemon.moves[1].ppint) {
		gamehook.properties.battle.playerPokemon.moves[1].ppint.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove2ppintChange:", x.value);
				teamMember.onMove2ppintChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.move2ppint) {
		gamehook.properties.battle.yourPokemon.move2ppint.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove2ppintChange:", x.value);
				teamMember.onMove2ppintChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.moves && gamehook.properties.battle.playerPokemon.moves[2] && gamehook.properties.battle.playerPokemon.moves[2].move) {
		gamehook.properties.battle.playerPokemon.moves[2].move.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onMove3Change:", x.value);
				teamMember.onMove3Change(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.move3) {
		gamehook.properties.battle.yourPokemon.move3.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onMove3Change:", x.value);
				teamMember.onMove3Change(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.moves && gamehook.properties.battle.playerPokemon.moves[2] && gamehook.properties.battle.playerPokemon.moves[2].moveint) {
		gamehook.properties.battle.playerPokemon.moves[2].moveint.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove3intChange:", x.value);
				teamMember.onMove3intChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.move3int) {
		gamehook.properties.battle.yourPokemon.move3int.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove3intChange:", x.value);
				teamMember.onMove3intChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.moves && gamehook.properties.battle.playerPokemon.moves[2] && gamehook.properties.battle.playerPokemon.moves[2].pp) {
		gamehook.properties.battle.playerPokemon.moves[2].pp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove3ppChange:", x.value);
				teamMember.onMove3ppChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.move3pp) {
		gamehook.properties.battle.yourPokemon.move3pp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove3ppChange:", x.value);
				teamMember.onMove3ppChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.moves && gamehook.properties.battle.playerPokemon.moves[2] && gamehook.properties.battle.playerPokemon.moves[2].ppint) {
		gamehook.properties.battle.playerPokemon.moves[2].ppint.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove3ppintChange:", x.value);
				teamMember.onMove3ppintChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.move3ppint) {
		gamehook.properties.battle.yourPokemon.move3ppint.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove3ppintChange:", x.value);
				teamMember.onMove3ppintChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.moves && gamehook.properties.battle.playerPokemon.moves[3] && gamehook.properties.battle.playerPokemon.moves[3].move) {
		gamehook.properties.battle.playerPokemon.moves[3].move.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onMove4Change:", x.value);
				teamMember.onMove4Change(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.move4) {
		gamehook.properties.battle.yourPokemon.move4.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onMove4Change:", x.value);
				teamMember.onMove4Change(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.moves && gamehook.properties.battle.playerPokemon.moves[3] && gamehook.properties.battle.playerPokemon.moves[3].moveint) {
		gamehook.properties.battle.playerPokemon.moves[3].moveint.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove4intChange:", x.value);
				teamMember.onMove4intChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.move4int) {
		gamehook.properties.battle.yourPokemon.move4int.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove4intChange:", x.value);
				teamMember.onMove4intChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.moves && gamehook.properties.battle.playerPokemon.moves[3] && gamehook.properties.battle.playerPokemon.moves[3].pp) {
		gamehook.properties.battle.playerPokemon.moves[3].pp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove4ppChange:", x.value);
				teamMember.onMove4ppChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.move4pp) {
		gamehook.properties.battle.yourPokemon.move4pp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove4ppChange:", x.value);
				teamMember.onMove4ppChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.moves && gamehook.properties.battle.playerPokemon.moves[3] && gamehook.properties.battle.playerPokemon.moves[3].ppint) {
		gamehook.properties.battle.playerPokemon.moves[3].ppint.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove4ppintChange:", x.value);
				teamMember.onMove4ppintChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.move4ppint) {
		gamehook.properties.battle.yourPokemon.move4ppint.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove4ppintChange:", x.value);
				teamMember.onMove4ppintChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.bide) {
		gamehook.properties.battle.playerPokemon.effects.bide.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onBideChange:", x.value);
				teamMember.onBideChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.bide) {
		gamehook.properties.battle.yourPokemon.effects.bide.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onBideChange:", x.value);
				teamMember.onBideChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.thrash) {
		gamehook.properties.battle.playerPokemon.effects.thrash.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onThrashChange:", x.value);
				teamMember.onThrashChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.thrash) {
		gamehook.properties.battle.yourPokemon.effects.thrash.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onThrashChange:", x.value);
				teamMember.onThrashChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.multiHit) {
		gamehook.properties.battle.playerPokemon.effects.multiHit.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onMultiHitChange:", x.value);
				teamMember.onMultiHitChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.multiHit) {
		gamehook.properties.battle.yourPokemon.effects.multiHit.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onMultiHitChange:", x.value);
				teamMember.onMultiHitChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.flinch) {
		gamehook.properties.battle.playerPokemon.effects.flinch.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onFlinchChange:", x.value);
				teamMember.onFlinchChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.flinch) {
		gamehook.properties.battle.yourPokemon.effects.flinch.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onFlinchChange:", x.value);
				teamMember.onFlinchChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.charging) {
		gamehook.properties.battle.playerPokemon.effects.charging.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onChargingChange:", x.value);
				teamMember.onChargingChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.charging) {
		gamehook.properties.battle.yourPokemon.effects.charging.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onChargingChange:", x.value);
				teamMember.onChargingChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.multiTurn) {
		gamehook.properties.battle.playerPokemon.effects.multiTurn.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onMultiTurnChange:", x.value);
				teamMember.onMultiTurnChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.multiTurn) {
		gamehook.properties.battle.yourPokemon.effects.multiTurn.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onMultiTurnChange:", x.value);
				teamMember.onMultiTurnChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.invulnerable) {
		gamehook.properties.battle.playerPokemon.effects.invulnerable.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onInvulnerableChange:", x.value);
				teamMember.onInvulnerableChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.invulnerable) {
		gamehook.properties.battle.yourPokemon.effects.invulnerable.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onInvulnerableChange:", x.value);
				teamMember.onInvulnerableChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.confusion) {
		gamehook.properties.battle.playerPokemon.effects.confusion.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onConfusionChange:", x.value);
				teamMember.onConfusionChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.confusion) {
		gamehook.properties.battle.yourPokemon.effects.confusion.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onConfusionChange:", x.value);
				teamMember.onConfusionChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.xAccuracy) {
		gamehook.properties.battle.playerPokemon.effects.xAccuracy.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onXAccuracyChange:", x.value);
				teamMember.onXAccuracyChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.xAccuracy) {
		gamehook.properties.battle.yourPokemon.effects.xAccuracy.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onXAccuracyChange:", x.value);
				teamMember.onXAccuracyChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.mist) {
		gamehook.properties.battle.playerPokemon.effects.mist.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onMistChange:", x.value);
				teamMember.onMistChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.mist) {
		gamehook.properties.battle.yourPokemon.effects.mist.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onMistChange:", x.value);
				teamMember.onMistChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.focusEnergy) {
		gamehook.properties.battle.playerPokemon.effects.focusEnergy.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onFocusEnergyChange:", x.value);
				teamMember.onFocusEnergyChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.focusEnergy) {
		gamehook.properties.battle.yourPokemon.effects.focusEnergy.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onFocusEnergyChange:", x.value);
				teamMember.onFocusEnergyChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.hasSubstitute) {
		gamehook.properties.battle.playerPokemon.effects.hasSubstitute.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onHasSubstituteChange:", x.value);
				teamMember.onHasSubstituteChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.hasSubstitute) {
		gamehook.properties.battle.yourPokemon.effects.hasSubstitute.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onHasSubstituteChange:", x.value);
				teamMember.onHasSubstituteChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.recharge) {
		gamehook.properties.battle.playerPokemon.effects.recharge.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onRechargeChange:", x.value);
				teamMember.onRechargeChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.recharge) {
		gamehook.properties.battle.yourPokemon.effects.recharge.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onRechargeChange:", x.value);
				teamMember.onRechargeChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.rage) {
		gamehook.properties.battle.playerPokemon.effects.rage.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onRageChange:", x.value);
				teamMember.onRageChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.rage) {
		gamehook.properties.battle.yourPokemon.effects.rage.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onRageChange:", x.value);
				teamMember.onRageChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.leechSeeded) {
		gamehook.properties.battle.playerPokemon.effects.leechSeeded.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onLeechSeededChange:", x.value);
				teamMember.onLeechSeededChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.leechSeeded) {
		gamehook.properties.battle.yourPokemon.effects.leechSeeded.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onLeechSeededChange:", x.value);
				teamMember.onLeechSeededChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.toxic) {
		gamehook.properties.battle.playerPokemon.effects.toxic.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onToxicChange:", x.value);
				teamMember.onToxicChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.toxic) {
		gamehook.properties.battle.yourPokemon.effects.toxic.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onToxicChange:", x.value);
				teamMember.onToxicChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.lightScreen) {
		gamehook.properties.battle.playerPokemon.effects.lightScreen.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onLightScreenChange:", x.value);
				teamMember.onLightScreenChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.lightScreen) {
		gamehook.properties.battle.yourPokemon.effects.lightScreen.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onLightScreenChange:", x.value);
				teamMember.onLightScreenChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.reflect) {
		gamehook.properties.battle.playerPokemon.effects.reflect.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onReflectChange:", x.value);
				teamMember.onReflectChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.reflect) {
		gamehook.properties.battle.yourPokemon.effects.reflect.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onReflectChange:", x.value);
				teamMember.onReflectChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.effects && gamehook.properties.battle.playerPokemon.effects.transformed) {
		gamehook.properties.battle.playerPokemon.effects.transformed.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onTransformedChange:", x.value);
				teamMember.onTransformedChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.effects && gamehook.properties.battle.yourPokemon.effects.transformed) {
		gamehook.properties.battle.yourPokemon.effects.transformed.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onTransformedChange:", x.value);
				teamMember.onTransformedChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.counters && gamehook.properties.battle.playerPokemon.counters.multiHit) {
		gamehook.properties.battle.playerPokemon.counters.multiHit.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMultiHitCounterChange:", x.value);
				teamMember.onMultiHitCounterChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.counters && gamehook.properties.battle.yourPokemon.counters.multiHit) {
		gamehook.properties.battle.yourPokemon.counters.multiHit.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMultiHitCounterChange:", x.value);
				teamMember.onMultiHitCounterChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.counters && gamehook.properties.battle.playerPokemon.counters.confusion) {
		gamehook.properties.battle.playerPokemon.counters.confusion.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onConfusionCounterChange:", x.value);
				teamMember.onConfusionCounterChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.counters && gamehook.properties.battle.yourPokemon.counters.confusion) {
		gamehook.properties.battle.yourPokemon.counters.confusion.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onConfusionCounterChange:", x.value);
				teamMember.onConfusionCounterChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.counters && gamehook.properties.battle.playerPokemon.counters.toxic) {
		gamehook.properties.battle.playerPokemon.counters.toxic.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onToxicCounterChange:", x.value);
				teamMember.onToxicCounterChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.counters && gamehook.properties.battle.yourPokemon.counters.toxic) {
		gamehook.properties.battle.yourPokemon.counters.toxic.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onToxicCounterChange:", x.value);
				teamMember.onToxicCounterChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.counters && gamehook.properties.battle.playerPokemon.counters.disable) {
		gamehook.properties.battle.playerPokemon.counters.disable.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onDisableCounterChange:", x.value);
				teamMember.onDisableCounterChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.counters && gamehook.properties.battle.yourPokemon.counters.disable) {
		gamehook.properties.battle.yourPokemon.counters.disable.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onDisableCounterChange:", x.value);
				teamMember.onDisableCounterChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.lastUsedMove && gamehook.properties.battle.yourPokemon.lastUsedMove.move) {
		gamehook.properties.battle.yourPokemon.lastUsedMove.move.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onLastMoveChange:", x.value);
				teamMember.onLastMoveChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.lastUsedMove && gamehook.properties.battle.playerPokemon.lastUsedMove.move) {
		gamehook.properties.battle.playerPokemon.lastUsedMove.move.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onLastMoveChange:", x.value);
				teamMember.onLastMoveChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.lastUsedMove && gamehook.properties.battle.yourPokemon.lastUsedMove.effect) {
		gamehook.properties.battle.yourPokemon.lastUsedMove.effect.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onLastEffectChange:", x.value);
				teamMember.onLastEffectChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.lastUsedMove && gamehook.properties.battle.playerPokemon.lastUsedMove.effect) {
		gamehook.properties.battle.playerPokemon.lastUsedMove.effect.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onLastEffectChange:", x.value);
				teamMember.onLastEffectChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.lastUsedMove && gamehook.properties.battle.yourPokemon.lastUsedMove.power) {
		gamehook.properties.battle.yourPokemon.lastUsedMove.power.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onLastPowerChange:", x.value);
				teamMember.onLastPowerChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.lastUsedMove && gamehook.properties.battle.playerPokemon.lastUsedMove.power) {
		gamehook.properties.battle.playerPokemon.lastUsedMove.power.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onLastPowerChange:", x.value);
				teamMember.onLastPowerChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.lastUsedMove && gamehook.properties.battle.yourPokemon.lastUsedMove.type) {
		gamehook.properties.battle.yourPokemon.lastUsedMove.type.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onLastTypeChange:", x.value);
				teamMember.onLastTypeChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.lastUsedMove && gamehook.properties.battle.playerPokemon.lastUsedMove.type) {
		gamehook.properties.battle.playerPokemon.lastUsedMove.type.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onLastTypeChange:", x.value);
				teamMember.onLastTypeChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.lastUsedMove && gamehook.properties.battle.yourPokemon.lastUsedMove.accuracy) {
		gamehook.properties.battle.yourPokemon.lastUsedMove.accuracy.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onLastAccuracyChange:", x.value);
				teamMember.onLastAccuracyChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.lastUsedMove && gamehook.properties.battle.playerPokemon.lastUsedMove.accuracy) {
		gamehook.properties.battle.playerPokemon.lastUsedMove.accuracy.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onLastAccuracyChange:", x.value);
				teamMember.onLastAccuracyChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.yourPokemon && gamehook.properties.battle.yourPokemon.lastUsedMove && gamehook.properties.battle.yourPokemon.lastUsedMove.maxPP) {
		gamehook.properties.battle.yourPokemon.lastUsedMove.maxPP.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onLastMaxPPChange:", x.value);
				teamMember.onLastMaxPPChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.playerPokemon && gamehook.properties.battle.playerPokemon.lastUsedMove && gamehook.properties.battle.playerPokemon.lastUsedMove.maxPP) {
		gamehook.properties.battle.playerPokemon.lastUsedMove.maxPP.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onLastMaxPPChange:", x.value);
				teamMember.onLastMaxPPChange(x.value);
			}
		});
	}

	return teamMember;
};

//BattlePlayerTeamPokemonState.static = null;
//BattlePlayerTeamPokemonState.staticMethod = function() {
//};

BattlePlayerTeamPokemonState.prototype.onPartyPosChange = function (newPartyPos) {
	this.partyPos = newPartyPos;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onNicknameChange = function (newNickname) {
	this.nickname = newNickname;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onSpeciesChange = function (newSpecies) {
	this.species = newSpecies;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onPokedexNumberChange = function (newPokedexNumber) {
	this.pokedexNumber = newPokedexNumber;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onType1Change = function (newType1) {
	this.type1 = newType1;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onType2Change = function (newType2) {
	this.type2 = newType2;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onType1valChange = function (newType1val) {
	this.type1val = newType1val;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onType2valChange = function (newType2val) {
	this.type2val = newType2val;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onLevelChange = function (newLevel) {
	this.level = newLevel;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onCatchRateChange = function (newCatchRate) {
	this.catchRate = newCatchRate;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onModStageAttackChange = function (newModStageAttack) {
	this.modStageAttack = newModStageAttack;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onModStageDefenseChange = function (newModStageDefense) {
	this.modStageDefense = newModStageDefense;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onModStageSpeedChange = function (newModStageSpeed) {
	this.modStageSpeed = newModStageSpeed;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onModStageSpecialChange = function (newModStageSpecial) {
	this.modStageSpecial = newModStageSpecial;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onModStageAccuracyChange = function (newModStageAccuracy) {
	this.modStageAccuracy = newModStageAccuracy;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onModStageEvasionChange = function (newModStageEvasion) {
	this.modStageEvasion = newModStageEvasion;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onBattleStatHpChange = function (newBattleStatHp) {
	this.battleStatHp = newBattleStatHp;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onBattleStatMaxHpChange = function (newBattleStatMaxHp) {
	this.battleStatMaxHp = newBattleStatMaxHp;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onBattleStatAttackChange = function (newBattleStatAttack) {
	this.battleStatAttack = newBattleStatAttack;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onBattleStatDefenseChange = function (newBattleStatDefense) {
	this.battleStatDefense = newBattleStatDefense;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onBattleStatSpeedChange = function (newBattleStatSpeed) {
	this.battleStatSpeed = newBattleStatSpeed;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onBattleStatSpecialChange = function (newBattleStatSpecial) {
	this.battleStatSpecial = newBattleStatSpecial;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onBattleStatus1Change = function (newBattleStatus1) {
	this.battleStatus1 = newBattleStatus1;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onBattleStatus2Change = function (newBattleStatus2) {
	this.battleStatus2 = newBattleStatus2;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onBattleStatusConditionChange = function (newBattleStatusCondition) {
	this.battleStatusCondition = newBattleStatusCondition;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onTempStatusConfusionChange = function (newTempStatusConfusion) {
	this.tempStatusConfusion = newTempStatusConfusion;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onTempStatusBadPoisonChange = function (newTempStatusBadPoison) {
	this.tempStatusBadPoison = newTempStatusBadPoison;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onMove1Change = function (newMove1) {
	this.move1 = newMove1;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onMove2Change = function (newMove2) {
	this.move2 = newMove2;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onMove3Change = function (newMove3) {
	this.move3 = newMove3;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onMove4Change = function (newMove4) {
	this.move4 = newMove4;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onMove1intChange = function (newMove1int) {
	this.move1int = newMove1int;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onMove2intChange = function (newMove2int) {
	this.move2int = newMove2int;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onMove3intChange = function (newMove3int) {
	this.move3int = newMove3int;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onMove4intChange = function (newMove4int) {
	this.move4int = newMove4int;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onMove1ppChange = function (newMove1pp) {
	this.move1pp = newMove1pp;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onMove2ppChange = function (newMove2pp) {
	this.move2pp = newMove2pp;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onMove3ppChange = function (newMove3pp) {
	this.move3pp = newMove3pp;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onMove4ppChange = function (newMove4pp) {
	this.move4pp = newMove4pp;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onMove1ppintChange = function (newMove1ppint) {
	this.move1ppint = newMove1ppint;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onMove2ppintChange = function (newMove2ppint) {
	this.move2ppint = newMove2ppint;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onMove3ppintChange = function (newMove3ppint) {
	this.move3ppint = newMove3ppint;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onMove4ppintChange = function (newMove4ppint) {
	this.move4ppint = newMove4ppint;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onBideChange = function (newBide) {
	this.bide = newBide;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onThrashChange = function (newThrash) {
	this.thrash = newThrash;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onMultiHitChange = function (newMultiHit) {
	this.multiHit = newMultiHit;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onFlinchChange = function (newFlinch) {
	this.flinch = newFlinch;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onChargingChange = function (newCharging) {
	this.charging = newCharging;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onMultiTurnChange = function (newMultiTurn) {
	this.multiTurn = newMultiTurn;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onInvulnerableChange = function (newInvulnerable) {
	this.invulnerable = newInvulnerable;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onConfusionChange = function (newConfusion) {
	this.confusion = newConfusion;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onXAccuracyChange = function (newXAccuracy) {
	this.xAccuracy = newXAccuracy;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onMistChange = function (newMist) {
	this.mist = newMist;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onFocusEnergyChange = function (newFocusEnergy) {
	this.focusEnergy = newFocusEnergy;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onHasSubstituteChange = function (newHasSubstitute) {
	this.hasSubstitute = newHasSubstitute;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onRechargeChange = function (newRecharge) {
	this.recharge = newRecharge;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onRageChange = function (newRage) {
	this.rage = newRage;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onLeechSeededChange = function (newLeechSeeded) {
	this.leechSeeded = newLeechSeeded;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onToxicChange = function (newToxic) {
	this.toxic = newToxic;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onLightScreenChange = function (newLightScreen) {
	this.lightScreen = newLightScreen;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onReflectChange = function (newReflect) {
	this.reflect = newReflect;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onTransformedChange = function (newTransformed) {
	this.transformed = newTransformed;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onMultiHitCounterChange = function (newMultiHitCounter) {
	this.multiHitCounter = newMultiHitCounter;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onConfusionCounterChange = function (newConfusionCounter) {
	this.confusionCounter = newConfusionCounter;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onToxicCounterChange = function (newToxicCounter) {
	this.toxicCounter = newToxicCounter;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onDisableCounterChange = function (newDisableCounter) {
	this.disableCounter = newDisableCounter;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onLastMoveChange = function (newLastMove) {
	this.lastMove = newLastMove;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onLastEffectChange = function (newLastEffect) {
	this.lastEffect = newLastEffect;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onLastPowerChange = function (newLastPower) {
	this.lastPower = newLastPower;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onLastTypeChange = function (newLastType) {
	this.lastType = newLastType;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onLastAccuracyChange = function (newLastAccuracy) {
	this.lastAccuracy = newLastAccuracy;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};

BattlePlayerTeamPokemonState.prototype.onLastMaxPPChange = function (newLastMaxPP) {
	this.lastMaxPP = newLastMaxPP;

	this.listeners.forEach((listener) => {
		listener.onBattlePlayerTeamPokemonChange(this);
	});
};
	
BattlePlayerTeamPokemonState.prototype.listen = function (obj) {
	this.listeners.push(obj);
};
		
(function () {
  // Static initialization code
})();