import React, { Component } from 'react'

export class SideBar extends Component {
    render() {
        return (
            <div>
                  <h4>WELCOME</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error magni fuga minima omnis ab placeat hic, consequatur, sequi, iure obcaecati sed assumenda aut quibusdam in? Quaerat sequi quam illum est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error magni fuga minima omnis ab placeat hic, consequatur, sequi, iure obcaecati sed assumenda aut quibusdam in? Quaerat sequi quam illum est.</p>

                  <div className="share">
                      <ul>
                          <li><a href="#/"> <i className="fa fa-facebook" aria-hidden="true"></i> </a></li>
                          <li><a href="#/"> <i className="fa fa-twitter" aria-hidden="true"></i> </a></li>
                          <li><a href="#/"> <i className="fa fa-envelope" aria-hidden="true"></i> </a></li>
                          <li><a href="#/"> <i className="fa fa-pinterest-p" aria-hidden="true"></i> </a></li>
                      </ul>
                  </div>

                  <div className="search">
                      <h4>SEARCH</h4>
                      <div className="col-md-8 col-sm-8 col-xs-8" style={{ margin : '0' , padding : '0' }}>
                            <input type="text" style={{ width : '100%' , height : '30px'}}/>
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-4">
                          <a href="#/"> <i className="fa fa-angle-right" aria-hidden="true"></i> </a>
                      </div>
                  </div>
                  <div></div>
            </div>
        )
    }
}

export default SideBar
