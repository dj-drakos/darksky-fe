function mungePlanets(planetsArray) {
    //filter incoming array
    return planetsArray.filter(planet => planet.isPlanet === true);
    //return outgoing array formatted correctly - maybe munge data when we have an array to play with 
}

function mungeMoons(moonsArray) {
    return moonsArray.filter(moon => moon.aroundPlanet !== null);
}

function mungeAsteroids(asteroidsArray) {
    return asteroidsArray.filter(asteroid => asteroid.isPlanet === false && asteroid.aroundPlanet === null);
}

module.exports = {
    mungePlanets,
    mungeMoons,
    mungeAsteroids
}