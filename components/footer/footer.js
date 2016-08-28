import React from "react";

/* css */
import styles from './footer.scss';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className={styles.footer}>
        <p>This is a footer!</p>
      </footer>
    );
  }
}