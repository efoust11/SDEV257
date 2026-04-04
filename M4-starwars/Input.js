
import PropTypes from "prop-types";
import { View, Text, TextInput} from "react-native";
import styles from "./styles";

export default function Input(props){
  return(
    <View style = {styles.textInputContainer}>
      <Text style = {styles.textInputLabel}>{props.label}</Text>
      <TextInput style = {styles.textInput} {...props}/>
    </View>
  );
}

Input.propTypes = {
  label: PropTypes.string,
};