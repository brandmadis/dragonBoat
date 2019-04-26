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
            boatInput: ""

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
        let name = this.state.boatInput
        let boatData = {
            'boatName': name,
            // 'heats': null
        }
        let newBoatState = {
            'boatName': name,
            'id': boatKey
        }
        console.log("1")
        newRef.set(boatData)
        console.log("2")
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
    submitForm = (event) => {
        console.log("submitForm")
        event.preventDefault()
        this.createBoat()
        event.target.reset()
    }
    updateForm = (event) => {
        let newboatInput = {
            ...this.state.boatInput
        }
        newboatInput = event.target.value
        this.setState({
            boatInput: newboatInput
        })
       
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
                            <form onSubmit={this.submitForm}>
                                <input 
                                    type='text'
                                    onChange={(event)=>this.updateForm(event)} />
                                <button>Add Boat</button>
                            </form>
                            {/* <div onClick={()=>this.createBoat()}
                                style={{
                                    display:'inline', 
                                    marginRight: '10px'}}>
                                <FontAwesomeIcon icon={'plus'} />
                            <span>    </span>Add Boat
                            </div> */}
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