function PokemonMechanics() {
  // Constructor body
}

PokemonMechanics.getCritRate = function(baseSpeed) {
	return (Math.round(baseSpeed * 100 * 100 / 512) / 100);
};

PokemonMechanics.getMinimumPokedexGlitchId = function() {
	return -5;
};

PokemonMechanics.getMaximumPokedexGlitchId = function() {
	return 151;
};

PokemonMechanics.getMinimumPokedexId = function() {
	return 1;
};

PokemonMechanics.getMaximumPokedexId = function() {
	return 151;
};

PokemonMechanics.getHP = function(attackDV, defenseDV, speedDV, specialDV, hpDV, level, baseHP, hpStatExp) {
	hpDV = Math.floor((attackDV & 0x01) << 3 | (defenseDV & 0x01) << 2 | (speedDV & 0x01) << 1 | (specialDV & 0x01) << 0);
	var statPoint = Math.floor(Math.ceil(Math.sqrt(hpStatExp))/4);
	var stat = Math.floor((((baseHP + hpDV) * 2 + statPoint) * level) / 100) + level + 10 ;

	//var statPoint = Math.trunc((Math.sqrt(hpStatExp - 1) + 1) / 4);
	//var stat = Math.trunc(((baseHP + hpDV) * 2 + statPoint) * level / 100) + level + 10;
	
	//console.log("attackDV", ":", attackDV,
	//"defenseDV", ":", defenseDV,
	//"speedDV", ":", speedDV,
	//"specialDV", ":", specialDV,
	//"hpDV", ":", hpDV,
	//"level", ":", level,
	//"baseHP", ":", baseHP,
	//"hpStatExp", ":", hpStatExp,
	//"statPoint", ":", statPoint,
	//"stat", ":", stat);
	
	return stat;
};

PokemonMechanics.getAtk = function(attackDV, defenseDV, speedDV, specialDV, hpDV, level, baseATK, atkStatExp) {
	var statPoint = Math.floor(Math.ceil(Math.sqrt(atkStatExp))/4);
	var stat = Math.floor((((baseATK + attackDV) * 2 + statPoint) * level) / 100) + 5;

	//var statPoint = Math.trunc((Math.sqrt(atkStatExp - 1) + 1) / 4);
	//var stat = Math.trunc(((baseATK + attackDV) * 2 + statPoint) * level / 100) + 5;
	
	//console.log("attackDV", ":", attackDV,
	//"defenseDV", ":", defenseDV,
	//"speedDV", ":", speedDV,
	//"specialDV", ":", specialDV,
	//"hpDV", ":", hpDV,
	//"level", ":", level,
	//"baseATK", ":", baseATK,
	//"atkStatExp", ":", atkStatExp,
	//"statPoint", ":", statPoint,
	//"stat", ":", stat);
	
	return stat;
};

PokemonMechanics.getDef = function(attackDV, defenseDV, speedDV, specialDV, hpDV, level, baseDef, defStatExp) {
	var statPoint = Math.floor(Math.ceil(Math.sqrt(defStatExp))/4);
	var stat = Math.floor((((baseDef + defenseDV) * 2 + statPoint) * level) / 100) + 5;

	//var statPoint = Math.trunc((Math.sqrt(defStatExp - 1) + 1) / 4);
	//var stat = Math.trunc(((baseDef + defenseDV) * 2 + statPoint) * level / 100) + 5;
	
	//console.log("attackDV", ":", attackDV,
	//"defenseDV", ":", defenseDV,
	//"speedDV", ":", speedDV,
	//"specialDV", ":", specialDV,
	//"hpDV", ":", hpDV,
	//"level", ":", level,
	//"baseDef", ":", baseDef,
	//"defStatExp", ":", defStatExp,
	//"statPoint", ":", statPoint,
	//"stat", ":", stat);
	
	return stat;
};

PokemonMechanics.getSpd = function(attackDV, defenseDV, speedDV, specialDV, hpDV, level, baseSpd, spdStatExp) {
	var statPoint = Math.floor(Math.ceil(Math.sqrt(spdStatExp))/4);
	var stat = Math.floor((((baseSpd + speedDV) * 2 + statPoint) * level) / 100) + 5;

	//var statPoint = Math.trunc((Math.sqrt(spdStatExp - 1) + 1) / 4);
	//var stat = Math.trunc(((baseSpd + speedDV) * 2 + statPoint) * level / 100) + 5;
	
	//console.log("attackDV", ":", attackDV,
	//"defenseDV", ":", defenseDV,
	//"speedDV", ":", speedDV,
	//"specialDV", ":", specialDV,
	//"hpDV", ":", hpDV,
	//"level", ":", level,
	//"baseSpd", ":", baseSpd,
	//"spdStatExp", ":", spdStatExp,
	//"statPoint", ":", statPoint,
	//"stat", ":", stat);
	
	return stat;
};

PokemonMechanics.getSpc = function(attackDV, defenseDV, speedDV, specialDV, hpDV, level, baseSpc, spcStatExp) {
	var statPoint = Math.floor(Math.ceil(Math.sqrt(spcStatExp))/4);
	var stat = Math.floor((((baseSpc + specialDV) * 2 + statPoint) * level) / 100) + 5;

	//var statPoint = Math.trunc((Math.sqrt(spcStatExp - 1) + 1) / 4);
	//var stat = Math.trunc(((baseSpc + specialDV) * 2 + statPoint) * level / 100) + 5;
	
	//console.log("attackDV", ":", attackDV,
	//"defenseDV", ":", defenseDV,
	//"speedDV", ":", speedDV,
	//"specialDV", ":", specialDV,
	//"hpDV", ":", hpDV,
	//"level", ":", level,
	//"baseSpc", ":", baseSpc,
	//"spcStatExp", ":", spcStatExp,
	//"statPoint", ":", statPoint,
	//"stat", ":", stat);
	
	return stat;
};

(function () {
  // Static initialization code
})();
