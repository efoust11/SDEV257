import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ScrollView} from "react-native";
import styles from "./styles";
import Swipeable from "./Swipeable";
import SwipeModal from "./SwipeModel";


export default function Films({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false);
  const [films, setFilms] = useState([]);
  const [itemName, setItemName] = useState();
  
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

  function toggleModal() {
    setModalVisible(!modalVisible);
  }

  function onSwipe(name) {
    return () => {
      toggleModal();
      setItemName(name);
    };
  }

  return (
    <View style={styles.container}>
     <ScrollView style = {styles.scroll}>
      <FlatList data = {films} 
        renderItem = {({item}) => 
          <Swipeable name = {item.properties.title} key = {item.result} onSwipe = {onSwipe(item.properties.title)}>
            <Text style = {styles.item} >{item.properties.title}</Text>
          </Swipeable>}/>
        </ScrollView>

        <SwipeModal
        animationType="fade"
        visible={modalVisible}
        onPressConfirm={toggleModal}
        onPressCancel={toggleModal}
        message = {itemName}
        transparent = {true}
      />
    </View>
);
}