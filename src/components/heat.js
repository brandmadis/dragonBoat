import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import Boat from './Heat/Boat'
import Bench from './Heat/Bench'
import Weights from './Heat/Weights'
import { firebaseDB, 
          firebasePaddlers, 
          firebaseBoats, 
          firebaseLooper, 
          firebaseLooper2 
} from '../firebase'

class Heat extends Component {
    constructor(props){
        super(props)
        this.state = {
            selected: null,
            paddlers: [],
            paddlerIds: [],
        //   paddlers: {
        //      1: { name: 'one', weight: 180 },
        //      2: { name: 'two', weight: 122 },
        //      3: { name: 'three', weight: 165 },
        //      4: { name: 'four', weight: 195 },
        //      5: { name: 'five', weight: 140 },
        //   },            
            // paddlers: [
            // { name: 'one', id: 1, weight: 180, pref: 'left' },
            // { name: 'two', id: 2, weight: 122, pref: 'right' },
            // { name: 'three', id: 3, weight: 165, pref: 'either' },
            // { name: 'four', id: 4, weight: 195, pref: 'left' },
            // { name: 'five', id: 5, weight: 140, pref: 'right' },
            // ],        
            // boat: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            boat: [],
            selSeat: -1,
            loaded: false
        }
    this.handleClick = this.handleClick.bind(this);
    this.removeFromBoat = this.removeFromBoat.bind(this);
        
    }
        parseIds(){
          const paddlerIds = []
          for (let paddler in this.state.paddlers){
            paddlerIds.push(this.state.paddlers[paddler].id)
          }
          this.setState({
            paddlerIds
          })
        }
    async componentDidMount(){
        if(this.state.paddlers.length < 1){
            firebasePaddlers.once('value')
            .then((snapshot) => {
                const paddlers = firebaseLooper(snapshot)
                this.setState({
                    paddlers
                })
            })
            .then(()=>{
                this.parseIds()
            })
        }
        if(this.state.boat.length < 1){
            let refUrl = "boat/" + this.props.match.params.id
            await firebaseDB.ref(refUrl).once('value')
            .then((snapshot) => {
              const boat = firebaseLooper2(snapshot)
              this.setState({
                boat
              })

            })
            await this.paddlerCheck()
        }
        else {
        }
        this.setState({loaded: true})
    }
    paddlerCheck(){
      for( var seat in this.state.boat){
        if(
          this.state.paddlerIds.includes(this.state.boat[seat]) ||
          this.state.boat[seat] === 0
          ){
        }
        else{
          var updates = {}
          updates[this.props.match.params.id + "/" + this.state.boat.indexOf(this.state.boat[seat]) ] = 0
          firebaseBoats.update(updates)                
          // this.setState({boat.seat: 0})
          const newBoat = this.state.boat.slice()
          newBoat[seat] = 0
          this.setState({boat: newBoat})
        }
      }      
    }
    
    handleClick(user, seat){
        const newState = Object.assign({}, this.state)
        let sel = this.state.selected
        console.log("---- sel: ", sel, "user: ", user, "seat: ", seat)
        
        if (sel === null && sel !== 0 ) { // first click, nothing previously selected
          if (user > 0 && seat === undefined){
            console.log("first bench click, sel: ", sel, user, seat)
          }
          else if (seat <= 0){
            console.log("first boat click, sel: ", sel, "user: ", user, "seat: ", seat)
            newState.selSeat = -seat
          }
          newState.selected = user; // set selected to paddler or seat
          console.log("sel was null, now ", sel, user, seat)
        }
        
        else {
          console.log("else hit, second click")
          if (seat === undefined){
            console.log("second click on bench")
            if (sel === user){
              console.log("sel == user, deselect")
              newState.selected= null
            } else if(this.state.boat.indexOf(sel) === -1){
              console.log("bench user to bench user")
              newState.selected = user
            } else {
              console.log("sel != user, reassign user")
              let firstClick = this.state.boat.indexOf(sel)
              
              newState.boat[firstClick] = user
              newState.selected= null
            }
          }
          else if (seat !== undefined){
            console.log("second click on boat")
            if (user === 0){
              console.log("user == 0 (empty boat seat was clicked)")
              console.log("sel: ", sel, "user: ", user, "seat: ", seat)
              if (this.state.boat.indexOf(sel) === -1){
                newState.boat[-seat] = sel
              } else {
                let firstClick = this.state.boat.indexOf(sel)
                newState.boat[firstClick] = 0
                newState.boat[-seat] = sel
              }
            } else {
              console.log("user != 0 (occupied seat was clicked), swap users")
              if (this.state.boat.indexOf(sel) === -1){ // first click was on bench (not in boat)
                console.log("First click was on bench, second on seat")
                let firstClick = this.state.boat.indexOf(user)
                newState.boat[firstClick] = sel
              } else if (sel === 0){
                console.log("empty seat to user swap")
                newState.boat[this.state.selSeat] = user
                newState.boat[-seat] = 0
              } else {
                console.log("First click was on boat, second on seat")
                console.log("sel: ", sel, "user: ", user, "seat: ", seat)
                let firstClick = this.state.boat.indexOf(sel)
                newState.boat[firstClick] = user
                newState.boat[-seat] = sel
              }
            }
            newState.selected= null
          }
          newState.selSeat = -1
      
        
    }
    console.log("-------------------------") // logic iteration separator
    this.setState(newState)
  }
    removeFromBoat(){
      if(this.state.selected !== null){
        console.log("remove from boat")
        const newState = Object.assign({}, this.state)
        let sel = this.state.selected   
        newState.boat[this.state.boat.indexOf(sel)] = 0
        newState.selected = null
        newState.selSeat = -1
        this.setState(newState)
      }
    }
    // save as object
    saveBoat(data, id, history){
      // console.log("saveBoat() hit", data)
      let refUrl = `boat/${id}`
      // console.log("refUrl: ", refUrl)
      firebaseDB.ref(refUrl).set(data)
        .then(() => {
          // console.log("boat saved", history)
          history.push(`/boats`);
          
          
        })
        .catch((e) => {
          console.log("error: ", e)
        })
    }
    render(){
        // console.log("this.state.boat",this.state.boat)

        // let heatContainer = {
        //   display: 'grid',
        //   gridTemplateColumns: '300px 10px 150px'  
        // }
        // console.log("paddlers: ", this.state.paddlers)
        // console.log("boat: ", this.state.boat)
        
        let paddlers = JSON.parse(JSON.stringify(this.state.paddlers));
        let boat = JSON.parse(JSON.stringify(this.state.boat));
        
        let bench = Object.values(paddlers)
                  .filter(function(item){
                    return boat.indexOf(item.id) === -1})
                  .map(function(obj){
                    return obj.id
                  })   
                  
        
        return (
            <div>
                  {this.state.loaded ? 
                <div className="row">
                  <div className="col-5">
                    <Weights 
                      boat={boat}
                      paddlers={paddlers}
                      />
                    <Boat 
                        {...this.state}
                        onClick={this.handleClick}
                        removeFromBoat={this.removeFromBoat}
                        saveBoat={this.saveBoat}
                        boatId={this.props.match.params.id}
                        history={this.props.history}
                        />
                  </div>
                  <div className="col-5">
                    <Bench
                        {...this.state}
                        onClick={this.handleClick}
                        bench={bench}
                        />
                  </div>
                </div>
                      : "" }
            </div>
                
        )
    }
}

export default Heat