import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import Boat from './Heat/Boat'
import Bench from './Heat/Bench'
// import Weights from './Heat/Weights'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { firebaseDB, 
          firebasePaddlers, 
          // firebaseBoats, 
          firebaseHeats,
          firebaseLooper, 
          firebaseLooper2,
          config
        } from '../firebase'
// import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

class Heat extends Component {
    constructor(props){
        super(props)
        this.state = {
            selected: null,
            paddlers: [],
            bench: [],
            filteredPaddlers: [],
            paddlerIds: [],
            boat: [],
            selSeat: -1,
            loaded: false,
            prevFrontRear: 0,
            prevLeftRight: 0,
            name: this.props.match.params.name,
            // name: this.props.location.search,
            editName: false           
        }
    this.handleClick = this.handleClick.bind(this);
    this.removeFromBoat = this.removeFromBoat.bind(this);
    this.addToSubs = this.addToSubs.bind(this)
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
      console.log("didMount")
        if(this.state.paddlers.length < 1){
            firebasePaddlers.once('value')
            .then((snapshot) => {
                const paddlers = firebaseLooper(snapshot)
                let subs = []
                let subNames = []
                const subList = this.props.location.state.heat.subs
                for (const sub of subList) {
                  subNames.push(sub)
                }
                for (const sub of subList) {
                  console.log("sub: ", sub.id)
                  subs.push(sub.id)
                }
                this.setState({subs, subNames})
                const filteredPaddlers = paddlers.filter(paddler => {
                  return subNames.indexOf(paddler.id) === -1
                })
                const benchPaddlers = filteredPaddlers.filter(paddler => {
                  return this.state.boat.indexOf(paddler.id)
                })
                this.setState({
                    paddlers: benchPaddlers
                })

            })
            .then(()=>{
                this.parseIds()
            })
        }
        if(this.state.boat.length < 1){
            let refUrl = `heats/${this.props.match.params.id}/seating`
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
        let pad = this.state.paddlers
        let boat = this.state.boat
        console.log("pad: ", pad, "boat: ", boat)
        let bench = Object.values(pad)
        .filter(function(item){
          return boat.indexOf(item.id) === -1})
        .map(function(obj){
          return obj.id
        })         
        console.log("heat bench:", bench)
        this.setState({bench})
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
        let selSeat = this.state.selSeat
        // console.log("---- sel: ", sel, "user: ", user, "seat: ", seat)
        
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
              console.log("firstClick: ", firstClick)
              newState.boat[selSeat] = user
              newState.selected= null
              this.updateBoat(1) // firebase update
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
        
        let refUrl = `heats/${this.props.match.params.id}/seating`
        firebaseDB.ref(refUrl).set(this.state.boat)
      }
    }
    updatePaddlers = () => {
      
    }
    addToSubs(){
      console.log("addToSubs hit", this.state.selected)
      let newSubData = [ ...this.state.subNames ]
      newSubData.push(this.state.selected)
      
      const newBenchData = [ ... this.state.bench ]
      let index = newBenchData.indexOf(this.state.selected)
      newBenchData.splice(index, 1)
      console.log("newSubData: ", newSubData)
      console.log("subNames: ", this.state.subNames)
      
      this.setState({ 
        bench: newBenchData,
        subNames: newSubData,
        // subNames: ["newSubData"],
      })

      let refUrl = `heats/${this.props.match.params.id}/subs`
      // console.log("refURL: ", refUrl, "newSubData: ", newSubData, "subNames: ", this.state.subNames)
      firebaseDB.ref(refUrl).set(this.state.subNames)
      // console.log("after firebase call")
      this.setState({
        selected: null

      })
    }

    updateBoat(marker){
      console.log("updateBoat func", marker)
      let refUrl = `heats/${this.props.match.params.id}/seating`
      firebaseDB.ref(refUrl).set(this.state.boat)
    }
    
    
    
    clone(id){
      console.log("clone hit", id)
      let newHeatRef = firebaseHeats.push()
      let data = ""
      let newHeat = ""
      firebaseDB.ref(`/heats/${id}`)
      .once('value')
      .then((snapshot) => {
        console.log('snapshot', snapshot.val())
        data = (snapshot.val())
        // snapshot.forEach((childSnapshot) => {
        //   console.log(childSnapshot.key, childSnapshot.val())
        //     data.push({
        //       ...childSnapshot.val(),
        //       id: childSnapshot.key
        //   })
        // })

        console.log("data: ", data)

      })
      .then(() => {
        let boatRef = firebaseDB.ref(`boats/${data.boat}/heats`)
        boatRef.push(newHeatRef.key)
        newHeat = {
          'heatName': `${data.heatName}-clone`,
          'boatHeatKey': boatRef.key,
          'boat':data.boat,
          'seating': data.seating,
          'heatKey': newHeatRef.key,
          'subs': data.subs
        }
        let boatID = this.props.location.state.heat.boat
        // let boatID = this.props
        console.log("boatID: ", boatID)
        newHeatRef.set(newHeat)        
        // this.props.history.push(`/heatList/${data.boat}`)
        const paddlers = this.state.paddlers
        this.props.history.push({
          pathname: `/heat/${newHeatRef.key}/${data.heatName}-clone`,
          state: { heat: {boat: boatID}, paddlers }
        })
        this.setState({
          name: `${data.heatName}-clone`
        })
      })
        // console.log('newHeat: ', newHeat)
    }



    delete(id){
      const boatID = this.props.location.state.heat.boat
      console.log("delete hit", id, boatID)
      firebaseDB.ref(`boats/${boatID}/heats/${id}`).remove()
      firebaseDB.ref(`heats/${id}`).remove()
      this.props.history.push(`/heatList/${boatID}`)
    }
    edit(id){
      console.log("edit hit", id)
      this.setState({editName: !this.state.editName})
    }
    backToHeats = () => {
      // console.log("this.props: ", this.props.location.state.heat)
      this.props.history.push(`/heatList/${this.props.location.state.heat.boat}`)
    }
    updateName(element){
      console.log("e: ", element.event)
      console.log("blur: ", element.blur)
      // const newName = this.state.name
      if(element.blur){
        console.log("clicked off, save")
        let refUrl = `heats/${this.props.match.params.id}/heatName`
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
    removeSub = (subId) => {
      console.log("removeSub: ", subId)
      const newSubData = [ ...this.state.subNames]
      let index = newSubData.indexOf(subId)
      newSubData.splice(index, 1)
      this.setState({
        subNames: newSubData
      })
      let refUrl = `heats/${this.props.match.params.id}/subs`
      firebaseDB.ref(refUrl).set(this.state.subNames)
 


    }
    getSubName = (item) => {
      const paddler = this.props.location.state.paddlers.filter(pad => pad.id === item)
      return (
        <div
          onClick={() => {
            console.log("remove sub")
            this.removeSub(item)
          }}
        >
          {/* {paddler.length ? paddler[0].firstName : null} */}

          {paddler.length ? 
          <img 
            
            // style={this.props.selected === paddler.id ? selected : userImage}
            src={`https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/images%2F${paddler[0].image}?alt=media`} 
            alt="" width="60px" height="60px"
            />
            : null}
        </div>
      )
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
          gridTemplateColumns: '30px 5px 120px 10px 120px 10px 40px' ,          
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
            onClick={()=>this.edit(this.props.match.params.query)}
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

        const subList = () => this.state.subs.map((item, i)=>{
          console.log(item, i )
          return (<li key={i}>{item}</li>)
        })

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

                <h4><i><button
                  className="btn btn-default"
                  onClick={()=>{this.backToHeats()}}
                  >Back to Heats</button></i></h4>

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
                    <div>
                    <Bench
                        {...this.state}
                        onClick={this.handleClick}
                        // bench={bench}
                        bench={this.state.bench}
                        // bench={this.state.filteredPaddlers}
                        removeFromBoat={this.removeFromBoat}
                        boat={boat}
                        paddlers={paddlers}
                        prevFrontRear={this.state.prevFrontRear}                        
                        addToSubs={this.addToSubs}
                        />
                    </div>
                    <div></div>
                    <div>Subs
                      <ul>
                        {this.state.subNames.map((item, i)=>{
                          return (
                            <li 
                              key={i}
                              style={{listStyleType: 'none'}}
                              >{this.getSubName(item)}</li>
                          )
                        })}
                      </ul>
                    </div>
                </div>
            </div>
                      : "" }
            </div>
                
        )
    }
}

export default Heat