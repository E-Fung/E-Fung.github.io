import React, { useState, useEffect } from 'react';
import { getPokeList, getBasicApi } from '../service/pokeService';
import { pokeNameUrl, pokeMainData } from '../model/pokeModels';
import { Button, Container } from '@material-ui/core';
import { PokemonCard } from './subcomponents/PokemonCard';

export const PokeContainer: React.FC = () => {
  const [pokeList, setPokeList] = useState([] as pokeMainData[]);
  const [offset, setOffset] = useState(0 as number);
  const [totalPokemon] = useState(20 as number);
  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon?limit=${totalPokemon}&offset=${offset}` as string);

  useEffect(() => {
    console.log('useEffect of pokeContainer');
    (async () => {
      let listBasicPoke: pokeNameUrl[] = (await getBasicApi(url)).data.results;
      let additionalPokemons: pokeMainData[] = await getPokeList(listBasicPoke);
      setPokeList((p) => [...p, ...additionalPokemons]);
    })();
  }, [url]);

  const loadMorePokemon = (): void => {
    setUrl(`https://pokeapi.co/api/v2/pokemon?limit=${totalPokemon}&offset=${offset + 20}`);
    setOffset(offset + 20);
  };

  return (
    <div style={{ height: '100%' }}>
      <Container maxWidth="md" style={{ backgroundColor: 'black', height: '100%' }}>
        <Button variant="contained" onClick={() => loadMorePokemon()}>
          Load More
        </Button>
        {pokeList.map((pokemon, index) => {
          return <PokemonCard name={pokemon.data.name} />;
        })}
      </Container>

      {/* {pokeList.map((pokemon, index) => {
        return <p key={index}>{pokemon.data.name}</p>;
      })} */}
    </div>
  );
};
