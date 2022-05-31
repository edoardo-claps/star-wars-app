import React, {useEffect} from 'react'
import {View, ActivityIndicator, StyleSheet} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { authentication } from '../../store/actions/authentication'
import { useTranslation } from 'react-i18next'

const AutoLoginHendler = ({navigation}) => {
    const {t}=useTranslation()
    const dispatch=useDispatch()
    useEffect(()=>{
        const tryLogin= async ()=>{
            const userDataString = await AsyncStorage.getItem('userData')
            if(!userDataString){
                navigation.navigate(t('login'))
                return
            }
            const userData=JSON.parse(userDataString)
            const{expire,userId,token}=userData
            const expirationDate= new Date(expire);
            if(expirationDate <= new Date() || !token ||!userId){
                navigation.navigate(t('login'))
                return
            }
            const expiration=expirationDate.getTime() - new Date().getTime() 
            dispatch(authentication(userId, token, expiration))
            navigation.navigate(t('list'))
            
        }
        tryLogin();
    },[dispatch])


  return (
 <View style={style.screen}>
<ActivityIndicator size='large' color='yellow'/>
 </View>
  )
}
export default AutoLoginHendler;

const style =StyleSheet.create({
    screen:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    }
})