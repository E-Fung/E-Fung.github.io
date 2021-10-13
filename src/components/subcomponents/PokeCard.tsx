import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { pokeMainData } from '../../model/pokeModels';
import { PokePic } from './PokePic';
import { getPokeScheme, capFirstLetter } from '../../utility/utility';
import { PokeType } from './PokeType';
import { IdBackground } from './IdBackground';
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
  general: {
    padding: '5px',
    margin: '2px',
    zIndex: 10,
  },
  idBackground: {
    width: '100%',
    boxSizing: 'border-box',
    padding: '5px',
    height: '100%',
    position: 'absolute',
    zIndex: 5,
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
          id="paper"
          elevation={2}
          className={clsx({
            [classes.card]: true,
            [classes.pokeBounce]: hover,
          })}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Grid style={{ background: getPokeScheme(pokeMainData.data.types, '0.35') }}>
            <Grid container direction="column" style={{ width: '100%', height: '100%' }}>
              <Grid className={classes.idBackground}>
                <IdBackground id={pokeMainData.data.id.toString().padStart(3, '0')} />
              </Grid>
              <Grid item className={classes.general}>
                <PokePic id={pokeMainData.data.id} />
              </Grid>
              <Grid className={classes.general}>
                <Typography variant="h6" style={{ textAlign: 'center' }}>
                  {capFirstLetter(pokeMainData.data.name)}
                </Typography>
              </Grid>
              <Grid className={classes.general}>
                <PokeType types={pokeMainData.data.types} />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grow>
  );
};
