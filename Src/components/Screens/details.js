import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestLoadCharacter } from "../../actions";
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import Title from "../athoms/title";
import ButtonAdd from "../molecole/buttonAdd";
import ButtonComp from "../athoms/button";

const ItemDetails = ({ route, navigation }) => {


    let params= route.params
    const counter = useSelector(state => state.counterreducer)
    const dispatch = useDispatch()
    const selectorChar = useSelector(state => state.charReducer)
    const selectorPlanet = useSelector(state => state.planetReducer)
    const selectorMovies = useSelector(state => state.moviesReducers)
    const [loading, setLoading] = useState(true)

console.log(params.id)
    useEffect(() => {

        setTimeout(() => {
            dispatch(requestLoadCharacter(params.id));
            setLoading(false)

        }, 300);

    }, [])






    if (!loading && !selectorMovies.loading && !selectorChar.loading && selectorChar.data && selectorPlanet.data && selectorMovies.films) {


        return (

            <View style={style.containerDetails}>

                <Title title={selectorChar.data.name}/>

                <View style={style.wrapperDetails}>
                    <Text style={style.textWhite}> Colore occhi : {selectorChar.data.eye_color}</Text>
                    <Text style={style.textWhite}> Colore occhi : {selectorChar.data.skin_color}</Text>
                    <Text style={style.textWhite}> Colore capelli : {selectorChar.data.hair_color}</Text>
                    <Text style={style.textWhite}> Genere : {selectorChar.data.gender}</Text>
                    <Text style={style.textWhite}> Altezza : {selectorChar.data.height} cm</Text>
                    <Text style={style.textWhite}> Anno di nascita: {selectorChar.data.birth_year}</Text>
                    <Text style={style.textWhite}> Pianeta d'origine :<TouchableOpacity style={style.link} onPress={()=>navigation.navigate('Pianeta')} ><Text style={{color:'yellow',fontSize:18}}>{selectorPlanet.data.name}</Text></TouchableOpacity></Text>

                        

                </View>
                <View style={style.wrapperDetailsFilm}>
                    <Title title='Film in cui appare:'/>
                    <View style={style.MoviesDetail}>{selectorMovies.films.length > 0 ?
                        selectorMovies.films.map((element, index) => <Text style={style.textBlack} key={"Text" + index}>{element.title}</Text>) :
                        <Text style={style.textBlack}> Nessun film</Text>
                    }</View>
                </View>
            </View>
        )
    }
    if (selectorChar.error || selectorMovies.error || selectorPlanet.error) {
        return (
            <View style={{ textAlign: "center" }}>
                <Text>Non è possibile elaborare la richiesta </Text>
            </View>
        )
    }
    else {
        return (
            <Text>Loading...</Text>
        )
    }

}
export default ItemDetails;

const style = StyleSheet.create({
    containerDetails: {
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
    },
    wrapperDetails:{
        backgroundColor:'black',
       
        width:'95%',
        padding:10,
        borderRadius:10,
        shadowColor:'grey',
        shadowOffset: { width: 5, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 3, 
        elevation:10
        
    },
    wrapperDetailsFilm:{
        alignItems:'center',
        marginTop:5,
        marginBottom:10,
        width:'95%',
        padding:10,
        borderRadius:10,
        shadowColor:'grey',
        shadowOffset: { width: 5, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 3, 
        elevation:10

    },MoviesDetail:{
        width:'95%',
        borderRadius:10,
    },
    textWhite:{
        color:'white',
        fontSize:18
    },
    textBlack:{
        fontSize:18
    },
    link:{
        justifyContent:'flex-end',
        alignContent:'flex-end',
        paddingStart:6,
        
    }
})