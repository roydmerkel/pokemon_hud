function MapState(map, y, x, stepCounter, encounterRate, encounters, repelCount, safariZone, mapData) {
	this.map = map; // string
	this.y = y; // int
	this.x = x; // int
	this.stepCounter = stepCounter; // int
	this.encounterRate = encounterRate; // int
	this.encounters = encounters; // array
	this.repelCount = repelCount; // int
	this.safariZone = safariZone; // obj
	this.mapData = mapData; // obj
	this.listeners = [];
	this.gamehook = null;
}

MapState.ConstructMapStateFromGamehook = function (gamehook) {
	var map = "";
	var y = 0;
	var x = 0;
	var stepCounter = 0xFF;
	var encounterRate = 0;
	var encounters = [];
	var safariZone = null;

	if(gamehook.properties.overworld.map && (gamehook.properties.overworld.map.value || gamehook.properties.overworld.map.value === "")) {
		map = gamehook.properties.overworld.map.value;
	}
	if(gamehook.properties.overworld.y && (gamehook.properties.overworld.y.value || gamehook.properties.overworld.y.value === 0)) {
		y = gamehook.properties.overworld.y.value;
	}
	if(gamehook.properties.overworld.x && (gamehook.properties.overworld.x.value || gamehook.properties.overworld.x.value === 0)) {
		x = gamehook.properties.overworld.x.value;
	}
	if(gamehook.properties.overworld.stepCounter && (gamehook.properties.overworld.stepCounter.value || gamehook.properties.overworld.stepCounter.value === 0)) {
		stepCounter = gamehook.properties.overworld.stepCounter.value;
	}
	if(gamehook.properties.overworld.encounterRate && (gamehook.properties.overworld.encounterRate.value || gamehook.properties.overworld.encounterRate.value === 0)) {
		encounterRate = gamehook.properties.overworld.encounterRate.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.overworld && gamehook.properties.overworld.encounters) {
		for(var i in gamehook.properties.overworld.encounters) {
			if(!encounters) {
				encounters = [];
			}
			if(!encounters[i]) {
				encounters[i] = [];
			}
			for(var j in gamehook.properties.overworld.encounters[i]) {
				encounters[i].push(EncounterState.ConstructEncounterStateFromGamehook(gamehook, i, j));
			}
		}
	}

	if(gamehook.properties.overworld.repelCount && (gamehook.properties.overworld.repelCount.value || gamehook.properties.overworld.repelCount.value === 0)) {
		repelCount = gamehook.properties.overworld.repelCount.value;
	}
	
	safariZone = SafariZoneState.ConstructSafariZoneStateFromGamehook(gamehook);
	mapData = MapDataState.ConstructMapDataStateFromGamehook(gamehook);
	
	var newObj = new MapState(map, y, x, stepCounter, encounterRate, encounters, repelCount, safariZone, mapData);
	
	newObj.gamehook = gamehook;
	
	gamehook.properties.overworld.map.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onMapChange:", x.value);
			newObj.onMapChange(x.value);
		}
	});
	gamehook.properties.overworld.y.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onYChange:", x.value);
			newObj.onYChange(x.value);
		}
	});
	gamehook.properties.overworld.x.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onXChange:", x.value);
			newObj.onXChange(x.value);
		}
	});
	gamehook.properties.overworld.stepCounter.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onStepCounterChange:", x.value);
			newObj.onStepCounterChange(x.value);
		}
	});
	gamehook.properties.overworld.encounterRate.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onEncounterRateChange:", x.value);
			newObj.onEncounterRateChange(x.value);
		}
	});
	gamehook.properties.overworld.repelCount.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onRepelCountChange:", x.value);
			newObj.onRepelCountChange(x.value);
		}
	});
	
	for(var i in encounters)
	{
		for(var j in encounters[i]) {
			encounters[i][j].listen(newObj);
		}
	}
	
	safariZone.listen(newObj);
	mapData.listen(newObj);
	
	return newObj;
};

//MapState.static = null;
//MapState.staticMethod = function() {
//};
MapState.prototype.onMapChange = function (newMap) {
	this.map = newMap;

	this.listeners.forEach((listener) => {
		listener.onMapStateChange(this);
	});
};

MapState.prototype.onYChange = function (newY) {
	this.y = newY;

	this.listeners.forEach((listener) => {
		listener.onMapStateChange(this);
	});
};

MapState.prototype.onXChange = function (newX) {
	this.x = newX;

	this.listeners.forEach((listener) => {
		listener.onMapStateChange(this);
	});
};

MapState.prototype.onStepCounterChange = function (newStepCounter) {
	this.stepCounter = newStepCounter;

	this.listeners.forEach((listener) => {
		listener.onMapStateChange(this);
	});
};

MapState.prototype.onEncounterRateChange = function (newEncounterRate) {
	this.encounterRate = newEncounterRate;

	this.listeners.forEach((listener) => {
		listener.onMapStateChange(this);
	});
};

MapState.prototype.onRepelCountChange = function (newRepelCount) {
	this.repelCount = newRepelCount;

	this.listeners.forEach((listener) => {
		listener.onMapStateChange(this);
	});
};

MapState.prototype.onEncounterStateChange = function(encounterState) {
	//console.log("onEncounterStateChange");
	this.listeners.forEach((listener) => {
		listener.onMapStateChange(this);
	});
}

MapState.prototype.onSafariZoneStateChange = function(encounterState) {
	//console.log("onSafariZoneStateChange");
	this.listeners.forEach((listener) => {
		listener.onMapStateChange(this);
	});
}

MapState.prototype.onMapDataStateChange = function(encounterState) {
	//console.log("onMapDataStateChange");
	this.listeners.forEach((listener) => {
		listener.onMapStateChange(this);
	});
}

MapState.prototype.listen = function (obj) {
	this.listeners.push(obj);
};

(function () {
  // Static initialization code
})();