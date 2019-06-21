import React, { Component } from 'react'
import auth from "./Auth";

import AdminHeader from './AdminHeader';
import Navigation from './Navigation';
export class Dashboard extends Component {
    render() {

      if (auth.isAuthenticated() === false) {
        return auth.RedirectTo()
      }

        return (
            <div>
               <div className="main-content">
                  <AdminHeader />
                        
                  <Navigation />   
                  <h3>Dashboard</h3>
               </div>
            </div>
        )
    }
}

export default Dashboard
