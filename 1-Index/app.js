const descriptions = [
    "My first project for this mega repository was a 'Hello World' project. It isn't as simple as just printing 'Hello World' on an HTML page—the text itself that displays on the page is entirely generated with JavaScript! I was pretty happy with this project at the time, but it was and still is the easiest project in my repo.",
    "At this stage, I was a huge fan of looping through arrays, so I came up with a program that would take a sentence and output each word one by one on the press of a button. I feel this was my first 'complex' program, but in reality, it was still fairly easy.",
    "I wanted a quick way to generate linear gradients with random RGB values and random angles. This turned out to be very useful for other projects since I am a huge fan of linear gradients, and the results of this project were super cool!",
    "I had made this app previously in a folder on my computer called Web-Dev-Shack-1, which was a collection of various web dev projects. I wanted to recreate it without help from the internet and also add a feature to display whether it was AM or PM, though it still prints in military time.",
    "This project was a simple increment and decrement counter on button presses. In the original commits, there was a multiplier selector that allowed you to exponentially increase or decrease the number, but the numbers got way too big for the screen, so I scrapped that feature.",
    "For this project, I wanted to explore the probability of multiple dice rolls. The solutions I came up with were super fun! I learned more about how random values work and how to store inputs in variables, while once again doing a lot of looping through arrays.",
    "This is a port of one of my older projects. While it does some math, it’s an extremely limited calculator because it can only store one operator in memory at a time. For example, you can do '2 + 2 = 4,' but you can't follow that up with '4 / 2 = 2.'",
    "My grade book app is one I am extremely proud of. Without any knowledge of objects, I stored everything in arrays. This was also my first time using add and delete buttons! You can add a student, and they will receive a random grade, a random name, and a quirk about them.",
    "This mini RPG project is inspired heavily by a FreeCodeCamp tutorial but with UI changes, storyline changes, and different enemy types. It’s a fun, short story game about fighting a man named Kasperov (not the chess champion). I wanted to give it a Brooklyn-meets-Russia vibe.",
    "First Steps was me experimenting with animation in JavaScript. I made a controllable player that can move in 360 degrees, and then I decided to add a 'feed and grow' aspect to the program. You can spawn bits of cheese that will grow and speed up your player."
];

const about = document.getElementById("about");
const desc = document.getElementsByClassName("desc");
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
function displayDescription() {
    let currentIndex = -1; // To track the current hovered project

    for (let i = 0; i < desc.length; i++) {
        desc[i].addEventListener("mouseover", () => {
            if (currentIndex !== i) { // Only change if hovering over a new link
                currentIndex = i;

                // Start by fading out the current description
                about.classList.remove('visible');

                // After the fade-out transition, change the text and fade it back in
                setTimeout(() => {
                    about.innerHTML = descriptions[i]; // Update the text
                    about.classList.add('visible');    // Fade the new text in
                }, 200); // Wait for the fade-out duration (0.5s)
            }
        });

        desc[i].addEventListener("mouseout", () => {
            // Optional: If you want to reset to the default description on mouse out
            setTimeout(() => {
                about.innerHTML = "Project Description:";
                about.classList.remove('visible');
            }, 200); // Wait for the fade-out before resetting the description
        });
    }
}


searchForDifficulty();
displayDescription();


