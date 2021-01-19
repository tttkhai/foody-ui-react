import { FETCH_USER } from '../services/type';

export const auth = (state=false, action)=>{
    switch(action.type) {
        case FETCH_USER:
            return action.payload || false
        default:
            return state;
    }
}