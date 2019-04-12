class Prediction {
    constructor(winner, loser, winnerScore, loserScore, OT, comments = '') {
        this.winner = winner;
        this.loser = loser;
        this.winnerScore = winnerScore;     
        this.loserScore = loserScore;
        this.OT = OT;
        this.comments = comments;
    }

    get winner() {
        return this._winner;
    }

    get loser() {
        return this._loser;
    }

    get winnerScore() {
        return this._winnerScore;
    }

    get loserScore() {
        return this._loserScore;
    }

    get OT() {
        return this._OT;
    }

    get comments() {
        return this._comments;
    }

    set winner(value) {
        return this._winner = value;
    }

    set loser(value) {
        return this._loser = value;
    }

    set winnerScore(value) {
        return this._winnerScore = value;
    }

    set loserScore(value) {
        return this._loserScore = value;
    }

    set OT(value) {
        return this._OT = value;
    }

    set comments(value) {
        return this._comments = value;
    }
}