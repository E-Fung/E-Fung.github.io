import { Grid, Typography, LinearProgress } from '@material-ui/core';
import React from 'react';
import { capFirstLetter } from '../../utility/utility';

type Props = { pokeStats: any };

export const PokeStats: React.FC<Props> = ({ pokeStats }) => {
  return (
    <Grid container justifyContent="center">
      {pokeStats.map((stat: any, index: number) => (
        <Grid item key={index} xs={12}>
          <Typography style={{ color: 'black' }}>
            {capFirstLetter(stat.stat.name)} {stat.base_stat}
          </Typography>
          <LinearProgress variant="determinate" value={stat.base_stat / 1.5} style={{ width: '100%' }} />
        </Grid>
      ))}
    </Grid>
  );
};
