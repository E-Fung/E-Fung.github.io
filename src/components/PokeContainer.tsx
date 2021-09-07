import React, { useState, useEffect } from 'react';
import { getPokeList, getBasicPoke, getBasicType, getTypePokeList } from '../service/pokeService';
import { pokeNameUrl, pokeMainData, typeNameUrl } from '../model/pokeModels';
import { Button, Container, Grid } from '@material-ui/core';
import { PokemonCard } from './subcomponents/PokemonCard';
import { useAppContext } from '../AppContext';

export const PokeContainer: React.FC = () => {
  const [pokeList, setPokeList] = useState([] as pokeMainData[]);
  const { currType } = useAppContext();

  useEffect(() => {
    loadMorePokemon(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currType]);

  const loadPokemon = async (offsetParam: boolean) => {
    let totalPokemonPerLoad: number = 20;
    let pokemonOffset: number = offsetParam ? pokeList.length + totalPokemonPerLoad : 0;
    let url: string = `https://pokeapi.co/api/v2/pokemon?limit=${totalPokemonPerLoad}&offset=${pokemonOffset}`;
    let listBasicPoke: pokeNameUrl[] = (await getBasicPoke(url)).data.results;
    let additionalPokemons: pokeMainData[] = await getPokeList(listBasicPoke);
    additionalPokemons = additionalPokemons.slice(0, 899);
    setPokeList((p) => [...p, ...additionalPokemons]);
  };

  const loadPokemonType = async (offsetParam: boolean) => {
    let pokemonOffset: number = offsetParam ? pokeList.length + 20 : 20;
    let typeUrl: string = `https://pokeapi.co/api/v2/type/${currType}`;
    let listBasicPoke: typeNameUrl[] = (await getBasicType(typeUrl)).data.pokemon;
    let additionalPokemons: pokeMainData[] = await getTypePokeList(listBasicPoke);
    additionalPokemons = additionalPokemons.filter((pokemon) => pokemon.data.id < 899);
    additionalPokemons = additionalPokemons.slice(0, pokemonOffset);
    setPokeList(additionalPokemons);
  };

  const loadMorePokemon = (firstLoad: boolean): void => {
    currType === 'none' ? loadPokemon(firstLoad) : loadPokemonType(firstLoad);
  };

  return (
    <div style={{ height: '100%' }}>
      <Container maxWidth="md" style={{ backgroundColor: 'black', height: '100%' }}>
        <Grid container justifyContent="center">
          {pokeList.map((pokemon, index) => {
            return <PokemonCard key={index} pokeMainData={pokemon} />;
          })}
          <Grid container style={{ width: '100%' }} justifyContent="center">
            <Button variant="contained" onClick={() => loadMorePokemon(true)}>
              Load More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
