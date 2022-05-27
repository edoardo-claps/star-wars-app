import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import ButtonComp from './button';

const Input = props => {
  return (
    <View style={style.container}>
      <View style={style.input}>
        <TextInput
          style={{fontSize: 20}}
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onChangeText}
          keyboardType={props.keyboardType}
          returnKeyType={props.returnKeyType}
          onTouchStart={props.onTouchStart}
          onEndEditing={props.onEndEditing}
        />
      </View>

      <ButtonComp
        color="yellow"
        title={props.buttonTitle}
        onPress={props.onPress}
      />
    </View>
  );
};
export default Input;

const style = StyleSheet.create({
  container: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    borderBottomEndRadius: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});
