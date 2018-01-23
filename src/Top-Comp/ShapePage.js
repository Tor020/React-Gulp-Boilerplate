import React from "react";
import Shape from '../Sub-Comp/Shapes'
import demStyles from '../Sub-Comp/Shape.css'

class ShapePage extends React.Component {

  render() {
    console.log(demStyles)
    return (
      <div>
        <Shape
          shape="square"
          style={{
          top: 2 + 'em',
          left: 2 + 'em'
        }}
          text="Text goes inside the square"/>

        <Shape
          shape="circle"
          style={{
          top: 8 + 'em',
          left: 5 + 'em'
        }}
          text="This text doesn't fit in the circle, fuck jk"/>
      </div>
    )
  }
}

export default ShapePage