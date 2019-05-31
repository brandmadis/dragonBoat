import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Header from './Header'

class Nav extends Component {
    render() {
        return (
            <div>
    {/*  BEGIN SIDEPANEL*/} 
    <nav className="page-sidebar" data-pages="sidebar">
      {/* BEGIN SIDEBAR MENU TOP TRAY CONTENT*/}
      <div className="sidebar-overlay-slide from-top" id="appMenu">
        <div className="row">
          <div className="col-xs-6 no-padding">
            <a href="#" className="p-l-40"><img src="assets/img/demo/social_app.svg" alt="socail"/>
            </a>
          </div>
          <div className="col-xs-6 no-padding">
            <a href="#" className="p-l-10"><img src="assets/img/demo/email_app.svg" alt="socail"/>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 m-t-20 no-padding">
            <a href="#" className="p-l-40"><img src="assets/img/demo/calendar_app.svg" alt="socail"/>
            </a>
          </div>
          <div className="col-xs-6 m-t-20 no-padding">
            <a href="#" className="p-l-10"><img src="assets/img/demo/add_more.svg" alt="socail"/>
            </a>
          </div>
        </div>
      </div>
      {/* END SIDEBAR MENU TOP TRAY CONTENT*/}

      {/* BEGIN SIDEBAR MENU HEADER*/}
      <div className="sidebar-header">
        <img src="assets/img/logo_white.png" alt="logo" className="brand" data-src="assets/img/logo_white.png" data-src-retina="assets/img/logo_white_2x.png" width="78" height="22"/>
        <div className="sidebar-header-controls">
          <button type="button" className="btn btn-xs sidebar-slide-toggle btn-link m-l-20" data-pages-toggle="#appMenu"><i className="fa fa-angle-down fs-16"></i>
          </button>
          <button type="button" className="btn btn-link d-lg-inline-block d-xlg-inline-block d-md-inline-block d-sm-none d-none" data-toggle-pin="sidebar"><i className="fa fs-12"></i>
          </button>
        </div>
      </div>
      {/* END SIDEBAR MENU HEADER*/}

      {/* START SIDEBAR MENU */}
      <div className="sidebar-menu">
        {/* BEGIN SIDEBAR MENU ITEMS*/}
        <ul className="menu-items">
          <li className="m-t-30 ">
              <NavLink to="/">
                <span className="title">Dashboard</span>
                {/* <span className="details">12 New Updates</span> */}
              </NavLink>
            {/* <a href="index.html" className="detailed">
              <span className="title">Dashboard</span>
              <span className="details">12 New Updates</span>
            </a> */}
            <span className="bg-success icon-thumbnail"><i className="pg-home"></i></span>
          </li>
          <li className="">
              <NavLink to="/tempPaddlers">Paddlers</NavLink>
              <span className="bg-success icon-thumbnail"><i className="pg-home"></i></span>
          </li>
          <li>
              <NavLink to="/tempBoats">Boats</NavLink>
              <span className="bg-success icon-thumbnail"><i className="pg-home"></i></span>
          </li>
     
        </ul>
        <div className="clearfix"></div>
      </div>
      {/* END SIDEBAR MENU */}
    </nav>
    {/* END SIDEBAR */}
    {/* END SIDEBPANEL*/}
    {/* START PAGE-CONTAINER */}
{/* <Header /> */}

            </div>
        )
    }
}

export default Nav