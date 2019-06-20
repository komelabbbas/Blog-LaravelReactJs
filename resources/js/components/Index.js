import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route  , NavLink }  from "react-router-dom";


// import Blog from './Front/Blog';
// import AdminIndex from './Admin/Index';
// import Dashboard from './Admin/Dashboard';
import FrontApp from './Front/FrontApp';
import AdminApp from './Admin/AdminApp';
import AdminLogin from './Admin/AdminLogin';





export default class Index extends Component {
    render() {

        
        return (
            <div>
               

            {/* <Router>

           
                <NavLink  exact activeClassName="Menuactive" to="/">Todo </NavLink>
                <NavLink  exact activeClassName="Menuactive" to="/admin">Blog </NavLink>

          
                <Route exact path="/"  component={Blog} />
                <Route exact path="/admin"  component={AdminIndex} />
                <Route exact path="/dashboard"  component={Dashboard} />
                
                 
            </Router> */}
            </div>
        );
    }
}

if (document.getElementById('FRONT-REACTJS')) {
    ReactDOM.render(<FrontApp />, document.getElementById('FRONT-REACTJS'));
}

if (document.getElementById('ADMIN-REACTJS')) {

    ReactDOM.render(<AdminApp />, document.getElementById('ADMIN-REACTJS'));
}

if (document.getElementById('ADMIN-LOGIN-REACTJS')) {

    ReactDOM.render(<AdminLogin />, document.getElementById('ADMIN-LOGIN-REACTJS'));
}

