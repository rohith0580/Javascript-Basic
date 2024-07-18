// Passing a function an object as an argument

var planet1, planet2;
var getPlanetInfo;

planet1 = {
    name: "Jupiter",
    position: 5,
    type: "Gas Giant",
    radius: 69911,
    sizeRank: 1
};

planet2 = {
    name: "Mars",
    position: 4,
    type: "Terrestrial",
    radius: 3389.5,
    sizeRank: 4
};

getPlanetInfo = function (planet) {
    return planet.name + ": planet number " + planet.position +
           ", type: " + planet.type + ", radius: " + planet.radius + " km";
};

console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2));




/* Further Adventures
 *
 * 1) Create a second planet object.
 *
 * 2) Use getPlanetInfo to log details of
 *    the second planet.
 *
 * 3) Update the getPlanetInfo function to
 *    include more information about
 *    each planet.
 *
 */