import React, { Component } from 'react';
import Seat from './Seat';
import SeatRemove from './SeatRemove'
import WeightsBench from './WeightsBench'
import AddToSubs from './AddToSubs'

class Bench extends Component {
  componentDidMount(){
    console.log("Bench mounted")
  }
  componentDidUpdate(){
    console.log("Bench updated")
  }
  addToSubsBench = () => {
    // console.log("addToSubsBench", this.props.bench)
    const newBenchData = [
      ...this.props.bench
    ]
    newBenchData.slice()
    let index = newBenchData.indexOf(this.props.selected)
    newBenchData.splice(index, 1)
    this.setState({
      bench: newBenchData
    })
    this.props.addToSubs()
  }
  render() {
    
    var seatContainer = {
      display: 'grid',
      gridTemplateColumns: '60px 60px' ,
    }    
    return (
      <div>
        <SeatRemove
          removeFromBoat={this.props.removeFromBoat} />
        <AddToSubs
          addToSubs={this.props.addToSubs} 
          // addToSubs={this.addToSubsBench}
          />
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