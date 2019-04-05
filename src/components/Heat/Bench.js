import React, { Component } from 'react';
import Seat from './Seat';
import SeatRemove from './SeatRemove'

class Bench extends Component {
  render() {
    return (
      <div>
        <SeatRemove
          removeFromBoat={this.props.removeFromBoat}
        />
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
      )}}

export default Bench