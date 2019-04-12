class Prediction {
    constructor(winner, loser, winnerScore, loserScore, OT, comments = '', pointsEarned = 0) {
        this.winner = winner;
        this.loser = loser;
        this.winnerScore = winnerScore;     
        this.loserScore = loserScore;
        this.OT = OT;
        this.comments = comments;
        this.pointsEarned = pointsEarned;
    }
    
    

    title() {
        return this.winner + ' vs ' + this.loser;
    }

    calcScore(actualWinner, actualWinnerScore, actualLoserScore, actualOT) {
        if (this.winner == actualWinner)
        {
            this.pointsEarned += 15;
        }

        if (this.winnerScore == actualWinnerScore) {
            this.pointsEarned += 25;
        }

        if (this.loserScore == actualLoserScore) {
            this.pointsEarned += 25;
        }

        if (this.OT == actualOT) {
            this.pointsEarned += 10;
        }

        if (this.OT == actualOT & this.loserScore == actualLoserScore & this.winnerScore == actualWinnerScore & this.winner == actualWinner) {
            this.pointsEarned += 25
        }

        if (this.OT != actualOT & this.loserScore != actualLoserScore & this.winnerScore != actualWinnerScore & this.winner != actualWinner) {
            this.pointsEarned = -20;
        }

        return this.pointsEarned;
    }

   


}