import {
  GET_CHARACTERS_ARRAY,
  GET_CHARACTER_FAIL,
  GET_CHARACTER,
  GET_CHARACTER_SUCCESS,
} from '../actions/constants';

const initialState = {
  char: [],
  data: {},
  errorText: '',
  error: false,
  loading: false,
};

const charReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS_ARRAY:
      return {
        ...state,
        char: action.payload,
      };
    case GET_CHARACTER_FAIL:
      return {
        ...state,
        errorText: action.payload,
        error: true,
      };
    case GET_CHARACTER:
      return {
        ...state,
        loading: true,
      };
    case GET_CHARACTER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
export default charReducer;
