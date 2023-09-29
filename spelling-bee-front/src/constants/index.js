const localUrl = 'https://localhost:44324';
const externalUrl = 'https://spelling-bee-api.onrender.com';

export const SettingsSelf = {
    Title: "Your own game",
    DefaultExpanded: true,
    Url: externalUrl + "/api/spellingbee/self?value="
}

export const SettingsNyt = {
    Title: "New York Times",
    DefaultExpanded: false,
    Url: externalUrl + "/api/spellingbee/nyt"
}

export const SettingsFreebee = {
    Title: "FreeBee",
    DefaultExpanded: false,
    Url: externalUrl + "/api/spellingbee/freebee"
}

export const Strings = {
    EmptyHive: "       ",
    LettersFormLabel: "Type 7 letters (center letter first!)",
}
