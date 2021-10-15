import * as React from 'react';
import { Box, Tab, Tabs, Typography, Grid, makeStyles } from '@material-ui/core';
import { PokeStats } from './PokeStats';
import { PokeWeakness } from './PokeWeakness';
import { matchColor } from '../../utility/utility';
import { pokeMainData } from '../../model/pokeModels';

enum PokeTab {
  Stats = 'Base Stats',
  Moves = 'Moves',
  Sprites = 'Sprites',
  Weakness = 'Weak to',
}
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const useStyles = makeStyles(() => ({
  panel: {
    overflowY: 'scroll',
    maxHeight: 'inherit',
    padding: '5px',
    height: '250px',
  },
}));

type Props = { pokeData: pokeMainData };

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const PokeMenu: React.FC<Props> = ({ pokeData }) => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        style={{ height: '85%' }}
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Grid container justifyContent="center" alignContent="center" className={classes.panel}>
            {children}
          </Grid>
        )}
      </div>
    );
  }

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100' }} style={{ backgroundColor: 'white', borderStyle: 'solid', borderRadius: '10px', borderColor: 'grey' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} bgcolor={matchColor(pokeData.data.types[0].type.name, '0.2')}>
        <Tabs variant="fullWidth" TabIndicatorProps={{ style: { backgroundColor: 'black' } }} value={value} onChange={handleChange} aria-label="poke menu">
          <Tab label={PokeTab.Stats} {...a11yProps(0)} />
          <Tab label={PokeTab.Moves} {...a11yProps(1)} />
          <Tab label={PokeTab.Sprites} {...a11yProps(2)} />
          <Tab label={PokeTab.Weakness} {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <PokeStats pokeStats={pokeData.data.stats} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        {pokeData.data.moves.map((move: any, index: number) => (
          <Grid style={{ width: '100%' }}>
            <Typography variant="overline" display="inline">
              {move.move.name}
            </Typography>
          </Grid>
        ))}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container justifyContent="center">
          <img src={pokeData.data.sprites.front_default} alt="front_default" />
          <img src={pokeData.data.sprites.back_default} alt="back_default" />
          <img src={pokeData.data.sprites.front_shiny} alt="front_shiny" />
          <img src={pokeData.data.sprites.back_shiny} alt="back_shiny" />
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Grid container justifyContent="center">
          <Grid item xs={6}>
            <PokeWeakness pokeTypes={pokeData.data.types} />
          </Grid>
        </Grid>
      </TabPanel>
    </Box>
  );
};
