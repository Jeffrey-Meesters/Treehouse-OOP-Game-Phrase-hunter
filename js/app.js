// initialize the Game class
const game = new Game();

function resetDisplay() {
    // when btn__reset is clicked call startGame from the Game class
    game.startGame();
}

function markButton(event) {
    // if the event is een click on the onscreen button:
    if (event.target.tagName === 'BUTTON') {
        // get the clicked letter
        const letter = event.target.textContent

        // set the event target
        const targetLetter = event.target;
        // disable this letter so it cannot be clicked anymore
        targetLetter.setAttribute('disabled', 'true');
        // add the chosen class to the existing classes:
        // I forgot how to do that without erasing existing classes so I looked it up:
        // https://www.w3schools.com/howto/howto_js_add_class.asp
        // this is maner is used troughout the code
        targetLetter.classList.add('chosen');

        // call the handleInteraction method and pass the event object and the letter
        game.handleInteraction(event, letter);

    // I rememberd how to check for key events, but not how to differentiate between event types:
    // https://stackoverflow.com/questions/42861107/how-to-check-if-an-object-is-a-keyboardevent-in-javascript
    // So if the event is en keyboard event do:
    } else if (event instanceof KeyboardEvent) {
        // store the typed letter as a lowerCase
        const input = event.key.toLowerCase();
        // regex that checks for lower case letter in the alphabet
        const letterReg = /[a-z]/g;
        // check if the letter is actually a letter
        const inputIsLetter = input.match(letterReg);

        // if the input is a letter
        if (inputIsLetter) {
            // get all on screen button elements
            const buttonElements = document.querySelectorAll('.key');
            let targetLetter;

            // loop over the button elements
            for (let i = 0; i < buttonElements.length; i ++) {
                // if the button elements text is the same as the input
                // store that element in targetLetter
                if (buttonElements[i].textContent === input) {
                    targetLetter = buttonElements[i];
                }
            }

            // set the element to disabled so the user cannot click it anymore
            targetLetter.setAttribute('disabled', 'true');
            // add the class chosen to the element
            targetLetter.classList.add('chosen');
            // call the handleInteraction method and pass the event object and the letter
            game.handleInteraction(event, input);
        }
    }
}

// eventlistener that listens for clicks on the btn__reset
document.getElementById('btn__reset').addEventListener('click', resetDisplay);

// eventlistener that listens for clicks on the onscreen buttons
document.getElementById('qwerty').addEventListener('click', markButton);

// eventlistener that listens for keypresses on the keyboard
document.addEventListener("keypress", markButton);
