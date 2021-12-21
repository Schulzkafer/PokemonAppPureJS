import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderComponent = () => {

   return (
      <View style={styles.header}>
         <Text style={styles.text}>Pokemon App</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   header: {
      textAlign: 'center',
      justifyContent: 'center',
      paddingTop: 20,
      paddingBottom: 10,
   },
   text: {
      fontWeight: "bold",
      fontSize: 25,
      color: "yellow",
   }
});

export default HeaderComponent;