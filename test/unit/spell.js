test("compose spell", function() {
	new Onsetsu.Spell("fireball", [Onsetsu.Syllable.getFire(),
	                               Onsetsu.Syllable.getChi(),
	                               Onsetsu.Syllable.getNif()
	                               ]);
});

test("circle", function() {
	var fireball = new Onsetsu.Spell("fireball", [Onsetsu.Syllable.getFire(),
	                               Onsetsu.Syllable.getChi(),
	                               Onsetsu.Syllable.getNif()
	                               ]);
	var greatFireball = new Onsetsu.Spell("great fireball", [Onsetsu.Syllable.getFire(),
	                                     Onsetsu.Syllable.getChi(),
	                                     Onsetsu.Syllable.getNif(),
	                                     Onsetsu.Syllable.getNif(),
	                                     Onsetsu.Syllable.getGam()
	                                     ]);
	
	assert(fireball.getCircle() === 2);
	assert(greatFireball.getCircle() === 4);
});

test("get syllables", function() {
	var syllables = [Onsetsu.Syllable.getFire(),
                     Onsetsu.Syllable.getChi(),
                     Onsetsu.Syllable.getNif()
                     ];
	var fireball = new Onsetsu.Spell("fireball", syllables);

	assert(fireball.getSyllables() === syllables);
});

test("execute", function() {
	var count = 0,
		syllables = [Onsetsu.Syllable.getFire(),
                     Onsetsu.Syllable.getChi(),
                     Onsetsu.Syllable.getNif()
                     ];
	var fireball = new Onsetsu.Spell("fireball", syllables, function() {
		count++;
		return 42;
	});

	assert(fireball.execute() === 42);
	assert(count === 1);
});
