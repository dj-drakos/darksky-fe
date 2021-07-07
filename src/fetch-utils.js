import request from 'superagent';

const backendURL = 'https://guarded-thicket-69575.herokuapp.com';
const solarSystemURL = 'https://api.le-systeme-solaire.net/rest/bodies?data=id,englishName,isPlanet,moons,moon,gravity,aroundPlanet,planet';
const apodURL = 'https://apodapi.herokuapp.com/api';

export async function signUp (email, password) {
    const data = await request
        .post(`${backendURL}/auth/signup`)
        .send({
            email: email,
            password: password,
        })
    return data.body.token;
}

export async function login (email, password) {
    const data = await request
        .post(`${backendURL}/auth/signin`)
        .send({
            email: email,
            password: password,
        })
    return data.body.token;
}

export async function getSolarSystemAPI () {
    const { body } = await request 
        .get(solarSystemURL)

    return body;
}

export async function getLocationAPI (city) {
    const { body } = await request 
        .get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION}&q=${city}&format=json`)
    console.log(body);
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
