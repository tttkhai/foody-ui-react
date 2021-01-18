import { FETCH_USER } from '../actions';

export const auth = (state=null, action)=>{
    switch(action.type) {
        case FETCH_USER:
            return action.payload || false
        default:
            return state;
    }
}