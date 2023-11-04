
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import locationReducer from './store/locationReducer';

const store = createStore(locationReducer, applyMiddleware(thunk));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);



