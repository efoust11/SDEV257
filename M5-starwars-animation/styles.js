import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  
  scroll:{
    height:1,
    alignSelf: "center",
    justifySelf: "center",
    margin: 10
  },swipeContainer: {
    flex: 1,
    flexDirection: "row",
    width: 200,
    height: 30,
    marginTop: 50,
  },

  swipeItem: {
    width: 200,
    height: 30,
    backgroundColor: "azure",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "slategrey",
  },

  swipeItemText: {
    textAlign: "center",
    color: "slategrey",
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