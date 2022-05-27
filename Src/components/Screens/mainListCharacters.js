import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import '../../languages/langConfig';
import {
  emptysearch, increment,
  pushInList, removeInList,
  reorder,
  search
} from '../../store/actions';
import ButtonComp from '../atoms/button';
import ButtonAdd from '../atoms/buttonAdd';
import Title from '../atoms/title';
import Card from '../molecole/card';
import FindCard from '../molecole/findCard';
import FormId from '../molecole/insertById';
import Search from '../molecole/searchByName';
import { logout } from '../../store/actions';

const List = ({navigation}) => {
  const counter = useSelector(state => state.counterreducer);
  const SelectorList = useSelector(state => state.cardsList);
  const dispatch = useDispatch();
  const {t} =useTranslation()
  const removeItem = id => {
    if (SelectorList.list) {
      let filter = SelectorList.list.filter(element => element.id === id);
      let index = SelectorList.list.indexOf(filter[0]);
      dispatch(removeInList(index));
    }
  };

  const searchItem = name => {
    {
      SelectorList.list.map(data => {
        if (data.name.includes(name)) {
          dispatch(search(data));
        }
      });
    }
  };

  const SortArray = (x, y) => {
    if (x.name < y.name) {
      return -1;
    }
    if (x.name > y.name) {
      return 1;
    }
    return 0;
  };

  const SortArrayReverse = (x, y) => {
    if (x.name < y.name) {
      return 1;
    }
    if (x.name > y.name) {
      return -1;
    }
    return 0;
  };

  const filterByName = filter => {
    if (SelectorList.list.length > 0) {
      let temporary = [...SelectorList.list];

      switch (filter) {
        case 'az':
          temporary.sort(SortArray);
          dispatch(reorder(temporary));
          break;

        case 'za':
          temporary.sort(SortArrayReverse);
          dispatch(reorder(temporary));
          break;
      }
    }
  };

  const addOnPressFun = () => {
    dispatch(increment());
    dispatch(pushInList(counter));
  };

  return (
    <ScrollView>
    <View style={style.fathercontainer}>
      <View style={style.container}>
        <ButtonComp title='Logout' color='red'
         onPress={()=>{
           dispatch(logout());
           navigation.navigate('Home')
        }}/>
        <FormId />
        <Search searchItem={searchItem} />
        <ButtonAdd onPress={addOnPressFun} />

        <View style={style.towButtonContainer}>
          <Text style={{fontSize: 18}}>{t('filterByName')}</Text>
          <ButtonComp
            title="A-Z"
            color="yellow"
            onPress={() => filterByName('az')}
          />
          <ButtonComp
            title="Z-A"
            color="yellow"
            onPress={() => filterByName('za')}
          />
        </View>
      </View>

      <ScrollView style={style.scroll} showsVerticalScrollIndicator={false}>
        <View style={SelectorList.find.length ? style.find : style.none}>
          {SelectorList.find.length > 0 ? <Title title={t("results")} /> : null}
          {SelectorList.find.map((element, index) => (
            <FindCard key={index} data={element} />
          ))}
          <ButtonComp
            title={t("empty")}
            color="red"
            onPress={() => dispatch(emptysearch())}
          />
        </View>

        <View>
          {SelectorList.list.length > 0 ? <Title title={t("characters")} /> : null}
          {SelectorList.list.map((element, index) => (
            <Card
              key={index}
              data={element}
              id={element.id}
              removeItem={removeItem}
              navigation={navigation}
            />
          ))}
        </View>
      </ScrollView>
    </View>
    </ScrollView>
  );
};
export default List;

const style = StyleSheet.create({
  scroll: {
    width: '90%',
    flex: 1,
  },

  scrollContainer: {
    width: '100%',
  },
  container: {
    backgroundColor: '#d3d3d3',
    padding: 8,
    borderRadius: 10,
    elevation: 20,
    shadowColor: '#4b0082',
    shadowOffset: {width: 5, height: 6},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    width: '95%',
    elevation: 10,
  },
  fathercontainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    flex: 1,
    marginBottom: 30,
  },
  find: {
    width: '100%',
    alignItems: 'center',
  },
  none: {
    display: 'none',
  },
  towButtonContainer: {
    flexDirection: 'row',
    margin: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
