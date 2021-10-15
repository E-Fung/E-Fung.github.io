import React, { useState, useEffect } from 'react';
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

type Props = { id: number };
export const IdBackground: React.FC<Props> = ({ id }) => {
  const [newTexture, setNewTexture] = useState('' as string);
  const classes = useStyles();

  useEffect(() => {
    setNewTexture(generateIdTexture(` #${id.toString().padStart(3, '0')} `));
  }, [id]);

  return <img className={classes.patternBackground} alt="ID Background" src={newTexture}></img>;
};
