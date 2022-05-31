import {
  getCharacter,
  getCharacterFail,
  getCharacterSuccess
} from './characters';
import { getFilms, getFilmsFail, getFilmsSuccess } from './movies';
import { getPlanet, getPlanetFail, getPlanetSuccess } from './planet';
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



export const requestLoadCharacter = Id => {
  return async (dispatch, _) => {
    dispatch(getCharacter());
    try {
      const result = await axios.get(
        'https://swapi.dev/api/people/' + Id + '/',
      );
      dispatch(getCharacterSuccess(result.data));
        dispatch(getPlanet())
      const result2 = await axios.get(result.data.homeworld);
      dispatch(getPlanetSuccess(result2.data));

      if (result.data.films && result.data.films.length > 0) {
        dispatch(getFilms());
        const moviRs = await multiFetchByArray(result.data.films);

        let array = changeArrayData(moviRs);
        dispatch(getFilmsSuccess(array));
      }
    } catch (error) {
      dispatch(getCharacterFail(error));
      dispatch(getFilmsFail());
      dispatch(getPlanetFail());
    }
  };
};
