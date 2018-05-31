import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentnatational/navigation.component';
import NotFound from './presentnatational/not-found.component';
import Home from './presentnatational/home.component';
import Contact from './presentnatational/contact.component';
import CountryFlagContainer from '../src/containers/flag-container.component';
import CountryDetailContainer from '../src/containers/country-detail-container.component';
import ContinentsContainer from '../src/containers/continents-container.component';
export default (
    <Route path='/' component={Navigation}>
        <IndexRoute component={Home} />
        <Route path='contact' component={Contact} />
        <Route path='countries'>
            <IndexRoute component={CountryFlagContainer} />
            <Route path='country/:id' component={CountryDetailContainer} />
        </Route>
        <Route path='continents' component={ContinentsContainer} />
        <Route path='*' component={NotFound} />
    </Route>
);