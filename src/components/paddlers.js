import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { firebase, firebasePaddlers, firebaseLooper } from '../firebase'


  
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
    render(){
        console.log("request: ", this.state.paddlers)
    const padList = this.state.paddlers.map((item, i) => {
        console.log("item: ", item, "i: ", i)
        return (
            <tr>
                <td>{item.firstName} {item.LastName}</td>
                <td>{item.Weight}</td>
                <td>{item.Pref}</td>
            </tr>        
            )    
    })
    return (
        <div>
            Paddlers<br/>
            <Link to='/paddlerAdd' activeStyle={{color:'blue'}} className="nav-link"><button>Add New Paddler</button></Link><br />
            <Link to="/paddlers/1">Paddler 1</Link><br/>
            <Link to="/paddlers/2">Paddler 2</Link><br/>
            <Link to="/paddlers/3">Paddler 3</Link><br/>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Weight</th>
                        <th>Pref</th>
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