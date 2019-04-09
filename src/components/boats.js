import React, { Component } from 'react'
// import { Link, withRouter } from 'react-router-dom'
import { firebaseBoats, firebaseLooper } from '../firebase'

class Boats extends Component {
    constructor(props){
        super(props)
        this.state = {
            boats: [],
            value:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.createBoat2 = this.createBoat2.bind(this)
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
    createBoat2(event){
        event.preventDefault()
        console.log("create boat 2", this.state.value)
        var newRef = firebaseBoats.push()
        var key = newRef.key
        var data = {
            'name': this.state.value,
            'boat': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
        // let dataToSubmit = {}
        // for(let key in data){
        //     dataToSubmit[key] = data[key]
        //     console.log("data: ", data[key] )
        // }
        // console.log("datatosubmit: ", dataToSubmit)
        newRef.set(data)
        console.log("data: ", data)
        this.props.history.push(`/boats/${key}`);
        
    }
    handleChange(event){
        this.setState({value: event.target.value});
    }
    redirect(id){
        console.log("redirect", id)
        this.props.history.push(`/boats/${id}`);

    }
    render() {
        const boatList = this.state.boats.map((item, i) => {
            return (
                <tr key={i} onClick={() => this.redirect(item.id)}>
                    <td>{item.name} </td>
                    <td>{item.id} </td>
                    <td></td>
                </tr>
                )
        })
        
        return (
            <div>
                <form onSubmit={this.createBoat2}>
                    <input type='text' 
                        placeholder='new boat name'
                        value={this.state.value} 
                        onChange={this.handleChange}
                        />
                    <input type='submit' value="create new boat" />
                </form>
                <button 
                    className="btn btn-default" 
                    onClick={() => this.createBoat()}>Create new boat
                </button>
                <table className="table table-hover" id="boats">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>ID</th>
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