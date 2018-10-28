class Game {
    constructor() {
        this.missed = 0;
        this.phrases = ['goodbye', 'yolo', 'javascript'];
        this.phraseClass = '';
    }

    getRandomPhrase() {
        const randomNum = Math.floor(Math.random() * this.phrases.length);
        this.chosenPhrase = this.phrases[randomNum];
        return this.chosenPhrase;
    }

    handleInteraction(event, letter) {
        // TODO: check the button that the user clicked matches with letter(s) in phrase
        const letterIsInPhrase = this.phraseClass.checkLetter(letter);
        console.log(letterIsInPhrase);
        if (letterIsInPhrase) {
            this.phraseClass.showMatchedLetter(letter);
            this.checkForWin();
        } else {
            event.target.classList.add('wrong');
            this.removeLife();
        }
    }

    removeLife() {
        //TODO: remove life, remove heart from board, if no more lives end game
        this.missed += 1;
        document.getElementsByClassName('tries')[0].remove();

        if (this.missed === 5) {
            this.gameOver('lost, no more lives left!');
        }
    }

    checkForWin() {
    //    TODO: check if player has selected all letter
        const showCount = document.querySelectorAll('.show').length;
        const letterCount = this.phraseClass.phrase.length;

        if (letterCount === showCount) {
            this.gameOver(`You won! The word was ${this.chosenPhrase}`);
        }
    //    if so gameOver(`You won! The word was ${this.chosenPhrase}`)
    }

    gameOver(message) {
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('game-over-message').textContent = message;
    //    TODO: display a win or a lose message
    }

    startGame() {
        const phrase = this.getRandomPhrase();
        this.phraseClass = new Phrase(phrase);
        this.phraseClass.addPhraseToDisplay();
    }
}
