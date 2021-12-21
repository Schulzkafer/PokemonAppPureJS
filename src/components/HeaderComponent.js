import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const HeaderComponent = () => {
   return (
      <View style={styles.header}>
         <Text style={styles.text}>Pokemon App</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   header: {
      height: "5%",
      paddingTop: 30,
      paddingBottom: 10,
      textAlign: 'center',
      justifyContent: 'center'
   },
   text: {
      fontWeight: "bold",
      fontSize: 25,
      color: "yellow",
   }
});

export default HeaderComponent;