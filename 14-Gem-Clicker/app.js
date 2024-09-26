//--------------------------------SHOP------------------------------//
const diamond = {
    width:25,
    height:25,
}
const shop = [
    {
        id:1,
        name:"Gem Chisel",
        cost:10,
        outputGPS:0,
        outputGPC:1,
        amount:0,
        purchase:document.getElementById("gcBuy"),
        costTxt:document.getElementById("gcCost")
    },
    {
        id:2,
        name:"Mining Cart",
        cost:100,
        outputGPS:1,
        outputGPC:0,
        amount:0,
        purchase:document.getElementById("mcBuy"),
        costTxt:document.getElementById("mcCost")
    },
    {
        id:3,
        name:"Gem Drill",
        cost:500,
        outputGPS:0,
        outputGPC:5,
        amount:0,
        purchase:document.getElementById("gdBuy"),
        costTxt:document.getElementById("gdCost")
    },
    {
        id:4,
        name:"Crystal Forge",
        cost:1000,
        outputGPS:5,
        outputGPC:0,
        amount:0,
        purchase:document.getElementById("cfBuy"),
        costTxt:document.getElementById("cfCost")
    },
    {
        id:5,
        name:"Gem Spirit",
        cost:5000,
        outputGPS:50,
        outputGPC:0,
        amount:0,
        purchase:document.getElementById("gsBuy"),
        costTxt:document.getElementById("gsCost")
    }
]

const gemsText = document.getElementById("gemNum");
const gpsText = document.getElementById("gps");
const gpcText = document.getElementById("gpc");
const gemImg = document.getElementById("gem");
let gems = 0
let gps = 0
let gpc = 1
function clickLogic(){
    gems+=gpc;
    gemNum.innerText=gems;
}
function updateGameDisplay(){
    gemsText.innerText=gems;
    gpsText.innerText=gps;
    gpcText.innerText=gpc;
}
for(let i = 0; i<shop.length;i++){
    shop[i].purchase.addEventListener("click",()=>{
        if(gems>=shop[i].cost){
            shop[i].purchase.innerHTML="Purchase"
            gems-=shop[i].cost;
            gps+=shop[i].outputGPS;
            gpc+=shop[i].outputGPC

            updateGameDisplay();
        }else{
            shop[i].purchase.innerHTML="Can't Afford"
            shop[i].purchase.style.backgroundColor="red";
            setTimeout(() => {
                shop[i].purchase.innerHTML = "Purchase";
                shop[i].purchase.style.backgroundColor="#4CAF50"; // Reset button text
            }, 2000);
        }
    })
}
function updateGPS() {
    setInterval(() => {
        gems += gps;  // This adds GPS to gems every second
        updateGameDisplay(); // Updates the display with the new gem count
    }, 1000); // 1000 milliseconds = 1 second
}

//-----------------------------------SETINGS LOGIC ----------------------------------------------------------------
//get information for our settings menu and toggle it off from the start
const cog = document.getElementById("settings");
let cogToggled=false
//toggleMenu function allows us to toggle the menu on and off without obstruction to the main gameplay screen
function toggleSettingsMenu(){
    const cogCard = document.getElementById("settingsCard");
    cogToggled=!cogToggled;
    if(cogToggled){
        cogCard.style.display="block";
    }else{
        cogCard.style.display="none";
    }
}
//..localizing listener to the cog and the function.
cog.addEventListener("click",toggleSettingsMenu);
gemImg.addEventListener("click",clickLogic);
updateGPS();


















