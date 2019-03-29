import React, { Component } from 'react';

class Seat extends Component {

  render() {
    // console.log("this.props.paddlers: ", this.props.paddler)
    const buttonStyleEmpty = {
      width: '150px', 
      height: '100px', 
      textAlign: 'left', 
      display: 'inline-flex',
      border: '1px black solid',
    }
    // empty seat
    if(this.props.item === 0 || (this.props.paddler.length === 0 && this.props.paddler[this.props.item] === undefined)){
      const seatNum = {}
      return (
        <div>
          <button
            style={buttonStyleEmpty}
            onClick={() => this.props.onClick(this.props.item, this.props.seat)}
            >
            <div style={seatNum}>
              {-this.props.seat} <br></br>
            </div>
            </button>
        </div>
        )
    } 
    
    // occupied seat
    else {
    const buttonStyleFilled = {
      width: '150px', 
      height: '100px', 
      textAlign: 'left', 
      display: 'inline-flex',
      border: '1px black solid',
      // backgroundImage: 'url({paddler.Image})',
      // backgroundRepeat: 'no-repeat'
    }
      const paddler = this.props.paddler.filter(obj => {
        return obj.id === this.props.item
      })[0]
      return (
        <div>
        <div 
          className={this.props.selected === paddler.id ? "selected" : ""}
        >
{/*
*/}
          <div 
            style={buttonStyleFilled}
            onClick={() => this.props.onClick(this.props.item, this.props.seat)}
            >{ isNaN(this.props.seat) ? "" : -this.props.seat }
            <img src={paddler.Image} width="75px" height="75px"/>
            <br />
            {paddler.firstName}
            <br />
            {paddler.Weight}
            <br />
            {paddler.Pref}
            <br />
       

          </div>

        </div>
        </div>
        )
        
        
    }
    
  }
  
}
    

export default Seat

