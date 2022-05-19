import React from "react";
import { StyleSheet, Button, View,Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import {increment, pushInList} from '../../actions/index';


const ButtonAdd=()=>{

    const counter =useSelector(store =>store.counterreducer)
    const dispatch=useDispatch()

    const addOnPressFun =()=>{dispatch(increment()); dispatch(pushInList(counter))}

    return(
        <View >
            <TouchableOpacity style={style.button} onPress={addOnPressFun}>
                <Text style={{color:'yellow', fontSize:19 }}>Aggiungi Personaggio</Text>
            </TouchableOpacity>
            
        </View>
        
    )

}
export default ButtonAdd;
const style =StyleSheet.create({
    button: {
        alignItems:'center',
        backgroundColor:'black',
        marginTop:5,
        borderRadius:10,
        padding:10

    }
})