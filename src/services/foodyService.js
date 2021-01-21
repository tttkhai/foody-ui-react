import axios from 'axios';
import { endpoints } from '../config/endpoints'
import { getAuthHeader } from './authService'

export const getAllRestaurantTypes = () => { 
    return axios.get(endpoints.restaurantTypes, getAuthHeader())
}

export const getAllFoodTypes = () => { 
    return axios.get(endpoints.foodTypes, getAuthHeader())
}