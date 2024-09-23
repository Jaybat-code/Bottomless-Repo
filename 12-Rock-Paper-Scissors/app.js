//counters
let wins = 0;
let losses = 0;
let ties = 0;
//text for counters
const playerWins=document.getElementById("playerWins");
const playerLosses=document.getElementById("playerLosses");
const playerTies=document.getElementById("playerTies");
//decision makers
let playerChoice;
let compChoice; 
let verdict;
//audioInfo
let audio = new Audio('./Assets/ding-126626.mp3');
audio.playbackRate=2;
audio.currentTime=.1
//textId's
const currentPlay = document.getElementById("currentPlay");
const currentCompPlay = document.getElementById("currentCompPlay")
const verdictDispaly = document.getElementById("victorDisplay");
//Object for player inputs
const rps = [
    {
        element:document.getElementById("Rock"),
        text:"Rock",
        selected:false
    },
    {
        element:document.getElementById("Paper"),
        text:"Paper",
        selected:false
    },
    {
        element:document.getElementById("Scissors"),
        text:"Scissors",
        selected:false
    }
];
//logic to wait for player input on the images, when they click it, their choice will reflex on "player picks" and then immediately call computer to action.
function waitForPlayerChoice(){
    for(let i = 0; i<rps.length;i++){
    rps[i].element.addEventListener("click",()=>{
        for(let j = 0;j<rps.length;j++){
            rps[j].selected=false;
            rps[j].element.classList.remove("active");
        }
        currentPlay.innerHTML = rps[i].text;
        rps[i].selected=true;
        rps[i].element.classList.add("active");
        audio.play();
        
        playerChoice=rps[i].text;
        getComputerChoice();
        })
    }
}
//computer will make their choice at random by indexing our object length and randomizing their choice
function getComputerChoice(){
    let rand = Math.floor(Math.random()*rps.length)+1;
    switch(rand){
        case 1:
            compChoice="Rock";
            break;
        case 2:
            compChoice="Paper";
            break;
        case 3:
            compChoice="Scissors";
            break;
    }
    currentCompPlay.innerHTML=compChoice;
    checkWin();
}
//this will check our win condition and keep score, this works super fast so you can spam the icons and find out some neat probability stuff.
function checkWin(){
    if(playerChoice===compChoice){
        verdict="Tie"
        ties++;
    }
    if(playerChoice=="Rock"&&compChoice=="Scissors"){
        verdict="Win"
        wins++;
    }
    if(playerChoice=="Paper"&&compChoice=="Rock"){
        verdict="Win"
        wins++;
    }
    if(playerChoice=="Scissors"&&compChoice=="Paper"){
        verdict="Win"
        wins++;
    }
    if(compChoice=="Rock"&&playerChoice=="Scissors"){
        verdict="Lose"
        losses++;
    }
    if(compChoice=="Paper"&&playerChoice=="Rock"){
        verdict="Lose"
        losses++;
    }
    if(compChoice=="Scissors"&&playerChoice=="Paper"){
        verdict="Lose"
        losses++;
    }
    //updating our screen values during every loop
    verdictDispaly.innerHTML=verdict;
    playerWins.innerHTML=wins;
    playerLosses.innerHTML=losses;
    playerTies.innerHTML=ties;
}
//starts the loop by calling for player choice, seems redundant but is here for readability.
function startProgram(){
    waitForPlayerChoice();
}
//calls for waiting player choice.
startProgram();
