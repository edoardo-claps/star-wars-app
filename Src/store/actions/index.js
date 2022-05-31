import * as constants from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axios = require('axios').default;
let timer;

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
/**
 * save data in the permanent store in the device
 * @param object to save
 *  */
const storeData = async (expire, userId, token) => {
  try {
    const jsonValue = JSON.stringify({expire, userId, token});
    await AsyncStorage.setItem('userData', jsonValue);
  } catch (e) {
    console.log('storeData' + e);
    throw e;
  }
};
/**
 * Clears the timer to autologout when the token is invalid
 */
const clearTimer = () => {
  if (timer) {
    clearTimeout(timer);
  }
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
      const result = await axios.get(
        'https://swapi.dev/api/people/' + Id + '/',
      );
      dispatch({type: constants.GET_CHARACTER_SUCCESS, payload: result.data});

      const result2 = await axios.get(result.data.homeworld);
      dispatch({type: constants.GET_PLANET_SUCCESS, payload: result2.data});

      if (result.data.films && result.data.films.length > 0) {
        dispatch({type: constants.GET_FILMS});
        const moviRs = await multiFetchByArray(result.data.films);

        let array = changeArrayData(moviRs);
        dispatch({type: constants.GET_FILMS_SUCCESS, payload: array});
      }
    } catch (error) {
      dispatch({type: constants.GET_CHARACTER_FAIL, payload: error});
      dispatch({type: constants.GET_FILMS_FAIL});
      dispatch({type: constants.GET_PLANET_FAIL});
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

export const getCharacters = urls => {
  return async (dispatch, _) => {
    dispatch({type: constants.GET_CHARACTERS_ARRAY});
    try {
      const data = await multiFetchByArray(urls);
      let array = changeArrayData(data);
      dispatch({type: constants.GET_CHARACTERS_ARRAY_SUCCESS, payload: array});
    } catch (error) {
      dispatch({type: constants.GET_CHARACTERS_ARRAY_FAIL, payload: error});
    }
  };
};

export const singup = data => {
  return async (dispatch, _) => {
    dispatch(
      authentication(
        data.localId,
        data.idToken,
        parseInt(data.expiresIn) * 1000,
      ),
    );
    const expirationDate = new Date(
      new Date().getTime() + parseInt(data.expiresIn) * 1000,
    );
    storeData(expirationDate.toISOString(), data.localId, data.idToken);
  };
};

export const login = data => {
  return (dispatch, _) => {
    console.log('passo dal login')
  dispatch(
    authentication(data.localId, data.idToken, parseInt(data.expiresIn) * 1000),
  );
  const expirationDate = new Date(
    new Date().getTime() + parseInt(data.expiresIn) * 1000,
  );
  storeData(expirationDate.toISOString(), data.localId, data.idToken);
};
}

export const authentication = (userId, token, expire) => {
  return (dispatch, _) => {
    dispatch({type: constants.LOGIN, userId: userId, token: token});
    dispatch(setTimerLogout(expire));
  };
};

export const logout = () => {
  return async (dispatch, _) => {
    clearTimer();
    await AsyncStorage.removeItem('userData');
    dispatch({type: constants.LOGOUT});
  };
};

const setTimerLogout = expirationDate => {
  return (dispatch, _) => {
    timer = setTimeout(() => {
      dispatch(logout());
    }, expirationDate);
  };
};
