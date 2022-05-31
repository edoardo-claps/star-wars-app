import {
  authentication,
  fetchForLogin,
  fetchForSingup,
  login,
  logout,
  setLoadingLogin,
  setLoginError,
} from './authentication';
import {
  emptysearch,
  pushInList,
  removeInList,
  reorder,
  search,
} from './cardList';
import {
  getCharacter,
  getCharacterFail,
  getCharacters,
  getCharactersArray,
  getcharactersArrayFail,
  getcharactersArraySuccess,
  getCharacterSuccess,
} from './characters';
import {increment, set} from './counter';
import {requestLoadCharacter} from './fullDataCharacter';
import {getFilms, getFilmsFail, getFilmsSuccess} from './movies';
import {getPlanetFail, getPlanetSuccess} from './planet';

export {
  login,
  logout,
  authentication,
  fetchForLogin,
  fetchForSingup,
  setLoadingLogin,
  setLoginError,
  search,
  emptysearch,
  pushInList,
  removeInList,
  reorder,
  getCharacter,
  getCharacterFail,
  getCharacterSuccess,
  getCharacters,
  getCharactersArray,
  getcharactersArrayFail,
  getcharactersArraySuccess,
  increment,
  set,
  requestLoadCharacter,
  getFilms,
  getFilmsFail,
  getFilmsSuccess,
  getPlanetFail,
  getPlanetSuccess,
};
