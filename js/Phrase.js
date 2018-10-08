class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    addPhraseToDisplay() {
        const phrase = this.phrase;
        console.log(phrase);

        const list = document.getElementById('phrase').firstElementChild;
        console.log(list);
        for (let i = 0; i < phrase.length; i ++ ) {
            // TODO this does not yet check for spaces
            const letterItem = `<li class="hide letter ${phrase[i]}"> ${phrase[i]} </li>`;
            // https://stackoverflow.com/questions/6304453/javascript-append-html-to-container-element-without-innerhtml
            list.insertAdjacentHTML('beforeEnd', letterItem)
        }
    }

    checkLetter() {
        // TODO: write code that checks player input and if it is a match with the phrase
    }

    showMatchedLetter() {
        // TODO: write code that reveals matching letter(s)
    }
}
