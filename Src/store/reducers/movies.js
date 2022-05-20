import {GET_FILMS_FAIL, GET_FILMS_SUCCESS} from '../actions/constants';

const defaultState = {
  films: [], 
  loading: true,
};

const moviesReducers = (state = defaultState, action) => {
  switch (action.type) {
    case GET_FILMS_SUCCESS:
      return {
        ...state,
        films: action.payload,
        loading: false,
      };
    case GET_FILMS_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
export default moviesReducers;
