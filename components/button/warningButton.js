import React from "react";

export default class warningButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button type="button" className="btn-warning">{this.props.text}</button>
    );
  }
}