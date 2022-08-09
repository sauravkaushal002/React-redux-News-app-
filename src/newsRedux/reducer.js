import {
  
   
  USER_REQUEST_FAILED,
  USER_REQUEST,
  USER_REQUEST_SUCCESS,
  } from "./type";
  const initialState={
   news:{}
  }
 
  export const userReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case USER_REQUEST:
        return {
          ...state,
          loading: true
        };
          case USER_REQUEST_SUCCESS:
            return{
              ...state,
              news:payload
            }
            case USER_REQUEST_FAILED:
              return{
                ...state,
                news:[]
              }
            default:
              return state;
    }
}