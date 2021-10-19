import React from 'react';
import { capFirstLetter } from '../../utility/utility';
import { Grid, Typography, LinearProgress } from '@material-ui/core';
import { PokeStatsModel } from '../../model/pokeModels';

type Props = { pokeStats: PokeStatsModel[] };

export const PokeStats: React.FC<Props> = ({ pokeStats }) => {
  return (
    <Grid container justifyContent="center">
      {pokeStats.map((stat: PokeStatsModel, index: number) => (
        <>
          <Grid item xs={3}>
            <Typography style={{ color: 'black' }}>{capFirstLetter(stat.stat.name)}</Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography style={{ color: 'black' }}>{stat.base_stat}</Typography>
          </Grid>
          <LinearProgress variant="determinate" value={stat.base_stat / 1.5} style={{ width: '100%' }} />
        </>
      ))}
    </Grid>
  );
};
