import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
//import styled from "styled-components/native";
import styles from "./styles";
import Box from "./Box";
import Column from './Column';

export default function App() {
  return (
    <View style = {styles.container}>
      <Column>
        <Box>#1</Box>
        <Box>#2</Box>
      </Column>
      <Column>
        <Box>#3</Box>
        <Box>#4</Box>
      </Column>
    </View>
  );
}


