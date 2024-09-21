const sandbox = document.getElementById("sandBox");
let cheeseAmount = 25;

const player = {
    id: document.getElementById("player"),
    speed: 1,
    top: 350,
    left: 359,
    width: 30,   
    height: 30,
    isMovingUp: false,
    isMovingDown: false,
    isMovingRight: false,
    isMovingLeft: false,
};

const sandboxRect = sandbox.getBoundingClientRect();


function spawnCheese(){
    for(let i = 0; i < cheeseAmount; i++){
        let cheese = document.createElement("div");
        cheese.setAttribute("class", "cheese");

        let topRand = Math.floor(Math.random() * 700);
        let leftRand = Math.floor(Math.random() * 700);
        cheese.style.top = topRand + "px";
        cheese.style.left = leftRand + "px";

        sandbox.appendChild(cheese); 
    }
}

function detectCollision(cheese) {
    const playerRect = player.id.getBoundingClientRect();
    const cheeseRect = cheese.getBoundingClientRect();

    return !(playerRect.right < cheeseRect.left || 
             playerRect.left > cheeseRect.right || 
             playerRect.bottom < cheeseRect.top || 
             playerRect.top > cheeseRect.bottom);
}

function movePlayerPosition(){
    if (player.isMovingUp && player.top > 0) {
        player.top -= player.speed;
    }
    if (player.isMovingDown && player.top + player.height < sandboxRect.height) {
        player.top += player.speed;
    }
    if (player.isMovingRight && player.left + player.width < sandboxRect.width) {
        player.left += player.speed;
    }
    if (player.isMovingLeft && player.left > 0) {
        player.left -= player.speed;
    }

    player.id.style.top = player.top + "px";
    player.id.style.left = player.left + "px";

    const cheeses = document.querySelectorAll(".cheese");
    cheeses.forEach(cheese => {
        if (detectCollision(cheese)) {
            cheese.remove();

            player.width += 5;
            player.height += 5;
            player.speed += 1
            player.id.style.width = player.width + "px";
            player.id.style.height = player.height + "px";
        }
    });

    requestAnimationFrame(movePlayerPosition);
}

spawnCheese();


window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowUp": player.isMovingUp = true; break;
        case "ArrowDown": player.isMovingDown = true; break;
        case "ArrowRight": player.isMovingRight = true; break;
        case "ArrowLeft": player.isMovingLeft = true; break;
    }
});
window.addEventListener("keyup", (e) => {
    switch (e.key) {
        case "ArrowUp": player.isMovingUp = false; break;
        case "ArrowDown": player.isMovingDown = false; break;
        case "ArrowRight": player.isMovingRight = false; break;
        case "ArrowLeft": player.isMovingLeft = false; break;
    }
});

movePlayerPosition();