import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {requestLoadCharacter, logout} from '../../store/actions';
import Title from '../atoms/title';
import '../../languages/langConfig';
import {useTranslation} from 'react-i18next';
import ButtonComp from '../atoms/button';

const ItemDetails = ({route, navigation}) => {
  let params = route.params;
  const dispatch = useDispatch();
  const selectorChar = useSelector(state => state.charReducer);
  const selectorPlanet = useSelector(state => state.planetReducer);
  const selectorMovies = useSelector(state => state.moviesReducers);
  const [loading, setLoading] = useState(true);
  const {t}=useTranslation()

  console.log(params.id);
  useEffect(() => {
    setTimeout(() => {
      dispatch(requestLoadCharacter(params.id));
      setLoading(false);
    }, 300);
  }, []);

  if (
    !loading &&
    !selectorMovies.loading &&
    !selectorChar.loading &&
    selectorChar.data &&
    selectorPlanet.data &&
    selectorMovies.films
  ) {
    return (
      <ScrollView>
      <View style={style.containerDetails}>
        <View style={style.button}>
        <ButtonComp title='Logout' color='red'
         onPress={()=>{
           dispatch(logout());
           navigation.navigate('Home')
        }}/>
        </View>
        <Title title={selectorChar.data.name} />
        <View style={style.wrapperDetails}>
          <Text style={style.textWhite}>
           {t('eyeColor')} {selectorChar.data.eye_color}
          </Text>
          <Text style={style.textWhite}>
            
            {t('skinColor')} {selectorChar.data.skin_color}
          </Text>
          <Text style={style.textWhite}>
      
            {t('hairColor')} {selectorChar.data.hair_color}
          </Text>
          <Text style={style.textWhite}>
     
           {t('gender')} {t(selectorChar.data.gender)}
          </Text>
          <Text style={style.textWhite}>
  
            {t('tall')} {selectorChar.data.height} cm
          </Text>
          <Text style={style.textWhite}>
      
            {t('birth')} {selectorChar.data.birth_year}
          </Text>
          <Text style={style.textWhite}>
          
            {t('originPlanet')}
            <TouchableOpacity
              style={style.link}
              onPress={() => navigation.navigate(t('planet'))}>
              <Text style={{color: 'yellow', fontSize: 18}}>
                {selectorPlanet.data.name}
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
        <View style={style.wrapperDetailsFilm}>
          <Title title={t('moviesInto')} />
          <View style={style.MoviesDetail}>
            {selectorMovies.films.length > 0 ? (
              selectorMovies.films.map((element, index) => (
                <Text style={style.textBlack} key={'Text' + index}>
                  {element.title}
                </Text>
              ))
            ) : (
              <Text style={style.textBlack}>{t('noMoies')}</Text>
            )}
          </View>
        </View>
      </View>
      </ScrollView>
    );
  }
  if (selectorChar.error ) {
    return (
      <View style={{textAlign: 'center'}}>
        <Text>{t('noRes')}</Text>
        <Text>{selectorChar.errorText}</Text>
      </View>
    );
  } else {
    return(<View style={style.loading}>
         <Text>Loading...</Text>
    </View>);
  }

};
export default ItemDetails;

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
  MoviesDetail: {
    width: '95%',
    borderRadius: 10,
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
  loading:{
      justifyContent:'center',
      alignItems:'center',
      alignContent:'center',
      marginTop:'50%'
  }, 
  button:{
    marginTop:5
  }
});
