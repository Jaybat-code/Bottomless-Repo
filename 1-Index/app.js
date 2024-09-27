const descriptions = [
    "This project serves as the central hub for all my projects, showcasing them in a well-organized manner. It’s not only practical but also quite entertaining to navigate through my work.",
    "My inaugural project in this collection, the 'Hello World' project goes beyond a simple print statement; it dynamically generates text using JavaScript to showcase my early coding skills.",
    "This project allowed me to experiment with user interactions by creating a button that changes text each time it’s clicked. It’s a simple yet effective way to illustrate the power of event handling in JavaScript.",
    "A fun tool for generating random background colors, this project taught me about working with CSS styles and random number generation, making it a visually engaging addition to my portfolio.",
    "I created this digital clock to practice using JavaScript’s Date object. It displays real-time updates, giving me a practical understanding of working with time in programming.",
    "This counter app was a great way to learn about state management in JavaScript. With buttons for incrementing and decrementing, it combines functionality and user interaction seamlessly.",
    "Inspired by tabletop gaming, this D&D dice roller simulates rolling multiple dice and calculates the total, adding an element of randomness and excitement to my projects.",
    "My take on a basic calculator, this project incorporates fundamental math operations. It was a fantastic exercise in logic and user input handling.",
    "I built this grade book app to help manage student grades. It's a practical application of arrays and objects in JavaScript, showcasing my ability to handle data effectively.",
    "This mini RPG project merges storytelling with gaming mechanics, allowing users to engage in a narrative-driven experience. I learned a lot about game design and UI development while working on it.",
    "In this project, I experimented with animation and player control in JavaScript. It’s an interactive introduction to game development, emphasizing movement mechanics and creative gameplay.",
    "I built this classic game from scratch, incorporating JavaScript logic and user input. It’s a fun way to demonstrate my understanding of basic game mechanics and decision-making in code.",
    "This project features a fully functional Tic-Tac-Toe game, allowing users to play against each other. It’s a great demonstration of my skills in implementing game logic and user interface design.",
    "A simple yet addictive gem clicker game where players click to collect gems. This project allowed me to explore game mechanics and user engagement strategies.",
    "This palindrome checker analyzes user input to determine if it reads the same backward and forward. It was an interesting challenge that deepened my understanding of string manipulation.",
    "In this memory matching game, players flip cards to find pairs. It was a fun project that taught me about game design and the importance of user experience in interactive applications."
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


