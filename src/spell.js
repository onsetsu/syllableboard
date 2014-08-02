(function(Onsetsu, undefined){
	Onsetsu.Spell = function(name, syllables, fn) {
		this.name = name;
		this.syllables = syllables;
		this.fn = fn || function() {};
	};
	
	Onsetsu.Spell.prototype.getCircle = function()
	{
		return this.getSyllables().length - 1;
	};
	
	Onsetsu.Spell.prototype.getSyllables = function()
	{
		return this.syllables;
	};
	
	Onsetsu.Spell.prototype.execute = function()
	{
		return this.fn();
	};
})(Onsetsu);
