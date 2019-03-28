import React, { Component } from 'react';
import Seat from './Seat';

class Boat extends Component {
  render() {
    var divStyle = {}
    var divContainer = {
      display: 'grid',
      gridTemplateColumns: '150px 150px'      
    }
    console.log("paddlers: ", this.props.paddlers)
    return(
      <div style={divStyle}>
        <button className="btn btn-default" onClick={() => this.props.removeFromBoat()}>Remove Paddler</button>
        <button 
          className="btn btn-success" 
          onClick={() => this.props.saveBoat(this.props.boat, this.props.boatId, this.props.history)}>
          Save Boat
        </button>
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