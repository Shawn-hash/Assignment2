import { combineReducers } from 'redux';
import quantityCountReducer from './quantityCount';

const rootReducer = combineReducers({
    quantityCount: quantityCountReducer,
});

export default rootReducer;