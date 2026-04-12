import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ScrollView} from "react-native";
import styles from "./styles";
import Swipeable from "./Swipeable";
import SwipeModal from "./SwipeModel";
import LazyImage from "./LazyImage";

export default function Films({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false);
  const [films, setFilms] = useState([]);
  const [itemName, setItemName] = useState();
  
  const [source, setsource] = useState(null);
  
  useEffect(() => {
    getFilms();
    //public domain image
    setsource(require("./assets/stars.jpg"));     
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
    <LazyImage
        style={{ width: 200, height: 150, marginTop: 10, marginBottom: 10 }}
        resizeMode="contain"
        source={source}
      />
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