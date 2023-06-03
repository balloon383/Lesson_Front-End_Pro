const INITIAL_STATE = {
  user: [],
};

const setUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_USER":
      
      return { id: action.payload.id, status: action.payload.status };
    case "GET_USERS":
      return { ...state };    
    default:
      return state;
  }
};

export default setUserReducer;
