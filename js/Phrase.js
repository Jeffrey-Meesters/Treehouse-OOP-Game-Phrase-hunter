class Phrase {
    constructor(phrase = 'hello') {
        this.phrase = phrase;
    }

    addPhraseToDisplay() {
        // build example
        // <div id="phrase" class="section">
        //     <ul>
        //         <li class="hide letter h">h</li>
        //         <li class="hide letter o">o</li>
        //         <li class="hide letter w">w</li>
        //         <li class="hide space"> </li>
        //         <li class="hide letter a">a</li>
        //         <li class="hide letter r">r</li>
        //         <li class="hide letter e">e</li>
        //         <li class="hide space"> </li>
        //         <li class="hide letter y">y</li>
        //         <li class="hide letter o">o</li>
        //         <li class="hide letter u">u</li>
        //     </ul>
        // </div>
        const phrase = this.phrase;
        const phraseWrapper = document.createElement('div');
        phraseWrapper.setAttribute('id', 'phrase');
        phraseWrapper.setAttribute('class', 'section');

        const letterList = document.createElement('ul');

        for (let i = 0; i < phrase.length; i ++ ) {
            // TODO this does not yet check for spaces
            const letterItem = `<li class="hide letter ${phrase[i]}"> ${phrase[i]} </li>`;
            letterList.append(letterItem)
        }

        phraseWrapper.append(letterList);
    }

    checkLetter() {
        // TODO: write code that checks player input and if it is a match with the phrase
    }

    showMatchedLetter() {
        // TODO: write code that reveals matching letter(s)
    }
}
