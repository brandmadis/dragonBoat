import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import Autocomplete from './Autocomplete'

import { WithContext as ReactTags } from 'react-tag-input'
import { 
    firebaseBoats,
    firebaseLooper,
    firebaseLooper2, 
    firebaseLooper3, 
    firebaseLooper4,
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
            checked: "string",
            suggestions: [],
            subs: [],
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
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.addToSubs = this.addToSubs.bind(this)
    }    
    handleDelete(i) {
        const { tags } = this.state;
        this.setState({
         tags: tags.filter((tag, index) => index !== i),
        });
    }
 
    handleAddition(tag) {
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
    componentWillMount(){
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
                let suggestions = []
                paddlers.map((paddler) => {
                    let fullName = paddler.firstName + " " + paddler.lastName
                    suggestions.push({id: paddler.id, fullName: fullName})                    
                })
                this.setState({
                    paddlers, suggestions
                })
            })
            
            // firebasePaddlers
            // .once('value')
            // .then((snapshot) => {
            //     const suggestions = firebaseLooper4(snapshot)
            //     this.setState({
            //         suggestions
            //     })
            // })

            
            
        }
    }    
    
    // componentDidUpdate(){
    //     console.log("paddlers mounted: ", this.state.paddlers)
    //     let suggestions = []
    //     this.state.paddlers.map((paddler) => {
    //         let fullName = paddler.firstName + " " + paddler.lastName
    //         suggestions.push({id: paddler.id, fullName: fullName})
    //      })
    //      console.log("suggestions:", suggestions)
    //     this.setState({ suggestions })
    // }

    delete(id){
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
                    'subs': ""
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
        this.props.history.push(`/heat/${item.heatKey}`)
    } 
    handleCheckbox = (paddler, heat, index) => {
        console.log("handleCheckbox", paddler, heat, index)
        const newformData = [
            ...this.state.heats
        ]
        if(newformData[index]['subs'].includes(paddler.id)){
            let padIndex = newformData[index]['subs'].indexOf(paddler.id)
            newformData[index]['subs'].splice(padIndex, 1)
            console.log("remove", padIndex)
        } else {
            console.log("add")
            newformData[index]['subs'].push(paddler.id)

        }   
        console.log("newformData: ", newformData)
        console.log('this.state.heats', this.state.heats)
        this.setState({
            heats: newformData
        })
    }
    
    addToSubs = (sub, heatID, i) => {
        console.log("addToSubs", sub.id, heatID, i)
        const newData = [ ...this.state.heats ]
        // const newData = this.state.heats[i]['subs'].slice()
        newData.push(sub)
        // this.setState({
        //     heats: newData
        // })
        // let data = [sub]
        // newData[i]['subs'].push("data")
        // newData['-LdoW0dib-oXYUgw3RxV'].subs.push(sub)
        // this.setState({
        //     heats: [...this.state.heats, sub.id]
        // })
        // newData[i].subs.push(sub.id)
        // this.setState({
        //     heats: [...this.state.heats[i]['subs'], sub]
        // })
        let ref = firebaseDB.ref(`/heats/${heatID}/subs`)
        ref.push(sub)
    }
    removeSub = (sub, heatID) => {
        console.log("revove sub",sub, heatID)
    }
    // addToSubsTest = (sub, heatID, i) => {
    //     console.log("addToSubs--- TEST", sub, heatID, i)
    //     this.setState({ subs: [...this.state.subs, sub] })
    // }

    render(){
        let divGrid = {
            display: 'grid',
            gridTemplateColumns: `200px 15px 600px` ,          
          }      
        const paddlerList = this.state.paddlers.map((paddler, i) => {
            return (
                <tr key={i}>
                    <td>{ paddler.firstName }</td>
                    <td>{ paddler.Time }</td>
                    <td>{ paddler.Attendance }</td>
                </tr>
            )
        })
        const subsList = (heatKey) => this.state.heats.heatKey.subs.map((item, i) => {
            return(
                    <li key={i}>
                        {item}
                    </li>
                )
        })
        const heatList = this.state.heats.map((item, i) => {
            return (
                <tr key={i}>
                    <td onClick={() => this.redirect(item)}
                        style={{ cursor: 'pointer'}}
                        >{item.heatName}</td>
                    <td>
                        <Autocomplete
                            suggestions={this.state.suggestions}
                            addToSubs={(sub) => this.addToSubs(sub, item.heatKey, i)}
                            />
                    </td>
                    <td>
                        <ul>
                            {/* {item.subs.products.map((sub, i) =>{ */}
                            { Object.values(item.subs).map((sub, i) => {
                                return(
                                    <li key={i}><button
                                        // onClick={()=>this.removeSub(sub, item.heatKey)}
                                    >

                                    {sub.fullName}
                                    </button></li>

                                )
                            })

                            }
                        </ul>

                    </td>
                    {/* <td onClick={() => this.delete(item)}
                        ><button className="btn btn-default">Delete</button></td> */}
                </tr>
            )
        })
        return(
            <div>
                <h1><i>{ this.state.boatName }</i></h1>
    {/* 
<div style={{ border: '1px solid black' }}>
    <p>Autocomplete</p>
    <Autocomplete
        suggestions={this.state.suggestions}
        paddlers={this.state.paddlers}
        addToSubs={(sub) => this.addToSubsTest(sub)}
        />
        <p>Sublist</p>
        <ul>
            { subsList }
        </ul> 
</div>
        */}
                <div style={divGrid}>
                    <div style={{border: '1px solid black'}}>
                        <table className="table table-hove">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Att</th>
                                    {/* 
                                    {this.state.heats.map((item, i)=>(
                                        <th 
                                            key={i} 
                                            >
                                            <button
                                                style={{ cursor: 'pointer'}}
                                                onClick={()=>this.redirect(item)}
                                            >
                                            { item.heatName }
                                                
                                            </button>
                                        
                                        
                                        </th>
                                    ))}
                                     */}
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
                                        <th>Select Subs</th>
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