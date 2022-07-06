import React from "react";
import { useQuery } from "@apollo/client/react"
import { View, Text, ScrollView } from "react-native";
import {gql} from "@apollo/client";


const MY_QUERY= gql`
query {
    Characters {
  name
}
}
`;

const Apollo=()=>{
  const { loading, error, data } = useQuery(MY_QUERY);
if(loading){console.log('loading..'); return(<Text>loading...</Text>)}
console.log(error)
if(error){console.log('error', error); return(<Text>error</Text>)}

console.log('data',data.Characters)
if(data)
return(
  <ScrollView>
    {data.Characters.map(elem=> <Text>{elem.name}</Text>)}
  </ScrollView>
)
}

export default Apollo;