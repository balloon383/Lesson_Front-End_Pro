import { getUsers } from "../../api";
export const SET_USER = "SET_USER";
export const GET_USERS = "GET_USERS"
export const REGISTER_USER = "REGISTER_USER";
export const SET_COUNTER = "SET_COUNTER";
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";
export const SET_METHOD = "SET_METHOD";

const actionCreator = (type, payload) => {

  if (payload || typeof(payload) === 'number') {
    return { type, payload };
  } else {
    return { type };
    }
};


export const setUserAction = (user) => actionCreator(SET_USER, user);
export const setUserMethodAction = (method) => actionCreator(SET_METHOD, method);
export const setUsersAction = (users) => actionCreator(GET_USERS, users);
export const setCounterAction = (counter) => actionCreator(SET_COUNTER, counter);
export const incrementCounterAction = (counter) =>
  actionCreator(INCREMENT_COUNTER, counter);
export const decrementCounterAction = (counter) =>
  actionCreator(DECREMENT_COUNTER, counter);

 
export const getUsersThunk = () => {
  return async (dispatch, getState) => {
    await getUsers().then((data) => dispatch(setUsersAction(data)));
  };
};

export const getUserThunk = (id) => {
  return async (dispatch, getState) => {
    await getUsers(id).then((data) => dispatch(setUserAction(data)));
  };
}; 
export const getShoppingCartThunk = (id) => {
  return async (dispatch, getState) => {
    await getUsers(id).then((data) =>
      dispatch(setCounterAction(data.shoppingCart.length))
    );
  };
}; 