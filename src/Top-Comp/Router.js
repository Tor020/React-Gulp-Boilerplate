import React from "react";
import { render } from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import About from "../Route-Comp/Home";
import Home from "../Route-Comp/About";
import Topics from "../Route-Comp/Topics";


class BaseRouter extends React.Component{
  render(){
    return(
    <Router>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/topics'>Topics</Link></li>
          </ul>


          <Route exact path ='/' component ={Home}/>
          <Route path ='/about' component ={About}/>
          <Route path ='/topics' component ={Topics}/>

        </div>
    </Router> 
    )
  } 
}

export default BaseRouter
