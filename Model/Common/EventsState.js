
function EventsState(beatChampion, countPlayTime, debugMode, flyOrDungeon, flyWarp, dungeonWarp, forceBike, destinationIsBlackout, 
					 trashCanPuzzle) {
	this.beatChampion = beatChampion; // bool
	this.countPlayTime = countPlayTime; // bool
	this.debugMode = debugMode; // bool
	this.flyOrDungeon = flyOrDungeon; // bool
	this.flyWarp = flyWarp; // bool
	this.dungeonWarp = dungeonWarp; // bool
	this.forceBike = forceBike; // bool
	this.destinationIsBlackout = destinationIsBlackout; // bool
	this.trashCanPuzzle = trashCanPuzzle; // bool
	this.listeners = [];
	this.gamehook = null;
}

EventsState.ConstructEventsStateFromGamehook = function (gamehook) {
	var beatChampion = false;
	var countPlayTime = false;
	var debugMode = false;
	var flyOrDungeon = false;
	var flyWarp = false;
	var dungeonWarp = false;
	var forceBike = false;
	var destinationIsBlackout = false;
	var trashCanPuzzle = false;

	if(gamehook && gamehook.properties && gamehook.properties.events && gamehook.properties.events.beatChampion && gamehook.properties.events.beatChampion.value) {
		beatChampion = gamehook.properties.events.beatChampion.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.events && gamehook.properties.events.overworldFlags && gamehook.properties.events.overworldFlags.countPlayTime && gamehook.properties.events.overworldFlags.countPlayTime.value) {
		countPlayTime = gamehook.properties.events.overworldFlags.countPlayTime.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.events && gamehook.properties.events.overworldFlags && gamehook.properties.events.overworldFlags.debugMode && gamehook.properties.events.overworldFlags.debugMode.value) {
		debugMode = gamehook.properties.events.overworldFlags.debugMode.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.events && gamehook.properties.events.overworldFlags && gamehook.properties.events.overworldFlags.flyOrDungeon && gamehook.properties.events.overworldFlags.flyOrDungeon.value) {
		flyOrDungeon = gamehook.properties.events.overworldFlags.flyOrDungeon.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.events && gamehook.properties.events.overworldFlags && gamehook.properties.events.overworldFlags.flyWarp && gamehook.properties.events.overworldFlags.flyWarp.value) {
		flyWarp = gamehook.properties.events.overworldFlags.flyWarp.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.events && gamehook.properties.events.overworldFlags && gamehook.properties.events.overworldFlags.dungeonWarp && gamehook.properties.events.overworldFlags.dungeonWarp.value) {
		dungeonWarp = gamehook.properties.events.overworldFlags.dungeonWarp.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.events && gamehook.properties.events.overworldFlags && gamehook.properties.events.overworldFlags.forceBike && gamehook.properties.events.overworldFlags.forceBike.value) {
		forceBike = gamehook.properties.events.overworldFlags.forceBike.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.events && gamehook.properties.events.overworldFlags && gamehook.properties.events.overworldFlags.destinationIsBlackout && gamehook.properties.events.overworldFlags.destinationIsBlackout.value) {
		destinationIsBlackout = gamehook.properties.events.overworldFlags.destinationIsBlackout.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.events && gamehook.properties.events.trashCanPuzzle && gamehook.properties.events.trashCanPuzzle.value) {
		trashCanPuzzle = gamehook.properties.events.trashCanPuzzle.value;
	}

	var newObj = new EventsState(beatChampion, countPlayTime, debugMode, flyOrDungeon, flyWarp, dungeonWarp, forceBike, 
								 destinationIsBlackout, trashCanPuzzle);
	
	newObj.gamehook = gamehook;
	
	gamehook.properties.events.beatChampion.change(async(x) => {
		if(x && (x.value || x.value === 0 || x.value === false)) {
			//console.log("onBeatChampionChange:", x.value);
			newObj.onBeatChampionChange(x.value);
		}
	});

	gamehook.properties.events.overworldFlags.countPlayTime.change(async(x) => {
		if(x && (x.value || x.value === 0 || x.value === false)) {
			//console.log("onCountPlayTimeChange:", x.value);
			newObj.onCountPlayTimeChange(x.value);
		}
	});

	gamehook.properties.events.overworldFlags.debugMode.change(async(x) => {
		if(x && (x.value || x.value === 0 || x.value === false)) {
			//console.log("onDebugModeChange:", x.value);
			newObj.onDebugModeChange(x.value);
		}
	});

	gamehook.properties.events.overworldFlags.flyOrDungeon.change(async(x) => {
		if(x && (x.value || x.value === 0 || x.value === false)) {
			//console.log("onFlyOrDungeonChange:", x.value);
			newObj.onFlyOrDungeonChange(x.value);
		}
	});

	gamehook.properties.events.overworldFlags.flyWarp.change(async(x) => {
		if(x && (x.value || x.value === 0 || x.value === false)) {
			//console.log("onFlyWarpChange:", x.value);
			newObj.onFlyWarpChange(x.value);
		}
	});

	gamehook.properties.events.overworldFlags.dungeonWarp.change(async(x) => {
		if(x && (x.value || x.value === 0 || x.value === false)) {
			//console.log("onDungeonWarpChange:", x.value);
			newObj.onDungeonWarpChange(x.value);
		}
	});

	gamehook.properties.events.overworldFlags.forceBike.change(async(x) => {
		if(x && (x.value || x.value === 0 || x.value === false)) {
			//console.log("onForceBikeChange:", x.value);
			newObj.onForceBikeChange(x.value);
		}
	});

	gamehook.properties.events.overworldFlags.destinationIsBlackout.change(async(x) => {
		if(x && (x.value || x.value === 0 || x.value === false)) {
			//console.log("onDestinationIsBlackoutChange:", x.value);
			newObj.onDestinationIsBlackoutChange(x.value);
		}
	});

	gamehook.properties.events.trashCanPuzzle.change(async(x) => {
		if(x && (x.value || x.value === 0 || x.value === false)) {
			//console.log("onTrashCanPuzzleChange:", x.value);
			newObj.onTrashCanPuzzleChange(x.value);
		}
	});

	return newObj;
};

//PlayerState.static = null;
//PlayerState.staticMethod = function() {
//};
EventsState.prototype.onBeatChampionChange = function (newBeatChampion) {
	this.beatChampion = newBeatChampion;

	this.listeners.forEach((listener) => {
		listener.onEventsStateChange(this);
	});
};

EventsState.prototype.onCountPlayTimeChange = function (newCountPlayTime) {
	this.countPlayTime = newCountPlayTime;

	this.listeners.forEach((listener) => {
		listener.onEventsStateChange(this);
	});
};

EventsState.prototype.onDebugModeChange = function (newDebugMode) {
	this.debugMode = newDebugMode;

	this.listeners.forEach((listener) => {
		listener.onEventsStateChange(this);
	});
};

EventsState.prototype.onFlyOrDungeonChange = function (newFlyOrDungeon) {
	this.flyOrDungeon = newFlyOrDungeon;

	this.listeners.forEach((listener) => {
		listener.onEventsStateChange(this);
	});
};

EventsState.prototype.onFlyWarpChange = function (newFlyWarp) {
	this.flyWarp = newFlyWarp;

	this.listeners.forEach((listener) => {
		listener.onEventsStateChange(this);
	});
};

EventsState.prototype.onDungeonWarpChange = function (newDungeonWarp) {
	this.dungeonWarp = newDungeonWarp;

	this.listeners.forEach((listener) => {
		listener.onEventsStateChange(this);
	});
};

EventsState.prototype.onForceBikeChange = function (newForceBike) {
	this.forceBike = newForceBike;

	this.listeners.forEach((listener) => {
		listener.onEventsStateChange(this);
	});
};

EventsState.prototype.onDestinationIsBlackoutChange = function (newDestinationIsBlackout) {
	this.destinationIsBlackout = newDestinationIsBlackout;

	this.listeners.forEach((listener) => {
		listener.onEventsStateChange(this);
	});
};

EventsState.prototype.onTrashCanPuzzleChange = function (newTrashCanPuzzle) {
	this.trashCanPuzzle = newTrashCanPuzzle;

	this.listeners.forEach((listener) => {
		listener.onEventsStateChange(this);
	});
};

EventsState.prototype.listen = function (obj) {
	this.listeners.push(obj);
};

(function () {
  // Static initialization code
})();