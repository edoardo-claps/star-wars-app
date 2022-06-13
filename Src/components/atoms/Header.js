import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import homeLogo from './logo/homeLogo.png'
import backArrow from './logo/backArrow.png'
const HeaderComp = ({navigation, title}) => {
  return (
    <View style={styles.container}>
        <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
        <Image style={styles.img} source={backArrow}/>
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
            <Image style={styles.img} source={homeLogo}/>
          
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default HeaderComp;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',

    border: ' 3px solid #3c67e3',
    borderRadius: 10,
    width: 50,
    height:40,
    margin:4
  },
  container: {
    justifyContent: 'space-between',
    backgroundColor: 'black',
    width: '100%',
    height: '9%',
    flexDirection: 'row',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
  },
  title: {
    fontSize: 20,
    color: 'yellow',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
  },
  img:{
    width:30,
    height:30,
    margin:0,
    padding:0
  }
});
