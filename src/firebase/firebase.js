import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyAhlz95ckRACRv0-zniDoTzklZaPL-CV-U",
    authDomain: "expensify-91f50.firebaseapp.com",
    databaseURL: "https://expensify-91f50.firebaseio.com",
    projectId: "expensify-91f50",
    storageBucket: "expensify-91f50.appspot.com",
    messagingSenderId: "703988299573"
};
firebase.initializeApp(config);
const database = firebase.database()
// Add Facebook, Github and Twitter
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export {firebase, googleAuthProvider, database as default}
// database.ref('expenses').on('child_removed',(snap) => {
//     console.log(snap.key, snap.val());
// })
// database.ref('expenses').on('value', (snap) => {
//     const expenses = []
//     snap.forEach((child) => {
//         expenses.push({
//             id: child.key,
//             ...child.val()
//         })
//     })
//     console.log(expenses);

// })
// database.ref('expenses').push({
//     description:"Rent",
//     amount:10.23,
//     created:94829399333,
//     note:""
// })
// database.ref('expenses').push({
//     description:"Gas",
//     amount:232.23,
//     created:94829393333,
//     note:""
// })
// database.ref('expenses').push({
//     description:"Water",
//     amount:43.34,
//     created:94829339333,
//     note:""
// })