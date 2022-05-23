import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import '../../languages/langConfig';
import {getCharacters} from '../../store/actions';
import Title from '../athoms/title';

const PlanetDetails = () => {
  const dispatch = useDispatch();

  const selectorPlanet = useSelector(state => state.planetReducer);
  const arrayCharacters = useSelector(state => state.charReducer);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const {t} = useTranslation();

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
    
            {t('rotation')} {selectorPlanet.data.rotation_period}
          </Text>
          <Text style={style.textWhite}>
            
           {t('orbitation')} {selectorPlanet.data.orbital_period}
          </Text>
          <Text style={style.textWhite}>
            
            {t('diameter')} {selectorPlanet.data.diameter}
          </Text>
          <Text style={style.textWhite}>
            
           {t('weather')} {selectorPlanet.data.climate}
          </Text>
          <Text style={style.textWhite}>
            
           {t('gravity')} {selectorPlanet.data.gravity}
          </Text>
          <Text style={style.textWhite}>
            
            {t('territory')} {selectorPlanet.data.terrain}
          </Text>
          <Text style={style.textWhite}>
            
            {t('population')} {selectorPlanet.data.population}
          </Text>
        </View>
        <View style={style.wrapperDetailsFilm}>
          {arrayCharacters.char.length > 0 ? (
            <Title title={t('residents')} />
          ) : (
            <Title title={t('noResid')} />
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
        <Title>{t('noRes')} </Title>
      </View>
    );
  }
  if (!loading && error) {
    return (
      <View style={{textAlign: 'center'}}>
        <Title>{t('noRes')} </Title>
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
