class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [/*TODO: write phrases*/];
    }

    getRandomPhrase() {
        const randomNum = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNum];
    }

    handleInteraction() {
        // TODO: check the button that the user clicked matches with letter(s) in phrase

        /* TODO:
            If it does not: call removeLife()
            if it does: call Phrases' showMatchedLetter()
            and then call the checkForWin()
         */

    }

    removeLife() {
        //TODO: remove life, remove heart from board, if no more lifes end game
    }

    checkForWin() {
    //    TODO: check if player has selected all letters
    //    if so gameOver()
    }

    gameOver() {
    //    TODO: display a win or a lose scenario
    }

    startGame() {
        const phrase = this.getRandomPhrase();
        const phraseClass = new Phrase(phrase);
    }
}
