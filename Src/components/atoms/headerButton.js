import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import homeLogo from './logo/homeLogo.png'

const HeaderButton = ({navigation, onPress}) => {
  return (
    
        <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={onPress}>
        <Image style={styles.img} source={homeLogo}/>
        </TouchableOpacity>
      </View>
      

  );
};
export default HeaderButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    border: ' 3px solid #3c67e3',
    borderRadius: 10,
    width: 50,
    height:40,
    
  },

  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
  },
  img:{
    width:30,
    height:30,
    margin:0,
    padding:0
  }
});
