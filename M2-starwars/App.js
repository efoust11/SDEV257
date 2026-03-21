import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
//import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import Planets from "./Planets";
import Films from "./Films";
import Home from "./Home";
import Spaceships from "./Spaceships";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
<NavigationContainer>
  <Tab.Navigator>
  <Tab.Screen name="Home" component={Home} />
  <Tab.Screen name="Planets" component={Planets} />
  <Tab.Screen name="Films" component={Films} />
  </Tab.Navigator>
  </NavigationContainer>
  );
}
