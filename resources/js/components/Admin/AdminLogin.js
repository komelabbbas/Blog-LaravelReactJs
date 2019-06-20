import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route  , NavLink , Redirect}  from "react-router-dom";

import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export class AdminLogin extends Component {

    constructor(props) {
        super(props)
    
        this._FormSubmit =  this._FormSubmit.bind(this)  ;
        this.__InputText =  this.__InputText.bind(this)  ;

        this.state = {
             UserEmail : '' ,
             userPassword : '' ,
             LoginVerify : false ,
        }
    } // end of constructor

    __InputText (e) {

            let value = e.target.name
            
            this.setState({
                [value] : e.target.value
                
            })
        
    } // end of __InputText
    

    _FormSubmit  (e) {

        e.preventDefault() ;

        let uri = '/adminlogin';
        let data = { 'email' : this.state.UserEmail , 'password' : this.state.userPassword }

        if(this.state.UserEmail === '' || this.state.userPassword === '')
        {
            NotificationManager.error('Enter Valid Email & Password !' , '' , 2000);
        }
        else{
            axios
            .post(uri , data)
            .then(

              (response) => {
                    console.log(response.data)
                    if(response.data > 0)
                    {
                        this.setState({
                            LoginVerify : true
                        })
                      
                        window.location.href = '/admin/dashboard'
                        
                    }
                    else{
                        NotificationManager.error('Enter Valid Email & Password !' , '' , 2000);
                    }
                    
                } ,

              (error) => { console.log(error) }  

            );
        } // else
       

          
            
    } // end of _FormSubmit

    render() {

        return (
            
            <div id="app" className="login-wrapper">

                {this.state.LoginVerify ? 
                    <Router>
                    <Redirect to='/admin/dashboard' />
                    </Router>
                    
                : ''}
            
            
                <form  onSubmit={this._FormSubmit}  id="loginForm">
                    
                        <div className="form-group">
                            <input 
                                type="email" 
                                className="form-control form-control-danger" 
                                placeholder="Enter email" 
                                name="UserEmail" 
                                value={this.state.UserEmail} 
                                onChange={this.__InputText}
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="password" 
                                className="form-control form-control-danger" 
                                placeholder="Enter Password"
                                name="userPassword" value={this.state.userPassword}
                                onChange={this.__InputText}
                                />
                        </div>

                        <div className="other-actions row">
                            <div className="col-6">
                                <div className="checkbox">
                                    <label className="c-input c-checkbox">
                                        <input type="checkbox" name="remember" />
                                        <span className="c-indicator"></span>
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                            <div className="col-6 text-right">
                                <a href="forgot-password.html" className="forgot-link">Forgot Password?</a>
                            </div>
                        </div>

                        <button className="btn btn-theme btn-full">Login</button>

                        <div className="form-group other-options">

                            <div className="social-caption pull-left">
                                <h6>
                                    Or Login With
                                </h6>
                            </div>

                            <div className="social-icons pull-right">
                                <a href="auth/facebook.html" className="btn btn-default text-primary btn-icon"><i
                                        className="icon-fa icon-fa-facebook"></i></a>
                                <a href="auth/google.html" className="btn btn-default text-danger btn-icon"><i
                                        className="icon-fa icon-fa-google"></i></a>
                                <a href="auth/github.html" className="btn btn-default btn-icon text-default"><i
                                        className="icon-fa icon-fa-github"></i></a>
                            </div>
                            
                        </div>
                </form>
                <NotificationContainer/> 

            </div>
        )
    }
}

export default AdminLogin
