import React, { useEffect, useState } from 'react';
import {useTranslation} from 'react-i18next';
import {Image, StyleSheet, View} from 'react-native';
import '../../languages/langConfig';
import ButtonComp from '../atoms/button';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused } from '@react-navigation/native';

const Home = ({navigation}) => {
  const [logged, setLogged]=useState(false)
  const focus=useIsFocused()
console.log(focus);

  useEffect(()=>{
    const checkLogin= async()=>{
      const userDataString = await AsyncStorage.getItem('userData')
      console.log(userDataString)
      if(!userDataString){
        setLogged(false)
        return
    }
    const userData=JSON.parse(userDataString)
    const{expire,userId,token}=userData
    const expirationDate= new Date(expire);
    if(expirationDate <= new Date() || !token ||!userId){
       setLogged(false)
      return
    }
    setLogged(true)
    }
    checkLogin()
  },[focus])
  const {t} = useTranslation();

  return (
    <View style={style.container}>
      <View style={style.img}>
        <Image source={require('../atoms/logo/starwars.png')} />
      </View>
      <ButtonComp
        title={t('start')}
        color="#ffd700"
        onPress={() => navigation.navigate(t('LoginCheck'))}
      />
      {!logged ? (
        <View style={style.settings}>
          <ButtonComp
            title={t('login')}
            color="#ffd700"
            onPress={() => navigation.navigate(t('login'))}
          />
        </View>
      ) : null}
      <View style={style.settings}>
        <ButtonComp
          title={t('settings')}
          color="#ffd700"
          onPress={() => navigation.navigate(t('settings'))}
        />
      </View>
    </View>
  );
};
export default Home;

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  settings: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    padding: 10,
  },
  img: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
