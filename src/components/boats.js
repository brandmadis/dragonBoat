import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { firebaseBoats, firebaseLooper } from '../firebase'

class Boats extends Component {
    state = {
        boats: []
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
        console.log("create boat")
        var newRef = firebaseBoats.push()
        var key = newRef.key
        var data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        newRef.set(data)
        this.props.history.push(`/boats/${key}`);
        console.log("key: ", key)

    }
    redirect(id){
        console.log("redirect", id)
        this.props.history.push(`/boats/${id}`);

    }
    render() {
        const boatList = this.state.boats.map((item, i) => {
            return (
                <tr onClick={() => this.redirect(item.id)}>
                    <td></td>
                    <td>{item.id}</td>
                    <td></td>
                </tr>
                )
        })
        
        return (
            <div>
                Boats<br/>
                <button 
                    className="btn btn-default" 
                    onClick={() => this.createBoat()}>Create new boat
                </button>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Heat</th>
                            <th>Seating</th>
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

export default Boats