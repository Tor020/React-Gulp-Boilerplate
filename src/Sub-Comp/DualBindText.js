import React from "react";
import { render } from "react-dom";


class DualBindText extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Working">{this.props.info}</div>

        <input
          type={this.props.type}
          value={this.props.info}
          onChange={e => this.props.textChange(e)}
        />
      </React.Fragment>
    );
  }
}

export default DualBindText
