import request from 'superagent';

const backendURL = process.env.REACT_APP_BACKEND_URL
const apodURL = process.env.REACT_APP_APOD_URL

export async function signUp (email, password) {
    try {
        const {body} = await request
            .post(`${backendURL}/auth/signup`)
            .send({
                email: email,
                password: password,
            })
            console.log(body)
        if (body.error) {
            throw new Error(`${body.error.message} Status: ${body.error.status}`)
        }
        return body.token;
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
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

export async function getApodAPI () {
    const { body } = await request 
        .get(apodURL)

    return body;
}

export async function addToWishlist (listItem, token) {
    const data = await request
    .post(`${backendURL}/api/wishlist`)
    .set('Authorization', token)
    .send(listItem);
    
    return data.body;
}

export async function getWishlist (token) {
    const { body } = await request
    .get(`${backendURL}/api/wishlist`)
    .set('Authorization', token)
    const mungedData = body.map((item) => item.englishname)
    return mungedData;
}

export async function fetchJournals (token) {
    const { body } = await request
        .get(`${backendURL}/api/journals`)
        .set('Authorization', token)

    return body;
}

export async function addJournalEntry (entryData, token) {
    const { body } = await request
        .post(`${backendURL}/api/journals`)
        .send(entryData)
        .set('Authorization', token)

    return body;
}

export async function fetchEntry (id, token) {
    const { body } = await request
        .get(`${backendURL}/api/journals/${id}`)
        .set('Authorization', token)
    //TODO: remove array index after fixing backend route
    return body[0];
}

export async function updateEntry (id, data, token) {
    const { body } = await request
        .put(`${backendURL}/api/journals/${id}`)
        .send(data)
        .set('Authorization', token)

    return body;
}

export async function deleteEntry (id, token) {
    const { body } = await request
        .delete(`${backendURL}/api/journals/${id}`)
        .set('Authorization', token)
        
    return body
}