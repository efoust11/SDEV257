import React, { useState, useEffect } from "react";
import { View, Text, FlatList} from "react-native";
import styles from "./styles";


export default function Planets() {

  const [planets, setPlanets] = useState([]);

  
  useEffect(() => {
    getPlanets()    
  }, [])

  const getPlanets = () => {
    const URL = "https://www.swapi.tech/api/planets";

    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPlanets(data.results);
        //console.log(data.results);
      })
  }

  return (
    <View style={styles.container}>
      <FlatList data = {planets} 
        renderItem = {({item}) => 
          <View style = {styles.itemView}>
            <Text style = {styles.item} >{item.name}</Text>
          </View>}/>
    </View>
);
}