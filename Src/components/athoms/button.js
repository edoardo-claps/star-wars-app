import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Button } from 'react-native';


const ButtonComp = (props) => {
    

    return (
        
            <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text style={{color:props.color, fontSize:19}}>{props.title}</Text>
            </TouchableOpacity>
        

    )
}
export default ButtonComp


const styles = StyleSheet.create({
    button: { 
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#000000',
        padding: 6 ,
        border:' 3px solid #3c67e3',
        borderRadius: 10,
        width:100,
    },
  });