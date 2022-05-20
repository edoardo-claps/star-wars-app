import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const ButtonComp = ({onPress, title, color}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={{color: color, fontSize: 19}}>{title}</Text>
    </TouchableOpacity>
  );
};
export default ButtonComp;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 6,
    border: ' 3px solid #3c67e3',
    borderRadius: 10,
    width: 100,
  },
});
