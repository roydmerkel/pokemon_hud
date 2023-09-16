function BattleEnemyPokemonState(partyPos, species, pokedexNumber,
								type1, type2, type1val, type2val,
								level, maxHp,  hp, attack, defense, speed, special, statusCondition,
								modEnemyStageAttack, modEnemyStageDefense, modEnemyStageSpeed, modEnemyStageSpecial,
								modEnemyStageAccuracy, modEnemyStageEvasion,
								move1, move2, move3, move4, move1int, move2int, move3int, move4int,
								dvAttack, dvDefense, dvSpeed, dvSpecial,
								baseHp, baseAttack, baseDefense, baseSpeed, baseSpecial, baseExp,
								bide, thrash, multiHit, flinch, charging, multiTurn, invulnerable, confusion, 
								xAccuracy, mist, focusEnergy, hasSubstitute, recharge, rage, leechSeeded, toxic, lightScreen, 
								reflect, transformed, multiHitCounter, confusionConter, toxicCounter, disableCounter,
								lastMove, lastEffect, lastPower, lastType, lastTypeint, lastAccuracy, lastMaxPP) {
	this.partyPos = partyPos; // int
	this.species = species; // string
	this.pokedexNumber = pokedexNumber; // int
	this.type1 = type1; // string
    this.type2 = type2; // string
    this.type1val = type1val; // int
    this.type2val = type2val; // int
    this.level = level; // int
    this.maxHp = maxHp; // int
    this.hp = hp; // int
    this.attack = attack; // int
    this.defense = defense; // int
    this.speed = speed; // int
    this.special = special; // int
	this.statusCondition = statusCondition; // string
	this.modEnemyStageAttack = modEnemyStageAttack; // int
	this.modEnemyStageDefense = modEnemyStageDefense; // int
	this.modEnemyStageSpeed = modEnemyStageSpeed; // int
	this.modEnemyStageSpecial = modEnemyStageSpecial; // int
	this.modEnemyStageAccuracy = modEnemyStageAccuracy; // int
	this.modEnemyStageEvasion = modEnemyStageEvasion; // int
	this.move1 = move1; // string
	this.move2 = move2; // string
	this.move3 = move3; // string
	this.move4 = move4; // string
	this.move1int = move1int; // int
	this.move2int = move2int; // int
	this.move3int = move3int; // int
	this.move4int = move4int; // int
	this.dvAttack = dvAttack; // int
	this.dvDefense = dvDefense; // int
	this.dvSpeed = dvSpeed; // int
	this.dvSpecial = dvSpecial; // int
	this.baseHp = baseHp; // int
	this.baseAttack = baseAttack; // int
	this.baseDefense = baseDefense; // int
	this.baseSpeed = baseSpeed; // int
	this.baseSpecial = baseSpecial; // int
	this.baseExp = baseExp; // int
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
	this.confusionConter = confusionConter; // int 
	this.toxicCounter = toxicCounter; // int 
	this.disableCounter = disableCounter; // int 
	this.lastMove = lastMove; // string
	this.lastEffect = lastEffect; // int
	this.lastPower = lastPower; // int
	this.lastType = lastType; // string
	this.lastTypeint = lastTypeint; // int
	this.lastAccuracy = lastAccuracy; // int
	this.lastMaxPP = lastMaxPP; // int

	this.listeners = [];
	this.gamehook = null;
}

BattleEnemyPokemonState.ConstructBattleEnemyPokemonStateFromGamehook = function (gamehook) {
	var partyPos = 0;
	var species = "";
	var pokedexNumber = 0;
	var type1 = "";
	var type2 = "";
	var type1val = 0;
	var type2val = 0;
	var level = 0;
	var maxHp = 0;
    var hp = 0;
    var attack = 0;
    var defense = 0;
    var speed = 0;
    var special = 0;
	var statusCondition = "";
	var modEnemyStageAttack =  0;
	var modEnemyStageDefense =  0;
	var modEnemyStageSpeed =  0;
	var modEnemyStageSpecial =  0;
	var modEnemyStageAccuracy =  0;
	var modEnemyStageEvasion =  0;
	var move1 = "";
	var move2 = "";
	var move3 = "";
	var move4 = "";
	var move1int = 0;
	var move2int = 0;
	var move3int = 0;
	var move4int = 0;
	var dvAttack = 0;
	var dvDefense = 0;
	var dvSpeed = 0;
	var dvSpecial = 0;
	var baseHp = 0;
	var baseAttack = 0;
	var baseDefense = 0;
	var baseSpeed = 0;
	var baseSpecial = 0;
	var baseExp = 0;
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
	var confusionConter = 0;
	var toxicCounter = 0;
	var disableCounter = 0;
	var lastMove = "";
	var lastEffect = 0;
	var lastPower = 0;
	var lastType = "";
	var lastTypeint = 0;
	var lastAccuracy = 0;
	var lastMaxPP = 0;

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.partyPos && gamehook.properties.battle.enemyPokemon.partyPos.value) {
		partyPos = gamehook.properties.battle.enemyPokemon.partyPos.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.species && gamehook.properties.battle.enemyPokemon.species.value) {
		species = gamehook.properties.battle.enemyPokemon.species.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.pokedexNumber && gamehook.properties.battle.enemyPokemon.pokedexNumber.value) {
		pokedexNumber = gamehook.properties.battle.enemyPokemon.pokedexNumber.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.type1 && gamehook.properties.battle.enemyPokemon.type1.value) {
		type1 = gamehook.properties.battle.enemyPokemon.type1.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.type2 && gamehook.properties.battle.enemyPokemon.type2.value) {
		type2 = gamehook.properties.battle.enemyPokemon.type2.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.type1val && gamehook.properties.battle.enemyPokemon.type1val.value) {
		type1val = gamehook.properties.battle.enemyPokemon.type1val.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.type1int && gamehook.properties.battle.enemyPokemon.type1int.value) {
		type1val = gamehook.properties.battle.enemyPokemon.type1int.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.type2val && gamehook.properties.battle.enemyPokemon.type2val.value) {
		type2val = gamehook.properties.battle.enemyPokemon.type2val.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.type2int && gamehook.properties.battle.enemyPokemon.type2int.value) {
		type2val = gamehook.properties.battle.enemyPokemon.type2int.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.level && gamehook.properties.battle.enemyPokemon.level.value) {
		level = gamehook.properties.battle.enemyPokemon.level.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.maxHp && gamehook.properties.battle.enemyPokemon.maxHp.value) {
		maxHp = gamehook.properties.battle.enemyPokemon.maxHp.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.stats && gamehook.properties.battle.enemyPokemon.stats.maxHp && gamehook.properties.battle.enemyPokemon.stats.maxHp.value) {
		maxHp = gamehook.properties.battle.enemyPokemon.stats.maxHp.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.hp && gamehook.properties.battle.enemyPokemon.hp.value) {
		hp = gamehook.properties.battle.enemyPokemon.hp.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.stats && gamehook.properties.battle.enemyPokemon.stats.hp && gamehook.properties.battle.enemyPokemon.stats.hp.value) {
		hp = gamehook.properties.battle.enemyPokemon.stats.hp.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.attack && gamehook.properties.battle.enemyPokemon.attack.value) {
		attack = gamehook.properties.battle.enemyPokemon.attack.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.stats && gamehook.properties.battle.enemyPokemon.stats.attack && gamehook.properties.battle.enemyPokemon.stats.attack.value) {
		attack = gamehook.properties.battle.enemyPokemon.stats.attack.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.defense && gamehook.properties.battle.enemyPokemon.defense.value) {
		defense = gamehook.properties.battle.enemyPokemon.defense.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.stats && gamehook.properties.battle.enemyPokemon.stats.defense && gamehook.properties.battle.enemyPokemon.stats.defense.value) {
		defense = gamehook.properties.battle.enemyPokemon.stats.defense.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.speed && gamehook.properties.battle.enemyPokemon.speed.value) {
		speed = gamehook.properties.battle.enemyPokemon.speed.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.stats && gamehook.properties.battle.enemyPokemon.stats.speed && gamehook.properties.battle.enemyPokemon.stats.speed.value) {
		speed = gamehook.properties.battle.enemyPokemon.stats.speed.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.special && gamehook.properties.battle.enemyPokemon.special.value) {
		special = gamehook.properties.battle.enemyPokemon.special.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.stats && gamehook.properties.battle.enemyPokemon.stats.special && gamehook.properties.battle.enemyPokemon.stats.special.value) {
		special = gamehook.properties.battle.enemyPokemon.stats.special.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.statusCondition && gamehook.properties.battle.enemyPokemon.statusCondition.value) {
		statusCondition = gamehook.properties.battle.enemyPokemon.statusCondition.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.modEnemyStageAttack && gamehook.properties.battle.enemyPokemon.modEnemyStageAttack.value) {
		modEnemyStageAttack = gamehook.properties.battle.enemyPokemon.modEnemyStageAttack.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.statModifiers && gamehook.properties.battle.enemyPokemon.statModifiers.attack && gamehook.properties.battle.enemyPokemon.statModifiers.attack.value) {
		modEnemyStageAttack = gamehook.properties.battle.enemyPokemon.statModifiers.attack.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.modEnemyStageDefense && gamehook.properties.battle.enemyPokemon.modEnemyStageDefense.value) {
		modEnemyStageDefense = gamehook.properties.battle.enemyPokemon.modEnemyStageDefense.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.statModifiers && gamehook.properties.battle.enemyPokemon.statModifiers.defense && gamehook.properties.battle.enemyPokemon.statModifiers.defense.value) {
		modEnemyStageDefense = gamehook.properties.battle.enemyPokemon.statModifiers.defense.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.modEnemyStageSpeed && gamehook.properties.battle.enemyPokemon.modEnemyStageSpeed.value) {
		modEnemyStageSpeed = gamehook.properties.battle.enemyPokemon.modEnemyStageSpeed.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.statModifiers && gamehook.properties.battle.enemyPokemon.statModifiers.speed && gamehook.properties.battle.enemyPokemon.statModifiers.speed.value) {
		modEnemyStageSpeed = gamehook.properties.battle.enemyPokemon.statModifiers.speed.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.modEnemyStageSpecial && gamehook.properties.battle.enemyPokemon.modEnemyStageSpecial.value) {
		modEnemyStageSpecial = gamehook.properties.battle.enemyPokemon.modEnemyStageSpecial.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.statModifiers && gamehook.properties.battle.enemyPokemon.statModifiers.special && gamehook.properties.battle.enemyPokemon.statModifiers.special.value) {
		modEnemyStageSpecial = gamehook.properties.battle.enemyPokemon.statModifiers.special.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.modEnemyStageAccuracy && gamehook.properties.battle.enemyPokemon.modEnemyStageAccuracy.value) {
		modEnemyStageAccuracy = gamehook.properties.battle.enemyPokemon.modEnemyStageAccuracy.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.statModifiers && gamehook.properties.battle.enemyPokemon.statModifiers.accuracy && gamehook.properties.battle.enemyPokemon.statModifiers.accuracy.value) {
		modEnemyStageAccuracy = gamehook.properties.battle.enemyPokemon.statModifiers.accuracy.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.modEnemyStageEvasion && gamehook.properties.battle.enemyPokemon.modEnemyStageEvasion.value) {
		modEnemyStageEvasion = gamehook.properties.battle.enemyPokemon.modEnemyStageEvasion.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.statModifiers && gamehook.properties.battle.enemyPokemon.statModifiers.evasion && gamehook.properties.battle.enemyPokemon.statModifiers.evasion.value) {
		modEnemyStageEvasion = gamehook.properties.battle.enemyPokemon.statModifiers.evasion.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.move1 && gamehook.properties.battle.enemyPokemon.move1.value) {
		move1 = gamehook.properties.battle.enemyPokemon.move1.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.moves && gamehook.properties.battle.enemyPokemon.moves[0] && gamehook.properties.battle.enemyPokemon.moves[0].move && gamehook.properties.battle.enemyPokemon.moves[0].move.value) {
		move1 = gamehook.properties.battle.enemyPokemon.moves[0].move.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.move2 && gamehook.properties.battle.enemyPokemon.move2.value) {
		move2 = gamehook.properties.battle.enemyPokemon.move2.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.moves && gamehook.properties.battle.enemyPokemon.moves[1] && gamehook.properties.battle.enemyPokemon.moves[1].move && gamehook.properties.battle.enemyPokemon.moves[1].move.value) {
		move2 = gamehook.properties.battle.enemyPokemon.moves[1].move.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.move3 && gamehook.properties.battle.enemyPokemon.move3.value) {
		move3 = gamehook.properties.battle.enemyPokemon.move3.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.moves && gamehook.properties.battle.enemyPokemon.moves[2] && gamehook.properties.battle.enemyPokemon.moves[2].move && gamehook.properties.battle.enemyPokemon.moves[2].move.value) {
		move3 = gamehook.properties.battle.enemyPokemon.moves[2].move.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.move4 && gamehook.properties.battle.enemyPokemon.move4.value) {
		move4 = gamehook.properties.battle.enemyPokemon.move4.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.moves && gamehook.properties.battle.enemyPokemon.moves[3] && gamehook.properties.battle.enemyPokemon.moves[3].move && gamehook.properties.battle.enemyPokemon.moves[3].move.value) {
		move4 = gamehook.properties.battle.enemyPokemon.moves[3].move.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.move1int && gamehook.properties.battle.enemyPokemon.move1int.value) {
		move1int = gamehook.properties.battle.enemyPokemon.move1int.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.moves && gamehook.properties.battle.enemyPokemon.moves[0] && gamehook.properties.battle.enemyPokemon.moves[0].moveint && gamehook.properties.battle.enemyPokemon.moves[0].moveint.value) {
		move1int = gamehook.properties.battle.enemyPokemon.moves[0].moveint.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.move2int && gamehook.properties.battle.enemyPokemon.move2int.value) {
		move2int = gamehook.properties.battle.enemyPokemon.move2int.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.moves && gamehook.properties.battle.enemyPokemon.moves[1] && gamehook.properties.battle.enemyPokemon.moves[1].moveint && gamehook.properties.battle.enemyPokemon.moves[1].moveint.value) {
		move2int = gamehook.properties.battle.enemyPokemon.moves[1].moveint.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.move3int && gamehook.properties.battle.enemyPokemon.move3int.value) {
		move3int = gamehook.properties.battle.enemyPokemon.move3int.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.moves && gamehook.properties.battle.enemyPokemon.moves[2] && gamehook.properties.battle.enemyPokemon.moves[2].moveint && gamehook.properties.battle.enemyPokemon.moves[2].moveint.value) {
		move3int = gamehook.properties.battle.enemyPokemon.moves[2].moveint.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.move4int && gamehook.properties.battle.enemyPokemon.move4int.value) {
		move4int = gamehook.properties.battle.enemyPokemon.move4int.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.moves && gamehook.properties.battle.enemyPokemon.moves[3] && gamehook.properties.battle.enemyPokemon.moves[3].moveint && gamehook.properties.battle.enemyPokemon.moves[3].moveint.value) {
		move4int = gamehook.properties.battle.enemyPokemon.moves[3].moveint.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.dvAttack && gamehook.properties.battle.enemyPokemon.dvAttack.value) {
		dvAttack = gamehook.properties.battle.enemyPokemon.dvAttack.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.dvs && gamehook.properties.battle.enemyPokemon.dvs.attack && gamehook.properties.battle.enemyPokemon.dvs.attack.value) {
		dvAttack = gamehook.properties.battle.enemyPokemon.dvs.attack.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.dvDefense && gamehook.properties.battle.enemyPokemon.dvDefense.value) {
		dvDefense = gamehook.properties.battle.enemyPokemon.dvDefense.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.dvs && gamehook.properties.battle.enemyPokemon.dvs.defense && gamehook.properties.battle.enemyPokemon.dvs.defense.value) {
		dvDefense = gamehook.properties.battle.enemyPokemon.dvs.defense.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.dvSpeed && gamehook.properties.battle.enemyPokemon.dvSpeed.value) {
		dvSpeed = gamehook.properties.battle.enemyPokemon.dvSpeed.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.dvs && gamehook.properties.battle.enemyPokemon.dvs.speed && gamehook.properties.battle.enemyPokemon.dvs.speed.value) {
		dvSpeed = gamehook.properties.battle.enemyPokemon.dvs.speed.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.dvSpecial && gamehook.properties.battle.enemyPokemon.dvSpecial.value) {
		dvSpecial = gamehook.properties.battle.enemyPokemon.dvSpecial.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.dvs && gamehook.properties.battle.enemyPokemon.dvs.special && gamehook.properties.battle.enemyPokemon.dvs.special.value) {
		dvSpecial = gamehook.properties.battle.enemyPokemon.dvs.special.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.baseHp && gamehook.properties.battle.enemyPokemon.baseHp.value) {
		baseHp = gamehook.properties.battle.enemyPokemon.baseHp.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.baseStats && gamehook.properties.battle.enemyPokemon.baseStats.hp && gamehook.properties.battle.enemyPokemon.baseStats.hp.value) {
		baseHp = gamehook.properties.battle.enemyPokemon.baseStats.hp.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.baseAttack && gamehook.properties.battle.enemyPokemon.baseAttack.value) {
		baseAttack = gamehook.properties.battle.enemyPokemon.baseAttack.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.baseStats && gamehook.properties.battle.enemyPokemon.baseStats.attack && gamehook.properties.battle.enemyPokemon.baseStats.attack.value) {
		baseAttack = gamehook.properties.battle.enemyPokemon.baseStats.attack.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.baseDefense && gamehook.properties.battle.enemyPokemon.baseDefense.value) {
		baseDefense = gamehook.properties.battle.enemyPokemon.baseDefense.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.baseStats && gamehook.properties.battle.enemyPokemon.baseStats.defense && gamehook.properties.battle.enemyPokemon.baseStats.defense.value) {
		baseDefense = gamehook.properties.battle.enemyPokemon.baseStats.defense.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.baseSpeed && gamehook.properties.battle.enemyPokemon.baseSpeed.value) {
		baseSpeed = gamehook.properties.battle.enemyPokemon.baseSpeed.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.baseStats && gamehook.properties.battle.enemyPokemon.baseStats.speed && gamehook.properties.battle.enemyPokemon.baseStats.speed.value) {
		baseSpeed = gamehook.properties.battle.enemyPokemon.baseStats.speed.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.baseSpecial && gamehook.properties.battle.enemyPokemon.baseSpecial.value) {
		baseSpecial = gamehook.properties.battle.enemyPokemon.baseSpecial.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.baseStats && gamehook.properties.battle.enemyPokemon.baseStats.special && gamehook.properties.battle.enemyPokemon.baseStats.special.value) {
		baseSpecial = gamehook.properties.battle.enemyPokemon.baseStats.special.value;
	}


	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.baseExp && gamehook.properties.battle.enemyPokemon.baseExp.value) {
		baseExp = gamehook.properties.battle.enemyPokemon.baseExp.value;
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.baseStats && gamehook.properties.battle.enemyPokemon.baseStats.exp && gamehook.properties.battle.enemyPokemon.baseStats.exp.value) {
		baseExp = gamehook.properties.battle.enemyPokemon.baseStats.exp.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.bide && gamehook.properties.battle.enemyPokemon.effects.bide.value) {
		bide = gamehook.properties.battle.enemyPokemon.effects.bide.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.thrash && gamehook.properties.battle.enemyPokemon.effects.thrash.value) {
		thrash = gamehook.properties.battle.enemyPokemon.effects.thrash.value;
	}	

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.multiHit && gamehook.properties.battle.enemyPokemon.effects.multiHit.value) {
		multiHit = gamehook.properties.battle.enemyPokemon.effects.multiHit.value;
	}	

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.flinch && gamehook.properties.battle.enemyPokemon.effects.flinch.value) {
		flinch = gamehook.properties.battle.enemyPokemon.effects.flinch.value;
	}	

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.charging && gamehook.properties.battle.enemyPokemon.effects.charging.value) {
		charging = gamehook.properties.battle.enemyPokemon.effects.charging.value;
	}	

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.multiTurn && gamehook.properties.battle.enemyPokemon.effects.multiTurn.value) {
		multiTurn = gamehook.properties.battle.enemyPokemon.effects.multiTurn.value;
	}	
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.invulnerable && gamehook.properties.battle.enemyPokemon.effects.invulnerable.value) {
		invulnerable = gamehook.properties.battle.enemyPokemon.effects.invulnerable.value;
	}	

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.confusion && gamehook.properties.battle.enemyPokemon.effects.confusion.value) {
		confusion = gamehook.properties.battle.enemyPokemon.effects.confusion.value;
	}	

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.xAccuracy && gamehook.properties.battle.enemyPokemon.effects.xAccuracy.value) {
		xAccuracy = gamehook.properties.battle.enemyPokemon.effects.xAccuracy.value;
	}	

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.mist && gamehook.properties.battle.enemyPokemon.effects.mist.value) {
		mist = gamehook.properties.battle.enemyPokemon.effects.mist.value;
	}	

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.focusEnergy && gamehook.properties.battle.enemyPokemon.effects.focusEnergy.value) {
		focusEnergy = gamehook.properties.battle.enemyPokemon.effects.focusEnergy.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.hasSubstitute && gamehook.properties.battle.enemyPokemon.effects.hasSubstitute.value) {
		hasSubstitute = gamehook.properties.battle.enemyPokemon.effects.hasSubstitute.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.recharge && gamehook.properties.battle.enemyPokemon.effects.recharge.value) {
		recharge = gamehook.properties.battle.enemyPokemon.effects.recharge.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.rage && gamehook.properties.battle.enemyPokemon.effects.rage.value) {
		rage = gamehook.properties.battle.enemyPokemon.effects.rage.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.leechSeeded && gamehook.properties.battle.enemyPokemon.effects.leechSeeded.value) {
		leechSeeded = gamehook.properties.battle.enemyPokemon.effects.leechSeeded.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.toxic && gamehook.properties.battle.enemyPokemon.effects.toxic.value) {
		toxic = gamehook.properties.battle.enemyPokemon.effects.toxic.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.lightScreen && gamehook.properties.battle.enemyPokemon.effects.lightScreen.value) {
		lightScreen = gamehook.properties.battle.enemyPokemon.effects.lightScreen.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.reflect && gamehook.properties.battle.enemyPokemon.effects.reflect.value) {
		reflect = gamehook.properties.battle.enemyPokemon.effects.reflect.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.transformed && gamehook.properties.battle.enemyPokemon.effects.transformed.value) {
		transformed = gamehook.properties.battle.enemyPokemon.effects.transformed.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.counters && gamehook.properties.battle.enemyPokemon.counters.multiHit && gamehook.properties.battle.enemyPokemon.counters.multiHit.value) {
		multiHitCounter = gamehook.properties.battle.enemyPokemon.counters.multiHit.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.counters && gamehook.properties.battle.enemyPokemon.counters.confusion && gamehook.properties.battle.enemyPokemon.counters.confusion.value) {
		confusionConter = gamehook.properties.battle.enemyPokemon.counters.confusion.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.counters && gamehook.properties.battle.enemyPokemon.counters.toxic && gamehook.properties.battle.enemyPokemon.counters.toxic.value) {
		toxicCounter = gamehook.properties.battle.enemyPokemon.counters.toxic.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.counters && gamehook.properties.battle.enemyPokemon.counters.disable && gamehook.properties.battle.enemyPokemon.counters.disable.value) {
		disableCounter = gamehook.properties.battle.enemyPokemon.counters.disable.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.lastUsedMove && gamehook.properties.battle.enemyPokemon.lastUsedMove.move && gamehook.properties.battle.enemyPokemon.lastUsedMove.move.value) {
		lastMove = gamehook.properties.battle.enemyPokemon.lastUsedMove.move.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.lastUsedMove && gamehook.properties.battle.enemyPokemon.lastUsedMove.effect && gamehook.properties.battle.enemyPokemon.lastUsedMove.effect.value) {
		lastEffect = gamehook.properties.battle.enemyPokemon.lastUsedMove.effect.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.lastUsedMove && gamehook.properties.battle.enemyPokemon.lastUsedMove.power && gamehook.properties.battle.enemyPokemon.lastUsedMove.power.value) {
		lastPower = gamehook.properties.battle.enemyPokemon.lastUsedMove.power.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.lastUsedMove && gamehook.properties.battle.enemyPokemon.lastUsedMove.type && gamehook.properties.battle.enemyPokemon.lastUsedMove.type.value) {
		lastType = gamehook.properties.battle.enemyPokemon.lastUsedMove.type.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.lastUsedMove && gamehook.properties.battle.enemyPokemon.lastUsedMove.typeint && gamehook.properties.battle.enemyPokemon.lastUsedMove.typeint.value) {
		lastTypeint = gamehook.properties.battle.enemyPokemon.lastUsedMove.typeint.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.lastUsedMove && gamehook.properties.battle.enemyPokemon.lastUsedMove.accuracy && gamehook.properties.battle.enemyPokemon.lastUsedMove.accuracy.value) {
		lastAccuracy = gamehook.properties.battle.enemyPokemon.lastUsedMove.accuracy.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.lastUsedMove && gamehook.properties.battle.enemyPokemon.lastUsedMove.maxPP && gamehook.properties.battle.enemyPokemon.lastUsedMove.maxPP.value) {
		lastMaxPP = gamehook.properties.battle.enemyPokemon.lastUsedMove.maxPP.value;
	}
			
	var teamMember = new BattleEnemyPokemonState(partyPos, species, pokedexNumber,
												type1, type2, type1val, type2val,
												level, maxHp,  hp, attack, defense, speed, special, statusCondition,
												modEnemyStageAttack, modEnemyStageDefense, modEnemyStageSpeed, modEnemyStageSpecial,
												modEnemyStageAccuracy, modEnemyStageEvasion,
												move1, move2, move3, move4, move1int, move2int, move3int, move4int,
												dvAttack, dvDefense, dvSpeed, dvSpecial,
												baseHp, baseAttack, baseDefense, baseSpeed, baseSpecial, baseExp,
												bide, thrash, multiHit, flinch, charging, multiTurn, invulnerable, confusion, 
												xAccuracy, mist, focusEnergy, hasSubstitute, recharge, rage, leechSeeded, toxic, 
												lightScreen, reflect, transformed, 
												multiHitCounter, confusionConter, toxicCounter, disableCounter,
												lastMove, lastEffect, lastPower, lastType, lastTypeint, lastAccuracy, lastMaxPP);

	teamMember.gamehook = gamehook;

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.partyPos) {
		gamehook.properties.battle.enemyPokemon.partyPos.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onPartyPosChange:", x.value);
				teamMember.onPartyPosChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.species) {
		gamehook.properties.battle.enemyPokemon.species.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onSpeciesChange:", x.value);
				teamMember.onSpeciesChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.pokedexNumber) {
		gamehook.properties.battle.enemyPokemon.pokedexNumber.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onPokedexNumberChange:", x.value);
				teamMember.onPokedexNumberChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.type1) {
		gamehook.properties.battle.enemyPokemon.type1.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onType1Change:", x.value);
				teamMember.onType1Change(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.type2) {
		gamehook.properties.battle.enemyPokemon.type2.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onType2Change:", x.value);
				teamMember.onType2Change(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.type1val) {
		gamehook.properties.battle.enemyPokemon.type1val.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onType1valChange:", x.value);
				teamMember.onType1valChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.type1int) {
		gamehook.properties.battle.enemyPokemon.type1int.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onType1valChange:", x.value);
				teamMember.onType1valChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.type2val) {
		gamehook.properties.battle.enemyPokemon.type2val.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onType2valChange:", x.value);
				teamMember.onType2valChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.type2int) {
		gamehook.properties.battle.enemyPokemon.type2int.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onType2valChange:", x.value);
				teamMember.onType2valChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.level) {
		gamehook.properties.battle.enemyPokemon.level.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onLevelChange:", x.value);
				teamMember.onLevelChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.maxHp) {
		gamehook.properties.battle.enemyPokemon.maxHp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMaxHpChange:", x.value);
				teamMember.onMaxHpChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.stats && gamehook.properties.battle.enemyPokemon.stats.maxHp) {
		gamehook.properties.battle.enemyPokemon.stats.maxHp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMaxHpChange:", x.value);
				teamMember.onMaxHpChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.hp) {
		gamehook.properties.battle.enemyPokemon.hp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onHpChange:", x.value);
				teamMember.onHpChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.stats && gamehook.properties.battle.enemyPokemon.stats.hp) {
		gamehook.properties.battle.enemyPokemon.stats.hp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onHpChange:", x.value);
				teamMember.onHpChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.attack) {
		gamehook.properties.battle.enemyPokemon.attack.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onAttackChange:", x.value);
				teamMember.onAttackChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.stats && gamehook.properties.battle.enemyPokemon.stats.attack) {
		gamehook.properties.battle.enemyPokemon.stats.attack.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onAttackChange:", x.value);
				teamMember.onAttackChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.defense) {
		gamehook.properties.battle.enemyPokemon.defense.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onDefenseChange:", x.value);
				teamMember.onDefenseChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.stats && gamehook.properties.battle.enemyPokemon.stats.defense) {
		gamehook.properties.battle.enemyPokemon.stats.defense.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onDefenseChange:", x.value);
				teamMember.onDefenseChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.speed) {
		gamehook.properties.battle.enemyPokemon.speed.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onSpeedChange:", x.value);
				teamMember.onSpeedChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.stats && gamehook.properties.battle.enemyPokemon.stats.speed) {
		gamehook.properties.battle.enemyPokemon.stats.speed.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onSpeedChange:", x.value);
				teamMember.onSpeedChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.special) {
		gamehook.properties.battle.enemyPokemon.special.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onSpecialChange:", x.value);
				teamMember.onSpecialChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.stats && gamehook.properties.battle.enemyPokemon.stats.special) {
		gamehook.properties.battle.enemyPokemon.stats.special.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onSpecialChange:", x.value);
				teamMember.onSpecialChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.statusCondition) {
		gamehook.properties.battle.enemyPokemon.statusCondition.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onStatusConditionChange:", x.value);
				teamMember.onStatusConditionChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.modEnemyStageAttack) {
		gamehook.properties.battle.enemyPokemon.modEnemyStageAttack.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onModEnemyStageAttackChange:", x.value);
				teamMember.onModEnemyStageAttackChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.statModifiers && gamehook.properties.battle.enemyPokemon.statModifiers.attack) {
		gamehook.properties.battle.enemyPokemon.statModifiers.attack.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onModEnemyStageAttackChange:", x.value);
				teamMember.onModEnemyStageAttackChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.modEnemyStageDefense) {
		gamehook.properties.battle.enemyPokemon.modEnemyStageDefense.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onModEnemyStageDefenseChange:", x.value);
				teamMember.onModEnemyStageDefenseChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.statModifiers && gamehook.properties.battle.enemyPokemon.statModifiers.defense) {
		gamehook.properties.battle.enemyPokemon.statModifiers.defense.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onModEnemyStageDefenseChange:", x.value);
				teamMember.onModEnemyStageDefenseChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.modEnemyStageSpeed) {
		gamehook.properties.battle.enemyPokemon.modEnemyStageSpeed.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onModEnemyStageSpeedChange:", x.value);
				teamMember.onModEnemyStageSpeedChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.statModifiers && gamehook.properties.battle.enemyPokemon.statModifiers.speed) {
		gamehook.properties.battle.enemyPokemon.statModifiers.speed.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onModEnemyStageSpeedChange:", x.value);
				teamMember.onModEnemyStageSpeedChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.modEnemyStageSpecial) {
		gamehook.properties.battle.enemyPokemon.modEnemyStageSpecial.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onModEnemyStageSpecialChange:", x.value);
				teamMember.onModEnemyStageSpecialChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.statModifiers && gamehook.properties.battle.enemyPokemon.statModifiers.special) {
		gamehook.properties.battle.enemyPokemon.statModifiers.special.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onModEnemyStageSpecialChange:", x.value);
				teamMember.onModEnemyStageSpecialChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.modEnemyStageAccuracy) {
		gamehook.properties.battle.enemyPokemon.modEnemyStageAccuracy.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onModEnemyStageAccuracyChange:", x.value);
				teamMember.onModEnemyStageAccuracyChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.statModifiers && gamehook.properties.battle.enemyPokemon.statModifiers.accuracy) {
		gamehook.properties.battle.enemyPokemon.statModifiers.accuracy.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onModEnemyStageAccuracyChange:", x.value);
				teamMember.onModEnemyStageAccuracyChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.modEnemyStageEvasion) {
		gamehook.properties.battle.enemyPokemon.modEnemyStageEvasion.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onModEnemyStageEvasionChange:", x.value);
				teamMember.onModEnemyStageEvasionChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.statModifiers && gamehook.properties.battle.enemyPokemon.statModifiers.evasion) {
		gamehook.properties.battle.enemyPokemon.statModifiers.evasion.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onModEnemyStageEvasionChange:", x.value);
				teamMember.onModEnemyStageEvasionChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.move1) {
		gamehook.properties.battle.enemyPokemon.move1.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove1Change:", x.value);
				teamMember.onMove1Change(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.moves && gamehook.properties.battle.enemyPokemon.moves[0] && gamehook.properties.battle.enemyPokemon.moves[0].move) {
		gamehook.properties.battle.enemyPokemon.moves[0].move.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove1Change:", x.value);
				teamMember.onMove1Change(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.move2) {
		gamehook.properties.battle.enemyPokemon.move2.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove2Change:", x.value);
				teamMember.onMove2Change(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.moves && gamehook.properties.battle.enemyPokemon.moves[1] && gamehook.properties.battle.enemyPokemon.moves[1].move) {
		gamehook.properties.battle.enemyPokemon.moves[1].move.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove2Change:", x.value);
				teamMember.onMove2Change(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.move3) {
		gamehook.properties.battle.enemyPokemon.move3.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove3Change:", x.value);
				teamMember.onMove3Change(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.moves && gamehook.properties.battle.enemyPokemon.moves[2] && gamehook.properties.battle.enemyPokemon.moves[2].move) {
		gamehook.properties.battle.enemyPokemon.moves[2].move.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove3Change:", x.value);
				teamMember.onMove3Change(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.move4) {
		gamehook.properties.battle.enemyPokemon.move4.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove4Change:", x.value);
				teamMember.onMove4Change(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.moves && gamehook.properties.battle.enemyPokemon.moves[3] && gamehook.properties.battle.enemyPokemon.moves[3].move) {
		gamehook.properties.battle.enemyPokemon.moves[3].move.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove4Change:", x.value);
				teamMember.onMove4Change(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.move1int) {
		gamehook.properties.battle.enemyPokemon.move1int.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove1intChange:", x.value);
				teamMember.onMove1intChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.moves && gamehook.properties.battle.enemyPokemon.moves[0] && gamehook.properties.battle.enemyPokemon.moves[0].moveint) {
		gamehook.properties.battle.enemyPokemon.moves[0].moveint.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove1intChange:", x.value);
				teamMember.onMove1intChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.move2int) {
		gamehook.properties.battle.enemyPokemon.move2int.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove2intChange:", x.value);
				teamMember.onMove2intChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.moves && gamehook.properties.battle.enemyPokemon.moves[1] && gamehook.properties.battle.enemyPokemon.moves[1].moveint) {
		gamehook.properties.battle.enemyPokemon.moves[1].moveint.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove2intChange:", x.value);
				teamMember.onMove2intChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.move3int) {
		gamehook.properties.battle.enemyPokemon.move3int.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove3intChange:", x.value);
				teamMember.onMove3intChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.moves && gamehook.properties.battle.enemyPokemon.moves[2] && gamehook.properties.battle.enemyPokemon.moves[2].moveint) {
		gamehook.properties.battle.enemyPokemon.moves[2].moveint.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove3intChange:", x.value);
				teamMember.onMove3intChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.move4int) {
		gamehook.properties.battle.enemyPokemon.move4int.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove4intChange:", x.value);
				teamMember.onMove4intChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.moves && gamehook.properties.battle.enemyPokemon.moves[3] && gamehook.properties.battle.enemyPokemon.moves[3].moveint) {
		gamehook.properties.battle.enemyPokemon.moves[3].moveint.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove4intChange:", x.value);
				teamMember.onMove4intChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.dvAttack) {
		gamehook.properties.battle.enemyPokemon.dvAttack.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onDvAttackChange:", x.value);
				teamMember.onDvAttackChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.dvs && gamehook.properties.battle.enemyPokemon.dvs.attack) {
		gamehook.properties.battle.enemyPokemon.dvs.attack.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onDvAttackChange:", x.value);
				teamMember.onDvAttackChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.dvDefense) {
		gamehook.properties.battle.enemyPokemon.dvDefense.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onDvDefenseChange:", x.value);
				teamMember.onDvDefenseChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.dvs && gamehook.properties.battle.enemyPokemon.dvs.defense) {
		gamehook.properties.battle.enemyPokemon.dvs.defense.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onDvDefenseChange:", x.value);
				teamMember.onDvDefenseChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.dvSpeed) {
		gamehook.properties.battle.enemyPokemon.dvSpeed.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onDvSpeedChange:", x.value);
				teamMember.onDvSpeedChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.dvs && gamehook.properties.battle.enemyPokemon.dvs.speed) {
		gamehook.properties.battle.enemyPokemon.dvs.speed.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onDvSpeedChange:", x.value);
				teamMember.onDvSpeedChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.dvSpecial) {
		gamehook.properties.battle.enemyPokemon.dvSpecial.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onDvSpecialChange:", x.value);
				teamMember.onDvSpecialChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.dvs && gamehook.properties.battle.enemyPokemon.dvs.special) {
		gamehook.properties.battle.enemyPokemon.dvs.special.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onDvSpecialChange:", x.value);
				teamMember.onDvSpecialChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.baseHp) {
		gamehook.properties.battle.enemyPokemon.baseHp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onBaseHpChange:", x.value);
				teamMember.onBaseHpChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.baseStats && gamehook.properties.battle.enemyPokemon.baseStats.hp) {
		gamehook.properties.battle.enemyPokemon.baseStats.hp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onBaseHpChange:", x.value);
				teamMember.onBaseHpChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.baseAttack) {
		gamehook.properties.battle.enemyPokemon.baseAttack.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onBaseAttackChange:", x.value);
				teamMember.onBaseAttackChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.baseStats && gamehook.properties.battle.enemyPokemon.baseStats.attack) {
		gamehook.properties.battle.enemyPokemon.baseStats.attack.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onBaseAttackChange:", x.value);
				teamMember.onBaseAttackChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.baseDefense) {
		gamehook.properties.battle.enemyPokemon.baseDefense.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onBaseDefenseChange:", x.value);
				teamMember.onBaseDefenseChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.baseStats && gamehook.properties.battle.enemyPokemon.baseStats.defense) {
		gamehook.properties.battle.enemyPokemon.baseStats.defense.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onBaseDefenseChange:", x.value);
				teamMember.onBaseDefenseChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.baseSpeed) {
		gamehook.properties.battle.enemyPokemon.baseSpeed.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onBaseSpeedChange:", x.value);
				teamMember.onBaseSpeedChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.baseStats && gamehook.properties.battle.enemyPokemon.baseStats.speed) {
		gamehook.properties.battle.enemyPokemon.baseStats.speed.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onBaseSpeedChange:", x.value);
				teamMember.onBaseSpeedChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.baseSpecial) {
		gamehook.properties.battle.enemyPokemon.baseSpecial.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onBaseSpecialChange:", x.value);
				teamMember.onBaseSpecialChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.baseStats && gamehook.properties.battle.enemyPokemon.baseStats.special) {
		gamehook.properties.battle.enemyPokemon.baseStats.special.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onBaseSpecialChange:", x.value);
				teamMember.onBaseSpecialChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.baseExp) {
		gamehook.properties.battle.enemyPokemon.baseExp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onBaseExpChange:", x.value);
				teamMember.onBaseExpChange(x.value);
			}
		});
	} else if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.baseStats && gamehook.properties.battle.enemyPokemon.baseStats.exp) {
		gamehook.properties.battle.enemyPokemon.baseStats.exp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onBaseExpChange:", x.value);
				teamMember.onBaseExpChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.bide) {
		gamehook.properties.battle.enemyPokemon.effects.bide.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onBideChange:", x.value);
				teamMember.onBideChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.thrash) {
		gamehook.properties.battle.enemyPokemon.effects.thrash.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onThrashChange:", x.value);
				teamMember.onThrashChange(x.value);
			}
		});
	}	

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.multiHit) {
		gamehook.properties.battle.enemyPokemon.effects.multiHit.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onMultiHitChange:", x.value);
				teamMember.onMultiHitChange(x.value);
			}
		});
	}	

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.flinch) {
		gamehook.properties.battle.enemyPokemon.effects.flinch.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onFlinchChange:", x.value);
				teamMember.onFlinchChange(x.value);
			}
		});
	}	

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.charging) {
		gamehook.properties.battle.enemyPokemon.effects.charging.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onChargingChange:", x.value);
				teamMember.onChargingChange(x.value);
			}
		});
	}	

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.multiTurn) {
		gamehook.properties.battle.enemyPokemon.effects.multiTurn.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onMultiTurnChange:", x.value);
				teamMember.onMultiTurnChange(x.value);
			}
		});
	}	
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.invulnerable) {
		gamehook.properties.battle.enemyPokemon.effects.invulnerable.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onInvulnerableChange:", x.value);
				teamMember.onInvulnerableChange(x.value);
			}
		});
	}	

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.confusion) {
		gamehook.properties.battle.enemyPokemon.effects.confusion.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onConfusionChange:", x.value);
				teamMember.onConfusionChange(x.value);
			}
		});
	}	

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.xAccuracy) {
		gamehook.properties.battle.enemyPokemon.effects.xAccuracy.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onXAccuracyChange:", x.value);
				teamMember.onXAccuracyChange(x.value);
			}
		});
	}	

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.mist) {
		gamehook.properties.battle.enemyPokemon.effects.mist.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onMistChange:", x.value);
				teamMember.onMistChange(x.value);
			}
		});
	}	

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.focusEnergy) {
		gamehook.properties.battle.enemyPokemon.effects.focusEnergy.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onFocusEnergyChange:", x.value);
				teamMember.onFocusEnergyChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.hasSubstitute) {
		gamehook.properties.battle.enemyPokemon.effects.hasSubstitute.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onHasSubstituteChange:", x.value);
				teamMember.onHasSubstituteChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.recharge) {
		gamehook.properties.battle.enemyPokemon.effects.recharge.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onRechargeChange:", x.value);
				teamMember.onRechargeChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.rage) {
		gamehook.properties.battle.enemyPokemon.effects.rage.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onRageChange:", x.value);
				teamMember.onRageChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.leechSeeded) {
		gamehook.properties.battle.enemyPokemon.effects.leechSeeded.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onLeechSeededChange:", x.value);
				teamMember.onLeechSeededChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.toxic) {
		gamehook.properties.battle.enemyPokemon.effects.toxic.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onToxicChange:", x.value);
				teamMember.onToxicChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.lightScreen) {
		gamehook.properties.battle.enemyPokemon.effects.lightScreen.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onLightScreenChange:", x.value);
				teamMember.onLightScreenChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.reflect) {
		gamehook.properties.battle.enemyPokemon.effects.reflect.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onReflectChange:", x.value);
				teamMember.onReflectChange(x.value);
			}
		});
	}

	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.effects && gamehook.properties.battle.enemyPokemon.effects.transformed) {
		gamehook.properties.battle.enemyPokemon.effects.transformed.change(async(x) => {
			if(x && (x.value || x.value === 0 || x.value === false)) {
				//console.log("onTransformedChange:", x.value);
				teamMember.onTransformedChange(x.value);
			}
		});
	}
		
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.counters && gamehook.properties.battle.enemyPokemon.counters.multiHit) {
		gamehook.properties.battle.enemyPokemon.counters.multiHit.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMultiHitCounterChange:", x.value);
				teamMember.onMultiHitCounterChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.counters && gamehook.properties.battle.enemyPokemon.counters.confusion) {
		gamehook.properties.battle.enemyPokemon.counters.confusion.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onConfusionConterChange:", x.value);
				teamMember.onConfusionConterChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.counters && gamehook.properties.battle.enemyPokemon.counters.toxic) {
		gamehook.properties.battle.enemyPokemon.counters.toxic.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onToxicCounterChange:", x.value);
				teamMember.onToxicCounterChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.counters && gamehook.properties.battle.enemyPokemon.counters.disable) {
		gamehook.properties.battle.enemyPokemon.counters.disable.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onDisableCounterChange:", x.value);
				teamMember.onDisableCounterChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.lastUsedMove && gamehook.properties.battle.enemyPokemon.lastUsedMove.move) {
		gamehook.properties.battle.enemyPokemon.lastUsedMove.move.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onLastMoveChange:", x.value);
				teamMember.onLastMoveChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.lastUsedMove && gamehook.properties.battle.enemyPokemon.lastUsedMove.effect) {
		gamehook.properties.battle.enemyPokemon.lastUsedMove.effect.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onLastEffectChange:", x.value);
				teamMember.onLastEffectChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.lastUsedMove && gamehook.properties.battle.enemyPokemon.lastUsedMove.power) {
		gamehook.properties.battle.enemyPokemon.lastUsedMove.power.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onLastPowerChange:", x.value);
				teamMember.onLastPowerChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.lastUsedMove && gamehook.properties.battle.enemyPokemon.lastUsedMove.type) {
		gamehook.properties.battle.enemyPokemon.lastUsedMove.type.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onLastTypeChange:", x.value);
				teamMember.onLastTypeChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.lastUsedMove && gamehook.properties.battle.enemyPokemon.lastUsedMove.typeint) {
		gamehook.properties.battle.enemyPokemon.lastUsedMove.typeint.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onLastTypeintChange:", x.value);
				teamMember.onLastTypeintChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.lastUsedMove && gamehook.properties.battle.enemyPokemon.lastUsedMove.accuracy) {
		gamehook.properties.battle.enemyPokemon.lastUsedMove.accuracy.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onLastAccuracyChange:", x.value);
				teamMember.onLastAccuracyChange(x.value);
			}
		});
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.battle && gamehook.properties.battle.enemyPokemon && gamehook.properties.battle.enemyPokemon.lastUsedMove && gamehook.properties.battle.enemyPokemon.lastUsedMove.maxPP) {
		gamehook.properties.battle.enemyPokemon.lastUsedMove.maxPP.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onLastMaxPPChange:", x.value);
				teamMember.onLastMaxPPChange(x.value);
			}
		});
	}
	
	return teamMember;
};

//BattleEnemyPokemonState.static = null;
//BattleEnemyPokemonState.staticMethod = function() {
//};

BattleEnemyPokemonState.prototype.onPartyPosChange = function (newPartyPos) {
	this.partyPos = newPartyPos;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onSpeciesChange = function (newSpecies) {
	this.species = newSpecies;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onPokedexNumberChange = function (newPokedexNumber) {
	this.pokedexNumber = newPokedexNumber;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onType1Change = function (newType1) {
	this.type1 = newType1;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onType2Change = function (newType2) {
	this.type2 = newType2;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onType1valChange = function (newType1val) {
	this.type1val = newType1val;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onType2valChange = function (newType2val) {
	this.type2val = newType2val;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onLevelChange = function (newLevel) {
	this.level = newLevel;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onMaxHpChange = function (newMaxHp) {
	this.maxHp = newMaxHp;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onHpChange = function (newHp) {
	this.hp = newHp;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onAttackChange = function (newAttack) {
	this.attack = newAttack;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onDefenseChange = function (newDefense) {
	this.defense = newDefense;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onSpeedChange = function (newSpeed) {
	this.speed = newSpeed;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onSpecialChange = function (newSpecial) {
	this.special = newSpecial;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onStatusConditionChange = function (newStatusCondition) {
	this.statusCondition = newStatusCondition;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onModEnemyStageAttackChange = function (newModEnemyStageAttack) {
	this.modEnemyStageAttack = newModEnemyStageAttack;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onModEnemyStageDefenseChange = function (newModEnemyStageDefense) {
	this.modEnemyStageDefense = newModEnemyStageDefense;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onModEnemyStageSpeedChange = function (newModEnemyStageSpeed) {
	this.modEnemyStageSpeed = newModEnemyStageSpeed;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onModEnemyStageSpecialChange = function (newModEnemyStageSpecial) {
	this.modEnemyStageSpecial = newModEnemyStageSpecial;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onModEnemyStageAccuracyChange = function (newModEnemyStageAccuracy) {
	this.modEnemyStageAccuracy = newModEnemyStageAccuracy;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onModEnemyStageEvasionChange = function (newModEnemyStageEvasion) {
	this.modEnemyStageEvasion = newModEnemyStageEvasion;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onMove1Change = function (newMove1) {
	this.move1 = newMove1;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onMove2Change = function (newMove2) {
	this.move2 = newMove2;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onMove3Change = function (newMove3) {
	this.move3 = newMove3;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onMove4Change = function (newMove4) {
	this.move4 = newMove4;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onMove1intChange = function (newMove1int) {
	this.move1int = newMove1int;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onMove2intChange = function (newMove2int) {
	this.move2int = newMove2int;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onMove3intChange = function (newMove3int) {
	this.move3int = newMove3int;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onMove4intChange = function (newMove4int) {
	this.move4int = newMove4int;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onDvAttackChange = function (newDvAttack) {
	this.dvAttack = newDvAttack;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onDvDefenseChange = function (newDvDefense) {
	this.dvDefense = newDvDefense;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onDvSpeedChange = function (newDvSpeed) {
	this.dvSpeed = newDvSpeed;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onDvSpecialChange = function (newDvSpecial) {
	this.dvSpecial = newDvSpecial;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onBaseHpChange = function (newBaseHp) {
	this.baseHp = newBaseHp;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onBaseAttackChange = function (newBaseAttack) {
	this.baseAttack = newBaseAttack;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onBaseDefenseChange = function (newBaseDefense) {
	this.baseDefense = newBaseDefense;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onBaseSpeedChange = function (newBaseSpeed) {
	this.baseSpeed = newBaseSpeed;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onBaseSpecialChange = function (newBaseSpecial) {
	this.baseSpecial = newBaseSpecial;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onBaseExpChange = function (newBaseExp) {
	this.baseExp = newBaseExp;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onBideChange = function (newBide) {
	this.bide = newBide;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onThrashChange = function (newThrash) {
	this.thrash = newThrash;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onMultiHitChange = function (newMultiHit) {
	this.multiHit = newMultiHit;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onFlinchChange = function (newFlinch) {
	this.flinch = newFlinch;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onChargingChange = function (newCharging) {
	this.charging = newCharging;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onMultiTurnChange = function (newMultiTurn) {
	this.multiTurn = newMultiTurn;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onInvulnerableChange = function (newInvulnerable) {
	this.invulnerable = newInvulnerable;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onConfusionChange = function (newConfusion) {
	this.confusion = newConfusion;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};
BattleEnemyPokemonState.prototype.onXAccuracyChange = function (newXAccuracy) {
	this.xAccuracy = newXAccuracy;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onMistChange = function (newMist) {
	this.mist = newMist;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onFocusEnergyChange = function (newFocusEnergy) {
	this.focusEnergy = newFocusEnergy;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onHasSubstituteChange = function (newHasSubstitute) {
	this.hasSubstitute = newHasSubstitute;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};
BattleEnemyPokemonState.prototype.onRechargeChange = function (newRecharge) {
	this.recharge = newRecharge;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onRageChange = function (newRage) {
	this.rage = newRage;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onLeechSeededChange = function (newLeechSeeded) {
	this.leechSeeded = newLeechSeeded;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onToxicChange = function (newToxic) {
	this.toxic = newToxic;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onLightScreenChange = function (newLightScreen) {
	this.lightScreen = newLightScreen;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onReflectChange = function (newReflect) {
	this.reflect = newReflect;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};
BattleEnemyPokemonState.prototype.onTransformedChange = function (newTransformed) {
	this.transformed = newTransformed;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onMultiHitCounterChange = function (newMultiHitCounter) {
	this.multiHitCounter = newMultiHitCounter;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onConfusionConterChange = function (newConfusionConter) {
	this.confusionConter = newConfusionConter;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onToxicCounterChange = function (newToxicCounter) {
	this.toxicCounter = newToxicCounter;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onDisableCounterChange = function (newDisableCounter) {
	this.disableCounter = newDisableCounter;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onLastMoveChange = function (newLastMove) {
	this.lastMove = newLastMove;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onLastEffectChange = function (newLastEffect) {
	this.lastEffect = newLastEffect;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onLastPowerChange = function (newLastPower) {
	this.lastPower = newLastPower;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onLastTypeChange = function (newLastType) {
	this.lastType = newLastType;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onLastTypeintChange = function (newLastTypeint) {
	this.lastTypeint = newLastTypeint;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onLastAccuracyChange = function (newLastAccuracy) {
	this.lastAccuracy = newLastAccuracy;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.onLastMaxPPChange = function (newLastMaxPP) {
	this.lastMaxPP = newLastMaxPP;

	this.listeners.forEach((listener) => {
		listener.onBattleEnemyPokemonChange(this);
	});
};

BattleEnemyPokemonState.prototype.listen = function (obj) {
	this.listeners.push(obj);
};

(function () {
  // Static initialization code
})();