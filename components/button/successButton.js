import React from "react";

export default class successButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button type="button" className="btn-success">{this.props.text}</button>
    );
  }
}