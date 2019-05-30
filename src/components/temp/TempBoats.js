import React, { Component } from 'react'
import { firebaseDB, firebaseBoats, firebaseLooper, config } from '../../firebase'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'

class Boats extends Component {
  constructor(props){
    super(props)
    this.state = {
        boats: [],
        boatInput: ""

    }
}
componentWillMount(){
  if(this.state.boats.length < 1){
      firebaseBoats.once('value')
      .then((snapshot) => {
          const boats = firebaseLooper(snapshot)
          this.setState({
              boats
          })
      })
  }
}
createBoat(){
  console.log("createBoat")
  let newRef = firebaseBoats.push()
  let boatKey = newRef.key
  let name = this.state.boatInput
  let boatData = {
      'boatName': name,
      // 'heats': null
  }
  let newBoatState = {
      'boatName': name,
      'id': boatKey
  }
  console.log("1")
  newRef.set(boatData)
  console.log("2")
  // seatRef.set(seatData)
  const newBoatData = {
      ...this.state.boats
  }
  this.setState({
      boats: [...this.state.boats, newBoatState]
  })
}
redirect(id){
  console.log('redirect', id)
  this.props.history.push(`/tempHeats/${id}`)
}
submitForm = (event) => {
  console.log("submitForm")
  event.preventDefault()
  this.createBoat()
  event.target.reset()
}
updateForm = (event) => {
  let newboatInput = {
      ...this.state.boatInput
  }
  newboatInput = event.target.value
  this.setState({
      boatInput: newboatInput
  })
 
}
deleteBoat = (boat, index) => {
  console.log("deleteBoat", `/${boat.id}`)
  firebaseDB.ref(`/boats/${boat.id}`).remove()
  let boats = [ ...this.state.boats ]
  boats.splice(index, 1)
  this.setState({
      boats
  })
}
    render(){
        return (
            <div>

    {/* START PAGE-CONTAINER */}
    <div className="page-container ">    
      {/* START PAGE CONTENT WRAPPER */}
      <div className="page-content-wrapper ">
        {/* START PAGE CONTENT */}
        <div className="content ">
      
          {/* START CONTAINER FLUID */}
          <div className=" container-fluid   container-fixed-lg bg-white">
            {/* START card */}
            <div className="card card-transparent">
              <div className="card-header ">
                <div className="card-title">
                </div>
                {/* <div className="pull-right">
                  <div className="col-xs-12">
                    <input type="text" id="search-table" className="form-control pull-right" placeholder="Search"/>
                  </div>
                </div> */}
                <div className="clearfix"></div>
              </div>
              <div className="card-body">
                <table className="table table-hover demo-table-search table-responsive-block" id="tableWithSearch">
                  <thead>
                    <tr>
                    <th>
                            <div className='form-inline'>    
                                <form onSubmit={this.submitForm}>
                                    <input 
                                        type='text'
                                        className='form-control'
                                        onChange={(event)=>this.updateForm(event)} />
                                    <button className='btn btn-default'>Add Boat</button>
                                </form>
                            </div>
                            {/* <div onClick={()=>this.createBoat()}
                                style={{
                                    display:'inline', 
                                    marginRight: '10px'}}>
                                <FontAwesomeIcon icon={'plus'} />
                            <span>    </span>Add Boat
                            </div> */}
                            </th>
                        <th>ID</th>
                        <th>Delete</th>
                   
                    </tr>
                  </thead>
                  <tbody>
                    { this.state.boats.map((item, i) => {
                      return (

                        <tr key={i}
                          onClick={()=> this.redirect(item.id)}
                          style={{cursor: 'pointer'}}>
                    <td
                        onClick={() => this.redirect(item.id)}
                    >{item.boatName}</td>
                    <td>{item.id}</td>
                    <td>
                        <div
                        onClick={()=> {
                            if(window.confirm('Are you sure?'))
                            this.deleteBoat(item, i)
                        }}>

                            <FontAwesomeIcon
                                color="lightgrey"
                                icon={['far', 'trash-alt']} />
                        </div>
                    </td>                      
                        </tr>
                          )
                        })}
                  </tbody>
                </table>
              </div>
            </div>
            {/* END card */}
          </div>
          {/* END CONTAINER FLUID */}
          {/* START CONTAINER FLUID */}
          {/* END CONTAINER FLUID */}
          {/* START CONTAINER FLUID */}
          {/* END CONTAINER FLUID */}
        </div>
        {/* END PAGE CONTENT */}
        {/* START COPYRIGHT */}
        {/* START CONTAINER FLUID */}
        {/* START CONTAINER FLUID */}
 
        {/* END COPYRIGHT */}
      </div>
      {/* END PAGE CONTENT WRAPPER */}
    </div>
    {/* END PAGE CONTAINER */}


              </div>
        )
    }
}

export default Boats
