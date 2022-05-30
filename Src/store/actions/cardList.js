import * as constants from './constants'

export const pushInList = Id => {
    return async (dispatch, _) => {
      try {
        const result = await axios.get(
          'https://swapi.dev/api/people/' + Id + '/',
        );
        dispatch({
          type: constants.INSERT_LIST,
          payload: {id: Id, ...result.data},
        });
      } catch (error) {
        console.log(error.response);
        dispatch({type: constants.INSERT_LIST_FAIL, payload: error.message});
      }
    };
  };
  
  export const search = data => {
    return (dispatch, _) => {
      dispatch({type: constants.SEARCH, value: data});
    };
  };
  
  export const emptysearch = () => {
    return (dispatch, _) => {
      dispatch({type: constants.EMPTY_SEARCH});
    };
  };
  
  export const removeInList = index => {
    return (dispatch, _) => {
      dispatch({type: constants.REMOVE_LIST, index: index});
    };
  };
  
  export const reorder = array => {
    return (dispatch, _) => {
      dispatch({type: constants.FILTER_BY_NAME, payload: array});
    };
  };
  
  