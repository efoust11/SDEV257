import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ScrollView} from "react-native";
import styles from "./styles";
import Swipeable from "./Swipeable";
import SwipeModal from "./SwipeModel";
import LazyImage from "./LazyImage";
import NetInfo from "@react-native-community/netinfo";

const connectedMap = {
  none: "Disconnected",
  unknown: "Disconnected",
  wifi: "Connected",
  cell: "Connected",
  mobile: "Connected",
};

export default function Planets() {

  const [modalVisible, setModalVisible] = useState(false);

  const [planets, setPlanets] = useState([]);
  const [itemName, setItemName] = useState();

  const [networkTextVisible, setNetworkTextVisible] = useState(false);
  const [connected, setConnected] = useState("");

  useEffect(() => {
    function onNetworkChange(connection) {
      setConnected(connectedMap[connection.type]);
      //console.log(connectedMap[connection.type]);
      if(connectedMap[connection.type] == "Disconnected"){
        setNetworkTextVisible(true);
      }else{
        setNetworkTextVisible(false);
      }
    }

    const unsubscribe = NetInfo.addEventListener(onNetworkChange);

    return () => {
      unsubscribe();
      };
    }, []);


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
      {networkTextVisible && <Text style = {styles.connection}>No Connection Detected</Text>}
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
        message = {itemName}
        transparent = {true}
      />

      
    </View>
);
}