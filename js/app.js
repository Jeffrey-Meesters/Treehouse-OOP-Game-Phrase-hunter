const game = new Game();

function resetDisplay() {
    game.startGame();
}

// https://stackoverflow.com/questions/42861107/how-to-check-if-an-object-is-a-keyboardevent-in-javascript
function markButton(event) {
    if (event.target.tagName === 'BUTTON') {
        const letter = event.target.textContent

        const targetLetter = event.target;
        targetLetter.setAttribute('disabled', 'true');
        // https://www.w3schools.com/howto/howto_js_add_class.asp
        targetLetter.classList.add('chosen');

        game.handleInteraction(event, letter);
    } else if (event instanceof KeyboardEvent) {
        const input = event.key.toLowerCase();
        const letterReg = /[a-z]/g;
        const inputIsLetter = input.match(letterReg);

        if (inputIsLetter) {
            const buttonElements = document.querySelectorAll('.key');
            let targetLetter;

            for (let i = 0; i < buttonElements.length; i ++) {
                if (buttonElements[i].textContent === input) {
                    targetLetter = buttonElements[i];
                }
            }

            targetLetter.setAttribute('disabled', 'true');
            targetLetter.classList.add('chosen');
            game.handleInteraction(event, input);
        }
    }
}

document.getElementById('btn__reset').addEventListener('click', resetDisplay);

document.getElementById('qwerty').addEventListener('click', markButton)
document.addEventListener("keypress", markButton);
