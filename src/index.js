// Dependency import
import React from 'react';
import { render } from 'react-dom';

// Component Import
import BaseRouter from './Top-Comp/Router'
import ShapePage from './Top-Comp/ShapePage'


class Root extends React.Component{

  render(){
    return (
    <React.Fragment>
      <BaseRouter/>
      <ShapePage/>
    </React.Fragment>

    )
  }
}




render(<Root/>, document.getElementById('root'))
 