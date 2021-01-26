import { combineReducers } from 'redux';
import { auth } from './authReducer';
import { restaurant } from './restaurantReducer';

export const rootReducer = combineReducers({
    auth,
    restaurant
});