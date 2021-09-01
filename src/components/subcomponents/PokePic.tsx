import React from 'react';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router';

type Props = { id: number | string };

export const PokePic: React.FC<Props> = ({ id }) => {
  const history = useHistory();
  let altIndex: string = id.toString().padStart(3, '0');

  const handlePokePicClick = (): void => {
    history.push({
      pathname: `/Pokemon/Details/${id}`,
    });
  };

  return (
    <Grid>
      <img
        onClick={handlePokePicClick}
        style={{ width: '100%', height: 'auto' }}
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${altIndex}.png`}
        alt="Pokemon"
      ></img>
    </Grid>
  );
};
