import React from 'react';
import {StyleSheet, View} from 'react-native';
import ButtonComp from '../athoms/button';
import Title from '../athoms/title';

const Home = ({navigation}) => {
  return (
    <View style={style.container}>
      <Title title="Star Wars App!" />
      <ButtonComp
        title="Inizia"
        color="#ffd700"
        onPress={() => navigation.navigate('La lista dei personaggi')}
      />
    </View>
    //TODO: immagine
  );
};
export default Home;

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
