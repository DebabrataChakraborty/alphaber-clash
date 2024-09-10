// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }
function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}

function continueGame() {
    const alphabet = getRandomAlphabet();
    console.log('your random alphabet', alphabet);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);

}


function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;
    console.log('player pressed',playerPressed);
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();

    if (playerPressed === expectedAlphabet) {
        console.log('you win')
    }
    else {
        console.log('try again!')
    }
}

document.addEventListener('keyup', handleKeyboardButtonPress)