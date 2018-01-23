import React from "react";
import DualBindText from '../Sub-Comp/DualBindText'

class DualBindParent extends React.Component {
  constructor() {
    super();

    this.changeTheText = this
      .changeTheText
      .bind(this);

    this.state = {
      text: "this is the new text to be inserted"
    };
  }

  changeTheText(e) {

    const updatedState = e.target.value;

    this.setState({text: updatedState});
  }

  render() {

    const changingText = this.state.text;

    return (
      <React.Fragment>

        <DualBindText type="text" info={changingText} textChange={this.changeTheText}/>

      </React.Fragment>
    );
  }
}
export default DualBindParent
