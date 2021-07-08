const LOCATION = 'LOCATION'
const TOKEN = 'TOKEN'

export function getLocation() {
    const loc = localStorage.getItem(LOCATION);
    if (!loc)
        return 0;
    const location = JSON.parse(loc);
    return location;
}

export function setLocation(location) {
    const locationString = JSON.stringify(location);
    localStorage.setItem(LOCATION, locationString)
}

export function getToken() {
    const rawToken = localStorage.getItem(TOKEN);
    if (!rawToken)
        return 0;
    const token = JSON.parse(rawToken);
    return token;
}

export function setToken(token) {
    const tokenString = JSON.stringify(token);
    localStorage.setItem(TOKEN, tokenString)
}

export function getName() {
    const rawName = localStorage.getItem(TOKEN);
    if (!rawName)
        return ('Astro-Body');
    const Name = JSON.parse(rawName);
    return Name;
}

export function setName(Name) {
    const nameString = JSON.stringify(Name);
    localStorage.setItem(TOKEN, nameString)
}

