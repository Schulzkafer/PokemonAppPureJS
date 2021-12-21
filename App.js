import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import PageIndividual from './src/pages/PageIndividual';
import PageMultiple from './src/pages/PageMultiple';

import Footer from './src/components/Footer.js';
import HeaderComponent from './src/components/HeaderComponent.js';

import z from "./src/pages/test.js";//?


export default function App() {
   const [pokemon, setPokemon] = useState(z);
   const image = { uri: "https://iili.io/7yJVa4.jpgttps://reactjs.org/logo-og.png" };
   return (
      <View style={styles.container}>
         <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}
            imageStyle={{ opacity: 0.4 }}>
            <HeaderComponent />
            {
               (pokemon) ?
                  <PageIndividual pokemon={pokemon} setPokemon={setPokemon} /> :
                  <PageMultiple setPokemon={setPokemon} />
            }
         </ImageBackground>
         <Footer />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 255, 0.5)",
      justifyContent: 'center',
   },
   image: {
      flex: 1,
      // opacity: 0.5
   },
});
