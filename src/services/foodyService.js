import axios from 'axios';
import { endpoints } from '../config/endpoints'
import { getAuthHeader } from './authService'

export const getAllRestaurantTypes = () => { 
    const restaurantTypes = await axios.post(endpoints.restaurantTypes, getAuthHeader())
    return restaurantTypes;
}

export const getAllFoodTypes = () => async dispatch => { 
    const foodTypes = await axios.post(endpoints.foodTypes, getAuthHeader())
    return foodTypes;
}