(function(Onsetsu, undefined){
	Onsetsu.ChainExecuter = function()
	{
		this.spells = [];
	};
	
	Onsetsu.ChainExecuter.prototype.execute = function()
	{
		_.each(this.spells, function(spell) {
			spell.execute();
		});
	};

	Onsetsu.ChainExecuter.prototype.add = function(spell)
	{
		this.spells.push(spell);
	};
	
	Onsetsu.ChainExecuter.prototype.get = function()
	{
		return this.spells;
	};
	
})(Onsetsu);
