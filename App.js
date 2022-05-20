import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {configureStore} from '@reduxjs/toolkit';
import React from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import ItemDetails from './Src/components/Screens/details';
import Home from './Src/components/Screens/home';
import List from './Src/components/Screens/mainListCharacters';
import PlanetDetails from './Src/components/Screens/planet';
import arraycharReducer from './Src/reducers/arrayCharacters';
import charReducer from './Src/reducers/characters';
import counterreducer from './Src/reducers/counter';
import listReducer from './Src/reducers/listreducer';
import moviesReducers from './Src/reducers/movies';
import planetReducer from './Src/reducers/planetReducer';

const globalStore = configureStore({
  reducer: {
    charReducer,
    counterreducer,
    planetReducer,
    moviesReducers,
    listReducer,
    arraycharReducer,
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
