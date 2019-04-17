import * as firebase from 'firebase'

    let config = {
        apiKey: process.env.REACT_APP_devApiKey,
        authDomain: process.env.REACT_APP_devauthDomain,
        databaseURL: process.env.REACT_APP_devdatabaseURL,
        projectId: process.env.REACT_APP_devprojectId,
        storageBucket: process.env.REACT_APP_devstorageBucket,
        messagingSenderId: process.env.REACT_APP_devmessagingSenderId,
    };
if (window.location.hostname === "dragonprod-7a670.firebaseapp.com") {
    config = {
        apiKey: process.env.REACT_APP_prodApiKey,
        authDomain: process.env.REACT_APP_prodauthDomain,
        databaseURL: process.env.REACT_APP_proddatabaseURL,
        projectId: process.env.REACT_APP_prodprojectId,
        storageBucket: process.env.REACT_APP_prodstorageBucket,
        messagingSenderId: process.env.REACT_APP_prodmessagingSenderId,
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