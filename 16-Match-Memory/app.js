const cardHome = document.getElementById("cardHome");
const cards = [
    {
        name: "roach",
        blankState: `<h1>???</h1>`,
        flippedState: `<img src="./Assets/Roach.png">`,
        img: false,
    },
    {
        name: "Coke",
        blankState: `<h1>???</h1>`,
        flippedState: `<img src="./Assets/Coke.png">`,
        img: false,
    },
    {
        name: "cookie",
        blankState: `<h1>???</h1>`,
        flippedState: `<img src="./Assets/Cookie.png">`,
        img: false,
    },
    {
        name: "drumstick",
        blankState: `<h1>???</h1>`,
        flippedState: `<img src="./Assets/Drumstick.png">`,
        img: false,
    },
    {
        name: "gross worms",
        blankState: `<h1>???</h1>`,
        flippedState: `<img src="./Assets/Gross Worms.png">`,
        img: false,
    },
    {
        name: "shark",
        blankState: `<h1>???</h1>`,
        flippedState: `<img src="./Assets/shark.png">`,
        img: false,
    },
    {
        name: "spider",
        blankState: `<h1>???</h1>`,
        flippedState: `<img src="./Assets/Spider.png">`,
        img: false,
    },
    {
        name: "worms",
        blankState: `<h1>???</h1>`,
        flippedState: `<img src="./Assets/Worms.png">`,
        img: false,
    }
];

function shuffleCards() {
    let dupedCards = duplicateCards();
    for (let i = dupedCards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [dupedCards[i], dupedCards[j]] = [dupedCards[j], dupedCards[i]]; 
    }
    return dupedCards; 
}

function duplicateCards() {
    const dupedCards = [];
    // Assign unique IDs for each duplicate
    cards.forEach((card, index) => {
        dupedCards.push({ ...card, id: index * 2 + 1 }); // First instance
        dupedCards.push({ ...card, id: index * 2 + 2 }); // Second instance
    });
    return dupedCards; 
}

function initializeGameBoard() {
    let matchCards = shuffleCards();
    
    for (let i = 0; i < matchCards.length; i++) {
        const cardElement = document.createElement("div");
        cardElement.setAttribute("data-id", matchCards[i].id);
        cardElement.innerHTML = matchCards[i].blankState;
        cardElement.classList.add("card");
        cardHome.appendChild(cardElement);
        flipLogic(cardElement, matchCards[i]);
    }
}

let flippedCards = [];
let isBoardLocked = false; 
const scoreText = document.getElementById("scoretext");
const matchText = document.getElementById("matchText");
let matchNum = 0;
let attempts = 0;

function flipLogic(cardElement, card) {
    cardElement.addEventListener("click", () => {
        if (isBoardLocked || card.img) {
            return;
        }
        cardElement.innerHTML = card.flippedState;
        card.img = true;
        flippedCards.push({ element: cardElement, card });
        if (flippedCards.length === 2) {
            isBoardLocked = true; 
            attempts++
            if (flippedCards[0].card.name === flippedCards[1].card.name) {
                matchNum++;
                matchText.innerHTML = matchNum;
                if (matchNum === cards.length) {
                    scoreText.innerHTML = `YOU WON THE GAME IN ${attempts} TRIES`;
                    isBoardLocked = true;
                } else {
                    flippedCards = [];
                    isBoardLocked = false;
                }
            } else {
                setTimeout(() => {
                    flippedCards[0].element.innerHTML = flippedCards[0].card.blankState;
                    flippedCards[1].element.innerHTML = flippedCards[1].card.blankState;
                    flippedCards[0].card.img = false;
                    flippedCards[1].card.img = false;
                    flippedCards = []; 
                    isBoardLocked = false; 
                }, 750);
            }
        }
    });
}


document.addEventListener("DOMContentLoaded", () => {
    initializeGameBoard();
});
