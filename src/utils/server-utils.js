import request from 'superagent';

const backendURL = process.env.REACT_APP_BACKEND_URL

export async function signUp (email, password) {
    try {
        const res = await request
            .post(`${backendURL}/api/v1/users/signup`)
            .send({
                email,
                password,
            })
            const { body } = res
        if (body.error) {
            throw new Error(`${body.error.message} Status: ${body.error.status}`)
        }
        console.log(res)
        return body.sessionToken;
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}

export async function signIn (email, password) {
    try {
        const { body } = await request
            .post(`${backendURL}/api/v1/users/signin`)
            .send({
                email,
                password,
            })
        return body.sessionToken;
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}

export async function getWishlist (token) {
    try {
        const { body } = await request
            .get(`${backendURL}/api/v1/wishlists`)
            .set('Authorization', token)
        return body;
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}

export async function addWishlistItem (listItem, token) {
    try {
        const { body } = await request
            .post(`${backendURL}/api/v1/wishlists`)
            .set('Authorization', token)
            .send(listItem)
        return body
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}

export async function deleteWishlistItem (listItemId, token) {
    try {
        const { body } = await request
            .delete(`${backendURL}/api/v1/wishlists/${listItemId}`)
            .set('Authorization', token)
        return body
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}

export async function getJournal (token) {
    try {
        const { body } = await request
            .get(`${backendURL}/api/v1/journals`)
            .set('Authorization', token)
        return body;
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}

export async function addEntry (entryData, token) {
    try {
        const { body } = await request
            .post(`${backendURL}/api/v1/journals`)
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
            .get(`${backendURL}/api/v1/journals/${id}`)
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
            .put(`${backendURL}/api/v1/journals/${id}`)
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
            .delete(`${backendURL}/api/v1/journals/${id}`)
            .set('Authorization', token)
        return body
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}