const moleHTML = `<img class="moleImg" src="./Assets/Mole.png" alt="A Mole Sprouts Out Of A Hole">`
const holes = document.querySelectorAll(".hole")




holes[3].innerHTML=moleHTML




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