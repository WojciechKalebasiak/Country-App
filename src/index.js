import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import {getCountries} from './actions/actions-countries';
import DevTools from './DevTools';
ReactDOM.render(
    <Provider store={store}>
        <div>
            <h1>Witam</h1>
            <DevTools/>
        </div>
    </Provider>,
     document.getElementById('root'));
store.dispatch(getCountries());
