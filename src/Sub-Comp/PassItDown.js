import React from 'react';
import WowUBarelyMoved from 'react'

 class DeepProp extends React.Component{

  render(props){
    return(
      <WowUBarelyMoved {message = props.message} />
    )
  }
}

export default DeepProp