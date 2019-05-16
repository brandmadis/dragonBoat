import React, { Component } from 'react';
import Seat from './Seat';
import SeatRemove from './SeatRemove'
import WeightsBench from './WeightsBench'
import AddToSubs from './AddToSubs'

class Bench extends Component {
  render() {
    var seatContainer = {
      display: 'grid',
      gridTemplateColumns: '60px 60px' ,
    }    
    console.log("bench paddlers: ", this.props.bench)
    // const dataContainer = {
    //   display: 'grid',
    //   gridTemplateColumns: '60px 60px'
    // }
    return (
      <div>
        <SeatRemove
          removeFromBoat={this.props.removeFromBoat} />
        <AddToSubs
          addToSubs={this.props.addToSubs} />
        <WeightsBench 
          boat={this.props.boat}
          paddlers={this.props.paddlers}
          prevFrontRear={this.props.prevFrontRear}
        />
      <div style={seatContainer}>

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