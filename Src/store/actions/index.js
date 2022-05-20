import * as constants from './constants';
const axios = require('axios').default;

/**
 * @param: array of api-urls
 * @returns: promises
 */
const multiFetchByArray = urls => {
  let promiseArray = [];

  urls.map(url => promiseArray.push(axios.get(url)));
  let result = Promise.all(promiseArray);
  return result;
};

/**
 *  remove unserialize data from a fetch data result set
 * @param:array
 * @return:modified array
 */
const changeArrayData = data => {
  let array = [];
  data.map(element => {
    array.push(element.data);
  });
  return array;
};

export const increment = () => {
  return {
    type: constants.COUNTER_INCREMENT,
  };
};

export const set = number => {
  return {
    type: constants.COUNTER_SET,
    payload: number,
  };
};

//REQUEST FULL DATA CHARACTER

export const requestLoadCharacter = Id => {
  return async (dispatch, _) => {
    dispatch({type: constants.GET_CHARACTER});
    try {
      const result = await axios.get('https://swapi.dev/api/people/' + Id + '/',);
      dispatch({type: constants.GET_CHARACTER_SUCCESS, payload: result.data});

      const result2 = await axios.get(result.data.homeworld);
      dispatch({type: constants.GET_PLANET_SUCCESS, payload: result2.data});

      if (result.data.films && result.data.films.length > 0) {
        const moviRs = await multiFetchByArray(result.data.films);

        let array = changeArrayData(moviRs);
        dispatch({type: constants.GET_FILMS_SUCCESS, payload: array});
      }
    } catch (error) {
      dispatch({type: constants.GET_CHARACTER_FAIL, payload: error});
      dispatch({type:constants.GET_FILMS_FAIL});
      dispatch({type:constants.GET_PLANET_FAIL});
    }
  };
};

//ACTIONS FOR CARD-LIST
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

export const getCharacters = urls => {
  return async (dispatch, _) => {
    try {
      const data = await multiFetchByArray(urls);
      let array = changeArrayData(data);
      dispatch({type: constants.GET_CHARACTERS_ARRAY, payload: array});
    } catch (error) {
      dispatch({type: constants.GET_CHARACTERS_ARRAY_FAIL, payload: error});
    }
  };
};
