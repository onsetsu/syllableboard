test("add spell", function() {
	var chain = new Onsetsu.ChainExecuter();
	chain.add("spell1");
	chain.add("spell2");
	
	var spells = chain.get();
	assert(spells.length === 2);
	assert(spells[0] === "spell1");
	assert(spells[1] === "spell2");
});

test("execute spells", function() {
	var executed = [],
		spell1 = new Onsetsu.Spell("spell1", [], function() { executed.push("spell1"); }),
		spell2 = new Onsetsu.Spell("spell2", [], function() { executed.push("spell2"); }),
		spell3 = new Onsetsu.Spell("spell3", [], function() { executed.push("spell3"); }),
		chain = new Onsetsu.ChainExecuter();
	
	chain.add(spell1);
	chain.add(spell2);
	chain.add(spell3);

	chain.execute();
	
	assert(executed.length === 3);
	assert(executed[0] === "spell1");
	assert(executed[1] === "spell2");
	assert(executed[2] === "spell3");
});
