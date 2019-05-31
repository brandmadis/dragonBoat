import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
      <div className="header ">
        {/* START MOBILE SIDEBAR TOGGLE */}
        <a href="#" className="btn-link toggle-sidebar d-lg-none pg pg-menu" data-toggle="sidebar">
        </a>
        {/* END MOBILE SIDEBAR TOGGLE */}
        <div className="">
          <div className="brand inline   m-l-10">
            <img src="assets/img/logo.png" alt="logo" data-src="assets/img/logo.png" data-src-retina="assets/img/logo_2x.png" width="78" height="22"/>
          </div>
          {/* START NOTIFICATION LIST */}
          <ul className="d-lg-inline-block d-none notification-list no-margin d-lg-inline-block b-grey b-l b-r no-style p-l-30 p-r-20">
            <li className="p-r-10 inline">
              <div className="dropdown">
                <a href="javascript:;" id="notification-center" className="header-icon pg pg-world" data-toggle="dropdown">
                  <span className="bubble"></span>
                </a>
                {/* START Notification Dropdown */}
                <div className="dropdown-menu notification-toggle" role="menu" aria-labelledby="notification-center">
                  {/* START Notification */}
                  <div className="notification-panel">
                    {/* START Notification Body*/}
                    <div className="notification-body scrollable">
                      {/* START Notification Item*/}
                      <div className="notification-item unread clearfix">
                        {/* START Notification Item*/}
                        <div className="heading open">
                          <a href="#" className="text-complete pull-left">
                            <i className="pg-map fs-16 m-r-10"></i>
                            <span className="bold">Carrot Design</span>
                            <span className="fs-12 m-l-10">David Nester</span>
                          </a>
                          <div className="pull-right">
                            <div className="thumbnail-wrapper d16 circular inline m-t-15 m-r-10 toggle-more-details">
                              <div><i className="fa fa-angle-left"></i>
                              </div>
                            </div>
                            <span className=" time">few sec ago</span>
                          </div>
                          <div className="more-details">
                            <div className="more-details-inner">
                              <h5 className="semi-bold fs-16">“Apple’s Motivation - Innovation <br></br>
                                                            distinguishes between <br></br>
                                                            A leader and a follower.”</h5>
                              <p className="small hint-text">
                                Commented on john Smiths wall.
                                <br></br> via pages framework.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* END Notification Item*/}
                        {/* START Notification Item Right Side*/}
                        <div className="option" data-toggle="tooltip" data-placement="left" title="mark as read">
                          <a href="#" className="mark"></a>
                        </div>
                        {/* END Notification Item Right Side*/}
                      </div>
                      {/* START Notification Body*/}
                      {/* START Notification Item*/}
                      <div className="notification-item  clearfix">
                        <div className="heading">
                          <a href="#" className="text-danger pull-left">
                            <i className="fa fa-exclamation-triangle m-r-10"></i>
                            <span className="bold">98% Server Load</span>
                            <span className="fs-12 m-l-10">Take Action</span>
                          </a>
                          <span className="pull-right time">2 mins ago</span>
                        </div>
                        {/* START Notification Item Right Side*/}
                        <div className="option">
                          <a href="#" className="mark"></a>
                        </div>
                        {/* END Notification Item Right Side*/}
                      </div>
                      {/* END Notification Item*/}
                      {/* START Notification Item*/}
                      <div className="notification-item  clearfix">
                        <div className="heading">
                          <a href="#" className="text-warning-dark pull-left">
                            <i className="fa fa-exclamation-triangle m-r-10"></i>
                            <span className="bold">Warning Notification</span>
                            <span className="fs-12 m-l-10">Buy Now</span>
                          </a>
                          <span className="pull-right time">yesterday</span>
                        </div>
                        {/* START Notification Item Right Side*/}
                        <div className="option">
                          <a href="#" className="mark"></a>
                        </div>
                        {/* END Notification Item Right Side*/}
                      </div>
                      {/* END Notification Item*/}
                      {/* START Notification Item*/}
                      <div className="notification-item unread clearfix">
                        <div className="heading">
                          <div className="thumbnail-wrapper d24 circular b-white m-r-5 b-a b-white m-t-10 m-r-10">
                            <img width="30" height="30" data-src-retina="assets/img/profiles/1x.jpg" data-src="assets/img/profiles/1.jpg" alt="" src="assets/img/profiles/1.jpg"/>
                          </div>
                          <a href="#" className="text-complete pull-left">
                            <span className="bold">Revox Design Labs</span>
                            <span className="fs-12 m-l-10">Owners</span>
                          </a>
                          <span className="pull-right time">11:00pm</span>
                        </div>
                        {/* START Notification Item Right Side*/}
                        <div className="option" data-toggle="tooltip" data-placement="left" title="mark as read">
                          <a href="#" className="mark"></a>
                        </div>
                        {/* END Notification Item Right Side*/}
                      </div>
                      {/* END Notification Item*/}
                    </div>
                    {/* END Notification Body*/}
                    {/* START Notification Footer*/}
                    <div className="notification-footer text-center">
                      <a href="#" className="">Read all notifications</a>
                      <a data-toggle="refresh" className="portlet-refresh text-black pull-right" href="#">
                        <i className="pg-refresh_new"></i>
                      </a>
                    </div>
                    {/* START Notification Footer*/}
                  </div>
                  {/* END Notification */}
                </div>
                {/* END Notification Dropdown */}
              </div>
            </li>
            <li className="p-r-10 inline">
              <a href="#" className="header-icon pg pg-link"></a>
            </li>
            <li className="p-r-10 inline">
              <a href="#" className="header-icon pg pg-thumbs"></a>
            </li>
          </ul>
          {/* END NOTIFICATIONS LIST */}
          <a href="#" className="search-link d-lg-inline-block d-none" data-toggle="search"><i className="pg-search"></i>Type anywhere to <span className="bold">search</span></a>
        </div>
        <div className="d-flex align-items-center">
          {/* START User Info*/}
          <div className="pull-left p-r-10 fs-14 font-heading d-lg-block d-none">
            <span className="semi-bold">David</span> <span className="text-master">Nest</span>
          </div>
          <div className="dropdown pull-right d-lg-block d-none">
            <button className="profile-dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="thumbnail-wrapper d32 circular inline">
              <img src="assets/img/profiles/avatar.jpg" alt="" data-src="assets/img/profiles/avatar.jpg" data-src-retina="assets/img/profiles/avatar_small2x.jpg" width="32" height="32"/>
              </span>
            </button>
            <div className="dropdown-menu dropdown-menu-right profile-dropdown" role="menu">
              <a href="#" className="dropdown-item"><i className="pg-settings_small"></i> Settings</a>
              <a href="#" className="dropdown-item"><i className="pg-outdent"></i> Feedback</a>
              <a href="#" className="dropdown-item"><i className="pg-signals"></i> Help</a>
              <a href="#" className="clearfix bg-master-lighter dropdown-item">
                <span className="pull-left">Logout</span>
                <span className="pull-right"><i className="pg-power"></i></span>
              </a>
            </div>
          </div>
          {/* END User Info*/}
          <a href="#" className="header-icon pg pg-alt_menu btn-link m-l-10 sm-no-margin d-inline-block" data-toggle="quickview" data-toggle-element="#quickview"></a>
        </div>
      </div>

        )
    }
}

export default Header