import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { pokeMainData } from '../../model/pokeModels';
import { PokePic } from './PokePic';
import { getPokeScheme, capFirstLetter } from '../../utility/utility';
import { PokeType } from './PokeType';
import { Grow } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: 'white',
    position: 'relative',
    margin: '8px',
  },
  pokeBounce: {
    animation: `$bounce 300ms ${theme.transitions.easing.easeInOut}`,
  },
  '@keyframes bounce': {
    '0%': {
      transform: 'translateY(0%)',
    },
    '50%': {
      transform: 'translateY(-1%)',
    },
    '100%': {
      transform: 'translateY(0%)',
    },
  },
}));

type Props = { pokeMainData: pokeMainData };

export const PokeCard: React.FC<Props> = ({ pokeMainData }) => {
  const [hover, setHover] = useState(false as boolean);
  const classes = useStyles();

  return (
    <Grow in={true}>
      <Grid item xs={6} md={4} lg={3}>
        <Paper
          elevation={2}
          className={clsx({
            [classes.card]: true,
            [classes.pokeBounce]: hover,
          })}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Grid style={{ background: getPokeScheme(pokeMainData.data.types, '0.35'), padding: '5px' }}>
            <Grid container direction="column">
              <Grid item style={{ margin: '2px' }}>
                <PokePic id={pokeMainData.data.id} />
              </Grid>
              <Grid style={{ margin: '2px' }}>
                <Typography variant="h6" style={{ textAlign: 'center' }}>
                  {capFirstLetter(pokeMainData.data.name)}
                </Typography>
              </Grid>
              <Grid style={{ margin: '2px' }}>
                <PokeType types={pokeMainData.data.types} />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grow>
  );
};
