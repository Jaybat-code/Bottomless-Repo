
const jacob={
    element:document.getElementById("jacob"),
    appearance:"./Assets/Jacob.png",
    xPos:150,
    yPos:150,
    speed:5,
    rotateDeg:0,
    movingUp:false,
    movingDown:false,
    movingLeft:false,
    movingRight:false,
}
function listenForKeyPress(){
    window.addEventListener("keydown",(e)=>{
        switch(e.key){
            case"ArrowUp":
            jacob.movingUp=true;
            break;
            case"ArrowDown":
            jacob.movingDown=true;
            break;
            case"ArrowLeft":
            jacob.movingLeft=true;
            break;
            case"ArrowRight":
            jacob.movingRight=true;
            break;
        }
    })
    window.addEventListener("keyup",(e)=>{
        switch(e.key){
            case"ArrowUp":
            jacob.movingUp=false;
            break;
            case"ArrowDown":
            jacob.movingDown=false;
            break;
            case"ArrowLeft":
            jacob.movingLeft=false;
            break;
            case"ArrowRight":
            jacob.movingRight=false;
            break;
        }
    })
}
function moveJacobOnScreen(){
    if(jacob.movingUp&&jacob.yPos>0){
        jacob.yPos-=jacob.speed;
    }
    if(jacob.movingDown&&jacob.yPos<900){
        jacob.yPos+=jacob.speed;
    }
    if(jacob.movingLeft&&jacob.xPos>0){
        jacob.xPos-=jacob.speed;
    }
    if(jacob.movingRight&&jacob.xPos<875){
        jacob.xPos+=jacob.speed;
    }
    if (jacob.movingDown && jacob.movingLeft) {
        jacob.rotateDeg = 45; // Down-Left
    } else if (jacob.movingDown && jacob.movingRight) {
        jacob.rotateDeg = 315; // Down-Right
    } else if (jacob.movingUp && jacob.movingLeft) {
        jacob.rotateDeg = 135; // Up-Left
    } else if (jacob.movingUp && jacob.movingRight) {
        jacob.rotateDeg = 225; // Up-Right
    } else if (jacob.movingUp) {
        jacob.rotateDeg = 180; // Up
    } else if (jacob.movingDown) {
        jacob.rotateDeg = 0; // Down
    } else if (jacob.movingLeft) {
        jacob.rotateDeg = 90; // Left
    } else if (jacob.movingRight) {
        jacob.rotateDeg = -90; // Right
    }
//upright 45
    jacob.element.style.rotate=jacob.rotateDeg+"deg"
    jacob.element.style.left=jacob.xPos+"px";
    jacob.element.style.top=jacob.yPos+"px";
    
    requestAnimationFrame(moveJacobOnScreen);
}
listenForKeyPress();
moveJacobOnScreen();