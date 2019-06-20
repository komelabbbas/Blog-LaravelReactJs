// import React, { Component } from 'react'
// import axios from 'axios'
// import { BrowserRouter as Router, Route  , NavLink , Redirect}  from "react-router-dom";
// import Blog from '.././Front/Blog';

// export class Login extends Component {

//     constructor(props) {
//         super(props)
    
//         this._FormSubmit =  this._FormSubmit.bind(this)  ;
//         this.__InputText =  this.__InputText.bind(this)  ;
//         this.state = {
//              UserEmail : '' ,
//              userPassword : '' ,
//              LoginVerify : false ,
//         }
//     }

//     __InputText (e) {
//             let value = e.target.name
            
//         this.setState({
//             [value] : e.target.value
            
//         })
        
//     }
    
//     _FormSubmit  (e) {

//         e.preventDefault() ;

//         let uri = '/adminlogin';
//         let data = { 'email' : this.state.UserEmail , 'password' : this.state.userPassword }

//         axios
//             .post(uri , data)
//             .then(

//               (response) => {
//                     // console.log(response.data.verify)
//                     if(response.data > 0)
//                     {
//                         this.setState({
//                             LoginVerify : true
//                         })
//                     }
                    
//                 } ,

//               (error) => { console.log(error) }  

//             );

          
            
//     }

//     render() {
//         return (
            
// <div id="app" className="login-wrapper">

// {this.state.LoginVerify ? 
//     <Redirect to='/dashboard' />
//  : ''}
//     <div className="login-box">
//         <div className="logo-main">
//             <a href="index.html"><img src="assets/global/img/logo-large.png" alt="Laraspace Logo" /></a>
//         </div>
//         <form  onSubmit={this._FormSubmit}  id="loginForm">
            
//             <div className="form-group">
//                 <input 
//                     type="email" 
//                     className="form-control form-control-danger" 
//                     placeholder="Enter email" 
//                     name="UserEmail" 
//                     value={this.state.UserEmail} 
//                     onChange={this.__InputText}
//                 />
//             </div>
//             <div className="form-group">
//                 <input 
//                     type="password" 
//                     className="form-control form-control-danger" 
//                     placeholder="Enter Password"
//                     name="userPassword" value={this.state.userPassword}
//                     onChange={this.__InputText}
//                     />
//             </div>
//             <div className="other-actions row">
//                 <div className="col-6">
//                     <div className="checkbox">
//                         <label className="c-input c-checkbox">
//                             <input type="checkbox" name="remember" />
//                             <span className="c-indicator"></span>
//                             Remember Me
//                         </label>
//                     </div>
//                 </div>
//                 <div className="col-6 text-right">
//                     <a href="forgot-password.html" className="forgot-link">Forgot Password?</a>
//                 </div>
//             </div>
//             <button className="btn btn-theme btn-full">Login</button>
//             <div className="form-group other-options">
//                 <div className="social-caption pull-left">
//                     <h6>
//                         Or Login With
//                     </h6>
//                 </div>
//                 <div className="social-icons pull-right">
//                     <a href="auth/facebook.html" className="btn btn-default text-primary btn-icon"><i
//                             className="icon-fa icon-fa-facebook"></i></a>
//                     <a href="auth/google.html" className="btn btn-default text-danger btn-icon"><i
//                             className="icon-fa icon-fa-google"></i></a>
//                     <a href="auth/github.html" className="btn btn-default btn-icon text-default"><i
//                             className="icon-fa icon-fa-github"></i></a>
//                 </div>
//             </div>
//         </form>
//         <div className="page-copyright">
//             <p>Powered by <a href="http://bytefury.com/" target="_blank">Bytefury</a></p>
//             <p>Laraspace © 2017</p>
//         </div>
//     </div>
// </div>
//         )
//     }
// }

// export default Login
