//score counter elements 
let molesWacked = 0
const molenum = document.getElementById("wackNum")
//mole enemy types for scalability;
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
//hole object mapping logic
const moleHole = document.querySelectorAll(".hole");
const Holes = Array.from(moleHole).map(hole => ({
    hole: hole,
    hasMole: false,
    hasSuperMole: false,
    currentHP: 0 
}));
//spawn a mole at a random index with some mole information like HP and the Image if a mole tries to populate another moles position it becomes a super mole
function spawnMole() {
    setInterval(() => {
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
    }, 950); 
}

function flashHole(hole){
    hole.style.transition = "background-color 0.2s"; // Smooth transition
    hole.style.backgroundColor = "white"; // Change to white
    setTimeout(() => {
        hole.style.backgroundColor = ""; // Reset to original color
    }, 200); // Reset after 200ms
}

//if it has a super mole then keep hitting it until it goes away if its just a mole it goes away in one hit
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
                    molesWacked++
                    molenum.innerHTML=molesWacked
                }
                flashHole(selectedHole.hole);
            } else if (selectedHole.hasMole) {
                selectedHole.currentHP--; 

                if (selectedHole.currentHP <= 0) {
                    selectedHole.hole.innerHTML = ""; 
                    selectedHole.hasMole = false; 
                    selectedHole.currentHP = 0; 
                    molesWacked++
                    molenum.innerHTML=molesWacked
                }
                flashHole(selectedHole.hole);
            }
        });
    }
}
//load game!
function loadGame(){
    document.addEventListener("DOMContentLoaded", () => {
        spawnMole();
        hitMole();
    });
}
// Audio and Visual Effects For Hammer
const hammer = document.getElementById("hammerImg");
hammer.setAttribute("draggable", false);

document.addEventListener("mousemove", (e) => {
    const rect = hammer.getBoundingClientRect();
    const hammerWidth = rect.width;
    const hammerHeight = rect.height;

    const offsetX = hammerWidth / 2; 
    const offsetY = hammerHeight - 100; 

    hammer.style.left = `${e.clientX - offsetX}px`;
    hammer.style.top = `${e.clientY - offsetY}px`;
});
// on mouse down make a slam noise and position the hammer so that the head is at the cursor
document.addEventListener("mousedown", () => {
    hammer.style.transform = "rotate(-90deg) translate(-100px, 200px)";
    setTimeout(() => {
        const slamSound = new Audio("./Assets/slam.mp3");
        slamSound.volume = 0.3;
        slamSound.play();
    }, 175);
});
//if you move your mouse up bring hammer back to normal
document.addEventListener("mouseup", () => {
    hammer.style.transform = "rotate(0deg)"; 
});
//initialize game
loadGame();