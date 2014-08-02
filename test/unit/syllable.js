test("get syllables", function() {
	Onsetsu.Syllable.getPai();
});

test("matches", function() {
	var pai = Onsetsu.Syllable.getPai();
	var pai2 = Onsetsu.Syllable.getPai();
	var nif = Onsetsu.Syllable.getNif();
	
	assert(pai.matches(pai));
	assert(!(pai.matches(nif)));
});

