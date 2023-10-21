const basketballGame = {
    score: 5,
    fouls: 0,
    freeThrow() {
        this.score += 2;
        return this
    },
    basket() {
        this.score += 2;
        return this
    },
    threePointer() {
        this.score += 3;
        return this
    },
    foul() {
        this.fouls += 2;
        return this
    },

    halfTime() {
        console.log('Halftime score is ' + this.score, 'Fouls are ' + this.fouls);
        return this
    },

    fullTime() {
        console.log('Final score is ' + this.score, 'Fouls are ' +this.fouls);
    }     
} 
    
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().foul().halfTime().freeThrow().threePointer().basket().foul().fullTime();