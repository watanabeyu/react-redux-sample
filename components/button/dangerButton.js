import React from "react";

export default class dangerButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button type="button" className="btn-danger">{this.props.text}</button>
    );
  }
}