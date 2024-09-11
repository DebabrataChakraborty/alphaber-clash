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


if(playerPressed === 'Escape'){
    gameOver();
}


    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();

    if (playerPressed === expectedAlphabet) {
        console.log('you win')
        continueGame();
        removeBackgroundColorById(expectedAlphabet);

        const currentScore =getTextElementValueById('current-score');
        const newScore =currentScore + 1;
        setTextElementValueById('current-score',newScore)


    }
    else {
       const currentLife=getTextElementValueById('current-life');
       const newLife = currentLife - 1;
       setTextElementValueById('current-life',newLife)

       if(newLife === 0){
       gameOver();
       }
       
    }
}

document.addEventListener('keyup', handleKeyboardButtonPress);

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    const totalScore = getTextElementValueById('current-score');
    setTextElementValueById('total-score',totalScore);

    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);

  
}
function playAgain(){
    hideElementById('final-score');
    showElementById('play-ground');
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);
}