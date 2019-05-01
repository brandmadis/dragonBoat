import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { WithContext as ReactTags } from 'react-tag-input'
import { 
    firebaseBoats,
    firebaseLooper,
    firebaseLooper2, 
    firebaseLooper3, 
    firebaseDB, 
    firebaseHeats, 
    firebasePaddlers,
    firebaseSeats } from '../firebase'
// import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
// import { CardContent } from 'semantic-ui-react';
// import { createCipher } from 'crypto';
// const ReactTags = require('react-tag-autocomplete')


const KeyCodes = {
    comma: 188,
    enter: 13,
  };
   
  const delimiters = [KeyCodes.comma, KeyCodes.enter];


class HeatList extends Component {
    constructor(props){
        super(props)
        this.state = {
            heats: [],
            paddlers: [],
            refresh: false,
            heatInput: "",
            // tags: [
            //     { id: "Thailand", text: "Thailand" },
            //     { id: "India", text: "India" }
            //  ],
            // suggestions: [
            //     { id: 'USA', text: 'USA' },
            //     { id: 'Germany', text: 'Germany' },
            //     { id: 'Austria', text: 'Austria' },
            //     { id: 'Costa Rica', text: 'Costa Rica' },
            //     { id: 'Sri Lanka', text: 'Sri Lanka' },
            //     { id: 'Thailand', text: 'Thailand' }
            //  ]
            }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
    }    
    handleDelete(i) {
        const { tags } = this.state;
        this.setState({
         tags: tags.filter((tag, index) => index !== i),
        });
    }
 
    handleAddition(tag) {
        console.log("tag: ", tag)
        // const newformData = {
        //     ...this.state.formData
        // }
        // const newElement = {
        //     ...newformData['gender']
        // }
        // newElement.value = item
        // newformData['gender'] = newElement
        // this.setState({
        //     selectedGender: item,
        //     formData: newformData
        // })        


        // const heat = getElementBy

        this.setState(state => ({
             heats: [...state.heats, "test"] 
            }));
    }
 
    handleDrag(tag, currPos, newPos) {
        const tags = [...this.state.tags];
        const newTags = tags.slice();
 
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
 
        // re-render
        this.setState({ tags: newTags });
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
            firebaseDB.ref(`/boats/${this.props.match.params.id}/boatName`)
            .once('value')
            .then((snapshot) => {
                this.setState({
                    boatName: snapshot.val()
                })
            })
            firebaseHeats
            .once('value')
            .then((snapshot) => {
                const heats = firebaseLooper3(snapshot, this.props.match.params.id)
                this.setState({
                    heats
                })
            })            
            firebasePaddlers
            .orderByChild('Time')
            .once('value')
            .then((snapshot) => {
                const paddlers = firebaseLooper(snapshot)
                this.setState({
                    paddlers
                })
            })

                   
        }
    }    
    delete(id){
        console.log("delete hit", id.heatKey)
        let boatID = this.props.match.params.id
        let boatHeatKey = firebaseDB.ref(`/heats/${id.heatKey}/boatHeatKey`)
        .once('value')
        .then(function(snapshot) {
            let bhkey = (snapshot.val())
            // remove from boats
            firebaseDB.ref(`/boats/${boatID}/heats/${bhkey}`).remove()
            // remove from heats
            firebaseDB.ref(`heats/${id.heatKey}`).remove() 
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
                    'heatKey': heatKey,
                    'subs': []
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
        let divGrid = {
            display: 'grid',
            gridTemplateColumns: '500px 15px 500px' ,          
          }      
          
        const paddlerList = this.state.paddlers.map((item, i) => {
            return (
                <tr key={i}>
                    <td>{ item.firstName }</td>
                    <td>{ item.Time }</td>
                    <td>{ item.Attendance }</td>
                    <td><input type="checkbox"/></td>
                </tr>
            )
        })
        const heatList = this.state.heats.map((item, i) => {
            // const { tags, suggestions } = this.state;
            // console.log(item.tags, i)
            // if(item.tags.length != undefined){

            //     item.tags.map((tag) => {
            //         console.log(tag)
            //     })
            // }
            
            // const tags = [
            //     { id: "Thailand", text: "Thailand" },
            //     { id: "India", text: "India" }
            //  ]
            // const tags= this.state.heats.tags
            const suggestions = [
                { id: 'USA', text: 'USA' },
                { id: 'Germany', text: 'Germany' },
                { id: 'Austria', text: 'Austria' },
                { id: 'Costa Rica', text: 'Costa Rica' },
                { id: 'Sri Lanka', text: 'Sri Lanka' },
                { id: 'Thailand', text: 'Thailand' }
             ]            
            return (
                <tr key={i}
                    >
                    <td onClick={() => this.redirect(item)}
                        style={{ cursor: 'pointer'}}
                        >{item.heatName}</td>
                    <td>
                    <ReactTags 
                        id={i}
                        tags={item.tags}
                        suggestions={suggestions}
                        handleDelete={this.handleDelete}
                        handleAddition={() => this.handleAddition({id:'test', text:'test'})}

                        handleDrag={this.handleDrag}
                        delimiters={delimiters} />
                    </td>
                    {/* <td onClick={() => this.delete(item)}
                        ><button className="btn btn-default">Delete</button></td> */}
                </tr>
            )
        })
        return(
            <div>
                <h1><i>{ this.state.boatName }</i></h1>

                <div style={divGrid}>
                    <div style={{border: '1px solid black'}}>
                        <table className="table table-hove">
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Time</td>
                                    <td>Att</td>
                                    {this.state.heats.map((item)=>(
                                        <td>{ item.heatName }</td>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                { paddlerList }
                            </tbody>
                        </table>
                    </div>
                    <div></div>
                <div>
                    
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
                                    <th>Substitutions</th>
                                </tr>
                            </thead>
                    <tbody>
                        { heatList }
                    </tbody>
                </table>
        
                </div>
                </div>

        </div>
        )
    }
}

export default HeatList