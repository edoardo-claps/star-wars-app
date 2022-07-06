
import React from 'react';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import './Src/languages/langConfig';
import CustomRoutes from './Src/scripts/routes';
import auth from './Src/store/reducers/authentication';
import cardsList from './Src/store/reducers/cardList';
import charReducer from './Src/store/reducers/characters';
import counterreducer from './Src/store/reducers/counter';
import moviesReducers from './Src/store/reducers/movies';
import planetReducer from './Src/store/reducers/planetReducer';


const globalStore = configureStore({
  reducer: {
    charReducer,
    counterreducer,
    planetReducer,
    moviesReducers,
    cardsList,
    auth,
  },
});

const App = () => {
 
  return (

      <Provider store={globalStore}>
        <CustomRoutes />
      </Provider>

  );
};

export default App;
