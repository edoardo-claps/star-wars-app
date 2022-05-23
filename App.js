import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';
import ItemDetails from './Src/components/Screens/details';
import Home from './Src/components/Screens/home';
import List from './Src/components/Screens/mainListCharacters';
import PlanetDetails from './Src/components/Screens/planet';
import counterreducer from './Src/store/reducers/counter'
import cardsList from './Src/store/reducers/cardList';
import moviesReducers from './Src/store/reducers/movies';
import planetReducer from './Src/store/reducers/planetReducer';
import charReducer from './Src/store/reducers/characters';
import Settings from './Src/components/Screens/settings';
import {useTranslation} from 'react-i18next';
import './Src/languages/langConfig'

const globalStore = configureStore({
  reducer: {
    charReducer,
    counterreducer,
    planetReducer,
    moviesReducers,
    cardsList,
   
  },
});

const Stack = createNativeStackNavigator();

const App = () => {
  const {t}=useTranslation()
  return (
    <Provider store={globalStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name={t('details')} component={ItemDetails} />
          <Stack.Screen name={t('planet')} component={PlanetDetails} />
          <Stack.Screen name={t('list')} component={List} />
           <Stack.Screen name={t('settings')} component={Settings} /> 

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
