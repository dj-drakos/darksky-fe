import request from 'superagent';

const apodURL = process.env.REACT_APP_APOD_URL
const systemeSolaireURL = process.env.REACT_APP_SYSTEME_SOLAIRE_URL
const locationURL = process.env.REACT_APP_LOCATION_URL
const locationKey = process.env.REACT_APP_LOCATION_KEY

export async function getSolarSystemAPI (pageNumber, filter, search) {
    let searchResult = [];
    if(filter === 'all') {
        const solarSystemURL = `${systemeSolaireURL}/bodies?order=englishName,asc&page=${pageNumber},20&filter[]=englishName,sw,${search}`;
        const { body } = await request 
            .get(solarSystemURL)
        searchResult = [...body.bodies]
    } 
    if(filter === 'planets'){
        const planetsURL = `${systemeSolaireURL}/bodies?order=englishName,asc&page=${pageNumber},20&filter[]=isPlanet,neq,&filter[]=englishName,sw,${search}`;
        const { body } = await request 
            .get(planetsURL)
        searchResult = [...body.bodies]
    }
    if(filter === 'moons') {
        const moonsURL = `${systemeSolaireURL}/bodies?order=englishName,asc&page=${pageNumber},20&filter[]=aroundPlanet,neq,&filter[]=englishName,sw,${search}`;
        const { body } = await request 
            .get(moonsURL)
        searchResult = [...body.bodies]
    }
    if(filter === 'other') {
        const othersURL = `${systemeSolaireURL}/bodies?order=englishName,asc&page=${pageNumber},20&filter[]=isPlanet,eq,&filter[]=aroundPlanet,eq,&filter[]=id,sw,${search}`;
        const { body } = await request 
            .get(othersURL)
        searchResult = [...body.bodies]
    }
    return searchResult.map(item => { return {
        id: item.id,
        name: item.englishName ?? item.id,
        bodyType: item.bodyType,
        discoveryDate: item.discoveryDate,
        gravity: item.gravity,
        radius: item.meanRadius,
        moons: item.moons,
        aroundPlanet: item.aroundPlanet
        }
    })

}

export async function getLocationAPI (city) {
    const { body } = await request 
        .get(`${locationURL}/search.php?key=${locationKey}&q=${city}&format=json`)
    const location = { 
        latitude: body[0].lat, 
        longitude: body[0].lon, 
        name: body[0].display_name 
    }
    return (location);
}

export async function getApodAPI () {
    const { body } = await request 
        .get(apodURL)
    return body;
}

