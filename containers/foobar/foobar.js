import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

/* actions */
import * as page_title from '../../actions/page_title'
import * as foo from '../../actions/foo'
import * as bar from '../../actions/bar'

/* components */
import Foobar from '../../components/foobar/foobar.js';

/* state to props */
const mapStateToProps = (state, ownProps) => {
  return {...state}
}

/* dispatch to props */
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...page_title,
    ...foo,
    ...bar,
  },dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Foobar)