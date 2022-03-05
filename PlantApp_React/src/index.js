import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import {createStore} from 'redux';
//import allReducers from './reducers';
// import { Provider } from 'react-redux';//wrapping the app in the provider allows the entire app access to store
import {BrowserRouter} from 'react-router-dom';

// const store= createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     {/* // <Provider store={store}> */}
        <App />
      {/* //</Provider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


