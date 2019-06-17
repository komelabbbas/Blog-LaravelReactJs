import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo'


export default class Index extends Component {
    render() {
        return (
            <div>

                 
            </div>
        );
    }
}

if (document.getElementById('React_Object')) {
    ReactDOM.render(<Todo />, document.getElementById('React_Object'));
}
