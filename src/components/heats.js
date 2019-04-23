import React, { Component } from 'react'

class Boats2 extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1><i>Heats</i></h1>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <td>name</td>
                            <td>date</td>
                            <td>other</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>blue</td>
                            <td>4/22/2019</td>
                            <td>stuff</td> 
                        </tr>
                    </tbody>
    
                </table>
                
            </div>

        )
    }

}

export default Boats2