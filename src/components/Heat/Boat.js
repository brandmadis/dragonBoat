import React, { Component } from 'react';
import Seat from './Seat';
import { Button } from 'semantic-ui-react'

class Boat extends Component {
  
  render() {
    var divStyle = {}
    var divContainer = {
      display: 'grid',
      gridTemplateColumns: '75px 75px'      
    }
    // console.log("paddlers: ", this.props.paddlers)
        // <button 
        //   className="btn btn-success" 
        //   onClick={() => this.props.saveBoat(this.props.boat, this.props.boatId, this.props.history)}>
        //   Save Boat
        // </button>
        // <Button 
        //   secondary  
        //   onClick={() => this.props.removeFromBoat()}>
        //   Remove Paddler
        // </Button>
    return(
      <div style={divStyle}>
        <div style={divContainer}>
        {this.props.boat.map((item, index) => (
            <div key={index}>
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