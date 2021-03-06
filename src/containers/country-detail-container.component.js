import React, { Component } from 'react';
import { connect } from 'react-redux'
import CountryDetails from '../presentnatational/country-details.component';
import { getCountry } from '../actions/actions-countries';

class CountryDetailComponent extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(getCountry(this.props.params.id));
    }
    render() {
        return (
            <CountryDetails country={this.props.selectedCountry} />
        )
    }
}
const mapStateToProps = store => {
    console.log(store);
    return {
        selectedCountry: store.countriesReducer.selectedCountry
    };
};
export default connect(mapStateToProps)(CountryDetailComponent);