import React from "react"
import ReactDOM from "react-dom";
import { Link } from 'react-router';

/* css */
import styles from './foobar.scss'

export default class Foobar extends React.Component {
  constructor(props) {
    super(props);

    this.fooFunc = this.fooFunc.bind(this);
    this.barFunc = this.barFunc.bind(this);
  }

  fooFunc() {
    this.props.set_foo(ReactDOM.findDOMNode(this.refs.foo).value);
  }

  barFunc() {
    this.props.set_bar(ReactDOM.findDOMNode(this.refs.bar).value);
  }

  componentWillMount(){
    this.props.set_page_title("foobar");
  }

  render() {
    return (
      <div className={styles.foobar}>
        <h2 className="description">this page is foobar.{this.props.params.foobarSegment && `foobar has this segment -> ${this.props.params.foobarSegment}`}</h2>
        <p className={styles.foobar.text}><Link to="/foobar">go to foobar!</Link></p>
        
        <div>
          <p>{this.props.foo}</p>
          <input type="text" ref="foo" defaultValue={this.props.foo} onChange={this.fooFunc} placeholder="set foo this input" />
        </div>
        <hr />

        <div>
          <p>{this.props.bar}</p>
          <input type="text" ref="bar" defaultValue={this.props.bar} onChange={this.barFunc} placeholder="set bar this input" />
        </div>
      </div>
    );
  }
}