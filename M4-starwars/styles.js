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
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    padding: 10,
    alignSelf: "center",
    margin: "auto",
    paddingTop: 100,
  },
  modalInner: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  modalButton: {
    margin: 15,
  }
});