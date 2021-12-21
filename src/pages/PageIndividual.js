import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const PageIndividual = (props) => {
   const pokemon = props.pokemon;
   // console.log(pokemon)
   return (
      <>
         {/* <Button
            title="return to main page"
            onPress={() => props.setPokemon(null)}
            color="darkblue"
         /> */}
         <TouchableOpacity
            style={styles.button}
            onPress={() => props.setPokemon(null)}
         >
            <Text
               style={styles.textButton}>Return to main page
            </Text>
         </TouchableOpacity>
         <View
            style={styles.container}>
            <Text style={styles.text}>Name: {pokemon.name.slice(0, 1).toUpperCase() + pokemon.name.slice(1)}</Text>
            <Text style={styles.text}>Weight: {pokemon.weight}</Text>
            <Text style={styles.text}>Base experience: {pokemon.base_experience}</Text>
            {
               pokemon.abilities.map((ab, i) =>
                  <Text key={Math.random()} style={styles.text}>Ability {i + 1}:  {ab.ability.name}</Text>)
            }
            <Image
               style={styles.logo}
               source={{
                  uri: `${pokemon.sprites.other.dream_world.front_default}`,
               }}
            />
         </View>
      </>
   )
}

const styles = StyleSheet.create({
   container: {
      height: "100%",
      alignItems: "center",
      // justifyContent: "center",
   },
   text: {
      marginBottom: 6,
      fontSize: 20,
      fontWeight: "bolder",
      color: "rgb(12, 3, 38)",
   },
   button: {
      margin: 20,
      padding: 10,
      textAlign: 'center',
      borderColor: "blue",
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor: "#00BFFF"
   },
   textButton: {
      color: "darkblue",
      fontSize: 20,
      letterSpacing: 3,
      fontWeight: "bold"
   },
   logo: {
      width: 250,
      height: 260,
      marginTop: 20,
   },
});



export default PageIndividual;
