import React from "react";
import { View, StyleSheet, Text, FlatList, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { removeInList, search, reorder, emptysearch } from "../../actions";
import ButtonAdd from "../molecole/buttonAdd";
import Card from "../molecole/card";
import FormId from "../molecole/insertById";
import Search from "../molecole/searchByName";
import FindCard from "../molecole/findCard";
import Title from "../athoms/title";
import ButtonComp from "../athoms/button";


const List = ({navigation}) => {

    const counter = useSelector(store => store.counterreducer)
    const SelectorList = useSelector(state => state.listReducer)
    const dispatch = useDispatch()


    const removeItem = (id) => {
        if (SelectorList.list) {
            let filter = SelectorList.list.filter((element) => element.id === id)
            let index = SelectorList.list.indexOf(filter[0])
            dispatch(removeInList(index))
        }
    }

    const searchItem = (name) => {

        {
            SelectorList.list.map(data => {
                if (data.name.includes(name)) {
                    dispatch(search(data))
                }

            })
        }

    }

    function SortArray(x, y) {
        if (x.name < y.name) { return -1; }
        if (x.name > y.name) { return 1; }
        return 0;
    }

    function SortArrayReverse(x, y) {
        if (x.name < y.name) { return 1; }
        if (x.name > y.name) { return -1; }
        return 0;
    }

    const filterByName = (filter) => {
        if (SelectorList.list.length > 0) {
            let temporary = [...SelectorList.list]

            switch (filter) {
                case "az":
                    temporary.sort(SortArray);
                    dispatch(reorder(temporary))
                    break;

                case "za":
                    temporary.sort(SortArrayReverse);
                    dispatch(reorder(temporary))
                    break;
            }
        }
    }


    return (
        <View style={style.fathercontainer} >
            <View style={style.container}>

                <FormId />
                <Search searchItem={searchItem} />
                <ButtonAdd />
                
            <View style={style.TowButtonContainer}>
                <Text style={{ fontSize:18}}>Ordina per nome:</Text>
                <ButtonComp title='A-Z' color='yellow' onPress={() => filterByName("az")}/>
                <ButtonComp title='Z-A' color='yellow' onPress={() => filterByName("za")}/>
            </View>
            </View>

        


                <ScrollView  style={style.scroll} showsVerticalScrollIndicator={false}>
                <View style={SelectorList.find.length ? style.Find : style.none}>
                     {SelectorList.find.length > 0 ? <Title title='Risultati:' /> : null}
                    {SelectorList.find.map((element, index) => <FindCard key={index} data={element} />)}
                    <ButtonComp title='svuota' color='red' onPress={()=>dispatch(emptysearch())}/>
                </View>
                  

         
                <View>
                    {SelectorList.list.length > 0 ? <Title title='Personaggi:' /> : null}
                    {SelectorList.list.map((element, index) => <Card key={index} data={element} id={element.id} removeItem={removeItem} navigation={navigation}/>)}
                </View>
                </ScrollView>

        </View>
    )

}
export default List;

const style = StyleSheet.create({
    scroll: {
        width: '90%',
        flex:1
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
        shadowOffset: { width: 5, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 3, 
        width: '95%',
        elevation:10
    },
    fathercontainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
       height:'100%',
       flex:1,
       marginBottom:30
    },
    Find: {
        width: '100%',
        alignItems:'center'
    },
    none: {
        display: 'none'
    },
    TowButtonContainer:{
       flexDirection:'row',
       margin:1,
       justifyContent:'space-around',
       alignItems:'center'
      
    }
})