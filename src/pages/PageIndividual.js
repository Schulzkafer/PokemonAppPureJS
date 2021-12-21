import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';

const PageIndividual = (props) => {

   const pokemon = props.pokemon;

   return (
      <>
         <ButtonComponent
            execFunction={() => props.setPokemon(null)}
         >Return to main page
         </ButtonComponent>
         <View
            style={styles.container}>

            <Text
               style={styles.text}
            >Name: {pokemon.name.slice(0, 1).toUpperCase() + pokemon.name.slice(1)}
            </Text>

            <Text
               style={styles.text}
            >Weight: {pokemon.weight}
            </Text>

            <Text
               style={styles.text}
            >Base experience: {pokemon.base_experience}
            </Text>

            {
               pokemon.abilities.map((ab, i) =>
                  <Text
                     key={Math.random()}
                     style={styles.text}
                  >Ability {i + 1}:  {ab.ability.name}
                  </Text>)
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
   },
   text: {
      marginBottom: 6,
      fontSize: 20,
      fontWeight: "bolder",
      color: "rgb(12, 3, 38)",
   },
   logo: {
      width: 250,
      height: 260,
      marginTop: 20,
   },
});

export default PageIndividual;
