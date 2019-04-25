import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { firebaseDB, firebasePaddlers, firebaseLooper, config } from '../firebase'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import Enum from '../widgets/enums';

  
class Paddlers extends Component {
    state = {
        paddlers: [],
        t0: 0
    }
    componentWillMount(){
        let t0 = performance.now()
        if(this.state.paddlers.length < 1){
            firebasePaddlers.once('value')
            .then((snapshot) => {
                const paddlers = firebaseLooper(snapshot)

                this.setState({
                    paddlers,
                    t0
                })
            })
        }
    }
    componentDidMount(){

        let t1 = performance.now()
        console.log(`/paddlers Mount time: ${t1-this.state.t0}`)
    }
    deletePaddler(id, index){

        firebaseDB.ref('paddlers/' + id).remove()
        
        this.setState({
            paddlers: this.state.paddlers.filter((_, i) => i !== index)
        })
        console.log("deletePaddler")
    }
    editPaddler(id){
        this.props.history.push(`/paddlers/${id}`)
    }
    createPaddler(){
        console.log("createPaddler")
        this.props.history.push('/paddlerAdd2')
    }
    redirect(id){
        console.log(id)
    }
    render(){
        // console.log("request: ", this.state.paddlers)
        const arrowLeft = {
            right: '78px',
            display: 'inline',
            zIndex: '110',
            position: 'relative',
            color: 'white',
            fontSize: 'xx-large',
            top: '33px',
          }
          const arrowLeftBack = {
            right: '93px',
            display: 'inline',
            zIndex: '109',
            position: 'relative',
            color: 'darkgrey',
            fontSize: 'xx-large',
            top: '35px',
          }          
          const arrowDoubleLeft = {
            right: '78px',
            display: 'inline',
            zIndex: '110',
            position: 'relative',
            color: 'white',
            fontSize: 'xx-large',
            top: '33px',
          }
          const arrowDoubleLeftBack = {
            right: '104px',
            display: 'inline',
            zIndex: '109',
            position: 'relative',
            color: 'darkgrey',
            fontSize: 'xx-large',
            top: '35px',
          }          
          const arrowRight = {
            right: '15px',
            display: 'inline',
            zIndex: '110',
            position: 'relative',
            color: 'white',
            fontSize: 'xx-large',
            top: '35px'
          }    
          const arrowRightBack = {
            right: '32px',
            top: '37px',
            display: 'inline',
            zIndex: '109',
            position: 'relative',
            color: 'darkgrey',
            fontSize: 'xx-large',
          }    
          const arrowDoubleRight = {
            right: '25px',
            display: 'inline',
            zIndex: '110',
            position: 'relative',
            color: 'white',
            fontSize: 'xx-large',
            top: '35px'
          }    
          const arrowDoubleRightBack = {
            right: '53px',
            top: '37px',
            display: 'inline',
            zIndex: '109',
            position: 'relative',
            color: 'darkgrey',
            fontSize: 'xx-large',
          }    
          const iconParentStyle = {
              display: 'inline',
          }  
  
        const imgStyle = { borderRadius: '15px'}
        const padList = this.state.paddlers.map((item, i) => {
            // console.log("item: ", item, "i: ", i)

            return (
                // <tr key={i} onClick={() => this.editPaddler(item.id)}> 
                <tr key={i}
                    onClick={()=> this.editPaddler(item.id)}
                    style={{cursor: 'pointer'}}>
                    <td>
                    {item.image === "" ? 
                        <FontAwesomeIcon icon="dragon" size="3x" />
                    :
                        <img 
                        src={`https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/images%2F${item.image}?alt=media`} 
                        style={ imgStyle }
                        alt="" width="75" height="75"/>
                    }
                            {item.Pref === Enum.PADDLER_PREF.LEFT ? 
                                <div style={iconParentStyle}>
                                <div style={arrowLeft}>
                                <FontAwesomeIcon icon="angle-left" />  
                                </div> 
                                <div style={arrowLeftBack}>
                                <FontAwesomeIcon icon="angle-left" />  
                                </div> 
                            </div> : ""}
                            {item.Pref === Enum.PADDLER_PREF.STRONG_LEFT ? 
                            <div style={iconParentStyle}>
                                <div style={arrowDoubleLeft}>
                                <FontAwesomeIcon icon="angle-double-left" />  
                                </div>
                                <div style={arrowDoubleLeftBack}>
                                <FontAwesomeIcon icon="angle-double-left" />  
                                </div>
                            </div> : ""}
                            {item.Pref === Enum.PADDLER_PREF.RIGHT ? 
                            <div style={iconParentStyle}>
                                <div style={arrowRight}>
                                <FontAwesomeIcon icon="angle-right" />  
                                </div>
                                <div style={arrowRightBack}>
                                <FontAwesomeIcon icon="angle-right" />  
                                </div>
                            </div> : ""}
                            {item.Pref === Enum.PADDLER_PREF.STRONG_RIGHT ? 
                            <div style={iconParentStyle}>                                
                                <div style={arrowDoubleRight}>
                                    <FontAwesomeIcon icon="angle-double-right" />  
                                </div> 
                                <div style={arrowDoubleRightBack}>
                                    <FontAwesomeIcon icon="angle-double-right" />  
                                </div> 
                            </div> : ""}
                            
                            </td>
                    <td>{item.firstName} {item.lastName} <br></br>
                        {item.Weight} <br></br>
                        {item.gender} <br></br>
                    </td>
                    {/* <td>
                    
                        <button 
                            className="btn btn-default" 
                            onClick={() => {
                            if (
                                window.confirm("Are you sure you want to delete this paddler?"))
                                 this.deletePaddler(item.id, i)}}>
                            delete
                        </button>
                    </td> */}
                </tr>        
                )    
        })
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>
                            <div 
                                onClick={()=>this.createPaddler()}
                                style={{
                                    display: 'inline',
                                    marginRight: '10px',
                                    cursor: 'pointer'}}>
                                <FontAwesomeIcon icon={'plus'} />
                            <span>  </span>Add Paddler
                            </div>
                            </th>
                            <th></th>
                    </tr>
                </thead>
                <tbody>
                    { padList }

                </tbody>
            </table>
        </div>
            
        )
    }
}

export default Paddlers