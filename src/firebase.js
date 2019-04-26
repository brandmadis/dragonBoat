import * as firebase from 'firebase'
import { CardContent } from 'semantic-ui-react';

    let config = {
        apiKey: process.env.REACT_APP_devApiKey,
        authDomain: process.env.REACT_APP_devauthDomain,
        databaseURL: process.env.REACT_APP_devdatabaseURL,
        projectId: process.env.REACT_APP_devprojectId,
        storageBucket: process.env.REACT_APP_devstorageBucket,
        messagingSenderId: process.env.REACT_APP_devmessagingSenderId,
    };
if (window.location.hostname === process.env.REACT_APP_prodauthDomain) {
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
const firebaseBoats = firebaseDB.ref('boats')
const firebaseHeats = firebaseDB.ref('heats')
const firebaseSeats = firebaseDB.ref('seats')
const firebaseBoat = firebaseDB.ref('boat')

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
const firebaseLooper3 = (snapshot, boatID) => {
    const data3 = []
    const out = []
    snapshot.forEach((childSnapshot) => {
        data3.push(childSnapshot.val())
    })
    data3.forEach((item) => {
        if(item.boat === boatID){
            console.log("item.key", item.key)
            out.push(item)
        }
    })
    return out
}
export {
    firebase,
    firebasePaddlers,
    firebaseBoat,
    firebaseBoats,
    firebaseHeats,
    firebaseSeats,
    firebaseDB,
    firebaseLooper,
    firebaseLooper2,
    firebaseLooper3,

    config
}