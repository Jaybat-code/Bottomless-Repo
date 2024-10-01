const screen = document.getElementById("screen");
const screenRect = screen.getBoundingClientRect();
let direction = Math.floor(Math.random()*4)+1;
const dvd = {
    id:document.getElementById("dvd"),
    width:50,
    height:50,
    top: Math.floor(Math.random() * (screenRect.height - 50)), // Keep within screen bounds
    left: Math.floor(Math.random() * (screenRect.width - 50)), 
    velocity:15,
}


function updateDVDPos(){
    dvd.id.style.top = dvd.top+"px";
    dvd.id.style.left = dvd.left+"px";
    dvd.id.style.width = dvd.width+"px";
    dvd.id.style.height = dvd.height +"px";
}

function startMovement(){
    const dvdRect = dvd.id.getBoundingClientRect();

    if(direction===1 && dvdRect.right>=screenRect.right){
        direction=4;
    }else if(direction===3 && dvdRect.right>=screenRect.right){
        direction=2;
    }
    if(direction===2 && dvdRect.left<=screenRect.left){
        direction=3;
    }else if(direction===4 && dvdRect.left<=screenRect.left){
        direction=1;
    }
    if(direction===1 && dvdRect.bottom>=screenRect.bottom){
        direction=3;
        
    }else if(direction===4 && dvdRect.bottom>=screenRect.bottom){
        direction=2;
    }
    if(direction===2 && dvdRect.top<=screenRect.top){
        direction=4;
    }else if(direction===3 && dvdRect.top<=screenRect.top){
        direction=1;
    }

switch(direction){
    
    //bottom right
    case 1:
        dvd.top+=dvd.velocity;
        dvd.left+=dvd.velocity;
        break;
    //top left
    case 2:
        dvd.top-=dvd.velocity;
        dvd.left-=dvd.velocity;
        break;
    //top right
    case 3:
        dvd.top-=dvd.velocity;
        dvd.left+=dvd.velocity;
        break;
    //bottom left
    case 4:
        dvd.top+=dvd.velocity;
        dvd.left-=dvd.velocity;
        break;
}

    updateDVDPos()
    requestAnimationFrame(startMovement);
    
}
startMovement();





