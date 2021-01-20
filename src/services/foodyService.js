import axios from 'axios';
import { endpoints } from '../config/endpoints'

export const getAllRestaurantTypes = (username, password) => { 
    const token = await axios.post(endpoints.login, {username, password})
    localStorage.setItem('token', token.data.token)
    localStorage.setItem('tokenTime', new Date())
    const user = await axios.get(endpoints.currentUser, getAuthHeader())
    return ;
}

export const getAllFoodTypes = () => async dispatch => { 
    const user = await axios.get(endpoints.currentUser, getAuthHeader())
    dispatch({type: FETCH_USER, payload: user.data})
}