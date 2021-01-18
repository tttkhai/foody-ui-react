import axios from 'axios';
import { endpoint } from '../config/endpoints'
import { FETCH_USER} from './type';
// , FETCH_FOOD_TYPE, FETCH_RESTAURANT_TYPE, FETCH_RESTAURANT 

const tokenInterceptor = ()=>{
    const token = getTokenWithExpiry();
    axios.interceptors.request.use(
        config => {
            config.headers.authorization = `Bearer ${accessToken}`
            return config;
        },
        error => {
            return Promise.reject(error)
        }
    )
}

const getTokenWithExpiry = () => {
    const token = localStorage.getItem('token')
    const tokeTime = localStorage.getItem('tokeTime')

	if (!itemStr) {
		return null
	}
    const now = new Date()
    const diff = diff_hours(now, tokeTime);
	// compare the expiry time of the item with the current time
	if (diff>8) {
		// If the item is expired, delete the item from storage
		// and return null
		localStorage.removeItem(key)
		return null
	}
	return token
}

function diff_hours(dt2, dt1) 
 {
  let diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60);
  return Math.abs(Math.round(diff)/100);
 }

export const login =  (username, password) => async dispatch => { 
    const token = await axios.post(endpoint.login, {username, password})
    localStorage.setItem('token', token)
    localStorage.setItem('tokenTime', new Date())
}

export const fetchUser =  () => async dispatch => { 
    const user = await axios.post('/api/currentUser')
    tokenInterceptor()
    dispatch({type: FETCH_USER, payload: user})
}

export const register = (values) => async dispatch => {
    const newUser = await axios.post('/api/newUser', values)
    
}

export const getAllRestaurantTypes = () => async dispatch => {
    const results = await axios.post('/api/restaurantTypes')

}

export const getAllFoodTypes = () => async dispatch => {
    const res = await axios.post('/api/foodTypes')
    // dispatch({type: FETCH_FOOD_TYPE, payload: res})
}

export const searchRestaurant = (values) => async dispatch => {
    const res = await axios.post('/api/restaurantList', values)
    // dispatch({type: FETCH_RESTAURANT, payload: res})

}

export const getReviewList = () => async dispatch => {

}

export const getRestaurants = () => async dispatch => {

}