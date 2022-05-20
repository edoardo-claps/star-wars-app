import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCharacters} from '../../store/actions';
import Title from '../athoms/title';
import {View, Text, StyleSheet} from 'react-native';

const PlanetDetails = () => {
  const dispatch = useDispatch();

  const selectorPlanet = useSelector(state => state.planetReducer);
  const arrayCharacters = useSelector(state => state.charReducer);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    if (selectorPlanet.data) {
      dispatch(getCharacters(selectorPlanet.data.residents));

      setTimeout(() => {
        setLoading(false);
      }, 300);
    } else {
      setLoading(false);
      setError(true);
    }
  }, []);

  if (!loading && selectorPlanet.data) {
    return (
      <View style={style.containerDetails}>
        <Title title={selectorPlanet.data.name} />

        <View style={style.wrapperDetails}>
          <Text style={style.textWhite}>
            {' '}
            Periodo si rotazione: {selectorPlanet.data.rotation_period}{' '}
          </Text>
          <Text style={style.textWhite}>
            {' '}
            Periodo orbitale: {selectorPlanet.data.orbital_period}{' '}
          </Text>
          <Text style={style.textWhite}>
            {' '}
            Diametro: {selectorPlanet.data.diameter}{' '}
          </Text>
          <Text style={style.textWhite}>
            {' '}
            Clima: {selectorPlanet.data.climate}{' '}
          </Text>
          <Text style={style.textWhite}>
            {' '}
            Gravità: {selectorPlanet.data.gravity}{' '}
          </Text>
          <Text style={style.textWhite}>
            {' '}
            Territorio: {selectorPlanet.data.terrain}{' '}
          </Text>
          <Text style={style.textWhite}>
            {' '}
            Popolazione: {selectorPlanet.data.population}{' '}
          </Text>
        </View>
        <View style={style.wrapperDetailsFilm}>
          {arrayCharacters.char.length > 0 ? (
            <Title title="Residenti:" />
          ) : (
            <Title title="Questo pianeta non ha residenti!" />
          )}
          {arrayCharacters.char.map(elem => (
            <Text style={style.textBlack} key={elem.name + 'Text'}>
              {elem.name}
            </Text>
          ))}
        </View>
      </View>
    );
  }
  if (selectorPlanet.error) {
    return (
      <View style={{textAlign: 'center'}}>
        <Title>Non è possibile elaborare la richiesta </Title>
      </View>
    );
  }
  if (!loading && error) {
    return (
      <View style={{textAlign: 'center'}}>
        <Title>Qualcosa è andato storto</Title>
      </View>
    );
  } else {
    return <Text>Loading...</Text>;
  }
};
export default PlanetDetails;

const style = StyleSheet.create({
  containerDetails: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  wrapperDetails: {
    backgroundColor: 'black',
    width: '95%',
    padding: 10,
    borderRadius: 10,
    shadowColor: 'grey',
    shadowOffset: {width: 5, height: 6},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  wrapperDetailsFilm: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10,
    width: '95%',
    padding: 10,
    borderRadius: 10,
    shadowColor: 'grey',
    shadowOffset: {width: 5, height: 6},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },
  textWhite: {
    color: 'white',
    fontSize: 18,
  },
  textBlack: {
    fontSize: 18,
  },
  link: {
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    paddingStart: 6,
  },
});
