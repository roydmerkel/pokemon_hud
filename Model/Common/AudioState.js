function AudioState(channel1, channel2, channel3, channel4, channel5, channel6, channel7, channel8, 
					currentSound, newSoundId, audioBank, overworldTrackCurrentMap, audioBankCurrentMap,
					volumeChannel1, volumeChannel2, volumeChannel3, volumeChannel4,
					volumeChannel5, volumeChannel6, volumeChannel7, volumeChannel8,
					music, sfx) {
	this.channel1 = channel1; // int
	this.channel2 = channel2; // int
	this.channel3 = channel3; // int
	this.channel4 = channel4; // int
	this.channel5 = channel5; // int
	this.channel6 = channel6; // int
	this.channel7 = channel7; // int
	this.channel8 = channel8; // int
	this.currentSound = currentSound; // int
	this.newSoundId = newSoundId; // int
	this.audioBank = audioBank; // int
	this.overworldTrackCurrentMap = overworldTrackCurrentMap; // string
	this.audioBankCurrentMap = audioBankCurrentMap; // int
	this.volumeChannel1 = volumeChannel1; // int
	this.volumeChannel2 = volumeChannel2; // int
	this.volumeChannel3 = volumeChannel3; // int
	this.volumeChannel4 = volumeChannel4; // int
	this.volumeChannel5 = volumeChannel5; // int
	this.volumeChannel6 = volumeChannel6; // int
	this.volumeChannel7 = volumeChannel7; // int
	this.volumeChannel8 = volumeChannel8; // int
	this.music = music; // int
	this.sfx = sfx; // int

	this.listeners = [];
	this.gamehook = null;
}

AudioState.ConstructAudioStateFromGamehook = function (gamehook) {
	var channel1 = 0;
	var channel2 = 0;
	var channel3 = 0;
	var channel4 = 0;
	var channel5 = 0;
	var channel6 = 0;
	var channel7 = 0;
	var channel8 = 0;
	var currentSound = 0;
	var newSoundId = 0;
	var audioBank = 0;
	var overworldTrackCurrentMap = "";
	var audioBankCurrentMap = 0;
	var volumeChannel1 = 0;
	var volumeChannel2 = 0;
	var volumeChannel3 = 0;
	var volumeChannel4 = 0;
	var volumeChannel5 = 0;
	var volumeChannel6 = 0;
	var volumeChannel7 = 0;
	var volumeChannel8 = 0;
	var music = 0;
	var sfx = 0;
		
	if(gamehook && gamehook.properties && gamehook.properties.audio && gamehook.properties.audio.channel1 && gamehook.properties.audio.channel1.value) {
		channel1 = gamehook.properties.audio.channel1.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.audio && gamehook.properties.audio.channel2 && gamehook.properties.audio.channel2.value) {
		channel2 = gamehook.properties.audio.channel2.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.audio && gamehook.properties.audio.channel3 && gamehook.properties.audio.channel3.value) {
		channel3 = gamehook.properties.audio.channel3.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.audio && gamehook.properties.audio.channel4 && gamehook.properties.audio.channel4.value) {
		channel4 = gamehook.properties.audio.channel4.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.audio && gamehook.properties.audio.channel5 && gamehook.properties.audio.channel5.value) {
		channel5 = gamehook.properties.audio.channel5.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.audio && gamehook.properties.audio.channel6 && gamehook.properties.audio.channel6.value) {
		channel6 = gamehook.properties.audio.channel6.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.audio && gamehook.properties.audio.channel7 && gamehook.properties.audio.channel7.value) {
		channel7 = gamehook.properties.audio.channel7.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.audio && gamehook.properties.audio.channel8 && gamehook.properties.audio.channel8.value) {
		channel8 = gamehook.properties.audio.channel8.value;
	}	
	
	if(gamehook && gamehook.properties && gamehook.properties.audio && gamehook.properties.audio.currentSound && gamehook.properties.audio.currentSound.value) {
		currentSound = gamehook.properties.audio.currentSound.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.audio && gamehook.properties.audio.newSoundId && gamehook.properties.audio.newSoundId.value) {
		newSoundId = gamehook.properties.audio.newSoundId.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.audio && gamehook.properties.audio.audioBank && gamehook.properties.audio.audioBank.value) {
		audioBank = gamehook.properties.audio.audioBank.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.audio && gamehook.properties.audio.overworldTrackCurrentMap && gamehook.properties.audio.overworldTrackCurrentMap.value) {
		overworldTrackCurrentMap = gamehook.properties.audio.overworldTrackCurrentMap.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.audio && gamehook.properties.audio.audioBankCurrentMap && gamehook.properties.audio.audioBankCurrentMap.value) {
		audioBankCurrentMap = gamehook.properties.audio.audioBankCurrentMap.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.audio && gamehook.properties.audio.volume && gamehook.properties.audio.volume.channel1 && gamehook.properties.audio.volume.channel1.value) {
		volumeChannel1 = gamehook.properties.audio.volume.channel1.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.audio && gamehook.properties.audio.volume && gamehook.properties.audio.volume.channel2 && gamehook.properties.audio.volume.channel2.value) {
		volumeChannel2 = gamehook.properties.audio.volume.channel2.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.audio && gamehook.properties.audio.volume && gamehook.properties.audio.volume.channel3 && gamehook.properties.audio.volume.channel3.value) {
		volumeChannel3 = gamehook.properties.audio.volume.channel3.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.audio && gamehook.properties.audio.volume && gamehook.properties.audio.volume.channel4 && gamehook.properties.audio.volume.channel4.value) {
		volumeChannel4 = gamehook.properties.audio.volume.channel4.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.audio && gamehook.properties.audio.volume && gamehook.properties.audio.volume.channel5 && gamehook.properties.audio.volume.channel5.value) {
		volumeChannel5 = gamehook.properties.audio.volume.channel5.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.audio && gamehook.properties.audio.volume && gamehook.properties.audio.volume.channel6 && gamehook.properties.audio.volume.channel6.value) {
		volumeChannel6 = gamehook.properties.audio.volume.channel6.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.audio && gamehook.properties.audio.volume && gamehook.properties.audio.volume.channel7 && gamehook.properties.audio.volume.channel7.value) {
		volumeChannel7 = gamehook.properties.audio.volume.channel7.value;
	}
	
	if(gamehook && gamehook.properties && gamehook.properties.audio && gamehook.properties.audio.volume && gamehook.properties.audio.volume.channel8 && gamehook.properties.audio.volume.channel8.value) {
		volumeChannel8 = gamehook.properties.audio.volume.channel8.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.audio && gamehook.properties.audio.tempo && gamehook.properties.audio.tempo.music && gamehook.properties.audio.tempo.music.value) {
		music = gamehook.properties.audio.tempo.music.value;
	}

	if(gamehook && gamehook.properties && gamehook.properties.audio && gamehook.properties.audio.tempo && gamehook.properties.audio.tempo.sfx && gamehook.properties.audio.tempo.sfx.value) {
		sfx = gamehook.properties.audio.tempo.sfx.value;
	}	

	var newObj = new AudioState(channel1, channel2, channel3, channel4, channel5, channel6, channel7, channel8, 
								currentSound, newSoundId, audioBank, overworldTrackCurrentMap, audioBankCurrentMap,
								volumeChannel1, volumeChannel2, volumeChannel3, volumeChannel4,
								volumeChannel5, volumeChannel6, volumeChannel7, volumeChannel8,
								music, sfx);
	
	newObj.gamehook = gamehook;
	
	gamehook.properties.audio.channel1.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onChannel1Change:", x.value);
			newObj.onChannel1Change(x.value);
		}
	});
	
	gamehook.properties.audio.channel2.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onChannel2Change:", x.value);
			newObj.onChannel2Change(x.value);
		}
	});
	
	gamehook.properties.audio.channel3.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onChannel3Change:", x.value);
			newObj.onChannel3Change(x.value);
		}
	});
	
	gamehook.properties.audio.channel4.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onChannel4Change:", x.value);
			newObj.onChannel4Change(x.value);
		}
	});
	
	gamehook.properties.audio.channel5.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onChannel5Change:", x.value);
			newObj.onChannel5Change(x.value);
		}
	});
	
	gamehook.properties.audio.channel6.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onChannel6Change:", x.value);
			newObj.onChannel6Change(x.value);
		}
	});
	
	gamehook.properties.audio.channel7.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onChannel7Change:", x.value);
			newObj.onChannel7Change(x.value);
		}
	});
	
	gamehook.properties.audio.channel8.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onChannel8Change:", x.value);
			newObj.onChannel8Change(x.value);
		}
	});
	
	gamehook.properties.audio.currentSound.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onCurrentSoundChange:", x.value);
			newObj.onCurrentSoundChange(x.value);
		}
	});
	
	gamehook.properties.audio.newSoundId.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onNewSoundIdChange:", x.value);
			newObj.onNewSoundIdChange(x.value);
		}
	});
	
	gamehook.properties.audio.audioBank.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onAudioBankChange:", x.value);
			newObj.onAudioBankChange(x.value);
		}
	});
	
	gamehook.properties.audio.overworldTrackCurrentMap.change(async(x) => {
		if(x && (x.value || x.value === "")) {
			//console.log("onOverworldTrackCurrentMapChange:", x.value);
			newObj.onOverworldTrackCurrentMapChange(x.value);
		}
	});
	
	gamehook.properties.audio.audioBankCurrentMap.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onAudioBankCurrentMapChange:", x.value);
			newObj.onAudioBankCurrentMapChange(x.value);
		}
	});
	
	gamehook.properties.audio.volume.channel1.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onVolumeChannel1Change:", x.value);
			newObj.onVolumeChannel1Change(x.value);
		}
	});
	
	gamehook.properties.audio.volume.channel2.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onVolumeChannel2Change:", x.value);
			newObj.onVolumeChannel2Change(x.value);
		}
	});
	
	gamehook.properties.audio.volume.channel3.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onVolumeChannel3Change:", x.value);
			newObj.onVolumeChannel3Change(x.value);
		}
	});
	
	gamehook.properties.audio.volume.channel4.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onVolumeChannel4Change:", x.value);
			newObj.onVolumeChannel4Change(x.value);
		}
	});
	
	gamehook.properties.audio.volume.channel5.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onVolumeChannel5Change:", x.value);
			newObj.onVolumeChannel5Change(x.value);
		}
	});
	
	gamehook.properties.audio.volume.channel6.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onVolumeChannel6Change:", x.value);
			newObj.onVolumeChannel6Change(x.value);
		}
	});
	
	gamehook.properties.audio.volume.channel7.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onVolumeChannel7Change:", x.value);
			newObj.onVolumeChannel7Change(x.value);
		}
	});
	
	gamehook.properties.audio.volume.channel8.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onVolumeChannel8Change:", x.value);
			newObj.onVolumeChannel8Change(x.value);
		}
	});
	
	gamehook.properties.audio.tempo.music.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onMusicChange:", x.value);
			newObj.onMusicChange(x.value);
		}
	});
	
	gamehook.properties.audio.tempo.sfx.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onSfxChange:", x.value);
			newObj.onSfxChange(x.value);
		}
	});

	return newObj;
};

//PlayerState.static = null;
//PlayerState.staticMethod = function() {
//};
AudioState.prototype.onChannel1Change = function (newChannel1) {
	this.channel1 = newChannel1;

	this.listeners.forEach((listener) => {
		listener.onAudioStateChange(this);
	});
};


AudioState.prototype.onChannel2Change = function (newChannel2) {
	this.channel2 = newChannel2;

	this.listeners.forEach((listener) => {
		listener.onAudioStateChange(this);
	});
};

AudioState.prototype.onChannel3Change = function (newChannel3) {
	this.channel3 = newChannel3;

	this.listeners.forEach((listener) => {
		listener.onAudioStateChange(this);
	});
};

AudioState.prototype.onChannel4Change = function (newChannel4) {
	this.channel4 = newChannel4;

	this.listeners.forEach((listener) => {
		listener.onAudioStateChange(this);
	});
};

AudioState.prototype.onChannel5Change = function (newChannel5) {
	this.channel5 = newChannel5;

	this.listeners.forEach((listener) => {
		listener.onAudioStateChange(this);
	});
};

AudioState.prototype.onChannel6Change = function (newChannel6) {
	this.channel6 = newChannel6;

	this.listeners.forEach((listener) => {
		listener.onAudioStateChange(this);
	});
};

AudioState.prototype.onChannel7Change = function (newChannel7) {
	this.channel7 = newChannel7;

	this.listeners.forEach((listener) => {
		listener.onAudioStateChange(this);
	});
};

AudioState.prototype.onChannel8Change = function (newChannel8) {
	this.channel8 = newChannel8;

	this.listeners.forEach((listener) => {
		listener.onAudioStateChange(this);
	});
};

AudioState.prototype.onCurrentSoundChange = function (newCurrentSound) {
	this.currentSound = newCurrentSound;

	this.listeners.forEach((listener) => {
		listener.onAudioStateChange(this);
		if(listener && listener.onCurrentSoundChange) {
			listener.onCurrentSoundChange(this);
		}
	});
};

AudioState.prototype.onNewSoundIdChange = function (newNewSoundId) {
	this.newSoundId = newNewSoundId;

	this.listeners.forEach((listener) => {
		listener.onAudioStateChange(this);
		if(listener && listener.onNewSoundIdChange) {
			listener.onNewSoundIdChange(this);
		}
	});
};

AudioState.prototype.onAudioBankChange = function (newAudioBank) {
	this.audioBank = newAudioBank;

	this.listeners.forEach((listener) => {
		listener.onAudioStateChange(this);
		if(listener && listener.onAudioBankChange) {
			listener.onAudioBankChange(this);
		}
	});
};

AudioState.prototype.onOverworldTrackCurrentMapChange = function (newOverworldTrackCurrentMap) {
	this.overworldTrackCurrentMap = newOverworldTrackCurrentMap;

	this.listeners.forEach((listener) => {
		listener.onAudioStateChange(this);
		if(listener && listener.onOverworldTrackCurrentMapChange) {
			listener.onOverworldTrackCurrentMapChange(this);
		}
	});
};

AudioState.prototype.onAudioBankCurrentMapChange = function (newAudioBankCurrentMap) {
	this.audioBankCurrentMap = newAudioBankCurrentMap;

	this.listeners.forEach((listener) => {
		listener.onAudioStateChange(this);
		if(listener && listener.onAudioBankCurrentMapChange) {
			listener.onAudioBankCurrentMapChange(this);
		}
	});
};

AudioState.prototype.onVolumeChannel1Change = function (newVolumeChannel1) {
	this.volumeChannel1 = newVolumeChannel1;

	this.listeners.forEach((listener) => {
		listener.onAudioStateChange(this);
	});
};

AudioState.prototype.onVolumeChannel2Change = function (newVolumeChannel2) {
	this.volumeChannel2 = newVolumeChannel2;

	this.listeners.forEach((listener) => {
		listener.onAudioStateChange(this);
	});
};

AudioState.prototype.onVolumeChannel3Change = function (newVolumeChannel3) {
	this.volumeChannel3 = newVolumeChannel3;

	this.listeners.forEach((listener) => {
		listener.onAudioStateChange(this);
	});
};

AudioState.prototype.onVolumeChannel4Change = function (newVolumeChannel4) {
	this.volumeChannel4 = newVolumeChannel4;

	this.listeners.forEach((listener) => {
		listener.onAudioStateChange(this);
	});
};

AudioState.prototype.onVolumeChannel5Change = function (newVolumeChannel5) {
	this.volumeChannel5 = newVolumeChannel5;

	this.listeners.forEach((listener) => {
		listener.onAudioStateChange(this);
	});
};

AudioState.prototype.onVolumeChannel6Change = function (newVolumeChannel6) {
	this.volumeChannel6 = newVolumeChannel6;

	this.listeners.forEach((listener) => {
		listener.onAudioStateChange(this);
	});
};

AudioState.prototype.onVolumeChannel7Change = function (newVolumeChannel7) {
	this.volumeChannel7 = newVolumeChannel7;

	this.listeners.forEach((listener) => {
		listener.onAudioStateChange(this);
	});
};

AudioState.prototype.onVolumeChannel8Change = function (newVolumeChannel8) {
	this.volumeChannel8 = newVolumeChannel8;

	this.listeners.forEach((listener) => {
		listener.onAudioStateChange(this);
	});
};

AudioState.prototype.onMusicChange = function (newMusic) {
	this.music = newMusic;

	this.listeners.forEach((listener) => {
		listener.onAudioStateChange(this);
		if(listener && listener.onMusicChange) {
			listener.onMusicChange(this);
		}
	});
};
AudioState.prototype.onSfxChange = function (newSfx) {
	this.sfx = newSfx;

	this.listeners.forEach((listener) => {
		listener.onAudioStateChange(this);
		if(listener && listener.onSfxChange) {
			listener.onSfxChange(this);
		}
	});
};

AudioState.prototype.listen = function (obj) {
	this.listeners.push(obj);
};

(function () {
  // Static initialization code
})();