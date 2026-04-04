import React from "react";
import { View, Text, Modal } from "react-native";
import styles from "./styles";

export default function SubmitModal(props) {
  return (
    <Modal {...props}>
      <View style={styles.modalContainer}>
      <Text style={styles.modalText}>{props.message}</Text>
        <View style={styles.modalInner}>
          
          <Text style={styles.modalButton} onPress={props.onPressConfirm}>
            Submit
          </Text>
          <Text style={styles.modalButton} onPress={props.onPressCancel}>
            Cancel
          </Text>
        </View>
      </View>
    </Modal>
  );
}

SubmitModal.defaultProps = {
  transparent: true,
  onRequestClose: () => {},
};