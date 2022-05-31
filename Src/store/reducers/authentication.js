
import {SET_LOADING_LOGIN, LOGIN, SET_LOGIN_ERROR, LOGOUT} from '../constants';

const initialstate = {
  userId: '',
  token: '',
 error:'',
 loading:false
};

const auth = (state = initialstate, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userId:action.userId,
        token:action.token
      };
      case SET_LOADING_LOGIN:
        return{
          ...state,
          loading:action.payload
        }
        case SET_LOGIN_ERROR:
          return{
            ...state,
            error: action.payload
          }
      case LOGOUT:
          return{
              initialstate
          }
   
    default: return state
  }
};
export default auth;
