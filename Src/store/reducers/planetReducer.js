import {GET_PLANET_FAIL, GET_PLANET_SUCCESS} from '../constants';

const initialstate = {
  data: null,
  loading:true,
};

const planetReducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_PLANET_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading:false
      };
    case GET_PLANET_FAIL:
      return {
        ...state,
        loading:false
      };

    default:
      return state;
  }
};
export default planetReducer;
