import React, { Component } from 'react'
import { BrowserRouter as Router, Route  , NavLink }  from "react-router-dom";


import Dashboard from './Dashboard';
import Category from './Category';
import Navigation from './Navigation';
import Blog from './Blog';
import AdminLogin from './AdminLogin';


export class AdminApp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                
             
                 <Router>
                   
                    <Navigation />
                
            
                    <Route exact path="/admin"  component={AdminLogin} />
                    <Route exact path="/admin/dashboard"  component={Dashboard} />
                    <Route exact path="/admin/category"  component={Category} /> 
                    <Route exact path="/admin/blog"  component={Blog} /> 
                 
                </Router> 

            </div>
        )
    }
}

export default AdminApp

