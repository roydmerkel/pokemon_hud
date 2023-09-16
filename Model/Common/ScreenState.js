
function ScreenState(_prompt, currentItem, tile1, tile2, tile3, tile4, tile5, tile6, tile7) {
	this.prompt = _prompt; // string
	this.currentItem = currentItem; // int
	this.tile1 = tile1; // int
	this.tile2 = tile2; // int
	this.tile3 = tile3; // int
	this.tile4 = tile4; // int
	this.tile5 = tile5; // int
	this.tile6 = tile6; // int
	this.tile7 = tile7; // int

	this.listeners = [];
	this.gamehook = null;
}

ScreenState.ConstructScreenStateFromGamehook = function (gamehook) {
	var _prompt = "";
	var currentItem = 0;
	var tile1 = 0;
	var tile2 = 0;
	var tile3 = 0;
	var tile4 = 0;
	var tile5 = 0;
	var tile6 = 0;
	var tile7 = 0;
	
	if(gamehook.properties && gamehook.properties && gamehook.properties.screen && gamehook.properties.screen.text && gamehook.properties.screen.text.prompt && gamehook.properties.screen.text.prompt.value) {
		_prompt = gamehook.properties.screen.text.prompt.value;
	}

	if(gamehook.properties && gamehook.properties && gamehook.properties.screen && gamehook.properties.screen.menu && gamehook.properties.screen.menu.currentItem && gamehook.properties.screen.menu.currentItem.value) {
		currentItem = gamehook.properties.screen.menu.currentItem.value;
	}
	
	if(gamehook.properties && gamehook.properties && gamehook.properties.screen && gamehook.properties.screen.tiles && gamehook.properties.screen.tiles.column1 && gamehook.properties.screen.tiles.column1.tile1 && gamehook.properties.screen.tiles.column1.tile1.value) {
		tile1 = gamehook.properties.screen.tiles.column1.tile1.value;
	}

	if(gamehook.properties && gamehook.properties && gamehook.properties.screen && gamehook.properties.screen.tiles && gamehook.properties.screen.tiles.column1 && gamehook.properties.screen.tiles.column1.tile2 && gamehook.properties.screen.tiles.column1.tile2.value) {
		tile2 = gamehook.properties.screen.tiles.column1.tile2.value;
	}

	if(gamehook.properties && gamehook.properties && gamehook.properties.screen && gamehook.properties.screen.tiles && gamehook.properties.screen.tiles.column1 && gamehook.properties.screen.tiles.column1.tile3 && gamehook.properties.screen.tiles.column1.tile3.value) {
		tile3 = gamehook.properties.screen.tiles.column1.tile3.value;
	}

	if(gamehook.properties && gamehook.properties && gamehook.properties.screen && gamehook.properties.screen.tiles && gamehook.properties.screen.tiles.column1 && gamehook.properties.screen.tiles.column1.tile4 && gamehook.properties.screen.tiles.column1.tile4.value) {
		tile4 = gamehook.properties.screen.tiles.column1.tile4.value;
	}

	if(gamehook.properties && gamehook.properties && gamehook.properties.screen && gamehook.properties.screen.tiles && gamehook.properties.screen.tiles.column1 && gamehook.properties.screen.tiles.column1.tile5 && gamehook.properties.screen.tiles.column1.tile5.value) {
		tile5 = gamehook.properties.screen.tiles.column1.tile5.value;
	}

	if(gamehook.properties && gamehook.properties && gamehook.properties.screen && gamehook.properties.screen.tiles && gamehook.properties.screen.tiles.column1 && gamehook.properties.screen.tiles.column1.tile6 && gamehook.properties.screen.tiles.column1.tile6.value) {
		tile6 = gamehook.properties.screen.tiles.column1.tile6.value;
	}

	if(gamehook.properties && gamehook.properties && gamehook.properties.screen && gamehook.properties.screen.tiles && gamehook.properties.screen.tiles.column1 && gamehook.properties.screen.tiles.column1.tile7 && gamehook.properties.screen.tiles.column1.tile7.value) {
		tile7 = gamehook.properties.screen.tiles.column1.tile7.value;
	}
	
	var newObj = new ScreenState(_prompt, currentItem, tile1, tile2, tile3, tile4, tile5, tile6, tile7);
	
	newObj.gamehook = gamehook;
	
	gamehook.properties.screen.text.prompt.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onPromptChange:", x.value);
			newObj.onPromptChange(x.value);
		}
	});
	gamehook.properties.screen.menu.currentItem.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onCurrentItemChange:", x.value);
			newObj.onCurrentItemChange(x.value);
		}
	});
	gamehook.properties.screen.tiles.column1.tile1.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onTile1Change:", x.value);
			newObj.onTile1Change(x.value);
		}
	});
	gamehook.properties.screen.tiles.column1.tile2.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onTile2Change:", x.value);
			newObj.onTile2Change(x.value);
		}
	});
	gamehook.properties.screen.tiles.column1.tile3.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onTile3Change:", x.value);
			newObj.onTile3Change(x.value);
		}
	});
	gamehook.properties.screen.tiles.column1.tile4.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onTile4Change:", x.value);
			newObj.onTile4Change(x.value);
		}
	});
	gamehook.properties.screen.tiles.column1.tile5.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onTile5Change:", x.value);
			newObj.onTile5Change(x.value);
		}
	});
	gamehook.properties.screen.tiles.column1.tile6.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onTile6Change:", x.value);
			newObj.onTile6Change(x.value);
		}
	});
	gamehook.properties.screen.tiles.column1.tile7.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onTile7Change:", x.value);
			newObj.onTile7Change(x.value);
		}
	});
	
	return newObj;
};

//PlayerState.static = null;
//PlayerState.staticMethod = function() {
//};
ScreenState.prototype.onPromptChange = function (newPrompt) {
	this.prompt = newPrompt;

	this.listeners.forEach((listener) => {
		listener.onRivalStateChange(this);
	});
};

ScreenState.prototype.onCurrentItemChange = function (newCurrentItem) {
	this.currentItem = newCurrentItem;

	this.listeners.forEach((listener) => {
		listener.onRivalStateChange(this);
	});
};


ScreenState.prototype.onTile1Change = function (newTile1) {
	this.tile1 = newTile1;

	this.listeners.forEach((listener) => {
		listener.onRivalStateChange(this);
	});
};

ScreenState.prototype.onTile2Change = function (newTile2) {
	this.tile2 = newTile2;

	this.listeners.forEach((listener) => {
		listener.onRivalStateChange(this);
	});
};

ScreenState.prototype.onTile3Change = function (newTile3) {
	this.tile3 = newTile3;

	this.listeners.forEach((listener) => {
		listener.onRivalStateChange(this);
	});
};

ScreenState.prototype.onTile4Change = function (newTile4) {
	this.tile4 = newTile4;

	this.listeners.forEach((listener) => {
		listener.onRivalStateChange(this);
	});
};

ScreenState.prototype.onTile5Change = function (newTile5) {
	this.tile5 = newTile5;

	this.listeners.forEach((listener) => {
		listener.onRivalStateChange(this);
	});
};

ScreenState.prototype.onTile6Change = function (newTile6) {
	this.tile6 = newTile6;

	this.listeners.forEach((listener) => {
		listener.onRivalStateChange(this);
	});
};

ScreenState.prototype.onTile7Change = function (newTile7) {
	this.tile7 = newTile7;

	this.listeners.forEach((listener) => {
		listener.onRivalStateChange(this);
	});
};

ScreenState.prototype.listen = function (obj) {
	this.listeners.push(obj);
};

(function () {
  // Static initialization code
})();