(function(Onsetsu, undefined) {
    Onsetsu.Syllable = function(values) {
        this.values = values;
    };

    Onsetsu.Syllable.prototype.matches = function(syllable) {
        return _(syllable.values).difference(this.values).length === 0;
    };

    // single elements
    Onsetsu.Syllable.getFire = function() {
        return new Onsetsu.Syllable(['fire']);
    };
    Onsetsu.Syllable.getWater = function() {
        return new Onsetsu.Syllable(['water']);
    };
    Onsetsu.Syllable.getEarth = function() {
        return new Onsetsu.Syllable(['earth']);
    };
    Onsetsu.Syllable.getWind = function() {
        return new Onsetsu.Syllable(['wind']);
    };
    Onsetsu.Syllable.getLight = function() {
        return new Onsetsu.Syllable(['light']);
    };
    Onsetsu.Syllable.getShadow = function() {
        return new Onsetsu.Syllable(['shadow']);
    };

    // multi elements
    Onsetsu.Syllable.getSol = function() {
        return new Onsetsu.Syllable(['light', 'sol']);
    };
    Onsetsu.Syllable.getLuna = function() {
        return new Onsetsu.Syllable(['shadow', 'luna']);
    };
    Onsetsu.Syllable.getOmnipotency = function() {
        var elements = ['fire',
                        'water',
                        'earth',
                        'wind',
                        'light',
                        'shadow',
                        'omnipotency'
                        ];
        return new Onsetsu.Syllable(elements);
    };

    // 1 sp syllables
    Onsetsu.Syllable.getChi = function() {
        return new Onsetsu.Syllable(['chi']);
    };
    Onsetsu.Syllable.getMa = function() {
        return new Onsetsu.Syllable(['ma']);
    };
    Onsetsu.Syllable.getPai = function() {
        return new Onsetsu.Syllable(['pai']);
    };

    // 2 sp syllables
    Onsetsu.Syllable.getNif = function() {
        return new Onsetsu.Syllable(['nif']);
    };
    Onsetsu.Syllable.getKun = function() {
        return new Onsetsu.Syllable(['kun']);
    };
    Onsetsu.Syllable.getRyo = function() {
        return new Onsetsu.Syllable(['ryo']);
    };

    // 3 sp syllables
    Onsetsu.Syllable.getYun = function() {
        return new Onsetsu.Syllable(['yun']);
    };
    Onsetsu.Syllable.getTo = function() {
        return new Onsetsu.Syllable(['to']);
    };
    Onsetsu.Syllable.getRen = function() {
        return new Onsetsu.Syllable(['ren']);
    };

    // 5 sp syllables
    Onsetsu.Syllable.getGam = function() {
        return new Onsetsu.Syllable(['gam']);
    };
    Onsetsu.Syllable.getXau = function() {
        return new Onsetsu.Syllable(['xau']);
    };
    Onsetsu.Syllable.getEx = function() {
        return new Onsetsu.Syllable(['ex']);
    };

    // representing empty field
    Onsetsu.Syllable.getEmpty = function() {
        return new Onsetsu.Syllable(['empty']);
    };

})(Onsetsu);
