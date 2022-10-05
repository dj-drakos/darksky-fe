import request from 'superagent';

const backendURL = process.env.REACT_APP_BACKEND_URL
const apodURL = process.env.REACT_APP_APOD_URL

export async function signUp (email, password) {
    try {
        const { body } = await request
            .post(`${backendURL}/auth/signup`)
            .send({
                email,
                password,
            })
        if (body.error) {
            throw new Error(`${body.error.message} Status: ${body.error.status}`)
        }
        return body.token;
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}

export async function signIn (email, password) {
    try {
        const { body } = await request
            .post(`${backendURL}/auth/signin`)
            .send({
                email,
                password,
            })
        return body.token;
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}

export async function addToWishlist (listItem, token) {
    try {
        const { body } = await request
            .post(`${backendURL}/api/wishlist`)
            .set('Authorization', token)
            .send(listItem);
        return body;
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}

export async function getWishlist (token) {
    try {
        const { body } = await request
            .get(`${backendURL}/api/wishlist`)
            .set('Authorization', token)
        const mungedData = body.map((item) => item.englishname)
        return mungedData;
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}

export async function getJournal (token) {
    try {
        const { body } = await request
            .get(`${backendURL}/api/journals`)
            .set('Authorization', token)
        return body;
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}

export async function addEntry (entryData, token) {
    try {
        const { body } = await request
            .post(`${backendURL}/api/journals`)
            .send(entryData)
            .set('Authorization', token)
        return body;
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}

export async function getEntry (id, token) {
    try {
        const { body } = await request
            .get(`${backendURL}/api/journals/${id}`)
            .set('Authorization', token)
        //TODO: remove array index after fixing backend route
        return body[0];
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}

export async function updateEntry (id, data, token) {
    try {
        const { body } = await request
            .put(`${backendURL}/api/journals/${id}`)
            .send(data)
            .set('Authorization', token)
        return body;
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}

export async function deleteEntry (id, token) {
    try {
        const { body } = await request
            .delete(`${backendURL}/api/journals/${id}`)
            .set('Authorization', token)
        return body
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}