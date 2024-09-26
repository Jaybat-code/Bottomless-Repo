//collecting the bounds of the top of the floor
const floorRect = document.getElementById("floor").getBoundingClientRect().top;

//collecting literally all of the information we can on the wasp
const wasp = {
    id:document.getElementById("wasp"),
    speed:11,
    gravity:9.81,
    rotDirection:0,
    top:500,
    left:500,
    height:100,
    width:100,
    isFlyingUp:false,
    isFlyingForward:false,
    isFallingDown:true,
    isAlive:true
}
function handleKeyDown(e){
    if(e.key === " " || e.key === "ArrowUp"){
        wasp.isFlyingUp=true;
        wasp.isFallingDown=false;
    }else if (e.key==="ArrowRight"){
        wasp.isFlyingForward=true
    }
}
function handleKeyUp(e){
    if(e.key === " " || e.key === "ArrowUp"){
        wasp.isFlyingUp=false;
        wasp.isFallingDown=true;
    }else if (e.key==="ArrowRight"){
        wasp.isFlyingForward=false
    }  
}

function gameLoop(){
    if(wasp.isFlyingUp){
        wasp.top -= wasp.speed;
    }
    if(wasp.isFallingDown && wasp.id.getBoundingClientRect().bottom<floorRect-wasp.gravity){
        wasp.top+=wasp.gravity;
    }
    if(wasp.isFlyingForward){
        wasp.left+=wasp.speed;
    }
    wasp.id.style.top=wasp.top+"px";
    wasp.id.style.left=wasp.left+"px";
    requestAnimationFrame(gameLoop)
}

document.addEventListener("keydown",handleKeyDown);
document.addEventListener("keyup",handleKeyUp);
gameLoop()