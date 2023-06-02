import { getUsers } from "../../api";
const SET_USER = "SET_USER";
const GET_USERS = "GET_USERS"
const REGISTER_USER = "REGISTER_USER";

const actionCreator = (type, payload) => {

  if (payload) {
    return { type, payload };
  } else {
    return { type };
    }
    
};


export const setUserAction = (user) => actionCreator(SET_USER, user);
export const setUsersAction = (users) => actionCreator(GET_USERS, users);
export const addUsersAction = (user) => actionCreator(REGISTER_USER, user);

 
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