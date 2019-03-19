import React, { Component } from 'react';

class Seat extends Component {
    // componentDidMount() {
    //   console.log("componentDidMount")
    // }

  render() {
    const buttonStyle = {width: '150px', height: '100px'}
    if(this.props.item === 0 || (this.props.paddler.length === 0 && this.props.paddler[this.props.item] === undefined)){
      return (
        <div>
          <button
            style={buttonStyle}
            onClick={() => this.props.onClick(this.props.item, this.props.seat)}
            >
            Empty<br />
            {this.props.seat}
            </button>
        </div>
        )
    } 
    
    
    else {
      const paddler = this.props.paddler.filter(obj => {
        return obj.id === this.props.item
      })[0]
      return (
        <div>
        <div >
          <button 
          className={this.props.selected === paddler.id ? "selected" : ""}
            style={buttonStyle}
            onClick={() => this.props.onClick(this.props.item, this.props.seat)}
            >
            Name: {paddler.name}<br />
            id: {paddler.id}<br />
            weight: {paddler.weight}<br />
            seat: {this.props.seat}

          </button>

        </div>
{/*
*/}
        </div>
        )
        
        
    }
    
  }
  
}
    

export default Seat