import axios from 'axios';
import { endpoints } from '../config/endpoints'
import { getAuthHeader } from './authService'
import { SEARCH_RESTAURANT } from '../config/type'

export const fetchRestaurantTypes = () => { 
    return axios.get(endpoints.restaurantTypes, getAuthHeader())
}

export const fetchFoodTypes = () => { 
    return axios.get(endpoints.foodTypes, getAuthHeader())
}

export const submitSearchForm = (payload) => async dispatch => { 
    const res = axios.post(endpoints.restaurantResultFromSearch, payload, getAuthHeader())
    dispatch({ type: SEARCH_RESTAURANT, payload: res.data})
}