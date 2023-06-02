import { getUsers, changeStatus, logOut } from "../../api";
const GET_USER = "GET_USER"
const GET_USERS = "GET_USERS"
const ADD_USER = "ADD_USER";
const UPDATE_USER = "UPDATE_USER";

const actionCreator = (type, payload) => {

  if (payload) {
    return { type, payload };
  } else {
    return { type };
    }
    
};


export const setUserAction = (products) => actionCreator(GET_USER, products);
export const setUsersAction = (products) => actionCreator(GET_USERS, products);
export const addUsersAction = (products) => actionCreator(GET_USERS, products);


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