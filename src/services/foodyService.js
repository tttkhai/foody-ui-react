import axios from "axios";
import { endpoints } from "../config/endpoints";
import { getAuthHeader } from "./authService";

export const fetchRestaurantTypes = () => {
  return axios.get(endpoints.restaurantTypes, getAuthHeader());
};

export const fetchFoodTypes = () => {
  return axios.get(endpoints.foodTypes, getAuthHeader());
};

export const submitSearchForm = (payload) => {
  return axios.post(
    endpoints.restaurantResultFromSearch,
    payload,
    getAuthHeader()
  );
};
