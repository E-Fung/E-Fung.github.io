import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { getApiEvolData } from '../../service/pokeService';
import { PokePic } from './../subcomponents/PokePic';
import { PokeEvolModel } from './../../model/pokeModels';
import { PokeSpeciesModel } from '../../model/pokeSpecies';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

type Props = { pokeSpecies: PokeSpeciesModel };

export const PokeEvol: React.FC<Props> = ({ pokeSpecies }) => {
  const [evolChain, setEvolChain] = useState<PokeEvolModel[]>();

  useEffect(() => {
    getEvolChain();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getEvolChain = async (): Promise<void> => {
    let evolData = await getApiEvolData(pokeSpecies.data.evolution_chain.url);
    let tempEvolChain: PokeEvolModel[] = [];
    evolData = evolData.data.chain;

    tempEvolChain.push(Object.assign({}, evolData.species, evolData.evolution_details));
    while (evolData.evolves_to[0] != null) {
      evolData = evolData.evolves_to[0];
      tempEvolChain.push(Object.assign({}, evolData.species, evolData.evolution_details[0]));
    }
    setEvolChain(tempEvolChain);
  };

  if (!evolChain) {
    return <></>;
  }

  return (
    <Grid container justifyContent="center" style={{ height: '100%' }}>
      {evolChain.map((pokeStag: any, index: number) => (
        <React.Fragment key={index}>
          <Grid item xs={2} style={{ padding: 0, height: '100%' }}>
            <Grid container justifyContent="center" alignContent="center" style={{ height: '100%', width: '100%' }}>
              <PokePic id={pokeStag.url.slice(-4).match(/[0-9]/g).join('')} />
            </Grid>
          </Grid>
          {index < evolChain.length - 1 && (
            <Grid item xs={1}>
              <Grid container justifyContent="center" alignContent="center" style={{ height: '100%' }}>
                <KeyboardArrowRightIcon />
              </Grid>
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
};
