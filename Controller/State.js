function State() {
	this.hasLocalStorage = hasLocalStorage();
	this.hasCookieStorage = hasCookieStorage();
	
	var state = null;
	if(this.hasLocalStorage) {
		try {
			state = window.localStorage.getItem(State.LocalStorageKey);
			state = JSON.parse(state);
		} catch(e) {
			state = null;
		}
	} else if(this.hasCookieStorage) {
		document.cookie.split("; ").forEach((kv) => {
			var loc = kv.indexOf("=");
			if(loc > 0) {
				var key = kv.substring(0, loc);
				var val = kv.substring(loc + 1);
				if(key == State.LocalStorageKey) {
					try {
						state = decodeURIComponent(val);
						state = JSON.parse(state);
					} catch(e) {
						state = null;
					}
				}
			}
		});
	}
	
	if(state == null) {
		state = initializeState();
		
		setState(state);
	}
	this.state = state;
}

State.LocalStorageKey = "pokemon_yellow_overlay_data";

function initializeState() {
	return { };
}

function hasLocalStorage() {
	var testVal = "test";
	
	try {
		window.localStorage.setItem(State.LocalStorageKey + "_test", testVal);
		window.localStorage.removeItem(State.LocalStorageKey + "_test");
		return true;
	} catch(e) {
		return false;
	}
}

function hasCookieStorage() {
	var testVal = "test";
	
	try {
		document.cookie = State.LocalStorageKey + "_test2" + "=" + testVal + ";expires=Fri, 31 Dec 9999 23:59:59 GMT";
		document.cookie = State.LocalStorageKey + "_test2" + "=" + ";expires=Thu, 01 Jan 1970 00:00:00 UTC";
		return true;
	} catch(e) {
		return false;
	}
}

function setState(state) {
	if(this.hasLocalStorage) {
		window.localStorage.setItem(State.LocalStorageKey, JSON.stringify(state));
	} else if(this.hasCookieStorage) {
		document.cookie = State.LocalStorageKey + "=" + encodeURIComponent(JSON.stringify(state)) + ";expires=Fri, 31 Dec 9999 23:59:59 GMT";
	}
}

State.prototype.getState = function() {
	return this.state;
};

State.prototype.setProperty = function(prop, value) {
	this.state[prop] = value;
	
	setState(this.state)
};

State.prototype.hasProperty = function(prop) {
	return Object.hasOwn(this.state, prop);
};

State.prototype.getProperty = function(prop) {
	if(!Object.hasOwn(this.state, prop)) {
		return null;
	} else {
		return this.state[prop];
	}
};

(function () {
  // Static initialization code
})();
