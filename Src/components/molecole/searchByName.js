import React, { useState } from "react";
import { BackHandler, StyleSheet, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import Input from "../athoms/input";
import { emptysearch } from "../../actions";

const Search = (props) => {

    const [insertedValue,SetinsertedValue]=useState("")

 
    const dispatch = useDispatch()


    const hendleEvent = () => {
        if (insertedValue.trim()) {
            props.searchItem(insertedValue)
            SetinsertedValue('')
        }
        else {
            dispatch(emptysearch())
        }
    }

    return (
    <Input 
    placeholder='Cerca per Nome'
    value={insertedValue?insertedValue:''}
    onChangeText={text=>SetinsertedValue(text)}
    keyboardType='default'
    returnKeyType='done'
    onTouchStart={()=>dispatch(emptysearch())}
    onEndEditing={hendleEvent}
    
    buttonTitle='Cerca'
    onPress={hendleEvent}
    />


    )

}
export default Search;
