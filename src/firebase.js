import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCnwoSrU0pBR6OjXFwBeaqN-I27nY65kOw",
    authDomain: "dragon-d50ad.firebaseapp.com",
    databaseURL: "https://dragon-d50ad.firebaseio.com",
    projectId: "dragon-d50ad",
    storageBucket: "dragon-d50ad.appspot.com",
    messagingSenderId: "939316999209"
};
firebase.initializeApp(config);
 
const firebaseDB = firebase.database()
firebaseDB.ref('name').set('Tom')

export {
    firebase,
    firebaseDB
}