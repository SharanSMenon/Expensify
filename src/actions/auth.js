import {
    firebase,
    googleAuthProvider,
    githubAuthProvider
} from '../firebase/firebase'
export const login = (uid) => ({
    type: 'LOGIN',
    uid
});
const logins = {
    "github":githubAuthProvider,
    "google":googleAuthProvider
}
export const startLogin = (method) => {
    console.log(method)
    return () => {
        return firebase.auth().signInWithPopup(logins["google"]);
    }
}
export const logout = () => ({
    type: 'LOGOUT'
});
export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}