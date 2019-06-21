import React, { Component } from 'react'
import {Redirect}  from "react-router-dom";

class Auth extends Component {

    constructor(props) {
        super(props)
    
        
    } // end of constructor
  
  
    isAuthenticated() {
        let checkauth = localStorage.getItem("token");
        let authenticate = true 
        

       if(typeof checkauth == 'undefined' || checkauth == null)
       {
         authenticate = false
       }
       
      return authenticate;
    }

    RedirectTo () {
        return <Redirect to='/admin' /> 
    }


  }
  
  export default new Auth();
  