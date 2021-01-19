import { FETCH_USER} from '../config/type';
import axios from 'axios';
import { endpoints } from '../config/endpoints'

export const login = (username, password) => async (dispatch)=> { 
    const token = await axios.post(endpoints.login, {username, password})
    localStorage.setItem('token', token.data.token)
    localStorage.setItem('tokenTime', new Date())
    const user = await axios.get(endpoints.currentUser, getAuthHeader())
    dispatch({type: FETCH_USER, payload: user.data})
}

export const fetchUser = () => async dispatch => { 
    const user = await axios.get(endpoints.currentUser, getAuthHeader())
    dispatch({type: FETCH_USER, payload: user.data})
}

export const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('tokenTime')
}

export const getAuthHeader = () => {
    const token = getTokenWithExpiry();
    if(token) {
        return {headers: {Authorization: `Bearer ${token}` }};
    }
    return null;
}

const getTokenWithExpiry = () => {
    const token = localStorage.getItem('token')
    const tokenTime = new Date(localStorage.getItem('tokenTime'))

	if (!token && !tokenTime) {
		return;
    }
    
    const now = new Date()
    const diff = diff_hours(now, tokenTime);
	// compare the expiry time of the item with the current time
	if (diff>8) {
		// If the item is expired, delete the item from storage
		// and return null
		localStorage.removeItem('token')
		return null
	}
	return token
}

const diff_hours = (dt2, dt1) => {
    let diff =(dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60);
    return Math.abs(diff.toFixed(2));
}

export const register = (values) => async dispatch => {
    const newUser = await axios.post('/api/newUser', values)
}