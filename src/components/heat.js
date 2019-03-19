import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Boat from './Heat/Boat'
import Bench from './Heat/Bench'

class Heat extends Component {
    constructor(props){
        super(props)
        this.state = {
            selected: null,
        //   paddlers: {
        //      1: { name: 'one', weight: 180 },
        //      2: { name: 'two', weight: 122 },
        //      3: { name: 'three', weight: 165 },
        //      4: { name: 'four', weight: 195 },
        //      5: { name: 'five', weight: 140 },
        //   },            
            paddlers: [
             { name: 'one', id: 1, weight: 180 },
             { name: 'two', id: 2, weight: 122 },
             { name: 'three', id: 3, weight: 165 },
             { name: 'four', id: 4, weight: 195 },
             { name: 'five', id: 5, weight: 140 },
            ],        
            boat: [2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            selSeat: -1            
        }
    this.handleClick = this.handleClick.bind(this);
    this.removeFromBoat = this.removeFromBoat.bind(this);
        
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
    render(){
        let heatContainer = {
          display: 'grid',
          gridTemplateColumns: '300px 10px 150px'  
        }
        console.log("paddlers: ", this.state.paddlers)
        console.log("boat: ", this.state.boat)
        
        let paddlers = JSON.parse(JSON.stringify(this.state.paddlers));
        let boat = JSON.parse(JSON.stringify(this.state.boat));
        
        
        let bench = Object.values(paddlers)
                  .filter(function(item){
                    return boat.indexOf(item.id) === -1})
                  .map(function(obj){
                    return obj.id
                  })   
                  
        // let bench = Object.values(this.state.paddlers)
        //           // .filter(function(item){
        //           //   return this.state.boat.indexOf(item.id) === -1})
        //           .map(function(obj){
        //             return obj.id
        //           })   
        
        return (
            <div>
                <div style={heatContainer}>
                    <Boat 
                        {...this.state}
                        onClick={this.handleClick}
                        removeFromBoat={this.removeFromBoat}
                        />
                    <div></div>
                    <Bench
                        {...this.state}
                        onClick={this.handleClick}
                        bench={bench}
                        />
                </div>
            </div>
                
        )
    }
}

export default Heat