import request from 'superagent';

const URL = 'https://guarded-thicket-69575.herokuapp.com/';

export async function signUp (email, password) {
    const data = await request
        .post(`${URL}/auth/signup`)
        .send({
            email: email,
            password: password,
        })
    return data.body.token;
}

export async function login (email, password) {
    const data = await request
        .post(`${URL}/auth/signin`)
        .send({
            email: email,
            password: password,
        })
    return data.body.token;
}

