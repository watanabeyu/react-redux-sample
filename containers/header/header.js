import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

/* actions */
import * as page_title from '../../actions/page_title'

/* components */
import Header from '../../components/header/header.js';

/* state to props */
const mapStateToProps = (state, ownProps) => {
  return {...state}
}

/* dispatch to props */
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...page_title,
  },dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)