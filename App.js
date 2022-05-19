/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Node} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import Home from './Src/components/Screens/home';
import List from './Src/components/Screens/mainListCharacters'
import ItemDetails from './Src/components/Screens/details';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import charReducer from './Src/reducers/characters';
import counterreducer from './Src/reducers/counter';
import planetReducer from './Src/reducers/planetReducer';
import moviesReducers from './Src/reducers/movies';
import listReducer from './Src/reducers/listreducer'
import arraycharReducer from './Src/reducers/arrayCharacters';
import PlanetDetails from './Src/components/Screens/planet';

const globalStore = configureStore({
  reducer: {
    charReducer,
    counterreducer,
    planetReducer,
    moviesReducers,
    listReducer,
    arraycharReducer
  }
})

const Stack= createNativeStackNavigator()


const App= () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={globalStore}>

    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Dettagli' component={ItemDetails}/>
      <Stack.Screen name='Pianeta' component={PlanetDetails}/>
      <Stack.Screen name='La lista dei personaggi' component={List}/>
    </Stack.Navigator> 

    </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
