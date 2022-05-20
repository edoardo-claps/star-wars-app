import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';

const ButtonAdd = ({onPress}) => {
 

  return (
    <View>
      <TouchableOpacity style={style.button} onPress={onPress}>
        <Text style={{color: 'yellow', fontSize: 19}}>
          Aggiungi Personaggio
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
