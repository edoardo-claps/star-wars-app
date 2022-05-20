import * as constants from './constants';
const axios = require('axios').default;

/**
 * @param: array of api-urls
 * @returns: promises
 */
const multiFetchByArray = urls => {
  //TODO: transf to arrow func
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
//TODO: convert to async/await and simplify with one catch
export const requestLoadCharacter = Id => {
  return (dispatch, _) => {
    dispatch({type: constants.GET_CHARACTER});

    axios
      .get('https://swapi.dev/api/people/' + Id + '/')
      .then(data => {
        dispatch({type: constants.GET_CHARACTER_SUCCESS, payload: data.data});
        axios
          .get(data.data.homeworld)

          .then(data => {
            dispatch({type: constants.GET_PLANET_SUCCESS, payload: data.data});
          })
          .catch(error => {
            dispatch({type: constants.GET_PLANET_FAIL, payload: error});
          });

        if (data.data.films && data.data.films.length > 0) {
          multiFetchByArray(data.data.films)
            .then(data => {
              let array = changeArrayData(data);
              dispatch({type: constants.GET_FILMS_SUCCESS, payload: array});
            })
            .catch(error => {
              dispatch({type: constants.GET_FILMS_FAIL, payload: error});
            });
        }
      })
      .catch(error => {
        dispatch({type: constants.GET_CHARACTER_FAIL, payload: error});
      });
  };
};

//ACTIONS FOR CARD-LIST
export const pushInList = async (Id) => {
  return (dispatch, _) => {
    try {
      const result = await axios.get('https://swapi.dev/api/people/' + Id + '/');
      dispatch({
        type: constants.INSERT_LIST,
        payload: {id: Id, ...result.data},
      });
    } catch(error) {
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
  return (dispatch, _) => {
    multiFetchByArray(urls)
      .then(data => {
        let array = changeArrayData(data);
        dispatch({type: constants.GET_CHARACTERS_ARRAY, payload: array});
      })

      .catch(error => {
        dispatch({type: constants.GET_CHARACTERS_ARRAY_FAIL, payload: error});
      });
  };
};
