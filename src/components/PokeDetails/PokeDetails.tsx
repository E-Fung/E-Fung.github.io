import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { PokePic } from '../subcomponents/PokePic';
import { getSinglePoke } from '../../service/pokeService';
import { pokeMainData } from '../../model/pokeModels';
import { PokeEvol } from './PokeEvol';
import { getPokeScheme, capFirstLetter } from './../../utility/utility';
import { PokeType } from '../subcomponents/PokeType';
import PokeMenu from './PokeMenu';

export const PokeDetails: React.FC = () => {
  const [currUrl] = useState(window.location.href as string);
  const [pokeData, setPokeData] = useState<pokeMainData>();
  const [pokeSpecies, setPokeSpecies] = useState<any>();
  let id = currUrl.slice(-3).match(/[0-9]/g)!.join('');

  useEffect(() => {
    getPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPokemon = async () => {
    let url: string = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let data: any = await getSinglePoke(url);
    setPokeData(data);
    let speciesUrl: string = data.data.species.url;
    let speciesData: any = await getSinglePoke(speciesUrl);
    setPokeSpecies(speciesData);
  };

  if (!pokeData || !pokeSpecies) {
    return <></>;
  }

  return (
    <Grid style={{ background: getPokeScheme(pokeData.data.types, '0.9') }}>
      <Grid
        container
        justifyContent="center"
        style={{
          height: '25vh',
          // background: getPokeScheme(pokeData.data.types, '0.9'),
          borderBottomLeftRadius: '5%',
          borderBottomRightRadius: '5%',
        }}
      >
        <Grid item xs={3}>
          <PokePic id={id} />
        </Grid>
        {/* <Grid item xs={3}>
          <PokeType types={pokeData.data.types} />
        </Grid> */}
      </Grid>
      <Grid
        justifyContent="center"
        container
        style={{
          height: '50vh',
          width: '100%',
          borderTopLeftRadius: '5%',
          borderTopRightRadius: '5%',
          opacity: '1',
          backgroundColor: 'white',
          padding: '10px',
        }}
      >
        <Typography variant="h5" style={{ fontWeight: 'bold' }}>
          {capFirstLetter(pokeData.data.name)}
        </Typography>
        <PokeType types={pokeData.data.types} />
        <Typography>{pokeSpecies.data.flavor_text_entries[0].flavor_text.replace('\f', ' ')}</Typography>
        <Grid item xs={9}>
          <PokeMenu />
        </Grid>
      </Grid>
      <Grid container style={{ height: '20vh', width: '100%', backgroundColor: 'grey' }}>
        <PokeEvol pokeSpecies={pokeSpecies} />
      </Grid>
    </Grid>
  );
};
