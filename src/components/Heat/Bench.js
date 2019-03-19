import React, { Component } from 'react';
import Seat from './Seat';

class Bench extends Component {
  render() {
    return (
      <div>
      <p>Bench</p>
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