import React, { Component } from 'react'

class Temp extends Component {
    render(){
        return (
            <div>    
    {/* START PAGE-CONTAINER */}
    <div className="page-container ">

      {/* START PAGE CONTENT WRAPPER */}
      <div className="page-content-wrapper ">
        {/* START PAGE CONTENT */}
        <div className="content sm-gutter">
          {/* START CONTAINER FLUID */}
          <div className="container-fluid padding-25 sm-padding-10">
            <div className="row">
              <div className="col-lg-4 col-xl-3 col-xlg-2 ">
                <div className="row">
                  <div className="col-md-12 m-b-10">
                    {/* START WIDGET D3 widget_graphTileFlat*/}
                    <div className="widget-8 card no-border bg-warning no-margin widget-loader-bar">
                      <div className="container-xs-height full-height">
                        <div className="row-xs-height">
                          <div className="col-xs-height col-top">
                            <div className="card-header  top-left top-right">
                              <div className="card-title text-black hint-text">
                                <span className="font-montserrat fs-11 all-caps">Weekly Sales <i
		                                className="fa fa-chevron-right"></i>
                                                    </span>
                              </div>
                              <div className="card-controls">
                                <ul>
                                  <li>
                                    <a data-toggle="refresh" className="card-refresh text-black" href="#"><i
											className="card-icon card-icon-refresh"></i></a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row-xs-height ">
                          <div className="col-xs-height col-top relative">
                            <div className="row">
                              <div className="col-sm-6">
                                <div className="p-l-20">
                                  <h3 className="no-margin p-b-5 text-white">$14,000</h3>
                                  <p className="small hint-text m-t-5">
                                    <span className="label  font-montserrat m-r-5">60%</span>Higher
                                  </p>
                                </div>
                              </div>
                              <div className="col-sm-6">
                              </div>
                            </div>
                            <div className='widget-8-chart line-chart' data-line-color="black" data-points="true" data-point-color="warning" data-stroke-width="2">
                              <svg></svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* END WIDGET */}
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 m-b-10">
                    {/* START WIDGET widget_progressTileFlat*/}
                    <div className="widget-9 card no-border bg-success no-margin widget-loader-bar">
                      <div className="full-height d-flex flex-column">
                        <div className="card-header ">
                          <div className="card-title text-black">
                            <span className="font-montserrat fs-11 all-caps">Weekly Sales <i
	                    className="fa fa-chevron-right"></i>
	                                </span>
                          </div>
                          <div className="card-controls">
                            <ul>
                              <li><a href="#" className="card-refresh text-black" data-toggle="refresh"><i
								className="card-icon card-icon-refresh"></i></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="p-l-20">
                          <h3 className="no-margin p-b-5 text-white">$23,000</h3>
                          <a href="#" className="btn-circle-arrow text-white"><i
						className="pg-arrow_minimize"></i>
				</a>
                          <span className="small hint-text text-white">65% lower than last month</span>
                        </div>
                        <div className="mt-auto">
                          <div className="progress progress-small m-b-20">
                            {/* START BOOTSTRAP PROGRESS (http://getbootstrap.com/components/#progress) */}
                            <div className="progress-bar progress-bar-white" style={{width: '45%'}}></div>
                            {/* END BOOTSTRAP PROGRESS */}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* END WIDGET */}
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 md-m-b-10 sm-m-b-10">
                    {/* START WIDGET widget_statTile*/}
                    <div className="widget-10 card no-border bg-white no-margin widget-loader-bar">
                      <div className="card-header  top-left top-right ">
                        <div className="card-title text-black hint-text">
                          <span className="font-montserrat fs-11 all-caps">Weekly Sales <i className="fa fa-chevron-right"></i>
                                        </span>
                        </div>
                        <div className="card-controls">
                          <ul>
                            <li><a data-toggle="refresh" className="card-refresh text-black" href="#"><i
							className="card-icon card-icon-refresh"></i></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body p-t-40">
                        <div className="row">
                          <div className="col-sm-12">
                            <h4 className="no-margin p-b-5 text-danger semi-bold">APPL 2.032</h4>
                            <div className="pull-left small">
                              <span>WMHC</span>
                              <span className=" text-success font-montserrat">
                                                    <i className="fa fa-caret-up m-l-10"></i> 9%
                                                </span>
                            </div>
                            <div className="pull-left m-l-20 small">
                              <span>HCRS</span>
                              <span className=" text-danger font-montserrat">
                                                    <i className="fa fa-caret-up m-l-10"></i> 21%
                                                </span>
                            </div>
                            <div className="clearfix"></div>
                          </div>
                        </div>
                        <div className="p-t-10 full-width">
                          <a href="#" className="btn-circle-arrow b-grey"><i
						className="pg-arrow_minimize text-danger"></i></a>
                          <span className="hint-text small">Show more</span>
                        </div>
                      </div>
                    </div>
                    {/* END WIDGET */}
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-xl-9 col-xlg-6 m-b-10">
                <div className="row">
                  <div className="col-md-12">
                    {/* START WIDGET D3 widget_graphWidget*/}
                    <div className="widget-12 card no-border widget-loader-circle no-margin">
                      <div className="row">
                        <div className="col-lg-8 ">
                          <div className="card-header  pull-up top-right ">
                            <div className="card-controls">
                              <ul>
                                <li className="hidden-xlg">
                                  <div className="dropdown">
                                    <a data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">
                                      <i className="card-icon card-icon-settings"></i>
                                    </a>
                                    <ul className="dropdown-menu pull-right" role="menu">
                                      <li><a href="#">AAPL</a>
                                      </li>
                                      <li><a href="#">YHOO</a>
                                      </li>
                                      <li><a href="#">GOOG</a>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <a data-toggle="refresh" className="card-refresh text-black" href="#"><i className="card-icon card-icon-refresh"></i></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-8">
                            <div className="p-l-5">
                              <h2 className="pull-left m-t-5 m-b-5">Apple Inc.</h2>
                              <h2 className="pull-left m-l-50 m-t-5 m-b-5 text-danger">
							<span className="">448.97</span>
							<span className="text-danger fs-12">-318.24</span>
						</h2>
                              <div className="clearfix"></div>
                              <div className="full-width">
                                <ul className="list-inline">
                                  <li><a href="#" className="font-montserrat text-master">1D</a>
                                  </li>
                                  <li className="active"><a href="#" className="font-montserrat  bg-master-light text-master">5D</a>
                                  </li>
                                  <li><a href="#" className="font-montserrat text-master">1M</a>
                                  </li>
                                  <li><a href="#" className="font-montserrat text-master">1Y</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="nvd3-line line-chart text-center" data-x-grid="false">
                                <svg></svg>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="widget-12-search">
                              <p className="pull-left">Company
                                <span className="bold">List</span>
                              </p>
                              <button className="btn btn-default btn-xs pull-right">
                                <span className="bold">+</span>
                              </button>
                              <div className="clearfix"></div>
                              <input type="text" placeholder="Search list" className="form-control m-t-5"/>
                            </div>
                            <div className="company-stat-boxes">
                              <div data-index="0" className="company-stat-box m-t-15 active padding-20 bg-master-lightest">
                                <div>
                                  <button type="button" className="close" data-dismiss="modal">
                                    <i className="pg-close fs-12"></i>
                                  </button>
                                  <p className="company-name pull-left text-uppercase bold no-margin">
                                    <span className="fa fa-circle text-success fs-11"></span> AAPL
                                  </p>
                                  <small className="hint-text m-l-10">Yahoo Inc.</small>
                                  <div className="clearfix"></div>
                                </div>
                                <div className="m-t-10">
                                  <p className="pull-left small hint-text no-margin p-t-5">9:42AM ET</p>
                                  <div className="pull-right">
                                    <p className="small hint-text no-margin inline">37.73</p>
                                    <span className=" label label-important p-t-5 m-l-5 p-b-5 inline fs-12">+ 0.09</span>
                                  </div>
                                  <div className="clearfix"></div>
                                </div>
                              </div>
                              <div data-index="1" className="company-stat-box m-t-15  padding-20 bg-master-lightest">
                                <div>
                                  <button type="button" className="close" data-dismiss="modal">
                                    <i className="pg-close fs-12"></i>
                                  </button>
                                  <p className="company-name pull-left text-uppercase bold no-margin">
                                    <span className="fa fa-circle text-primary fs-11"></span> YHOO
                                  </p>
                                  <small className="hint-text m-l-10">Yahoo Inc.</small>
                                  <div className="clearfix"></div>
                                </div>
                                <div className="m-t-10">
                                  <p className="pull-left small hint-text no-margin p-t-5">9:42AM ET</p>
                                  <div className="pull-right">
                                    <p className="small hint-text no-margin inline">37.73</p>
                                    <span className=" label label-success p-t-5 m-l-5 p-b-5 inline fs-12">+ 0.09</span>
                                  </div>
                                  <div className="clearfix"></div>
                                </div>
                              </div>
                              <div data-index="2" className="company-stat-box m-t-15  padding-20 bg-master-lightest">
                                <div>
                                  <button type="button" className="close" data-dismiss="modal">
                                    <i className="pg-close fs-12"></i>
                                  </button>
                                  <p className="company-name pull-left text-uppercase bold no-margin">
                                    <span className="fa fa-circle text-complete fs-11"></span> GOOG
                                  </p>
                                  <small className="hint-text m-l-10">Yahoo Inc.</small>
                                  <div className="clearfix"></div>
                                </div>
                                <div className="m-t-10">
                                  <p className="pull-left small hint-text no-margin p-t-5">9:42AM ET</p>
                                  <div className="pull-right">
                                    <p className="small hint-text no-margin inline">37.73</p>
                                    <span className=" label label-success p-t-5 m-l-5 p-b-5 inline fs-12">+ 0.09</span>
                                  </div>
                                  <div className="clearfix"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* END WIDGET */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 hidden-lg visible-xlg col-xlg-4 m-b-10">
                {/* START WIDGET D3 widget_stackedBarWidget*/}
                <div className="widget-15 card card-condensed  no-margin no-border widget-loader-circle">
                  <div className="card-header ">
                    <div className="card-controls">
                      <ul>
                        <li><a href="#" className="card-collapse" data-toggle="collapse"><i
							className="card-icon card-icon-collapse"></i></a>
                        </li>
                        <li><a href="#" className="card-refresh text-black" data-toggle="refresh"><i
							className="card-icon card-icon-refresh"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body no-padding">
                    <ul className="nav nav-tabs nav-tabs-simple">
                      <li className="nav-item">
                        <a href="#" data-toggle="tab" className="p-t-5 active">
						APPL<br></br>
						22.23<br></br>
						<span className="text-success">+60.223%</span>
					</a>
                      </li>
                      <li className="nav-item"><a href="#" data-toggle="tab" className="p-t-5">
					FB<br></br>
					45.97<br></br>
					<span className="text-danger">-06.56%</span>
				</a>
                      </li>
                      <li className="nav-item"><a href="#" data-toggle="tab" className="p-t-5">
					GOOG<br></br>
					22.23<br></br>
					<span className="text-success">+60.223%</span>
				</a>
                      </li>
                    </ul>
                    <div className="tab-content p-l-20 p-r-20">
                      <div className="tab-pane no-padding active" id="widget-15-tab-1">
                        <div className="full-width">
                          <div className="full-width">
                            <div className="widget-15-chart rickshaw-chart"></div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane no-padding" id="widget-15-tab-2">
                      </div>
                      <div className="tab-pane" id="widget-15-tab-3">
                      </div>
                    </div>
                    <div className="p-t-20 p-l-20 p-r-20 p-b-30">
                      <div className="row">
                        <div className="col-md-9">
                          <p className="fs-16 text-black">Apple’s Motivation - Innovation
                            <br></br>distinguishes between A leader and a follower.
                          </p>
                          <p className="small hint-text p-b-10">VIA Apple Store (Consumer and Education Individuals)
                            <br></br>(800) MY-APPLE (800-692-7753)
                          </p>
                        </div>
                        <div className="col-md-3 text-right">
                          <p className="font-montserrat bold text-success m-r-20 fs-16">+0.94</p>
                          <p className="font-montserrat bold text-danger m-r-20 fs-16">-0.63</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END WIDGET */}
              </div>
            </div>
            <div className="row m-b-10">
              <div className="col-lg-8 sm-p-b-10 md-p-b-10">
                {/* START WIDGET widget_mapWidget*/}
                <div className="widget-13 card no-border  no-margin widget-loader-circle">
                  <div className="card-header  pull-up top-right ">
                    <div className="card-controls">
                      <ul>
                        <li><a href="#" className="card-refresh text-black" data-toggle="refresh"><i className="card-icon card-icon-refresh"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="container-sm-height no-overflow">
                    <div className="row row-sm-height">
                      <div className="col-sm-5 col-lg-4 col-xlg-3 col-sm-height col-top no-padding">
                        <div className="card-header  ">
                          <div className="card-title">Menu clipping
                          </div>
                        </div>
                        <div className="card-body">
                          <ul className="nav nav-pills m-t-5 m-b-15" role="tablist">
                            <li className="active">
                              <a href="#tab1" data-toggle="tab" role="tab" className="b-a b-grey text-master">
                                            fb
                                        </a>
                            </li>
                            <li>
                              <a href="#tab2" data-toggle="tab" role="tab" className="b-a b-grey text-master">
                                            js
                                        </a>
                            </li>
                            <li>
                              <a href="#tab3" data-toggle="tab" role="tab" className="b-a b-grey text-master">
                                            sa
                                        </a>
                            </li>
                          </ul>
                          <div className="tab-content">
                            <div className="tab-pane active" id="tab1">
                              <h3>Facebook</h3>
                              <p className="hint-text all-caps font-montserrat small no-margin ">Views</p>
                              <p className="all-caps font-montserrat  no-margin text-success ">14,256</p>
                              <br></br>
                              <p className="hint-text all-caps font-montserrat small no-margin ">Today</p>
                              <p className="all-caps font-montserrat  no-margin text-warning ">24</p>
                              <br></br>
                              <p className="hint-text all-caps font-montserrat small no-margin ">Week</p>
                              <p className="all-caps font-montserrat  no-margin text-success ">56</p>
                            </div>
                            <div className="tab-pane " id="tab2">
                              <h3>Google</h3>
                              <p className="hint-text all-caps font-montserrat small no-margin ">Views</p>
                              <p className="all-caps font-montserrat  no-margin text-success ">14,256</p>
                              <br></br>
                              <p className="hint-text all-caps font-montserrat small no-margin ">Today</p>
                              <p className="all-caps font-montserrat  no-margin text-warning ">24</p>
                              <br></br>
                              <p className="hint-text all-caps font-montserrat small no-margin ">Week</p>
                              <p className="all-caps font-montserrat  no-margin text-success ">56</p>
                            </div>
                            <div className="tab-pane" id="tab3">
                              <h3>Amazon</h3>
                              <p className="hint-text all-caps font-montserrat small no-margin ">Views</p>
                              <p className="all-caps font-montserrat  no-margin text-success ">14,256</p>
                              <br></br>
                              <p className="hint-text all-caps font-montserrat small no-margin ">Today</p>
                              <p className="all-caps font-montserrat  no-margin text-warning ">24</p>
                              <br></br>
                              <p className="hint-text all-caps font-montserrat small no-margin ">Week</p>
                              <p className="all-caps font-montserrat  no-margin text-success ">56</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-master-light p-l-20 p-r-20 p-t-10 p-b-10 pull-bottom full-width hidden-xs">
                          <p className="no-margin">
                            <a href="#"><i className="fa fa-arrow-circle-o-down text-success"></i></a>
                            <span className="hint-text">Super secret options</span>
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-7 col-lg-8 col-xlg-9 col-sm-height col-top no-padding relative">
                        <div className="bg-master-light widget-13-map">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END WIDGET */}
              </div>
              <div className="col-lg-4">
                {/* START WIDGET widget_realtimeWidget*/}
                <div className="widget-14 card no-border  no-margin widget-loader-circle">
                  <div className="container-xs-height full-height">
                    <div className="row-xs-height">
                      <div className="col-xs-height">
                        <div className="card-header ">
                          <div className="card-title">Server load
                          </div>
                          <div className="card-controls">
                            <ul>
                              <li><a href="#" className="card-refresh text-black" data-toggle="refresh"><i
										className="card-icon card-icon-refresh"></i></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row-xs-height">
                      <div className="col-xs-height">
                        <div className="p-l-20 p-r-20">
                          <p>Server: www.revox.io</p>
                          <div className="row">
                            <div className="col-lg-3 col-md-12">
                              <h4 className="bold no-margin">5.2GB</h4>
                              <p className="small no-margin">Total usage</p>
                            </div>
                            <div className="col-lg-3 col-md-6">
                              <h5 className=" no-margin p-t-5">227.34KB</h5>
                              <p className="small no-margin">Currently</p>
                            </div>
                            <div className="col-lg-3 col-md-6">
                              <h5 className=" no-margin p-t-5">117.65MB</h5>
                              <p className="small no-margin">Average</p>
                            </div>
                            <div className="col-lg-3 visible-xlg">
                              <div className="widget-14-chart-legend bg-transparent text-black no-padding pull-right"></div>
                              <div className="clearfix"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row-xs-height">
                      <div className="col-xs-height relative bg-master-lightest">
                        <div className="widget-14-chart_y_axis"></div>
                        <div className="widget-14-chart rickshaw-chart top-left top-right bottom-left bottom-right"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END WIDGET */}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 visible-lg hidden-xlg sm-m-b-10">
                {/* START WIDGET D3 widget_stackedBarWidgetBasic*/}
                <div className="widget-15-2 card no-margin no-border widget-loader-circle">
                  <div className="card-header  top-right">
                    <div className="card-controls">
                      <ul>
                        <li><a href="#" className="card-refresh text-black" data-toggle="refresh"><i
							className="card-icon card-icon-refresh"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <ul className="nav nav-tabs nav-tabs-simple">
                    <li>
                      <a href="#widget-15-2-tab-1" className="active">
					APPL<br></br>
					22.23<br></br>
					<span className="text-success">+60.223%</span>
				</a>
                    </li>
                    <li><a href="#widget-15-2-tab-2">
				FB<br></br>
				45.97<br></br>
				<span className="text-danger">-06.56%</span>
			</a>
                    </li>
                    <li><a href="#widget-15-2-tab-3">
				GOOG<br></br>
				22.23<br></br>
				<span className="text-success">+60.223%</span>
			</a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane no-padding active" id="widget-15-2-tab-1">
                      <div className="full-width">
                        <div className="widget-15-chart2 rickshaw-chart full-height"></div>
                      </div>
                    </div>
                    <div className="tab-pane no-padding" id="widget-15-2-tab-2">
                    </div>
                    <div className="tab-pane" id="widget-15-2-tab-3">
                    </div>
                  </div>
                  <div className="p-t-10 p-l-20 p-r-20 p-b-30">
                    <div className="row">
                      <div className="col-md-9">
                        <p className="fs-16 text-black">Apple’s Motivation - Innovation distinguishes between A leader and a follower.
                        </p>
                        <p className="small hint-text">VIA Apple Store (Consumer and Education Individuals)
                          <br></br>(800) MY-APPLE (800-692-7753)
                        </p>
                      </div>
                      <div className="col-md-3 text-right">
                        <h5 className="font-montserrat bold text-success">+0.94</h5>
                        <h5 className="font-montserrat bold text-danger">-0.63</h5>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END WIDGET */}
              </div>
              <div className="col-md-4 col-lg-3 col-xlg-3 m-b-10 visible-xlg">
                {/* START WIDGET D3 widget_graphOptionsWidget*/}
                <div className="widget-16 card no-border  no-margin widget-loader-circle">
                  <div className="card-header ">
                    <div className="card-title">Page Options
                    </div>
                    <div className="card-controls">
                      <ul>
                        <li><a href="#" className="card-refresh text-black" data-toggle="refresh"><i
							className="card-icon card-icon-refresh"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="widget-16-header padding-20 d-flex">
                    <span className="icon-thumbnail bg-master-light pull-left text-master">ws</span>
                    <div className="flex-1 full-width overflow-ellipsis">
                      <p className="hint-text all-caps font-montserrat  small no-margin overflow-ellipsis ">Pages name
                      </p>
                      <h5 className="no-margin overflow-ellipsis ">Webarch Sales Analysis</h5>
                    </div>
                  </div>
                  <div className="p-l-25 p-r-45 p-t-25 p-b-25">
                    <div className="row">
                      <div className="col-md-4 ">
                        <p className="hint-text all-caps font-montserrat small no-margin ">Views</p>
                        <p className="all-caps font-montserrat  no-margin text-success ">14,256</p>
                      </div>
                      <div className="col-md-4 text-center">
                        <p className="hint-text all-caps font-montserrat small no-margin ">Today</p>
                        <p className="all-caps font-montserrat  no-margin text-warning ">24</p>
                      </div>
                      <div className="col-md-4 text-right">
                        <p className="hint-text all-caps font-montserrat small no-margin ">Week</p>
                        <p className="all-caps font-montserrat  no-margin text-success ">56</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative no-overflow">
                    <div className="widget-16-chart line-chart" data-line-color="success" data-points="true" data-point-color="white" data-stroke-width="2">
                      <svg></svg>
                    </div>
                  </div>
                  <div className="b-b b-t b-grey p-l-20 p-r-20 p-b-10 p-t-10">
                    <p className="pull-left">Post is Public</p>
                    <div className="pull-right">
                      <input type="checkbox" data-init-plugin="switchery" />
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="b-b b-grey p-l-20 p-r-20 p-b-10 p-t-10">
                    <p className="pull-left">Maintenance mode</p>
                    <div className="pull-right">
                      <input type="checkbox" data-init-plugin="switchery" defaultChecked />
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="p-l-20 p-r-20 p-t-10 p-b-10 ">
                    <p className="pull-left no-margin hint-text">Super secret options</p>
                    <a href="#" className="pull-right"><i className="fa fa-arrow-circle-o-down text-success fs-16"></i></a>
                    <div className="clearfix"></div>
                  </div>
                </div>
                {/* END WIDGET */}
              </div>
              <div className="col-xlg-3 visible-xlg ">
                <div className="row">
                  <div className="col-xlg-12">
                    {/* START WIDGET widget_socialPostTile*/}
                    <div className="card no-border  no-margin">
                      <div className="padding-15">
                        <div className="item-header clearfix">
                          <div className="thumbnail-wrapper d32 circular">
                            <img width="40" height="40" src="assets/img/profiles/3x.jpg" data-src="assets/img/profiles/3.jpg" data-src-retina="assets/img/profiles/3x.jpg" alt=""/>
                          </div>
                          <div className="inline m-l-10">
                            <p className="no-margin">
                              <strong>Anne Simons</strong>
                            </p>
                            <p className="no-margin hint-text">Shared a link
                              <span className="location semi-bold"><i className="fa fa-map-marker"></i> NY center</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <hr className="no-margin"/>
                      <div className="padding-15">
                        <p>Inspired by : good design is obvious, great design is transparent</p>
                        <div className="hint-text">via themeforest</div>
                      </div>
                      <div className="relative">
                        <ul className="buttons pull-top top-right list-inline p-r-10 p-t-10">
                          <li>
                            <a className="text-white" href="#"><i className="fa fa-expand"></i>
					</a>
                          </li>
                          <li>
                            <a className="text-white" href="#"><i className="fa fa-heart-o"></i>
					</a>
                          </li>
                        </ul>
                        <div className="widget-19-post no-overflow">
                          <img src="assets/img/social-post-image.png" className="block center-margin relative" alt="Post"/>
                        </div>
                      </div>
                      <div className="padding-15">
                        <div className="hint-text pull-left">few seconds ago</div>
                        <ul className="list-inline pull-right no-margin">
                          <li><a className="text-master hint-text" href="#">5,345 <i className="fa fa-comment-o"></i></a>
                          </li>
                          <li><a className="text-master hint-text" href="#">23K <i className="fa fa-heart-o"></i></a>
                          </li>
                        </ul>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                    {/* END WIDGET */}
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-8 col-xlg-6 md-m-t-10">
                {/* START WIDGET widget_weatherWidget*/}
                <div className="widget-17 card  no-border no-margin widget-loader-circle">
                  <div className="card-header ">
                    <div className="card-title">
                      <i className="pg-map"></i> California, USA
                      <span className="caret"></span>
                    </div>
                    <div className="card-controls">
                      <ul>
                        <li className="">
                          <div className="dropdown">
                            <a data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">
                              <i className="card-icon card-icon-settings"></i>
                            </a>
                            <ul className="dropdown-menu pull-right" role="menu">
                              <li><a href="#">AAPL</a>
                              </li>
                              <li><a href="#">YHOO</a>
                              </li>
                              <li><a href="#">GOOG</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a data-toggle="refresh" className="card-refresh text-black" href="#">
                            <i className="card-icon card-icon-refresh"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="p-l-5">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="row m-t-20">
                            <div className="col-lg-5">
                              <h4 className="no-margin">Monday</h4>
                              <p className="small hint-text">9th August 2014</p>
                            </div>
                            <div className="col-lg-7">
                              <div className="pull-left">
                                <p className="small hint-text no-margin">Currently</p>
                                <h4 className="text-danger bold no-margin">32°
                      <span className="small">/ 30C</span>
                    </h4>
                              </div>
                              <div className="pull-right">
                                <canvas height="64" width="64" className="clear-day"></canvas>
                              </div>
                            </div>
                          </div>
                          <h5>Feels like
                <span className="semi-bold">rainy</span>
              </h5>
                          <p>Weather information</p>
                          <div className="widget-17-weather">
                            <div className="row">
                              <div className="col-6 p-r-10">
                                <div className="row">
                                  <div className="col-lg-12">
                                    <p className="pull-left">Wind</p>
                                    <p className="pull-right bold">11km/h</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-12">
                                    <p className="pull-left">Sunrise</p>
                                    <p className="pull-right bold">05:20</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-12">
                                    <p className="pull-left">Humidity</p>
                                    <p className="pull-right bold">20%</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-12">
                                    <p className="pull-left">Precipitation</p>
                                    <p className="pull-right bold">60%</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-6 p-l-10">
                                <div className="row">
                                  <div className="col-lg-12">
                                    <p className="pull-left">Sunset</p>
                                    <p className="pull-right bold">21:05</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-12">
                                    <p className="pull-left">Visibility</p>
                                    <p className="pull-right bold">21km</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row m-t-10 timeslot">
                            <div className="col-2 p-t-10 text-center">
                              <p className="small">13:30</p>
                              <canvas height="25" width="25" className="partly-cloudy-day"></canvas>
                              <p className="text-danger bold">30°C</p>
                            </div>
                            <div className="col-2 p-t-10 text-center">
                              <p className="small">14:00</p>
                              <canvas height="25" width="25" className="cloudy"></canvas>
                              <p className="text-danger bold">30°C</p>
                            </div>
                            <div className="col-2 p-t-10 text-center">
                              <p className="small">14:30</p>
                              <canvas height="25" width="25" className="rain"></canvas>
                              <p className="text-danger bold">30°C</p>
                            </div>
                            <div className="col-2 p-t-10 text-center">
                              <p className="small">15:00</p>
                              <canvas height="25" width="25" className="sleet"></canvas>
                              <p className="text-danger bold">30°C</p>
                            </div>
                            <div className="col-2 p-t-10 text-center">
                              <p className="small">15:30</p>
                              <canvas height="25" width="25" className="snow"></canvas>
                              <p className="text-danger bold">30°C</p>
                            </div>
                            <div className="col-2 p-t-10 text-center">
                              <p className="small">16:00</p>
                              <canvas height="25" width="25" className="wind"></canvas>
                              <p className="text-danger bold">30°C</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 d-none d-sm-none d-md-block d-lg-block d-xl-block">
                          <div className="row">
                            <div className="forecast-day col-sm-6 text-center m-t-10 ">
                              <div className="bg-master-lightest p-b-10 p-t-10">
                                <h4 className="p-t-10 no-margin">Tuesday</h4>
                                <p className="small hint-text m-b-20">11th Augest 2014</p>
                                <canvas className="rain" width="64" height="64"></canvas>
                                <h5 className="text-danger">32°</h5>
                                <p>Feels like
                                  <span className="bold">sunny</span>
                                </p>
                                <p className="small">Wind
                                  <span className="bold p-l-20">11km/h</span>
                                </p>
                                <div className="m-t-20 block">
                                  <div className="padding-10">
                                    <div className="row">
                                      <div className="col-lg-6 text-center">
                                        <p className="small">Noon</p>
                                        <canvas className="sleet" width="25" height="25"></canvas>
                                        <p className="text-danger bold">30°C</p>
                                      </div>
                                      <div className="col-lg-6 text-center">
                                        <p className="small">Night</p>
                                        <canvas className="wind" width="25" height="25"></canvas>
                                        <p className="text-danger bold">30°C</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 text-center m-t-10 ">
                              <div className="bg-master-lightest p-b-10 p-t-10">
                                <h4 className="p-t-10 no-margin">Wednesday</h4>
                                <p className="small hint-text m-b-20">11th Augest 2014</p>
                                <canvas className="rain" width="64" height="64"></canvas>
                                <h5 className="text-danger">32°</h5>
                                <p>Feels like
                                  <span className="bold">sunny</span>
                                </p>
                                <p className="small">Wind
                                  <span className="bold p-l-20">11km/h</span>
                                </p>
                                <div className="m-t-20 block">
                                  <div className="padding-10">
                                    <div className="row">
                                      <div className="col-lg-6 text-center">
                                        <p className="small">Noon</p>
                                        <canvas className="sleet" width="25" height="25"></canvas>
                                        <p className="text-danger bold">30°C</p>
                                      </div>
                                      <div className="col-lg-6 text-center">
                                        <p className="small">Night</p>
                                        <canvas className="wind" width="25" height="25"></canvas>
                                        <p className="text-danger bold">30°C</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END WIDGET */}
              </div>
            </div>
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
                      <label htmlFor="qncheckbox1"></label>
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
                      <label htmlFor="qncheckbox2"></label>
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
                      <label htmlFor="qncheckbox3"></label>
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
                      <label htmlFor="qncheckbox4"></label>
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
                      <label htmlFor="qncheckbox5"></label>
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
                      <div className="quick-note-editor full-width full-height js-input" contentEditable="true"></div>
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
          <input id="overlay-search" className="no-border overlay-search bg-transparent" placeholder="Search..." autoComplete="off" spellCheck="false"/>
          <br></br>
          <div className="inline-block">
            <div className="checkbox right">
              <input id="checkboxn" type="checkbox" value="1" defaultChecked/>
              <label htmlFor="checkboxn"><i className="fa fa-search"></i> Search within page</label>
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

export default Temp