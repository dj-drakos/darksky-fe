const LOCATION = 'LOCATION'
const TOKEN = 'TOKEN'
const NAME = 'NAME'

export function getLocalStorageLocation() {
    const loc = localStorage.getItem(LOCATION);
    if (!loc)
        return 0;
    const location = JSON.parse(loc);
    return location;
}

export function setLocalStorageLocation(location) {
    const locationString = JSON.stringify(location);
    localStorage.setItem(LOCATION, locationString)
}

export function getLocalStorageToken() {
    const rawToken = localStorage.getItem(TOKEN);
    if (!rawToken)
        return;
    const token = JSON.parse(rawToken);
    return token;
}

export function setLocalStorageToken(token) {
    const tokenString = JSON.stringify(token);
    localStorage.setItem(TOKEN, tokenString)
}

export function removeLocalStorageToken() {
    localStorage.removeItem(TOKEN)
}

export function getLocalStorageName() {
    const rawName = localStorage.getItem(NAME);
    if (!rawName)
        return ('Astro-Body');
    const name = JSON.parse(rawName);
    return name;
}

export function setLocalStorageName(Name) {
    const nameString = JSON.stringify(Name);
    localStorage.setItem(NAME, nameString)
}

