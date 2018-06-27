//create constructor function?
function Game(playerOneName, playerTwoName, playerOneScore, playerTwoScore) {
    this.playerOneName = playerOneName;
    this.playerTwoName = playerTwoName;
    this.playerOneScore = playerOneScore;
    this.playerTwoScore = playerTwoScore;

    Game.prototype.getScore = function() {
        if (this.isGameOver()) {
            return this.playerWithHigherScore() + " wins";
        } else if (this.hasAdvantage()) {
            return this.playerWithHigherScore() + " has advantage";
        } else if (this.isDeuce()) {
            return "Deuce";
        } else {
            return this.playerOneName + "=" + this.convertScoreToString(this.playerOneScore) + "," + this.playerTwoName + "=" + this.convertScoreToString(this.playerTwoScore)
        }
    }
    
    Game.prototype.isGameOver = function() {
        if  (((this.playerOneScore >= 4) && (this.playerOneScore >= this.playerTwoScore + 2)) || 
            ((this.playerTwoScore >= 4) && (this.playerTwoScore >= this.playerOneScore + 2))) {
            return true;
        } else {
            return false;
        }	
    }
    
    Game.prototype.playerWithHigherScore = function() {
        if (this.playerOneScore > this.playerTwoScore) {
            return this.playerOneName
        } else {
            return this.playerTwoName
        }
    }
    
    Game.prototype.hasAdvantage = function() {
        if  (((this.playerOneScore >= 3) && (this.playerOneScore === this.playerTwoScore +1)) || 
            ((this.playerTwoScore >= 3) && (this.playerTwoScore === this.playerOneScore +1))) {
            return true;
        } else {
            return false;
        }
    }
    
    Game.prototype.isDeuce = function() { 
        if ((this.playerOneScore >= 3) && (this.playerOneScore === this.playerTwoScore)) {
            return true;
        } else {
            return false;
        }
    }
    
    Game.prototype.playerOneGainsPoint = function() {
        this.playerOneScore = this.playerOneScore +1
        return this.playerOneName + "has scored"
    }
    
    Game.prototype.playerTwoGainsPoint = function() {
        this.playerTwoScore = this.playerTwoScore +1
        return this.playerOneName + "has scored"
    }
    
    Game.prototype.convertScoreToString = function(initialScore) {
        switch(initialScore) {
            case 0:
                return 'Love';
                break;
            case 1: 
                return 'Fifteen';
                break;                     
            case 2:
                return 'Thirty';
                break;
            case 3: 
                return 'Forty';
                break;
        }
    }
}

// Test cases:
var game;
game = new Game("Nadal", "Federer", 0, 0)
console.log(game.playerOneScore, "-",game.playerTwoScore, " => ", game.getScore());

game = new Game("Nadal", "Federer", 0, 1)
console.log(game.playerOneScore, "-",game.playerTwoScore, " => ", game.getScore());

game = new Game("Nadal", "Federer", 2, 0)
console.log(game.playerOneScore, "-",game.playerTwoScore, " => ", game.getScore());

game = new Game("Nadal", "Federer", 0, 3)
console.log(game.playerOneScore, "-",game.playerTwoScore, " => ", game.getScore());

game = new Game("Nadal", "Federer", 3, 4)
console.log(game.playerOneScore, "-",game.playerTwoScore, " => ", game.getScore());

game = new Game("Nadal", "Federer", 4, 4)
console.log(game.playerOneScore, "-",game.playerTwoScore, " => ", game.getScore());

game = new Game("Nadal", "Federer", 5, 4)
console.log(game.playerOneScore, "-",game.playerTwoScore, " => ", game.getScore());

game = new Game("Nadal", "Federer", 5, 5)
console.log(game.playerOneScore, "-",game.playerTwoScore, " => ", game.getScore());

game = new Game("Nadal", "Federer", 7, 5)
console.log(game.playerOneScore, "-",game.playerTwoScore, " => ", game.getScore());

game = new Game("Nadal", "Federer", 68, 70)
console.log(game.playerOneScore, "-",game.playerTwoScore, " => ", game.getScore());







