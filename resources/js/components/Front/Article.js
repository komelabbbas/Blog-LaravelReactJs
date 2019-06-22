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
                CategoryName : ''
             
               
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
                CategoryName : response.data.category.name
                },
            )
            
          } ,
          (error) => { console.log('error' + error) }  
      );

    }

   

    render() {
         let path = '/images/'+this.state.blog.photo ;

        const cat = {
            
            float :  'right', 
            paddingRight : '20px' ,
            fontStyle: 'italic' ,
            
        }

        return (
            <div id="BlogStyle">
               
                    <p className="dateformat"> 
                        <Moment format="MMMM DD, YYYY">{ this.state.blog.updated_at }</Moment>
                        <span style={cat}>{ this.state.CategoryName }</span>
                    </p>
                
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
