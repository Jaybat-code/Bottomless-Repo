
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
//adding some cool (search) functionality!
const difficultyClasses = [easy,medium,hard]
const difficultyNums = [numOfEasy,numOfMed,numOfHard]

function searchForDifficulty() {
    for (let i = 0; i < difficultyClasses.length; i++) {
        difficultyNums[i].addEventListener("mouseover", () => {
            for (let j = 0; j < difficultyClasses[i].length; j++) {
                difficultyClasses[i][j].style.boxShadow = "0 0 20px yellow";
            }
        });

        difficultyNums[i].addEventListener("mouseout", () => {
            // Remove the box-shadow on mouse out
            for (let j = 0; j < difficultyClasses[i].length; j++) {
                difficultyClasses[i][j].style.boxShadow = "none";
            }
        });
    }
}

searchForDifficulty();