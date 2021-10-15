import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { matchColor } from '../utility/utility';
import { useAppContext } from '../AppContext';

const useStyles = makeStyles(() => ({
  sizing: {
    height: '100%',
    minHeight: '100vh',
    width: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: -1,
  },
  background: {
    backgroundImage:
      'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f132df58-e3ee-411d-bbe3-f6f6ce8e746f/db70h46-e3c95a32-8918-4e2b-92b8-3a200e29b321.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YxMzJkZjU4LWUzZWUtNDExZC1iYmUzLWY2ZjZjZThlNzQ2ZlwvZGI3MGg0Ni1lM2M5NWEzMi04OTE4LTRlMmItOTJiOC0zYTIwMGUyOWIzMjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PtJ-CiQfe5JoPXbhaJslDtn8_64xeZX7NW86LKybo2Q)',
    backgroundRepeat: 'repeat',
  },
}));

export const Background: React.FC = () => {
  const { currType } = useAppContext();
  const classes = useStyles();
  return (
    <Grid
      className={classes.sizing}
      style={{
        backgroundColor: matchColor(currType, '0.35'),
      }}
    >
      <Grid className={`${classes.sizing} ${classes.background}`} />
    </Grid>
  );
};
