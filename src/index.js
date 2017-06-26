import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './store';

import App from './App';
import { Page1, Page2 } from './modules'

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/page1" component={Page1}/>
      <Route path="/page2" component={Page2}/>
    </Router>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
