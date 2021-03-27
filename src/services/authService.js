import { FETCH_USER } from "../config/type";
import axios from "axios";
import { endpoints } from "../config/endpoints";

export const login = (username, password) => async (dispatch) => {
  const res = await axios.post(endpoints.login, { username, password });
  localStorage.setItem("token", res.data.token);
  localStorage.setItem("tokenTime", new Date());
  const currentUser = {
    user_id: res.data.user_id,
    username: res.data.user_name,
    first_name: res.data.first_name,
    last_name: res.data.last_name,
  };
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  dispatch({ type: FETCH_USER, payload: currentUser });
};

export const fetchUser = () => async (dispatch) => {
  const currentUser = localStorage.getItem("currentUser");
  if (!currentUser) {
    return;
  }
  dispatch({ type: FETCH_USER, payload: JSON.parse(currentUser) });
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("tokenTime");
  localStorage.removeItem("currentUser");
};

export const getAuthHeader = () => {
  const token = getTokenWithExpiry();
  if (token) {
    return { headers: { Authorization: `Bearer ${token}` } };
  }
  return null;
};

const getTokenWithExpiry = () => {
  const token = localStorage.getItem("token");
  const tokenTime = new Date(localStorage.getItem("tokenTime"));

  if (!token && !tokenTime) {
    return;
  }

  const now = new Date();
  const diff = diff_hours(now, tokenTime);
  // compare the expiry time of the item with the current time
  if (diff > 8) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem("token");
    localStorage.removeItem("tokenTime");
    localStorage.removeItem("currentUser");

    return null;
  }
  return token;
};

const diff_hours = (dt2, dt1) => {
  let diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60 * 60;
  return Math.abs(diff.toFixed(2));
};

// export const register = (values) => {
//     return axios.post('/api/newUser', values)
// }
