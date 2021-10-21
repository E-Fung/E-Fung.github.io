import React, { useState, useEffect } from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

import { PokeMainDataModel } from '../../model/pokeModels';
import { PokeSpeciesModel } from '../../model/pokeSpecies';

import { getSinglePoke, getSinglePokeSpecies } from '../../service/pokeService';
import { getPokeScheme, capFirstLetter } from './../../utility/utility';

import { PokePic } from '../subcomponents/PokePic';
import { PokeEvol } from './PokeEvol';
import { PokeType } from '../subcomponents/PokeType';
import { PokeMenu } from './PokeMenu';

const useStyles = makeStyles(() => ({
  picBackground: {
    height: '25vh',
    borderBottomLeftRadius: '5%',
    borderBottomRightRadius: '5%',
  },
  content: {
    height: '50vh',
    width: '100%',
    borderTopLeftRadius: '5%',
    borderTopRightRadius: '5%',
    opacity: '1',
    backgroundColor: 'white',
    padding: '10px',
  },
  evolution: {
    height: '20vh',
    width: '100%',
    backgroundColor: 'white',
  },
}));

export const PokeDetails: React.FC = () => {
  const [currUrl] = useState(window.location.href as string);
  const [pokeData, setPokeData] = useState<PokeMainDataModel>();
  const [pokeSpecies, setPokeSpecies] = useState<PokeSpeciesModel>();
  let id: number = +currUrl.slice(-3).match(/[0-9]/g)!.join('');
  const classes = useStyles();

  useEffect(() => {
    getPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPokemon = async () => {
    let url: string = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let data: PokeMainDataModel = await getSinglePoke(url);
    setPokeData(data);
    let speciesUrl: string = data.data.species.url;
    let speciesData: PokeSpeciesModel = await getSinglePokeSpecies(speciesUrl);
    setPokeSpecies(speciesData);
  };

  if (!pokeData || !pokeSpecies) {
    return <></>;
  }

  return (
    <Grid style={{ background: getPokeScheme(pokeData.data.types, '0.9') }}>
      <Grid container justifyContent="center" className={classes.picBackground}>
        <PokePic id={id} />
      </Grid>
      <Grid justifyContent="center" container className={classes.content}>
        <Grid item xs={12} style={{ height: '10%' }}>
          <Typography variant="h5" style={{ textAlign: 'center', fontWeight: 'bold' }}>
            {capFirstLetter(pokeData.data.name)}
          </Typography>
        </Grid>
        <Grid item xs={3} style={{ height: '10%' }}>
          <PokeType types={pokeData.data.types} />
        </Grid>
        <Grid item xs={12} style={{ height: '10%' }}>
          <Typography style={{ textAlign: 'center' }}>
            {pokeSpecies.data.flavor_text_entries.filter((entry) => entry.language.name === 'en')[0].flavor_text.replace('\f', ' ')}
          </Typography>
        </Grid>
        <Grid item xs={10} style={{ height: '70%', maxHeight: '100%', maxWidth: '70%' }}>
          <Grid container justifyContent="center" style={{ maxHeight: '100%', maxWidth: '100%' }}>
            <PokeMenu pokeData={pokeData} />
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.evolution}>
        <PokeEvol pokeSpecies={pokeSpecies} />
      </Grid>
    </Grid>
  );
};
