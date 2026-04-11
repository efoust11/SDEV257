import React from "react";
import { View, Text, Modal } from "react-native";
import styles from "./styles";

export default function SwipeModal(props) {
  return (
    <Modal {...props}>
      <View style={styles.modalContainer}>
      
        <View style={styles.modalInner}>
        
          <Text style={styles.modalText}>{props.message}</Text>

          <View style = {styles.modalButtonContainer}>
          <Text style={styles.modalButton} onPress={props.onPressConfirm}>
            Submit
          </Text>
          <Text style={styles.modalButton} onPress={props.onPressCancel}>
            Cancel
          </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}

SwipeModal.defaultProps = {
  transparent: true,
  onRequestClose: () => {},
};