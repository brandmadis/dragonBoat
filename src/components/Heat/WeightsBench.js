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
        if(paddler[0].gender === "female"){femaleCount++}
      }
    }
    
    return (
      <div>
      <h5><i>{front > rear ?
         <FontAwesomeIcon icon="angle-up"/>
          :
          <FontAwesomeIcon icon="angle-down"/>
           } 
<CountUp
  start={this.props.prevFrontRear}
  end={front > rear ? front-rear : rear-front} 
  duration={.5}
  decimals={0}
  decimal="."
/><br></br>
      <span>    </span>
        {right > left ? 
          <FontAwesomeIcon icon="angle-right"/> 
          :
          <FontAwesomeIcon icon="angle-left"/>
          }
<CountUp
  start={this.props.prevFrontRear}
  end={right > left ? right-left : left-right} 
  duration={.5}
  decimals={0}
  decimal="."
/>   
<br></br>       
</i>
          <FontAwesomeIcon icon="female" />: {femaleCount}
    </h5>
      </div>
      )
  }  
}



export default Weights