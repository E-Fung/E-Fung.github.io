import React from 'react';
import { useAppContext } from '../../AppContext';
import { Grid, Button, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router';

const useStyles = makeStyles(() => ({
  reset: {
    color: 'white',
    backgroundColor: 'red',
  },
  return: {
    color: 'white',
    backgroundColor: 'grey',
  },
}));

export const TopBar: React.FC = () => {
  const { setCurrType } = useAppContext();
  const classes = useStyles();
  const history = useHistory();

  const onReset = () => {
    setCurrType('none');
  };

  const onReturn = () => {
    history.push({
      pathname: `/`,
    });
  };

  return (
    <Grid container justifyContent="space-between">
      <Button onClick={() => onReset()} className={classes.reset}>
        Reset
      </Button>
      <Button onClick={() => onReturn()} className={classes.return}>
        Return
      </Button>
    </Grid>
  );
};
