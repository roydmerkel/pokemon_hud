export class PokemonMechanics {
	public static getCritRate(baseSpeed : number, critStage : number, highCritMove : boolean) : number {
		if(highCritMove)
		{
			critStage += 2;
		}
		
		switch(critStage)
		{
			case 0:
				return Math.round(17. * 100. * 100. / 256.) / 100.;
			case 1:
				return Math.round(1. * 100. * 100. / 8.) / 100.;
			case 2:
				return Math.round(1. * 100. * 100. / 4.) / 100.;
			case 3:
				return Math.round(85. * 100. * 100. / 256.) / 100.;
			case 4:
			default:
				return Math.round(1. * 100. * 100. / 2.)/100.;
		}
	};

	public static getMinimumPokedexGlitchId() : number {
		return 0;
	};

	public static getMaximumPokedexGlitchId() : number {
		return 255;
	};

	public static getMinimumPokedexId() : number {
		return 1;
	};

	public static getMaximumPokedexId() : number {
		return 251;
	};

	public static getHP(attackDV : number, defenseDV : number, speedDV : number, specialDV : number, hpDV : number, level : number, baseHP : number, hpStatExp : number) : number {
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

	public static getAtk(attackDV : number, defenseDV : number, speedDV : number, specialDV : number, hpDV : number, level : number, baseATK : number, atkStatExp : number) : number {
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

	public static getDef(attackDV : number, defenseDV : number, speedDV : number, specialDV : number, hpDV : number, level : number, baseDef : number, defStatExp : number) : number {
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

	public static getSpd(attackDV : number, defenseDV : number, speedDV : number, specialDV : number, hpDV : number, level : number, baseSpd : number, spdStatExp : number) : number {
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

	public static getSpc(attackDV : number, defenseDV : number, speedDV : number, specialDV : number, hpDV : number, level : number, baseSpc : number, spcStatExp : number) : number {
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

	public static getSpAtk(attackDV : number, defenseDV : number, speedDV : number, specialAttackDV : number, specialDefenseDV : number, hpDV : number, level : number, baseSpAtk : number, spAtkStatExp : number) : number {
		return getSpc(attackDV, defenseDV, speedDV, specialAttackDV, hpDV, level, baseSpAtk, spAtkStatExp);
	};

	public static getSpDef(attackDV : number, defenseDV : number, speedDV : number, specialAttackDV : number, specialDefenseDV : number, hpDV : number, level : number, baseSpDef : number, spDefStatExp : number) : number {
		return getSpc(attackDV, defenseDV, speedDV, specialDefenseDV, hpDV, level, baseSpDef, spDefStatExp);
	};
};

export default PokemonMechanics;
