const basketballGame = {
    score: 27,
    freeThrow() {
    this.score += 2;
    },
    basket() {
    this.score += 2;
    },
    threePointer() {
    this.score += 3;
    },
    halfTime() {
    console.log('Halftime score is '+this.score);
    }
}
    
basketballGame.basket().freeThrow().basket().threePointer().halfTime()