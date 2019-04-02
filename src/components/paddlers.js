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
    editPaddler(id){
        this.props.history.push(`/paddlers/${id}`)
    }
    render(){
        // console.log("request: ", this.state.paddlers)
        const padList = this.state.paddlers.map((item, i) => {
            // console.log("item: ", item, "i: ", i)
            return (
                // <tr key={i} onClick={() => this.editPaddler(item.id)}> 
                <tr key={i}>
                    <td><img src={item.Image} alt="" width="75" height="75"/></td>
                    <td>{item.firstName} {item.lastName} </td>
                    <td>{item.Weight} </td>
                    <td>{item.Pref} </td>
                    <td>
                        <button 
                            className="btn btn-default" 
                            onClick={() => this.editPaddler(item.id)}>
                            edit
                        </button>
                    </td>
                    <td>
                    
                        <button 
                            className="btn btn-default" 
                            onClick={() => {if (window.confirm("Are you sure you want to delete this paddler?")) this.deletePaddler(item.id, i)}}>
                            delete
                        </button>
                    </td>
                </tr>        
                )    
        })
    return (
        <div>
            Paddlers<br/>
            <Link to='/paddlerAdd' className="nav-link"><button className="btn btn-default">Add New Paddler</button></Link><br />
            <table className="table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Weight</th>
                        <th>Pref</th>
                        <th>Edit</th>
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