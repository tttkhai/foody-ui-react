import { SEARCH_RESTAURANT } from '../config/type';

export const restaurant = (state=null, action) => {
    switch (action.type){
        case SEARCH_RESTAURANT:
            return action.payload || false;
        default:
            return state;
    }
}