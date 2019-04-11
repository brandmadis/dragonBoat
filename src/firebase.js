import * as firebase from 'firebase'
// let config = {}
    let config = {
        apiKey: "AIzaSyCnwoSrU0pBR6OjXFwBeaqN-I27nY65kOw",
        authDomain: "dragon-d50ad.firebaseapp.com",
        databaseURL: "https://dragon-d50ad.firebaseio.com",
        projectId: "dragon-d50ad",
        storageBucket: "dragon-d50ad.appspot.com",
        messagingSenderId: "939316999209"
    };
if (window.location.hostname === "dragonprod-7a670.firebaseapp.com") {
    config = {
        apiKey: "AIzaSyDE-p3xPwJ_2BCT__rin94Mz9Cejfrpc4U",
        authDomain: "dragonprod-7a670.firebaseapp.com",
        databaseURL: "https://dragonprod-7a670.firebaseio.com",
        projectId: "dragonprod-7a670",
        storageBucket: "dragonprod-7a670.appspot.com",
        messagingSenderId: ""
    }
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
    firebaseLooper2,
    config
}