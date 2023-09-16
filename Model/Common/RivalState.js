function RivalState(name, finalTeam) {
	this.name = name; // string
	this.finalTeam = finalTeam; // string
	this.listeners = [];
	this.gamehook = null;
}

RivalState.ConstructRivalStateFromGamehook = function (gamehook) {
	var name = "";
	var finalTeam = "";

	if(gamehook.properties && gamehook.properties && gamehook.properties.rival && gamehook.properties.rival.name && gamehook.properties.rival.name.value) {
		name = gamehook.properties.rival.name.value;
	}

	if(gamehook.properties && gamehook.properties && gamehook.properties.rival && gamehook.properties.rival.finalTeam && gamehook.properties.rival.finalTeam.value) {
		finalTeam = gamehook.properties.rival.finalTeam.value;
	}

	var newObj = new RivalState(name, finalTeam);
	
	newObj.gamehook = gamehook;
	
	gamehook.properties.rival.name.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onNameChange:", x.value);
			newObj.onNameChange(x.value);
		}
	});
	gamehook.properties.rival.finalTeam.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onFinalTeamChange:", x.value);
			newObj.onFinalTeamChange(x.value);
		}
	});

	return newObj;
};

//PlayerState.static = null;
//PlayerState.staticMethod = function() {
//};
RivalState.prototype.onNameChange = function (newName) {
	this.name = newName;

	this.listeners.forEach((listener) => {
		listener.onRivalStateChange(this);
	});
};

RivalState.prototype.onFinalTeamChange = function (newFinalTeam) {
	this.finalTeam = newFinalTeam;

	this.listeners.forEach((listener) => {
		listener.onRivalStateChange(this);
	});
};

RivalState.prototype.listen = function (obj) {
	this.listeners.push(obj);
};

(function () {
  // Static initialization code
})();