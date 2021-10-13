import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { generateIdTexture } from '../../utility/generateIdTexture';

const useStyles = makeStyles(() => ({
  patternBackground: {
    position: 'relative',
    width: '100%',
    height: '100%',
    color: 'black',
  },
}));

type Props = { id: string };
export const IdBackground: React.FC<Props> = ({ id }) => {
  const [newTexture] = useState(generateIdTexture(` #${id} `));
  const classes = useStyles();
  return <img className={classes.patternBackground} alt="awda" src={newTexture}></img>;
};
