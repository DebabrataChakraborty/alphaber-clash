function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}
 function getRandomAlphabet(){
    const alphabetString ='abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const randomIndex =Math.round(randomNumber);

    const alphabet = alphabets[randomIndex];
    return alphabet;

 }

 function setBackgroundColorById (elementId){
    const element =document .getElementById(elementId);
    element.classList.add('bg-orange-400');

 }

//  function removeBackgroundColorById(elementId){
//     const element =document.getElementById(elementId);
//     element.classList.remove('bg-orange-400');
//  }


