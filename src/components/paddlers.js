import React from 'react'
import { Link } from 'react-router-dom'

const Paddlers = () => {
    return (
        <div>
            Paddlers<br/>
            <Link to='/paddlerAdd'><button>Add New Paddler</button></Link><br />
            <Link to="/paddlers/1">Paddler 1</Link><br/>
            <Link to="/paddlers/2">Paddler 2</Link><br/>
            <Link to="/paddlers/3">Paddler 3</Link><br/>
        </div>
            
    )
}

export default Paddlers