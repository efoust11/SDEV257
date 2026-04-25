import React from "react";
import { View, Text, Modal } from "react-native";
import styles from "./styles";
import Animated, { SlideInLeft } from "react-native-reanimated";

export default function SwipeModal(props) {
  return (
    
    <Modal {...props}>
    
      <View style={styles.modalContainer}>
      <Animated.View entering = {SlideInLeft} >
        <View style={styles.modalInner}>
        
          <Text style={styles.modalText}>{props.message}</Text>

          <View style = {styles.modalButtonContainer}>
          <Text style={styles.modalButton} onPress={props.onPressConfirm}>
            Cofirm
          </Text>
          </View>
        </View>
        </Animated.View>
      </View>
    </Modal>
    
  );
}

SwipeModal.defaultProps = {
  transparent: true,
  onRequestClose: () => {},
};