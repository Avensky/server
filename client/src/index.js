import materializeCSS from 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';

// Development only axios helpers!
import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);

console.log('STRIPE KEY IS', process.env.REACT_APP_STRIPE_KEY)
console.log('Environment is', process.env.NODE_ENV)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
