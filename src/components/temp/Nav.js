import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

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
          {/* <li className="">
            <a href="email.html" className="detailed">
              <span className="title">Email</span>
              <span className="details">234 New Emails</span>
            </a>
            <span className="icon-thumbnail"><i className="pg-mail"></i></span>
          </li>
          <li className="">
            <a href="social.html"><span className="title">Social</span></a>
            <span className="icon-thumbnail"><i className="pg-social"></i></span>
          </li>
          <li>
            <a href="javascript:;"><span className="title">Calendar</span>
            <span className=" arrow"></span></a>
            <span className="icon-thumbnail"><i className="pg-calender"></i></span>
            <ul className="sub-menu">
              <li className="">
                <a href="calendar.html">Basic</a>
                <span className="icon-thumbnail">c</span>
              </li>
              <li className="">
                <a href="calendar_lang.html">Languages</a>
                <span className="icon-thumbnail">L</span>
              </li>
              <li className="">
                <a href="calendar_month.html">Month</a>
                <span className="icon-thumbnail">M</span>
              </li>
              <li className="">
                <a href="calendar_lazy.html">Lazy load</a>
                <span className="icon-thumbnail">La</span>
              </li>
              <li className="">
                <a href="https://docs.pages.revox.io/apps/calendar" target="_blank">Documentation</a>
                <span className="icon-thumbnail">D</span>
              </li>
            </ul>
          </li>
          <li className="">
            <a href="builder.html">
              <span className="title">Builder</span>
            </a>
            <span className="icon-thumbnail"><i className="pg-layouts"></i></span>
          </li>
          <li>
            <a href="javascript:;"><span className="title">Layouts</span>
            <span className=" arrow"></span></a>
            <span className="icon-thumbnail"><i className="pg-layouts2"></i></span>
            <ul className="sub-menu">
              <li className="">
                <a href="default_layout.html">Default</a>
                <span className="icon-thumbnail">dl</span>
              </li>
              <li className="">
                <a href="secondary_layout.html">Secondary</a>
                <span className="icon-thumbnail">sl</span>
              </li>
              <li className="">
                <a href="boxed_layout.html">Boxed</a>
                <span className="icon-thumbnail">bl</span>
              </li>
              <li className="">
                <a href="rtl_layout.html">RTL</a>
                <span className="icon-thumbnail">rl</span>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:;"><span className="title">UI Elements</span>
            <span className=" arrow"></span></a>
            <span className="icon-thumbnail">Ui</span>
            <ul className="sub-menu">
              <li className="">
                <a href="color.html">Color</a>
                <span className="icon-thumbnail">c</span>
              </li>
              <li className="">
                <a href="typography.html">Typography</a>
                <span className="icon-thumbnail">t</span>
              </li>
              <li className="">
                <a href="icons.html">Icons</a>
                <span className="icon-thumbnail">i</span>
              </li>
              <li className="">
                <a href="buttons.html">Buttons</a>
                <span className="icon-thumbnail">b</span>
              </li>
              <li className="">
                <a href="notifications.html">Notifications</a>
                <span className="icon-thumbnail">n</span>
              </li>
              <li className="">
                <a href="modals.html">Modals</a>
                <span className="icon-thumbnail">m</span>
              </li>
              <li className="">
                <a href="progress.html">Progress &amp; Activity</a>
                <span className="icon-thumbnail">pa</span>
              </li>
              <li className="">
                <a href="tabs_accordian.html">Tabs &amp; Accordions</a>
                <span className="icon-thumbnail">ta</span>
              </li>
              <li className="">
                <a href="sliders.html">Sliders</a>
                <span className="icon-thumbnail">s</span>
              </li>
              <li className="">
                <a href="tree_view.html">Tree View</a>
                <span className="icon-thumbnail">tv</span>
              </li>
              <li className="">
                <a href="nestables.html">Nestable</a>
                <span className="icon-thumbnail">ns</span>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:;">
              <span className="title">Forms</span>
              <span className=" arrow"></span>
            </a>
            <span className="icon-thumbnail"><i className="pg-form"></i></span>
            <ul className="sub-menu">
              <li className="">
                <a href="form_elements.html">Form Elements</a>
                <span className="icon-thumbnail">fe</span>
              </li>
              <li className="">
                <a href="form_layouts.html">Form Layouts</a>
                <span className="icon-thumbnail">fl</span>
              </li>
              <li className="">
                <a href="form_wizard.html">Form Wizard</a>
                <span className="icon-thumbnail">fw</span>
              </li>
            </ul>
          </li>
          <li className="">
            <a href="cards.html">
              <span className="title">Cards</span>
            </a>
            <span className="icon-thumbnail"><i className="pg-grid"></i></span>
          </li>
          <li className="">
            <a href="views.html">
              <span className="title">Views</span>
            </a>
            <span className="icon-thumbnail"><i className="pg pg-ui"></i></span>
          </li>
          <li>
            <a href="javascript:;"><span className="title">Tables</span>
            <span className=" arrow"></span></a>
            <span className="icon-thumbnail"><i className="pg-tables"></i></span>
            <ul className="sub-menu">
              <li className="">
                <a href="tables.html">Basic Tables</a>
                <span className="icon-thumbnail">bt</span>
              </li>
              <li className="">
                <a href="datatables.html">Data Tables</a>
                <span className="icon-thumbnail">dt</span>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:;"><span className="title">Maps</span> 
            <span className=" arrow"></span></a>
            <span className="icon-thumbnail"><i className="pg-map"></i></span>
            <ul className="sub-menu">
              <li className="">
                <a href="google_map.html">Google Maps</a>
                <span className="icon-thumbnail">gm</span>
              </li>
              <li className="">
                <a href="vector_map.html">Vector Maps</a>
                <span className="icon-thumbnail">vm</span>
              </li>
            </ul>
          </li>
          <li className="">
            <a href="charts.html"><span className="title">Charts</span></a>
            <span className="icon-thumbnail"><i className="pg-charts"></i></span>
          </li>
          <li>
            <a href="javascript:;"><span className="title">Extra</span>
            <span className=" arrow"></span></a>
            <span className="icon-thumbnail"><i className="pg-bag"></i></span>
            <ul className="sub-menu">
              <li className="">
                <a href="invoice.html">Invoice</a>
                <span className="icon-thumbnail">in</span>
              </li>
              <li className="">
                <a href="404.html">404 Page</a>
                <span className="icon-thumbnail">pg</span>
              </li>
              <li className="">
                <a href="500.html">500 Page</a>
                <span className="icon-thumbnail">pg</span>
              </li>
              <li className="">
                <a href="blank_template.html">Blank Page</a>
                <span className="icon-thumbnail">bp</span>
              </li>
              <li className="">
                <a href="login.html">Login</a>
                <span className="icon-thumbnail">l</span>
              </li>
              <li className="">
                <a href="register.html">Register</a>
                <span className="icon-thumbnail">re</span>
              </li>
              <li className="">
                <a href="lock_screen.html">Lockscreen</a>
                <span className="icon-thumbnail">ls</span>
              </li>
              <li className="">
                <a href="gallery.html">Gallery</a>
                <span className="icon-thumbnail">gl</span>
              </li>
              <li className="">
                <a href="timeline.html">Timeline</a>
                <span className="icon-thumbnail">t</span>
              </li>
            </ul>
          </li>
          <li className="">
            <a href="javascript:;"><span className="title">Menu Levels</span>
            <span className="arrow"></span></a>
            <span className="icon-thumbnail"><i className="pg-menu_lv"></i></span>
            <ul className="sub-menu">
              <li>
                <a href="javascript:;">Level 1</a>
                <span className="icon-thumbnail">L1</span>
              </li>
              <li>
                <a href="javascript:;"><span className="title">Level 2</span>
                <span className="arrow"></span></a>
                <span className="icon-thumbnail">L2</span>
                <ul className="sub-menu">
                  <li>
                    <a href="javascript:;">Sub Menu</a>
                    <span className="icon-thumbnail">Sm</span>
                  </li>
                  <li>
                    <a href="ujavascript:;">Sub Menu</a>
                    <span className="icon-thumbnail">Sm</span>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="">
            <a href="https://docs.pages.revox.io/" target="_blank"><span className="title">Docs</span></a>
            <span className="icon-thumbnail"><i className="pg-note"></i></span>
          </li>
          <li className="">
            <a href="http://changelog.pages.revox.io/" target="_blank"><span className="title">Changelog</span></a>
            <span className="icon-thumbnail">Cl</span>
          </li> */}
        </ul>
        <div className="clearfix"></div>
      </div>
      {/* END SIDEBAR MENU */}
    </nav>
    {/* END SIDEBAR */}
    {/* END SIDEBPANEL*/}


            </div>
        )
    }
}

export default Nav