import React from 'react';

type Props = { name: string };

export const PokemonCard: React.FC<Props> = (name) => {
  return (
    <>
      <p>props.name</p>
    </>
  );
};
