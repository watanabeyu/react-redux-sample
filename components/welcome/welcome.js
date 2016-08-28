import React from "react";
import { Link } from 'react-router';

/* components */
import * as Button from '../button';

/* css */
import styles from './welcome.scss';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.set_page_title("Home");
  }

  render() {
    return (
      <div className={styles.welcome}>
        <ul>
          <li style={{fontWeight:"bold"}}><Link to="/foobar">foobar</Link></li>
          <li style={{fontWeight:"bold",fontSize:"20px"}}><Link to="/foobar/hogehoge">foobar</Link></li>
          <li><Button.PrimaryButton text="btn primary" /></li>
          <li><Button.SuccessButton text="btn success" /></li>
          <li><Button.WarningButton text="btn warning" /></li>
          <li><Button.DangerButton text="btn danger" /></li>
        </ul>
      </div>
    );
  }
}