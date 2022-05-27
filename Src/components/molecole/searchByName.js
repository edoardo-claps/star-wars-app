import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {emptysearch} from '../../store/actions';
import Input from '../atoms/input';
import '../../languages/langConfig';
import {useTranslation} from 'react-i18next';

const Search = props => {
  const [insertedValue, SetinsertedValue] = useState('');
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const hendleEvent = () => {
    if (insertedValue.trim()) {
      props.searchItem(insertedValue);
      SetinsertedValue('');
    } else {
      dispatch(emptysearch());
    }
  };

  return (
    <Input
      placeholder={t('searchByName')}
      value={insertedValue ? insertedValue : ''}
      onChangeText={text => SetinsertedValue(text)}
      keyboardType="default"
      returnKeyType="done"
      onTouchStart={() => dispatch(emptysearch())}
      onEndEditing={hendleEvent}
      buttonTitle={t("search")}
      onPress={hendleEvent}
    />
  );
};
export default Search;
