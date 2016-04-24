import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router'

import App from './components/app';
import Us from './components/us';
import World from './components/World';
import Business from './components/business';
import Technology from './components/technology';
import Entertainment from './components/entertainment';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="us" component={Us} />
        <Route path="world" component={World} />
        <Route path="business" component={Business} />
        <Route path="technology" component={Technology} />
        <Route path="entertainment" component={Entertainment} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
