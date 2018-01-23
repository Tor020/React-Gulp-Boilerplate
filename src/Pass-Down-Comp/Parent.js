import React from "react";
import OneDown from "./OneDown"

class Parent extends React.Component {
  render() {

    return (
      <div>
      <OneDown text = {props.text} />
      </div>
    )
  }
}

export default Parent