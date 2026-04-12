import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ScrollView} from "react-native";
import styles from "./styles";
import Swipeable from "./Swipeable";
import SwipeModal from "./SwipeModel";
import LazyImage from "./LazyImage";

export default function Spaceships({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false);
  const [spaceships, setSpaceships] = useState([]);
  const [itemName, setItemName] = useState();
  
  const [source, setsource] = useState(null);
  
  useEffect(() => {
    getSpaceships();
    //public domain image
    setsource(require("./assets/spaceship.jpg"));    
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
      <FlatList data = {spaceships} 
        renderItem = {({item}) => 
          <Swipeable name = {item.name} key = {item.result} onSwipe = {onSwipe(item.name)}>
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