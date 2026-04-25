import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ScrollView} from "react-native";
import styles from "./styles";
import Swipeable from "./Swipeable";
import DetailsModal from "./DetailsModel";
import LazyImage from "./LazyImage";
import NetInfo from "@react-native-community/netinfo";

const connectedMap = {
  none: "Disconnected",
  unknown: "Disconnected",
  wifi: "Connected",
  cell: "Connected",
  mobile: "Connected",
};

export default function Films({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false);
  const [films, setFilms] = useState([]);

  const [title, setTitle] = useState();
  const [producer, setProducer] = useState();
  const [director, setDirector] = useState();
  const [releaseDate, setReleaseDate] = useState();
  const [openingCrawl, setOpeningCrawl] = useState();
  
  const [source, setsource] = useState(null);

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

  function onSwipe(title, producer, director, release_date, opening_crawl) {
    return () => {
      toggleModal();
      setTitle(title);
      setProducer(producer);
      setDirector(director);
      setReleaseDate(release_date);
      setOpeningCrawl(opening_crawl);
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
      <FlatList data = {films} 
        renderItem = {({item}) => 
          <Swipeable name = {item.properties.title} key = {item.result} 
            onSwipe = {onSwipe(
              item.properties.title, item.properties.producer, item.properties.director, item.properties.release_date, item.properties.opening_crawl
              )}>
            <Text style = {styles.item} >{item.properties.title}</Text>
          </Swipeable>}/>
        </ScrollView>

        <DetailsModal
        animationType="fade"
        visible={modalVisible}
        onPressConfirm={toggleModal}
        title = {title}
        producer = {producer}
        director = {director}
        release_date = {releaseDate}
        opening_crawl = {openingCrawl}
        transparent = {false}
      />
    </View>
);
}