import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Image, StyleSheet, Text, View} from 'react-native';
import SuccessImg from '../../components/atoms/logo/success.png';
import '../../languages/langConfig';
import Title from '../atoms/title';

const SignUpSuccess = ({navigation}) => {
  const {t} = useTranslation();

  useEffect(() => {
    setTimeout(() => {
        navigation.navigate(t('list')) 
    }, 2000);
  }, []);

  return (
    <View style={style.container}>
      <Title title={t('successfullySign_up')} />
      <Text style={style.text}>{t('thanks')}</Text>
      <Image style={style.imgContainer} source={SuccessImg} />
    </View>
  );
};
export default SignUpSuccess;

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 18,
  },
  imgContainer: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});
