import React from 'react';
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
    <img
      onClick={handlePokePicClick}
      style={{ maxWidth: '100%', maxHeight: '100%', cursor: 'pointer' }}
      src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${altIndex}.png`}
      alt="Pokemon"
    ></img>
  );
};
