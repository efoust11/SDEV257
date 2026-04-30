import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ScrollView} from "react-native";
import styles from "./styles";
import Swipeable from "./Swipeable";
import SwipeModal from "./SwipeModel";
import LazyImage from "./LazyImage";
import Input from "./Input";
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
  const [filtered, setFiltered] = useState([]);
  const [itemName, setItemName] = useState();

  const [networkTextVisible, setNetworkTextVisible] = useState(false);
  const [connected, setConnected] = useState("");

  const [searchText, setSearchText] = useState("");

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
        setFiltered(data.results);
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

  function searchFilter(text){
    setFiltered([]);
    const newArray = [];
    if(text == ""){
      setFiltered(planets);
    }else{
      setFiltered([])
      for(const item in planets){
      if((planets[item].name).toLowerCase().includes(searchText.toLowerCase())){
        newArray.push(planets[item]);
      }
    }
    setFiltered(newArray);
    }
    
  }

  return (
    <View style={styles.container}>
      {networkTextVisible && <Text style = {styles.connection}>No Connection Detected</Text>}
      <LazyImage
        style={{ width: 200, height: 150, marginTop: 10, marginBottom: 10 }}
        resizeMode="contain"
        source={source}
      />
      <View style = {styles.searchBar}>
      <Input 
        placeholder = "Search"
        onChangeText = {(e) => {
          setSearchText(e);
        }}
        style = {styles.searchBox}
      />
      <Text onPress = {() => {
        searchFilter(searchText);
      }}
        style = {styles.searchButton}>Search</Text>
      </View>
      <ScrollView style = {styles.scroll}>
        <FlatList data = {filtered} 
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
        transparent = {false}
      />

      
    </View>
);
}