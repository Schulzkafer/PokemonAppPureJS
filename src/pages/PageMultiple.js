import React, { useState, useEffect, useCallback } from 'react';
import { View, ActivityIndicator } from 'react-native';
import Filter from '../components/Filter';
import PokesList from "../components/PokesList"

const limit = 50;

const PageMultiple = (props) => {

   const [allPokes, setAllPokes] = useState([]);
   const [filteredPokesCharacteristics, setFilteredPokesCharacteristics] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   const setDefaultAllPokes = useCallback(() => {
      setIsLoading(true)
      let requests = Array.from({ length: limit }, (_, i) => i + 1)
         .map(x => fetch(`https://pokeapi.co/api/v2/pokemon/${x}/`));

      Promise.all(requests)
         .then(responses => Promise.all(responses.map(res => res.json())))
         .then(ps => {
            setAllPokes(ps)
            setFilteredPokesCharacteristics(ps)
         })
         .catch((err) => console.log(err.message));
      setIsLoading(false)
   })

   useEffect(() => {
      setDefaultAllPokes()
   }, [])

   const filterNames = (text) => {
      text = text.trim().toLowerCase();
      if (!text.length) {
         setFilteredPokesCharacteristics(allPokes)
         return;
      }
      setFilteredPokesCharacteristics(allPokes.filter(poke => poke.name.indexOf(text) > -1))
   }

   return (
      <View>
         <Filter
            filterNames={filterNames}
         />
         {
            isLoading ?
               <ActivityIndicator
                  size="large"
                  color="yellow"
               /> :
               <PokesList
                  filteredPokesCharacteristics={filteredPokesCharacteristics}
                  setPokemon={props.setPokemon}
               />
         }
      </View>
   );
}

export default PageMultiple;