import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentnatational/navigation.component';
import Home from './presentnatational/home.component';
import Contact from './presentnatational/contact.component';
import NotFound from './presentnatational/not-found.component';

export default (
    <Route path='/' component={Navigation}>
        <IndexRoute component={Home} />
        <Route path='/contact' component={Contact}/>
        <Route path='*' component={NotFound}/>
    </Route>
);