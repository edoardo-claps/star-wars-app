import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import i18next from '../../languages/langConfig';
import {useTranslation} from 'react-i18next';
import ButtonComp from '../athoms/button';

const Settings = () => {
 
  const {t} = useTranslation();

  const itLeng = () => {
    i18next.changeLanguage('it');
   
};

  const enLeng = () => {
    i18next.changeLanguage('en');
 
};
  return (
    <View style={style.container}>
      <Text style={style.text}>{t('selectLang')}</Text>
      <View style={style.towButtonContainer}>
      <ButtonComp title='Italian' onPress={itLeng} color={i18next.language=='it'?'blue':'yellow'}/>
      <ButtonComp title='English' onPress={enLeng} color={i18next.language=='en'?'blue':'yellow'}/>
      </View>
    </View>
  );
};
export default Settings;

const style=StyleSheet.create({
container:{
  justifyContent:'center',
  alignItems:'center',
  
},
text:{
  fontSize:20
},
towButtonContainer: {
  flexDirection: 'row',
  margin: 1,
  justifyContent: 'space-around',
  alignItems: 'center',
  marginTop: 4,
  
}
})