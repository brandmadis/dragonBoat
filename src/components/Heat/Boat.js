import React, { Component } from 'react';
import Seat from './Seat';
// import { Button } from 'semantic-ui-react'

class Boat extends Component {
  
  render() {
    var divStyle = {}
    var divContainer = {
      display: 'grid',
      gridTemplateColumns: '75px 75px'      
    }
    return(
      <div style={divStyle}>
        <div style={divContainer}>
        {this.props.boat.map((item, index) => (
            <div key={index}>
              <Seat 
                key={index}
                item={item}
                seat={-index}
                emptySeat={index}
                paddler={this.props.paddlers}
                onClick={this.props.onClick}
                selected={this.props.selected}
                selSeat={this.props.selSeat}
                />
            </div>        
          ))}
          
         
          </div>
      </div>
      )}}

export default Boat