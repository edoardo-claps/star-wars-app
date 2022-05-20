import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {emptysearch} from '../../store/actions';
import Input from '../athoms/input';

const Search = props => {
  const [insertedValue, SetinsertedValue] = useState('');

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
      placeholder="Cerca per Nome"
      value={insertedValue ? insertedValue : ''}
      onChangeText={text => SetinsertedValue(text)}
      keyboardType="default"
      returnKeyType="done"
      onTouchStart={() => dispatch(emptysearch())}
      onEndEditing={hendleEvent}
      buttonTitle="Cerca"
      onPress={hendleEvent}
    />
  );
};
export default Search;
