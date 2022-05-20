import {
  GET_CHARACTER,
  GET_CHARACTER_FAIL,
  GET_CHARACTER_SUCCESS,
} from '../actions/constants';

const initialstate = {
  data: null,
  loading: false,
  error: false,
};

const charReducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_CHARACTER:
      return {
        ...state,
        loading: true,
      };
    case GET_CHARACTER_SUCCESS:
      return {
        ...state,
        data: {...action.payload},
        loading: false,
      };
    case GET_CHARACTER_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
export default charReducer;
