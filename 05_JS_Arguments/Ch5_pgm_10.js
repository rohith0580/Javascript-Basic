// Displaying a player's health via object properties


var showPlayerHealth;

showPlayerHealth = function (playerName, playerHealth, playerHealthMultiplier) {
    var adjustedHealth = playerHealth * playerHealthMultiplier;
    console.log(playerName + " has health " + adjustedHealth);
};

var player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50,
    healthMultiplier: 1.2  
};

var player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40,
    healthMultiplier: 1.5  
};

// Display player health adjusted by healthMultiplier
showPlayerHealth(player1.name, player1.health, player1.healthMultiplier); // Step 4: Added healthMultiplier as third argument
showPlayerHealth(player2.name, player2.health, player2.healthMultiplier); // Step 4: Added healthMultiplier as third argument



/* Further Adventures
 *
 * 1) Add a new property to the player objects
 *    called healthMultiplier.
 *
 * 2) Add a third parameter to the definition
 *    of the showPlayerHealth function
 *    called playerHealthMultiplier
 *
 * 3) Update the function so that the health
 *    displayed is first multiplied by
 *    the health multiplier.
 *
 * 4) Add the player's healthMultiplier property
 *    as a third argument to the two calls
 *    to the showPlayerHealth function.
 *
 */