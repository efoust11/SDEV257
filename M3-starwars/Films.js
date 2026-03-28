import React, { useState, useEffect } from "react";
import { View, Text, FlatList} from "react-native";
import styles from "./styles";


export default function Films({ navigation }) {

  const [films, setFilms] = useState([]);
  
  useEffect(() => {
    getFilms()    
  }, [])

  const getFilms = () => {
    const URL = "https://www.swapi.tech/api/films";

    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFilms(data.result);
      })
  }

  return (
    <View style={styles.container}>
      <FlatList data = {films} 
        renderItem = {({item}) => 
          <View style = {styles.itemView}>
            <Text style = {styles.item} >{item.properties.title}</Text>
          </View>}/>
    </View>
);
}