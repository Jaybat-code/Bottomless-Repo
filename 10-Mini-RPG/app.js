//text to be used later onScreen
let xp = 0;
let health = 100;
let cash = 4000;
let currentWeaponIndex = 0;
let fighting;
let civicDanger;
let enemyHealth;
let inventory = ["Handgun"];
//document object models
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#XPText");
const healthText = document.querySelector("#healthText");
const cashText = document.querySelector("#cashText");
const enemyStats = document.querySelector("#enemyStats");
const enemyName = document.querySelector("#enemyName");
const enemyHealthText = document.querySelector("#enemyHealth");
//array of location objects
const locations = [
    {
        name: "rest",
        "button Text": ["Go to Supplier", "Go on a Mission", "Fight Kasperov"],
        "button Functions": [goSupplier, goMission, fightKasperov],
        text: "Good morning Agent Smith! Will you shop, go on a mission, or finally gather the courage to face Kasperov in man-to-man combat?"
    },
    {
        name: "supplier",
        "button Text": ["Pills 10 Health ($10)", "Upgrade Weapon ($35)", "Go Rest"],
        "button Functions": [buyHealth, buyWeapon, goRest],
        text: "You drive to your supplier, he ALWAYS has the good stuff. He looks at you with a scowl. \"What do you want this time Smith?\""
    },
    {
        name: "mission",
        "button Text": ["Rob Civilian", "Fight Agent", "Go Rest"],
        "button Functions": [robCivilian, fightAgent, goRest],
        text: "You drive into town looking for trouble, robbing civilians is always easy money... but these days everyone is armed... maybe I should look for one of Kasperov's men"
    },
    {
        name: "fight",
        "button Text": ["Attack", "Dodge", "Run"],
        "button Functions": [attack, dodge, goRest],
        text: "You have found yourself in an altercation!"
    }
];
const enemies = [
    {
        name:"Innocent Civilian",
        level:2,
        health:15
    },
    {
        name:"Angry Civilian",
        level:5,
        health:30
    },
    {
        name:"Opposing Agent",
        level:10,
        health:75
    },
    {
        name:"Kasperov",
        level:20,
        health:350
    },
]
const weapons = [
    {
        name: " Knife",
        damage: 5,
    },
    {
        name: " Revolver",
        damage: 20,
    },
    {
        name: " Rifle",
        damage: 50,
    },
    {
        name: " Sniper",
        damage: 100,
    },
]
//initializing buttons
button1.onclick = goSupplier;
button2.onclick = goMission;
button3.onclick = fightKasperov;

//updates location buttontext and button functions using the locations object
function update(location) {
    enemyStats.style.display="none"
    button1.innerText = location["button Text"][0];
    button2.innerText = location["button Text"][1];
    button3.innerText = location["button Text"][2];
    button1.onclick = location["button Functions"][0];
    button2.onclick = location["button Functions"][1];
    button3.onclick = location["button Functions"][2];
    text.innerText = location.text;
}
//will take you home so that you can rest up
function goRest() {
    update(locations[0]);
}
//Takes you to your supplier, he always has the good stuff
function goSupplier() {
    update(locations[1]);
}
//go on a mission to either rob civilians or fight on of kasperoves men.
function goMission() {
    update(locations[2]);
}


//will allow you to buy some extra health if you have the change, if you don't get some more money.
function buyHealth() {
    if(cash>=10){
        health+=10;
        cash-=10;

        healthText.innerText=health;
        cashText.innerText=cash;
    }else{
        text.innerText="You're flat broke ain'tcha? Come back when you have money."
}
}
//allows you to buy a weapon with increased power
function buyWeapon() {
    if(currentWeaponIndex<weapons.length-1){
        if(cash>=35){
            cash-=35;
            currentWeaponIndex++;
            cashText.innerText=cash
            let newWeapon =weapons[currentWeaponIndex].name;
            text.innerText = "You now have a "+newWeapon +"."
            inventory.push(newWeapon);
            text.innerText+=" In your inventory you have: " +inventory;
        }else{
            text.innerText="You do not have enough cash on hand to buy a weapon"
        }
    }else{
        text.innerText="You already have the most powerful weapon!"
        button2.innerText="Sell weapon for $20"
        button2.onclick=sellWeapon
    }
}
//once you have bought all of the available weapons you can sell your weakest items for cold hard cash
function sellWeapon(){
    if(inventory.length>1){
        cash+=15;
        cashText.innerText=15;
        let currentWeapon = inventory.shift();
        text.innerText = "You sold a "+currentWeapon+".";
        text.innerHTML+=" In your inventory you have: " +inventory;
    }else{
        text.innerText="Don't sell your only weapon!"
    }
}
function robCivilian(){
    civicDanger=Math.floor(Math.random()*3);
    if(civicDanger<2){
        fighting = 0;
        goFight();
    }else if(civicDanger==2){
        fighting = 1;
        goFight();
    }
    
    console.log(civicDanger);

}
function fightAgent(){
    fighting = 2;
    goFight();
}
//the final showdown.
function fightKasperov() {
    fighting = 3;
    goFight();
}
function goFight(){
    update(locations[3]);
    enemyHealth=enemies[fighting].health;
    enemyStats.style.display ="block";
    enemyName.innerText=enemies[fighting].name;
    enemyHealthText.innerText=enemyHealth;
}
function attack(){

}
function dodge(){

}