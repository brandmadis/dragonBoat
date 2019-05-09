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
    deleteBoat = (boat, index) => {
        console.log("deleteBoat", `/${boat.id}`)
        firebaseDB.ref(`/boats/${boat.id}`).remove()
        let boats = [ ...this.state.boats ]
        boats.splice(index, 1)
        this.setState({
            boats
        })
    }
    render(){

        const boatList = this.state.boats.map((item, i) => {
            return (
                <tr key={i}
                >
                    <td
                        onClick={() => this.redirect(item.id)}
                    >{item.boatName}</td>
                    <td>{item.id}</td>
                    <td>
                        <div
                        onClick={()=> {
                            if(window.confirm('Are you sure?'))
                            this.deleteBoat(item, i)
                        }}>

                            <FontAwesomeIcon
                                color="lightgrey"
                                icon={['far', 'trash-alt']} />
                        </div>
                    </td>
                </tr>
            )
        })
        return (
        <div>
            <table className="table table-hover" id="boats">
                <thead>
                    <tr>
                        <th>
                            <div className='form-inline'>    
                                <form onSubmit={this.submitForm}>
                                    <input 
                                        type='text'
                                        className='form-control'
                                        onChange={(event)=>this.updateForm(event)} />
                                    <button className='btn btn-default'>Add Boat</button>
                                </form>
                            </div>
                            {/* <div onClick={()=>this.createBoat()}
                                style={{
                                    display:'inline', 
                                    marginRight: '10px'}}>
                                <FontAwesomeIcon icon={'plus'} />
                            <span>    </span>Add Boat
                            </div> */}
                            </th>
                        <th>ID</th>
                        <th>Delete</th>
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