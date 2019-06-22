import React, { Component } from 'react'
import { BrowserRouter as Router, Route  , NavLink }  from "react-router-dom";

export class AdminHeader extends Component {
    render() {
        return (
           <header className="site-header">
  <a href="#" className="brand-main">
    <img src="/assets/global/img/logo-desk.png" id="logo-desk" alt="Laraspace Logo" className="hidden-sm-down" />
    <img src="/assets/global/img/logo-mobile.png" id="logo-mobile" alt="Laraspace Logo" className="hidden-md-up" />
  </a>
  <a href="#" className="nav-toggle">
    <div className="hamburger hamburger--htla">
      <span>toggle menu</span>
    </div>
  </a>
  <ul className="action-list">
    <li>
      <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="icon-fa icon-fa-plus" /></a>
      <div className="dropdown-menu dropdown-menu-right">
        <a className="dropdown-item" href="#"><i className="icon-fa icon-fa-edit" /> New Post</a>
        <a className="dropdown-item" href="#"><i className="icon-fa icon-fa-tag" /> New Category</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#"><i className="icon-fa icon-fa-star" /> Separated link</a>
      </div>
    </li>
    <li>
      <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="icon-fa icon-fa-bell" /></a>
      <div className="dropdown-menu dropdown-menu-right notification-dropdown">
        <h6 className="dropdown-header">Notifications</h6>
        <a className="dropdown-item" href="#"><i className="icon-fa icon-fa-user" /> New User was Registered</a>
        <a className="dropdown-item" href="#"><i className="icon-fa icon-fa-comment" /> A Comment has been posted.</a>
      </div>
    </li>
    <li>
      <a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="avatar"><img src="/assets/global/img/avatars/avatar.png" alt="Avatar" /></a>
      <div className="dropdown-menu dropdown-menu-right notification-dropdown">
        <a className="dropdown-item" href="settings.html"><i className="icon-fa icon-fa-cogs" /> Settings</a>
        <NavLink  exact activeClassName="active" to="/admin/logout" >
            <i className="icon-fa icon-fa-sign-out" /> Logout
        </NavLink>
      </div>
    </li>
  </ul>
</header>

        
        
        )
    }
}

export default AdminHeader
