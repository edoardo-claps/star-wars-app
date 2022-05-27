import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { pushInList } from '../../store/actions';
import Input from '../atoms/input';
import '../../languages/langConfig';
import {useTranslation} from 'react-i18next';


const FormId = () => {
  const dispatch = useDispatch();
  const {t} =useTranslation();

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
        placeholder={t('insertById')}
        value={insertedValue ? insertedValue : ''}
        onChangeText={text => SetinsertedValue(text)}
        keyboardType="number-pad"
        returnKeyType="done"
        buttonTitle={t('send')}
        onPress={hendleinput}
        onEndEditing={hendleinput}
      />
    </View>
  );
};
export default FormId;
