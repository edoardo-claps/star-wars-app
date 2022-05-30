import {
  getCharacter,
  getCharacterFail,
  getCharacterSuccess,
  getFilms,
  getFilmsFail,
  getFilmsSuccess,
  getPlanetFail,
  getPlanetSuccess,
} from './characters';
const axios = require('axios').default;

export const requestLoadCharacter = Id => {
  return async (dispatch, _) => {
    dispatch(getCharacter());
    try {
      const result = await axios.get(
        'https://swapi.dev/api/people/' + Id + '/',
      );
      dispatch(getCharacterSuccess(result.data));

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
