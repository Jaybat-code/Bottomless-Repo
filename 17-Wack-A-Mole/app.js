const Moles=[
    {
        name:"mole",hp:1,htmlText:`<img class="moleImg" src="./Assets/Mole.png">`,
    },
    {
        name:"supermole",hp:3,htmlText:`<img class="moleImg" src="./Assets/superMole.png">`
    }
]
const moleHole = document.querySelectorAll(".hole")
const Holes=[
    {hole:moleHole[0],hasMole:false,hasSuperMole:false},
    {hole:moleHole[1],hasMole:false,hasSuperMole:false},
    {hole:moleHole[2],hasMole:false,hasSuperMole:false},
    {hole:moleHole[3],hasMole:false,hasSuperMole:false},
    {hole:moleHole[4],hasMole:false,hasSuperMole:false},
    {hole:moleHole[5],hasMole:false,hasSuperMole:false},
    {hole:moleHole[6],hasMole:false,hasSuperMole:false},
    {hole:moleHole[7],hasMole:false,hasSuperMole:false},
    {hole:moleHole[8],hasMole:false,hasSuperMole:false},
]

function spawnMole() {
    setInterval(() => {
        let randMoleIndex = Math.floor(Math.random() * Holes.length);
        const selectedHole = Holes[randMoleIndex];

        // Check the state of the hole
        if (!selectedHole.hasSuperMole) {
            if (!selectedHole.hasMole) {
                // Place a normal mole
                selectedHole.hole.innerHTML = Moles[0].htmlText;
                selectedHole.hasMole = true;
            } else {
                // Upgrade to a super mole
                selectedHole.hole.innerHTML = Moles[1].htmlText;
                selectedHole.hasMole = false; // Remove normal mole
                selectedHole.hasSuperMole = true;
            }
        }
    }, 2000); // Adjust interval timing as needed
}


function hitMole() {
    for (let i = 0; i < Holes.length; i++) {
        moleHole[i].addEventListener("click", () => {
            console.log(Holes[i]); // Log the entire hole object
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // All your code goes here
    spawnMole();
    hitMole();
});
 // Call the function to set up the event listeners



//Audio And Visual Effects For Hammer -------------------------------------------------
//define a hammer that cannot be dragged
const hammer = document.getElementById("hammerImg");
hammer.setAttribute("draggable",false);
//make the hammer follow your mouse whenever it moves to the offset of the hammer's handle
document.addEventListener("mousemove", (e) => {
  const rect = hammer.getBoundingClientRect();
  const hammerWidth = rect.width;
  const hammerHeight = rect.height;

  const offsetX = hammerWidth / 2; 
  const offsetY = hammerHeight - 100; 

  hammer.style.left = `${e.clientX - offsetX}px`;
  hammer.style.top = `${e.clientY - offsetY}px`;
  //when your mouse is down rotate the image to the slammed position and set a timer for a sound to play
});
document.addEventListener("mousedown", () => {
    hammer.style.transform = "rotate(-90deg) translate(-100px,200px)";
    setTimeout(() => {
        
        const slamSoung = new Audio("./Assets/slam.mp3");
        slamSoung.volume=.3
        slamSoung.play();
    }, 175);
  });
  //when your mouse is up you should bring the image back to its normal positions
  document.addEventListener("mouseup", () => {
    hammer.style.transform = "rotate(0deg)"; 

  })


  