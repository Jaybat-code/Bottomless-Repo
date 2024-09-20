//text to be used later onScreen
let xp = 0;
let health = 100;
let cash = 50;
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
    },
    {
        name: "kill enemy",
        "button Text": ["Go Rest", "Go Rest", "Go Rest"],
        "button Functions": [goRest, goRest, goRest],
        text: 'The enemy yells "Arg!" as they die. You gain experience points and find cash.'
      },
      {
        name: "lose",
        "button Text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button Functions": [restart, restart, restart],
        text: "You die. &#x2620;"
      },
      {
        name: "win",
        "button Text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button Functions": [restart, restart, restart],
        text: "You defeated Kasperov! YOU WIN THE GAME! &#x1F389;"
      }

];
//enemy types
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
        health:500
    },
]
//weapon types
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