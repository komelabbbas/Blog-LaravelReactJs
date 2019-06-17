import React, { Component } from 'react'
import TodoList from './TodoList';
import axios from 'axios'

import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import Loading from 'react-loading-bar'
import 'react-loading-bar/dist/index.css'

let uri = '/Todo';

export class Todo extends Component {

      constructor(props) {
          super(props)
          
          this._FormSubmit =  this._FormSubmit.bind(this)  ;
          this._DeleteTodo =  this._DeleteTodo.bind(this)  ;
          this._GetTodoList = this._GetTodoList.bind(this) ;

          this.state = {

                todo_text : '' ,
                LoadingShow : false ,
                item :[] ,

          } // End of State
      } // End of Constructor


    componentDidMount(){
         this.setState({ LoadingShow: true })
          this._GetTodoList() ;
    }

    _GetTodoList() {

       axios
          .get(uri)
          .then(
            (response) => 
            { 

              this.setState({
                item : response.data
              })
              this.setState({ LoadingShow: false })
            } ,
            (error) => { console.log(error) }  
         );
        

    } // Enf of _GetTodoList



    _FormSubmit  (e) {

        e.preventDefault() ;

        let new_todo = this.state.item ;

        this.setState({ LoadingShow: true })

        if(this.state.todo_text === '')
        {
             NotificationManager.error('Please Fill Todo' , '' , 1000) ;
        }
        else
        {

          let data = { 'description' : this.state.todo_text }
         

          axios
            .post(uri,data)
            .then(

              (response) => {
                    this.setState({
                      item : response.data ,
                      todo_text : ''
                    })
                } ,

              (error) => { console.log(error) }  

            );

         
          NotificationManager.success('Todo Add Successfully' , '' , 1000);
        }
       
        setTimeout(() => {
          this.setState({ LoadingShow: false })
        }, 300);
        
    } // Enf of _FormSubmit


    _DeleteTodo  (id)  {

      this.setState({ LoadingShow: true })

       
       
        axios
          .delete(uri+'/'+id)
          .then(
            
            (res) => {
            
              this.setState({ LoadingShow: false })

                this.setState({
                  item : res.data
                })

                NotificationManager.warning('Todo Remove Successfully' , '' , 1000);
              } ,

            (error) => { console.log(error) }  

          );

    } // Enf of _DeleteTodo

  
  

    render() {

       
        
        return (
            
            <div className='main_section'>

                  {/* Loading Bar Show ************  */}
                  <Loading
                      show={this.state.LoadingShow}
                      color="green"
                    />
                    
                  <div className='row'>

                      <div className='col-md-12'>
                          <br/>
                      </div>

                      <div className='col-md-12 todo_border'>

                        <div className='col-md-3'></div>

                        <div className='col-md-6' id="todo_body">

                              <div className="center_heading">
                                  <h4>TODOS APP</h4>
                                  <p>This Demo showcases a simple workflow with Laravel and React Js.</p>
                              </div>

                              <div>
                                  <br/>
                                  <form onSubmit={this._FormSubmit} autoComplete="off">
                                      <input 
                                      type="text" 
                                      name="todo_text" 
                                      value={this.state.todo_text}  
                                      onChange={ (e) => ( this.setState({  todo_text : e.target.value }) ) } 
                                      className="form-control"
                                      placeholder="New Todo"
                                      />
                                  </form>
                              </div>

                              <div>
                                  <TodoList list = {this.state.item} _DeleteTodo={this._DeleteTodo}/>
                              </div>


                        </div>  {/* end of todo_body */}
                    
                        <div className='col-md-3'></div>

                      </div>

                </div> {/* end of main row */}

            <NotificationContainer/> 

            </div>  // end of main div main_section

        ) // return

    } // render

} // main class 

export default Todo
