class Game {
    // add a constructor method to initialize values
    constructor() {
        this.missed = 0;
        this.phrases = ['goodbye', 'yolo', 'javascript', 'css', 'hi there', 'how are you'];
        // phraseClass will be set in the startGame method
        this.phraseClass = '';
    }

    getRandomPhrase() {
        // get a random number, but not higher then the lenght of the phrases array
        const randomNum = Math.floor(Math.random() * this.phrases.length);
        // use the random number to take a phrase from the array
        this.chosenPhrase = this.phrases[randomNum];
        // return the chosenPhrase
        return this.chosenPhrase;
    }

    handleInteraction(event, letter) {

        // check if the letter is in the chosen phrase via the checkLetter method in Phrase.js
        const letterIsInPhrase = this.phraseClass.checkLetter(letter);

        if (letterIsInPhrase) {
            // if the letter is in the phrase show the letter via the showMatchedLetter method in Phrase.js
            this.phraseClass.showMatchedLetter(letter);
            // and check if the player has won
            this.checkForWin();
        } else {
            // else the letter is not in the phrase:
            // check if the event is an keyboard event
            if (event instanceof KeyboardEvent) {
                // collect all button elements on screen which have the key class
                const buttonElements = document.querySelectorAll('.key');
                let targetLetter;

                // loop over all button elements
                for (let i = 0; i < buttonElements.length; i ++) {
                    // if the text of the button element is equal to the keyboard input
                    // then save that element in targetLetter
                    if (buttonElements[i].textContent === letter) {
                        targetLetter = buttonElements[i];
                    }
                }

                // add the class wrong to this element
                targetLetter.classList.add('wrong');
            } else {
                // else this was an input via clicking on the onscreen keyboard
                // so add the 'wrong' class to the event target
                event.target.classList.add('wrong');
            }

            // remove a players live
            this.removeLife();
        }
    }

    removeLife() {
        // first add 1 to the missed letters
        this.missed += 1;
        // remove the first element form the tries (remove a heart from the view)
        document.getElementsByClassName('tries')[0].remove();

        // if the user has 5 misses then end the game and the player lost
        if (this.missed === 5) {
            // call gameover and pass some text
            this.gameOver('lost, no more lives left!');
        }
    }

    checkForWin() {
        // check how many letters have the show class
        const showCount = document.querySelectorAll('.show').length;
        // check how many characters the phrase has
        const letterCount = this.phraseClass.phrase.length;

        // if the showCount equeals the letterCount then the game is won
        if (letterCount === showCount) {
            // call gameover and pass the text including the guessed phrase
            this.gameOver(`You won! The phrase was <i>"${this.chosenPhrase}</i>"`);
        }
    }

    gameOver(message) {
        // show the overlay
        document.getElementById('overlay').style.display = 'block';
        // show the given message in the overlay
        document.getElementById('game-over-message').innerHTML = message;
        // set the startgame buttons text to reset game
        document.getElementById('btn__reset').textContent = 'Reset Game';
    }

    startGame() {
        // if the textcontent of the btn__reset equals Reset Game then reload the page
        // to reset all values and return false > now the overlay will show with Start Game button
        if (document.getElementById('btn__reset').textContent === 'Reset Game') {
            window.location.reload(true);
            return false;
        }

        // get a random phrase
        const phrase = this.getRandomPhrase();
        // initialize the Phrase class with the random phrase
        this.phraseClass = new Phrase(phrase);
        // call the addPhraseToDisplay method of the Phrase class to show the phrase on screen
        this.phraseClass.addPhraseToDisplay();
        // hide the overlay
        document.getElementById('overlay').style.display = 'none';
    }
}
