import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Title = props => {
  return (
    <View>
      <Text style={style.title}>{props.title}</Text>
    </View>
  );
};
export default Title;

const style = StyleSheet.create({
  title: {
    fontSize: 25,
    color: 'black',
    margin: 20,
  },
});
