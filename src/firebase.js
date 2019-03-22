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
// const firebaseBoat = firebaseDB.ref('boat').limitToFirst(1)

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
        // console.log("childSnapshot: ", childSnapshot.val())
        data2.push(childSnapshot.val())
        // data2.push({
            // ...childSnapshot.val(),
            // id: childSnapshot.key
        // })
    })
    
    // transform into list
    console.log("firebaseLooper2: ", data2)
    return data2
}
export {
    firebase,
    firebasePaddlers,
    firebaseBoat,
    firebaseDB,
    firebaseLooper,
    firebaseLooper2
}