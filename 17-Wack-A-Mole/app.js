// score counter elements 
let molesWacked = 0;
const molenum = document.getElementById("wackNum");
let spawnInterval = 950; // Default spawn interval
let gameInterval; // Reference to the mole spawn interval

// mole enemy types for scalability;
const Moles = [
    {
        name: "mole",
        hp: 1,
        htmlText: `<img draggable="false" class="moleImg" src="./Assets/Mole.png">`,
    },
    {
        name: "supermole",
        hp: 3,
        htmlText: `<img draggable="false" class="moleImg" src="./Assets/superMole.png">`
    }
];

// hole object mapping logic
const moleHole = document.querySelectorAll(".hole");
const Holes = Array.from(moleHole).map(hole => ({
    hole: hole,
    hasMole: false,
    hasSuperMole: false,
    currentHP: 0 
}));

function superMoleTakeOver() {
    const allSuperMoles = Holes.every(hole => hole.hasSuperMole);
    const allMoles = Holes.every(hole=>hole.hasMole);
    if (allSuperMoles || allMoles) {
        showLoseScreen();
    }
}

function showLoseScreen() {
    const loseScreen = document.getElementById("loseScreen");
    loseScreen.style.display = "flex";
    clearInterval(gameInterval); // Stop mole spawning
}

function showWinScreen() {
    const winScreen = document.getElementById("winScreen");
    winScreen.style.display = "flex";
    clearInterval(gameInterval); // Stop mole spawning
}

// Separate event listeners for win and lose restart buttons
document.getElementById("restartButton").addEventListener("click", resetGame);
document.getElementById("restartButtonLose").addEventListener("click", resetGame);

function resetGame() {
    molesWacked = 0;
    molenum.innerHTML = molesWacked;

    Holes.forEach(hole => {
        hole.hole.innerHTML = "";
        hole.hasMole = false;
        hole.hasSuperMole = false;
        hole.currentHP = 0;
    });

    // Hide both win and lose screens
    const winScreen = document.getElementById("winScreen");
    const loseScreen = document.getElementById("loseScreen");
    winScreen.style.display = "none";
    loseScreen.style.display = "none";

    // Show the start screen again
    const startScreen = document.getElementById("startScreen");
    startScreen.style.display = "flex";
}

// Difficulty buttons logic
const difficultyButtons = document.querySelectorAll(".difficulty-buttons button");
difficultyButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Remove selected class from all buttons
        difficultyButtons.forEach(btn => btn.classList.remove("selected"));
        
        // Add selected class to the clicked button
        button.classList.add("selected");
        
        // Update spawn interval based on difficulty
        switch (button.id) {
            case "easyBtn":
                spawnInterval = 1500;
                break;
            case "medBtn":
                spawnInterval = 1000;
                break;
            case "hardBtn":
                spawnInterval = 500;
                break;
            case "extremeBtn":
                spawnInterval = 200;
                break;
        }

        // Enable the start button after selecting a difficulty
        document.getElementById("startButton").disabled = false;
    });
});

// Spawns a mole at a random index
function spawnMole() {
    gameInterval = setInterval(() => {
        let randMoleIndex = Math.floor(Math.random() * Holes.length);
        const selectedHole = Holes[randMoleIndex];

        if (!selectedHole.hasSuperMole) {
            if (!selectedHole.hasMole) {
                selectedHole.hole.innerHTML = Moles[0].htmlText;
                selectedHole.hasMole = true;
                selectedHole.currentHP = Moles[0].hp; 
            } else {
                selectedHole.hole.innerHTML = Moles[1].htmlText;
                selectedHole.hasMole = false; 
                selectedHole.hasSuperMole = true;
                selectedHole.currentHP = Moles[1].hp; 
            }
        }
    }, spawnInterval); 
}

// Flash hole on hit
function flashHole(hole) {
    hole.style.transition = "background-color 0.2s"; // Smooth transition
    hole.style.backgroundColor = "white"; // Change to white
    setTimeout(() => {
        hole.style.backgroundColor = ""; // Reset to original color
    }, 200); // Reset after 200ms
}

// Handles mole hits
function hitMole() {
    for (let i = 0; i < Holes.length; i++) {
        Holes[i].hole.addEventListener("click", () => {
            const selectedHole = Holes[i];

            if (selectedHole.hasSuperMole) {
                selectedHole.currentHP--; 

                if (selectedHole.currentHP <= 0) {
                    selectedHole.hole.innerHTML = ""; 
                    selectedHole.hasSuperMole = false; 
                    selectedHole.currentHP = 0; 
                    molesWacked++;
                    molenum.innerHTML = molesWacked;
                }
                flashHole(selectedHole.hole);
            } else if (selectedHole.hasMole) {
                selectedHole.currentHP--; 

                if (selectedHole.currentHP <= 0) {
                    selectedHole.hole.innerHTML = ""; 
                    selectedHole.hasMole = false; 
                    selectedHole.currentHP = 0; 
                    molesWacked++;
                    molenum.innerHTML = molesWacked;
                }
                flashHole(selectedHole.hole);
            }
            superMoleTakeOver(); 
            checkWinCondition(); // Check for win condition after hitting a mole
        });
    }
}

// Check for win condition
function checkWinCondition() {
    if (molesWacked >= 30) {
        showWinScreen();
    }
}

// Load game function
function loadGame() {
    const startScreen = document.getElementById("startScreen");
    const startBtn = document.getElementById("startButton");

    startBtn.addEventListener("click", () => {
        startScreen.style.display = "none";
        hammerMovement();
        spawnMole();
        hitMole();
    });
}

const hammer = document.getElementById("hammerImg");
hammer.setAttribute("draggable", false);
function hammerMovement() {
    document.addEventListener("mousemove", (e) => {
        const rect = hammer.getBoundingClientRect();
        const hammerWidth = rect.width;
        const hammerHeight = rect.height;

        const offsetX = hammerWidth / 2; 
        const offsetY = hammerHeight - 50; 

        hammer.style.left = `${e.clientX - offsetX}px`;
        hammer.style.top = `${e.clientY - offsetY}px`;
    });
    
    // on mouse down make a slam noise and position the hammer so that the head is at the cursor
    document.addEventListener("mousedown", () => {
        hammer.style.transform = "rotate(-90deg) translate(-100px, 100px)";
        setTimeout(() => {
            const slamSound = new Audio("./Assets/slam.mp3");
            slamSound.volume = 0.1;
            slamSound.play();
        }, 175);
    });
    
    // if you move your mouse up bring hammer back to normal
    document.addEventListener("mouseup", () => {
        hammer.style.transform = "rotate(0deg)"; 
    });
}

// Load game function
function loadGame() {
    const startScreen = document.getElementById("startScreen");
    const startBtn = document.getElementById("startButton");

    startBtn.addEventListener("click", () => {
        startScreen.style.display = "none";
        spawnMole();
        hitMole();
    });
}

// Initialize hammer movement once

    hammerMovement(); // Hammer event listeners added once
    loadGame();       // Game starts with new mole logic on click
