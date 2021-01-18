import { combineReducers } from 'react-redux';
import { auth } from './authReducer';

export const rootReducer = combineReducers({
    auth,
});