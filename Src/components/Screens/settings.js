import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import i18next from '../../languages/langConfig';
import {useTranslation} from 'react-i18next';
import ButtonComp from './../atoms/button';

const Settings = () => {
  const {t} = useTranslation();

  const itLeng = () => {
    i18next.changeLanguage('it');
  };
  const enLeng = () => {
    i18next.changeLanguage('en');
  };
  const espLeng = () => {
    i18next.changeLanguage('es');
  };
  return (
    <View style={style.container}>
      <Text style={style.text}>{t('selectLang')}</Text>
      <View style={style.ButtonContainer}>
        <ButtonComp
          title="Italian"
          onPress={itLeng}
          color={i18next.language == 'it' ? 'blue' : 'yellow'}
        />
        </View>
        <View style={style.ButtonContainer}>
        <ButtonComp
          title="English"
          onPress={enLeng}
          color={i18next.language == 'en' ? 'blue' : 'yellow'}
        />
        </View>
        <View style={style.ButtonContainer}>
        <ButtonComp
          title="Español"
          onPress={espLeng}
          color={i18next.language == 'es' ? 'blue' : 'yellow'}
        />
      </View>
    </View>
  );
};
export default Settings;

const style = StyleSheet.create({
  container: {
  
    justifyContent: 'center',
    alignItems: 'center',
    margin:20
  },
  text: {
    fontSize: 20,
    color:'black'
  },
  ButtonContainer: {
  
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
  },
});
