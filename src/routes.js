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
import Boats2 from './components/Boats2'
import Heats from './components/heats'
import BoatEdit from './components/boatEdit'
import HeatList from './components/HeatList'

// import Temp from './components/temp/Temp'
// import Nav from './components/temp/Nav'
// import TempPaddlers from './components/temp/TempPaddlers'
// import TempPaddlersEdit from './components/temp/TempPaddlersEdit'
// import TempPaddlersAdd from './components/temp/TempPaddlersAdd'
// import TempBoats from './components/temp/TempBoats'
// import TempHeats from './components/temp/TempHeats'
// import TempHeat from './components/temp/TempHeat'

const Routes = () => {
    return (
        <div>
        <div>
            <NavBar />
            {/* <Nav /> */}
            <div className="container">
                <Route path="/paddlers" exact component={Paddlers}/>
                <Route path="/paddlers/:id" exact component={PaddlerEdit}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/boats" exact component={Boats}/>
                <Route path="/boats2" exact component={Boats2}/>
                <Route path="/heats" exact component={Heats}/>
                <Route path="/heat/:id/:name" exact component={Heat}/>
                <Route path="/heat/:id/:name" exact component={Heat}/>
                <Route path="/heatList/:id" exact component={HeatList}/>
                <Route path="/boatedit/:id" exact component={BoatEdit}/>
                <Route path="/" exact component={Boats2}/>
                <Route path="/paddlerAdd" exact component={PaddlerAdd}/>
                <Route path="/paddlerAdd2" exact component={PaddlerAdd2}/>
                <Route path="/boatAdd" exact component={Heat}/>
            </div>
            </div>
                {/* <Route path="/" exact component={Temp}/>
                <Route path="/tempPaddlers" exact component={TempPaddlers}/>
                <Route path="/tempPaddlers/:id" exact component={TempPaddlersEdit}/>
                <Route path="/tempPaddlersAdd" exact component={TempPaddlersAdd}/>
                <Route path="/tempBoats" exact component={TempBoats}/>
                <Route path="/tempHeats/:id" exact component={TempHeats}/>
                <Route path="/tempHeat/:id/:name" exact component={TempHeat}/> */}
        </div>        
        )
}

export default Routes