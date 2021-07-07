function mungePlanets(planetsArray) {
    //filter incoming array
    return planetsArray.filter(planet => planet.isPlanet === true);
    //return outgoing array formatted correctly - maybe munge data when we have an array to play with 
}

module.exports = {
    mungePlanets
}