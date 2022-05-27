import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonComp from '../atoms/button';
import i18next from '../../languages/langConfig';
import {useTranslation} from 'react-i18next';


const Card = props => {
  const {t} = useTranslation();

  if (props.data) {
    return (
      <View style={style.container}>
        <Text style={{fontSize: 24}}>{props.data.name}</Text>
        <Text>    {t('eyeColor')} {props.data.eye_color}</Text>
        <Text>{t('birth')} {props.data.birth_year}</Text>
        <Text>{t('gender')}  {t(props.data.gender)}</Text>
        <View style={style.TowButtonContainer}>
          <ButtonComp
            color="red"
            title={t("remove")}
            onPress={() => props.removeItem(props.id)}
          />
          <ButtonComp
            color="yellow"
            title={t("details")}
            onPress={() =>
              props.navigation.navigate(t('details'), {id: props.id})
            }
          />
        </View>
      </View>
    );
  }
};
export default Card;

const style = StyleSheet.create({
  container: {
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginVertical: 6,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  TowButtonContainer: {
    flexDirection: 'row',
    margin: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 4,
  },
});
