import React from "react";

export default class primaryButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button type="button" className="btn-primary">{this.props.text}</button>
    );
  }
}