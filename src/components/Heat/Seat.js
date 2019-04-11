import React, { Component } from 'react';
import iconLeft from '../../assets/icon-left.png'
import iconRight from '../../assets/icon-right.png'
import { config } from '../../firebase'

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
      // position: 'absolute',
      
      
    }
    const divStyle = {
      // position: 'absolute',
      // display: 'inline',       
    }    
    // empty seat
    if(this.props.item === 0 || (this.props.paddler.length === 0 && this.props.paddler[this.props.item] === undefined)){
      const seatNum = { textAlign: 'right'}
      return (
        <div style={divStyle}>
          <div
            className={this.props.selSeat === this.props.emptySeat ? "selected" : ""}
          
            style={buttonStyleEmpty}
            onClick={() => this.props.onClick(this.props.item, this.props.seat)}
            >
            <div style={seatNum}>
            <h1><i>
              {-this.props.seat} </i>
            </h1>
            </div>
            </div>
        </div>
        )
    } 
    
    // occupied seat
    else {
    // const buttonStyleFilled = {
    //   width: '60px', 
    //   height: '60px', 
    //   textAlign: 'left', 
    //   // display: 'inline-flex',
    //   borderRadius: '15px',
    //   cursor: 'pointer',
    //   position: 'absolute',
      // display: 'inline',      
      
      // backgroundImage: 'url({paddler.Image})',
      // backgroundRepeat: 'no-repeat'
    // }
    const imgStyleLeft = {
      position: 'absolute',
      zIndex: '101',
      bottom: '0px',
      left: '0px',
      cursor: 'pointer'
    }
    const imgStyleLeftSelected = {
      position: 'absolute',
      zIndex: '103',
      top: '43px',
      right: '48px',
      cursor: 'pointer'      
    }
    const imgStyleRight = {
      position: 'absolute',
      zIndex: '101',
      bottom: '0px',
      right: '0px',
      cursor: 'pointer'
    }   
    const imgStyleRightSelected = {
      position: 'absolute',
      zIndex: '103',
      top: '43px',
      left: '43px',
      cursor: 'pointer'      
    }
    const divStyle = {
      // border: '1px solid black',
      position: 'relative',
      
      // display: 'inline',       
    }
    const userImage = {
      position: 'relative',
      borderRadius: '15px',
      cursor: 'pointer',      
    }
    const selected = {
      border: '2px solid black',
      borderRadius: '15px',
      boxShadow: '10px 10px 5px grey',
      width: '85px',
      height: '85px',
      position: 'absolute',
      zIndex: '102',
      cursor: 'pointer',   
      top: '-15px',
      left: '-15px',
      backgroundColor: 'lightgray'
      
    }



      const paddler = this.props.paddler.filter(obj => {
        return obj.id === this.props.item
      })[0]
            // { isNaN(this.props.seat) ? "" : -this.props.seat }
      const selectedPaddler = this.props.selected
      
      const paddlerImage = (
        <div>
            <img 
              style={this.props.selected === paddler.id ? selected : userImage}
              src={`https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/images%2F${paddler.image}?alt=media`} 
              alt="" width="60px" height="60px"
              />

        </div>
        )
      const noImageStyle = {
       border: '1px solid black' 
      }
      const paddlerNoImage = (
        <div style={this.props.selected === paddler.id ? selected : buttonStyleEmpty}>
          {paddler.firstName} {paddler.lastName}
        </div>
        
        )
      return (
        <div id="1" style={divStyle}>
          <div id="2" style={divStyle}
              onClick={() => this.props.onClick(this.props.item, this.props.seat)}
          >
{paddler.image.length > 0 ?
paddlerImage
: 
paddlerNoImage}
        
        {paddler.Pref === 'either'? '' : 
                    paddler.Pref === 'left' ?   
            <img
              style={this.props.selected === paddler.id ? imgStyleLeftSelected : imgStyleLeft}
              src={iconLeft}
              alt=""
              width="25px"
              height="25px"
            />
            : 
            <img
              style={this.props.selected === paddler.id ? imgStyleRightSelected : imgStyleRight}
              src={iconRight}
              alt=""
              width="25px"
              height="25px"
            /> 
        }

        </div>
        </div>
        
        )
        
        
    }
    
  }
  
}
    

export default Seat

