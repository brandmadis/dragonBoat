import React from 'react'
import { Route } from 'react-router-dom'
import Profile from './components/profile'
import Home from './components/home'
import Paddlers from './components/paddlers'
import PaddlerDetail from './components/paddler_detail'
import NavBar from './components/navBar'
import Heat from './components/heat'
import PaddlerAdd from './components/paddlerAdd'
import Boats from './components/boats'


const Routes = () => {
    return (
        <div>
            <NavBar />
            <div className="container">
                <Route path="/paddlers" exact component={Paddlers}/>
                <Route path="/paddlers/:id" component={PaddlerDetail}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/heat" component={Heat}/>
                <Route path="/boats" exact component={Boats}/>
                <Route path="/boats/:id" component={Heat}/>
                <Route path="/" exact component={Home}/>
                <Route path="/paddlerAdd" exact component={PaddlerAdd}/>
                <Route path="/boatAdd" exact component={Heat}/>
            </div>
        </div>        
        )
}

export default Routes