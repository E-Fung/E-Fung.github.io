import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { PokePic } from '../subcomponents/PokePic';

export const PokeDetails: React.FC = () => {
  const [currUrl] = useState(window.location.href as string);
  let id = currUrl.slice(-3).match(/[0-9]/g)!.join('');
  return (
    <Grid>
      <PokePic id={id} />
    </Grid>
  );
};
