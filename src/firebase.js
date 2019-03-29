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


// get all paddlers
// get current boat
// only make one call from heat

const firebaseLooper2 = (snapshot) => {
    // console.log("snapshot: ", snapshot.key)
    const boatId = snapshot.key
    const data2 = []
    let seatOccupant = 0
    snapshot.forEach((childSnapshot) => {
        // console.log("childSnapshot first: ", childSnapshot.val())
        firebasePaddlers.child(childSnapshot.val()).once('value', function(snapshot){
            
            if(snapshot.exists() || childSnapshot.key == 0){
                seatOccupant = childSnapshot.val()
                // data2.push(childSnapshot.val())
            } 
            
            else {
                // console.log("does not exist", childSnapshot.key)
                var updates = {}
                updates[boatId + "/" + childSnapshot.key ] = 0
                firebaseBoats.update(updates)
                // data2.push(0)
            }
        })
        // console.log("seatOccupant: ", seatOccupant, childSnapshot.val())
        // data2.push(seatOccupant)
        data2.push(childSnapshot.val())
        // data2.push({
            // ...childSnapshot.val(),
            // id: childSnapshot.key
        // })
    })
    
    // transform into list
    // console.log("data2: ", data2)
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