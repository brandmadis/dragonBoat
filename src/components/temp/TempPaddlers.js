import React, { Component } from 'react'
// import { firebaseDB, firebasePaddlers, firebaseLooper, config } from '../firebase'

class TempPaddlers extends Component {
    render(){
        return (
            <div>

    {/* START PAGE-CONTAINER */}
    <div className="page-container ">
      {/* START HEADER */}
      <div className="header ">
        {/* START MOBILE SIDEBAR TOGGLE */}
        <a href="#" className="btn-link toggle-sidebar d-lg-none pg pg-menu" data-toggle="sidebar">
        </a>
        {/* END MOBILE SIDEBAR TOGGLE */}
        <div className="">
          <div className="brand inline  m-l-10 ">
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
      {/* END HEADER */}



      
      {/* START PAGE CONTENT WRAPPER */}
      <div className="page-content-wrapper ">
        {/* START PAGE CONTENT */}
        <div className="content ">
          {/* MODAL STICK UP  */}
          <div className="modal fade stick-up" id="addNewAppModal" tabindex="-1" role="dialog" aria-labelledby="addNewAppModal" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header clearfix ">
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><i className="pg-close fs-14"></i>
                  </button>
                  <h4 className="p-b-5"><span className="semi-bold">New</span> App</h4>
                </div>
                <div className="modal-body">
                  <p className="small-text">Create a new app using this form, make sure you fill them all</p>
                  <form role="form">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group form-group-default">
                          <label>name</label>
                          <input id="appName" type="text" className="form-control" placeholder="Name of your app"/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group form-group-default">
                          <label>Description</label>
                          <input id="appDescription" type="text" className="form-control" placeholder="Tell us more about it"/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group form-group-default">
                          <label>Price</label>
                          <input id="appPrice" type="text" className="form-control" placeholder="your price"/>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group form-group-default">
                          <label>Notes</label>
                          <input id="appNotes" type="text" className="form-control" placeholder="a note"/>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button id="add-app" type="button" className="btn btn-primary  btn-cons">Add</button>
                  <button type="button" className="btn btn-cons" data-dismiss="modal">Close</button>
                </div>
              </div>
              {/* /.modal-content */}
            </div>
            {/* /.modal-dialog */}
          </div>

          {/* START JUMBOTRON */}
          <div className="jumbotron" data-pages="parallax">
            <div className=" container-fluid   container-fixed-lg sm-p-l-0 sm-p-r-0">
              <div className="inner">
                {/* START BREADCRUMB */}
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Data Tables</li>
                </ol>
                {/* END BREADCRUMB */}
                <div className="row">
                  <div className="col-xl-7 col-lg-6 ">
                    {/* START card */}
                    <div className="full-height">
                      <div className="card-body text-center">
                        <img className="image-responsive-height demo-mw-600" src="assets/img/demo/tables.jpg" alt=""/>
                      </div>
                    </div>
                    {/* END card */}
                  </div>
                  <div className="col-xl-5 col-lg-6 ">
                    {/* START card */}
                    <div className="card card-transparent">
                      <div className="card-header ">
                        <div className="card-title">Getting started
                        </div>
                      </div>
                      <div className="card-body">
                        <h3>Easier than finding a needle in the haystack.</h3>
                        <p>Sharing the same stylized design layout, these tables allows for the effective compilation and organization of data with easy access and maneuverability for users. </p>
                        <p className="small hint-text m-t-5">VIA senior product manage
                          <br></br> for UI/UX at REVOX</p>
                        <br></br>
                        <button className="btn btn-primary btn-cons">More</button>
                      </div>
                    </div>
                    {/* END card */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END JUMBOTRON */}
          {/* START CONTAINER FLUID */}
          <div className=" container-fluid   container-fixed-lg bg-white">
            {/* START card */}
            <div className="card card-transparent">
              <div className="card-header ">
                <div className="card-title">Pages Default Tables Style
                </div>
                <div className="pull-right">
                  <div className="col-xs-12">
                    <input type="text" id="search-table" className="form-control pull-right" placeholder="Search"/>
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="card-body">
                <table className="table table-hover demo-table-search table-responsive-block" id="tableWithSearch">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Places</th>
                      <th>Activities</th>
                      <th>Status</th>
                      <th>Last Update</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="v-align-middle semi-bold">
                        <p>First Tour</p>
                      </td>
                      <td className="v-align-middle"><a href="#" className="btn btn-tag">United States</a><a href="#" className="btn btn-tag">India</a>
                        <a href="#" className="btn btn-tag">China</a><a href="#" className="btn btn-tag">Africa</a>
                      </td>
                      <td className="v-align-middle">
                        <p>it is more then ONE nation/nationality as its fall name is The United Kingdom of Great Britain and North Ireland..</p>
                      </td>
                      <td className="v-align-middle">
                        <p>Public</p>
                      </td>
                      <td className="v-align-middle">
                        <p>April 13,2014 10:13</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="v-align-middle semi-bold">
                        <p>Among the children</p>
                      </td>
                      <td className="v-align-middle"><a href="#" className="btn btn-tag">United States</a><a href="#" className="btn btn-tag">India</a>
                        <a href="#" className="btn btn-tag">China</a><a href="#" className="btn btn-tag">Africa</a>
                      </td>
                      <td className="v-align-middle">
                        <p>you want English, Scottish, Welsh, Irish, British, European or UK even a British (name other original country you came form or have roots to E.G. A British Japanese or a 5th generation
                        </p>
                      </td>
                      <td className="v-align-middle">
                        <p>Public</p>
                      </td>
                      <td className="v-align-middle">
                        <p>April 13,2014 10:13</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="v-align-middle semi-bold">
                        <p>A day to remember</p>
                      </td>
                      <td className="v-align-middle"><a href="#" className="btn btn-tag">United States</a><a href="#" className="btn btn-tag">India</a>
                        <a href="#" className="btn btn-tag">China</a><a href="#" className="btn btn-tag">Africa</a>
                      </td>
                      <td className="v-align-middle">
                        <p>UK was on top of the art world 18-19 century had the best food, best cloths and best entertainment back then) it was a hyper nation</p>
                      </td>
                      <td className="v-align-middle">
                        <p>Public</p>
                      </td>
                      <td className="v-align-middle">
                        <p>April 13,2014 10:13</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="v-align-middle semi-bold">
                        <p>Life’s sadness shared</p>
                      </td>
                      <td className="v-align-middle"><a href="#" className="btn btn-tag">United States</a><a href="#" className="btn btn-tag">India</a>
                        <a href="#" className="btn btn-tag">China</a><a href="#" className="btn btn-tag">Africa</a>
                      </td>
                      <td className="v-align-middle">
                        <p>he world speaks English. Common law, Magna Carta and the Bill of Rights are its wonderful legacy
                        </p>
                      </td>
                      <td className="v-align-middle">
                        <p>Public</p>
                      </td>
                      <td className="v-align-middle">
                        <p>April 13,2014 10:13</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="v-align-middle semi-bold">
                        <p>First Tour</p>
                      </td>
                      <td className="v-align-middle"><a href="#" className="btn btn-tag">United States</a><a href="#" className="btn btn-tag">India</a>
                        <a href="#" className="btn btn-tag">China</a><a href="#" className="btn btn-tag">Africa</a>
                      </td>
                      <td className="v-align-middle">
                        <p>it is more then ONE nation/nationality as its fall name is The United Kingdom of Great Britain and North Ireland..</p>
                      </td>
                      <td className="v-align-middle">
                        <p>Public</p>
                      </td>
                      <td className="v-align-middle">
                        <p>April 13,2014 10:13</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="v-align-middle semi-bold">
                        <p>First Tour</p>
                      </td>
                      <td className="v-align-middle"><a href="#" className="btn btn-tag">United States</a><a href="#" className="btn btn-tag">India</a>
                        <a href="#" className="btn btn-tag">China</a><a href="#" className="btn btn-tag">Africa</a>
                      </td>
                      <td className="v-align-middle">
                        <p>it is more then ONE nation/nationality as its fall name is The United Kingdom of Great Britain and North Ireland..</p>
                      </td>
                      <td className="v-align-middle">
                        <p>Public</p>
                      </td>
                      <td className="v-align-middle">
                        <p>April 13,2014 10:13</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="v-align-middle semi-bold">
                        <p>First Tour</p>
                      </td>
                      <td className="v-align-middle"><a href="#" className="btn btn-tag">United States</a><a href="#" className="btn btn-tag">India</a>
                        <a href="#" className="btn btn-tag">China</a><a href="#" className="btn btn-tag">Africa</a>
                      </td>
                      <td className="v-align-middle">
                        <p>it is more then ONE nation/nationality as its fall name is The United Kingdom of Great Britain and North Ireland..</p>
                      </td>
                      <td className="v-align-middle">
                        <p>Public</p>
                      </td>
                      <td className="v-align-middle">
                        <p>April 13,2014 10:13</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="v-align-middle semi-bold">
                        <p>First Tour</p>
                      </td>
                      <td className="v-align-middle"><a href="#" className="btn btn-tag">United States</a><a href="#" className="btn btn-tag">India</a>
                        <a href="#" className="btn btn-tag">China</a><a href="#" className="btn btn-tag">Africa</a>
                      </td>
                      <td className="v-align-middle">
                        <p>it is more then ONE nation/nationality as its fall name is The United Kingdom of Great Britain and North Ireland..</p>
                      </td>
                      <td className="v-align-middle">
                        <p>Public</p>
                      </td>
                      <td className="v-align-middle">
                        <p>April 13,2014 10:13</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="v-align-middle semi-bold">
                        <p>First Tour</p>
                      </td>
                      <td className="v-align-middle"><a href="#" className="btn btn-tag">United States</a><a href="#" className="btn btn-tag">India</a>
                        <a href="#" className="btn btn-tag">China</a><a href="#" className="btn btn-tag">Africa</a>
                      </td>
                      <td className="v-align-middle">
                        <p>it is more then ONE nation/nationality as its fall name is The United Kingdom of Great Britain and North Ireland..</p>
                      </td>
                      <td className="v-align-middle">
                        <p>Public</p>
                      </td>
                      <td className="v-align-middle">
                        <p>April 13,2014 10:13</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="v-align-middle semi-bold">
                        <p>First Tour</p>
                      </td>
                      <td className="v-align-middle"><a href="#" className="btn btn-tag">United States</a><a href="#" className="btn btn-tag">India</a>
                        <a href="#" className="btn btn-tag">China</a><a href="#" className="btn btn-tag">Africa</a>
                      </td>
                      <td className="v-align-middle">
                        <p>it is more then ONE nation/nationality as its fall name is The United Kingdom of Great Britain and North Ireland..</p>
                      </td>
                      <td className="v-align-middle">
                        <p>Public</p>
                      </td>
                      <td className="v-align-middle">
                        <p>April 13,2014 10:13</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="v-align-middle semi-bold">
                        <p>First Tour</p>
                      </td>
                      <td className="v-align-middle"><a href="#" className="btn btn-tag">United States</a><a href="#" className="btn btn-tag">India</a>
                        <a href="#" className="btn btn-tag">China</a><a href="#" className="btn btn-tag">Africa</a>
                      </td>
                      <td className="v-align-middle">
                        <p>it is more then ONE nation/nationality as its fall name is The United Kingdom of Great Britain and North Ireland..</p>
                      </td>
                      <td className="v-align-middle">
                        <p>Public</p>
                      </td>
                      <td className="v-align-middle">
                        <p>April 13,2014 10:13</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="v-align-middle semi-bold">
                        <p>First Tour</p>
                      </td>
                      <td className="v-align-middle"><a href="#" className="btn btn-tag">United States</a><a href="#" className="btn btn-tag">India</a>
                        <a href="#" className="btn btn-tag">China</a><a href="#" className="btn btn-tag">Africa</a>
                      </td>
                      <td className="v-align-middle">
                        <p>it is more then ONE nation/nationality as its fall name is The United Kingdom of Great Britain and North Ireland..</p>
                      </td>
                      <td className="v-align-middle">
                        <p>Public</p>
                      </td>
                      <td className="v-align-middle">
                        <p>April 13,2014 10:13</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* END card */}
          </div>
          {/* END CONTAINER FLUID */}
          {/* START CONTAINER FLUID */}
          <div className=" container-fluid   container-fixed-lg">
            {/* START card */}
            <div className="card card-transparent">
              <div className="card-header ">
                <div className="card-title">Table with Dynamic Rows
                </div>
                <div className="pull-right">
                  <div className="col-xs-12">
                    <button id="show-modal" className="btn btn-primary btn-cons"><i className="fa fa-plus"></i> Add row
                    </button>
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="card-body">
                <table className="table table-hover demo-table-dynamic table-responsive-block" id="tableWithDynamicRows">
                  <thead>
                    <tr>
                      <th>App name</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="v-align-middle">
                        <p>Hyperlapse</p>
                      </td>
                      <td className="v-align-middle">
                        <p>Description goes here</p>
                      </td>
                      <td className="v-align-middle">
                        <p>FREE</p>
                      </td>
                      <td className="v-align-middle">
                        <p>Notes go here</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="v-align-middle">
                        <p>Facebook</p>
                      </td>
                      <td className="v-align-middle">
                        <p>Description goes here</p>
                      </td>
                      <td className="v-align-middle">
                        <p>FREE</p>
                      </td>
                      <td className="v-align-middle">
                        <p>Notes go here</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="v-align-middle">
                        <p>Twitter</p>
                      </td>
                      <td className="v-align-middle">
                        <p>Description goes here</p>
                      </td>
                      <td className="v-align-middle">
                        <p>FREE</p>
                      </td>
                      <td className="v-align-middle">
                        <p>Notes go here</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="v-align-middle">
                        <p>Foursquare</p>
                      </td>
                      <td className="v-align-middle">
                        <p>Description goes here</p>
                      </td>
                      <td className="v-align-middle">
                        <p>FREE</p>
                      </td>
                      <td className="v-align-middle">
                        <p>Notes go here</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="v-align-middle">
                        <p>Angry Birds</p>
                      </td>
                      <td className="v-align-middle">
                        <p>Description goes here</p>
                      </td>
                      <td className="v-align-middle">
                        <p>FREE</p>
                      </td>
                      <td className="v-align-middle">
                        <p>Notes go here</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* END card */}
          </div>
          {/* END CONTAINER FLUID */}
          {/* START CONTAINER FLUID */}
          <div className=" container-fluid   container-fixed-lg bg-white">
            {/* START card */}
            <div className="card card-transparent">
              <div className="card-header  d-flex justify-content-between">
                <div className="card-title">Table with export options
                </div>
                <div className="export-options-container"></div>
                {/* <div className="clearfix"></div> */}
              </div>
              <div className="card-body">
                <table className="table table-striped" id="tableWithExportOptions">
                  <thead>
                    <tr>
                      <th>Rendering engine</th>
                      <th>Browser</th>
                      <th>Platform(s)</th>
                      <th>Engine version</th>
                      <th>CSS grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="odd gradeX">
                      <td>Trident</td>
                      <td>Internet Explorer 4.0</td>
                      <td>Win 95+</td>
                      <td className="center"> 4</td>
                      <td className="center">X</td>
                    </tr>
                    <tr className="even gradeC">
                      <td>Trident</td>
                      <td>Internet Explorer 5.0</td>
                      <td>Win 95+</td>
                      <td className="center">5</td>
                      <td className="center">C</td>
                    </tr>
                    <tr className="odd gradeA">
                      <td>Trident</td>
                      <td>Internet Explorer 5.5</td>
                      <td>Win 95+</td>
                      <td className="center">5.5</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="even gradeA">
                      <td>Trident</td>
                      <td>Internet Explorer 6</td>
                      <td>Win 98+</td>
                      <td className="center">6</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="odd gradeA">
                      <td>Trident</td>
                      <td>Internet Explorer 7</td>
                      <td>Win XP SP2+</td>
                      <td className="center">7</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="even gradeA">
                      <td>Trident</td>
                      <td>AOL browser (AOL desktop)</td>
                      <td>Win XP</td>
                      <td className="center">6</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Gecko</td>
                      <td>Firefox 1.0</td>
                      <td>Win 98+ / OSX.2+</td>
                      <td className="center">1.7</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Gecko</td>
                      <td>Firefox 1.5</td>
                      <td>Win 98+ / OSX.2+</td>
                      <td className="center">1.8</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Gecko</td>
                      <td>Firefox 2.0</td>
                      <td>Win 98+ / OSX.2+</td>
                      <td className="center">1.8</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Gecko</td>
                      <td>Firefox 3.0</td>
                      <td>Win 2k+ / OSX.3+</td>
                      <td className="center">1.9</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Gecko</td>
                      <td>Camino 1.0</td>
                      <td>OSX.2+</td>
                      <td className="center">1.8</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Gecko</td>
                      <td>Camino 1.5</td>
                      <td>OSX.3+</td>
                      <td className="center">1.8</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Gecko</td>
                      <td>Netscape 7.2</td>
                      <td>Win 95+ / Mac OS 8.6-9.2</td>
                      <td className="center">1.7</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Gecko</td>
                      <td>Netscape Browser 8</td>
                      <td>Win 98SE+</td>
                      <td className="center">1.7</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Gecko</td>
                      <td>Netscape Navigator 9</td>
                      <td>Win 98+ / OSX.2+</td>
                      <td className="center">1.8</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Gecko</td>
                      <td>Mozilla 1.0</td>
                      <td>Win 95+ / OSX.1+</td>
                      <td className="center">1</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Gecko</td>
                      <td>Mozilla 1.1</td>
                      <td>Win 95+ / OSX.1+</td>
                      <td className="center">1.1</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Gecko</td>
                      <td>Mozilla 1.2</td>
                      <td>Win 95+ / OSX.1+</td>
                      <td className="center">1.2</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Gecko</td>
                      <td>Mozilla 1.3</td>
                      <td>Win 95+ / OSX.1+</td>
                      <td className="center">1.3</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Gecko</td>
                      <td>Mozilla 1.4</td>
                      <td>Win 95+ / OSX.1+</td>
                      <td className="center">1.4</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Gecko</td>
                      <td>Mozilla 1.5</td>
                      <td>Win 95+ / OSX.1+</td>
                      <td className="center">1.5</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Gecko</td>
                      <td>Mozilla 1.6</td>
                      <td>Win 95+ / OSX.1+</td>
                      <td className="center">1.6</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Gecko</td>
                      <td>Mozilla 1.7</td>
                      <td>Win 98+ / OSX.1+</td>
                      <td className="center">1.7</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Gecko</td>
                      <td>Mozilla 1.8</td>
                      <td>Win 98+ / OSX.1+</td>
                      <td className="center">1.8</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Gecko</td>
                      <td>Seamonkey 1.1</td>
                      <td>Win 98+ / OSX.2+</td>
                      <td className="center">1.8</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Gecko</td>
                      <td>Epiphany 2.20</td>
                      <td>Gnome</td>
                      <td className="center">1.8</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Webkit</td>
                      <td>Safari 1.2</td>
                      <td>OSX.3</td>
                      <td className="center">125.5</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Webkit</td>
                      <td>Safari 1.3</td>
                      <td>OSX.3</td>
                      <td className="center">312.8</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Webkit</td>
                      <td>Safari 2.0</td>
                      <td>OSX.4+</td>
                      <td className="center">419.3</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Webkit</td>
                      <td>Safari 3.0</td>
                      <td>OSX.4+</td>
                      <td className="center">522.1</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Webkit</td>
                      <td>OmniWeb 5.5</td>
                      <td>OSX.4+</td>
                      <td className="center">420</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Webkit</td>
                      <td>iPod Touch / iPhone</td>
                      <td>iPod</td>
                      <td className="center">420.1</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Webkit</td>
                      <td>S60</td>
                      <td>S60</td>
                      <td className="center">413</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Presto</td>
                      <td>Opera 7.0</td>
                      <td>Win 95+ / OSX.1+</td>
                      <td className="center">-</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Presto</td>
                      <td>Opera 7.5</td>
                      <td>Win 95+ / OSX.2+</td>
                      <td className="center">-</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Presto</td>
                      <td>Opera 8.0</td>
                      <td>Win 95+ / OSX.2+</td>
                      <td className="center">-</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Presto</td>
                      <td>Opera 8.5</td>
                      <td>Win 95+ / OSX.2+</td>
                      <td className="center">-</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Presto</td>
                      <td>Opera 9.0</td>
                      <td>Win 95+ / OSX.3+</td>
                      <td className="center">-</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Presto</td>
                      <td>Opera 9.2</td>
                      <td>Win 88+ / OSX.3+</td>
                      <td className="center">-</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Presto</td>
                      <td>Opera 9.5</td>
                      <td>Win 88+ / OSX.3+</td>
                      <td className="center">-</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Presto</td>
                      <td>Opera for Wii</td>
                      <td>Wii</td>
                      <td className="center">-</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Presto</td>
                      <td>Nokia N800</td>
                      <td>N800</td>
                      <td className="center">-</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Presto</td>
                      <td>Nintendo DS browser</td>
                      <td>Nintendo DS</td>
                      <td className="center">8.5</td>
                      <td className="center">C/A<sup>1</sup>
                      </td>
                    </tr>
                    <tr className="gradeC">
                      <td>KHTML</td>
                      <td>Konqureror 3.1</td>
                      <td>KDE 3.1</td>
                      <td className="center">3.1</td>
                      <td className="center">C</td>
                    </tr>
                    <tr className="gradeA">
                      <td>KHTML</td>
                      <td>Konqureror 3.3</td>
                      <td>KDE 3.3</td>
                      <td className="center">3.3</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeA">
                      <td>KHTML</td>
                      <td>Konqureror 3.5</td>
                      <td>KDE 3.5</td>
                      <td className="center">3.5</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeX">
                      <td>Tasman</td>
                      <td>Internet Explorer 4.5</td>
                      <td>Mac OS 8-9</td>
                      <td className="center">-</td>
                      <td className="center">X</td>
                    </tr>
                    <tr className="gradeC">
                      <td>Tasman</td>
                      <td>Internet Explorer 5.1</td>
                      <td>Mac OS 7.6-9</td>
                      <td className="center">1</td>
                      <td className="center">C</td>
                    </tr>
                    <tr className="gradeC">
                      <td>Tasman</td>
                      <td>Internet Explorer 5.2</td>
                      <td>Mac OS 8-X</td>
                      <td className="center">1</td>
                      <td className="center">C</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Misc</td>
                      <td>NetFront 3.1</td>
                      <td>Embedded devices</td>
                      <td className="center">-</td>
                      <td className="center">C</td>
                    </tr>
                    <tr className="gradeA">
                      <td>Misc</td>
                      <td>NetFront 3.4</td>
                      <td>Embedded devices</td>
                      <td className="center">-</td>
                      <td className="center">A</td>
                    </tr>
                    <tr className="gradeX">
                      <td>Misc</td>
                      <td>Dillo 0.8</td>
                      <td>Embedded devices</td>
                      <td className="center">-</td>
                      <td className="center">X</td>
                    </tr>
                    <tr className="gradeX">
                      <td>Misc</td>
                      <td>Links</td>
                      <td>Text only</td>
                      <td className="center">-</td>
                      <td className="center">X</td>
                    </tr>
                    <tr className="gradeX">
                      <td>Misc</td>
                      <td>Lynx</td>
                      <td>Text only</td>
                      <td className="center">-</td>
                      <td className="center">X</td>
                    </tr>
                    <tr className="gradeC">
                      <td>Misc</td>
                      <td>IE Mobile</td>
                      <td>Windows Mobile 6</td>
                      <td className="center">-</td>
                      <td className="center">C</td>
                    </tr>
                    <tr className="gradeC">
                      <td>Misc</td>
                      <td>PSP browser</td>
                      <td>PSP</td>
                      <td className="center">-</td>
                      <td className="center">C</td>
                    </tr>
                    <tr className="gradeU">
                      <td>Other browsers</td>
                      <td>All others</td>
                      <td>-</td>
                      <td className="center">-</td>
                      <td className="center">U</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* END card */}
          </div>
          {/* END CONTAINER FLUID */}
        </div>
        {/* END PAGE CONTENT */}
        {/* START COPYRIGHT */}
        {/* START CONTAINER FLUID */}
        {/* START CONTAINER FLUID */}
        <div className=" container-fluid  container-fixed-lg footer">
          <div className="copyright sm-text-center">
            <p className="small no-margin pull-left sm-pull-reset">
              <span className="hint-text">Copyright &copy; 2017 </span>
              <span className="font-montserrat">REVOX</span>.
              <span className="hint-text">All rights reserved. </span>
              <span className="sm-block"><a href="#" className="m-l-10 m-r-10">Terms of use</a> <span className="muted">|</span> <a href="#" className="m-l-10">Privacy Policy</a></span>
            </p>
            <p className="small no-margin pull-right sm-pull-reset">
              Hand-crafted <span className="hint-text">&amp; made with Love</span>
            </p>
            <div className="clearfix"></div>
          </div>
        </div>
        {/* END COPYRIGHT */}
      </div>
      {/* END PAGE CONTENT WRAPPER */}
    </div>
    {/* END PAGE CONTAINER */}
    {/*START QUICKVIEW */}
    <div id="quickview" className="quickview-wrapper" data-pages="quickview">
      {/* Nav tabs */}
      <ul className="nav nav-tabs" role="tablist">
        <li className="">
          <a href="#quickview-notes" data-target="#quickview-notes" data-toggle="tab" role="tab">Notes</a>
        </li>
        <li>
          <a href="#quickview-alerts" data-target="#quickview-alerts" data-toggle="tab" role="tab">Alerts</a>
        </li>
        <li className="">
          <a className="active" href="#quickview-chat" data-toggle="tab" role="tab">Chat</a>
        </li>
      </ul>
      <a className="btn-link quickview-toggle" data-toggle-element="#quickview" data-toggle="quickview"><i className="pg-close"></i></a>
      {/* Tab panes */}
      <div className="tab-content">
        {/* BEGIN Notes !*/}
        <div className="tab-pane no-padding" id="quickview-notes">
          <div className="view-port clearfix quickview-notes" id="note-views">
            {/* BEGIN Note List !*/}
            <div className="view list" id="quick-note-list">
              <div className="toolbar clearfix">
                <ul className="pull-right ">
                  <li>
                    <a href="#" className="delete-note-link"><i className="fa fa-trash-o"></i></a>
                  </li>
                  <li>
                    <a href="#" className="new-note-link" data-navigate="view" data-view-port="#note-views" data-view-animation="push"><i className="fa fa-plus"></i></a>
                  </li>
                </ul>
                <button className="btn-remove-notes btn btn-xs btn-block hide"><i className="fa fa-times"></i> Delete</button>
              </div>
              <ul>
                {/* BEGIN Note Item !*/}
                <li data-noteid="1">
                  <div className="left">
                    {/* BEGIN Note Action !*/}
                    <div className="checkbox check-warning no-margin">
                      <input id="qncheckbox1" type="checkbox" value="1"/>
                      <label for="qncheckbox1"></label>
                    </div>
                    {/* END Note Action !*/}
                    {/* BEGIN Note Preview Text !*/}
                    <p className="note-preview">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    {/* BEGIN Note Preview Text !*/}
                  </div>
                  {/* BEGIN Note Details !*/}
                  <div className="right pull-right">
                    {/* BEGIN Note Date !*/}
                    <span className="date">12/12/14</span>
                    <a href="#" data-navigate="view" data-view-port="#note-views" data-view-animation="push"><i className="fa fa-chevron-right"></i></a>
                    {/* END Note Date !*/}
                  </div>
                  {/* END Note Details !*/}
                </li>
                {/* END Note List !*/}
                {/* BEGIN Note Item !*/}
                <li data-noteid="2">
                  <div className="left">
                    {/* BEGIN Note Action !*/}
                    <div className="checkbox check-warning no-margin">
                      <input id="qncheckbox2" type="checkbox" value="1"/>
                      <label for="qncheckbox2"></label>
                    </div>
                    {/* END Note Action !*/}
                    {/* BEGIN Note Preview Text !*/}
                    <p className="note-preview">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    {/* BEGIN Note Preview Text !*/}
                  </div>
                  {/* BEGIN Note Details !*/}
                  <div className="right pull-right">
                    {/* BEGIN Note Date !*/}
                    <span className="date">12/12/14</span>
                    <a href="#"><i className="fa fa-chevron-right"></i></a>
                    {/* END Note Date !*/}
                  </div>
                  {/* END Note Details !*/}
                </li>
                {/* END Note List !*/}
                {/* BEGIN Note Item !*/}
                <li data-noteid="2">
                  <div className="left">
                    {/* BEGIN Note Action !*/}
                    <div className="checkbox check-warning no-margin">
                      <input id="qncheckbox3" type="checkbox" value="1"/>
                      <label for="qncheckbox3"></label>
                    </div>
                    {/* END Note Action !*/}
                    {/* BEGIN Note Preview Text !*/}
                    <p className="note-preview">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    {/* BEGIN Note Preview Text !*/}
                  </div>
                  {/* BEGIN Note Details !*/}
                  <div className="right pull-right">
                    {/* BEGIN Note Date !*/}
                    <span className="date">12/12/14</span>
                    <a href="#"><i className="fa fa-chevron-right"></i></a>
                    {/* END Note Date !*/}
                  </div>
                  {/* END Note Details !*/}
                </li>
                {/* END Note List !*/}
                {/* BEGIN Note Item !*/}
                <li data-noteid="3">
                  <div className="left">
                    {/* BEGIN Note Action !*/}
                    <div className="checkbox check-warning no-margin">
                      <input id="qncheckbox4" type="checkbox" value="1"/>
                      <label for="qncheckbox4"></label>
                    </div>
                    {/* END Note Action !*/}
                    {/* BEGIN Note Preview Text !*/}
                    <p className="note-preview">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    {/* BEGIN Note Preview Text !*/}
                  </div>
                  {/* BEGIN Note Details !*/}
                  <div className="right pull-right">
                    {/* BEGIN Note Date !*/}
                    <span className="date">12/12/14</span>
                    <a href="#"><i className="fa fa-chevron-right"></i></a>
                    {/* END Note Date !*/}
                  </div>
                  {/* END Note Details !*/}
                </li>
                {/* END Note List !*/}
                {/* BEGIN Note Item !*/}
                <li data-noteid="4">
                  <div className="left">
                    {/* BEGIN Note Action !*/}
                    <div className="checkbox check-warning no-margin">
                      <input id="qncheckbox5" type="checkbox" value="1"/>
                      <label for="qncheckbox5"></label>
                    </div>
                    {/* END Note Action !*/}
                    {/* BEGIN Note Preview Text !*/}
                    <p className="note-preview">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    {/* BEGIN Note Preview Text !*/}
                  </div>
                  {/* BEGIN Note Details !*/}
                  <div className="right pull-right">
                    {/* BEGIN Note Date !*/}
                    <span className="date">12/12/14</span>
                    <a href="#"><i className="fa fa-chevron-right"></i></a>
                    {/* END Note Date !*/}
                  </div>
                  {/* END Note Details !*/}
                </li>
                {/* END Note List !*/}
              </ul>
            </div>
            {/* END Note List !*/}
            <div className="view note" id="quick-note">
              <div>
                <ul className="toolbar">
                  <li><a href="#" className="close-note-link"><i className="pg-arrow_left"></i></a>
                  </li>
                  <li><a href="#" data-action="Bold" className="fs-12"><i className="fa fa-bold"></i></a>
                  </li>
                  <li><a href="#" data-action="Italic" className="fs-12"><i className="fa fa-italic"></i></a>
                  </li>
                  <li><a href="#" className="fs-12"><i className="fa fa-link"></i></a>
                  </li>
                </ul>
                <div className="body">
                  <div>
                    <div className="top">
                      <span>21st april 2014 2:13am</span>
                    </div>
                    <div className="content">
                      <div className="quick-note-editor full-width full-height js-input" contenteditable="true"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END Notes !*/}
        {/* BEGIN Alerts !*/}
        <div className="tab-pane no-padding" id="quickview-alerts">
          <div className="view-port clearfix" id="alerts">
            {/* BEGIN Alerts View !*/}
            <div className="view bg-white">
              {/* BEGIN View Header !*/}
              <div className="navbar navbar-default navbar-sm">
                <div className="navbar-inner">
                  {/* BEGIN Header Controler !*/}
                  <a href="javascript:;" className="inline action p-l-10 link text-master" data-navigate="view" data-view-port="#chat" data-view-animation="push-parrallax">
                    <i className="pg-more"></i>
                  </a>
                  {/* END Header Controler !*/}
                  <div className="view-heading">
                    Notications
                  </div>
                  {/* BEGIN Header Controler !*/}
                  <a href="#" className="inline action p-r-10 pull-right link text-master">
                    <i className="pg-search"></i>
                  </a>
                  {/* END Header Controler !*/}
                </div>
              </div>
              {/* END View Header !*/}
              {/* BEGIN Alert List !*/}
              <div data-init-list-view="ioslist" className="list-view boreded no-top-border">
                {/* BEGIN List Group !*/}
                <div className="list-view-group-container">
                  {/* BEGIN List Group Header!*/}
                  <div className="list-view-group-header text-uppercase">
                    Calendar
                  </div>
                  {/* END List Group Header!*/}
                  <ul>
                    {/* BEGIN List Group Item!*/}
                    <li className="alert-list">
                      {/* BEGIN Alert Item Set Animation using data-view-animation !*/}
                      <a href="javascript:;" className="align-items-center" data-navigate="view" data-view-port="#chat" data-view-animation="push-parrallax">
                        <p className="">
                          <span className="text-warning fs-10"><i className="fa fa-circle"></i></span>
                        </p>
                        <p className="p-l-10 overflow-ellipsis fs-12">
                          <span className="text-master">David Nester Birthday</span>
                        </p>
                        <p className="p-r-10 ml-auto fs-12 text-right">
                          <span className="text-warning">Today <br></br></span>
                          <span className="text-master">All Day</span>
                        </p>
                      </a>
                      {/* END Alert Item!*/}
                      {/* BEGIN List Group Item!*/}
                    </li>
                    {/* END List Group Item!*/}
                    {/* BEGIN List Group Item!*/}
                    <li className="alert-list">
                      {/* BEGIN Alert Item Set Animation using data-view-animation !*/}
                      <a href="#" className="align-items-center" data-navigate="view" data-view-port="#chat" data-view-animation="push-parrallax">
                        <p className="">
                          <span className="text-warning fs-10"><i className="fa fa-circle"></i></span>
                        </p>
                        <p className="p-l-10 overflow-ellipsis fs-12">
                          <span className="text-master">Meeting at 2:30</span>
                        </p>
                        <p className="p-r-10 ml-auto fs-12 text-right">
                          <span className="text-warning">Today</span>
                        </p>
                      </a>
                      {/* END Alert Item!*/}
                    </li>
                    {/* END List Group Item!*/}
                  </ul>
                </div>
                {/* END List Group !*/}
                <div className="list-view-group-container">
                  {/* BEGIN List Group Header!*/}
                  <div className="list-view-group-header text-uppercase">
                    Social
                  </div>
                  {/* END List Group Header!*/}
                  <ul>
                    {/* BEGIN List Group Item!*/}
                    <li className="alert-list">
                      {/* BEGIN Alert Item Set Animation using data-view-animation !*/}
                      <a href="javascript:;" className="p-t-10 p-b-10 align-items-center" data-navigate="view" data-view-port="#chat" data-view-animation="push-parrallax">
                        <p className="">
                          <span className="text-complete fs-10"><i className="fa fa-circle"></i></span>
                        </p>
                        <p className="col overflow-ellipsis fs-12 p-l-10">
                          <span className="text-master link">Jame Smith commented on your status<br></br></span>
                          <span className="text-master">“Perfection Simplified - Company Revox"</span>
                        </p>
                      </a>
                      {/* END Alert Item!*/}
                    </li>
                    {/* END List Group Item!*/}
                    {/* BEGIN List Group Item!*/}
                    <li className="alert-list">
                      {/* BEGIN Alert Item Set Animation using data-view-animation !*/}
                      <a href="javascript:;" className="p-t-10 p-b-10 align-items-center" data-navigate="view" data-view-port="#chat" data-view-animation="push-parrallax">
                        <p className="">
                          <span className="text-complete fs-10"><i className="fa fa-circle"></i></span>
                        </p>
                        <p className="col overflow-ellipsis fs-12 p-l-10">
                          <span className="text-master link">Jame Smith commented on your status<br></br></span>
                          <span className="text-master">“Perfection Simplified - Company Revox"</span>
                        </p>
                      </a>
                      {/* END Alert Item!*/}
                    </li>
                    {/* END List Group Item!*/}
                  </ul>
                </div>
                <div className="list-view-group-container">
                  {/* BEGIN List Group Header!*/}
                  <div className="list-view-group-header text-uppercase">
                    Sever Status
                  </div>
                  {/* END List Group Header!*/}
                  <ul>
                    {/* BEGIN List Group Item!*/}
                    <li className="alert-list">
                      {/* BEGIN Alert Item Set Animation using data-view-animation !*/}
                      <a href="#" className="p-t-10 p-b-10 align-items-center" data-navigate="view" data-view-port="#chat" data-view-animation="push-parrallax">
                        <p className="">
                          <span className="text-danger fs-10"><i className="fa fa-circle"></i></span>
                        </p>
                        <p className="col overflow-ellipsis fs-12 p-l-10">
                          <span className="text-master link">12:13AM GTM, 10230, ID:WR174s<br></br></span>
                          <span className="text-master">Server Load Exceeted. Take action</span>
                        </p>
                      </a>
                      {/* END Alert Item!*/}
                    </li>
                    {/* END List Group Item!*/}
                  </ul>
                </div>
              </div>
              {/* END Alert List !*/}
            </div>
            {/* EEND Alerts View !*/}
          </div>
        </div>
        {/* END Alerts !*/}
        <div className="tab-pane active no-padding" id="quickview-chat">
          <div className="view-port clearfix" id="chat">
            <div className="view bg-white">
              {/* BEGIN View Header !*/}
              <div className="navbar navbar-default">
                <div className="navbar-inner">
                  {/* BEGIN Header Controler !*/}
                  <a href="javascript:;" className="inline action p-l-10 link text-master" data-navigate="view" data-view-port="#chat" data-view-animation="push-parrallax">
                    <i className="pg-plus"></i>
                  </a>
                  {/* END Header Controler !*/}
                  <div className="view-heading">
                    Chat List
                    <div className="fs-11">Show All</div>
                  </div>
                  {/* BEGIN Header Controler !*/}
                  <a href="#" className="inline action p-r-10 pull-right link text-master">
                    <i className="pg-more"></i>
                  </a>
                  {/* END Header Controler !*/}
                </div>
              </div>
              {/* END View Header !*/}
              <div data-init-list-view="ioslist" className="list-view boreded no-top-border">
                <div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">
                    a</div>
                  <ul>
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/1x.jpg" data-src="assets/img/profiles/1.jpg" src="assets/img/profiles/1x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">ava flores</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                  </ul>
                </div>
                <div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">b</div>
                  <ul>
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/2x.jpg" data-src="assets/img/profiles/2.jpg" src="assets/img/profiles/2x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">bella mccoy</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/3x.jpg" data-src="assets/img/profiles/3.jpg" src="assets/img/profiles/3x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">bob stephens</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                  </ul>
                </div>
                <div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">c</div>
                  <ul>
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/4x.jpg" data-src="assets/img/profiles/4.jpg" src="assets/img/profiles/4x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">carole roberts</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/5x.jpg" data-src="assets/img/profiles/5.jpg" src="assets/img/profiles/5x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">christopher perez</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                  </ul>
                </div>
                <div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">d</div>
                  <ul>
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/6x.jpg" data-src="assets/img/profiles/6.jpg" src="assets/img/profiles/6x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">danielle fletcher</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/7x.jpg" data-src="assets/img/profiles/7.jpg" src="assets/img/profiles/7x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">david sutton</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                  </ul>
                </div>
                <div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">e</div>
                  <ul>
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/8x.jpg" data-src="assets/img/profiles/8.jpg" src="assets/img/profiles/8x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">earl hamilton</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/9x.jpg" data-src="assets/img/profiles/9.jpg" src="assets/img/profiles/9x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">elaine lawrence</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/1x.jpg" data-src="assets/img/profiles/1.jpg" src="assets/img/profiles/1x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">ellen grant</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/2x.jpg" data-src="assets/img/profiles/2.jpg" src="assets/img/profiles/2x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">erik taylor</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/3x.jpg" data-src="assets/img/profiles/3.jpg" src="assets/img/profiles/3x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">everett wagner</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                  </ul>
                </div>
                <div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">f</div>
                  <ul>
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/4x.jpg" data-src="assets/img/profiles/4.jpg" src="assets/img/profiles/4x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">freddie gomez</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                  </ul>
                </div>
                <div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">g</div>
                  <ul>
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/5x.jpg" data-src="assets/img/profiles/5.jpg" src="assets/img/profiles/5x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">glen jensen</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/6x.jpg" data-src="assets/img/profiles/6.jpg" src="assets/img/profiles/6x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">gwendolyn walker</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                  </ul>
                </div>
                <div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">j</div>
                  <ul>
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/7x.jpg" data-src="assets/img/profiles/7.jpg" src="assets/img/profiles/7x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">janet romero</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                  </ul>
                </div>
                <div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">k</div>
                  <ul>
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/8x.jpg" data-src="assets/img/profiles/8.jpg" src="assets/img/profiles/8x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">kim martinez</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                  </ul>
                </div>
                <div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">l</div>
                  <ul>
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/9x.jpg" data-src="assets/img/profiles/9.jpg" src="assets/img/profiles/9x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">lawrence white</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/1x.jpg" data-src="assets/img/profiles/1.jpg" src="assets/img/profiles/1x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">leroy bell</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/2x.jpg" data-src="assets/img/profiles/2.jpg" src="assets/img/profiles/2x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">letitia carr</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/3x.jpg" data-src="assets/img/profiles/3.jpg" src="assets/img/profiles/3x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">lucy castro</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                  </ul>
                </div>
                <div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">m</div>
                  <ul>
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/4x.jpg" data-src="assets/img/profiles/4.jpg" src="assets/img/profiles/4x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">mae hayes</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/5x.jpg" data-src="assets/img/profiles/5.jpg" src="assets/img/profiles/5x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">marilyn owens</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/6x.jpg" data-src="assets/img/profiles/6.jpg" src="assets/img/profiles/6x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">marlene cole</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/7x.jpg" data-src="assets/img/profiles/7.jpg" src="assets/img/profiles/7x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">marsha warren</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/8x.jpg" data-src="assets/img/profiles/8.jpg" src="assets/img/profiles/8x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">marsha dean</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/9x.jpg" data-src="assets/img/profiles/9.jpg" src="assets/img/profiles/9x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">mia diaz</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                  </ul>
                </div>
                <div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">n</div>
                  <ul>
                    {/* BEGIN Chat User List Item  !*/}
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/1x.jpg" data-src="assets/img/profiles/1.jpg" src="assets/img/profiles/1x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">noah elliott</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                  </ul>
                </div>
                <div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">p</div>
                  <ul>
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/2x.jpg" data-src="assets/img/profiles/2.jpg" src="assets/img/profiles/2x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">phyllis hamilton</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                  </ul>
                </div>
                <div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">r</div>
                  <ul>
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/3x.jpg" data-src="assets/img/profiles/3.jpg" src="assets/img/profiles/3x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">raul rodriquez</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/4x.jpg" data-src="assets/img/profiles/4.jpg" src="assets/img/profiles/4x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">rhonda barnett</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/5x.jpg" data-src="assets/img/profiles/5.jpg" src="assets/img/profiles/5x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">roberta king</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                  </ul>
                </div>
                <div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">s</div>
                  <ul>
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/6x.jpg" data-src="assets/img/profiles/6.jpg" src="assets/img/profiles/6x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">scott armstrong</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/7x.jpg" data-src="assets/img/profiles/7.jpg" src="assets/img/profiles/7x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">sebastian austin</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/8x.jpg" data-src="assets/img/profiles/8.jpg" src="assets/img/profiles/8x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">sofia davis</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                  </ul>
                </div>
                <div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">t</div>
                  <ul>
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/9x.jpg" data-src="assets/img/profiles/9.jpg" src="assets/img/profiles/9x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">terrance young</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/1x.jpg" data-src="assets/img/profiles/1.jpg" src="assets/img/profiles/1x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">theodore woods</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/2x.jpg" data-src="assets/img/profiles/2.jpg" src="assets/img/profiles/2x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">todd wood</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/3x.jpg" data-src="assets/img/profiles/3.jpg" src="assets/img/profiles/3x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">tommy jenkins</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                  </ul>
                </div>
                <div className="list-view-group-container">
                  <div className="list-view-group-header text-uppercase">w</div>
                  <ul>
                    {/* BEGIN Chat User List Item  !*/}
                    <li className="chat-user-list clearfix">
                      <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                        <span className="thumbnail-wrapper d32 circular bg-success">
                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/4x.jpg" data-src="assets/img/profiles/4.jpg" src="assets/img/profiles/4x.jpg" className="col-top"/>
                        </span>
                        <p className="p-l-10 ">
                          <span className="text-master">wilma hicks</span>
                          <span className="block text-master hint-text fs-12">Hello there</span>
                        </p>
                      </a>
                    </li>
                    {/* END Chat User List Item  !*/}
                  </ul>
                </div>
              </div>
            </div>
            {/* BEGIN Conversation View  !*/}
            <div className="view chat-view bg-white clearfix">
              {/* BEGIN Header  !*/}
              <div className="navbar navbar-default">
                <div className="navbar-inner">
                  <a href="javascript:;" className="link text-master inline action p-l-10 p-r-10" data-navigate="view" data-view-port="#chat" data-view-animation="push-parrallax">
                    <i className="pg-arrow_left"></i>
                  </a>
                  <div className="view-heading">
                    John Smith
                    <div className="fs-11 hint-text">Online</div>
                  </div>
                  <a href="#" className="link text-master inline action p-r-10 pull-right ">
                    <i className="pg-more"></i>
                  </a>
                </div>
              </div>
              {/* END Header  !*/}
              {/* BEGIN Conversation  !*/}
              <div className="chat-inner" id="my-conversation">
                {/* BEGIN From Me Message  !*/}
                <div className="message clearfix">
                  <div className="chat-bubble from-me">
                    Hello there
                  </div>
                </div>
                {/* END From Me Message  !*/}
                {/* BEGIN From Them Message  !*/}
                <div className="message clearfix">
                  <div className="profile-img-wrapper m-t-5 inline">
                    <img className="col-top" width="30" height="30" src="assets/img/profiles/avatar_small.jpg" alt="" data-src="assets/img/profiles/avatar_small.jpg" data-src-retina="assets/img/profiles/avatar_small2x.jpg"/>
                  </div>
                  <div className="chat-bubble from-them">
                    Hey
                  </div>
                </div>
                {/* END From Them Message  !*/}
                {/* BEGIN From Me Message  !*/}
                <div className="message clearfix">
                  <div className="chat-bubble from-me">
                    Did you check out Pages framework ?
                  </div>
                </div>
                {/* END From Me Message  !*/}
                {/* BEGIN From Me Message  !*/}
                <div className="message clearfix">
                  <div className="chat-bubble from-me">
                    Its an awesome chat
                  </div>
                </div>
                {/* END From Me Message  !*/}
                {/* BEGIN From Them Message  !*/}
                <div className="message clearfix">
                  <div className="profile-img-wrapper m-t-5 inline">
                    <img className="col-top" width="30" height="30" src="assets/img/profiles/avatar_small.jpg" alt="" data-src="assets/img/profiles/avatar_small.jpg" data-src-retina="assets/img/profiles/avatar_small2x.jpg"/>
                  </div>
                  <div className="chat-bubble from-them">
                    Yea
                  </div>
                </div>
                {/* END From Them Message  !*/}
              </div>
              {/* BEGIN Conversation  !*/}
              {/* BEGIN Chat Input  !*/}
              <div className="b-t b-grey bg-white clearfix p-l-10 p-r-10">
                <div className="row">
                  <div className="col-1 p-t-15">
                    <a href="#" className="link text-master"><i className="fa fa-plus-circle"></i></a>
                  </div>
                  <div className="col-8 no-padding">
                    <input type="text" className="form-control chat-input" data-chat-input="" data-chat-conversation="#my-conversation" placeholder="Say something"/>
                  </div>
                  <div className="col-2 link text-master m-l-10 m-t-15 p-l-10 b-l b-grey col-top">
                    <a href="#" className="link text-master"><i className="pg-camera"></i></a>
                  </div>
                </div>
              </div>
              {/* END Chat Input  !*/}
            </div>
            {/* END Conversation View  !*/}
          </div>
        </div>
      </div>
    </div>
    {/* END QUICKVIEW*/}
    {/* START OVERLAY */}
    <div className="overlay hide" data-pages="search">
      {/* BEGIN Overlay Content !*/}
      <div className="overlay-content has-results m-t-20">
        {/* BEGIN Overlay Header !*/}
        <div className="container-fluid">
          {/* BEGIN Overlay Logo !*/}
          <img className="overlay-brand" src="assets/img/logo.png" alt="logo" data-src="assets/img/logo.png" data-src-retina="assets/img/logo_2x.png" width="78" height="22"/>
          {/* END Overlay Logo !*/}
          {/* BEGIN Overlay Close !*/}
          <a href="#" className="close-icon-light overlay-close text-black fs-16">
            <i className="pg-close"></i>
          </a>
          {/* END Overlay Close !*/}
        </div>
        {/* END Overlay Header !*/}
        <div className="container-fluid">
          {/* BEGIN Overlay Controls !*/}
          <input id="overlay-search" className="no-border overlay-search bg-transparent" placeholder="Search..." autocomplete="off" spellcheck="false"/>
          <br></br>
          <div className="inline-block">
            <div className="checkbox right">
              <input id="checkboxn" type="checkbox" value="1" checked="checked"/>
              <label for="checkboxn"><i className="fa fa-search"></i> Search within page</label>
            </div>
          </div>
          <div className="inline-block m-l-10">
            <p className="fs-13">Press enter to search</p>
          </div>
          {/* END Overlay Controls !*/}
        </div>
        {/* BEGIN Overlay Search Results, This part is for demo purpose, you can add anything you like !*/}
        <div className="container-fluid">
          <span>
                <strong>suggestions :</strong>
            </span>
          <span id="overlay-suggestions"></span>
          <br></br>
          <div className="search-results m-t-40">
            <p className="bold">Pages Search Results</p>
            <div className="row">
              <div className="col-md-6">
                {/* BEGIN Search Result Item !*/}
                <div className="">
                  {/* BEGIN Search Result Item Thumbnail !*/}
                  <div className="thumbnail-wrapper d48 circular bg-success text-white inline m-t-10">
                    <div>
                      <img width="50" height="50" src="assets/img/profiles/avatar.jpg" data-src="assets/img/profiles/avatar.jpg" data-src-retina="assets/img/profiles/avatar2x.jpg" alt=""/>
                    </div>
                  </div>
                  {/* END Search Result Item Thumbnail !*/}
                  <div className="p-l-10 inline p-t-5">
                    <h5 className="m-b-5"><span className="semi-bold result-name">ice cream</span> on pages</h5>
                    <p className="hint-text">via john smith</p>
                  </div>
                </div>
                {/* END Search Result Item !*/}
                {/* BEGIN Search Result Item !*/}
                <div className="">
                  {/* BEGIN Search Result Item Thumbnail !*/}
                  <div className="thumbnail-wrapper d48 circular bg-success text-white inline m-t-10">
                    <div>T</div>
                  </div>
                  {/* END Search Result Item Thumbnail !*/}
                  <div className="p-l-10 inline p-t-5">
                    <h5 className="m-b-5"><span className="semi-bold result-name">ice cream</span> related topics</h5>
                    <p className="hint-text">via pages</p>
                  </div>
                </div>
                {/* END Search Result Item !*/}
                {/* BEGIN Search Result Item !*/}
                <div className="">
                  {/* BEGIN Search Result Item Thumbnail !*/}
                  <div className="thumbnail-wrapper d48 circular bg-success text-white inline m-t-10">
                    <div><i className="fa fa-headphones large-text "></i>
                    </div>
                  </div>
                  {/* END Search Result Item Thumbnail !*/}
                  <div className="p-l-10 inline p-t-5">
                    <h5 className="m-b-5"><span className="semi-bold result-name">ice cream</span> music</h5>
                    <p className="hint-text">via pagesmix</p>
                  </div>
                </div>
                {/* END Search Result Item !*/}
              </div>
              <div className="col-md-6">
                {/* BEGIN Search Result Item !*/}
                <div className="">
                  {/* BEGIN Search Result Item Thumbnail !*/}
                  <div className="thumbnail-wrapper d48 circular bg-info text-white inline m-t-10">
                    <div><i className="fa fa-facebook large-text "></i>
                    </div>
                  </div>
                  {/* END Search Result Item Thumbnail !*/}
                  <div className="p-l-10 inline p-t-5">
                    <h5 className="m-b-5"><span className="semi-bold result-name">ice cream</span> on facebook</h5>
                    <p className="hint-text">via facebook</p>
                  </div>
                </div>
                {/* END Search Result Item !*/}
                {/* BEGIN Search Result Item !*/}
                <div className="">
                  {/* BEGIN Search Result Item Thumbnail !*/}
                  <div className="thumbnail-wrapper d48 circular bg-complete text-white inline m-t-10">
                    <div><i className="fa fa-twitter large-text "></i>
                    </div>
                  </div>
                  {/* END Search Result Item Thumbnail !*/}
                  <div className="p-l-10 inline p-t-5">
                    <h5 className="m-b-5">Tweats on<span className="semi-bold result-name"> ice cream</span></h5>
                    <p className="hint-text">via twitter</p>
                  </div>
                </div>
                {/* END Search Result Item !*/}
                {/* BEGIN Search Result Item !*/}
                <div className="">
                  {/* BEGIN Search Result Item Thumbnail !*/}
                  <div className="thumbnail-wrapper d48 circular text-white bg-danger inline m-t-10">
                    <div><i className="fa fa-google-plus large-text "></i>
                    </div>
                  </div>
                  {/* END Search Result Item Thumbnail !*/}
                  <div className="p-l-10 inline p-t-5">
                    <h5 className="m-b-5">Circles on<span className="semi-bold result-name"> ice cream</span></h5>
                    <p className="hint-text">via google plus</p>
                  </div>
                </div>
                {/* END Search Result Item !*/}
              </div>
            </div>
          </div>
        </div>
        {/* END Overlay Search Results !*/}
      </div>
      {/* END Overlay Content !*/}
    </div>
    {/* END OVERLAY */}

              </div>
        )
    }
}

export default TempPaddlers
