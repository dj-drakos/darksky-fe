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
    const token = localStorage.getItem(TOKEN);
    if (!token)
        return;
    return token;
}

export function setLocalStorageToken(token) {
    localStorage.setItem(TOKEN, token)
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

