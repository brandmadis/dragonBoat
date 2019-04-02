import React, { Component } from 'react';

class Weights extends Component {
  render() {
    let left = 0
    let right = 0
    let front = 0
    let rear = 0
    for (let i = 0; i < this.props.boat.length; i++){
      let seat = this.props.boat[i]
      let paddler = this.props.paddlers.filter(pad => { return pad.id === seat})
      // console.log("seat paddler: ", paddler)
      if(this.props.boat[i] !== 0){
        let weight = parseInt(paddler[0].Weight)
        // console.log("weight type: ", typeof weight)
        if(i%2 === 0){left += weight} 
        else {right += weight} 
        if(i<6){front += weight}
        else if(i>13){rear += weight}
      }
    }
    let divStyle = {border: '1px black solid', width: '160px'}
    let alignRight = {textAlign: 'right'}
    let alignLeft = {textAlign: 'left'}
    let alignCenter = {textAlign: 'center'}
    return (
      <div>
      <p>front: {front}  rear: {rear} </p>
        <div style={divStyle}>
          <div style={right === left 
            ? alignCenter : 
            right > left ? alignRight : alignLeft}>
            {right === left ? "0" : right > left ? right-left : left-right }
          </div>
        </div>
      </div>
      )
  }  
}



export default Weights