import React, { useState, useEffect } from 'react';
import { getPokeList, getBasicPoke, getBasicType, getTypePokeList } from '../service/pokeService';
import { pokeNameUrl, pokeMainData, typeNameUrl } from '../model/pokeModels';
import { Button, Grid } from '@material-ui/core';
import { PokeCard } from './subcomponents/PokeCard';
import { useAppContext } from '../AppContext';

let maxPokemon: number = 898;

export const PokeContainer: React.FC = () => {
  const [pokeList, setPokeList] = useState([] as pokeMainData[]);
  const [loadButton, setLoadButton] = useState(true as boolean);
  const { currType } = useAppContext();

  useEffect(() => {
    let firstLoad: boolean = true;
    setLoadButton(true);
    loadMorePokemon(firstLoad);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currType]);

  const loadPokemon = async (firstLoad: boolean): Promise<void> => {
    let totalPokemonPerLoad: number = 20;
    let pokemonOffset: number = firstLoad ? 0 : pokeList.length;
    let url: string = `https://pokeapi.co/api/v2/pokemon?limit=${totalPokemonPerLoad}&offset=${pokemonOffset}`;
    let listBasicPoke: pokeNameUrl[] = (await getBasicPoke(url)).data.results;
    let additionalPokemons: pokeMainData[] = await getPokeList(listBasicPoke);
    additionalPokemons = additionalPokemons.slice(0, maxPokemon - pokeList.length);
    firstLoad ? setPokeList(additionalPokemons) : setPokeList((p) => [...p, ...additionalPokemons]);
    additionalPokemons.length + pokeList.length >= maxPokemon && setLoadButton(false);
  };

  const loadPokemonType = async (firstLoad: boolean): Promise<void> => {
    let pokemonOffset: number = firstLoad ? 20 : pokeList.length + 20;
    let typeUrl: string = `https://pokeapi.co/api/v2/type/${currType}`;
    let listBasicPoke: typeNameUrl[] = (await getBasicType(typeUrl)).data.pokemon;
    let additionalPokemons: pokeMainData[] = await getTypePokeList(listBasicPoke);
    additionalPokemons = additionalPokemons.filter((pokemon) => pokemon.data.id < 899);
    // max amount of pokemon with this type vs. total showing
    additionalPokemons.length <= pokemonOffset && setLoadButton(false);
    additionalPokemons = additionalPokemons.slice(0, pokemonOffset);
    setPokeList(additionalPokemons);
  };

  const loadMorePokemon = (firstLoad: boolean): void => {
    currType === 'none' ? loadPokemon(firstLoad) : loadPokemonType(firstLoad);
  };

  return (
    <Grid container justifyContent="center">
      {pokeList.map((pokemon, index) => {
        return <PokeCard key={index} pokeMainData={pokemon} />;
      })}
      {loadButton && (
        <Grid container style={{ width: '100%' }} justifyContent="center">
          <Button variant="contained" onClick={() => loadMorePokemon(false)}>
            Load More
          </Button>
        </Grid>
      )}
    </Grid>
  );
};
