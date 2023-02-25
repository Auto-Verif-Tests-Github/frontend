const name = "is_auth";
const auth = "true";
const deauth = "false";
const hash = "pass_hash";

export function isAuthorized() {
    const status = localStorage.getItem(name);
    if(status == null) {
        deauthorize();
    }
    return status === auth;
}

export function authorize(passHash) {
    localStorage.setItem(name, auth);
    localStorage.setItem(hash, passHash);
}

export function deauthorize() {
    localStorage.setItem(name, deauth);
    localStorage.setItem(hash, "");
}
