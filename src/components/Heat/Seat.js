import React, { Component } from 'react';

class Seat extends Component {

  render() {
    const buttonStyle = {
      width: '150px', 
      height: '100px', 
      textAlign: 'left', 
      display: 'inline-flex',
      border: '1px black solid'
    }
    if(this.props.item === 0 || (this.props.paddler.length === 0 && this.props.paddler[this.props.item] === undefined)){
      const seatNum = {}
      return (
        <div>
          <button
            style={buttonStyle}
            onClick={() => this.props.onClick(this.props.item, this.props.seat)}
            >
            <div style={seatNum}>
              {-this.props.seat}
            </div>
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
          <div 
          className={this.props.selected === paddler.id ? "selected" : ""}
            style={buttonStyle}
            onClick={() => this.props.onClick(this.props.item, this.props.seat)}
            >
            { isNaN(this.props.seat) ? "" : -this.props.seat }<br />
            {paddler.name}<br />
            {paddler.weight} lbs<br />
            {paddler.pref}
          </div>

        </div>
        </div>
        )
        
        
    }
    
  }
  
}
    

export default Seat