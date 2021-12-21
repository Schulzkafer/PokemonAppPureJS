import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const ButtonComponent = (props) => {

   return (
      <TouchableOpacity
         style={styles.button}
         onPress={props.execFunction}
      >
         <Text
            style={styles.textButton}
         >{props.children}
         </Text>
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   button: {
      margin: 20,
      padding: 10,
      textAlign: 'center',
      borderWidth: 1,
      borderRadius: 5,
      borderColor: "blue",
      backgroundColor: "#00BFFF",
   },
   textButton: {
      fontSize: 20,
      letterSpacing: 3,
      fontWeight: "bold",
      color: "darkblue",
   },
})

export default ButtonComponent;