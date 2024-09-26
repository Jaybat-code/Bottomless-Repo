const settingButtons = [
    {
        name:"sounds",
        purpose:"To Remove All Sound Effects From The Game",
        buttonText:"Disable",
        altButtonText:"Enable",
        isActive: true,
        function:soundEffects,
        id:document.getElementById("sounds"),
    },
    {
        name:"cheats",
        purpose:"To Activate Cheatcodes across the game!",
        buttonText:"Enable",
        altButtonText:"Disable",
        isActive: false,
        function:cheatCodes,
        id:document.getElementById("cheats"),
    },
    {
        name:"reset",
        purpose:"Start from the beginning!",
        buttonText:"Reset",
        altButtonText:"Are You Sure?",
        isActive: false,
        function:restartGame,
        id:document.getElementById("reset")
    }
]
const successSound = new Audio('./Assets/success.mp3');
const errorSound = new Audio('./Assets/error.mp3');
//--------------------------------SHOP------------------------------//
const shop = [
    {
        id:1,
        name:"Gem Chisel",
        inflation:1.15,
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
        inflation:1.15,
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
        inflation:1.15,
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
        inflation:1.15,
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
        inflation:1.15,
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
for (let i = 0; i < shop.length; i++) {
    shop[i].purchase.addEventListener("click", () => {
        if (gems >= shop[i].cost) {
            shop[i].purchase.innerHTML = "Purchase";
            gems -= shop[i].cost;
            gps += shop[i].outputGPS;
            gpc += shop[i].outputGPC;
            shop[i].cost *= shop[i].inflation;
            shop[i].cost = Math.ceil(shop[i].cost); 
            shop[i].costTxt.innerText=shop[i].cost

            // Play success sound
            successSound.currentTime = .1; // Reset to the start
            successSound.play();

            updateGameDisplay();
        } else {
            shop[i].purchase.innerHTML = "Can't Afford";
            shop[i].purchase.style.backgroundColor = "red";

            // Play error sound
            errorSound.currentTime = 0; // Reset to the start
            errorSound.play();

            setTimeout(() => {
                shop[i].purchase.innerHTML = "Purchase";
                shop[i].purchase.style.backgroundColor = "#4CAF50"; // Reset button text
            }, 2000);
        }
    });
}
function updateGPS() {
    setInterval(() => {
        gems += gps;  // This adds GPS to gems every second
        updateGameDisplay(); // Updates the display with the new gem count
    }, 1000); // 1000 milliseconds = 1 second
}

//-----------------------------------SETINGS LOGIC ----------------------------------------------------------------

for(let i = 0; i < settingButtons.length; i++){
    settingButtons[i].id.addEventListener("click", settingButtons[i].function);
}

function soundEffects() {
    settingButtons[0].isActive = !settingButtons[0].isActive; // Toggle the audio state
    
    if (settingButtons[0].isActive) {
        // Enable sound effects
        successSound.muted = false;
        errorSound.muted = false;
        settingButtons[0].id.innerText = settingButtons[0].buttonText; // Change button to "Disable"
        console.log("Sound Enabled");
    } else {
        // Disable sound effects
        successSound.muted = true;
        errorSound.muted = true;
        settingButtons[0].id.innerText = settingButtons[0].altButtonText; // Change button to "Enable"
        console.log("Sound Disabled");
    }
}

function cheatCodes(){
    settingButtons[1].isActive = !settingButtons[1].isActive;
    if(settingButtons[1].isActive){
        for(let i = 0;i<shop.length;i++){
            shop[i].cost=0;
            shop[i].inflation=0;
            shop[i].costTxt.innerHTML=0;
        }
        settingButtons[1].id.innerText = settingButtons[1].altButtonText;
    }else{
        settingButtons[1].id.innerText = settingButtons[1].buttonText;
        restartGame()
    }
}
function restartGame(){
    location.reload();
}

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





