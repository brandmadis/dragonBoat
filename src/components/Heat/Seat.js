import React, { Component } from 'react';

class Seat extends Component {
  render() {
    // console.log("this.props.paddlers: ", this.props.paddler)
    const buttonStyleEmpty = {
      width: '75px', 
      height: '75px', 
      textAlign: 'left', 
      display: 'inline-flex',
      // border: '1px black solid',
      borderRadius: '15px',
      cursor: 'pointer',
      backgroundColor: 'lightgray',
      
    }
    // empty seat
    if(this.props.item === 0 || (this.props.paddler.length === 0 && this.props.paddler[this.props.item] === undefined)){
      const seatNum = {}
      return (
        <div>
          <div
            style={buttonStyleEmpty}
            onClick={() => this.props.onClick(this.props.item, this.props.seat)}
            >
            <div style={seatNum}>
              {-this.props.seat} <br></br>
            </div>
            </div>
        </div>
        )
    } 
    
    // occupied seat
    else {
    const buttonStyleFilled = {
      width: '75px', 
      height: '75px', 
      textAlign: 'left', 
      display: 'inline-flex',
      borderRadius: '15px',
      cursor: 'pointer'
      
      
      // backgroundImage: 'url({paddler.Image})',
      // backgroundRepeat: 'no-repeat'
    }
    
      const paddler = this.props.paddler.filter(obj => {
        return obj.id === this.props.item
      })[0]
            // { isNaN(this.props.seat) ? "" : -this.props.seat }
      return (
        <div>
            <img 
              className={this.props.selected === paddler.id ? "selected" : ""}
              style={buttonStyleFilled}
              src={`https://firebasestorage.googleapis.com/v0/b/dragon-d50ad.appspot.com/o/images%2F${paddler.image}?alt=media`} alt="" width="75px" height="75px"
              onClick={() => this.props.onClick(this.props.item, this.props.seat)}
              />
        </div>
        )
        
        
    }
    
  }
  
}
    

export default Seat

