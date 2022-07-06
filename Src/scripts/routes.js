import Apollo from "../components/Screens/apollo"
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../components/Screens/home";
import AutoLoginHendler from '../components/Screens/autoLoginHendler'
import ItemDetails from '../components/Screens/details'
import SignUpSuccess from'../components/Screens/signUpSuccess'
import HeaderComp from '../components/atoms/Header'
import PlanetDetails from '../components/Screens/planet'
import HomeTabBar from "../components/molecole/HomeBottomTab";
import Settings from "../components/Screens/settings";
import Login from "../components/Screens/login";
import List from '../components/Screens/mainListCharacters'
import { useTranslation } from "react-i18next";

const Stack = createNativeStackNavigator();

const CustomRoutes =()=>{
    const {t} = useTranslation();
return(
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
            <Stack.Screen
            name='Apollo'
            component={Apollo}
            options={{headerShown: false}}
          />
          <Stack.Screen name={t('settings')} component={Settings} />
          <Stack.Screen name={t('signUp')} component={Login} />
          <Stack.Screen name={t('login')} component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
)
}
export default CustomRoutes