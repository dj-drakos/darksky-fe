import request from 'superagent';

const apodURL = 'https://apodapi.herokuapp.com/api';

export async function getSolarSystemAPI (pageNumber, filter, search) {
    if(filter === 'all') {
        const solarSystemURL = `https://api.le-systeme-solaire.net/rest/bodies?order=englishName,asc&page=${pageNumber},20&filter[]=englishName,sw,${search}`;
        const { body } = await request 
            .get(solarSystemURL)
        return body.bodies;
    } 
    if(filter === 'planets'){
        const planetsURL = `https://api.le-systeme-solaire.net/rest/bodies?order=englishName,asc&page=${pageNumber},20&filter[]=isPlanet,neq,&filter[]=englishName,sw,${search}`;
        const { body } = await request 
            .get(planetsURL)
        return body.bodies;
    }
    if(filter === 'moons') {
        const moonsURL = `https://api.le-systeme-solaire.net/rest/bodies?order=englishName,asc&page=${pageNumber},20&filter[]=aroundPlanet,neq,&filter[]=englishName,sw,${search}`;
        const { body } = await request 
            .get(moonsURL)
        return body.bodies;
    }
    if(filter === 'other') {
        const othersURL = `https://api.le-systeme-solaire.net/rest/bodies?order=englishName,asc&page=${pageNumber},20&filter[]=isPlanet,eq,&filter[]=aroundPlanet,eq,&filter[]=id,sw,${search}`;
        const { body } = await request 
            .get(othersURL)
        return body.bodies;
    }
}

export async function getLocationAPI (city) {
    const { body } = await request 
        .get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION}&q=${city}&format=json`)
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

