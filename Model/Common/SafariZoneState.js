function SafariZoneState(safariTime, safariBalls, oppBaitingFactor) {
	this.safariTime = safariTime; // int
	this.safariBalls = safariBalls; // int
	this.oppBaitingFactor = oppBaitingFactor; // int
	this.listeners = [];
	this.gamehook = null;
}
			
SafariZoneState.ConstructSafariZoneStateFromGamehook = function (gamehook) {
	var safariTime = 0;
	var safariBalls = 0;
	var oppBaitingFactor = 0;

	if(gamehook.properties && gamehook.properties && gamehook.properties.overworld && gamehook.properties.overworld.safariZone && gamehook.properties.overworld.safariZone.safariTime && gamehook.properties.overworld.safariZone.safariTime.value) {
		safariTime = gamehook.properties.overworld.safariZone.safariTime.value;
	}

	if(gamehook.properties && gamehook.properties && gamehook.properties.overworld && gamehook.properties.overworld.safariZone && gamehook.properties.overworld.safariZone.safariBalls && gamehook.properties.overworld.safariZone.safariBalls.value) {
		safariBalls = gamehook.properties.overworld.safariZone.safariBalls.value;
	}

	if(gamehook.properties && gamehook.properties && gamehook.properties.overworld && gamehook.properties.overworld.safariZone && gamehook.properties.overworld.safariZone.oppBaitingFactor && gamehook.properties.overworld.safariZone.oppBaitingFactor.value) {
		oppBaitingFactor = gamehook.properties.overworld.safariZone.oppBaitingFactor.value;
	}
	
	var newObj = new SafariZoneState(safariTime, safariBalls, oppBaitingFactor);
	
	newObj.gamehook = gamehook;
	
	gamehook.properties.overworld.safariZone.safariTime.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onSafariTimeChange:", x.value);
			newObj.onSafariTimeChange(x.value);
		}
	});

	gamehook.properties.overworld.safariZone.safariBalls.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onSafariBallsChange:", x.value);
			newObj.onSafariBallsChange(x.value);
		}
	});

	gamehook.properties.overworld.safariZone.oppBaitingFactor.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onOppBaitingFactorChange:", x.value);
			newObj.onOppBaitingFactorChange(x.value);
		}
	});


	return newObj;
};

//PlayerState.static = null;
//PlayerState.staticMethod = function() {
//};
SafariZoneState.prototype.onSafariTimeChange = function (newSafariTime) {
	this.safariTime = newSafariTime;

	this.listeners.forEach((listener) => {
		listener.onSafariZoneStateChange(this);
	});
};

SafariZoneState.prototype.onSafariBallsChange = function (newSafariBalls) {
	this.safariBalls = newSafariBalls;

	this.listeners.forEach((listener) => {
		listener.onSafariZoneStateChange(this);
	});
};

SafariZoneState.prototype.onOppBaitingFactorChange = function (newOppBaitingFactor) {
	this.oppBaitingFactor = newOppBaitingFactor;

	this.listeners.forEach((listener) => {
		listener.onSafariZoneStateChange(this);
	});
};

SafariZoneState.prototype.listen = function (obj) {
	this.listeners.push(obj);
};

(function () {
  // Static initialization code
})();