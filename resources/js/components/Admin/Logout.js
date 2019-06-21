import React, { Component } from 'react'
import { Redirect}  from "react-router-dom";


export class Logout extends Component {

    constructor(props) {
        super(props)
        localStorage.removeItem("token")
        this.state = {
             
        }
    }
    
    render() {
        return (
           
            <Redirect to='/admin' />

        )
    }
}

export default Logout
