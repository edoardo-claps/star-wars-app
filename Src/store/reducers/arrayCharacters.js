import {GET_CHARACTERS_ARRAY, GET_CHARACTER_FAIL} from '../actions/constants';

const initialState = {
  char: [],
  error: '',
};
// TODO: aggregate all characters logic into one reducer and rename all reducers files name
const arraycharReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS_ARRAY:
      return {
        ...state,
        char: action.payload,
      };
    case GET_CHARACTER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default arraycharReducer;
