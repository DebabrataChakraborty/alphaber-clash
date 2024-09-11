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

 function removeBackgroundColorById(elementId){
    const element =document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
 }

 function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value
 }

 function setTextElementValueById(elementId,value){
    const element =document.getElementById(elementId);
    element.innerText = value;

 }

function getElementTextById(elementId){
   const element = document.getElementById(elementId);
   const text = element.innerText;
   return text;
}