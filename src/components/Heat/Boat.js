import React, { Component } from 'react';
import Seat from './Seat';

class Boat extends Component {
  render() {
    var divStyle = {}
    var divContainer = {
      display: 'grid',
      gridTemplateColumns: '150px 150px'      
    }
    return(
      <div style={divStyle}>
        <p>Boat
        <button onClick={() => this.props.removeFromBoat()}>Remove Paddler</button>
        <button onClick={() => this.props.saveBoat(this.props.boat)}>Save Boat</button>
        </p>
        <div style={divContainer}>
        {this.props.boat.map((item, index) => (
            <div>
            {/* { console.log("index: ", index, item) } */}
              <Seat 
                key={index}
                item={item}
                seat={-index}
                paddler={this.props.paddlers}
                onClick={this.props.onClick}
                selected={this.props.selected}
                />
            </div>        
          ))}
          
         
          </div>
      </div>
      )}}

export default Boat