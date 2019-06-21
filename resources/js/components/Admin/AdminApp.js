import React, { Component } from 'react'
import { BrowserRouter as Router, Route  , NavLink , Redirect , Switch}  from "react-router-dom";


import Dashboard from './Dashboard';
import Category from './Category';

import Blog from './Blog';
import AdminLogin from './AdminLogin';

import Logout from './Logout';



export class AdminApp extends Component {
   
    
  
    render() {
       
       return (
           
           <div className="layout-default skin-default"> 
           
            <div id="app" className="site-wrapper">

                    <Router>

                      
                    
                        
                        <Route exact path="/admin"  component={AdminLogin} />
                        <Route exact path="/admin/logout"  component={Logout} /> 
                        <Route exact path="/admin/dashboard"  component={Dashboard} />
                        <Route exact path="/admin/category"  component={Category} /> 
                        <Route exact path="/admin/blog"  component={Blog} /> 
                   
                        
                        
                        
                    </Router> 

                <footer className="site-footer">
                    <div className="text-right">
                        Powered by <a href="http://bytefury.com/" target="_blank">Bytefury</a>
                    </div>
                </footer>

                <div className="skin-tools">

                    <a className="skin-tools-action">
                        <i className="icon-fa icon-fa-cog" />
                    </a>

                    <div className="skin-tools-content">

                            <h5 className="mt-2">Select Skin</h5>
                            <div className="row mt-md-4">
                                <div className="col-sm-6 skin-item">
                                    <a href="#" className="skin-radio active" data-skin="default" title="Skin - Default">
                                    <img src="/assets/global/img/skins/skin-default.png" className="img-fluid" />
                                    </a>
                                </div>
                                <div className="col-sm-6 skin-item">
                                    <a href="#" className="skin-radio" data-skin="tyrell" data-logo="white" title="Skin - Tyrell">
                                    <img src="/assets/global/img/skins/skin-tyrell.png" className="img-fluid" />
                                    </a>
                                </div>
                            </div>

                        <div className="row mt-md-4">
                            <div className="col-sm-6 skin-item">
                                <a href="#" className="skin-radio" data-skin="arryn" data-logo="white" title="Skin - Arryn">
                                <img src="/assets/global/img/skins/skin-arryn.png" className="img-fluid" />
                                </a>
                            </div>

                            <div className="col-sm-6 skin-item">
                                <a href="#" className="skin-radio" data-skin="lannister" data-logo="white" title="Skin - Lannister">
                                <img src="/assets/global/img/skins/skin-lannister.png" className="img-fluid" />
                                </a>
                            </div>

                        </div>

                        <div className="row mt-md-4">
                            <div className="col-sm-6 skin-item">
                                <a href="#" className="skin-radio" data-skin="stark" title="Skin - Stark">
                                <img src="/assets/global/img/skins/skin-stark.png" className="img-fluid" />
                                </a>
                            </div>

                            <div className="col-sm-6 skin-item">
                                <a href="#" className="skin-radio" data-skin="targaryen" title="Skin - Targaryen">
                                <img src="/assets/global/img/skins/skin-targaryen.png" className="img-fluid" />
                                </a>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>

        )
    }
}

export default AdminApp

