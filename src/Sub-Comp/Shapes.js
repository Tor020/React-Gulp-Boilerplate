import React from "react";

class Shape extends React.Component {
  render() {

    return (
      <div className={this.props.shape} style={this.props.style}>
        {this.props.text}
      </div>
    )
  }
}

export default Shape