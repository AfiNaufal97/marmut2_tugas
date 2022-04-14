import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Reducer from './redux/Reducer';

const store = createStore(Reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

