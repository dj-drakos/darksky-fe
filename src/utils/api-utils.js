import request from 'superagent';

const apodURL = process.env.REACT_APP_APOD_URL
const systemeSolaireURL = process.env.REACT_APP_SYSTEME_SOLAIRE_URL
const locationURL = process.env.REACT_APP_LOCATION_URL
const locationKey = process.env.REACT_APP_LOCATION_KEY

export async function getSolarSystemAPI (pageNumber, bodyType, search) {
    try {
        let URL;
        if(bodyType === 'all') {
            URL = `${systemeSolaireURL}?order=englishName,asc&page=${pageNumber},20&filter[]=englishName,cs,${search}`;
        } 
        else {
            URL = `${systemeSolaireURL}?order=englishName,asc&page=${pageNumber},20&filter[]=bodyType,eq,${bodyType}&filter[]=englishName,cs,${search}`;
        }
        const { body } = await request 
            .get(URL)

        return body.bodies.map(item => ({
            id: item.id,
            name: item.englishName ?? item.id,
            bodyType: item.bodyType,
            avgTemp: item.avgTemp,
            dimension: item.dimension,
            gravity: item.gravity,
            mass: item.mass,
            vol: item.vol,
            density: item.density,
            radius: item.meanRadius,
            moons: item.moons,
            aroundPlanet: item.aroundPlanet
            })
        )
    } catch (error) {
        console.error(`Error: ${error.message}`)  
    }
}

export async function getLocationAPI (city) {
    try {
        const { body } = await request 
            .get(`${locationURL}/search.php?key=${locationKey}&q=${city}&format=json`)
        const location = { 
            latitude: body[0].lat, 
            longitude: body[0].lon, 
            name: body[0].display_name 
        }
        return (location);
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}

export async function getApodAPI () {
    try {
        const { body } = await request 
        .get(apodURL)
        return body;
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}