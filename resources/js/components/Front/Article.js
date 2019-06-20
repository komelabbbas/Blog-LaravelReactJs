import React, { Component } from 'react'
import axios from 'axios'

import Moment from 'react-moment';
import 'moment-timezone';
 

let uri = '/admin/blog/1';

export class Article extends Component {

        constructor(props) {
            super(props)
        
            this.state = {
               
                blog : [] ,
             
               
            }
        }
        

    componentDidMount(){
        axios
        .get(uri)
        .then(
          (response) => 
          { 
            
           
            this.setState({
                blog : response.data ,
                },
            )
            
          } ,
          (error) => { console.log('error' + error) }  
      );

    }

   

    render() {
         let path = '/images/'+this.state.blog.photo ;

        return (
            <div id="BlogStyle">
                {/* {console.log(this.state.blog)} */}

                    <p className="dateformat"> <Moment format="MMMM DD, YYYY">{ this.state.blog.updated_at }</Moment></p>
                
                    <h3>{this.state.blog.title}</h3>

                    <div className="content">
                        <p>{this.state.blog.description}</p>
                    </div>

                    { typeof this.state.blog.photo != 'undefined' &&  
                    
                        <div className="imageeffect">
                            <img src={path} alt="Image"/>
                        </div> 
                    }
               
              
            </div>
        )
    }
}

export default Article
