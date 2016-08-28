import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, bindActionCreators, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

/* common.css */
import './styles/common.css';

/* container */
import {
  App,
  Welcome,
  Foobar
} from "./components";

/* reducer */
import * as reducers from './reducers';
const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

/* store */
const store = createStore(reducer);

/* history */
const history = syncHistoryWithStore(browserHistory, store);

/* nomatch */
class NoMatch extends React.Component{
  render() {
    return (
      <p>404 not found</p>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="/foobar" component={Foobar}>
          <Route path="/foobar/:foobarSegment" component={Foobar} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById("app")
);