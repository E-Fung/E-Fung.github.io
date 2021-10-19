import { Grid, Typography, makeStyles, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { capFirstLetter } from '../../utility/utility';
import { MoveInterface } from '../../model/pokeModels';
import { getTypeOfMove } from '../../service/pokeService';
import { CircularProgress } from '@material-ui/core';

type Props = { pokeMoves: MoveInterface[] };

enum PokeMove {
  Machine = 'machine',
  LevelUp = 'level-up',
  Tutor = 'tutor',
}

const useStyles = makeStyles(() => ({
  moveGrid: {
    width: '100%',
    padding: '5px',
  },
  menuBlocks: {
    height: '35px',
    backgroundColor: 'white',
  },
  fire: {
    backgroundColor: 'rgb(240, 128, 48)',
    color: 'white',
  },
  grass: {
    backgroundColor: 'rgb(120, 200, 80)',
    color: 'black',
  },
  bug: {
    backgroundColor: 'rgb(168, 184, 32)',
    color: 'white',
  },
  dark: {
    backgroundColor: 'rgb(112, 88, 72)',
    color: 'white',
  },
  dragon: {
    backgroundColor: 'rgb(112, 56, 248)',
    color: 'white',
  },
  electric: {
    backgroundColor: 'rgb(248, 208, 48)',
    color: 'black',
  },
  fairy: {
    backgroundColor: 'rgb(238, 153, 172)',
    color: 'white',
  },
  fighting: {
    backgroundColor: 'rgb(192, 48, 40)',
    color: 'white',
  },
  flying: {
    backgroundColor: 'rgb(168, 144, 240)',
    color: 'white',
  },
  ghost: {
    backgroundColor: 'rgb(112, 88, 152)',
    color: 'white',
  },
  ground: {
    backgroundColor: 'rgb(224, 192, 104)',
    color: 'black',
  },
  ice: {
    backgroundColor: 'rgb(152, 216, 216)',
    color: 'black',
  },
  normal: {
    backgroundColor: 'rgb(168, 168, 120)',
    color: 'white',
  },
  poison: {
    backgroundColor: 'rgb(160, 64, 160)',
    color: 'white',
  },
  psychic: {
    backgroundColor: 'rgb(248, 88, 136)',
    color: 'white',
  },
  rock: {
    backgroundColor: 'rgb(184, 160, 56)',
    color: 'white',
  },
  steel: {
    backgroundColor: 'rgb(184, 184, 208)',
    color: 'black',
  },
  water: {
    backgroundColor: 'rgb(104, 144, 240)',
    color: 'white',
  },
  bold: {
    fontWeight: 'bold',
  },
  typeButton: {
    maxWidth: '80px',
    maxHeight: '20px',
    textTransform: 'none',
    margin: '5px',
  },
}));
interface TypeProps {
  children?: React.ReactNode;
  type: string;
}

export const PokeMoves: React.FC<Props> = ({ pokeMoves }) => {
  const [pMoves, setPMoves] = useState<MoveInterface[]>();
  const classes: any = useStyles();
  useEffect(() => {
    getTypeMove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokeMoves]);

  const getTypeMove = async () => {
    let pokeMoveType = await getTypeOfMove(pokeMoves);
    let tempPMoves = pokeMoveType.map((item, i) => Object.assign({}, item, pokeMoves[i]));
    setPMoves(tempPMoves);
  };

  function TypeButt(props: TypeProps) {
    const { children, type, ...other } = props;
    return (
      <Button variant="contained" {...other} className={`${classes[type]} ${classes.typeButton}`}>
        {capFirstLetter(type)}
      </Button>
    );
  }

  if (!pMoves) {
    return <CircularProgress />;
  }

  return (
    <Grid container style={{ overflow: 'auto', height: '100%' }}>
      <Grid container>
        <Grid
          container
          justifyContent="space-between"
          className={`${classes.moveGrid} ${classes.menuBlocks}`}
          style={{ zIndex: 100, position: 'sticky', top: '0px' }}
        >
          <Typography variant="h5">{capFirstLetter(PokeMove.LevelUp)}</Typography>
        </Grid>
        {pMoves
          .filter((move: MoveInterface, index: number) => move.version_group_details[0].move_learn_method.name === PokeMove.LevelUp)
          .sort((a, b) => (a.version_group_details[0].level_learned_at > b.version_group_details[0].level_learned_at ? 1 : -1))
          .map((move: MoveInterface, index: number) => (
            <Grid key={index} container justifyContent="space-between" className={classes.moveGrid}>
              <Grid item xs={2} style={{ height: '100%' }}>
                <Grid container style={{ height: '100%' }} alignContent="center">
                  <Typography>{move.version_group_details[0].level_learned_at}</Typography>
                </Grid>
              </Grid>
              <Grid item xs={6} style={{ height: '100%' }}>
                <Grid container style={{ height: '100%' }} alignContent="center">
                  <Typography style={{ textAlign: 'center' }}>{capFirstLetter(move.move.name)}</Typography>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <TypeButt type={move.data.type.name} />
              </Grid>
            </Grid>
          ))}
        <Grid container className={classes.menuBlocks}></Grid>
      </Grid>
      <Grid container>
        <Grid
          container
          justifyContent="space-between"
          className={`${classes.moveGrid} ${classes.menuBlocks}`}
          style={{ zIndex: 200, position: 'sticky', top: '0px' }}
        >
          <Typography variant="h5">{capFirstLetter(PokeMove.Machine)}</Typography>
        </Grid>
        {pMoves
          .filter((move: MoveInterface, index: number) => move.version_group_details[0].move_learn_method.name === PokeMove.Machine)
          .sort((a, b) => a.move.name.localeCompare(b.move.name))
          .map((move: MoveInterface, index: number) => (
            <Grid key={index} container justifyContent="space-between" className={classes.moveGrid}>
              <Grid item xs={2} style={{ height: '100%' }}>
                <Grid container style={{ height: '100%' }} alignContent="center"></Grid>
              </Grid>
              <Grid item xs={6} style={{ height: '100%' }}>
                <Grid container style={{ height: '100%' }} alignContent="center">
                  <Typography>{capFirstLetter(move.move.name)}</Typography>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <TypeButt type={move.data.type.name} />
              </Grid>
            </Grid>
          ))}
        <Grid container className={classes.menuBlocks}></Grid>
      </Grid>
      <Grid container>
        <Grid
          container
          justifyContent="space-between"
          className={`${classes.moveGrid} ${classes.menuBlocks}`}
          style={{ zIndex: 300, position: 'sticky', top: '0px' }}
        >
          <Typography variant="h5">{capFirstLetter(PokeMove.Tutor)}</Typography>
        </Grid>
        {pMoves
          .filter((move: MoveInterface, index: number) => move.version_group_details[0].move_learn_method.name === PokeMove.Tutor)
          .sort((a, b) => a.move.name.localeCompare(b.move.name))
          .map((move: MoveInterface, index: number) => (
            <Grid key={index} container justifyContent="space-between" className={classes.moveGrid}>
              <Grid item xs={2} style={{ height: '100%' }}>
                <Grid container style={{ height: '100%' }} alignContent="center"></Grid>
              </Grid>
              <Grid item xs={6} style={{ height: '100%' }}>
                <Grid container style={{ height: '100%' }} alignContent="center">
                  <Typography>{capFirstLetter(move.move.name)}</Typography>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <TypeButt type={move.data.type.name} />
              </Grid>
            </Grid>
          ))}
      </Grid>
      <Grid container className={classes.menuBlocks} style={{ height: '60%' }} />
    </Grid>
  );
};
