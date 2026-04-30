import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Swipeable({ onSwipe, name }) {

  const scrollProps = {
    horizontal: true,
    pagingEnabled: false,
    showsHorizontalScrollIndicator: false,
    scrollEventThrottle: 0,
    scrollEnabled: true
  };

  return (
    <View style={styles.item}>
      <ScrollView {...scrollProps} onScrollEndDrag = {e => onSwipe()}>
        <TouchableOpacity>
          <View style={styles.swipeItem}>
            <Text style={styles.swipeItemText}>{name}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.swipeBlank} />
      </ScrollView>
    </View>
  );
}