import React from 'react' 
import { config } from '../firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
    let key = process.env.REACT_APP_devApiKey
    let test = "test"
    return (
        <div>
            <p>Home</p>
            <FontAwesomeIcon icon="stroopwafel" />  

        </div>
            
    )
} 

export default Home

