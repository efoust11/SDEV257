import React from "react";
import { View, StatusBar } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styles from "./styles";

StatusBar.setBarStyle("dark-content");

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapView}
        showsPointsOfInterest={false}
        showsUserLocation
        followUserLocation
        initialRegion={{
          latitude: 39.8175537,
          longitude: -86.3568752,
          latitudeDelta: 0.5,
          longitudeDelta: 0.25,
  }}>
          <Marker
          title = "Arby's"
          description="Fast food restaurant"
          coordinate={{
            latitude: 39.8159551,
            longitude: -86.3379477
          }}
          />
      </MapView>
    </View>
  );
}