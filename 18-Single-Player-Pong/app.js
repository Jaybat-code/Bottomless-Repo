const startButton = document.getElementById("startButton");
const startScreen = document.getElementById("startScreen");
const gamePanel = document.getElementById("cage").getBoundingClientRect();
const ball = document.getElementById("ball");
const paddle = document.getElementById("paddle");
const score = document.getElementById("scoreNum");
const time = document.getElementById("timeNum");

const gameBounds = {
    top: gamePanel.top,
    left: gamePanel.left,    // Fixed typo here
    width: gamePanel.width,
    height: gamePanel.height
}
const thisBall = {
    id:ball,
    left:445,
    top:200,
    angle:getRandomAngle(),
    launchVelocity:1,//increments by one every score hit
}


const thisPaddle = {
    id: paddle,
    left: 400,
    speed: 15,
    isMovingRight: false,
    isMovingLeft: false,
    isTouchingBall: false
}

function paddleInputs(){
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") {
            thisPaddle.isMovingLeft = true;
        } else if (e.key === "ArrowRight") {
            thisPaddle.isMovingRight = true;
        }
    });
    
    document.addEventListener("keyup", (e) => {
        if (e.key === "ArrowLeft") {
            thisPaddle.isMovingLeft = false;
        } else if (e.key === "ArrowRight") {
            thisPaddle.isMovingRight = false;
        }
    });
}

function getRandomAngle(){
    return Math.floor(Math.random()*150-75)
}

function handlePaddleMovement() {
    const paddleRect = thisPaddle.id.getBoundingClientRect();

    // Right movement
    if (thisPaddle.isMovingRight && (paddleRect.right+21 < gameBounds.left + gameBounds.width)) {
        thisPaddle.left += thisPaddle.speed;
        thisBall.angle=getRandomAngle();
        console.log(thisBall.angle)
    }

    // Left movement
    else if (thisPaddle.isMovingLeft && (paddleRect.left-20 > gameBounds.left)) {
        thisPaddle.left -= thisPaddle.speed;
        thisBall.angle=getRandomAngle();
        console.log(thisBall.angle);
    }

    // Update paddle position
    thisPaddle.id.style.left = thisPaddle.left + "px";

    // Keep animating
    requestAnimationFrame(handlePaddleMovement);
}

// Remove the start screen when the button is clicked and start the game after a delay
function startGame() {
    startButton.addEventListener("click", () => {
        startScreen.style.display = "none";
        paddleInputs();  // Set up the input listeners once
        setTimeout(() => {
            handlePaddleMovement();
        }, 2000);
    });
}

// Start the game when the page loads
startGame();
