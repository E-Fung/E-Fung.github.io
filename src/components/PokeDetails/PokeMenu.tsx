import * as React from 'react';
import { Box, Tab, Tabs, Typography } from '@material-ui/core';
import { Background } from '../Background';

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

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function PokeMenu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs TabIndicatorProps={{ style: { backgroundColor: 'black' } }} value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label={PokeTab.Stats} {...a11yProps(0)} />
          <Tab label={PokeTab.Moves} {...a11yProps(1)} />
          <Tab label={PokeTab.Sprites} {...a11yProps(2)} />
          <Tab label={PokeTab.Weakness} {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {PokeTab.Stats}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {PokeTab.Moves}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {PokeTab.Sprites}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {PokeTab.Weakness}
      </TabPanel>
    </Box>
  );
}
