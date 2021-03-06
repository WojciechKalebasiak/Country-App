import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import store from './store/index';
import DevTools from './DevTools';
import routes from './routes';
import './styles/country.css';
ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router history={hashHistory} routes={routes} />
            {/* <DevTools /> */}
        </div>
    </Provider>,
    document.getElementById('root'));
