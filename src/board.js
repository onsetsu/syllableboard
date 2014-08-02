(function(Onsetsu, undefined) {

    Onsetsu.Board = function(size) {
        this.field = [];
        for (var i = 0; i < size; i++) {
            this.field.push([]);
            for (var j = 0; j < size; j++) {
                this.field[i].push(Onsetsu.Syllable.getEmpty());
            }
        }
    };

    Onsetsu.Board.prototype.set = function(x, y, syllable)
    {
        this.field[x][y] = syllable;
    };

    Onsetsu.Board.prototype.get = function(x, y)
    {
        return this.field[x][y];
    };

    Onsetsu.Board.prototype.size = function() {
         return this.field.length;
    };

})(Onsetsu);
