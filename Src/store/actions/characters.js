import {
  GET_CHARACTER,
  GET_CHARACTER_SUCCESS,
  GET_CHARACTER_FAIL,
  GET_CHARACTERS_ARRAY,
  GET_CHARACTERS_ARRAY_SUCCESS,
  GET_CHARACTERS_ARRAY_FAIL,
} from './constants';
const axios = require('axios').default;


export const getCharacter = () => ({type: GET_CHARACTER});
export const getCharacterSuccess = payload => ({
  type: GET_CHARACTER_SUCCESS,
  payload,
});
export const getCharacterFail = payload => ({
  type: GET_CHARACTER_FAIL,
  payload,
});
export const getCharactersArray = () => ({type: GET_CHARACTERS_ARRAY});
export const getcharactersArraySuccess = payload => ({
  type: GET_CHARACTERS_ARRAY_SUCCESS,
  payload,
});
export const getcharactersArrayFail = payload => ({
  type: GET_CHARACTERS_ARRAY_FAIL,
  payload,
});


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


export const getCharacters = urls => {
  return async (dispatch, _) => {
    dispatch(getCharacter);
    try {
      const data = await multiFetchByArray(urls);
      let array = changeArrayData(data);
      dispatch(getcharactersArraySuccess( array));
    } catch (error) {
      dispatch(getcharactersArrayFail(error));
    }
  };
};
