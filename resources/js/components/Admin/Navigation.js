import React, { Component } from 'react'
import { BrowserRouter as Router, Route  , NavLink }  from "react-router-dom";

export class Navigation extends Component {
    render() {
        return (
          
            <div>
             
              <div className="mobile-menu-overlay" />
              <div className="sidebar-left " id="mobile-nav">
                <div className="sidebar-body scroll-pane">

                  <ul className="side-nav metismenu" id="menu">
                  
                      <li>
                      <NavLink  exact activeClassName="active" to="/admin/dashboard">
                      <i className="icon-fa icon-fa-dashboard" /> Dashboard </NavLink>  
                      </li>

                      <li>
                      <NavLink  exact activeClassName="active" to="/admin/category"><i className="icon-fa icon-fa-check" />Category </NavLink>  
                      </li>

                      <li>
                      <NavLink  exact activeClassName="active" to="/admin/blog"><i className="icon-fa icon-fa-check" />Blog </NavLink>  
                      </li>


                      <li>
                        <a href="#"><i className="icon-fa icon-fa-th-large" /> Layouts <span className="icon-fa arrow icon-fa-fw" /> </a>
                        <ul aria-expanded="true" className="collapse">
                          <li>
                            <a href="layouts/sidebar.html">Sidebar</a>
                          </li>
                          <li>
                            <a href="layouts/icon-sidebar.html">Icon Sidebar</a>
                          </li>
                          <li>
                            <a href="layouts/horizontal-menu.html">Horizontal Menu</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="#"><i className="icon-fa icon-fa-star" /> Basic UI <span className="icon-fa arrow icon-fa-fw" /> </a>
                        <ul aria-expanded="true" className="collapse">
                          <li>
                            <a href="basic-ui/buttons.html">Buttons</a>
                          </li>
                          <li>
                            <a href="basic-ui/cards.html">Cards</a>
                          </li>
                          <li>
                            <a href="basic-ui/tabs.html">Tabs &amp; Accordians</a>
                          </li>
                          <li>
                            <a href="basic-ui/typography.html">Typography</a>
                          </li>
                          <li>
                            <a href="basic-ui/tables.html">Tables</a>
                          </li>
                          <li>
                            <a href="basic-ui/modals.html">Modals</a>
                          </li>
                          <li>
                            <a href="basic-ui/progress-bars.html">Progress Bar</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="#"><i className="icon-fa icon-fa-puzzle-piece" /> Components <span className="icon-fa arrow icon-fa-fw" /> </a>
                        <ul aria-expanded="true" className="collapse">
                          <li>
                            <a href="components/datatables.html">Datatables</a>
                          </li>
                          <li>
                            <a href="components/notifications.html">Notifications</a>
                          </li>
                          <li>
                            <a href="components/nestable-list.html"> Nestable List</a>
                          </li>
                          <li>
                            <a href="components/nestable-tree.html">Nestable Tree</a>
                          </li>
                          <li>
                            <a href="components/image-cropper.html">Image Cropper</a>
                          </li>
                          <li>
                            <a href="components/zoom.html">Image Zoom</a>
                          </li>
                          <li>
                            <a href="components/calendar.html">Calendar</a>
                          </li>
                          <li>
                            <a href="#">Rating<span className="icon-fa arrow icon-fa-fw" /> </a>
                            <ul aria-expanded="true" className="collapse submenu">
                              <li><a href="components/ratings/star.html">Star Ratings</a></li>
                              <li><a href="components/ratings/bar.html">Bar Ratings</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="#"><i className="icon-fa icon-fa-bar-chart" /> Charts <span className="icon-fa arrow icon-fa-fw" /> </a>
                        <ul aria-expanded="true" className="collapse">
                          <li>
                            <a href="charts/chartjs.html">Chart JS</a>
                          </li>
                          <li>
                            <a href="charts/sparklines.html">Sparkline</a>
                          </li>
                          <li>
                            <a href="charts/amcharts.html">AM Charts</a>
                          </li>
                          <li>
                            <a href="charts/morris.html">Morris</a>
                          </li>
                          <li>
                            <a href="charts/gauges.html">Gauges</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="#"><i className="icon-fa icon-fa-eye" /> Icons <span className="icon-fa arrow icon-fa-fw" />
                        </a>
                        <ul aria-expanded="true" className="collapse">
                          <li>
                            <a href="icons/icomoon.html">IcoMoon</a>
                          </li>
                          <li>
                            <a href="icons/evil.html">Evil Icons</a>
                          </li>
                          <li>
                            <a href="icons/meteo.html">Meteo Icons</a>
                          </li>
                          <li>
                            <a href="icons/line.html">Line Icons</a>
                          </li>
                          <li>
                            <a href="icons/fps-line.html">FPS Line</a>
                          </li>
                          <li>
                            <a href="icons/fontawesome.html">Font Awesome</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="#"><i className="icon-fa icon-fa-rocket" /> Forms <span className="icon-fa arrow icon-fa-fw" /> </a>
                        <ul aria-expanded="true" className="collapse">
                          <li>
                            <a href="forms/general.html">General Elements</a>
                          </li>
                          <li>
                            <a href="forms/advanced.html">Advanced Elements</a>
                          </li>
                          <li>
                            <a href="forms/layouts.html">Form Layouts</a>
                          </li>
                          <li>
                            <a href="forms/validation.html">Form Validation</a>
                          </li>
                          <li>
                            <a href="forms/wizards.html">Form Wizard</a>
                          </li>
                          <li>
                            <a href="forms/wizards-2.html">Form Wizard 2</a>
                          </li>
                          <li>
                            <a href="forms/editors.html">Editors</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="#"><i className="icon-fa icon-fa-image" /> Gallery <span className="icon-fa arrow icon-fa-fw" /> </a>
                        <ul aria-expanded="true" className="collapse">
                          <li>
                            <a href="gallery/grid.html">Gallery Grid</a>
                          </li>
                          <li>
                            <a href="gallery/masonry-grid.html">Gallery Masonry Grid</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="#"><i className="icon-fa icon-fa-file" /> Pages <span className="icon-fa arrow icon-fa-fw" /> </a>
                        <ul aria-expanded="true" className="collapse">
                          <li>
                            <a href="../../login.html">Login</a>
                          </li>
                          <li>
                            <a href="login-2.html">Login 2</a>
                          </li>
                          <li>
                            <a href="login-3.html">Login 3</a>
                          </li>
                          <li>
                            <a href="../../register.html">Register</a>
                          </li>
                          <li>
                            <a href="register-2.html">Register 2</a>
                          </li>
                          <li>
                            <a href="register-3.html">Register 3</a>
                          </li>
                          <li>
                            <a href="404.html">404 Page</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="#"><i className="icon-fa icon-fa-user" /> Users <span className="icon-fa arrow icon-fa-fw" /> </a>
                        <ul aria-expanded="true" className="collapse">
                          <li>
                            <a href="users.html">All Users</a>
                          </li>
                          <li>
                            <a href="users/1.html">User Profile</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="todos.html"><i className="icon-fa icon-fa-check" /> Todo App </a>
                      </li>

                      <li>
                        <a href="#"><i className="icon-fa icon-fa-cogs" /> Settings <span className="icon-fa arrow icon-fa-fw" /> </a>
                        <ul aria-expanded="true" className="collapse">
                          <li>
                            <a href="settings/social.html">Social</a>
                          </li>
                        </ul>
                      </li>
                      
                      
                  </ul>

                </div>
              </div>
            </div>

            
        )
    }
}

export default Navigation
