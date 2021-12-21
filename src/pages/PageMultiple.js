import React, { useState, useEffect, useCallback } from 'react';
import { View, ActivityIndicator } from 'react-native';
import Filter from '../components/Filter.js';
// import Message from '../components/Message.js';
import PokesList from "../components/PokesList.js"

const limit = 21;

const PageMultiple = (props) => {

   // const [pokesFiltered, setPokesFiltered] = useState([]);
   const [pokesCharacteristics, setPokesCharacteristics] = useState([]);
   // const [message, setMessage] = useState("");
   const [isLoading, setIsLoading] = useState(false);

   const setDefault = useCallback(() => {
      setIsLoading(true)
      let requests = Array.from({ length: limit }, (_, i) => i + 1)
         .map(x => fetch(`https://pokeapi.co/api/v2/pokemon/${x}/`));

      Promise.all(requests)
         .then(responses => Promise.all(responses.map(res => res.json())))
         .then(ps => setPokesCharacteristics(ps))
         .catch((err) => console.log(err.message));
      setIsLoading(false)
   })

   useEffect(() => {
      setDefault()
   }, [])

   const filterNames = (text) => {
      text = text.trim().toLowerCase();
      if (!text.length) {
         setDefault()
         return;
      }
      setPokesCharacteristics(pokesCharacteristics.filter(poke => poke.name.indexOf(text) > -1))
      // setMessage(`results for ${text}`)
   }



   return (
      <View>
         <Filter
            filterNames={filterNames} />

         {
            isLoading ?
               <ActivityIndicator
                  size="large"
                  color="yellow"
               /> :
               <PokesList
                  pokesCharacteristics={pokesCharacteristics}
                  setPokemon={props.setPokemon}
               />
         }
      </View>
   );
}


export default PageMultiple;