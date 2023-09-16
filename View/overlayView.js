function OverlayView() {
	if (!String.prototype.isInList) {
		Object.defineProperty(String.prototype, 'isInList', {
			get: () => function(...args) {
				let value = this.valueOf();
				for (let i = 0, l = args.length; i < l; i += 1) {
					if (arguments[i] === value) return true;
				}
				return false;
			}
		});
	}

	this.left_panel = document.getElementById("left_panel");
	this.current_pokemon = ElementUtils.getChildById(this.left_panel, "current_pokemon");
	this.pokemon_image = ElementUtils.getChildById(this.current_pokemon, "pokemon_image");
	this.pokemon_image_reference = ElementUtils.getChildById(this.current_pokemon, "pokemon_image_reference");
	this.pokemon_species_name = ElementUtils.getChildById(this.current_pokemon, "pokemon_species_name");
	this.pokemon_nickname = ElementUtils.getChildById(this.current_pokemon, "pokemon_nickname");
	this.pokemon_first_type = ElementUtils.getChildById(this.current_pokemon, "pokemon_first_type");
	this.pokemon_second_type = ElementUtils.getChildById(this.current_pokemon, "pokemon_second_type");
	this.pokemon_first_type_text = ElementUtils.getChildById(this.current_pokemon, "pokemon_first_type_text");
	this.pokemon_second_type_text = ElementUtils.getChildById(this.current_pokemon, "pokemon_second_type_text");
	
	this.pokemon_stats = ElementUtils.getChildById(this.left_panel, "pokemon-stats");
	this.pokemon_stats_lvl_th = ElementUtils.getChildById(this.pokemon_stats, "pokemon-stats-lvl-th");
	
	this.pokemon_stats_hp_tr = ElementUtils.getChildById(this.pokemon_stats, "pokemon-stats-hp-tr");
	this.pokemon_stats_hp_val = ElementUtils.getChildById(this.pokemon_stats_hp_tr, "pokemon-stats-hp-val");
	this.pokemon_stats_hp_button = ElementUtils.getChildById(this.pokemon_stats_hp_tr, "pokemon-stats-hp-button");
	this.pokemon_stats_hp_modifier = ElementUtils.getChildById(this.pokemon_stats_hp_tr, "pokemon-stats-hp-modifier");
	
	this.pokemon_stats_att_tr = ElementUtils.getChildById(this.pokemon_stats, "pokemon-stats-att-tr");
	this.pokemon_stats_att_val = ElementUtils.getChildById(this.pokemon_stats_att_tr, "pokemon-stats-att-val");
	this.pokemon_stats_att_button = ElementUtils.getChildById(this.pokemon_stats_att_tr, "pokemon-stats-att-button");
	this.pokemon_stats_att_modifier = ElementUtils.getChildById(this.pokemon_stats_att_tr, "pokemon-stats-att-modifier");

	this.pokemon_stats_def_tr = ElementUtils.getChildById(this.pokemon_stats, "pokemon-stats-def-tr");
	this.pokemon_stats_def_val = ElementUtils.getChildById(this.pokemon_stats_def_tr, "pokemon-stats-def-val");
	this.pokemon_stats_def_button = ElementUtils.getChildById(this.pokemon_stats_def_tr, "pokemon-stats-def-button");
	this.pokemon_stats_def_modifier = ElementUtils.getChildById(this.pokemon_stats_def_tr, "pokemon-stats-def-modifier");
		
	this.pokemon_stats_spc_tr = ElementUtils.getChildById(this.pokemon_stats, "pokemon-stats-spc-tr");
	this.pokemon_stats_spc_val = ElementUtils.getChildById(this.pokemon_stats_spc_tr, "pokemon-stats-spc-val");
	this.pokemon_stats_spc_button = ElementUtils.getChildById(this.pokemon_stats_spc_tr, "pokemon-stats-spc-button");
	this.pokemon_stats_spc_modifier = ElementUtils.getChildById(this.pokemon_stats_spc_tr, "pokemon-stats-spc-modifier");
	
	this.pokemon_stats_spd_tr = ElementUtils.getChildById(this.pokemon_stats, "pokemon-stats-spd-tr");
	this.pokemon_stats_spd_val = ElementUtils.getChildById(this.pokemon_stats_spd_tr, "pokemon-stats-spd-val");
	this.pokemon_stats_spd_button = ElementUtils.getChildById(this.pokemon_stats_spd_tr, "pokemon-stats-spd-button");
	this.pokemon_stats_spd_modifier = ElementUtils.getChildById(this.pokemon_stats_spd_tr, "pokemon-stats-spd-modifier");
		
	this.pokemon_stats_crit_val = ElementUtils.getChildById(this.pokemon_stats_spd_button, "pokemon-stats-crit-val");

	this.pokemon_stats_acc_eva_tr = ElementUtils.getChildById(this.pokemon_stats, "pokemon-stats-acc-eva-tr");
	this.pokemon_stats_eva_modifier = ElementUtils.getChildById(this.pokemon_stats_acc_eva_tr, "pokemon-stats-eva-modifier");
	this.pokemon_stats_acc_modifier = ElementUtils.getChildById(this.pokemon_stats_acc_eva_tr, "pokemon-stats-acc-modifier");

	this.pokemon_cur_moves = ElementUtils.getChildById(this.left_panel, "pokemon_cur_moves");
	this.pokemon_cur_moves_tbody = ElementUtils.getChildByTag(this.pokemon_cur_moves, "tbody");
	this.pokemon_cur_moves_trs = ElementUtils.getChildrenByTag(this.pokemon_cur_moves_tbody, "tr");
	this.pokemon_cur_moves_trs_tds = new Array(this.pokemon_cur_moves_trs.length);
	for(var i = 0; i < this.pokemon_cur_moves_trs.length; i++)
	{
		this.pokemon_cur_moves_trs_tds[i] = ElementUtils.getChildrenByTag(this.pokemon_cur_moves_trs[i], "td");
	}
	
	this.badge_images = new Array(8);
	this.badge_images[0] = ElementUtils.getChildById(this.left_panel, "badge-1-image");
	this.badge_images[1] = ElementUtils.getChildById(this.left_panel, "badge-2-image");
	this.badge_images[2] = ElementUtils.getChildById(this.left_panel, "badge-3-image");
	this.badge_images[3] = ElementUtils.getChildById(this.left_panel, "badge-4-image");
	this.badge_images[4] = ElementUtils.getChildById(this.left_panel, "badge-5-image");
	this.badge_images[5] = ElementUtils.getChildById(this.left_panel, "badge-6-image");
	this.badge_images[6] = ElementUtils.getChildById(this.left_panel, "badge-7-image");
	this.badge_images[7] = ElementUtils.getChildById(this.left_panel, "badge-8-image");
	
	this.middle_panel = document.getElementById("middle_panel");
	this.resets_panel = ElementUtils.getChildById(this.middle_panel, "resets_panel");
	this.battle_count = ElementUtils.getChildById(this.resets_panel, "battle_count");
	this.reset_count = ElementUtils.getChildById(this.resets_panel, "reset_count");
	this.play_time = ElementUtils.getChildById(this.resets_panel, "play_time");
	this.game_time = ElementUtils.getChildById(this.resets_panel, "game_time");
	
	this.right_panel = document.getElementById("right_panel");
	
	this.pokemon_moves_interval = null;
	this.interval_function = null;
	
	this.title_rhs = ElementUtils.getChildById(this.right_panel, "title_rhs");
	this.overworld_rhs = ElementUtils.getChildById(this.right_panel, "overworld_rhs");
	
	this.pokemon_moves_1 = ElementUtils.getChildById(this.overworld_rhs, "pokemon_moves_1");
	this.pokemon_moves_1_thead = ElementUtils.getChildByTag(this.pokemon_moves_1, "thead");
	this.pokemon_moves_1_tbody = ElementUtils.getChildByTag(this.pokemon_moves_1, "tbody");
	this.pokemon_moves_2 = ElementUtils.getChildById(this.overworld_rhs, "pokemon_moves_2");
	this.pokemon_moves_2_thead = ElementUtils.getChildByTag(this.pokemon_moves_2, "thead");
	this.pokemon_moves_2_tbody = ElementUtils.getChildByTag(this.pokemon_moves_2, "tbody");
	this.pokemon_moves_3 = ElementUtils.getChildById(this.overworld_rhs, "pokemon_moves_3");
	this.pokemon_moves_3_thead = ElementUtils.getChildByTag(this.pokemon_moves_3, "thead");
	this.pokemon_moves_3_tbody = ElementUtils.getChildByTag(this.pokemon_moves_3, "tbody");
	
	this.battle_rhs = ElementUtils.getChildById(this.right_panel, "battle_rhs");
	this.enemy_pokemon = ElementUtils.getChildById(this.battle_rhs, "enemy_pokemon");
	this.enemy_pokemon_image = ElementUtils.getChildById(this.enemy_pokemon, "enemy_pokemon_image");
	this.enemy_trainer_image = ElementUtils.getChildById(this.enemy_pokemon, "enemy_trainer_image");
	this.enemy_trainer_image_reference_tr = ElementUtils.getChildById(this.enemy_pokemon, "enemy_trainer_image_reference_tr");
	this.enemy_pokemon_image_reference_tr = ElementUtils.getChildById(this.enemy_pokemon, "enemy_pokemon_image_reference_tr");
	this.enemy_pokemon_image_reference = ElementUtils.getChildById(this.enemy_pokemon, "enemy_pokemon_image_reference");
	this.enemy_trainer_image_reference = ElementUtils.getChildById(this.enemy_pokemon, "enemy_trainer_image_reference");
	this.enemy_pokemon_trainer_prefix = ElementUtils.getChildById(this.enemy_pokemon, "enemy_pokemon_trainer_prefix");
	this.enemy_pokemon_species_name = ElementUtils.getChildById(this.enemy_pokemon, "enemy_pokemon_species_name");
	this.enemy_pokemon_first_type = ElementUtils.getChildById(this.enemy_pokemon, "enemy_pokemon_first_type");
	this.enemy_pokemon_second_type = ElementUtils.getChildById(this.enemy_pokemon, "enemy_pokemon_second_type");
	this.enemy_pokemon_first_type_text = ElementUtils.getChildById(this.enemy_pokemon, "enemy_pokemon_first_type_text");
	this.enemy_pokemon_second_type_text = ElementUtils.getChildById(this.enemy_pokemon, "enemy_pokemon_second_type_text");
	
	this.enemy_pokemon_stats = ElementUtils.getChildById(this.battle_rhs, "enemy-pokemon-stats");
	this.enemy_pokemon_stats_lvl_th = ElementUtils.getChildById(this.enemy_pokemon_stats, "enemy-pokemon-stats-lvl-th");
	
	this.enemy_pokemon_stats_hp_tr = ElementUtils.getChildById(this.enemy_pokemon_stats, "enemy-pokemon-stats-hp-tr");
	this.enemy_pokemon_stats_hp_val = ElementUtils.getChildById(this.enemy_pokemon_stats_hp_tr, "enemy-pokemon-stats-hp-val");
	this.enemy_pokemon_stats_hp_button = ElementUtils.getChildById(this.enemy_pokemon_stats_hp_tr, "enemy-pokemon-stats-hp-button");
	this.enemy_pokemon_stats_hp_modifier = ElementUtils.getChildById(this.enemy_pokemon_stats_hp_tr, "enemy-pokemon-stats-hp-modifier");
	
	this.enemy_pokemon_stats_att_tr = ElementUtils.getChildById(this.enemy_pokemon_stats, "enemy-pokemon-stats-att-tr");
	this.enemy_pokemon_stats_att_val = ElementUtils.getChildById(this.enemy_pokemon_stats_att_tr, "enemy-pokemon-stats-att-val");
	this.enemy_pokemon_stats_att_button = ElementUtils.getChildById(this.enemy_pokemon_stats_att_tr, "enemy-pokemon-stats-att-button");
	this.enemy_pokemon_stats_att_modifier = ElementUtils.getChildById(this.enemy_pokemon_stats_att_tr, "enemy-pokemon-stats-att-modifier");

	this.enemy_pokemon_stats_def_tr = ElementUtils.getChildById(this.enemy_pokemon_stats, "enemy-pokemon-stats-def-tr");
	this.enemy_pokemon_stats_def_val = ElementUtils.getChildById(this.enemy_pokemon_stats_def_tr, "enemy-pokemon-stats-def-val");
	this.enemy_pokemon_stats_def_button = ElementUtils.getChildById(this.enemy_pokemon_stats_def_tr, "enemy-pokemon-stats-def-button");
	this.enemy_pokemon_stats_def_modifier = ElementUtils.getChildById(this.enemy_pokemon_stats_def_tr, "enemy-pokemon-stats-def-modifier");
		
	this.enemy_pokemon_stats_spc_tr = ElementUtils.getChildById(this.enemy_pokemon_stats, "enemy-pokemon-stats-spc-tr");
	this.enemy_pokemon_stats_spc_val = ElementUtils.getChildById(this.enemy_pokemon_stats_spc_tr, "enemy-pokemon-stats-spc-val");
	this.enemy_pokemon_stats_spc_button = ElementUtils.getChildById(this.enemy_pokemon_stats_spc_tr, "enemy-pokemon-stats-spc-button");
	this.enemy_pokemon_stats_spc_modifier = ElementUtils.getChildById(this.enemy_pokemon_stats_spc_tr, "enemy-pokemon-stats-spc-modifier");
	
	this.enemy_pokemon_stats_spd_tr = ElementUtils.getChildById(this.enemy_pokemon_stats, "enemy-pokemon-stats-spd-tr");
	this.enemy_pokemon_stats_spd_val = ElementUtils.getChildById(this.enemy_pokemon_stats_spd_tr, "enemy-pokemon-stats-spd-val");
	this.enemy_pokemon_stats_spd_button = ElementUtils.getChildById(this.enemy_pokemon_stats_spd_tr, "enemy-pokemon-stats-spd-button");
	this.enemy_pokemon_stats_spd_modifier = ElementUtils.getChildById(this.enemy_pokemon_stats_spd_tr, "enemy-pokemon-stats-spd-modifier");
		
	this.enemy_pokemon_stats_crit_val = ElementUtils.getChildById(this.enemy_pokemon_stats_spd_button, "enemy-pokemon-stats-crit-val");

	this.enemy_pokemon_stats_acc_eva_tr = ElementUtils.getChildById(this.enemy_pokemon_stats, "enemy-pokemon-stats-acc-eva-tr");
	this.enemy_pokemon_stats_eva_modifier = ElementUtils.getChildById(this.enemy_pokemon_stats_acc_eva_tr, "enemy-pokemon-stats-eva-modifier");
	this.enemy_pokemon_stats_acc_modifier = ElementUtils.getChildById(this.enemy_pokemon_stats_acc_eva_tr, "enemy-pokemon-stats-acc-modifier");
	
	this.enemy_pokemon_cur_moves = ElementUtils.getChildById(this.battle_rhs, "enemy_pokemon_cur_moves");
	this.enemy_pokemon_cur_moves_tbody = ElementUtils.getChildByTag(this.enemy_pokemon_cur_moves, "tbody");
	this.enemy_pokemon_cur_moves_trs = ElementUtils.getChildrenByTag(this.enemy_pokemon_cur_moves_tbody, "tr");
	this.enemy_pokemon_cur_moves_trs_tds = new Array(this.enemy_pokemon_cur_moves_trs.length);
	for(var i = 0; i < this.enemy_pokemon_cur_moves_trs.length; i++)
	{
		this.enemy_pokemon_cur_moves_trs_tds[i] = ElementUtils.getChildrenByTag(this.enemy_pokemon_cur_moves_trs[i], "td");
	}

	this.setPlayerPokemonImage(0, 0);
	this.setPlayerPokemonMoves(0, 0);
	this.setPlayerPokemonSpecies(0, "");
	this.setPlayerPokemonNickname(0, "");
	this.setPlayerPokemonFirstType(0, -1);
	this.setPlayerPokemonSecondType(0, -1);
	
	this.setPlayerBaseHP(0);
	this.setPlayerBaseAtk(0);
	this.setPlayerBaseDef(0);
	this.setPlayerBaseSpc(0);
	this.setPlayerBaseSpd(0);
	
	this.setPlayerHPModifier(0);
	this.setPlayerAtkModifier(0);
	this.setPlayerDefModifier(0);
	this.setPlayerSpcModifier(0);
	this.setPlayerSpdModifier(0);
	this.setPlayerEvaModifier(0);
	this.setPlayerAccModifier(0);
	
	this.setPlayerCurLvl(0);
	this.setPlayerCurHP(0, 0);
	this.setPlayerCurAtk(0);
	this.setPlayerCurDef(0);
	this.setPlayerCurSpc(0);
	this.setPlayerCurSpd(0);
	
	this.setPlayerPokemonMove(0, 0, -1, 0);
	this.setPlayerPokemonMove(0, 1, -1, 0);
	this.setPlayerPokemonMove(0, 2, -1, 0);
	this.setPlayerPokemonMove(0, 3, -1, 0);
	
	this.setBadgeVisible(0, false);
	this.setBadgeVisible(1, false);
	this.setBadgeVisible(2, false);
	this.setBadgeVisible(3, false);
	this.setBadgeVisible(4, false);
	this.setBadgeVisible(5, false);
	this.setBadgeVisible(6, false);
	this.setBadgeVisible(7, false);
	
	this.setBattleState("None");
	this.setEnemyTrainerImage("None", "Normal", "");
	
	this.setEnemyPokemonImage("None", "Normal", 0, 0);
	this.setEnemyPokemonSpecies("None", "");
	this.setEnemyPokemonFirstType("None", -1);
	this.setEnemyPokemonSecondType("None", -1);
	
	this.setEnemyBaseHP(0);
	this.setEnemyBaseAtk(0);
	this.setEnemyBaseDef(0);
	this.setEnemyBaseSpc(0);
	this.setEnemyBaseSpd(0);
	
	this.setEnemyHPModifier(0);
	this.setEnemyAtkModifier(0);
	this.setEnemyDefModifier(0);
	this.setEnemySpcModifier(0);
	this.setEnemySpdModifier(0);
	this.setEnemyEvaModifier(0);
	this.setEnemyAccModifier(0);
	
	this.setEnemyCurLvl(0);
	this.setEnemyCurHP(0, 0);
	this.setEnemyCurAtk(0);
	this.setEnemyCurDef(0);
	this.setEnemyCurSpc(0);
	this.setEnemyCurSpd(0);
	
	this.setEnemyPokemonMove(0, 0, -1);
	this.setEnemyPokemonMove(0, 1, -1);
	this.setEnemyPokemonMove(0, 2, -1);
	this.setEnemyPokemonMove(0, 3, -1);
}

OverlayView.OPP_ID_OFFSET = 200;

OverlayView.prototype.setPlayerPokemonImage = function(teamCount, id)
{
	if(teamCount > 0)
	{
		var pokemon_image = SpeciesImageLookup.image[id];
		var pokemon_image_reference = SpeciesImageLookup.source[id];
		
		this.pokemon_image.src = pokemon_image;
		this.pokemon_image_reference.innerHTML = pokemon_image_reference;
		this.pokemon_image_reference.href = pokemon_image_reference;
	} else {
		var pokemon_image = SpeciesImageLookup.image[""];
		var pokemon_image_reference = SpeciesImageLookup.source[""];
		
		this.pokemon_image.src = pokemon_image;
		this.pokemon_image_reference.innerHTML = pokemon_image_reference;
		this.pokemon_image_reference.href = pokemon_image_reference;
	}
};
	
OverlayView.prototype.setPlayerPokemonSpecies = function(teamCount, species)
{
	if(teamCount > 0)
	{
		this.pokemon_species_name.innerHTML = species
	} else {
		this.pokemon_species_name.innerHTML = "";
	}
};

OverlayView.prototype.setPlayerPokemonNickname = function(teamCount, nickname)
{
	if(teamCount > 0)
	{
		this.pokemon_nickname.innerHTML = nickname;
	} else {
		this.pokemon_nickname.innerHTML = "";
	}
};

OverlayView.prototype.setPlayerPokemonFirstType = function(teamCount, type)
{
	if(teamCount <= 0)
	{
		type = "";
	}
	
	var typeClass = "no-type";
	var typeName="";
	
	if(TypeLookup && TypeLookup[type])
	{
		typeClass=TypeLookup[type].css_class;
		typeName=TypeLookup[type].name;
	}
	
	const classNames = this.pokemon_first_type.classList;
	var toRemove = [];
	classNames.forEach(name => {
		if(name.endsWith("-type"))
		{
			toRemove.push(name);
		}
		else if(name === "hide-vertical")
		{
			toRemove.push("hide-vertical");
		}
	})
	toRemove.forEach(className => {
		this.pokemon_first_type.classList.remove(className);
	})
	this.pokemon_first_type.classList.add(typeClass);
	
	if(!typeName)
	{
		this.pokemon_first_type.classList.add("hide-vertical");
		this.pokemon_first_type_text.innerHTML = "";
	}
	else
	{
		this.pokemon_first_type_text.innerHTML = typeName;
	}
};

OverlayView.prototype.setPlayerPokemonSecondType = function(teamCount, type)
{
	if(teamCount <= 0)
	{
		type = "";
	}
	
	var typeClass = "no-type";
	var typeName="";
	
	if(TypeLookup && TypeLookup[type])
	{
		typeClass=TypeLookup[type].css_class;
		typeName=TypeLookup[type].name;
	}
	
	const classNames = this.pokemon_second_type.classList;
	var toRemove = [];
	classNames.forEach(name => {
		if(name.endsWith("-type"))
		{
			toRemove.push(name);
		}
		else if(name === "hide-vertical")
		{
			toRemove.push("hide-vertical");
		}
	})
	toRemove.forEach(className => {
		this.pokemon_second_type.classList.remove(className);
	})
	this.pokemon_second_type.classList.add(typeClass);
	
	if(!typeName)
	{
		this.pokemon_second_type_text.classList.add("hide-vertical");
		this.pokemon_second_type_text.innerHTML = "";
	}
	else
	{
		this.pokemon_second_type_text.innerHTML = typeName;
	}
};

OverlayView.prototype.setPlayerCurLvl = function(cur)
{
	this.pokemon_stats_lvl_th.innerHTML = "LV. " + cur + " STATS";
};

OverlayView.prototype.setPlayerBaseHP = function(val)
{
	var percent = Math.round(val * 100 / 255) + "%";
	
	this.pokemon_stats_hp_button.style.width = percent;
};

OverlayView.prototype.setPlayerCurHP = function(cur, max)
{
	this.pokemon_stats_hp_val.innerHTML = "HP: " + cur + "/" + max;
};

OverlayView.prototype.setPlayerHPModifier = function(val)
{
	if(val == 0)
	{
		this.pokemon_stats_hp_modifier.innerHTML = "&nbsp;";
	}
	else
	{
		this.pokemon_stats_hp_modifier.innerHTML = val;
	}
};

OverlayView.prototype.setPlayerBaseAtk = function(val)
{
	var percent = Math.round(val * 100 / 255) + "%";
	
	this.pokemon_stats_att_button.style.width = percent;
};

OverlayView.prototype.setPlayerCurAtk = function(cur)
{
	this.pokemon_stats_att_val.innerHTML = "ATT: " + cur;
};

OverlayView.prototype.setPlayerAtkModifier = function(val)
{
	if(val == 0)
	{
		this.pokemon_stats_att_modifier.innerHTML = "&nbsp;";
	}
	else
	{
		this.pokemon_stats_att_modifier.innerHTML = val;
	}
};

OverlayView.prototype.setPlayerBaseDef = function(val)
{
	var percent = Math.round(val * 100 / 255) + "%";
	
	this.pokemon_stats_def_button.style.width = percent;
};

OverlayView.prototype.setPlayerCurDef = function(cur)
{
	this.pokemon_stats_def_val.innerHTML = "DEF: " + cur;
};

OverlayView.prototype.setPlayerCurSpc = function(cur)
{
	this.pokemon_stats_spc_val.innerHTML = "SPC: " + cur;
};

OverlayView.prototype.setPlayerCurSpd = function(cur)
{
	this.pokemon_stats_spd_val.innerHTML = "SPD: " + cur;
};

OverlayView.prototype.setPlayerDefModifier = function(val)
{
	if(val == 0)
	{
		this.pokemon_stats_def_modifier.innerHTML = "&nbsp;";
	}
	else
	{
		this.pokemon_stats_def_modifier.innerHTML = val;
	}
};

OverlayView.prototype.setPlayerBaseSpc = function(val)
{
	var percent = Math.round(val * 100 / 255) + "%";
	
	this.pokemon_stats_spc_button.style.width = percent;
};

OverlayView.prototype.setPlayerSpcModifier = function(val)
{
	if(val == 0)
	{
		this.pokemon_stats_spc_modifier.innerHTML = "&nbsp;";
	}
	else
	{
		this.pokemon_stats_spc_modifier.innerHTML = val;
	}
};

OverlayView.prototype.setPlayerBaseSpd = function(val)
{
	var percent = Math.round(val * 100 / 255) + "%";
	
	this.pokemon_stats_spd_button.style.width = percent;
	
	var critRate = PokemonMechanics.getCritRate(val) + "%";
	
	this.pokemon_stats_crit_val.innerHTML = "CRIT: " + critRate;
};

OverlayView.prototype.setPlayerSpdModifier = function(val)
{
	if(val == 0)
	{
		this.pokemon_stats_spd_modifier.innerHTML = "&nbsp;";
	}
	else
	{
		this.pokemon_stats_spd_modifier.innerHTML = val;
	}
};

OverlayView.prototype.setPlayerSpdModifier = function(val)
{
	if(val == 0)
	{
		this.pokemon_stats_spd_modifier.innerHTML = "&nbsp;";
	}
	else
	{
		this.pokemon_stats_spd_modifier.innerHTML = val;
	}
};

OverlayView.prototype.setPlayerEvaModifier = function(val)
{
	if(val == 0)
	{
		this.pokemon_stats_eva_modifier.innerHTML = "&nbsp;";
	}
	else
	{
		this.pokemon_stats_eva_modifier.innerHTML = val;
	}
};

OverlayView.prototype.setPlayerAccModifier = function(val)
{
	if(val == 0)
	{
		this.pokemon_stats_acc_modifier.innerHTML = "&nbsp;";
	}
	else
	{
		this.pokemon_stats_acc_modifier.innerHTML = val;
	}
};

OverlayView.prototype.setPlayerPokemonMoves = function(teamCount, id)
{
	if(teamCount <= 0)
	{
		id = "";
	}
	
	if(this.pokemon_moves_interval)
	{
		clearInterval(this.pokemon_moves_interval);
		this.pokemon_moves_interval = null;
	}
	
	var hasMoves1 = false;
	var hasMoves2 = false;
	var hasMoves3 = false;
	this.has_pokemon_moves_1 = false;
	this.has_pokemon_moves_2 = false;
	this.has_pokemon_moves_3 = false;
	this.pokemon_moves_1.classList.remove("hide");
	this.pokemon_moves_2.classList.remove("hide");
	this.pokemon_moves_3.classList.remove("hide");
	this.pokemon_moves_1.classList.add("hide");
	this.pokemon_moves_2.classList.add("hide");
	this.pokemon_moves_3.classList.add("hide");
	
	TableUtils.clearTBody(this.pokemon_moves_1);
	TableUtils.clearTBody(this.pokemon_moves_2);
	TableUtils.clearTBody(this.pokemon_moves_3);
	
	this.current_moves_table = -1;
	
	var movesList = [];
	var moves = (PokemonMovesLookup && PokemonMovesLookup[id]) ? PokemonMovesLookup[id] : null;
	
	if(moves)
	{
		moves.initial.forEach((moveIdx) => {
			var move = MoveLookup[moveIdx];
			
			var moveData = [];
			moveData[0] = "-";
			moveData[1] = move.name;
			moveData[2] = move.type;
			moveData[3] = move.power;
			moveData[4] = move.accuracy;
			moveData[5] = move.pp;
			
			movesList.push(moveData);
		});
		Object.keys(moves.levelup).forEach((level) => {
			var move = MoveLookup[moves.levelup[level]];
			
			var moveData = [];
			moveData[0] = level;
			moveData[1] = move.name;
			moveData[2] = move.type;
			moveData[3] = move.power;
			moveData[4] = move.accuracy;
			moveData[5] = move.pp;
			
			movesList.push(moveData);
		});
		moves.hms.forEach((hm) => {
			var move = MoveLookup[HmsLookup[hm]];
			
			var moveData = [];
			moveData[0] = ((hm) < 10) ? "hm0" + hm.toString() : "hm" + tm.toString();
			moveData[1] = move.name;
			moveData[2] = move.type;
			moveData[3] = move.power;
			moveData[4] = move.accuracy;
			moveData[5] = move.pp;
			
			movesList.push(moveData);
			
		});
		moves.tms.forEach((tm) => {
			var move = MoveLookup[TmsLookup[tm]];
			
			var moveData = [];
			moveData[0] = ((tm) < 10) ? "tm0" + tm.toString() : "tm" + tm.toString();
			moveData[1] = move.name;
			moveData[2] = move.type;
			moveData[3] = move.power;
			moveData[4] = move.accuracy;
			moveData[5] = move.pp;
			
			movesList.push(moveData);
			
		});
	}
	
	if(movesList && movesList.length > 0)
	{
		var table = 0;
		var curTableCount = 0;
		var curTableMax = 40;
		
		movesList.forEach((moveData) => {
			var curTable = null;
			
			if(table == 0) {
				curTable = this.pokemon_moves_1;
			} else if(table == 1) {
				curTable = this.pokemon_moves_2;
			} else {
				curTable = this.pokemon_moves_3;
			}
			
			var row = TableUtils.insertEmptyRow(curTable, false);
			if(row)
			{
				if(table == 0) {
					hasMoves1 = true;
					this.has_pokemon_moves_1 = true;
				} else if(table == 1) {
					hasMoves2 = true;
					this.has_pokemon_moves_2 = true;
				} else {
					hasMoves3 = true;
					this.has_pokemon_moves_3 = true;
				}
				for(var idx = 0; idx < moveData.length; idx++)
				{
					var data = moveData[idx];
					if(idx == 2) {
						row.cells[idx].classList.add(TypeLookup[data].css_class)
						row.cells[idx].innerHTML = "<span style=\"color:#FFF;\">" + TypeLookup[data].name + "</span></td>"
					} else {
						row.cells[idx].innerHTML = data;
					}
				}
			}
			curTableCount++;
			if(curTableCount == curTableMax)
			{
				curTableCount = 0;
				table++;
			}
		});
	}
	
	if(!hasMoves1)
	{
		TableUtils.insertEmptyRow(this.pokemon_moves_1, true);
	}
	
	
	if(!hasMoves2)
	{
		TableUtils.insertEmptyRow(this.pokemon_moves_2, true);
	}
	
	if(!hasMoves3)
	{
		TableUtils.insertEmptyRow(this.pokemon_moves_3, true);
	}
	
	var self = this;
	
	this.interval_function = function() {
		if(self.has_pokemon_moves_1 || self.has_pokemon_moves_2 || self.has_pokemon_moves_3)
		{
			self.pokemon_moves_1.classList.remove("hide");
			self.pokemon_moves_2.classList.remove("hide");
			self.pokemon_moves_3.classList.remove("hide");
			self.pokemon_moves_1.classList.add("hide");
			self.pokemon_moves_2.classList.add("hide");
			self.pokemon_moves_3.classList.add("hide");
		}
		if(self.current_moves_table < 0)
		{
			if(self.has_pokemon_moves_1)
			{
				self.current_moves_table = 1;
				self.pokemon_moves_1.classList.remove("hide");
			}
			else if(self.has_pokemon_moves_2)
			{
				self.current_moves_table = 2;
				self.pokemon_moves_2.classList.remove("hide");
			}
			else if(self.has_pokemon_moves_3)
			{
				self.current_moves_table = 3;
				self.pokemon_moves_3.classList.remove("hide");
			}
		} 
		else 
		{
			if(self.current_moves_table == 1)
			{
				if(self.has_pokemon_moves_2)
				{
					self.current_moves_table = 2;
					self.pokemon_moves_2.classList.remove("hide");
				}
				else if(self.has_pokemon_moves_3)
				{
					self.current_moves_table = 3;
					self.pokemon_moves_3.classList.remove("hide");
				}
				else 
				{
					self.current_moves_table = 1;
					self.pokemon_moves_1.classList.remove("hide");
				}
			}
			else if(self.current_moves_table == 2)
			{
				if(self.has_pokemon_moves_3)
				{
					self.current_moves_table = 3;
					self.pokemon_moves_3.classList.remove("hide");
				}
				else if(self.has_pokemon_moves_1)
				{
					self.current_moves_table = 1;
					self.pokemon_moves_1.classList.remove("hide");
				}
				else
				{
					self.current_moves_table = 2;
					self.pokemon_moves_2.classList.remove("hide");
				}
			}
			else if(self.current_moves_table == 3)
			{
				if(self.has_pokemon_moves_2)
				{
					self.current_moves_table = 2;
					self.pokemon_moves_2.classList.remove("hide");
				}
				else if(self.has_pokemon_moves_1)
				{
					self.current_moves_table = 1;
					self.pokemon_moves_1.classList.remove("hide");
				}
				else
				{
					self.current_moves_table = 3;
					self.pokemon_moves_3.classList.remove("hide");
				}
			}
		}
	}
	if(this.has_pokemon_moves_1 || this.has_pokemon_moves_2 || this.has_pokemon_moves_3)
	{
		this.pokemon_moves_interval = setInterval(this.interval_function, 10000);
		this.interval_function();
	}
};

OverlayView.prototype.setPlayerPokemonMove = function(teamCount, idx, moveId, pp)
{
	if(teamCount <= 0)
	{
		moveId = -1;
	}
	
	/*this.pokemon_cur_moves = ElementUtils.getChildById(this.left_panel, "pokemon_cur_moves");
	this.pokemon_cur_moves_tbody = ElementUtils.getChildByTag(this.pokemon_cur_moves, "tbody");
	this.pokemon_cur_moves_trs = ElementUtils.getChildrenByTag(this.pokemon_cur_moves_tbody, "tr");*/
	const classNames = this.pokemon_cur_moves_trs_tds[idx][1].classList;
	var toRemove = [];
	classNames.forEach(name => {
		if(name.endsWith("-type"))
		{
			toRemove.push(name);
		}
	})
	toRemove.forEach(className => {
		this.pokemon_cur_moves_trs_tds[idx][1].classList.remove(className);
	})
	
	if(moveId > 0 || (moveId == 0 && idx == 0))
	{
		this.pokemon_cur_moves_trs_tds[idx][0].innerHTML = MoveLookup[moveId].name;
		this.pokemon_cur_moves_trs_tds[idx][1].innerHTML = "<span style=\"color:#FFF;\">" + TypeLookup[MoveLookup[moveId].type].name + "</span></td>";
		this.pokemon_cur_moves_trs_tds[idx][1].classList.add(TypeLookup[MoveLookup[moveId].type].css_class)
		
		this.pokemon_cur_moves_trs_tds[idx][2].innerHTML = MoveLookup[moveId].power;
		this.pokemon_cur_moves_trs_tds[idx][3].innerHTML = Math.round(MoveLookup[moveId].accuracy * 100 / 255) + "%";
		
		this.pokemon_cur_moves_trs_tds[idx][4].innerHTML = pp;
	} else {
		this.pokemon_cur_moves_trs_tds[idx][0].innerHTML = "-";
		
		this.pokemon_cur_moves_trs_tds[idx][1].innerHTML = "-";
		
		this.pokemon_cur_moves_trs_tds[idx][2].innerHTML = "-";
		this.pokemon_cur_moves_trs_tds[idx][3].innerHTML = "-";
		
		this.pokemon_cur_moves_trs_tds[idx][4].innerHTML = "-";
	}
};

OverlayView.prototype.setBadgeVisible = function(idx, visible)
{
	if(visible === true) {
		this.badge_images[idx].style.visibility = "visible";
		//this.badge_images[idx].style.display = ""; // you can assign "block" as the value here.
	} else {
		this.badge_images[idx].style.visibility = "hidden";
		//this.badge_images[idx].style.display = "none";
	}
};

OverlayView.prototype.setResetCount = function(count) {
	this.reset_count.innerHTML = count;
};

OverlayView.prototype.setBattleCount = function(count) {
	this.battle_count.innerHTML = count;
};

OverlayView.prototype.setEnemyPokemonImage = function(battleType, specialType, curOpponent, id)
{
	if(battleType && battleType != "None" && battleType != "Lost Battle")
	{
		if(curOpponent != "" && curOpponent < OverlayView.OPP_ID_OFFSET - 1 && battleType != "Trainer") {
			id = PokemonIndexToDexIndex[curOpponent];
		}
	
		var enemy_pokemon_image = SpeciesImageLookup.image[id];
		var enemy_pokemon_image_reference = SpeciesImageLookup.source[id];
		
		this.enemy_pokemon_image.src = enemy_pokemon_image;
		this.enemy_pokemon_image_reference.innerHTML = enemy_pokemon_image_reference;
		this.enemy_pokemon_image_reference.href = enemy_pokemon_image_reference;
	} else {
		var enemy_pokemon_image = SpeciesImageLookup.image[""];
		var enemy_pokemon_image_reference = SpeciesImageLookup.source[""];
		
		this.enemy_pokemon_image.src = enemy_pokemon_image;
		this.enemy_pokemon_image_reference.innerHTML = enemy_pokemon_image_reference;
		this.enemy_pokemon_image_reference.href = enemy_pokemon_image_reference;
	}
};

OverlayView.prototype.setBattleState = function(isInBattle) {
	this.overworld_rhs.classList.remove("hide");
	this.battle_rhs.classList.remove("hide");
	
	if(isInBattle && isInBattle != "None" && isInBattle != "Lost Battle") {
		this.overworld_rhs.classList.add("hide");
	} else {
		this.battle_rhs.classList.add("hide");
		this.setEnemyTrainerImage("None", "Normal", "");
	}
};

OverlayView.prototype.setEnemyTrainerImage = function(battleType, specialType, id)
{
	if(id === "" || id < OverlayView.OPP_ID_OFFSET - 1 || specialType != "Normal" || battleType != "Trainer") {
		id = "";
	} else {
		id = id - OverlayView.OPP_ID_OFFSET - 1;
	}
	
	if(battleType && battleType != "None" && battleType != "Lost Battle")
	{
		var enemy_trainer_class = TrainersLookup[id].class;
		var enemy_trainer_image = "";
		var enemy_trainer_image_reference = "";
		var enemy_pokemon_trainer_prefix = "";
					
		if(enemy_trainer_class != "")
		{			
			enemy_trainer_image = TrainersLookup[id].image;
			enemy_trainer_image_reference = TrainersLookup[id].reference;
			enemy_pokemon_trainer_prefix = TrainersLookup[id].name + "'s";
			
			this.enemy_trainer_image_reference_tr.classList.remove("hide");
			//this.enemy_trainer_image_reference_tr.classList.add(typeClass);
		} else  {
			enemy_trainer_image = TrainersLookup[""].image;
			enemy_trainer_image_reference = TrainersLookup[""].reference;
			enemy_pokemon_trainer_prefix = "Wild";
			
			this.enemy_trainer_image_reference_tr.classList.remove("hide");
			this.enemy_trainer_image_reference_tr.classList.add("hide");
		}
		
		this.enemy_trainer_image.src = enemy_trainer_image;
		this.enemy_trainer_image_reference.innerHTML = enemy_trainer_image_reference;
		this.enemy_trainer_image_reference.href = enemy_trainer_image_reference;
		this.enemy_pokemon_trainer_prefix.innerHTML = enemy_pokemon_trainer_prefix;
	} else {
		var enemy_trainer_image = TrainersLookup[""].image;
		var enemy_trainer_image_reference = TrainersLookup[""].reference;
		
		this.enemy_trainer_image.src = enemy_trainer_image;
		this.enemy_trainer_image_reference.innerHTML = enemy_trainer_image_reference;
		this.enemy_trainer_image_reference.href = enemy_trainer_image_reference;
		this.enemy_pokemon_trainer_prefix.innerHTML = "";
		
		this.enemy_trainer_image_reference_tr.classList.remove("hide");
		this.enemy_trainer_image_reference_tr.classList.add("hide");
	}
};

OverlayView.prototype.setEnemyPokemonSpecies = function(battleType, species)
{
	if(battleType && battleType != "None" && battleType != "Lost Battle")
	{
		this.enemy_pokemon_species_name.innerHTML = species
	} else {
		this.enemy_pokemon_species_name.innerHTML = "";
	}
};

OverlayView.prototype.setEnemyPokemonFirstType = function(battleType, type)
{
	if(!battleType || battleType == "None" || battleType == "Lost Battle")
	{
		type = "";
	}
	
	var typeClass = "no-type";
	var typeName="";
	
	if(TypeLookup && TypeLookup[type])
	{
		typeClass=TypeLookup[type].css_class;
		typeName=TypeLookup[type].name;
	}
	
	const classNames = this.enemy_pokemon_first_type.classList;
	var toRemove = [];
	classNames.forEach(name => {
		if(name.endsWith("-type"))
		{
			toRemove.push(name);
		}
		else if(name === "hide-vertical")
		{
			toRemove.push("hide-vertical");
		}
	})
	toRemove.forEach(className => {
		this.enemy_pokemon_first_type.classList.remove(className);
	})
	this.enemy_pokemon_first_type.classList.add(typeClass);
	
	if(!typeName)
	{
		this.enemy_pokemon_first_type.classList.add("hide-vertical");
		this.enemy_pokemon_first_type_text.innerHTML = "";
	}
	else
	{
		this.enemy_pokemon_first_type_text.innerHTML = typeName;
	}
};

OverlayView.prototype.setEnemyPokemonSecondType = function(battleType, type)
{
	if(!battleType || battleType == "None" || battleType == "Lost Battle")
	{
		type = "";
	}
	
	var typeClass = "no-type";
	var typeName="";
	
	if(TypeLookup && TypeLookup[type])
	{
		typeClass=TypeLookup[type].css_class;
		typeName=TypeLookup[type].name;
	}
	
	const classNames = this.enemy_pokemon_second_type.classList;
	var toRemove = [];
	classNames.forEach(name => {
		if(name.endsWith("-type"))
		{
			toRemove.push(name);
		}
		else if(name === "hide-vertical")
		{
			toRemove.push("hide-vertical");
		}
	})
	toRemove.forEach(className => {
		this.enemy_pokemon_second_type.classList.remove(className);
	})
	this.enemy_pokemon_second_type.classList.add(typeClass);
	
	if(!typeName)
	{
		this.enemy_pokemon_second_type_text.classList.add("hide-vertical");
		this.enemy_pokemon_second_type_text.innerHTML = "";
	}
	else
	{
		this.enemy_pokemon_second_type_text.innerHTML = typeName;
	}
};

OverlayView.prototype.setEnemyCurLvl = function(cur)
{
	this.enemy_pokemon_stats_lvl_th.innerHTML = "LV. " + cur + " STATS";
};

OverlayView.prototype.setEnemyBaseHP = function(val)
{
	var percent = Math.round(val * 100 / 255) + "%";
	
	this.enemy_pokemon_stats_hp_button.style.width = percent;
};

OverlayView.prototype.setEnemyCurHP = function(cur, max)
{
	this.enemy_pokemon_stats_hp_val.innerHTML = "HP: " + cur + "/" + max;
};

OverlayView.prototype.setEnemyHPModifier = function(val)
{
	if(val == 0)
	{
		this.enemy_pokemon_stats_hp_modifier.innerHTML = "&nbsp;";
	}
	else
	{
		this.enemy_pokemon_stats_hp_modifier.innerHTML = val;
	}
};

OverlayView.prototype.setEnemyBaseAtk = function(val)
{
	var percent = Math.round(val * 100 / 255) + "%";
	
	this.enemy_pokemon_stats_att_button.style.width = percent;
};

OverlayView.prototype.setEnemyCurAtk = function(cur)
{
	this.enemy_pokemon_stats_att_val.innerHTML = "ATT: " + cur;
};

OverlayView.prototype.setEnemyAtkModifier = function(val)
{
	if(val == 0)
	{
		this.enemy_pokemon_stats_att_modifier.innerHTML = "&nbsp;";
	}
	else
	{
		this.enemy_pokemon_stats_att_modifier.innerHTML = val;
	}
};

OverlayView.prototype.setEnemyBaseDef = function(val)
{
	var percent = Math.round(val * 100 / 255) + "%";
	
	this.enemy_pokemon_stats_def_button.style.width = percent;
};

OverlayView.prototype.setEnemyCurDef = function(cur)
{
	this.enemy_pokemon_stats_def_val.innerHTML = "DEF: " + cur;
};

OverlayView.prototype.setEnemyCurSpc = function(cur)
{
	this.enemy_pokemon_stats_spc_val.innerHTML = "SPC: " + cur;
};

OverlayView.prototype.setEnemyCurSpd = function(cur)
{
	this.enemy_pokemon_stats_spd_val.innerHTML = "SPD: " + cur;
};

OverlayView.prototype.setEnemyDefModifier = function(val)
{
	if(val == 0)
	{
		this.enemy_pokemon_stats_def_modifier.innerHTML = "&nbsp;";
	}
	else
	{
		this.enemy_pokemon_stats_def_modifier.innerHTML = val;
	}
};

OverlayView.prototype.setEnemyBaseSpc = function(val)
{
	var percent = Math.round(val * 100 / 255) + "%";
	
	this.enemy_pokemon_stats_spc_button.style.width = percent;
};

OverlayView.prototype.setEnemySpcModifier = function(val)
{
	if(val == 0)
	{
		this.enemy_pokemon_stats_spc_modifier.innerHTML = "&nbsp;";
	}
	else
	{
		this.enemy_pokemon_stats_spc_modifier.innerHTML = val;
	}
};

OverlayView.prototype.setEnemyBaseSpd = function(val)
{
	var percent = Math.round(val * 100 / 255) + "%";
	
	this.enemy_pokemon_stats_spd_button.style.width = percent;
	
	var critRate = PokemonMechanics.getCritRate(val) + "%";
	
	this.enemy_pokemon_stats_crit_val.innerHTML = "CRIT: " + critRate;
};

OverlayView.prototype.setEnemySpdModifier = function(val)
{
	if(val == 0)
	{
		this.enemy_pokemon_stats_spd_modifier.innerHTML = "&nbsp;";
	}
	else
	{
		this.enemy_pokemon_stats_spd_modifier.innerHTML = val;
	}
};

OverlayView.prototype.setEnemySpdModifier = function(val)
{
	if(val == 0)
	{
		this.enemy_pokemon_stats_spd_modifier.innerHTML = "&nbsp;";
	}
	else
	{
		this.enemy_pokemon_stats_spd_modifier.innerHTML = val;
	}
};

OverlayView.prototype.setEnemyEvaModifier = function(val)
{
	if(val == 0)
	{
		this.enemy_pokemon_stats_eva_modifier.innerHTML = "&nbsp;";
	}
	else
	{
		this.enemy_pokemon_stats_eva_modifier.innerHTML = val;
	}
};

OverlayView.prototype.setEnemyAccModifier = function(val)
{
	if(val == 0)
	{
		this.enemy_pokemon_stats_acc_modifier.innerHTML = "&nbsp;";
	}
	else
	{
		this.enemy_pokemon_stats_acc_modifier.innerHTML = val;
	}
};

OverlayView.prototype.setEnemyPokemonMove = function(teamCount, idx, moveId)
{
	if(teamCount <= 0)
	{
		moveId = -1;
	}
	
	/*this.enemy_pokemon_cur_moves = ElementUtils.getChildById(this.left_panel, "pokemon_cur_moves");
	this.enemy_pokemon_cur_moves_tbody = ElementUtils.getChildByTag(this.enemy_pokemon_cur_moves, "tbody");
	this.enemy_pokemon_cur_moves_trs = ElementUtils.getChildrenByTag(this.enemy_pokemon_cur_moves_tbody, "tr");*/
	const classNames = this.enemy_pokemon_cur_moves_trs_tds[idx][1].classList;
	var toRemove = [];
	classNames.forEach(name => {
		if(name.endsWith("-type"))
		{
			toRemove.push(name);
		}
	})
	toRemove.forEach(className => {
		this.enemy_pokemon_cur_moves_trs_tds[idx][1].classList.remove(className);
	})
	
	if(moveId > 0 || (moveId == 0 && idx == 0))
	{
		this.enemy_pokemon_cur_moves_trs_tds[idx][0].innerHTML = MoveLookup[moveId].name;
		this.enemy_pokemon_cur_moves_trs_tds[idx][1].innerHTML = "<span style=\"color:#FFF;\">" + TypeLookup[MoveLookup[moveId].type].name + "</span></td>";
		this.enemy_pokemon_cur_moves_trs_tds[idx][1].classList.add(TypeLookup[MoveLookup[moveId].type].css_class)
		
		this.enemy_pokemon_cur_moves_trs_tds[idx][2].innerHTML = MoveLookup[moveId].power;
		this.enemy_pokemon_cur_moves_trs_tds[idx][3].innerHTML = Math.round(MoveLookup[moveId].accuracy * 100 / 255) + "%";
	} else {
		this.enemy_pokemon_cur_moves_trs_tds[idx][0].innerHTML = "-";
		
		this.enemy_pokemon_cur_moves_trs_tds[idx][1].innerHTML = "-";
		
		this.enemy_pokemon_cur_moves_trs_tds[idx][2].innerHTML = "-";
		this.enemy_pokemon_cur_moves_trs_tds[idx][3].innerHTML = "-";
	}
};

OverlayView.prototype.setPlayTime = function(playTime)
{
	var workingPlaytime = parseInt(playTime);

	var ms = workingPlaytime % 1000;
	workingPlaytime = Math.trunc(workingPlaytime / 1000);
	
	var sec = workingPlaytime % 60;
	workingPlaytime = Math.trunc(workingPlaytime / 60);
	
	var min = workingPlaytime % 60;
	workingPlaytime = Math.trunc(workingPlaytime / 60);
	
	var hour = workingPlaytime % 24;
	workingPlaytime = Math.trunc(workingPlaytime / 24);
	
	var year = Math.trunc(workingPlaytime / 365);
	workingPlaytime = workingPlaytime % 365;
	
	var month = Math.trunc(workingPlaytime / 31);
	workingPlaytime = workingPlaytime % 31;
	
	var day = workingPlaytime;
	
	var playTimeStr = "";
	if(year > 0) {
		if(playTimeStr != "") {
			playTimeStr += " ";
		}
		playTimeStr += year.toString() + " years";
	}
	if(month > 0) {
		if(playTimeStr != "") {
			playTimeStr += " ";
		}
		playTimeStr += month.toString() + " months";
	}
	if(day > 0) {
		if(playTimeStr != "") {
			playTimeStr += " ";
		}
		playTimeStr += day.toString() + " days";
	}
	
	if(hour < 10) {
		playTimeStr += "0" + hour.toString() + ":";
	} else {
		playTimeStr += hour.toString() + ":";
	}
	if(min < 10) {
		playTimeStr += "0" + min.toString() + ":";
	} else {
		playTimeStr += min.toString() + ":";
	}
	if(sec < 10) {
		playTimeStr += "0" + sec.toString() + ".";
	} else {
		playTimeStr += sec.toString() + ".";
	}
	if(ms < 10) {
		playTimeStr += "00" + ms.toString();
	} else if(ms < 100) {
		playTimeStr += "0" + ms.toString();
	} else {
		playTimeStr += ms.toString();
	}
	
	this.play_time.innerHTML = "TIME: " + playTimeStr;
};

OverlayView.prototype.setGameTime = function(gameTime)
{
	var workingGametime = parseInt(gameTime);

	var ms = workingGametime % 1000;
	workingGametime = Math.trunc(workingGametime / 1000);
	
	var sec = workingGametime % 60;
	workingGametime = Math.trunc(workingGametime / 60);
	
	var min = workingGametime % 60;
	workingGametime = Math.trunc(workingGametime / 60);
	
	var hour = workingGametime % 24;
	workingGametime = Math.trunc(workingGametime / 24);
	
	var year = Math.trunc(workingGametime / 365);
	workingGametime = workingGametime % 365;
	
	var month = Math.trunc(workingGametime / 31);
	workingGametime = workingGametime % 31;
	
	var day = workingGametime;
	
	var gameTimeStr = "";
	if(year > 0) {
		if(gameTimeStr != "") {
			gameTimeStr += " ";
		}
		gameTimeStr += year.toString() + " years";
	}
	if(month > 0) {
		if(gameTimeStr != "") {
			gameTimeStr += " ";
		}
		gameTimeStr += month.toString() + " months";
	}
	if(day > 0) {
		if(gameTimeStr != "") {
			gameTimeStr += " ";
		}
		gameTimeStr += day.toString() + " days";
	}
	
	if(hour < 10) {
		gameTimeStr += "0" + hour.toString() + ":";
	} else {
		gameTimeStr += hour.toString() + ":";
	}
	if(min < 10) {
		gameTimeStr += "0" + min.toString() + ":";
	} else {
		gameTimeStr += min.toString() + ":";
	}
	if(sec < 10) {
		gameTimeStr += "0" + sec.toString() + ".";
	} else {
		gameTimeStr += sec.toString() + ".";
	}
	if(ms < 10) {
		gameTimeStr += "00" + ms.toString();
	} else if(ms < 100) {
		gameTimeStr += "0" + ms.toString();
	} else {
		gameTimeStr += ms.toString();
	}
	
	this.game_time.innerHTML = "GAME TIME: " + gameTimeStr;
};

(function () {
  // Static initialization code
})();
