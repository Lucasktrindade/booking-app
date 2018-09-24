import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise'
import {BrowserRouter, Route} from 'react-router-dom';
import HouseHome from './containers/house_home.js';
import HouseDetail from './containers/house_detail.js';
import registerServiceWorker from './registerServiceWorker';
import reducers from "./reducers";
import './index.css';

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(promise))}>
    <BrowserRouter>
      <div>
        <Route path="/house/:id" component={HouseDetail} />
        <Route exact path="/" component={HouseHome} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
