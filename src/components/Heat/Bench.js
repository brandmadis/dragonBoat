import React, { Component } from 'react';
import Seat from './Seat';
import SeatRemove from './SeatRemove'

class Bench extends Component {
  render() {
    var seat = {
      marginBottom: '4px',
    }    
    var divContainer = {
      display: 'grid',
      gridTemplateColumns: '60px 60px' ,
    }    
    return (
      <div style={seat}>
        <SeatRemove
          removeFromBoat={this.props.removeFromBoat}
        />
                <div style={divContainer}>

      {this.props.bench.map((item, index) => (
            <Seat 
              key={item}
              item={item}
              onClick={this.props.onClick}
              selected={this.props.selected}
              paddler={this.props.paddlers}
              />
          ))}
      </div>
      </div>
      )}}

export default Bench