import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ScrollView} from "react-native";
import styles from "./styles";
import Swipeable from "./Swipeable";
import SwipeModal from "./SwipeModel";


export default function Spaceships({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false);
  const [spaceships, setSpaceships] = useState([]);
  const [itemName, setItemName] = useState();
  
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