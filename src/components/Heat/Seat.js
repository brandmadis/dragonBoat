import React, { Component } from 'react';
import iconLeft from '../../assets/icon-left.png'
import iconRight from '../../assets/icon-right.png'
import { config } from '../../firebase'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import Enum from '../../widgets/enums';


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
    const emptySeatStyle = {
      height: '60px'
      // position: 'absolute',
      // display: 'inline',       
    }    
    const rowNum = (-this.props.seat + 1) / 2
    const seatNum = { right: '80px', position: 'relative'}
    const seatNumImage = {right: '80px', position: 'relative', bottom: '60px'}
    const seatNum10 = {right: '92px', position: 'relative', bottom: '60px'}



    // empty seat
    if(this.props.item === 0 || (this.props.paddler.length === 0 && this.props.paddler[this.props.item] === undefined)){
      return (
        <div style={emptySeatStyle}>
          <div
            className={this.props.selSeat === this.props.emptySeat ? "selected" : ""}
            id={`empty_seat_${this.props.seat}`}
            style={buttonStyleEmpty}
            onClick={() => this.props.onClick(this.props.item, this.props.seat)}
            >
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
      width: '60px',
      height: '60px',      
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
      zIndex: '111',
      cursor: 'pointer',   
      top: '-15px',
      left: '-15px',
      backgroundColor: 'lightgray',
      display: 'inline',

      
    }


    const arrowLeft = {
      // right: '78px',
      display: 'inline',
      zIndex: '110',
      position: 'relative',
      color: 'white',
      fontSize: 'xx-large',
      bottom: '26px',
    }
    const arrowLeftBack = {
      right: '18px',
      display: 'inline',
      zIndex: '109',
      position: 'relative',
      color: 'darkgrey',
      fontSize: 'xx-large',
      bottom: '26px',
    }          
    const arrowDoubleLeft = {
      // right: '78px',
      display: 'inline',
      zIndex: '110',
      position: 'relative',
      color: 'white',
      fontSize: 'xx-large',
      bottom: '26px',
    }
    const arrowDoubleLeftBack = {
      right: '30px',
      display: 'inline',
      zIndex: '109',
      position: 'relative',
      color: 'darkgrey',
      fontSize: 'xx-large',
      bottom: '26px',
    }          
    const arrowRight = {
      left: '44px',
      display: 'inline',
      zIndex: '110',
      position: 'relative',
      color: 'white',
      fontSize: 'xx-large',
      bottom: '27px'
    }    
    const arrowRightBack = {
      left: '30px',
      bottom: '26px',
      display: 'inline',
      zIndex: '109',
      position: 'relative',
      color: 'darkgrey',
      fontSize: 'xx-large',
    }    
    const arrowDoubleRight = {
      left: '32px',
      display: 'inline',
      zIndex: '110',
      position: 'relative',
      color: 'white',
      fontSize: 'xx-large',
      bottom: '26px'
    }    
    const arrowDoubleRightBack = {
      left: '7px',
      bottom: '26px',
      display: 'inline',
      zIndex: '109',
      position: 'relative',
      color: 'darkgrey',
      fontSize: 'xx-large',
    }    
    const iconParentStyle = {
        display: 'inline',
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
      const noNameStyle = { marginLeft: '75px' }
      const paddlerNoImage = (
        <div style={this.props.selected === paddler.id ? selected : buttonStyleEmpty}>
            <div className="noSelect">
              <i>{paddler.firstName} {paddler.lastName}</i>
            </div>
        </div>
        
        )
        
        
        
      return (
        <div id="1" style={divStyle}>
          <div id="2" style={divStyle}
              onClick={() => this.props.onClick(this.props.item, this.props.seat)}
          > 
{paddler.image !== "" 
?
paddlerImage
: 
paddlerNoImage
}
   <div>
   {paddler.Pref === Enum.PADDLER_PREF.LEFT ? 
      <div style={iconParentStyle}>
          <div style={arrowLeft}>
          <FontAwesomeIcon icon="angle-left" />  
          </div> 
          <div style={arrowLeftBack}>
          <FontAwesomeIcon icon="angle-left" />  
          </div> 
      </div> : ""}
      {paddler.Pref === Enum.PADDLER_PREF.STRONG_LEFT ? 
      <div style={iconParentStyle}>
          <div style={arrowDoubleLeft}>
          <FontAwesomeIcon icon="angle-double-left" />  
          </div>
          <div style={arrowDoubleLeftBack}>
          <FontAwesomeIcon icon="angle-double-left" />  
          </div>
      </div> : ""}
      {paddler.Pref === Enum.PADDLER_PREF.RIGHT ? 
      <div style={iconParentStyle}>
          <div style={arrowRight}>
          <FontAwesomeIcon icon="angle-right" />  
          </div>
          <div style={arrowRightBack}>
          <FontAwesomeIcon icon="angle-right" />  
          </div>
      </div> : ""}
      {paddler.Pref === Enum.PADDLER_PREF.STRONG_RIGHT ? 
      <div style={iconParentStyle}>                                
          <div style={arrowDoubleRight}>
              <FontAwesomeIcon icon="angle-double-right" />  
          </div> 
          <div style={arrowDoubleRightBack}>
              <FontAwesomeIcon icon="angle-double-right" />  
          </div> 
      </div> : ""}
     
        
        
      </div>
      </div>
        </div>
        
        )
        
        
    }
    
  }
  
}
    

export default Seat

