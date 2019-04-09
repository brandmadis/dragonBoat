import React, { Component } from 'react';
import iconLeft from '../../assets/icon-left.png'
import iconRight from '../../assets/icon-right.png'

class Seat extends Component {
  render() {
    // console.log("this.props.paddlers: ", this.props.paddler)
    const buttonStyleEmpty = {
      width: '60px', 
      height: '60px', 
      textAlign: 'left', 
      display: 'inline-flex',
      // border: '1px black solid',
      borderRadius: '15px',
      cursor: 'pointer',
      backgroundColor: 'lightgray',
      
    }
    // empty seat
    if(this.props.item === 0 || (this.props.paddler.length === 0 && this.props.paddler[this.props.item] === undefined)){
      const seatNum = { textAlign: 'right'}
      console.log(this.props.selSeat, this.props.emptySeat)
      return (
        <div>
          <div
            className={this.props.selSeat === this.props.emptySeat ? "selected" : ""}
          
            style={buttonStyleEmpty}
            onClick={() => this.props.onClick(this.props.item, this.props.seat)}
            >
            <div style={seatNum}>
            <h1>
              {-this.props.seat} 
            </h1>
            </div>
            </div>
        </div>
        )
    } 
    
    // occupied seat
    else {
    const buttonStyleFilled = {
      width: '60px', 
      height: '60px', 
      textAlign: 'left', 
      // display: 'inline-flex',
      borderRadius: '15px',
      cursor: 'pointer',
      position: 'relative',
      display: 'inline',      
      
      // backgroundImage: 'url({paddler.Image})',
      // backgroundRepeat: 'no-repeat'
    }
    const imgStyleLeft = {
      position: 'absolute',
      top: 25,
      left: 0
    }
    const imgStyleRight = {
      position: 'absolute',
      top: 0,
      right: 0
    }    
    const divStyle = {
      position: 'relative',
      display: 'inline',       
    }
    const userImage = {
      borderRadius: '15px',
      cursor: 'pointer',      
    }
      const paddler = this.props.paddler.filter(obj => {
        return obj.id === this.props.item
      })[0]
            // { isNaN(this.props.seat) ? "" : -this.props.seat }
      return (
        <div>
          <div style={divStyle}>
            <img 
              style={userImage}
              className={this.props.selected === paddler.id ? "selected" : ""}
              src={`https://firebasestorage.googleapis.com/v0/b/dragon-d50ad.appspot.com/o/images%2F${paddler.image}?alt=media`} 
              alt="" width="60px" height="60px"
              onClick={() => this.props.onClick(this.props.item, this.props.seat)}
              />
          {/*
            */}
{paddler.Pref === 'either'? '' : 
                    paddler.Pref === 'left' ?   
          <div>
            <img
              style={imgStyleLeft}
              src={iconLeft}
              alt=""
              width="25px"
              height="25px"
            />
          </div>
            : 
          <div>
            <img
              style={imgStyleRight}
              src={iconRight}
              alt=""
              width="25px"
              height="25px"
            /> 
          </div>
}
        </div>
        </div>
        
        )
        
        
    }
    
  }
  
}
    

export default Seat

