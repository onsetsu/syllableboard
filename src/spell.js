(function(Onsetsu, undefined){
	Onsetsu.Spell = function(name, syllables) {
		this.name = name;
		this.syllables = syllables;
	};
	
	Onsetsu.Spell.prototype.getCircle = function()
	{
		return this.getSyllables().length - 1;
	};
	
	Onsetsu.Spell.prototype.getSyllables = function()
	{
		return this.syllables;
	};
})(Onsetsu);
