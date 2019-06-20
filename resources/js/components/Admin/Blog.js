import React, { Component } from 'react'
import axios from 'axios'


import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import Loading from 'react-loading-bar'
import 'react-loading-bar/dist/index.css'

let uri = '/admin/blog/1';
let uriCategory = '/admin/category/';


export class Blog extends Component {

    constructor(props) {
        super(props)
    
        this._InputTextChange = this._InputTextChange.bind(this)
        this._SaveBlog = this._SaveBlog.bind(this)
        this._handleImageChange = this._handleImageChange.bind(this)
        
        
        this.state = {
            LoadingShow : false ,
            blog : [] ,
            BlogTitle : '' ,
            BlogDescription : '' ,
            BlogImage : '' ,
            CategoryId : '' ,
            Categories : [] ,
            file : '' ,
            imagePreviewUrl : '' ,
        }
    } // end of constructor

    
    componentDidMount() {
      
        axios
        .get(uri)
        .then(
          (response) => 
          { 
            
          
            this.setState({
                BlogTitle : response.data.title ,
                BlogDescription : response.data.description ,
                CategoryId : response.data.Categoryid ,
                imagePreviewUrl : '/images/'+response.data.photo ,
                LoadingShow: false
                },
            )
            
          } ,
          (error) => { console.log(error) }  
      ); // blog data

      axios
      .get(uriCategory + '0')
      .then(
        (response) => 
        { 
          
          this.setState({
            Categories : response.data ,
              },
          )
        } ,
        (error) => { console.log(error) }  
    ); // category data
 

    }  // end of componentDidMount

   
  
    _handleImageChange(e) {

        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result ,
            BlogImage : reader.result
          });
        }
    
        reader.readAsDataURL(file)

      
    } // end of _handleImageChange

    
    _InputTextChange (e) {

        let field = e.target.name ;
  
          this.setState({
            [field] : e.target.value
          })
   }

    

    _SaveBlog (e) {

      e.preventDefault() ;
      
      if(this.state.BlogTitle === '' || this.state.BlogDescription === '' || this.state.CategoryId === '0' || this.state.CategoryId === '' || this.state.CategoryId === 0 ||this.state.imagePreviewUrl == '')
      {
        NotificationManager.error('Please Fill Data' , '' , 1000);
      }
      else{
        
          this.setState({ LoadingShow: true })

          let content = {
              'title' : this.state.BlogTitle  , 
              'description' : this.state.BlogDescription ,
              'Category' : this.state.CategoryId ,
              'BlogImage' : this.state.BlogImage
              }
        
          axios
          .put(uri  , content )
          .then(
            (response) => 
            { 
              
            
              this.setState({
                BlogTitle : response.data.title ,
                BlogDescription : response.data.description ,
                CategoryId : response.data.Categoryid ,
                imagePreviewUrl : '/images/'+response.data.photo ,
                LoadingShow: false
                },
            )
              
            
            NotificationManager.success('Blog Save Successfully' , '' , 2000);
            } ,
            (error) => { console.log(error) }  
        );
      } // else
     

    } // end of _SaveBlog

    

    render() {

      const form_input = {
        paddingTop: '10px' ,
        fontSize: '15px',
        textShadow: '1px 0 gray' ,
        
      };
        //  let path =  '/images/' + this.state.imagePreviewUrl
        let path =  this.state.imagePreviewUrl
        
      
        return (

        <div className="main-content">
            
                  {/* Loading Bar Show ************  */}
                  <Loading
                      show={this.state.LoadingShow}
                      color="green"
                    />
                   
                   
                <h3 className="page-title">Blog</h3>

                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="dashboard/basic.html">Home</a></li>
                  <li className="breadcrumb-item"><a href="users.html">Blog</a></li>
                  
                </ol>

                <div className="page-actions">
                  

                </div>
              
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                              
                              <div className="card-block" id="content">
                                  <form onSubmit={this._SaveBlog}    encType="multipart/form-data" >
                                    <div className="row">

                                  
                                        <div className="col-md-2">
                                            <h6  style={form_input}>Title :</h6>
                                        </div>

                                        <div className="col-md-7">
                                            <input type="text" name="BlogTitle"  className="form-control" value={this.state.BlogTitle} onChange={this._InputTextChange}/>
                                        </div>

                                        <div className="col-md-2"></div>
                                        
                                
                                        <div className="col-md-12"> <br/> </div>
                                    

                                        <div className="col-md-2">
                                            <h5 style={form_input}>Description :</h5>
                                        </div>

                                        <div className="col-md-7">
                                            <textarea value={this.state.BlogDescription} name="BlogDescription" className="form-control" style={{ height : '100px' }} onChange={this._InputTextChange}>
                                            </textarea>
                                        </div>

                                        <div className="col-md-2"></div>
                                        

                                        <div className="col-md-12"> <br/> </div>

                                        <div className="col-md-2">
                                            <h5 style={form_input}>Category :</h5>
                                        </div>

                                        <div className="col-md-7">
                                          <select className="form-control" name="CategoryId" onChange={this._InputTextChange} value={this.state.CategoryId}>
                                            <option value="0">Select --</option>
                                            
                                            {
                                                this.state.Categories.map((item , index) => (
                                                    <option value={item.id} key={index}>{item.name}</option>
                                                ))
                                            }
                                          </select>
                                          
                                        </div>

                                        <div className="col-md-2"></div>
                                        
                                
                                        <div className="col-md-12"> <br/> </div>
                                    

                                        <div className="col-md-2">
                                            <h5 style={form_input}> Image :</h5>
                                        </div>

                                        <div className="col-md-7">
                                            <input type="file" name="BlogImage"   className="form-control" onChange={this._handleImageChange}/>
                                        </div>

                                        <div className="col-md-3">
                                            <a href={path} target="_blank">
                                            <img src={path}  alt ="Image" style={{ width : '80px' , height : '80px' }}/>
                                            </a>
                                        </div>


                                        <div className="col-md-12"> <br/><br/> </div>

                                        <div className="col-md-3"></div>
                                        
                                        <div className="col-md-9"> 
                                            <button type="submit" className="btn btn-info btn-lg" style={{ cursor : 'pointer' }}> Save </button>
                                        </div>
                                  
                                    </div>
                                </form>
                              

                              
                            </div>
                      </div>
                  </div>
              </div>

              

                  

              <NotificationContainer/> 




        </div>

        )
    }
}

export default Blog
