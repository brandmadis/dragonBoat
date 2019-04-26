import React, { Component } from 'react'
import { 
    firebaseBoats,
    firebaseLooper,
    firebaseLooper2, 
    firebaseLooper3, 
    firebaseDB, 
    firebaseHeats, 
    firebaseSeats } from '../firebase'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { CardContent } from 'semantic-ui-react';
import { createCipher } from 'crypto';


class HeatList extends Component {
    constructor(props){
        super(props)
        this.state = {
            heats: [],
            refresh: false,
            heatInput: ""

        }
    }      
    componentDidMount(){}
    componentWillMount(){
        console.log("cwm:", this.props.match.params.id)
        if(this.state.heats.length < 1){
            // firebaseDB.ref(`/boats/${this.props.match.params.id}/heats`).once('value')
            // .then((snapshot) => {
            //     const heats = firebaseLooper2(snapshot)
            //     this.setState({
            //         heats
            //     })
            // })
            firebaseDB.ref(`/boats/${this.props.match.params.id}/boatName`).once('value')
            .then((snapshot) => {
                this.setState({
                    boatName: snapshot.val()
                })
            })
            firebaseHeats.once('value')
            .then((snapshot) => {
                const heats = firebaseLooper3(snapshot, this.props.match.params.id)
                this.setState({
                    heats
                })
            })            
                   
        }
    }    
    delete(id){
        console.log("delete hit", id)
        let boatID = this.props.match.params.id
        let boatHeatKey = firebaseDB.ref(`/heats/${id}/boatHeatKey`)
        .once('value')
        .then(function(snapshot) {
            let bhkey = (snapshot.val())
            // remove from boats
            firebaseDB.ref(`/boats/${boatID}/heats/${bhkey}`).remove()
            // remove from heats
            firebaseDB.ref(`heats/${id}`).remove() 
        })
        let heats = [...this.state.heats]
        let index = heats.indexOf(id)
        heats.splice(index, 1)
        this.setState({
            heats
        })        
    }
    createHeat(){
        console.log('createHeat')
        let heatRef = firebaseHeats.push()
        let heatKey = heatRef.key
        
        // add heat to boat
        let boatRef = firebaseDB.ref(
            `boats/${this.props.match.params.id}/heats`)
        let heatData = {}
        boatRef.push(heatKey)
            .then((snap) => {
                const key = snap.key
                let boatHeatKey = boatRef.name
                heatData = {
                    'heatName': this.state.heatInput,
                    'boatHeatKey': key,
                    'boat': this.props.match.params.id,
                    'seating': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    'heatKey': heatKey
                }
                heatRef.set(heatData)
            })
            .then(() => {
                const newHeatData = {
                    ...this.state.heats
                }
                this.setState({
                    heats: [...this.state.heats, heatData]
                })
            })
    }  
    submitForm = (event) => {
        console.log("submitForm")
        event.preventDefault()
        this.createHeat()
        event.target.reset()
    }   
    updateForm = (event) => {
        let newheatInput = {
            ...this.state.heatInput
        }
        newheatInput = event.target.value
        this.setState({
            heatInput: newheatInput
        })
    }     
    redirect = (item) => {
        console.log("redirect" , item)
        this.props.history.push(`/heat/${item.heatKey}`)
    } 
    render(){
        const heatList = this.state.heats.map((item, i) => {
            return (
                <tr key={i}
                    >
                    <td onClick={() => this.redirect(item)}
                        >{item.heatName}</td>
                    <td>{item.id}</td>
                    <td onClick={() => this.delete(item)}
                        ><button className="btn btn-default">Delete</button></td>
                </tr>
            )
        })
        return(
            <div>
                <h1><i>{ this.state.boatName }</i></h1>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>
                            <form onSubmit={this.submitForm}>
                                <input 
                                    type="text"
                                    onChange={(event)=>this.updateForm(event)}/>
                                <button>Add Heat</button>
                            </form>
                            {/* <div onClick={()=>this.createHeat()}
                                style={{
                                    display:'inline', 
                                    marginRight: '10px',
                                    cursor: 'pointer'}}>
                                <FontAwesomeIcon icon={'plus'}
                                 />
                            <span>    </span>Add New Heat
                            </div> */}
                            </th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                     { heatList }
                </tbody>
            </table>
        </div>
        )
    }
}

export default HeatList