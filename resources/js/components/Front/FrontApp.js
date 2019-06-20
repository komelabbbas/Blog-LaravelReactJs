import React, { Component } from 'react'
import Header from './Header';
import { BrowserRouter as Router, Route  , NavLink }  from "react-router-dom";
import Home from './Home';
import Article from './Article';
import AboutUs from './AboutUs';
import Contact from './Contact';
import SideBar from './SideBar';

export class FrontApp extends Component {
    render() {
        return (
            <div className="row">

                <div className="container-fluid" id="wholesection">

                    <div className="col-md-12" id="mainsection">
                    <Router>
                                <Header/>

                                <div className="col-md-8">
                               
                                     <Route exact path="/"  component={Home} />
                                     <Route exact path="/article"  component={Article} /> 
                                     <Route exact path="/about"  component={AboutUs} /> 
                                     <Route exact path="/contact"  component={Contact} /> 
                                    
                                </div>  {/* end of navigation content */}
                    </Router>               

                                <div className="col-md-4" id="sidebar">

                                     <SideBar />
                                     
                                </div> {/* end of sidebar */}

                     </div> {/* end of mainsection */}

                  

                </div> {/* end of wholesection */}

          </div> // end of main row
        
          
        )
    }
}

export default FrontApp
