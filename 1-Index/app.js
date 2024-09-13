
//collecting an array of the classes for easy medium and hard
const easy = document.getElementsByClassName("easy");
const medium = document.getElementsByClassName("medium");
const hard = document.getElementsByClassName("hard");
//accessing the span elements to get their innertext
const numOfEasy = document.getElementById("numOfEasy");
const numOfMed = document.getElementById("numOfMed");
const numOfHard = document.getElementById("numOfHard");
//function that whenever the document loads it sets the text as the current number of projects in categories
function listenForLoad(){
    document.addEventListener("DOMContentLoaded",()=>{
        numOfEasy.innerHTML=easy.length
        numOfMed.innerHTML=medium.length
        numOfHard.innerHTML=hard.length
    })
}
//the actual function call of listenForLoad()
listenForLoad();

