function BagState(itemCount, items, extendedItems, money, gameCornerCoins) {
	this.itemCount = itemCount;
	this.items = items;
	this.extendedItems = extendedItems;
	this.listeners = [];
	this.money = money;
    this.gameCornerCoins = gameCornerCoins;
	this.gamehook = null;
}

BagState.ConstructBagStateFromGamehook = function (gamehook) {
	var itemCount = 0;
	var items = [];
	var extendedItems = [];
	var money = 0;
	var gameCornerCoins = 0;
	
	if(gamehook.properties.player && gamehook.properties.player.itemCount && gamehook.properties.player.itemCount.value) {
		itemCount = gamehook.properties.player.itemCount.value;
	} else if(gamehook.properties.bag && gamehook.properties.bag.itemCount && gamehook.properties.bag.itemCount.value) {
		itemCount = gamehook.properties.bag.itemCount.value;
	}
	if(gamehook.properties.player && gamehook.properties.player.money && gamehook.properties.player.money.value) {
		money = gamehook.properties.player.money.value;
	} else if(gamehook.properties.bag && gamehook.properties.bag.money && gamehook.properties.bag.money.value) {
		money = gamehook.properties.bag.money.value;
	}
	if(gamehook.properties.player && gamehook.properties.player.gameCornerCoins && gamehook.properties.player.gameCornerCoins.value) {
		gameCornerCoins = gamehook.properties.player.gameCornerCoins.value;
	} else if(gamehook.properties.bag && gamehook.properties.bag.gameCornerCoins && gamehook.properties.bag.gameCornerCoins.value) {
		gameCornerCoins = gamehook.properties.bag.gameCornerCoins.value;
	}
	
	if(gamehook.properties.player.items && gamehook.properties.player.items.length) {
		for(var i = 0; i < gamehook.properties.player.items.length; i++) {
			items.push(PlayerItemState.ConstructPlayerItemStateFromGamehook(gamehook, i, false));
		}
	} else if(gamehook.properties.bag.items && gamehook.properties.bag.items.length) {
		for(var i = 0; i < gamehook.properties.bag.items.length; i++) {
			items.push(PlayerItemState.ConstructPlayerItemStateFromGamehook(gamehook, i, false));
		}
	}
	
	/*if(gamehook.properties.player.extendedItems && gamehook.properties.player.extendedItems.length) {
		for(var i = 0; i < gamehook.properties.player.extendedItems.length; i++) {
			extendedItems.push(PlayerItemState.ConstructPlayerItemStateFromGamehook(gamehook, i, true));
		}
	} else if(gamehook.properties.bag.extendedItems && gamehook.properties.bag.extendedItems.length) {
		for(var i = 0; i < gamehook.properties.bag.extendedItems.length - gamehook.properties.bag.items.length; i++) {
			extendedItems.push(PlayerItemState.ConstructPlayerItemStateFromGamehook(gamehook, i, true));
		}
	}*/
	
	var newObj = new BagState(itemCount, items, extendedItems, money, gameCornerCoins);
	newObj.gamehook = gamehook;
	
	items.forEach((item) => {
		item.listen(newObj);
	});
	
	if(gamehook.properties.player && gamehook.properties.player.itemCount) {
		gamehook.properties.player.itemCount.change(async(x) => {
			//console.log("gamehook.properties.player.itemCount.change");
			if(x && (x.value || x.value === 0)) {
				//console.log("onItemCountChange:", x.value);
				newObj.onItemCountChange(x.value);
			}
		});
	} else if(gamehook.properties.bag && gamehook.properties.bag.itemCount) {
		gamehook.properties.bag.itemCount.change(async(x) => {
			//console.log("gamehook.properties.bag.itemCount.change");
			if(x && (x.value || x.value === 0)) {
				//console.log("onItemCountChange:", x.value);
				newObj.onItemCountChange(x.value);
			}
		});
	}
	if(gamehook.properties.player && gamehook.properties.player.money) {
		gamehook.properties.player.money.change(async(x) => {
			//console.log("gamehook.properties.player.money.change");
			if(x && (x.value || x.value === "")) {
				//console.log("onMoneyChange:", x.value);
				newObj.onMoneyChange(x.value);
			}
		});
	} else if(gamehook.properties.bag && gamehook.properties.bag.money) {
		gamehook.properties.bag.money.change(async(x) => {
			//console.log("gamehook.properties.bag.money.change");
			if(x && (x.value || x.value === "")) {
				//console.log("onMoneyChange:", x.value);
				newObj.onMoneyChange(x.value);
			}
		});
	}
	if(gamehook.properties.player && gamehook.properties.player.gameCornerCoins) {
		gamehook.properties.player.gameCornerCoins.change(async(x) => {
			//console.log("gamehook.properties.player.gameCornerCoins.change");
			if(x && (x.value || x.value === "")) {
				//console.log("onGameCornerCoinsChange:", x.value);
				newObj.onGameCornerCoinsChange(x.value);
			}
		});
	} else if(gamehook.properties.bag && gamehook.properties.bag.gameCornerCoins) {
		gamehook.properties.bag.gameCornerCoins.change(async(x) => {
			//console.log("gamehook.properties.bag.gameCornerCoins.change");
			if(x && (x.value || x.value === "")) {
				//console.log("onGameCornerCoinsChange:", x.value);
				newObj.onGameCornerCoinsChange(x.value);
			}
		});
	}
	
	return newObj;
};

//PlayerState.static = null;
//PlayerState.staticMethod = function() {
//};
BagState.prototype.onItemCountChange = function (newItemCount) {
	this.itemCount = newItemCount;

	this.listeners.forEach((listener) => {
		listener.onBagStateChange(this);
	});
};

BagState.prototype.onItemsChange = function (itemObj) {
	this.listeners.forEach((listener) => {
		listener.onBagStateChange(this);
	});
};

BagState.prototype.onExtendedItemsChange = function (itemObj) {
	this.listeners.forEach((listener) => {
		listener.onBagStateChange(this);
	});
};

BagState.prototype.onPlayerItemStateChange = function (item) {
	//console.log("onPlayerItemStateChange");
	this.listeners.forEach((listener) => {
		listener.onBagStateChange(this);
	});
};

BagState.prototype.onMoneyChange = function (newMoney) {
	this.money = newMoney;

	this.listeners.forEach((listener) => {
		listener.onPlayerStateChange(this);
	});
};

BagState.prototype.onGameCornerCoinsChange = function (newGameCornerCoins) {
	this.gameCornerCoins = newGameCornerCoins;

	this.listeners.forEach((listener) => {
		listener.onPlayerStateChange(this);
	});
};

BagState.prototype.listen = function (obj) {
	this.listeners.push(obj);
};

(function () {
  // Static initialization code
})();