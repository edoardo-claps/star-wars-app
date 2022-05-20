import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonComp from '../athoms/button';

const Card = props => {
  if (props.data) {
    return (
      <View style={style.container}>
        <Text style={{fontSize: 24}}>{props.data.name}</Text>
        <Text>Colore occhi : {props.data.eye_color}</Text>
        <Text>Anno di nascita : {props.data.birth_year}</Text>
        <Text>Genere : {props.data.gender}</Text>
        <View style={style.TowButtonContainer}>
          <ButtonComp
            color="red"
            title="Rimuovi"
            onPress={() => props.removeItem(props.id)}
          />
          <ButtonComp
            color="yellow"
            title="Dettagli"
            onPress={() =>
              props.navigation.navigate('Dettagli', {id: props.id})
            }
          />
        </View>
      </View>
    );
  } else {
    return null;
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
