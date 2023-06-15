import {
  SET_USER,
  SET_COUNTER,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
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
  },
  counter: "",
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
    
    case SET_COUNTER:
      return { ...state, counter: action.payload };

    case INCREMENT_COUNTER:
      return { ...state, counter: state.counter + 1 };

    case DECREMENT_COUNTER:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

export default setUserReducer;
