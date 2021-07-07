import request from 'superagent';

const backendURL = 'https://guarded-thicket-69575.herokuapp.com';
const solarSystemURL = 'https://api.le-systeme-solaire.net/rest/bodies?data=id,englishName,isPlanet,moons,moon,gravity,aroundPlanet,planet';

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