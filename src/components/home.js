import React, { Component } from 'react' 
import { config } from '../firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Home extends Component {
    state = {
        t0: 0
    }
  
    componentDidMount(){

        let t1 = performance.now()
        console.log(`/home Mount time: ${t1-this.state.t0}`)
    }
    render(){

        let key = process.env.REACT_APP_devApiKey
        let test = "test"
        return (
            <div>
            <p>Home</p>

        </div>
            
            )
        }
} 

export default Home

