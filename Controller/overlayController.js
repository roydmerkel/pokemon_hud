function OverlayController(overlayView, state) {
	this.connected = false;
	this.mapper = null;
	this.overlayView = overlayView;
	this.state = state;
	this.playerState = null;
	this.bagState = null;
	this.mapState = null;
	this.battleState = null;
	this.rivalState = null;
	this.eventsState = null;
	this.audioState = null;
	this.screenState = null;
	this.gameTimeState = null;
	this.inBattle = false;
	this.lastBattleType = "None";
	this.lastBattleSpecialType = "Normal";
	
	this.playerStateUpdateTimeoutId = null;
	this.battleStateUpdateTimeoutId = null;

	if(!this.state.hasProperty("resets")) {
		this.state.setProperty("resets", -1);
	}

	if(!this.state.hasProperty("battles")) {
		this.state.setProperty("battles", -1);
	}

	if(!this.state.hasProperty("runtime")) {
		this.state.setProperty("runtime", "0");
	} else if(!parseFloat(this.state.getProperty("runtime"))) {
		this.state.setProperty("runtime", "0");
	}
	
	var resets = this.state.getProperty("resets");
	var battles = this.state.getProperty("battles");

	overlayView.setResetCount(resets);
	overlayView.setBattleCount(battles);
	
	this.now = new Date().getTime();
	
	setInterval((function(self) {
		return function() {
			self.onRuntimeTick();
		};
	})(this), 10);

	try {
		this.mapper = new GameHookMapperClient();
	} catch(exception) {
		this.mapper = null;
	}

	// Establish a connection to GameHook.
	this.initGamehook();
}

OverlayController.prototype.onCurrentSoundChange = async function(x) {
	if(x.currentSound == 156) { // shrink sound effect
		var map = this.mapState.map;
		if(map && map == "Pallet Town - Red's House 2F") {
			console.log("new game!");
			this.state.setProperty("resets", 0);
			this.state.setProperty("battles", 0);

			overlayView.setResetCount(0);
			overlayView.setBattleCount(0);
			
			this.now = new Date().getTime();
			this.state.setProperty("runtime", "0");
		}
	}

	if(x.currentSound == 194) { // shooting star sound effect.
		var map = this.mapState.map;
		//var loadedROMBank = (this.mapper && this.mapper.properties && this.mapper.properties.other && this.mapper.properties.other.loadedROMBank && this.mapper.properties.other.loadedROMBank.value) ? this.mapper.properties.other.loadedROMBank.value : null;

		//if(loadedROMBank && (loadedROMBank == 28 || loadedROMBank == 30)) {
		if(map && map == "Pallet Town") {
			console.log("reset!");

			var resets = this.state.getProperty("resets");
			resets++;
			this.state.setProperty("resets", resets);

			overlayView.setResetCount(resets);
		}
	}
};

OverlayController.prototype.initGamehook = async function() {
	try {
		if(this.mapper != null) {
			await this.mapper.connect()
			this.connected = true;
		}
	} catch(exception) {
	}

	if(this.connected) {
		this.playerState = PlayerState.ConstructPlayerStateFromGamehook(this.mapper);
		this.bagState = BagState.ConstructBagStateFromGamehook(this.mapper);
		this.mapState = MapState.ConstructMapStateFromGamehook(this.mapper);
		this.battleState = BattleState.ConstructBattleStateFromGamehook(this.mapper);
		this.rivalState = RivalState.ConstructRivalStateFromGamehook(this.mapper);
		this.eventsState = EventsState.ConstructEventsStateFromGamehook(this.mapper);
		this.audioState = AudioState.ConstructAudioStateFromGamehook(this.mapper);
		this.screenState = ScreenState.ConstructScreenStateFromGamehook(this.mapper);
		this.gameTimeState = GameTimeState.ConstructGameTimeStateFromGamehook(this.mapper);
		
		this.audioState.listen(this);
		this.playerState.listen(this);
		this.battleState.listen(this);
		this.gameTimeState.listen(this);
	}
};

OverlayController.prototype.onAudioStateChange = async function(obj) {
	//console.log("onAudioStateChange");
};

OverlayController.prototype.onPlayerStateChange = async function(obj) {
	//console.log("onPlayerStateChange", ":", obj);
	if(this.playerStateUpdateTimeoutId === null) {
		this.playerStateUpdateTimeoutId = setTimeout((function(self) {
			return function() {
				self.playerStateUpdateTimeoutId = null;
				self.onPlayerStateUpdate();
			};
		})(this), 500);
	}
};

OverlayController.prototype.onBattleStateChange = async function(obj) {
	//console.log("onBattleStateChange", ":", obj);
	if(this.battleStateUpdateTimeoutId === null) {
		this.battleStateUpdateTimeoutId = setTimeout((function(self) {
			return function() {
				self.battleStateUpdateTimeoutId = null;
				self.onBattleStateUpdate();
			};
		})(this), 500);
	}
};

OverlayController.prototype.onPlayerStateUpdate = async function() {
	console.log("player state:", this.playerState);
	if(await this.isInBattle()) {
		this.displayBattleState();
	} else {
		this.displayOverworldState();
	}
};

OverlayController.prototype.onBattleStateUpdate = async function() {
	console.log("battle state:", this.battleState);
	if(await this.isInBattle()) {
		this.displayBattleState();
	} else {
		this.displayOverworldState();
	}
};

OverlayController.prototype.isInBattle = async function() {
	return (this.battleState.battleStart > 0 || this.battleState.specialType === "Oak Catching Starter") && this.battleState.trainerDefeated <= 0 && this.battleState.type != "None" && this.battleState.type != "Lost Battle";
};

OverlayController.prototype.displayBattleState = async function() {
	console.log("battle state.");
	
	var teamCount = 1;
	
	if(!this.inBattle) {
		console.log("set in battle.");
		if(this.battleState.animationTurn === "Player") {
			this.inBattle = true;
			this.lastBattleType = this.battleState.type;
			this.lastBattleSpecialType = this.battleState.specialType;
			if(this.lastBattleSpecialType === "Normal" || this.lastBattleSpecialType === "Safari Zone") {
		
				var battles = this.state.getProperty("battles");
				battles++;
				this.state.setProperty("battles", battles);

				overlayView.setBattleCount(battles);
			}
		} else {
			teamCount = 0;
		}
	}
	if(this.battleState.specialType === "Oak Catching Starter") {
		teamCount = 0; // hack for oak fight to prevent 'M from rendering
	}
	
	overlayView.setEnemyTrainerImage(this.battleState.type, this.battleState.specialType, this.battleState.curOpponent);
	overlayView.setEnemyPokemonImage(this.battleState.type, this.battleState.specialType, this.battleState.curOpponent, this.battleState.enemyPokemon.pokedexNumber);

	var pokedexNumber = this.battleState.playerPokemon.pokedexNumber;
	var nickname = this.battleState.playerPokemon.nickname;
	overlayView.setPlayerPokemonImage(teamCount, this.battleState.playerPokemon.pokedexNumber);
	overlayView.setPlayerPokemonMoves(teamCount, this.battleState.playerPokemon.pokedexNumber);
	overlayView.setPlayerPokemonSpecies(teamCount, SpeciesNameLookup[this.battleState.playerPokemon.pokedexNumber]);
	overlayView.setPlayerPokemonFirstType(teamCount, PokemonStatsLookup[this.battleState.playerPokemon.pokedexNumber].types[0]);
	overlayView.setPlayerPokemonSecondType(teamCount, PokemonStatsLookup[this.battleState.playerPokemon.pokedexNumber].types[1]);
	overlayView.setPlayerBaseHP(PokemonStatsLookup[this.battleState.playerPokemon.pokedexNumber].base_stats.hp);
	overlayView.setPlayerBaseAtk(PokemonStatsLookup[this.battleState.playerPokemon.pokedexNumber].base_stats.atk);
	overlayView.setPlayerBaseDef(PokemonStatsLookup[this.battleState.playerPokemon.pokedexNumber].base_stats.def);
	overlayView.setPlayerBaseSpc(PokemonStatsLookup[this.battleState.playerPokemon.pokedexNumber].base_stats.spd);
	overlayView.setPlayerBaseSpd(PokemonStatsLookup[this.battleState.playerPokemon.pokedexNumber].base_stats.spc);
	
	overlayView.setPlayerCurLvl(this.battleState.playerPokemon.level);
	overlayView.setPlayerCurHP(this.battleState.playerPokemon.battleStatHp, this.battleState.playerPokemon.battleStatMaxHp);
	overlayView.setPlayerCurAtk(this.battleState.playerPokemon.battleStatAttack);
	overlayView.setPlayerCurDef(this.battleState.playerPokemon.battleStatDefense);
	overlayView.setPlayerCurSpc(this.battleState.playerPokemon.battleStatSpecial);
	overlayView.setPlayerCurSpd(this.battleState.playerPokemon.battleStatSpeed);
	
	overlayView.setPlayerPokemonMove(teamCount, 0, this.battleState.playerPokemon.move1int, this.battleState.playerPokemon.move1ppint % 64);
	overlayView.setPlayerPokemonMove(teamCount, 1, this.battleState.playerPokemon.move2int, this.battleState.playerPokemon.move2ppint % 64);
	overlayView.setPlayerPokemonMove(teamCount, 2, this.battleState.playerPokemon.move3int, this.battleState.playerPokemon.move3ppint % 64);
	overlayView.setPlayerPokemonMove(teamCount, 3, this.battleState.playerPokemon.move4int, this.battleState.playerPokemon.move4ppint % 64);
		
	overlayView.setPlayerPokemonNickname(teamCount, nickname);
	
	overlayView.setPlayerHPModifier(0);
	overlayView.setPlayerAtkModifier(this.battleState.playerPokemon.modStageAttack);
	overlayView.setPlayerDefModifier(this.battleState.playerPokemon.modStageDefense);
	overlayView.setPlayerSpcModifier(this.battleState.playerPokemon.modStageSpecial);
	overlayView.setPlayerSpdModifier(this.battleState.playerPokemon.modStageSpeed);
	overlayView.setPlayerEvaModifier(this.battleState.playerPokemon.modStageEvasion);
	overlayView.setPlayerAccModifier(this.battleState.playerPokemon.modStageAccuracy);
	
	overlayView.setEnemyPokemonSpecies(this.battleState.type, SpeciesNameLookup[this.battleState.enemyPokemon.pokedexNumber]);
	overlayView.setEnemyPokemonFirstType(this.battleState.type, this.battleState.enemyPokemon.type1);
	overlayView.setEnemyPokemonSecondType(this.battleState.type, this.battleState.enemyPokemon.type2);
	
	overlayView.setEnemyBaseHP(PokemonStatsLookup[this.battleState.enemyPokemon.pokedexNumber].base_stats.hp);
	overlayView.setEnemyBaseAtk(PokemonStatsLookup[this.battleState.enemyPokemon.pokedexNumber].base_stats.atk);
	overlayView.setEnemyBaseDef(PokemonStatsLookup[this.battleState.enemyPokemon.pokedexNumber].base_stats.def);
	overlayView.setEnemyBaseSpc(PokemonStatsLookup[this.battleState.enemyPokemon.pokedexNumber].base_stats.spd);
	overlayView.setEnemyBaseSpd(PokemonStatsLookup[this.battleState.enemyPokemon.pokedexNumber].base_stats.spc);
	
	overlayView.setEnemyHPModifier(0);
	overlayView.setEnemyAtkModifier(this.battleState.enemyPokemon.modEnemyStageAttack);
	overlayView.setEnemyDefModifier(this.battleState.enemyPokemon.modEnemyStageDefense);
	overlayView.setEnemySpcModifier(this.battleState.enemyPokemon.modEnemyStageSpecial);
	overlayView.setEnemySpdModifier(this.battleState.enemyPokemon.modEnemyStageSpeed);
	overlayView.setEnemyEvaModifier(this.battleState.enemyPokemon.modEnemyStageEvasion);
	overlayView.setEnemyAccModifier(this.battleState.enemyPokemon.modEnemyStageAccuracy);
	
	overlayView.setEnemyCurLvl(this.battleState.enemyPokemon.level);
	overlayView.setEnemyCurHP(this.battleState.enemyPokemon.hp, this.battleState.enemyPokemon.maxHp);
	overlayView.setEnemyCurAtk(this.battleState.enemyPokemon.attack);
	overlayView.setEnemyCurDef(this.battleState.enemyPokemon.defense);
	overlayView.setEnemyCurSpc(this.battleState.enemyPokemon.special);
	overlayView.setEnemyCurSpd(this.battleState.enemyPokemon.speed);
	
	overlayView.setEnemyPokemonMove(0, 0, this.battleState.enemyPokemon.move1int);
	overlayView.setEnemyPokemonMove(0, 1, this.battleState.enemyPokemon.move2int);
	overlayView.setEnemyPokemonMove(0, 2, this.battleState.enemyPokemon.move3int);
	overlayView.setEnemyPokemonMove(0, 3, this.battleState.enemyPokemon.move4int);
	
	overlayView.setBattleState(this.battleState.type);
};

OverlayController.prototype.displayOverworldState = async function() {
	if(this.inBattle) {
		if(this.lastBattleType != "None" && this.lastBattleType != "Lost Battle" && (this.lastBattleSpecialType === "Normal" || this.lastBattleSpecialType === "Safari Zone")) {
			if(this.battleState.battleResult == "Draw" || // caught pokemon, the opponent fleeing or you fleeing
			  (this.battleState.battleResult == "Win" && this.mapState.map && this.mapState.map === "Pallet Town")) { // reset
				var battles = this.state.getProperty("battles");
				battles--;
				this.state.setProperty("battles", battles);

				overlayView.setBattleCount(battles);
			}
		}
		this.lastBattleType = "None";
		this.lastBattleSpecialType = "Normal";
		this.inBattle = false;
	}
	
	this.inBattle = false;
	var teamCount = this.playerState.teamCount;
	if(teamCount > 0 && this.playerState.team[0].hp && this.playerState.team[0].maxHp) {
		// hp and maxHP != 0 check is hack for pikachu gift (durring message teamCount is set to > 0, but stats are't initialized.
		var teamMember = this.playerState.team[0];
		var pokedexNumber = teamMember.pokedexNumber;
		
		overlayView.setPlayerPokemonImage(teamCount, pokedexNumber);
		overlayView.setPlayerPokemonMoves(teamCount, pokedexNumber);
		overlayView.setPlayerPokemonSpecies(teamCount, SpeciesNameLookup[pokedexNumber]);
		overlayView.setPlayerPokemonFirstType(teamCount, PokemonStatsLookup[pokedexNumber].types[0]);
		overlayView.setPlayerPokemonSecondType(teamCount, PokemonStatsLookup[pokedexNumber].types[1]);
		overlayView.setPlayerBaseHP(PokemonStatsLookup[pokedexNumber].base_stats.hp);
		overlayView.setPlayerBaseAtk(PokemonStatsLookup[pokedexNumber].base_stats.atk);
		overlayView.setPlayerBaseDef(PokemonStatsLookup[pokedexNumber].base_stats.def);
		overlayView.setPlayerBaseSpc(PokemonStatsLookup[pokedexNumber].base_stats.spd);
		overlayView.setPlayerBaseSpd(PokemonStatsLookup[pokedexNumber].base_stats.spc);
		overlayView.setPlayerPokemonNickname(teamCount, teamMember.nickname);
		
		overlayView.setPlayerPokemonMove(teamCount, 0, teamMember.move1int, teamMember.move1ppint % 64);
		overlayView.setPlayerPokemonMove(teamCount, 1, teamMember.move2int, teamMember.move2ppint % 64);
		overlayView.setPlayerPokemonMove(teamCount, 2, teamMember.move3int, teamMember.move3ppint % 64);
		overlayView.setPlayerPokemonMove(teamCount, 3, teamMember.move4int, teamMember.move4ppint % 64);
		
		overlayView.setPlayerCurLvl(teamMember.level);
		overlayView.setPlayerCurHP(teamMember.hp, teamMember.maxHp);
		overlayView.setPlayerCurAtk(teamMember.attack);
		overlayView.setPlayerCurDef(teamMember.defense);
		overlayView.setPlayerCurSpc(teamMember.special);
		overlayView.setPlayerCurSpd(teamMember.speed);
	} else {
		overlayView.setPlayerPokemonImage(0, 0);
		overlayView.setPlayerPokemonMoves(0, 0);
		overlayView.setPlayerPokemonSpecies(0, "");
		overlayView.setPlayerPokemonFirstType(0, -1);
		overlayView.setPlayerPokemonSecondType(0, -1);
		overlayView.setPlayerBaseHP(0);
		overlayView.setPlayerBaseAtk(0);
		overlayView.setPlayerBaseDef(0);
		overlayView.setPlayerBaseSpc(0);
		overlayView.setPlayerBaseSpd(0);
		overlayView.setPlayerPokemonNickname(0, "");
		
		overlayView.setPlayerPokemonMove(0, 0, -1, -1);
		overlayView.setPlayerPokemonMove(0, 1, -1, -1);
		overlayView.setPlayerPokemonMove(0, 2, -1, -1);
		overlayView.setPlayerPokemonMove(0, 3, -1, -1);
		
		overlayView.setPlayerCurLvl(0);
		overlayView.setPlayerCurHP(0, 0);
		overlayView.setPlayerCurAtk(0);
		overlayView.setPlayerCurDef(0);
		overlayView.setPlayerCurSpc(0);
		overlayView.setPlayerCurSpd(0);
	}
	overlayView.setPlayerHPModifier(0);
	overlayView.setPlayerAtkModifier(0);
	overlayView.setPlayerDefModifier(0);
	overlayView.setPlayerSpcModifier(0);
	overlayView.setPlayerSpdModifier(0);
	overlayView.setPlayerEvaModifier(0);
	overlayView.setPlayerAccModifier(0);
	
	console.log("overworld state.");
	overlayView.setBattleState("None");
	overlayView.setEnemyTrainerImage("None", "Normal", "");
	overlayView.setEnemyPokemonImage("None", "Normal", 0, 0);
	overlayView.setEnemyBaseHP(0);
	overlayView.setEnemyBaseAtk(0);
	overlayView.setEnemyBaseDef(0);
	overlayView.setEnemyBaseSpc(0);
	overlayView.setEnemyBaseSpd(0);
	
	overlayView.setEnemyHPModifier(0);
	overlayView.setEnemyAtkModifier(0);
	overlayView.setEnemyDefModifier(0);
	overlayView.setEnemySpcModifier(0);
	overlayView.setEnemySpdModifier(0);
	overlayView.setEnemyEvaModifier(0);
	overlayView.setEnemyAccModifier(0);
	
	overlayView.setEnemyCurLvl(0);
	overlayView.setEnemyCurHP(0, 0);
	overlayView.setEnemyCurAtk(0);
	overlayView.setEnemyCurDef(0);
	overlayView.setEnemyCurSpc(0);
	overlayView.setEnemyCurSpd(0);
	
	overlayView.setEnemyPokemonMove(0, 0, -1);
	overlayView.setEnemyPokemonMove(0, 1, -1);
	overlayView.setEnemyPokemonMove(0, 2, -1);
	overlayView.setEnemyPokemonMove(0, 3, -1);
};

OverlayController.prototype.onRuntimeTick = function() {
	var now = new Date().getTime();
	var curRuntime = parseFloat(this.state.getProperty("runtime"));
	var runtimediff = (now - this.now);
	var runtime = curRuntime + runtimediff;
	this.state.setProperty("runtime", runtime.toString());
	
	this.now = now;
	
	overlayView.setPlayTime(runtime.toString());
};

OverlayController.prototype.onGameTimeStateChange = function() {
	var gameTimeState = this.gameTimeState;
	var gametimems = gameTimeState.hours * 60 * 60 * 1000 + gameTimeState.minutes * 60 * 1000 + gameTimeState.seconds * 1000 + Math.trunc(gameTimeState.frames * 1000 / 60);
	
	overlayView.setGameTime(gametimems);
};