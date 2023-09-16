function GameTimeState(hours, minutes, seconds, _frames) {
	this.hours = hours; // int
	this.minutes = minutes; // int
	this.seconds = seconds; // int
	this.frames = _frames; // int
	this.listeners = [];
	this.gamehook = null;
}

GameTimeState.ConstructGameTimeStateFromGamehook = function (gamehook) {
	var hours = 0;
	var minutes = 0;
	var seconds = 0;
	var _frames = 0;

	if(gamehook.properties && gamehook.properties && gamehook.properties.gameTime && gamehook.properties.gameTime.hours && gamehook.properties.gameTime.hours.value) {
		hours = gamehook.properties.gameTime.hours.value;
	}

	if(gamehook.properties && gamehook.properties && gamehook.properties.gameTime && gamehook.properties.gameTime.minutes && gamehook.properties.gameTime.minutes.value) {
		minutes = gamehook.properties.gameTime.minutes.value;
	}

	if(gamehook.properties && gamehook.properties && gamehook.properties.gameTime && gamehook.properties.gameTime.seconds && gamehook.properties.gameTime.seconds.value) {
		seconds = gamehook.properties.gameTime.seconds.value;
	}

	if(gamehook.properties && gamehook.properties && gamehook.properties.gameTime && gamehook.properties.gameTime.frames && gamehook.properties.gameTime.frames.value) {
		_frames = gamehook.properties.gameTime.frames.value;
	}
	
	var newObj = new GameTimeState(hours, minutes, seconds, _frames);
	
	newObj.gamehook = gamehook;
	
	gamehook.properties.gameTime.hours.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onHoursChange:", x.value);
			newObj.onHoursChange(x.value);
		}
	});

	gamehook.properties.gameTime.minutes.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onMinutesChange:", x.value);
			newObj.onMinutesChange(x.value);
		}
	});

	gamehook.properties.gameTime.seconds.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onSecondsChange:", x.value);
			newObj.onSecondsChange(x.value);
		}
	});

	gamehook.properties.gameTime.frames.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onFramesChange:", x.value);
			newObj.onFramesChange(x.value);
		}
	});
	
	return newObj;
};

//PlayerState.static = null;
//PlayerState.staticMethod = function() {
//};
GameTimeState.prototype.onHoursChange = function (newHours) {
	this.hours = newHours;

	this.listeners.forEach((listener) => {
		listener.onGameTimeStateChange(this);
	});
};

GameTimeState.prototype.onMinutesChange = function (newMinutes) {
	this.minutes = newMinutes;

	this.listeners.forEach((listener) => {
		listener.onGameTimeStateChange(this);
	});
};

GameTimeState.prototype.onSecondsChange = function (newSeconds) {
	this.seconds = newSeconds;

	this.listeners.forEach((listener) => {
		listener.onGameTimeStateChange(this);
	});
};

GameTimeState.prototype.onFramesChange = function (newFrames) {
	this.frames = newFrames;

	this.listeners.forEach((listener) => {
		listener.onGameTimeStateChange(this);
	});
};

GameTimeState.prototype.listen = function (obj) {
	this.listeners.push(obj);
};

(function () {
  // Static initialization code
})();