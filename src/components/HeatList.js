import React, { Component } from 'react'
import { firebaseBoats, firebaseLooper2, firebaseDB, firebaseHeats, firebaseSeats } from '../firebase'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { CardContent } from 'semantic-ui-react';
import { createCipher } from 'crypto';


class HeatList extends Component {
    constructor(props){
        super(props)
        this.state = {
            heats: [],
            refresh: false

        }
    }      
    componentDidMount(){}
    componentWillMount(){
        console.log("cwm:", this.props.match.params.id)
        if(this.state.heats.length < 1){
            firebaseDB.ref(`/boats/${this.props.match.params.id}/heats`).once('value')
            .then((snapshot) => {
                const heats = firebaseLooper2(snapshot)
                console.log('heats: ', heats)
                this.setState({
                    heats
                })
            })
            firebaseDB.ref(`/boats/${this.props.match.params.id}/boatName`).once('value')
            .then((snapshot) => {
                this.setState({
                    boatName: snapshot.val()
                })
            })
        }
    }    
    delete(id){
        console.log("delete hit", id)
        firebaseDB.ref(`heats/${id}`).remove()
        let heat = firebaseDB.ref(
            `boats/${this.props.match.params.id}/heats/`)
            .equalTo(id)
            .once('value')
            .remove()
        console.log("delete heat: ", heat)
        this.setState({
            heats: this.state.heats.filter((_, i) => i !== id)
        })        
    }
    createHeat(){
        console.log('createHeat')
        let heatRef = firebaseHeats.push()
        let heatKey = heatRef.key
        let heatData = {
            'heatName': 'New heat name',
            'boat': this.props.match.params.id
        }
        heatRef.set(heatData)

        let boatRef = firebaseDB.ref(`boats/${this.props.match.params.id}/heats`)
        
        boatRef.push()
    }           

    render(){
        const heatList = this.state.heats.map((item, i) => {
            return (
                <tr key={i}
                    >
                    <td onClick={() => this.redirect(item)}
                        >{item}</td>
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
                            <div onClick={()=>this.createHeat()}
                                style={{
                                    display:'inline', 
                                    marginRight: '10px',
                                    cursor: 'pointer'}}>
                                <FontAwesomeIcon icon={'plus'} />
                            <span>    </span>Add New Heat
                            </div>
                            </th>
                        <th>ID</th>
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