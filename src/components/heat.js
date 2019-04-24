import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import Boat from './Heat/Boat'
import Bench from './Heat/Bench'
// import Weights from './Heat/Weights'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { firebaseDB, 
          firebasePaddlers, 
          // firebaseBoats, 
          firebaseLooper, 
          firebaseLooper2,
          // config
        } from '../firebase'
// import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

class Heat extends Component {
    constructor(props){
        super(props)
        this.state = {
            selected: null,
            paddlers: [],
            paddlerIds: [],
            boat: [],
            selSeat: -1,
            loaded: false,
            prevFrontRear: 0,
            prevLeftRight: 0,
            name: this.props.match.params.name,
            editName: false           
        }
    this.handleClick = this.handleClick.bind(this);
    this.removeFromBoat = this.removeFromBoat.bind(this);
        
    }
        parseIds(){
          const paddlerIds = []
          for (let paddler in this.state.paddlers){
            paddlerIds.push(this.state.paddlers[paddler].id)
          }
          this.setState({
            paddlerIds
          })
        }
    async componentDidMount(){
      
        if(this.state.paddlers.length < 1){
            firebasePaddlers.once('value')
            .then((snapshot) => {
                const paddlers = firebaseLooper(snapshot)
                this.setState({
                    paddlers
                })
            })
            .then(()=>{
                this.parseIds()
            })
        }
        if(this.state.boat.length < 1){
            let refUrl = `boat/${this.props.match.params.id}/boat`
            await firebaseDB.ref(refUrl).once('value')
            .then((snapshot) => {
              const boat = firebaseLooper2(snapshot)
              this.setState({
                boat
              })

            })
            // await this.paddlerCheck()
        }
        else {
        }
        this.setState({loaded: true})
    }
    paddlerCheck(){
      for( var seat in this.state.boat){
        if(
          this.state.paddlerIds.includes(this.state.boat[seat]) ||
          this.state.boat[seat] === 0
          ){
        }
        else{
          console.log("paddlerIds: ", this.state.paddlerIds)
          var updates = {}
          updates[
            this.props.match.params.id + 
            "/" + 
            "/boat/" +
            this.state.boat.indexOf(this.state.boat[seat])
            ] = 0
          // firebaseBoats.update(updates)                
          // this.setState({boat.seat: 0})
          const newBoat = this.state.boat.slice()
          newBoat[seat] = 0
          this.setState({boat: newBoat})
        }
      }      
    }
    handleClick(user, seat){
        const newState = Object.assign({}, this.state)
        let sel = this.state.selected
        console.log("---- sel: ", sel, "user: ", user, "seat: ", seat)
        
        if (sel === null && sel !== 0 ) { // first click, nothing previously selected
          if (user > 0 && seat === undefined){
            console.log("first bench click, sel: ", sel, user, seat)
          }
          else if (seat <= 0){
            console.log("first boat click, sel: ", sel, "user: ", user, "seat: ", seat)
            newState.selSeat = -seat
          }
          newState.selected = user; // set selected to paddler or seat
          console.log("sel was null, now ", sel, user, seat)
        }
        
        else {
          console.log("else hit, second click")
          if (seat === undefined){
            console.log("second click on bench")
            if (sel === user){
              console.log("sel == user, deselect")
              newState.selected= null
            } else if(this.state.boat.indexOf(sel) === -1){
              console.log("bench user to bench user")
              newState.selected = user
            } else {
              console.log("sel != user, reassign user")
              let firstClick = this.state.boat.indexOf(sel)
              
              newState.boat[firstClick] = user
              newState.selected= null
              this.updateBoat(1)
            }
          }
          else if (seat !== undefined){ // second click on boat
            console.log("second click on boat")
            if (user === 0){
              console.log("user == 0 (empty boat seat was clicked)")
              console.log("sel: ", sel, "user: ", user, "seat: ", seat)
              if (this.state.boat.indexOf(sel) === -1){
                newState.boat[-seat] = sel
                this.updateBoat(2)

              } else {
                let firstClick = this.state.boat.indexOf(sel)
                newState.boat[firstClick] = 0
                newState.boat[-seat] = sel
                this.updateBoat(3)

              }
            } else {
              console.log("user != 0 (occupied seat was clicked), swap users")
              if (this.state.boat.indexOf(sel) === -1){ // first click was on bench (not in boat)
                console.log("First click was on bench, second on seat")
                let firstClick = this.state.boat.indexOf(user)
                newState.boat[firstClick] = sel
                this.updateBoat(4)

              } else if (sel === 0){
                console.log("empty seat to user swap")
                newState.boat[this.state.selSeat] = user
                newState.boat[-seat] = 0
                this.updateBoat(5)

              } else {
                console.log("First click was on boat, second on seat")
                console.log("sel: ", sel, "user: ", user, "seat: ", seat)
                let firstClick = this.state.boat.indexOf(sel)
                newState.boat[firstClick] = user
                newState.boat[-seat] = sel
                this.updateBoat(6)

              }
            }
            newState.selected= null
          }
          newState.selSeat = -1
      
        
    }
    console.log("-------------------------") // logic iteration separator
    this.setState(newState)
    }
    removeFromBoat(){
        console.log("remove from boat")
      if(this.state.selected !== null){
        const newState = Object.assign({}, this.state)
        let sel = this.state.selected   
        newState.boat[this.state.boat.indexOf(sel)] = 0
        newState.selected = null
        newState.selSeat = -1
        this.setState(newState)
        
        let refUrl = `boat/${this.props.match.params.id}/boat`
        firebaseDB.ref(refUrl).set(this.state.boat)
      }
    }
    updateBoat(marker){
      console.log("updateBoat func", marker)
      let refUrl = `boat/${this.props.match.params.id}/boat`
      firebaseDB.ref(refUrl).set(this.state.boat)
    }
    clone(id){
      console.log("clone hit", id)
    }
    delete(id){
      console.log("delete hit", id)
      firebaseDB.ref('boat/' + id).remove()
      this.props.history.push('/boats')
    }
    edit(id){
      console.log("edit hit", id)
      this.setState({editName: !this.state.editName})
    }
    updateName(element){
      console.log("e: ", element.event.target.value)
      console.log("blur: ", element.blur)
      const newName = this.state.name
      if(element.blur){
        console.log("clicked off, save")
        let refUrl = `boat/${this.props.match.params.id}/name`
        firebaseDB.ref(refUrl).set(this.state.name)   
        this.setState({
          name: element.event.target.value,
          editName: false
        })
      }
      this.setState({
        name: element.event.target.value,
      })   
      

    }
    render(){
        let paddlers = JSON.parse(JSON.stringify(this.state.paddlers));
        let boat = JSON.parse(JSON.stringify(this.state.boat));
        
        let bench = Object.values(paddlers)
                  .filter(function(item){
                    return boat.indexOf(item.id) === -1})
                  .map(function(obj){
                    return obj.id
                  })   
        let divGrid = {
          display: 'grid',
          gridTemplateColumns: '30px 5px 120px 10px 60px' ,          
        }
        // let border = { border: '1px solid black' }
        const numStyle = {
          height:'60px', 
          textAlign: 'right',
          fontStyle: 'italic'
        }
        const editButtonStyle = {
          cursor: 'pointer',
          display: 'inline',
          marginRight: '15px',
          fontSize: '20px',
        }
        const cloneTrashStyle = {
          cursor: 'pointer',
          display: 'inline',
          marginLeft: '18px',
          fontSize: '40px',
        }
        const renderName = (
          <div 
            onClick={()=>this.edit(this.props.match.params.id)}
            style={editButtonStyle}
          >{this.state.name}            
        </div>
        )
      
        const editName = (
          <div className="form-group row">

          <div className="col-xs-2">
            <input 
              className="form-control" 
              value={this.state.name} 
              onChange={(event) => this.updateName({event, blur:false})}
              onBlur={(event) => this.updateName({event, blur: true})}
              autoFocus
              style={{fontSize:'20px'}} />
          </div>
          </div>
        )
        return (
            <div>
                  {this.state.loaded ? 
            <div>
              <div style={{marginLeft:'20px'}}>
 
                    {this.state.editName === true ? 
                    editName
                    : 
                    renderName 
                  }


                </div>
                <div style={divGrid}>
                    <div>
                      <div style={numStyle}>
                        <h1>1</h1>
                      </div>
                      <div style={numStyle}>
                        <h1>2</h1>
                      </div>
                      <div style={numStyle}>
                        <h1>3</h1>
                      </div>
                      <div style={numStyle}>
                        <h1>4</h1>
                      </div>
                      <div style={numStyle}>
                        <h1>5</h1>
                      </div>
                      <div style={numStyle}>
                        <h1>6</h1>
                      </div>
                      <div style={numStyle}>
                        <h1>7</h1>
                      </div>
                      <div style={numStyle}>
                        <h1>8</h1>
                      </div>
                      <div style={numStyle}>
                        <h1>9</h1>
                      </div>
                      <div style={numStyle}>
                        <h1>10</h1>
                      </div>
                    </div>
                    <div></div>
                    <div>

                      <Boat 
                          {...this.state}
                          onClick={this.handleClick}
                          removeFromBoat={this.removeFromBoat}
                          boatId={this.props.match.params.id}
                          history={this.props.history}
                          />
                      <div style={{marginTop: '10px'}}>
                        <div 
                          onClick={()=>this.clone(this.props.match.params.id)}
                          style={cloneTrashStyle}
                          >

                          <FontAwesomeIcon 
                            color="lightgrey"
                            icon={['far', 'clone']} />
                        </div>
                        <div 
                          onClick={()=>{
                            if(window.confirm('Are you sure?'))
                            this.delete(this.props.match.params.id)
                          }}
                          style={cloneTrashStyle}
                          >
                          <FontAwesomeIcon
                            color="lightgrey"
                            icon={['far', 'trash-alt']} />
                          </div>                        
                          </div>                        
                    </div>
                    <div></div>
                    <Bench
                        {...this.state}
                        onClick={this.handleClick}
                        bench={bench}
                        removeFromBoat={this.removeFromBoat}
                        boat={boat}
                        paddlers={paddlers}
                        prevFrontRear={this.state.prevFrontRear}                        
                        
                        />
                </div>
            </div>
                      : "" }
            </div>
                
        )
    }
}

export default Heat