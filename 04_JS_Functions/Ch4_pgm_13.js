// A function to display player information

var player1;
var player2;
var player;
var showPlayerInfo;
var showPlayerPlace;
var showPlayerHealth;

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

showPlayerInfo = function () {
    console.log(player.name);
    console.log("------------------------------");
    console.log(player.name + " is in " + player.place);
    console.log(player.name + " has health " + player.health);
    console.log("------------------------------");
    console.log("");
};

showPlayerPlace = function () {
    console.log("The player is from " + player.place);
}

showPlayerHealth = function() {
    console.log("The player has health " + player.health);
}
player = player1;
showPlayerInfo();
showPlayerPlace();
showPlayerHealth();

player = player2;
showPlayerInfo();
showPlayerPlace();
showPlayerHealth();



/* Further Adventures
 *
 * 1) Write a function that just shows
 *    where the player is.
 *
 * 2) Write a function that just shows
 *    the player's health.
 *
 * 3) Change the showPlayerInfo function
 *    to use your two functions.
 *
 */