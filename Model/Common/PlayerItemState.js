function PlayerItemState(item, itemval, quantity) {
	this.item = item;
	this.itemval = itemval;
	this.quantity = quantity;
	this.listeners = [];
	this.gamehook = null;
}

PlayerItemState.ConstructPlayerItemStateFromGamehook = function (gamehook, idx, isExtendedItem) {
	var item = "";
	var itemval = 0;
	var quantity = 0;
				
	if(!isExtendedItem && gamehook.properties.player && gamehook.properties.player.items && gamehook.properties.player.items[idx] && gamehook.properties.player.items[idx].item && gamehook.properties.player.items[idx].item.value) {
		item = gamehook.properties.player.items[idx].item.value;
	} else if(!isExtendedItem && gamehook.properties.bag && gamehook.properties.bag.items && gamehook.properties.bag.items[idx] && gamehook.properties.bag.items[idx].item && gamehook.properties.bag.items[idx].item.value) {
		item = gamehook.properties.bag.items[idx].item.value;
	} else if(isExtendedItem && gamehook.properties.player && gamehook.properties.player.extendedItems && gamehook.properties.player.extendedItems[idx] && gamehook.properties.player.extendedItems[idx].item && gamehook.properties.player.extendedItems[idx].item.value) {
		item = gamehook.properties.player.extendedItems[idx].item.value;
	} else if(isExtendedItem && gamehook.properties.bag && gamehook.properties.bag.extendedItems && gamehook.properties.bag.extendedItems[idx + gamehook.properties.bag.items.length] && gamehook.properties.bag.extendedItems[idx + gamehook.properties.bag.items.length].item && gamehook.properties.bag.extendedItems[idx + gamehook.properties.bag.items.length].item.value) {
		item = gamehook.properties.bag.extendedItems[idx + gamehook.properties.bag.items.length].item.value;
	}
	if(!isExtendedItem && gamehook.properties.player && gamehook.properties.player.items && gamehook.properties.player.items[idx] && gamehook.properties.player.items[idx].itemval && gamehook.properties.player.items[idx].itemval.value) {
		itemval = gamehook.properties.player.items[idx].itemval.value;
	} else if(!isExtendedItem && gamehook.properties.bag && gamehook.properties.bag.items && gamehook.properties.bag.items[idx] && gamehook.properties.bag.items[idx].itemval && gamehook.properties.bag.items[idx].itemval.value) {
		itemval = gamehook.properties.bag.items[idx].itemval.value;
	} else if(isExtendedItem && gamehook.properties.player && gamehook.properties.player.extendedItems && gamehook.properties.player.extendedItems[idx] && gamehook.properties.player.extendedItems[idx].itemval && gamehook.properties.player.extendedItems[idx].itemval.value) {
		itemval = gamehook.properties.player.extendedItems[idx].itemval.value;
	} else if(isExtendedItem && gamehook.properties.bag && gamehook.properties.bag.extendedItems && gamehook.properties.bag.extendedItems[idx + gamehook.properties.bag.items.length] && gamehook.properties.bag.extendedItems[idx + gamehook.properties.bag.items.length].itemval && gamehook.properties.bag.extendedItems[idx + gamehook.properties.bag.items.length].itemval.value) {
		itemval = gamehook.properties.bag.extendedItems[idx + gamehook.properties.bag.items.length].itemval.value;
	}
	if(!isExtendedItem && gamehook.properties.player && gamehook.properties.player.items && gamehook.properties.player.items[idx] && gamehook.properties.player.items[idx].quantity && gamehook.properties.player.items[idx].quantity.value) {
		quantity = gamehook.properties.player.items[idx].quantity.value;
	} else if(!isExtendedItem && gamehook.properties.bag && gamehook.properties.bag.items && gamehook.properties.bag.items[idx] && gamehook.properties.bag.items[idx].quantity && gamehook.properties.bag.items[idx].quantity.value) {
		quantity = gamehook.properties.bag.items[idx].quantity.value;
	} else if(isExtendedItem && gamehook.properties.player && gamehook.properties.player.extendedItems && gamehook.properties.player.extendedItems[idx] && gamehook.properties.player.extendedItems[idx].quantity && gamehook.properties.player.extendedItems[idx].quantity.value) {
		quantity = gamehook.properties.player.extendedItems[idx].quantity.value;
	} else if(isExtendedItem && gamehook.properties.bag && gamehook.properties.bag.extendedItems && gamehook.properties.bag.extendedItems[idx + gamehook.properties.bag.items.length] && gamehook.properties.bag.extendedItems[idx + gamehook.properties.bag.items.length].quantity && gamehook.properties.bag.extendedItems[idx + gamehook.properties.bag.items.length].quantity.value) {
		quantity = gamehook.properties.bag.extendedItems[idx + gamehook.properties.bag.items.length].quantity.value;
	}

	var newObj = new PlayerItemState(item, itemval, quantity);
	newObj.gamehook = gamehook;

	if(!isExtendedItem && gamehook.properties.player && gamehook.properties.player.items) {
		gamehook.properties.player.items[idx].item.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onItemChange[", idx, "]:", x.value);
				newObj.onItemChange(x.value);
			}
		});
	} else if(!isExtendedItem && gamehook.properties.bag && gamehook.properties.bag.items) {
		gamehook.properties.bag.items[idx].item.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onItemChange[", idx, "]:", x.value);
				newObj.onItemChange(x.value);
			}
		});
	} else if(isExtendedItem && gamehook.properties.player && gamehook.properties.player.extendedItems) {
		gamehook.properties.player.extendedItems[idx].item.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onItemChange[", (idx + gamehook.properties.player.items.length), "]:", x.value);
				newObj.onItemChange(x.value);
			}
		});
	} else if(isExtendedItem && gamehook.properties.bag && gamehook.properties.bag.extendedItems){
		gamehook.properties.bag.extendedItems[idx + gamehook.properties.bag.items.length].item.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onItemChange[", (idx + gamehook.properties.bag.items.length), "]:", x.value);
				newObj.onItemChange(x.value);
			}
		});
	}
	if(!isExtendedItem && gamehook.properties.player && gamehook.properties.player.items) {
		gamehook.properties.player.items[idx].itemval.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onItemvalChange[", idx, "]:", x.value);
				newObj.onItemvalChange(x.value);
			}
		});
	} else if(!isExtendedItem && gamehook.properties.bag.items && gamehook.properties.bag.items) {
		gamehook.properties.bag.items[idx].itemval.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onItemvalChange[", idx, "]:", x.value);
				newObj.onItemvalChange(x.value);
			}
		});
	} else if(isExtendedItem && gamehook.properties.player && gamehook.properties.player.extendedItems) {
		gamehook.properties.player.extendedItems[idx].itemval.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onItemvalChange[", (idx + gamehook.properties.player.items.length), "]:", x.value);
				newObj.onItemvalChange(x.value);
			}
		});
	} else if(isExtendedItem && gamehook.properties.bag && gamehook.properties.bag.extendedItems) {
		gamehook.properties.bag.extendedItems[idx + gamehook.properties.bag.items.length].itemval.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onItemvalChange[", (idx + gamehook.properties.bag.items.length), "]:", x.value);
				newObj.onItemvalChange(x.value);
			}
		});
	}
	if(!isExtendedItem && gamehook.properties.player && gamehook.properties.player.items) {
		gamehook.properties.player.items[idx].quantity.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onQuantityChange[", idx, "]:", x.value);
				newObj.onQuantityChange(x.value);
			}
		});
	} else if(!isExtendedItem && gamehook.properties.bag && gamehook.properties.bag.items) {
		gamehook.properties.bag.items[idx].quantity.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onQuantityChange[", idx, "]:", x.value);
				newObj.onQuantityChange(x.value);
			}
		});
	} else if(isExtendedItem && gamehook.properties.player && gamehook.properties.player.extendedItems) {
		gamehook.properties.player.extendedItems[idx].quantity.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onQuantityChange[", (idx + gamehook.properties.player.items.length), "]:", x.value);
				newObj.onQuantityChange(x.value);
			}
		});
	} else if(isExtendedItem && gamehook.properties.bag && gamehook.properties.bag.extendedItems) {
		gamehook.properties.bag.extendedItems[idx + gamehook.properties.bag.items.length].quantity.change(async(x) => {
			if(x && (x.value || x.value === 0)) {
				//console.log("onQuantityChange[", (idx + gamehook.properties.bag.items.length), "]:", x.value);
				newObj.onQuantityChange(x.value);
			}
		});
	}

	return newObj;
};

//PlayerState.static = null;
//PlayerState.staticMethod = function() {
//};
PlayerItemState.prototype.onItemChange = function (newItem) {
	this.item = newItem;

	this.listeners.forEach((listener) => {
		listener.onPlayerItemStateChange(this);
	});
};

PlayerItemState.prototype.onItemvalChange = function (newItemval) {
	this.itemval = newItemval;

	this.listeners.forEach((listener) => {
		listener.onPlayerItemStateChange(this);
	});
};

PlayerItemState.prototype.onQuantityChange = function (newQuantity) {
	this.quantity = newQuantity;

	this.listeners.forEach((listener) => {
		listener.onPlayerItemStateChange(this);
	});
};

PlayerItemState.prototype.listen = function (obj) {
	this.listeners.push(obj);
};

(function () {
  // Static initialization code
})();