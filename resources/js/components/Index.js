import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import FrontApp from './Front/FrontApp';
import AdminApp from './Admin/AdminApp';
import AdminLogin from './Admin/AdminLogin';





export default class Index extends Component {

    
    render() {

        
        return (
            <div>
               

           
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

