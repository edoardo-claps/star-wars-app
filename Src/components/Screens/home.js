import React from 'react';
import {StyleSheet, View} from 'react-native';
import ButtonComp from '../athoms/button';
import Title from '../athoms/title';
import '../../languages/langConfig';
import {useTranslation} from 'react-i18next';

const Home = ({navigation}) => {
  const {t}=useTranslation()
  return (
    <View style={style.container}>
      <Title title="Star Wars App!" />
      <ButtonComp
        title={t('start')}
        color="#ffd700"
        onPress={() => navigation.navigate(t('list'))}
      />
      <View style={style.settings} >

      <ButtonComp
        title={t('settings')}
        color="#ffd700"
        onPress={() => navigation.navigate(t('settings'))}
      />
      </View>
    </View>
    //TODO: immagine
  );
};
export default Home;

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  settings:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:40,
    backgroundColor:'gray',
    borderRadius:10,
    padding:100
  }
});
