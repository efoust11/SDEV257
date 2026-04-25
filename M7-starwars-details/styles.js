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
  },
  connection: {
    paddingTop: 10,
    fontWeight:"bold"
  },
  detailInner: {
    alignSelf:"center",
    justifySelf: "center",
    alignItems: "left",
    paddingTop: 100,
    paddingLeft: 20,
    paddingRight: 20,
  },
  detailTitle:{
    fontWeight: "bold",
    fontSize: 18,
    padding: 10,
  },
  detailText: {
    padding:10,
  },
  detailButton:{
    backgroundColor: "azure",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "slategrey",
    height: 30,
    padding: 5,
    marginLeft: "auto",
    marginRight: "auto"
  }
});