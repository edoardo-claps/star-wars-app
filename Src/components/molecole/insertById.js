import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {pushInList} from '../../store/actions';
import Input from '../athoms/input';

const FormId = () => {
  const dispatch = useDispatch();

  const [insertedValue, SetinsertedValue] = useState(0);

  const hendleinput = () => {
    if (insertedValue > 0) {
      dispatch(pushInList(insertedValue));
      SetinsertedValue(0);
    }
  };

  return (
    <View>
      <Input
        placeholder="Aggiungi tramite Id"
        value={insertedValue ? insertedValue : ''}
        onChangeText={text => SetinsertedValue(text)}
        keyboardType="number-pad"
        returnKeyType="done"
        buttonTitle="Invia"
        onPress={hendleinput}
        onEndEditing={hendleinput}
      />
    </View>
  );
};
export default FormId;
