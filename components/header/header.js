import React from "react"
import { Link } from 'react-router';

/* css */
import styles from './header.scss'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className={styles.header}>
        <div className="logo"><Link to="/"><i className="fa fa-home"></i></Link></div>
        <div className="title"><h2>{this.props.page_title}</h2></div>
        <div className="buttons">
          <div className="button1">
            <a href="https://github.com/watanabeyu/react-redux-sample" target="_blank"><i className="fa fa-github"></i></a>
          </div>
          <div className="button2">
            <a href="http://watanabeyu.blogspot.com" target="_blank"><i className="fa fa-link"></i></a>
          </div>
        </div>
      </header>
    );
  }
}