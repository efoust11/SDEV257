import React, { useState, useEffect } from "react";
import { View, Text, FlatList} from "react-native";
import styles from "./styles";


export default function Spaceships() {

  const [spaceships, setSpaceships] = useState([]);

  
  useEffect(() => {
    getSpaceships()    
  }, [])

  const getSpaceships = () => {
    const URL = "https://www.swapi.tech/api/starships";

    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSpaceships(data.results);
      })
  }

  return (
    <View style={styles.container}>
      <FlatList data = {spaceships} 
        renderItem = {({item}) => 
          <View style = {styles.itemView}>
            <Text style = {styles.item} >{item.name}</Text>
          </View>}/>
    </View>
);
}