import { GET_COUNTRIES } from '../actions/actions-countries';
import countriesData from '../data/countries.json';

const initialState = {
    countires: countriesData
};
const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return Object.assign({}, state, { countires: state.countires });
        default:
            return state;
    }
}
export default countriesReducer;