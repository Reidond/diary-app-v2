import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './scss/custom.scss';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import throttle from 'lodash/throttle';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';
import { loadState, saveState } from './localStorageRedux';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const preloadedState = loadState();

const store = createStore(rootReducer, preloadedState, composeEnhancers());

store.subscribe(
  throttle(() => {
    saveState({
      items: store.getState().items,
      currentItem: store.getState().currentItem,
      comments: store.getState().comments
    });
  }, 1000)
);

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
