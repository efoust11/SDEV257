import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { View, Text, TextInput} from "react-native";
import styles from "./styles";
import Input from "./Input";
import SubmitModal from "./SubmitModal";


export default function Spaceships() {

  const [modalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState("");

  function toggleModal() {
    console.log(searchText);
    setModalVisible(!modalVisible);
  }

  return (
    <View style={styles.container}>
      <Input 
        label = "Spaceships" 
        placeholder = "Search"
        onChangeText = {(e) => {
          setSearchText(e);
        }}
      />
      <SubmitModal
        animationType="fade"
        visible={modalVisible}
        onPressConfirm={toggleModal}
        onPressCancel={toggleModal}
        message = {searchText}
        transparent = {true}
      />

    <Text onPress = {toggleModal}>Submit</Text>
    </View>
);
}