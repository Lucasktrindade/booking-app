import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise'
import {BrowserRouter, Route} from 'react-router-dom';
import HouseHome from './containers/house_home.js';
import registerServiceWorker from './registerServiceWorker';
import reducers from "./reducers";
import './index.css';


const HouseDetail = lazy(() => import('./containers/house_detail.js'));

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(promise))}>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/" component={HouseHome} />
        <Route path="/house/:id" component={HouseDetail} />
      </Suspense>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
