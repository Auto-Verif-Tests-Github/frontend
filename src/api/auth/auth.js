const name = "is_auth";
const auth = "true";
const deauth = "false";

export function isAuthorized() {
    const status = localStorage.getItem(name);
    if(status == null) {
        localStorage.setItem(name, deauth);
    }
    return status === auth;
}

export function authorize() {
    localStorage.setItem(name, auth);
}

export function deauthorize() {
    localStorage.setItem(name, deauth);
}
