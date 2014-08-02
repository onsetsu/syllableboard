test("get syllable", function() {
	Onsetsu.Syllable.getPai();
});

test("simple matching", function() {
	var pai = Onsetsu.Syllable.getPai();
	var pai2 = Onsetsu.Syllable.getPai();
	var nif = Onsetsu.Syllable.getNif();
	
	assert(pai.matches(pai));
	assert(!(pai.matches(nif)));
});

test("complex matching", function() {
	var light = Onsetsu.Syllable.getLight();
	var sol = Onsetsu.Syllable.getSol();
	var omnipotency = Onsetsu.Syllable.getOmnipotency();
	
	assert(sol.matches(light));
	assert(!(light.matches(sol)));
	assert(omnipotency.matches(light));
	assert(!(omnipotency.matches(sol)));
});
