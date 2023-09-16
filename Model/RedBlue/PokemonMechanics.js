function PokemonMechanics() {
  // Constructor body
}

PokemonMechanics.getCritRate = function(baseSpeed) {
	return (Math.round(baseSpeed * 100 * 100 / 512) / 100);
};

(function () {
  // Static initialization code
})();
