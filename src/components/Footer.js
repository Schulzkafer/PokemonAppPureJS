import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Footer = () => {
   return (
      <View style={styles.footer}>
         <Text style={styles.text}>Developer: Aleksandr Karashev</Text>
         <Text style={styles.text}>Email: atsbyy@gmail.com</Text>
         <Text style={styles.text}>Whatsapp: 5521998797313</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   footer: {
      padding: 10,
      textAlign: 'center',
      flexDirection: 'column',
      backgroundColor: "rgba(8, 22, 131, 0.8)",
   },
   text: {
      color: "yellow",
      fontWeight: 400
   }
});

export default Footer;