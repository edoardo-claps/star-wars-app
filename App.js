import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Provider } from 'react-redux';
import HeaderComp from './Src/components/atoms/Header';
import AutoLoginHendler from './Src/components/Screens/autoLoginHendler';
import ItemDetails from './Src/components/Screens/details';
import Home from './Src/components/Screens/home';
import Login from './Src/components/Screens/login';
import List from './Src/components/Screens/mainListCharacters';
import PlanetDetails from './Src/components/Screens/planet';
import Settings from './Src/components/Screens/settings';
import SignUpSuccess from './Src/components/Screens/signUpSuccess';
import './Src/languages/langConfig';
import auth from './Src/store/reducers/authentication';
import cardsList from './Src/store/reducers/cardList';
import charReducer from './Src/store/reducers/characters';
import counterreducer from './Src/store/reducers/counter';
import moviesReducers from './Src/store/reducers/movies';
import planetReducer from './Src/store/reducers/planetReducer';
import HomeTabBar from './Src/components/molecole/HomeBottomTab';

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

const Stack = createNativeStackNavigator();

const App = () => {
  const {t} = useTranslation();
  return (
    <Provider store={globalStore}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: 'black'},
            headerTintColor: 'yellow',
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LoginCheck"
            component={AutoLoginHendler}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={t('details')}
            component={ItemDetails}
          />
          <Stack.Screen
            name={t('successfullySign_up')}
            component={SignUpSuccess}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="header"
            component={HeaderComp}
            options={{headerShown: false}}
          />
  
          <Stack.Screen name={t('planet')} component={PlanetDetails} />
          <Stack.Screen
            name={t('list')}
            component={List}
            options={{headerShown: false}}
          />
            <Stack.Screen
            name='TabBar'
            component={HomeTabBar}
            options={{headerShown: false}}
          />
          <Stack.Screen name={t('settings')} component={Settings} />
          <Stack.Screen name={t('signUp')} component={Login} />
          <Stack.Screen name={t('login')} component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
