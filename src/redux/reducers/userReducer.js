import {
  SET_USER,
} from "../actions/userActions";
import { getLoggedUser } from "../../api";
let loggedUser = getLoggedUser()

const INITIAL_STATE = {
  userData: {
    id: loggedUser.id,
    status: loggedUser.status,
    name: loggedUser.name,
    shoppingCart: loggedUser.shoppingCart, 
    orders: loggedUser.orders
  }
};

const setUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        userData: {
          id: action.payload.id,
          status: action.payload.status,
          name: action.payload.name,
          shoppingCart: action.payload.shoppingCart, 
          orders: action.payload.orders
        },
      };
    

    default:
      return state;
  }
};

export default setUserReducer;
