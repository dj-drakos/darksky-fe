const LOCATION = 'LOCATION'
const TOKEN = 'TOKEN'

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

export function getSessionStorageToken() {
    return sessionStorage.getItem(TOKEN) ?? null;
}

export function setSessionStorageToken(token) {
    sessionStorage.setItem(TOKEN, token)
}

export function removeSessionStorageToken() {
    sessionStorage.removeItem(TOKEN)
    localStorage.removeItem(LOCATION)
}
