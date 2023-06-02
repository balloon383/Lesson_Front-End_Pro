const INITIAL_STATE = {
  user: [],
};

const setUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_USER":
      
      return { ...state };
    case "GET_USERS":
      return { ...state };    
    default:
      return state;
  }
};

export default setUserReducer;
