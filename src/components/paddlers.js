import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { firebaseDB, firebasePaddlers, firebaseLooper } from '../firebase'


  
class Paddlers extends Component {
    state = {
        paddlers: []
    }
    componentWillMount(){
        if(this.state.paddlers.length < 1){
            firebasePaddlers.once('value')
            .then((snapshot) => {
                const paddlers = firebaseLooper(snapshot)
                this.setState({
                    paddlers
                })
            })
        }
    }
    deletePaddler(id, index){
        firebaseDB.ref('paddlers/' + id).remove()
        this.setState({
            paddlers: this.state.paddlers.filter((_, i) => i !== index)
        })
        console.log("deletePaddler")
    }
    editField(item){
        console.log("editField", item)
    }
    render(){
        // console.log("request: ", this.state.paddlers)
        const padList = this.state.paddlers.map((item, i) => {
            // console.log("item: ", item, "i: ", i)
            return (
                <tr>
                    <td>{item.firstName}</td>
                    <td>{item.LastName} </td>
                    <td><span>{item.id}</span></td>
                    <td><span onClick={() => this.editField(item)}>{item.Weight}</span></td>
                    <td>{item.Pref}</td>
                    <td><button onClick={() => this.deletePaddler(item.id, i)}>delete</button></td>
                </tr>        
                )    
        })
    return (
        <div>
            Paddlers<br/>
            <Link to='/paddlerAdd' className="nav-link"><button>Add New Paddler</button></Link><br />
            <table className="table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>ID</th>
                        <th>Weight</th>
                        <th>Pref</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { padList }

                </tbody>
            </table>
        </div>
            
        )
    }
}

export default Paddlers