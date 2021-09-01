import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { pokeMainData, pokeType } from '../../model/pokeModels';
import { PokePic } from './PokePic';
import { getPokeScheme } from '../../utility/utility';

type Props = { pokeMainData: pokeMainData };

export const PokemonCard: React.FC<Props> = ({ pokeMainData }) => {
  const [linGradient, setLinGradient] = useState('' as string);
  const [types] = useState(pokeMainData.data.types as pokeType[]);

  useEffect(() => {
    let pokeScheme = getPokeScheme(types);
    setLinGradient(pokeScheme);
  }, [types]);

  return (
    <Grid item xs={6} md={4} lg={3} style={{ background: linGradient }}>
      <Grid container justifyContent="center">
        <p style={{ color: 'white' }}>{pokeMainData.data.name}</p>
        <PokePic id={pokeMainData.data.id} />
      </Grid>
    </Grid>
  );
};
