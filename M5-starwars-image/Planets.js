import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ScrollView} from "react-native";
import styles from "./styles";
import Swipeable from "./Swipeable";
import SwipeModal from "./SwipeModel";
import LazyImage from "./LazyImage";

export default function Planets() {

  const [modalVisible, setModalVisible] = useState(false);
  const [planets, setPlanets] = useState([]);
  const [itemName, setItemName] = useState();

  const [source, setsource] = useState(null);
  
  useEffect(() => {
    getPlanets();
    //public domain image
    setsource(require("./assets/planets.jpg"));    
  }, [])

  const getPlanets = () => {
    const URL = "https://www.swapi.tech/api/planets";

    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPlanets(data.results);
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
        <FlatList data = {planets} 
          renderItem = {({item}) => 
            <Swipeable name = {item.name} key = {item.id} onSwipe = {onSwipe(item.name)}>
              <Text style = {styles.item} >{item.name}</Text>
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