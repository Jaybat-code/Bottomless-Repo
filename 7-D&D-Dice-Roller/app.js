//boolean flags
let diceQuantitySet = false;
let diceSidesSet = false;
//counters
const customValue = document.getElementById("customValue");
let diceQuantity = 0;
let diceSides = 0;
//Here ar our 15 buttons that need to exist for our program to execute
const oneDie = document.getElementById("oneDie");
const twoDie = document.getElementById("twoDie");
const threeDie = document.getElementById("threeDie");
const fourDie = document.getElementById("fourDie");
const fiveDie = document.getElementById("fiveDie");
const tenDie = document.getElementById("tenDie");
const customDie = document.getElementById("customDie");
const rollFour = document.getElementById("rollFour");
const rollSix = document.getElementById("rollSix");
const rollEight = document.getElementById("rollEight");
const rollTen = document.getElementById("rollTen");
const rollTwelve = document.getElementById("rollTwelve");
const rollTwenty = document.getElementById("rollTwenty");
const rollHunned = document.getElementById("rollHunned");
const btn = document.getElementById("executeBtn");
//arrays for looping shenanigans
const allButtons=[oneDie,twoDie,threeDie,fourDie,fiveDie,tenDie,customDie,rollFour,rollSix,rollEight,rollTen,rollTwelve,rollTwenty,rollHunned]
const diceQuantityButtons = [oneDie,twoDie,threeDie,fourDie,fiveDie,tenDie];
const diceQuantityValues = [1,2,3,4,5,10];
const diceSidesButtons = [rollFour,rollSix,rollEight,rollTen,rollTwelve,rollTwenty,rollHunned];
const diceSidesValues = [4,6,8,10,12,20,100];
//Output Text 
const outputTxt = document.getElementById("output");

//this function sets up all the dice with their applicable values and even allows you to set up the value of a customquanitity function
function setDice(){
    //loop through quantity buttons and find out how many times we are going to roll the dice
    for(let i = 0;i<diceQuantityButtons.length;i++){
        diceQuantityButtons[i].addEventListener("click",()=>{
            diceQuantitySet = true;
            diceQuantity=diceQuantityValues[i];
            console.log("How Many Times Will We Roll? "+diceQuantity);

            diceQuantityButtons.forEach(button =>{
                button.style.color="black";
            })
            if(diceQuantitySet){
                diceQuantityButtons[i].style.color="aqua";
            }
        })
    }
    //loop through dice sides buttons and decide how many sides are on each die
    for(let i = 0;i<diceSidesButtons.length;i++){
        diceSidesButtons[i].addEventListener("click",()=>{
            diceSidesSet = true;
            diceSides=diceSidesValues[i];
            console.log("How Many Sides Are There? "+diceSides);

            diceSidesButtons.forEach(button=>{
               button.style.color="black"
            })
            if(diceSidesSet){
                diceSidesButtons[i].style.color="aqua";
            }
        })
    }
    //listens for the custom button click and input and allows you to input a larger number of die
    customDie.addEventListener("click",()=>{
        
        diceQuantitySet=true;
        diceQuantity=customValue.value;


        diceQuantityButtons.forEach(button =>{
            button.style.color="black";
        })
        if(diceQuantitySet){
            customDie.style.color="aqua";
        }
    })
}
//this function is the mathy one, it validates that you have both a quantity and numofsides selected.
function rollDice() {
    if (!diceQuantitySet && !diceSidesSet) {
        outputTxt.textContent = "Please select both the number of dice and the sides.";
    } else if (!diceQuantitySet) {
        outputTxt.textContent = "Please select the number of dice.";
    } else if (!diceSidesSet) {
        outputTxt.textContent = "Please select the number of sides.";
    } else {
        outputTxt.textContent = "Ready To Roll";
    }

    let result = [];
    let total = 0;
//loops through our number of dice and applies a random value through each based on the sides of the die
    for(let i = 0;i<diceQuantity;i++){
        let roll = Math.floor(Math.random()*diceSides)+1;
        result.push(roll);
        total += roll;
    }
//output message that lets you see what you rolled
    outputTxt.textContent = `Rolled ${diceQuantity} D${diceSides}: ${result.join(', ')} (Total: ${total})`;
}
//call to set up the dice at the beginning of the program
setDice();
//listens for a click on the die button and rolls the dice, outputting it to the screen.
btn.addEventListener("click",()=>{
    rollDice();
})
