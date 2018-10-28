class Phrase {
    // add a constructor method to save a given phrase to this class
    constructor(phrase) {
        this.phrase = phrase;
    }

    addPhraseToDisplay() {
        // get the phrase
        const phrase = this.phrase;
        // get the <ul> to append letters too
        const list = document.getElementById('phrase').firstElementChild;

        // loop over the phrase
        for (let i = 0; i < phrase.length; i ++ ) {
            let letterItem = '';

            // if the phrase includes a space then give it the class hide and show
            // this might be confusing, but the checkForWin method in Game.js is
            // counting all the show classes but at the same time this list item needs
            // to be hidden, which I gave an opacity = 0 in the css, so it is taking
            // its space on screen, but not visible
            if (phrase[i] === ' ') {
                letterItem = `<li class="hide show letter ${phrase[i]}"> ${phrase[i]} </li>`;
            } else {
                // if the item is a letter add it to the list
                letterItem = `<li class="letter ${phrase[i]}"> ${phrase[i]} </li>`;
            }

            // Add every letterItem to the <ul> in the right order:
            // https://stackoverflow.com/questions/6304453/javascript-append-html-to-container-element-without-innerhtml
            list.insertAdjacentHTML('beforeEnd', letterItem)
        }
    }

    checkLetter(letter) {
        // if the chosen letter matches a letter in the phrase return true, else false
        // A double exclamation mark converts a true or false value to a boolean
        // learned that at another course outside of Treehouse (https://codaisseur.com/)
        return !!this.phrase.match(letter);
    }

    showMatchedLetter(letter) {
        // get the elements that has the same classname as the letter (it was set in the addPhraseToDisplay method as class)
        const letterElements = document.getElementsByClassName(letter);
        for (let i = 0; i < letterElements.length; i ++) {
            // loop over all found letterElements and add class show to its existing classes
            letterElements[i].classList.add('show');
        }
    }
}
