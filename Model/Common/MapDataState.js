function MapDataState(tileset, height, width, palette, lastMapLocation) {
	this.tileset = tileset; // int
	this.height = height; // int
	this.width = width; // int
	this.palette = palette; // int
	this.lastMapLocation = lastMapLocation; // string
	this.listeners = [];
	this.gamehook = null;
}

MapDataState.ConstructMapDataStateFromGamehook = function (gamehook) {
	var tileset = 0;
	var height = 0;
	var width = 0;
	var palette = 0;
	var lastMapLocation = "";

	if(gamehook.properties && gamehook.properties && gamehook.properties.overworld && gamehook.properties.overworld.mapData && gamehook.properties.overworld.mapData.tileset && gamehook.properties.overworld.mapData.tileset.value) {
		tileset = gamehook.properties.overworld.mapData.tileset.value;
	}

	if(gamehook.properties && gamehook.properties && gamehook.properties.overworld && gamehook.properties.overworld.mapData && gamehook.properties.overworld.mapData.height && gamehook.properties.overworld.mapData.height.value) {
		height = gamehook.properties.overworld.mapData.height.value;
	}

	if(gamehook.properties && gamehook.properties && gamehook.properties.overworld && gamehook.properties.overworld.mapData && gamehook.properties.overworld.mapData.width && gamehook.properties.overworld.mapData.width.value) {
		width = gamehook.properties.overworld.mapData.width.value;
	}

	if(gamehook.properties && gamehook.properties && gamehook.properties.overworld && gamehook.properties.overworld.mapData && gamehook.properties.overworld.mapData.palette && gamehook.properties.overworld.mapData.palette.value) {
		palette = gamehook.properties.overworld.mapData.palette.value;
	}

	if(gamehook.properties && gamehook.properties && gamehook.properties.overworld && gamehook.properties.overworld.mapData && gamehook.properties.overworld.mapData.lastMapLocation && gamehook.properties.overworld.mapData.lastMapLocation.value) {
		lastMapLocation = gamehook.properties.overworld.mapData.lastMapLocation.value;
	}

	var newObj = new MapDataState(tileset, height, width, palette, lastMapLocation);
	
	newObj.gamehook = gamehook;
	
	gamehook.properties.overworld.mapData.tileset.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onTilesetChange:", x.value);
			newObj.onTilesetChange(x.value);
		}
	});
	gamehook.properties.overworld.mapData.height.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onHeightChange:", x.value);
			newObj.onHeightChange(x.value);
		}
	});
	gamehook.properties.overworld.mapData.width.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onWidthChange:", x.value);
			newObj.onWidthChange(x.value);
		}
	});
	gamehook.properties.overworld.mapData.palette.change(async(x) => {
		if(x && (x.value || x.value === 0)) {
			//console.log("onPaletteChange:", x.value);
			newObj.onPaletteChange(x.value);
		}
	});
	gamehook.properties.overworld.mapData.lastMapLocation.change(async(x) => {
		if(x && (x.value || x.value === "")) {
			//console.log("onLastMapLocationChange:", x.value);
			newObj.onLastMapLocationChange(x.value);
		}
	});

	return newObj;
};

//PlayerState.static = null;
//PlayerState.staticMethod = function() {
//};
MapDataState.prototype.onTilesetChange = function (newTileset) {
	this.tileset = newTileset;

	this.listeners.forEach((listener) => {
		listener.onMapDataStateChange(this);
	});
};
MapDataState.prototype.onHeightChange = function (newHeight) {
	this.height = newHeight;

	this.listeners.forEach((listener) => {
		listener.onMapDataStateChange(this);
	});
};
MapDataState.prototype.onWidthChange = function (newWidth) {
	this.width = newWidth;

	this.listeners.forEach((listener) => {
		listener.onMapDataStateChange(this);
	});
};
MapDataState.prototype.onPaletteChange = function (newPalette) {
	this.palette = newPalette;

	this.listeners.forEach((listener) => {
		listener.onMapDataStateChange(this);
	});
};
MapDataState.prototype.onLastMapLocationChange = function (newLastMapLocation) {
	this.lastMapLocation = newLastMapLocation;

	this.listeners.forEach((listener) => {
		listener.onMapDataStateChange(this);
	});
};

MapDataState.prototype.listen = function (obj) {
	this.listeners.push(obj);
};

(function () {
  // Static initialization code
})();