import React from "react";
import TwoDown from "./TwoDown";


class OneDown extends React.Component {
  render(props) {

    return (
      <div>
       <TwoDown props = {this.props.text}/>
      </div>
    )
  }
}

export default OneDown