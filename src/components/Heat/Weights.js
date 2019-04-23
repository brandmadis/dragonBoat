import React, { Component } from 'react';
import CountUp from 'react-countup';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'

class Weights extends Component {
  // constructor(props){
  //   super(props)
  //     this.state = {

        
  //     }
    
  // }
  render() {
    let left = 0
    let right = 0
    let front = 0
    let rear = 0
    let femaleCount = 0
    for (let i = 0; i < this.props.boat.length; i++){
      let seat = this.props.boat[i]
      console.log("seat: ",seat)
      let paddler = this.props.paddlers.filter(pad => { return pad.id === seat})
      if(this.props.boat[i] !== 0){
        let weight = parseInt(paddler[0].Weight)
        if(i%2 === 0){left += weight} 
        else {right += weight} 
        if(i<6){front += weight}
        else if(i>13){rear += weight}
        console.log("paddler[0].gender: ", paddler[0].gender)
        if(paddler[0].gender === "1"){femaleCount++}
      }
    }
    
    return (
      <div>
      <h5><i>{front > rear ? 'Front: ' : 'Rear: '} 
<CountUp
  start={this.props.prevFrontRear}
  end={front > rear ? front-rear : rear-front} 
  duration={.5}
  decimals={0}
  decimal="."
/>
      <span>    </span>
        {right > left ? `Right: ` :`Left: ` }
<CountUp
  start={this.props.prevFrontRear}
  end={right > left ? right-left : left-right} 
  duration={.5}
  decimals={0}
  decimal="."
/>          
</i></h5>
    <h5>
      <FontAwesomeIcon icon="female" />: {femaleCount}
    </h5>
      </div>
      )
  }  
}



export default Weights