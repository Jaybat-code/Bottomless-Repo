let gameArray = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];
let playerTurn = true;
let gameArrayValues = [];
const buttons = Array.from(document.querySelectorAll("button"));
console.log(buttons);


function updateGameArray() {
    
    gameArrayValues = [];

    for (let i = 0; i < gameArray.length; i++) {
        for (let j = 0; j < gameArray[i].length; j++) {
            gameArrayValues.push(gameArray[i][j]);
        }
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerText = gameArrayValues[i];
    }
}
function isBoardFull() {
    return gameArray.flat().every(cell => cell !== ""); // Check if all cells are filled
}
//allows a player to make a choice provided that it is their turn and that the position is clean on the gameboard
function playerChoice() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", () => {
            if (!playerTurn) return;
            let row = Math.floor(i / 3);
            let col = i % 3;

            if (gameArray[row][col] === "") {
                gameArray[row][col] = "x";
                updateGameArray();

                if (checkForWin("x")) {
                    alert("Player wins!");
                    return;
                }

                if (isBoardFull()) {
                    alert("It's a draw!");
                    
                    return;
                }

                playerTurn = false;
                callForComputerChoice();
            }
        });
    }
}

function callForComputerChoice(){
   let row = Math.floor(Math.random()*3);
   let col = Math.floor(Math.random()*3);

   while(gameArray[row][col]!==""){
    row = Math.floor(Math.random()*3);
    col = Math.floor(Math.random()*3);
   }
   gameArray[row][col]="o";
   updateGameArray();
  
   if (checkForWin("o")) {
    
    alert("Computer wins!");
    return; // Stop further execution
}

if (isBoardFull()) {
    alert("It's a draw!");
    return; // Stop further execution
}
   playerChoice();
    playerTurn=true;
}

function checkForWin(player) {
        
    for (let i = 0; i < 3; i++) {
        if (gameArray[i].every(cell => cell === player) || // Check rows
            (gameArray[0][i] === player && gameArray[1][i] === player && gameArray[2][i] === player)) { // Check columns
            
            return true;
        }
    }
        
    if ((gameArray[0][0] === player && gameArray[1][1] === player && gameArray[2][2] === player) ||
        (gameArray[0][2] === player && gameArray[1][1] === player && gameArray[2][0] === player)) {
        return true;
    }
    return false;
}


playerChoice();
