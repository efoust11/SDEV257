import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ghostwhite",
    padding: 10,
    paddingTop: 80,
  },

  textInputContainer: {
    alignSelf: "stretch",
    marginBottom: 30,
  },
  
  textInputLabel: {
    marginBottom: 4,
  },

  textInput: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    height: 20,
    fontSize: 11,
    },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalInner: {
    alignSelf:"center",
    justifySelf: "center",
    alignItems: "center",
    padding: 20,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 2,
    height: 150,
    backgroundColor: "lightblue"
  },
  modalButtonContainer:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  modalButton: {
    margin: 10,
  },
  modalText:{
    fontWeight:"bold",
    fontSize:16
  }
});