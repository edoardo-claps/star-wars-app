import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FindCard = props => {
  if (props.data) {
    return (
      <View style={style.container}>
        <Text style={{fontSize: 24}}>{props.data.name}</Text>
        <Text>Colore occhi : {props.data.eye_color}</Text>
        <Text>Anno di nascita : {props.data.birth_year}</Text>
        <Text>Genere : {props.data.gender}</Text>
      </View>
    );
  } else {
    
    return ( <View style={style.container}>
        <Text>Nessun risultato</Text>
      </View>)
  }
};
export default FindCard;

const style = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginVertical: 6,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
