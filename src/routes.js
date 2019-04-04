import React from 'react'
import { Route } from 'react-router-dom'
import Profile from './components/profile'
import Home from './components/home'
import Paddlers from './components/paddlers'
import PaddlerEdit from './components/paddlerEdit'
import NavBar from './components/navBar'
import Heat from './components/heat'
import PaddlerAdd from './components/paddlerAdd'
import PaddlerAdd2 from './components/paddlerAdd2'
import Boats from './components/boats'


const Routes = () => {
    return (
        <div>
            <NavBar />
            <div className="container">
                <Route path="/paddlers" exact component={Paddlers}/>
                <Route path="/paddlers/:id" exact component={PaddlerEdit}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/heat" component={Heat}/>
                <Route path="/boats" exact component={Boats}/>
                <Route path="/boats/:id" component={Heat}/>
                <Route path="/" exact component={Home}/>
                <Route path="/paddlerAdd" exact component={PaddlerAdd}/>
                <Route path="/paddlerAdd2" exact component={PaddlerAdd2}/>
                <Route path="/boatAdd" exact component={Heat}/>
            </div>
        </div>        
        )
}

export default Routes