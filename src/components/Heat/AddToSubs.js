import React, { Component } from 'react'

class AddToSubs extends Component {
    render(){
        const divStyle = {
            width: '60px', 
            height: '60px', 
            textAlign: 'center', 
            display: 'inline-flex',
            borderRadius: '15px',
          //   border: '1px solid black',
            backgroundColor: 'lightgray',
            cursor: 'pointer',
            
            
            // backgroundImage: 'url({paddler.Image})',
            // backgroundRepeat: 'no-repeat'
          }    
        return(
            <div
                className=""
                style={divStyle}
                onClick={() => this.props.addToSubs()}>
            <i>Add To Subs</i>
            </div>
        )
    }
}

export default AddToSubs