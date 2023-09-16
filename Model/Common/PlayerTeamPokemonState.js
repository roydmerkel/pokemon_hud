function PlayerTeamPokemonState(nickname, species, pokedexNumber, level, expPoints, statusCondition,
								maxHp, hp, attack, defense, speed, special,
								dvAttack, dvDefense, dvSpeed, dvSpecial,
								move1, move2, move3, move4,
								move1int, move2int, move3int, move4int,
								move1pp, move2pp, move3pp, move4pp,
								move1ppUp, move2ppUp, move3ppUp, move4ppUp,
								move1ppint, move2ppint, move3ppint, move4ppint,
								statExpHp, statExpAttack, statExpDefense, statExpSpeed, statExpSpecial,
								type1, type2, type1val, type2val,
								trainerId, catchRate) {
	this.nickname = nickname; // string
	this.species = species; // string
	this.pokedexNumber = pokedexNumber; // int
	this.level = level; // int
	this.expPoints = expPoints; // int
	this.statusCondition = statusCondition; // string
	this.maxHp = maxHp; // int
	this.hp = hp; // int
	this.attack = attack; // int
	this.defense = defense; // int
	this.speed = speed; // int
	this.special = special; //  int
	this.dvAttack = dvAttack; // int
	this.dvDefense = dvDefense; // int
	this.dvSpeed = dvSpeed; // int
	this.dvSpecial = dvSpecial; // int
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
    this.move1ppUp = move1ppUp; // int
    this.move2ppUp = move2ppUp; // int
    this.move3ppUp = move3ppUp; // int
    this.move4ppUp = move4ppUp; // int
    this.move1ppint = move1ppint; // int
    this.move2ppint = move2ppint; // int
    this.move3ppint = move3ppint; // int
    this.move4ppint = move4ppint; // int
    this.statExpHp = statExpHp; // int
    this.statExpAttack = statExpAttack; // int
    this.statExpDefense = statExpDefense; // int
    this.statExpSpeed = statExpSpeed; // int
    this.statExpSpecial = statExpSpecial; // int
    this.type1 = type1; // string
    this.type2 = type2; // string
    this.type1val = type1val; // int
    this.type2val = type2val; // int
    this.trainerId = trainerId; // int
    this.catchRate = catchRate; // int

	this.listeners = [];
	this.gamehook = null;
}

PlayerTeamPokemonState.ConstructPlayerTeamPokemonStateFromGamehook = function (gamehook, teamOff, team) {
	var nickname = "";
	var species = "";
	var pokedexNumber = 0;
	var level = 0;
	var expPoints = 0;
	var statusCondition = "";
	var maxHp = 0;
	var hp = 0;
	var attack = 0;
	var defense = 0;
	var speed = 0;
	var special = 0;
	var dvAttack = 0;
	var dvDefense = 0;
	var dvSpeed = 0;
	var dvSpecial = 0;
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
	var move1ppUp = 0;
	var move2ppUp = 0;
	var move3ppUp = 0;
	var move4ppUp = 0;
	var move1ppint = 0;
	var move2ppint = 0;
	var move3ppint = 0;
	var move4ppint = 0;
	var statExpHp = 0;
	var statExpAttack = 0;
	var statExpDefense = 0;
	var statExpSpeed = 0;
	var statExpSpecial = 0;
	var type1 = "";
	var type2 = "";
	var type1val = 0;
	var type2val = 0;
	var trainerId = 0;
	var catchRate = 0;

	if(team[teamOff] && team[teamOff].nickname && team[teamOff].nickname.value) {
		nickname = team[teamOff].nickname.value;
	}
	if(team[teamOff] && team[teamOff].species && team[teamOff].species.value) {
		species = team[teamOff].species.value;
	}
	if(team[teamOff] && team[teamOff].pokedexNumber && team[teamOff].pokedexNumber.value) {
		pokedexNumber = team[teamOff].pokedexNumber.value;
	}
	if(team[teamOff] && team[teamOff].level && team[teamOff].level.value) {
		level = team[teamOff].level.value;
	}
	if(team[teamOff] && team[teamOff].expPoints && team[teamOff].expPoints.value) {
		expPoints = team[teamOff].expPoints.value;
	}
	if(team[teamOff] && team[teamOff].statusCondition && team[teamOff].statusCondition.value) {
		statusCondition = team[teamOff].statusCondition.value;
	}
	if(team[teamOff] && team[teamOff].maxHp && team[teamOff].maxHp.value) {
		maxHp = team[teamOff].maxHp.value;
	} else if(team[teamOff] && team[teamOff].stats && team[teamOff].stats.maxHp && team[teamOff].stats.maxHp.value) {
		maxHp = team[teamOff].stats.maxHp.value;
	}
	if(team[teamOff] && team[teamOff].hp && team[teamOff].hp.value) {
		hp = team[teamOff].hp.value;
	} else if(team[teamOff] && team[teamOff].stats && team[teamOff].stats.hp && team[teamOff].stats.hp.value) {
		hp = team[teamOff].stats.hp.value;
	}
	if(team[teamOff] && team[teamOff].attack && team[teamOff].attack.value) {
		attack = team[teamOff].attack.value;
	} else if(team[teamOff] && team[teamOff].stats && team[teamOff].stats.attack && team[teamOff].stats.attack.value) {
		attack = team[teamOff].stats.attack.value;
	}
	if(team[teamOff] && team[teamOff].defense && team[teamOff].defense.value) {
		defense = team[teamOff].defense.value;
	} else if(team[teamOff] && team[teamOff].stats && team[teamOff].stats.defense && team[teamOff].stats.defense.value) {
		defense = team[teamOff].stats.defense.value;
	}
	if(team[teamOff] && team[teamOff].speed && team[teamOff].speed.value) {
		speed = team[teamOff].speed.value;
	} else if(team[teamOff] && team[teamOff].stats && team[teamOff].stats.speed && team[teamOff].stats.speed.value) {
		speed = team[teamOff].stats.speed.value;
	}
	if(team[teamOff] && team[teamOff].special && team[teamOff].special.value) {
		special = team[teamOff].special.value;
	} else if(team[teamOff] && team[teamOff].stats && team[teamOff].stats.special && team[teamOff].stats.special.value) {
		special = team[teamOff].stats.special.value;
	}
	if(team[teamOff] && team[teamOff].dvAttack && team[teamOff].dvAttack.value) {
		dvAttack = team[teamOff].dvAttack.value;
	} else if(team[teamOff] && team[teamOff].ivs && team[teamOff].ivs.attack && team[teamOff].ivs.attack.value) {
		dvAttack = team[teamOff].ivs.attack.value;
	}
	if(team[teamOff] && team[teamOff].dvDefense && team[teamOff].dvDefense.value) {
		dvDefense = team[teamOff].dvDefense.value;
	} else if(team[teamOff] && team[teamOff].ivs && team[teamOff].ivs.defense && team[teamOff].ivs.defense.value) {
		dvDefense = team[teamOff].ivs.defense.value;
	}
	if(team[teamOff] && team[teamOff].dvSpeed && team[teamOff].dvSpeed.value) {
		dvSpeed = team[teamOff].dvSpeed.value;
	} else if(team[teamOff] && team[teamOff].ivs && team[teamOff].ivs.speed && team[teamOff].ivs.speed.value) {
		dvSpeed = team[teamOff].ivs.speed.value;
	}
	if(team[teamOff] && team[teamOff].dvSpecial && team[teamOff].dvSpecial.value) {
		dvSpecial = team[teamOff].dvSpecial.value;
	} else if(team[teamOff] && team[teamOff].ivs && team[teamOff].ivs.special && team[teamOff].ivs.special.value) {
		dvSpecial = team[teamOff].ivs.special.value;
	}
	if(team[teamOff] && team[teamOff].move1 && team[teamOff].move1.value) {
		move1 = team[teamOff].move1.value;
	} else if(team[teamOff] && team[teamOff].moves && team[teamOff].moves[0] && team[teamOff].moves[0].move && team[teamOff].moves[0].move.value) {
		move1 = team[teamOff].moves[0].move.value;
	}
	if(team[teamOff] && team[teamOff].move2 && team[teamOff].move2.value) {
		move2 = team[teamOff].move2.value;
	} else if(team[teamOff] && team[teamOff].moves && team[teamOff].moves[1] && team[teamOff].moves[1].move && team[teamOff].moves[1].move.value) {
		move2 = team[teamOff].moves[1].move.value;
	}
	if(team[teamOff] && team[teamOff].move3 && team[teamOff].move3.value) {
		move3 = team[teamOff].move3.value;
	} else if(team[teamOff] && team[teamOff].moves && team[teamOff].moves[2] && team[teamOff].moves[2].move && team[teamOff].moves[2].move.value) {
		move3 = team[teamOff].moves[2].move.value;
	}
	if(team[teamOff] && team[teamOff].move4 && team[teamOff].move4.value) {
		move4 = team[teamOff].move4.value;
	} else if(team[teamOff] && team[teamOff].moves && team[teamOff].moves[3] && team[teamOff].moves[3].move && team[teamOff].moves[3].move.value) {
		move4 = team[teamOff].moves[3].move.value;
	}
	if(team[teamOff] && team[teamOff].move1int && team[teamOff].move1int.value) {
		move1int = team[teamOff].move1int.value;
	} else if(team[teamOff] && team[teamOff].moves && team[teamOff].moves[0] && team[teamOff].moves[0].moveint && team[teamOff].moves[0].moveint.value) {
		move1int = team[teamOff].moves[0].moveint.value;
	}
	if(team[teamOff] && team[teamOff].move2int && team[teamOff].move2int.value) {
		move2int = team[teamOff].move2int.value;
	} else if(team[teamOff] && team[teamOff].moves && team[teamOff].moves[1] && team[teamOff].moves[1].moveint && team[teamOff].moves[1].moveint.value) {
		move2int = team[teamOff].moves[1].moveint.value;
	}
	if(team[teamOff] && team[teamOff].move3int && team[teamOff].move3int.value) {
		move3int = team[teamOff].move3int.value;
	} else if(team[teamOff] && team[teamOff].moves && team[teamOff].moves[2] && team[teamOff].moves[2].moveint && team[teamOff].moves[2].moveint.value) {
		move3int = team[teamOff].moves[2].moveint.value;
	}
	if(team[teamOff] && team[teamOff].move4int && team[teamOff].move4int.value) {
		move4int = team[teamOff].move4int.value;
	} else if(team[teamOff] && team[teamOff].moves && team[teamOff].moves[3] && team[teamOff].moves[3].moveint && team[teamOff].moves[3].moveint.value) {
		move4int = team[teamOff].moves[3].moveint.value;
	}
	if(team[teamOff] && team[teamOff].move1pp && team[teamOff].move1pp.value) {
		move1pp = team[teamOff].move1pp.value;
	} else if(team[teamOff] && team[teamOff].moves && team[teamOff].moves[0] && team[teamOff].moves[0].pp && team[teamOff].moves[0].pp.value) {
		move1pp = team[teamOff].moves[0].pp.value;
	}
	if(team[teamOff] && team[teamOff].move2pp && team[teamOff].move2pp.value) {
		move2pp = team[teamOff].move2pp.value;
	} else if(team[teamOff] && team[teamOff].moves && team[teamOff].moves[1] && team[teamOff].moves[1].pp && team[teamOff].moves[1].pp.value) {
		move2pp = team[teamOff].moves[1].pp.value;
	}
	if(team[teamOff] && team[teamOff].move3pp && team[teamOff].move3pp.value) {
		move3pp = team[teamOff].move3pp.value;
	} else if(team[teamOff] && team[teamOff].moves && team[teamOff].moves[2] && team[teamOff].moves[2].pp && team[teamOff].moves[2].pp.value) {
		move3pp = team[teamOff].moves[2].pp.value;
	}
	if(team[teamOff] && team[teamOff].move4pp && team[teamOff].move4pp.value) {
		move4pp = team[teamOff].move4pp.value;
	} else if(team[teamOff] && team[teamOff].moves && team[teamOff].moves[3] && team[teamOff].moves[3].pp && team[teamOff].moves[3].pp.value) {
		move4pp = team[teamOff].moves[3].pp.value;
	}
	if(team[teamOff] && team[teamOff].move1ppUp && team[teamOff].move1ppUp.value) {
		move1ppUp = team[teamOff].move1ppUp.value;
	} else if(team[teamOff] && team[teamOff].moves && team[teamOff].moves[0] && team[teamOff].moves[0].ppUp && team[teamOff].moves[0].ppUp.value) {
		move1ppUp = team[teamOff].moves[0].ppUp.value;
	}
	if(team[teamOff] && team[teamOff].move2ppUp && team[teamOff].move2ppUp.value) {
		move2ppUp = team[teamOff].move2ppUp.value;
	} else if(team[teamOff] && team[teamOff].moves && team[teamOff].moves[1] && team[teamOff].moves[1].ppUp && team[teamOff].moves[1].ppUp.value) {
		move2ppUp = team[teamOff].moves[1].ppUp.value;
	}
	if(team[teamOff] && team[teamOff].move3ppUp && team[teamOff].move3ppUp.value) {
		move3ppUp = team[teamOff].move3ppUp.value;
	} else if(team[teamOff] && team[teamOff].moves && team[teamOff].moves[2] && team[teamOff].moves[2].ppUp && team[teamOff].moves[2].ppUp.value) {
		move3ppUp = team[teamOff].moves[2].ppUp.value;
	}
	if(team[teamOff] && team[teamOff].move4ppUp && team[teamOff].move4ppUp.value) {
		move4ppUp = team[teamOff].move4ppUp.value;
	} else if(team[teamOff] && team[teamOff].moves && team[teamOff].moves[3] && team[teamOff].moves[3].ppUp && team[teamOff].moves[3].ppUp.value) {
		move4ppUp = team[teamOff].moves[3].ppUp.value;
	}
	if(team[teamOff] && team[teamOff].move1ppint && team[teamOff].move1ppint.value) {
		move1ppint = team[teamOff].move1ppint.value;
	} else if(team[teamOff] && team[teamOff].moves && team[teamOff].moves[0] && team[teamOff].moves[0].ppint && team[teamOff].moves[0].ppint.value) {
		move1ppint = team[teamOff].moves[0].ppint.value;
	}
	if(team[teamOff] && team[teamOff].move2ppint && team[teamOff].move2ppint.value) {
		move2ppint = team[teamOff].move2ppint.value;
	} else if(team[teamOff] && team[teamOff].moves && team[teamOff].moves[1] && team[teamOff].moves[1].ppint && team[teamOff].moves[1].ppint.value) {
		move2ppint = team[teamOff].moves[1].ppint.value;
	}
	if(team[teamOff] && team[teamOff].move3ppint && team[teamOff].move3ppint.value) {
		move3ppint = team[teamOff].move3ppint.value;
	} else if(team[teamOff] && team[teamOff].moves && team[teamOff].moves[2] && team[teamOff].moves[2].ppint && team[teamOff].moves[2].ppint.value) {
		move3ppint = team[teamOff].moves[2].ppint.value;
	}
	if(team[teamOff] && team[teamOff].move4ppint && team[teamOff].move4ppint.value) {
		move4ppint = team[teamOff].move4ppint.value;
	} else if(team[teamOff] && team[teamOff].moves && team[teamOff].moves[3] && team[teamOff].moves[3].ppint && team[teamOff].moves[3].ppint.value) {
		move4ppint = team[teamOff].moves[3].ppint.value;
	}
	if(team[teamOff] && team[teamOff].statExpHp && team[teamOff].statExpHp.value) {
		statExpHp = team[teamOff].statExpHp.value;
	} else if(team[teamOff] && team[teamOff].evs && team[teamOff].evs.hp && team[teamOff].evs.hp.value) {
		statExpHp = team[teamOff].evs.hp.value;
	}
	if(team[teamOff] && team[teamOff].statExpAttack && team[teamOff].statExpAttack.value) {
		statExpAttack = team[teamOff].statExpAttack.value;
	} else if(team[teamOff] && team[teamOff].evs && team[teamOff].evs.attack && team[teamOff].evs.attack.value) {
		statExpAttack = team[teamOff].evs.attack.value;
	}
	if(team[teamOff] && team[teamOff].statExpDefense && team[teamOff].statExpDefense.value) {
		statExpDefense = team[teamOff].statExpDefense.value;
	} else if(team[teamOff] && team[teamOff].evs && team[teamOff].evs.defense && team[teamOff].evs.defense.value) {
		statExpDefense = team[teamOff].evs.defense.value;
	}
	if(team[teamOff] && team[teamOff].statExpSpeed && team[teamOff].statExpSpeed.value) {
		statExpSpeed = team[teamOff].statExpSpeed.value;
	} else if(team[teamOff] && team[teamOff].evs && team[teamOff].evs.speed && team[teamOff].evs.speed.value) {
		statExpSpeed = team[teamOff].evs.speed.value;
	}
	if(team[teamOff] && team[teamOff].statExpSpecial && team[teamOff].statExpSpecial.value) {
		statExpSpecial = team[teamOff].statExpSpecial.value;
	} else if(team[teamOff] && team[teamOff].evs && team[teamOff].evs.special && team[teamOff].evs.special.value) {
		statExpSpecial = team[teamOff].evs.special.value;
	}
	if(team[teamOff] && team[teamOff].type1 && team[teamOff].type1.value) {
		type1 = team[teamOff].type1.value;
	}
	if(team[teamOff] && team[teamOff].type2 && team[teamOff].type2.value) {
		type2 = team[teamOff].type2.value;
	}
	if(team[teamOff] && team[teamOff].type1val && team[teamOff].type1val.value) {
		type1val = team[teamOff].type1val.value;
	}
	if(team[teamOff] && team[teamOff].type2val && team[teamOff].type2val.value) {
		type2val = team[teamOff].type2val.value;
	}
	if(team[teamOff] && team[teamOff].trainerId && team[teamOff].trainerId.value) {
		trainerId = team[teamOff].trainerId.value;
	}
	if(team[teamOff] && team[teamOff].catchRate && team[teamOff].catchRate.value) {
		catchRate = team[teamOff].catchRate.value;
	}
	
	var teamMember = new PlayerTeamPokemonState(nickname, species, pokedexNumber, level, expPoints, statusCondition,
												maxHp, hp, attack, defense, speed, special,
												dvAttack, dvDefense, dvSpeed, dvSpecial,
												move1, move2, move3, move4,
												move1int, move2int, move3int, move4int,
												move1pp, move2pp, move3pp, move4pp,
												move1ppUp, move2ppUp, move3ppUp, move4ppUp,
												move1ppint, move2ppint, move3ppint, move4ppint,
												statExpHp, statExpAttack, statExpDefense, statExpSpeed, statExpSpecial,
												type1, type2, type1val, type2val,
												trainerId, catchRate);
												
	teamMember.gamehook = gamehook;
	
	team[teamOff].nickname.change(async(x) => {
		if(x && (x.value || x.value === "")) {
			//console.log("onNickNameChange[", teamOff, "]:", x.value);
			teamMember.onNickNameChange(x.value);
		}
	});
	team[teamOff].species.change(async(x) => {
		if(x && (x.value || x.value === "")) {
			//console.log("onSpeciesChange[", teamOff, "]:", x.value);
			teamMember.onSpeciesChange(x.value);
		}
	});
	team[teamOff].pokedexNumber.change(async(x) => {
		if(x && (x.value || x.value === "")) {
			//console.log("onPokedexNumberChange[", teamOff, "]:", x.value);
			teamMember.onPokedexNumberChange(x.value);
		}
	});
	team[teamOff].level.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onLevelChange[", teamOff, "]:", x.value);
			teamMember.onLevelChange(x.value);
		}
	});
	team[teamOff].expPoints.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onExpPointsChange[", teamOff, "]:", x.value);
			teamMember.onExpPointsChange(x.value);
		}
	});
	team[teamOff].statusCondition.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onStatusConditionChange[", teamOff, "]:", x.value);
			teamMember.onStatusConditionChange(x.value);
		}
	});
	if(team[teamOff].maxHp) {
		team[teamOff].maxHp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMaxHpChange[", teamOff, "]:", x.value);
				teamMember.onMaxHpChange(x.value);
			}
		});
	} else if(team[teamOff].stats.maxHp) {
		team[teamOff].stats.maxHp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMaxHpChange[", teamOff, "]:", x.value);
				teamMember.onMaxHpChange(x.value);
			}
		});
	}
	if(team[teamOff].hp) {
		team[teamOff].hp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onHpChange[", teamOff, "]:", x.value);
				teamMember.onHpChange(x.value);
			}
		});
	} else if(team[teamOff].stats.hp) {
		team[teamOff].stats.hp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onHpChange[", teamOff, "]:", x.value);
				teamMember.onHpChange(x.value);
			}
		});
	}

	if(team[teamOff].attack) {
		team[teamOff].attack.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onAttackChange[", teamOff, "]:", x.value);
				teamMember.onAttackChange(x.value);
			}
		});
	} else if(team[teamOff].stats.attack) {
		team[teamOff].stats.attack.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onAttackChange[", teamOff, "]:", x.value);
				teamMember.onAttackChange(x.value);
			}
		});
	}

	if(team[teamOff].defense) {
		team[teamOff].defense.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onDefenseChange[", teamOff, "]:", x.value);
				teamMember.onDefenseChange(x.value);
			}
		});
	} else if(team[teamOff].stats.defense) {
		team[teamOff].stats.defense.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onDefenseChange[", teamOff, "]:", x.value);
				teamMember.onDefenseChange(x.value);
			}
		});
	}

	if(team[teamOff].speed) {
		team[teamOff].speed.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onSpeedChange[", teamOff, "]:", x.value);
				teamMember.onSpeedChange(x.value);
			}
		});
	} else if(team[teamOff].stats.speed) {
		team[teamOff].stats.speed.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onSpeedChange[", teamOff, "]:", x.value);
				teamMember.onSpeedChange(x.value);
			}
		});
	}

	if(team[teamOff].special) {
		team[teamOff].special.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onSpecialChange[", teamOff, "]:", x.value);
				teamMember.onSpecialChange(x.value);
			}
		});
	} else if(team[teamOff].stats.special) {
		team[teamOff].stats.special.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onSpecialChange[", teamOff, "]:", x.value);
				teamMember.onSpecialChange(x.value);
			}
		});
	}

	if(team[teamOff].dvAttack) {
		team[teamOff].dvAttack.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onDvAttackChange[", teamOff, "]:", x.value);
				teamMember.onDvAttackChange(x.value);
			}
		});
	} else if(team[teamOff].ivs.attack) {
		team[teamOff].ivs.attack.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onDvAttackChange[", teamOff, "]:", x.value);
				teamMember.onDvAttackChange(x.value);
			}
		});
	}

	if(team[teamOff].dvDefense) {
		team[teamOff].dvDefense.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onDvDefenseChange[", teamOff, "]:", x.value);
				teamMember.onDvDefenseChange(x.value);
			}
		});
	} else if(team[teamOff].ivs.defense) {
		team[teamOff].ivs.defense.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onDvDefenseChange[", teamOff, "]:", x.value);
				teamMember.onDvDefenseChange(x.value);
			}
		});
	}

	if(team[teamOff].dvSpeed) {
		team[teamOff].dvSpeed.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onDvSpeedChange[", teamOff, "]:", x.value);
				teamMember.onDvSpeedChange(x.value);
			}
		});
	} else if(team[teamOff].ivs.speed) {
		team[teamOff].ivs.speed.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onDvSpeedChange[", teamOff, "]:", x.value);
				teamMember.onDvSpeedChange(x.value);
			}
		});
	}

	if(team[teamOff].dvSpecial) {
		team[teamOff].dvSpecial.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onDvSpecialChange[", teamOff, "]:", x.value);
				teamMember.onDvSpecialChange(x.value);
			}
		});
	} else if(team[teamOff].ivs.special) {
		team[teamOff].ivs.special.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onDvSpecialChange[", teamOff, "]:", x.value);
				teamMember.onDvSpecialChange(x.value);
			}
		});
	}

	if(team[teamOff].move1) {
		team[teamOff].move1.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onMove1Change[", teamOff, "]:", x.value);
				teamMember.onMove1Change(x.value);
			}
		});
	} else if(team[teamOff].moves[0].move) {
		team[teamOff].moves[0].move.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onMove1Change[", teamOff, "]:", x.value);
				teamMember.onMove1Change(x.value);
			}
		});
	}

	if(team[teamOff].move2) {
		team[teamOff].move2.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onMove2Change[", teamOff, "]:", x.value);
				teamMember.onMove2Change(x.value);
			}
		});
	} else if(team[teamOff].moves[1].move) {
		team[teamOff].moves[1].move.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onMove2Change[", teamOff, "]:", x.value);
				teamMember.onMove2Change(x.value);
			}
		});
	}

	if(team[teamOff].move3) {
		team[teamOff].move3.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onMove3Change[", teamOff, "]:", x.value);
				teamMember.onMove3Change(x.value);
			}
		});
	} else if(team[teamOff].moves[2].move) {
		team[teamOff].moves[2].move.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onMove3Change[", teamOff, "]:", x.value);
				teamMember.onMove3Change(x.value);
			}
		});
	}

	if(team[teamOff].move4) {
		team[teamOff].move4.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onMove4Change[", teamOff, "]:", x.value);
				teamMember.onMove4Change(x.value);
			}
		});
	} else if(team[teamOff].moves[3].move) {
		team[teamOff].moves[3].move.change(async(x) => {
			if(x && (x.value || x.value === "")) {
				//console.log("onMove4Change[", teamOff, "]:", x.value);
				teamMember.onMove4Change(x.value);
			}
		});
	}

	if(team[teamOff].move1int) {
		team[teamOff].move1int.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove1intChange[", teamOff, "]:", x.value);
				teamMember.onMove1intChange(x.value);
			}
		});
	} else if(team[teamOff].moves[0].moveint) {
		team[teamOff].moves[0].moveint.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove1intChange[", teamOff, "]:", x.value);
				teamMember.onMove1intChange(x.value);
			}
		});
	}

	if(team[teamOff].move2int) {
		team[teamOff].move2int.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove2intChange[", teamOff, "]:", x.value);
				teamMember.onMove2intChange(x.value);
			}
		});
	} else if(team[teamOff].moves[1].moveint) {
		team[teamOff].moves[1].moveint.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove2intChange[", teamOff, "]:", x.value);
				teamMember.onMove2intChange(x.value);
			}
		});
	}

	if(team[teamOff].move3int) {
		team[teamOff].move3int.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove3intChange[", teamOff, "]:", x.value);
				teamMember.onMove3intChange(x.value);
			}
		});
	} else if(team[teamOff].moves[2].moveint) {
		team[teamOff].moves[2].moveint.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove3intChange[", teamOff, "]:", x.value);
				teamMember.onMove3intChange(x.value);
			}
		});
	}

	if(team[teamOff].move4int) {
		team[teamOff].move4int.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove4intChange[", teamOff, "]:", x.value);
				teamMember.onMove4intChange(x.value);
			}
		});
	} else if(team[teamOff].moves[3].moveint) {
		team[teamOff].moves[3].moveint.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove4intChange[", teamOff, "]:", x.value);
				teamMember.onMove4intChange(x.value);
			}
		});
	}

	if(team[teamOff].move1pp) {
		team[teamOff].move1pp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove1ppChange[", teamOff, "]:", x.value);
				teamMember.onMove1ppChange(x.value);
			}
		});
	} else if(team[teamOff].moves[0].pp) {
		team[teamOff].moves[0].pp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove1ppChange[", teamOff, "]:", x.value);
				teamMember.onMove1ppChange(x.value);
			}
		});
	}

	if(team[teamOff].move2pp) {
		team[teamOff].move2pp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove2ppChange[", teamOff, "]:", x.value);
				teamMember.onMove2ppChange(x.value);
			}
		});
	} else if(team[teamOff].moves[1].pp) {
		team[teamOff].moves[1].pp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove2ppChange[", teamOff, "]:", x.value);
				teamMember.onMove2ppChange(x.value);
			}
		});
	}

	if(team[teamOff].move3pp) {
		team[teamOff].move3pp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove3ppChange[", teamOff, "]:", x.value);
				teamMember.onMove3ppChange(x.value);
			}
		});
	} else if(team[teamOff].moves[2].pp) {
		team[teamOff].moves[2].pp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove3ppChange[", teamOff, "]:", x.value);
				teamMember.onMove3ppChange(x.value);
			}
		});
	}

	if(team[teamOff].move4pp) {
		team[teamOff].move4pp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove4ppChange[", teamOff, "]:", x.value);
				teamMember.onMove4ppChange(x.value);
			}
		});
	} else if(team[teamOff].moves[3].pp) {
		team[teamOff].moves[3].pp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove4ppChange[", teamOff, "]:", x.value);
				teamMember.onMove4ppChange(x.value);
			}
		});
	}

	if(team[teamOff].move1ppUp) {
		team[teamOff].move1ppUp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove1ppUpChange[", teamOff, "]:", x.value);
				teamMember.onMove1ppUpChange(x.value);
			}
		});
	} else if(team[teamOff].moves[0].ppUp) {
		team[teamOff].moves[0].ppUp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove1ppUpChange[", teamOff, "]:", x.value);
				teamMember.onMove1ppUpChange(x.value);
			}
		});
	}

	if(team[teamOff].move2ppUp) {
		team[teamOff].move2ppUp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove2ppUpChange[", teamOff, "]:", x.value);
				teamMember.onMove2ppUpChange(x.value);
			}
		});
	} else if(team[teamOff].moves[1].ppUp) {
		team[teamOff].moves[1].ppUp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove2ppUpChange[", teamOff, "]:", x.value);
				teamMember.onMove2ppUpChange(x.value);
			}
		});
	}

	if(team[teamOff].move3ppUp) {
		team[teamOff].move3ppUp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove3ppUpChange[", teamOff, "]:", x.value);
				teamMember.onMove3ppUpChange(x.value);
			}
		});
	} else if(team[teamOff].moves[2].ppUp) {
		team[teamOff].moves[2].ppUp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove3ppUpChange[", teamOff, "]:", x.value);
				teamMember.onMove3ppUpChange(x.value);
			}
		});
	}

	if(team[teamOff].move4ppUp) {
		team[teamOff].move4ppUp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove4ppUpChange[", teamOff, "]:", x.value);
				teamMember.onMove4ppUpChange(x.value);
			}
		});
	} else if(team[teamOff].moves[3].ppUp) {
		team[teamOff].moves[3].ppUp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove4ppUpChange[", teamOff, "]:", x.value);
				teamMember.onMove4ppUpChange(x.value);
			}
		});
	}

	if(team[teamOff].move1ppint) {
		team[teamOff].move1ppint.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove1ppintChange[", teamOff, "]:", x.value);
				teamMember.onMove1ppintChange(x.value);
			}
		});
	} else if(team[teamOff].moves[0].ppint) {
		team[teamOff].moves[0].ppint.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove1ppintChange[", teamOff, "]:", x.value);
				teamMember.onMove1ppintChange(x.value);
			}
		});
	}

	if(team[teamOff].move2ppint) {
		team[teamOff].move2ppint.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove2ppintChange[", teamOff, "]:", x.value);
				teamMember.onMove2ppintChange(x.value);
			}
		});
	} else if(team[teamOff].moves[1].ppint) {
		team[teamOff].moves[1].ppint.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove2ppintChange[", teamOff, "]:", x.value);
				teamMember.onMove2ppintChange(x.value);
			}
		});
	}

	if(team[teamOff].move3ppint) {
		team[teamOff].move3ppint.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove3ppintChange[", teamOff, "]:", x.value);
				teamMember.onMove3ppintChange(x.value);
			}
		});
	} else if(team[teamOff].moves[2].ppint) {
		team[teamOff].moves[2].ppint.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove3ppintChange[", teamOff, "]:", x.value);
				teamMember.onMove3ppintChange(x.value);
			}
		});
	}

	if(team[teamOff].move4ppint) {
		team[teamOff].move4ppint.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove4ppintChange[", teamOff, "]:", x.value);
				teamMember.onMove4ppintChange(x.value);
			}
		});
	} else if(team[teamOff].moves[3].ppint) {
		team[teamOff].moves[3].ppint.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onMove4ppintChange[", teamOff, "]:", x.value);
				teamMember.onMove4ppintChange(x.value);
			}
		});
	}

	if(team[teamOff].statExpHp) {
		team[teamOff].statExpHp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onStatExpHpChange[", teamOff, "]:", x.value);
				teamMember.onStatExpHpChange(x.value);
			}
		});
	} else if(team[teamOff].evs.hp) {
		team[teamOff].evs.hp.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onStatExpHpChange[", teamOff, "]:", x.value);
				teamMember.onStatExpHpChange(x.value);
			}
		});
	}

	if(team[teamOff].statExpAttack) {
		team[teamOff].statExpAttack.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onStatExpAttackChange[", teamOff, "]:", x.value);
				teamMember.onStatExpAttackChange(x.value);
			}
		});
	} else if(team[teamOff].evs.attack) {
		team[teamOff].evs.attack.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onStatExpAttackChange[", teamOff, "]:", x.value);
				teamMember.onStatExpAttackChange(x.value);
			}
		});
	}

	if(team[teamOff].statExpDefense) {
		team[teamOff].statExpDefense.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onStatExpDefenseChange[", teamOff, "]:", x.value);
				teamMember.onStatExpDefenseChange(x.value);
			}
		});
	} else if(team[teamOff].evs.defense) {
		team[teamOff].evs.defense.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onStatExpDefenseChange[", teamOff, "]:", x.value);
				teamMember.onStatExpDefenseChange(x.value);
			}
		});
	}

	if(team[teamOff].statExpSpeed) {
		team[teamOff].statExpSpeed.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onStatExpSpeedChange[", teamOff, "]:", x.value);
				teamMember.onStatExpSpeedChange(x.value);
			}
		});
	} else if(team[teamOff].evs.speed) {
		team[teamOff].evs.speed.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onStatExpSpeedChange[", teamOff, "]:", x.value);
				teamMember.onStatExpSpeedChange(x.value);
			}
		});
	}

	if(team[teamOff].statExpSpecial) {
		team[teamOff].statExpSpecial.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onStatExpSpecialChange[", teamOff, "]:", x.value);
				teamMember.onStatExpSpecialChange(x.value);
			}
		});
	} else if(team[teamOff].evs.special) {
		team[teamOff].evs.special.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onStatExpSpecialChange[", teamOff, "]:", x.value);
				teamMember.onStatExpSpecialChange(x.value);
			}
		});
	}

	team[teamOff].type1.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onType1Change[", teamOff, "]:", x.value);
			teamMember.onType1Change(x.value);
		}
	});
	team[teamOff].type2.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onType2Change[", teamOff, "]:", x.value);
			teamMember.onType2Change(x.value);
		}
	});
	team[teamOff].type1val.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onType1valChange[", teamOff, "]:", x.value);
			teamMember.onType1valChange(x.value);
		}
	});
	team[teamOff].type2val.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onType2valChange[", teamOff, "]:", x.value);
			teamMember.onType2valChange(x.value);
		}
	});

	team[teamOff].trainerId.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onTrainerIdChange[", teamOff, "]:", x.value);
			teamMember.onTrainerIdChange(x.value);
		}
	});
	team[teamOff].catchRate.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onCatchRateChange[", teamOff, "]:", x.value);
			teamMember.onCatchRateChange(x.value);
		}
	});

	return teamMember;
};

//PlayerTeamPokemonState.static = null;
//PlayerTeamPokemonState.staticMethod = function() {
//};
PlayerTeamPokemonState.prototype.onNickNameChange = function (newNickname) {
	this.nickname = newNickname;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onSpeciesChange = function (newSpecies) {
	this.species = newSpecies;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onPokedexNumberChange = function (newPokedexNumber) {
	this.pokedexNumber = newPokedexNumber;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onLevelChange = function (newLevel) {
	this.level = newLevel;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onExpPointsChange = function (newExpPoints) {
	this.expPoints = newExpPoints;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onStatusConditionChange = function (newStatusCondition) {
	this.statusCondition = newStatusCondition;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onMaxHpChange = function (newMaxHp) {
	this.maxHp = newMaxHp;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onHpChange = function (newHp) {
	this.hp = newHp;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onAttackChange = function (newAttack) {
	this.attack = newAttack;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onDefenseChange = function (newDefense) {
	this.defense = newDefense;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onSpeedChange = function (newSpeed) {
	this.speed = newSpeed;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onSpecialChange = function (newSpecial) {
	this.special = newSpecial;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onDvAttackChange = function (newDvAttack) {
	this.dvAttack = newDvAttack;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onDvDefenseChange = function (newDvDefense) {
	this.dvDefense = newDvDefense;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onDvSpeedChange = function (newDvSpeed) {
	this.dvSpeed = newDvSpeed;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onDvSpecialChange = function (newDvSpecial) {
	this.dvSpecial = newDvSpecial;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onMove1Change = function (newMove1) {
	this.move1 = newMove1;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onMove2Change = function (newMove2) {
	this.move2 = newMove2;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onMove3Change = function (newMove3) {
	this.move3 = newMove3;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onMove4Change = function (newMove4) {
	this.move4 = newMove4;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onMove1intChange = function (newMove1int) {
	this.move1int = newMove1int;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onMove2intChange = function (newMove2int) {
	this.move2int = newMove2int;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onMove3intChange = function (newMove3int) {
	this.move3int = newMove3int;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onMove4intChange = function (newMove4int) {
	this.move4int = newMove4int;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onMove1ppChange = function (newMove1pp) {
	this.move1pp = newMove1pp;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onMove2ppChange = function (newMove2pp) {
	this.move2pp = newMove2pp;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onMove3ppChange = function (newMove3pp) {
	this.move3pp = newMove3pp;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onMove4ppChange = function (newMove4pp) {
	this.move4pp = newMove4pp;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onMove1ppUpChange = function (newMove1ppUp) {
	this.move1ppUp = newMove1ppUp;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onMove2ppUpChange = function (newMove2ppUp) {
	this.move2ppUp = newMove2ppUp;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onMove3ppUpChange = function (newMove3ppUp) {
	this.move3ppUp = newMove3ppUp;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onMove4ppUpChange = function (newMove4ppUp) {
	this.move4ppUp = newMove4ppUp;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onMove1ppintChange = function (newMove1ppint) {
	this.move1ppint = newMove1ppint;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onMove2ppintChange = function (newMove2ppint) {
	this.move2ppint = newMove2ppint;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onMove3ppintChange = function (newMove3ppint) {
	this.move3ppint = newMove3ppint;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onMove4ppintChange = function (newMove4ppint) {
	this.move4ppint = newMove4ppint;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onStatExpHpChange = function (newStatExpHp) {
	this.statExpHp = newStatExpHp;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onStatExpAttackChange = function (newStatExpAttack) {
	this.statExpAttack = newStatExpAttack;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onStatExpDefenseChange = function (newStatExpDefense) {
	this.statExpDefense = newStatExpDefense;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onStatExpSpeedChange = function (newStatExpSpeed) {
	this.statExpSpeed = newStatExpSpeed;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onStatExpSpecialChange = function (newStatExpSpecial) {
	this.statExpSpecial = newStatExpSpecial;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onType1Change = function (newType1) {
	this.type1 = newType1;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onType2Change = function (newType2) {
	this.type2 = newType2;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onType1valChange = function (newType1val) {
	this.type1val = newType1val;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onType2valChange = function (newType2val) {
	this.type2val = newType2val;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onTrainerIdChange = function (newTrainerId) {
	this.trainerId = newTrainerId;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.onCatchRateChange = function (newCatchRate) {
	this.catchRate = newCatchRate;

	this.listeners.forEach((listener) => {
		listener.onTeamChange(this);
	});
};

PlayerTeamPokemonState.prototype.listen = function (obj) {
	this.listeners.push(obj);
};

(function () {
  // Static initialization code
})();