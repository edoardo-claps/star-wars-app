
import {LOGIN, LOGOUT} from '../actions/constants';

const initialstate = {
  userId: '',
  token: '',
 
};

const auth = (state = initialstate, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userId:action.userId,
        token:action.token
      };
      case LOGOUT:
          return{
              initialstate
          }
   
    default: return state
  }
};
export default auth;
