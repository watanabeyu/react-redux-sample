import React from "react";

/* components */
import Header from '../components/header';
import Footer from '../components/footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Header />
        {this.props.children}
        <Footer />
      </main>
    );
  }
}