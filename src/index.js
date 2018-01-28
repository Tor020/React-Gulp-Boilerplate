// Dependency import
import React from 'react';
import { render } from 'react-dom';

// Component Import
import BaseRouter from './Top-Comp/Router'
import ShapePage from './Top-Comp/ShapePage'
import DualBindParent from './Top-Comp/DualBindParent'

class Root extends React.Component{

  render(){
    return (
    <React.Fragment>
      <BaseRouter/>
      <ShapePage/>
      <DualBindParent/>
    </React.Fragment>

    )
  }
}




render(<Root/>, document.getElementById('root'))
 