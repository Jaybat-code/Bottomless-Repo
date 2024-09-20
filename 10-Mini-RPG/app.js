
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
    text.innerHTML = location.text;
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
function attack() {
    // Enemy attacks player first
    const enemyAttackValue = getEnemyAttackValue(enemies[fighting].level);
    health -= enemyAttackValue; // Deduct health from player
    healthText.innerText = health; // Update player health on screen

    // Player attacks enemy
    const playerDamage = weapons[currentWeaponIndex].damage + Math.floor(Math.random() * xp) + 1;
    enemyHealth -= playerDamage; // Deduct health from enemy
    enemyHealthText.innerText = enemyHealth; // Update enemy health on screen

    // Show the battle outcome on the text area
    text.innerText = "The " + enemies[fighting].name + " attacks you and deals " + enemyAttackValue + " damage.\n";
    text.innerText += "You attack the " + enemies[fighting].name + " with your " + weapons[currentWeaponIndex].name + " and deal " + playerDamage + " damage.\n";

    // Check if the player has died
    if (health <= 0) {
        lose(); // Player loses the game
    } else if (enemyHealth <= 0) {
        if (fighting === 3) {
            winGame(); // The player defeated Kasperov (final boss)
        } else {
            defeatEnemy(); // The player defeated a regular enemy
        }
    }
}

// Make sure you have this function to calculate enemy attack value
function getEnemyAttackValue(level) {
    return Math.floor(level * 2) + Math.floor(Math.random() * 5); // Adjust as needed
}




function dodge(){
    text.innerText = "You dodge the attack from the " + enemies[fighting].name;
}

function defeatEnemy() {
    cash += Math.floor(enemies[fighting].level * 6.7);
    xp += enemies[fighting].level;
    cashText.innerText = cash;
    xpText.innerText = xp;
    update(locations[4]); // Go to "kill enemy" location after defeating the enemy
    }
    
function lose(){
    healthText.innerText=0;
    update(locations[5]);
}
function winGame(){
    update(locations[6]);
}
function restart(){
    xp=0;
    health=100;
    cash=20;
    currentWeaponIndex=0;
    inventory=["Knife"];
    cashText.innerText=cash;
    healthText.innerText=health;
    xpText.innerText=xp;
    update(locations[0]);
}
