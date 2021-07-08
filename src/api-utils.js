import request from 'superagent';

export async function getSolarSystemAPI (pageNumber) {
    const solarSystemURL = `https://api.le-systeme-solaire.net/rest/bodies?order=englishName,asc&page=${pageNumber}, 20`;
    const { body } = await request 
        .get(solarSystemURL)

    return body;
}


export async function getPlanets(pageNumber) {
    const planetsURL = `https://api.le-systeme-solaire.net/rest/bodies?order=englishName,asc&page=${pageNumber},20&filter[]=isPlanet,neq,`;
    const { body } = await request 
        .get(planetsURL)

    return body;
}

export async function getMoons(pageNumber) {
    const moonsURL = `https://api.le-systeme-solaire.net/rest/bodies?order=englishName,asc&page=${pageNumber},20&filter[]=aroundPlanet,neq,`;
    const { body } = await request 
        .get(moonsURL)

    return body;
}

export async function getOthers(pageNumber) {
    const othersURL = `https://api.le-systeme-solaire.net/rest/bodies?order=englishName,asc&page=${pageNumber},20&filter[]=isPlanet,eq,&filter[]=aroundPlanet,eq,`;
    const { body } = await request 
        .get(othersURL)

    return body;
}


