import React, { Component } from 'react'
import { BrowserRouter as Router, Route  , NavLink }  from "react-router-dom";

export class Header extends Component {
    render() {
        return (
          
            <div>

                  <div className="col-md-12 heading">

                       
                        <NavLink  exact  to="/"> <h1>CLEAN &amp; SIMPLE</h1> </NavLink>
                        <p>Your optional togline is place here</p>

                  </div>

                  <div className="col-md-12" id="menu">

                        <ul>
                            <li> <NavLink  exact activeClassName="active" to="/">Home </NavLink></li>
                            <li> <NavLink  exact activeClassName="active" to="/article">Article </NavLink></li>
                            <li> <NavLink  exact activeClassName="active" to="/about">About </NavLink></li>
                            <li> <NavLink  exact activeClassName="active" to="/contact">Contact </NavLink></li>
                        </ul>

                  </div>

            </div>  
          

        )
    }
}

export default Header
