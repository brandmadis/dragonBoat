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
const firebasePaddlers = firebaseDB.ref('paddlers')
const firebaseBoat = firebaseDB.ref('boat/-LaXxOo3qx_qNFcCCmqd')
const firebaseBoats = firebaseDB.ref('boat')

const firebaseLooper = (snapshot) => {
    const data = []
    snapshot.forEach((childSnapshot) => {
        data.push({
            ...childSnapshot.val(),
            id: childSnapshot.key
        })
    })
    return data
}

const firebaseLooper2 = (snapshot) => {
    const data2 = []
    snapshot.forEach((childSnapshot) => {
        console.log("childSnapshot first: ", childSnapshot.val())
        data2.push(childSnapshot.val())
    })
    return data2
}
export {
    firebase,
    firebasePaddlers,
    firebaseBoat,
    firebaseBoats,
    firebaseDB,
    firebaseLooper,
    firebaseLooper2
}