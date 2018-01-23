import React from 'react';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const Topic = ({ match }) => ( 
  console.log('Call To Topics SubRoute'), 
  console.log(match), //These console log statements should help remind you of what match is
<React.Fragment>

  <h3>This is the  entire url</h3>{match.url}
  <h3>This is the name specific component we're rendering</h3>    {match.params.topicId}

</React.Fragment> 
)

const Topics = ({match}) => (
  console.log(match), //These console log statements should help remind you of what match is
  console.log('Call To Topics'), 

  <div>
    <h2>Topics</h2>
    <ul>
      <li><Link to={`${match.url}/rendering`}>Rendering with react</Link></li>
      <li><Link to={`${match.url}/components`}>Components</Link></li>
      <li><Link to={`${match.url}/props-v-state`}>Props vs State</Link></li>
    </ul>

  
       {/* When a Route Path matches you can choose to pass in a component, */}
       <Route path ='/topics/:topicId' component = {Topic}/>
       {/* OR  */}
       {/* You can pass in a call to render and output an inline expression */}
       <Route exact path = {match.url}
        render = {  () => ( <p> Please Select a Topic  </p>  )}/>

  </div>
);

export default Topics;



