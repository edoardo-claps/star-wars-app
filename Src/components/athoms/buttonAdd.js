import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import '../../languages/langConfig';

const ButtonAdd = ({onPress}) => {
  const {t} = useTranslation();
  return (
    <View>
      <TouchableOpacity style={style.button} onPress={onPress}>
        <Text style={{color: 'yellow', fontSize: 19}}>
         {t('addChar')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default ButtonAdd;
const style = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'black',
    marginTop: 5,
    borderRadius: 10,
    padding: 10,
  },
});
