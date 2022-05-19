import React from "react";
import {View,StyleSheet} from 'react-native';
import Title from "../athoms/title";
import ButtonComp from '../athoms/button'
import List from "./mainListCharacters";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Home =({navigation})=>{

    return(
        <View style={style.container} >
            <Title title='Star Wars App!'/>
            <ButtonComp title='Inizia' color='#ffd700' onPress={()=>navigation.navigate('La lista dei personaggi')}/>
        </View>
        //immagine
        
    )
}
export default Home;

const style=StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center'
    
    }
})