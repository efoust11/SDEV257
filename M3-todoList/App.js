import React, {useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, Keyboard } from 'react-native';
import Task from './components/Task'


export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
    
  }

  const completeTask = (index) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
  return (
    <View style={styles.container}>
      {/*Today's Tasks*/}
      <View style = {styles.tasksWrapper}>
        <Text style = {styles.selectionTitle}>Today's tasks</Text>
        <View style = {styles.items}>
          {/*tasks*/}
          {
            taskItems.map((item, index) => {
              return(
                <TouchableOpacity key = {index} onPress = {() => completeTask(index)}>
                  <Task key = {index} text = {item}/>
                </TouchableOpacity>
              ) 
            })
          }
        </View>
      </View>
    {/*write a task*/}
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding": "height"}
      style = {styles.writeTaskWrapper}>
        <TextInput style = {styles.input} placeholder={'Write a task'} value = {task} onChangeText = {text => setTask(text)}/>
        <TouchableOpacity onPress = {() => handleAddTask()}>
          <View style = {styles.addWrapper}>
            <Text style = {styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,

  },
  selectionTitle:{
    fontSize: 24,
    fontWeight: "bold",
  },
  items:{
    margin: 30
  },
  writeTaskWrapper:{
    position: "absolute",
    bottom: 60,
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    borderRadius: 60,
    backgroundColor: "#FFF",
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addWrapper: {
    width: 60, 
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems:"center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
});
