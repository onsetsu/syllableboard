(function(Onsetsu, undefined) {
    Onsetsu.Chain = function() {
        this.spells = [];
    };

    Onsetsu.Chain.prototype.execute = function() {
        _.each(this.spells, function(spell) {
            spell.execute();
        });
    };

    Onsetsu.Chain.prototype.add = function(spell) {
        this.spells.push(spell);
    };

    Onsetsu.Chain.prototype.get = function()
    {
        return this.spells;
    };

})(Onsetsu);
