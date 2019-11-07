import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './scss/custom.scss';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
