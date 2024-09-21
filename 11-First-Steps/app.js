const player = {
    id:document.getElementById("player"),
    speed:5,
    top:350,
    left:359,
    isMovingUp:false,
    isMovingDown:false,
    isMovingRight:false,
    isMovingLeft:false,
}
const sandbox = document.getElementById("sandBox");
const sandboxRect = sandbox.getBoundingClientRect();

window.addEventListener("keydown",(e)=>{
    switch(e.key){
        case "ArrowUp":
        player.isMovingUp=true;
        break;
        case "ArrowDown":
        player.isMovingDown=true;
        break;
        case "ArrowRight":
        player.isMovingRight=true;
        break;
        case "ArrowLeft":
        player.isMovingLeft=true;
        break;
    }
})
window.addEventListener("keyup",(e)=>{
    switch(e.key){
        case "ArrowUp":
        player.isMovingUp=false;
        break;
        case "ArrowDown":
        player.isMovingDown=false;
        break;
        case "ArrowRight":
        player.isMovingRight=false;
        break;
        case "ArrowLeft":
        player.isMovingLeft=false;
        break;
    }
})

function movePlayerPosition(){
    if(player.isMovingUp&&player.top>0){
        player.top-=player.speed;
    }
    if(player.isMovingDown&&player.top+53<sandboxRect.height){
        player.top+=player.speed;
    }
    if(player.isMovingRight&&player.left+53<sandboxRect.width){
        player.left+=player.speed
    }
    if(player.isMovingLeft&&player.left>0){
        player.left-=player.speed
    }
    player.id.style.top=player.top+"px"
    player.id.style.left=player.left+"px"
    requestAnimationFrame(movePlayerPosition);
}
movePlayerPosition();