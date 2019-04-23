import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-brand">DragonBoat</div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink to="/" 
                      exact 
                      className="nav-link"
                      >Home</NavLink> 

                </li>
                <li className="nav-item">
                  <NavLink to="/paddlers" 
                      isActive={(match, location) => location.pathname.startsWith("/paddler")}
                      activeClassName="active"
                      className="nav-link"
                      >Paddlers</NavLink>
                </li>
                {/*
                <li className="nav-item">
                  <NavLink to="/profile" 
                      className="nav-link"
                      >Profile</NavLink>
                </li>
                // <li className="nav-item">
                //   <NavLink to="/heat" 
                //       className="nav-link"
                //       >Heat</NavLink>
                // </li>  
                */}
                <li className="nav-item">
                  <NavLink to="/boats" 
                      className="nav-link"
                      >Boats</NavLink>
                </li>                 
                <li className="nav-item">
                  <NavLink to="/heats" 
                      className="nav-link"
                      >Heats</NavLink>
                </li>                 
              </ul>
            </div>
          </nav>

        </div>
    )
}

export default NavBar