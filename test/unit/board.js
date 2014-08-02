test("empty per default", function() {
	var board = new Onsetsu.Board(5),
		empty =  Onsetsu.Syllable.getEmpty();
	
	assert(board.get(2, 3).matches(empty));
});

test("place syllable", function() {
	var board = new Onsetsu.Board(5),
		empty = Onsetsu.Syllable.getEmpty(),
		nif = Onsetsu.Syllable.getNif();
	
	board.set(2, 3, nif);
	
	assert(!(board.get(2, 3).matches(empty)));
	assert(board.get(2, 3) === nif);
});
