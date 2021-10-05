import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { generateIdTexture } from '../../utility/generateIdTexture';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  patternBackground: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    color: 'black',
  },
}));

type Props = { id: string };
export const IdBackground: React.FC<Props> = ({ id }) => {
  const [newTexture] = useState(generateIdTexture(id));
  console.log(newTexture);
  const classes = useStyles();
  return <Grid className={classes.patternBackground} style={{ backgroundImage: `url(${newTexture})` }}></Grid>;
};
