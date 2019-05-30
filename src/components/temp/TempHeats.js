import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import Autocomplete from '../Autocomplete'

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
    firebaseSeats } from '../../firebase'
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
    componentDidMount(){
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
                    'subs': [0]
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
        // this.props.history.push()
        const paddlers = this.state.paddlers
        this.props.history.push({
            pathname: `/tempHeat/${item.heatKey}/${item.heatName}`,
            // search: `${item.heatName}`,
            state: { heat: item, paddlers},
            // props: { boatID: this.state.boatID }
          })
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
    
    addToSubs = (sub, heatID, item, i) => {
        // check if heat has subs list


        // console.log("addToSubs", "sub.id", sub.id, "heatID", heatID, "item: ", item, i)
        console.log("subs", this.state.heats[i]['subs'][0], "item: ", item)
        
        let newData = [ ...this.state.heats ]
        if (this.state.heats[i]['subs'][0] === 0) { // if first sub, replace placeholder
            newData[i]['subs'][0] = sub.id
        } else {
            newData[i]['subs'].push(sub.id)
        }
        this.setState({
            heats: newData
        })
        firebaseDB.ref(`/heats/${heatID}/subs`).set(this.state.heats[i]['subs'])

        // add sub to state

        // check if sub is currently seated and remove
        const subState = [...this.state.heats]
        if(item.seating.includes(sub.id)){
            console.log("remove the paddler", item.seating.indexOf(sub.id))
            const newformData = [...this.state.heats ]
            // console.log("newformdata: ", newformData[i]['seating'])
            newformData[i]['seating'][item.seating.indexOf(sub.id)] = 0
            this.setState({
                heats: newformData
            })
            firebaseDB.ref(`/heats/${heatID}/seating`).set(this.state.heats[i]['seating'])
        }
    }
    removeSub = (sub, heatID, heatIndex) => {
        console.log("remove sub",sub, heatID, heatIndex)
        let newData = [ ...this.state.heats ]
        if(this.state.heats[heatIndex]['subs'].length === 1){
            newData[heatIndex]['subs'][0] = 0
        } else {
            let subIndex = newData[heatIndex]['subs'].indexOf(sub)
            newData[heatIndex]['subs'].splice(subIndex, 1)
        }
        this.setState({
            heats: newData
        })
        firebaseDB.ref(`/heats/${heatID}/subs`).set(this.state.heats[heatIndex]['subs'])

    }
    getSubName = (sub) => {
        const paddler = this.state.paddlers.filter((pad) => pad.id === sub)
        return (
            <div>
                {paddler.length ? paddler[0].firstName + " " + paddler[0].lastName : null}
            </div>
            )            
    }
    render(){ 
        let divGrid = {
            display: 'grid',
            gridTemplateColumns: `200px 50px 600px` ,          
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
        const subsList = () => this.state.heats.heatKey.subs.map((item, i) => {
            return(<li key={i}>{item}</li>)
        })
        const filteredSuggestions = () => this.state.suggestions.filter((paddler) => {
            return this.state.subs.indexOf(paddler) != -1
        })
        const heatList = this.state.heats.map((item, i) => {
            return (
                <tr key={i}>
                    <td onClick={() => this.redirect(item)}
                        style={{ cursor: 'pointer'}}
                        >{item.heatName}</td>
                    <td>
                        <Autocomplete
                            // suggestions={this.filteredSuggestions}
                            suggestions={this.state.suggestions.filter((paddler) => {
                                return this.state.heats[i]['subs'].indexOf(paddler.id) === -1})}
                            addToSubs={(sub) => this.addToSubs(sub, item.heatKey, item, i)}
                            />
                    </td>
                    <td>
                        <ul>
                            {
                                item.subs
                                .filter(sub => sub != 0)
                                .map((sub, index)=>{
                                    return(
                                        <li 
                                            key={index}
                                            style={{listStyleType: 'none'}}>
                                        <button 
                                            className="btn btn-primary"
                                            onClick={()=> {this.removeSub(sub, item.heatKey, i)}}>
                                            {this.getSubName(sub)}
                                        </button>
                                        </li>
                                    )

                                })
                            }
                            {/* {
                                item.subs.reduce(function(filtered, sub) {
                                    if (sub != 0){
                                        filtered.push(sub)
                                    }
                                    console.log("filtered: ", filtered)
                                    return filtered
                                }, [])
                            } */}

                    
                        </ul>

                    </td>
                    {/* <td onClick={() => this.delete(item)}
                        ><button className="btn btn-default">Delete</button></td> */}
                </tr>
            )
        })
        return(

            <div>

    {/* START PAGE-CONTAINER */}
    <div className="page-container ">    
      {/* START PAGE CONTENT WRAPPER */}
      <div className="page-content-wrapper ">
        {/* START PAGE CONTENT */}
        <div className="content ">
      
          {/* START CONTAINER FLUID */}
          <div className=" container-fluid   container-fixed-lg bg-white">
            {/* START card */}
            <div className="card card-transparent">
              <div className="card-header ">
                <div className="card-title">
                </div>
                {/* <div className="pull-right">
                  <div className="col-xs-12">
                    <input type="text" id="search-table" className="form-control pull-right" placeholder="Search"/>
                  </div>
                </div> */}
                <div className="clearfix"></div>
              </div>
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
                    <div 
                        // style={{border: '1px solid black'}}
                        >
                        <table className="table table-hover">
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
                    
                        <form 
                            className="form-inline"
                            onSubmit={this.submitForm}>
                            <div>
                                <input 
                                    className="form-control"
                                    type="text"
                                    onChange={(event)=>this.updateForm(event)}/>
                            </div>
                                <button
                                    className="btn btn-default">Add Heat</button>
                        </form>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>
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
            </div>
            {/* END card */}
          </div>
          {/* END CONTAINER FLUID */}
          {/* START CONTAINER FLUID */}
          {/* END CONTAINER FLUID */}
          {/* START CONTAINER FLUID */}
          {/* END CONTAINER FLUID */}
        </div>
        {/* END PAGE CONTENT */}
        {/* START COPYRIGHT */}
        {/* START CONTAINER FLUID */}
        {/* START CONTAINER FLUID */}
 
        {/* END COPYRIGHT */}
      </div>
      {/* END PAGE CONTENT WRAPPER */}
    
    {/* END PAGE CONTAINER */}


              </div>
       

        )        
    }       
}
export default HeatList