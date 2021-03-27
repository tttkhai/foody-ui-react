import { FETCH_USER } from "../config/type";

export const auth = (state = false, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
};
