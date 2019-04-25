import React, { Component } from 'react'
// import { Link, withRouter } from 'react-router-dom'
import { firebaseBoats, firebaseLooper, firebaseDB, firebaseHeats, firebaseSeats } from '../firebase'
import FormFields from '../widgets/Forms/formFields2'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'

class Boats2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            boats: [],

        }
    }
    componentWillMount(){
        if(this.state.boats.length < 1){
            firebaseBoats.once('value')
            .then((snapshot) => {
                const boats = firebaseLooper(snapshot)
                this.setState({
                    boats
                })
            })
        }
    }
    createBoat(){
        console.log("createBoat")
        let newRef = firebaseBoats.push()
        let boatKey = newRef.key
        
        // let heatRef = firebaseHeats.push()
        // let heatKey = heatRef.key
        // let heatData = {
        //     'heatName': 'Heat name',
        //     'boat': boatKey
        // }
        // heatRef.set(heatData)
        
        // let seatRef = firebaseSeats.push()
        // let seatData ={
        //     'seating': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //     'boat': boatKey,
        //     'heat': heatKey
        // }
        let boatData = {
            'boatName': 'boat name',
            // 'heats': null
        }
        let newBoatState = {
            'boatName': 'boat name',
            'id': boatKey
        }
        newRef.set(boatData)
        // seatRef.set(seatData)
        const newBoatData = {
            ...this.state.boats
        }
        this.setState({
            boats: [...this.state.boats, newBoatState]
        })
    }
    redirect(id){
        console.log('redirect', id)
        this.props.history.push(`/heatList/${id}`)
    }
    render(){

        const boatList = this.state.boats.map((item, i) => {
            return (
                <tr key={i}
                    onClick={() => this.redirect(item.id)}
                >
                    <td>{item.boatName}</td>
                    <td>{item.id}</td>
                </tr>
            )
        })
        return (
        <div>
            <table className="table table-hover" id="boats">
                <thead>
                    <tr>
                        <th>
                            <div onClick={()=>this.createBoat()}
                                style={{
                                    display:'inline', 
                                    marginRight: '10px'}}>
                                <FontAwesomeIcon icon={'plus'} />
                            <span>    </span>Add Boat
                            </div>
                            </th>
                        <th>ID</th>
                    </tr>
                </thead>
                <tbody>
                     { boatList }
                </tbody>
            </table>
        </div>
        )
    }
}

export default Boats2