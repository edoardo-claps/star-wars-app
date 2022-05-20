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
  return (
    <Provider store={globalStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Dettagli" component={ItemDetails} />
          <Stack.Screen name="Pianeta" component={PlanetDetails} />
          <Stack.Screen name="La lista dei personaggi" component={List} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
