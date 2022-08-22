const localUrl = 'https://localhost:44324';
const externalUrl = 'https://spellingbeeapi.herokuapp.com';

export const SettingsSelf = {
    Title: "Self",
    DefaultExpanded: true,
    Url: localUrl + "/api/spellingbee/self?value="
}

export const SettingsNyt = {
    Title: "New York Times",
    DefaultExpanded: false,
    Url: localUrl + "/api/spellingbee/nyt"
}

export const SettingsFreebee = {
    Title: "FreeBee",
    DefaultExpanded: false,
    Url: localUrl + "/api/spellingbee/freebee"
}

