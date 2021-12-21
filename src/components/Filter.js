import React, { useState } from 'react';
import { View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';

const Filter = (props) => {

   const [text, setText] = useState("");

   return (
      <View>
         <TextInput
            style={styles.input}
            onChangeText={setText}
            value={text}
            placeholder={"type name of pokemon e touch filter"}
         />
         <TouchableHighlight
            style={styles.button}
            onPress={() => props.filterNames(text)}
         >
            <Text style={styles.text}>FILTER</Text>
         </TouchableHighlight>
      </View>
   )

}

const styles = StyleSheet.create({
   input: {
      height: 40,
      margin: 12,
      padding: 10,
      borderColor: "yellow",
      borderWidth: 1,
      backgroundColor: "#ffff99"
   },
   button: {
      margin: 12,
      padding: 10,
      textAlign: 'center',

      borderColor: "blue",
      borderWidth: 1,
      backgroundColor: "#00BFFF"
   },
   text: {
      color: "darkblue",
      fontSize: 20,
      letterSpacing: 3,
      fontWeight: "bold"
   }
});

export default Filter;