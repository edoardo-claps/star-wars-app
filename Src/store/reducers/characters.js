import {
  GET_CHARACTERS_ARRAY,
  GET_CHARACTER_FAIL,
  GET_CHARACTER,
  GET_CHARACTER_SUCCESS,
  GET_CHARACTERS_ARRAY_SUCCESS
} from '../constants';

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
        char:[],
        loading:true
      };
      case GET_CHARACTERS_ARRAY_SUCCESS:
        return {
          ...state,
          char: action.payload,
          loading:false
        };
    case GET_CHARACTER_FAIL:
      return {
        ...state,
        errorText: action.payload,
        error: true,
        loading:false
      };
    case GET_CHARACTER:
      return {
        ...state,
       loading:true
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
