import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import '../../languages/langConfig';
import {useTranslation} from 'react-i18next';

const FindCard = props => {
  const {t} = useTranslation();
  if (props.data) {
    return (
      <View style={style.container}>
        <Text style={{fontSize: 24}}>{props.data.name}</Text>
        <Text>    {t('eyeColor')} {props.data.eye_color}</Text>
        <Text>{t('birth')} {props.data.birth_year}</Text>
        <Text>{t('gender')}  {props.data.gender}</Text>
      </View>
    );
  } else {
    
    return ( <View style={style.container}>
        <Text>{t('noRes')}</Text>
      </View>)
  }
};
export default FindCard;

const style = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginVertical: 6,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
