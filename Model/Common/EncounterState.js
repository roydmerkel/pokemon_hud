function EncounterState(level, pokemon, pokemonInt) {
	this.level = level; // int
	this.pokemon = pokemon; // string
	this.pokemonInt = pokemonInt; // int
	this.listeners = [];
	this.gamehook = null;
}

EncounterState.ConstructEncounterStateFromGamehook = function (gamehook, encounterTypeIdx, idx) {
	var level = 0;
	var pokemon = "";
	var pokemonInt = 0;

	if(gamehook.properties && gamehook.properties && gamehook.properties.overworld && gamehook.properties.overworld.encounters && gamehook.properties.overworld.encounters[encounterTypeIdx] && gamehook.properties.overworld.encounters[encounterTypeIdx][idx] && gamehook.properties.overworld.encounters[encounterTypeIdx][idx].level) {
		level = gamehook.properties.overworld.encounters[encounterTypeIdx][idx].level.value;
	}

	if(gamehook.properties && gamehook.properties && gamehook.properties.overworld && gamehook.properties.overworld.encounters && gamehook.properties.overworld.encounters[encounterTypeIdx] && gamehook.properties.overworld.encounters[encounterTypeIdx][idx] && gamehook.properties.overworld.encounters[encounterTypeIdx][idx].pokemon) {
		pokemon = gamehook.properties.overworld.encounters[encounterTypeIdx][idx].pokemon.value;
	} else if(gamehook.properties && gamehook.properties && gamehook.properties.overworld && gamehook.properties.overworld.encounters && gamehook.properties.overworld.encounters[encounterTypeIdx] && gamehook.properties.overworld.encounters[encounterTypeIdx][idx] && gamehook.properties.overworld.encounters[encounterTypeIdx][idx].species) {
		pokemon = gamehook.properties.overworld.encounters[encounterTypeIdx][idx].species.value;
	}

	if(gamehook.properties && gamehook.properties && gamehook.properties.overworld && gamehook.properties.overworld.encounters && gamehook.properties.overworld.encounters[encounterTypeIdx] && gamehook.properties.overworld.encounters[encounterTypeIdx][idx] && gamehook.properties.overworld.encounters[encounterTypeIdx][idx].pokemonInt) {
		pokemonInt = gamehook.properties.overworld.encounters[encounterTypeIdx][idx].pokemonInt.value;
	} else if(gamehook.properties && gamehook.properties && gamehook.properties.overworld && gamehook.properties.overworld.encounters && gamehook.properties.overworld.encounters[encounterTypeIdx] && gamehook.properties.overworld.encounters[encounterTypeIdx][idx] && gamehook.properties.overworld.encounters[encounterTypeIdx][idx].pokedexNumber) {
		pokemonInt = gamehook.properties.overworld.encounters[encounterTypeIdx][idx].pokedexNumber.value;
	}
	
	var newObj = new EncounterState(level, pokemon, pokemonInt);
	
	newObj.gamehook = gamehook;
	
	if(gamehook.properties && gamehook.properties && gamehook.properties.overworld && gamehook.properties.overworld.encounters && gamehook.properties.overworld.encounters[encounterTypeIdx] && gamehook.properties.overworld.encounters[encounterTypeIdx][idx] && gamehook.properties.overworld.encounters[encounterTypeIdx][idx].level) {
		gamehook.properties.overworld.encounters[encounterTypeIdx][idx].level.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onLevelChange(" + encounterTypeIdx + ")(" + idx + "):", x.value);
				newObj.onLevelChange(x.value);
			}
		});
	}

	if(gamehook.properties && gamehook.properties && gamehook.properties.overworld && gamehook.properties.overworld.encounters && gamehook.properties.overworld.encounters[encounterTypeIdx] && gamehook.properties.overworld.encounters[encounterTypeIdx][idx] && gamehook.properties.overworld.encounters[encounterTypeIdx][idx].pokemon) {
		gamehook.properties.overworld.encounters[encounterTypeIdx][idx].pokemon.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onPokemonChange(" + encounterTypeIdx + ")(" + idx + "):", x.value);
				newObj.onPokemonChange(x.value);
			}
		});
	} else if(gamehook.properties && gamehook.properties && gamehook.properties.overworld && gamehook.properties.overworld.encounters && gamehook.properties.overworld.encounters[encounterTypeIdx] && gamehook.properties.overworld.encounters[encounterTypeIdx][idx] && gamehook.properties.overworld.encounters[encounterTypeIdx][idx].species) {
		gamehook.properties.overworld.encounters[encounterTypeIdx][idx].species.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onPokemonChange(" + encounterTypeIdx + ")(" + idx + "):", x.value);
				newObj.onPokemonChange(x.value);
			}
		});
	}

	if(gamehook.properties && gamehook.properties && gamehook.properties.overworld && gamehook.properties.overworld.encounters && gamehook.properties.overworld.encounters[encounterTypeIdx] && gamehook.properties.overworld.encounters[encounterTypeIdx][idx] && gamehook.properties.overworld.encounters[encounterTypeIdx][idx].pokemonInt) {
		gamehook.properties.overworld.encounters[encounterTypeIdx][idx].pokemonInt.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onPokemonIntChange(" + encounterTypeIdx + ")(" + idx + "):", x.value);
				newObj.onPokemonIntChange(x.value);
			}
		});
	} else if(gamehook.properties && gamehook.properties && gamehook.properties.overworld && gamehook.properties.overworld.encounters && gamehook.properties.overworld.encounters[encounterTypeIdx] && gamehook.properties.overworld.encounters[encounterTypeIdx][idx] && gamehook.properties.overworld.encounters[encounterTypeIdx][idx].pokedexNumber) {
		gamehook.properties.overworld.encounters[encounterTypeIdx][idx].pokedexNumber.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onPokemonIntChange(" + encounterTypeIdx + ")(" + idx + "):", x.value);
				newObj.onPokemonIntChange(x.value);
			}
		});
	}

	return newObj;
};

//PlayerState.static = null;
//PlayerState.staticMethod = function() {
//};
EncounterState.prototype.onLevelChange = function (newLevel) {
	this.level = newLevel;

	this.listeners.forEach((listener) => {
		listener.onEncounterStateChange(this);
	});
};

EncounterState.prototype.onPokemonChange = function (newPokemon) {
	this.pokemon = newPokemon;

	this.listeners.forEach((listener) => {
		listener.onEncounterStateChange(this);
	});
};

EncounterState.prototype.onPokemonIntChange = function (newPokemonInt) {
	this.pokemonInt = newPokemonInt;

	this.listeners.forEach((listener) => {
		listener.onEncounterStateChange(this);
	});
};

EncounterState.prototype.listen = function (obj) {
	this.listeners.push(obj);
};

(function () {
  // Static initialization code
})();