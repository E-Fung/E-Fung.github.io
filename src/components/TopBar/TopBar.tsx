import React from 'react';
import { useAppContext } from '../../AppContext';
import { Grid, Button } from '@material-ui/core';
import { useHistory } from 'react-router';

export const TopBar: React.FC = () => {
  const { setCurrType } = useAppContext();
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
      <Button onClick={() => onReset()} style={{ color: 'white', backgroundColor: 'red' }}>
        Reset
      </Button>
      <Button onClick={() => onReturn()} style={{ color: 'white', backgroundColor: 'grey' }}>
        Return
      </Button>
    </Grid>
  );
};
