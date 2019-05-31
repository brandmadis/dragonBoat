import React, { Component } from 'react'
import { firebaseDB, firebasePaddlers, firebaseLooper, config } from '../../firebase'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'

class TempPaddlers extends Component {
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
    editPaddler(id){
      this.props.history.push(`/tempPaddlers/${id}`)
    }
    createPaddler(){
      console.log("createPaddler")
      this.props.history.push('/tempPaddlersAdd')
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
                            <div 
                                onClick={()=>this.createPaddler()}
                                style={{
                                    display: 'inline',
                                    marginRight: '10px',
                                    cursor: 'pointer'}}>
                                <FontAwesomeIcon icon={'plus'} />
                            <span>  </span>Add Paddler
                            </div>
                            </th>                      <th></th>
                   
                    </tr>
                  </thead>
                  <tbody>
                    { this.state.paddlers.map((item, i) => {
                      return (

                        <tr key={i}
                          onClick={()=> this.editPaddler(item.id)}
                          style={{cursor: 'pointer'}}>
                          <td>
                            {item.image === "" ? 
                              <FontAwesomeIcon icon="dragon" size="3x" />
                              :
                              <img 
                              src={`https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/images%2F${item.image}?alt=media`} 
                              // style={ imgStyle }
                              alt="" width="75" height="75"/>
                          }
                          </td>
                          <td>{item.firstName} {item.lastName} <br></br>
                              {item.Weight} <br></br>
                              {item.gender} <br></br>
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

export default TempPaddlers
