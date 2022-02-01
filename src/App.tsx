import './App.css';
import { PokeContainer } from './components/PokeContainer';
import { PokeDetails } from './components/PokeDetails/PokeDetails';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AppContextProvider } from './AppContext';
import { Container, Grid, makeStyles, AppBar, Toolbar } from '@material-ui/core';
import { Background } from './components/Background';
import { TopBar } from './components/TopBar/TopBar';

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: 'rgb(0,0,0,0.8)',
    padding: '15px',
    borderEndEndRadius: '10px',
    borderEndStartRadius: '10px',
  },
  appbar: {
    minWidth: '100%',
    height: '5vh',
  },
}));

function App() {
  const classes = useStyles();
  var myRange: number[] = [];
  for (var i = 1; i <= 898; i++) {
    myRange.push(i);
  }
  return (
    <div className="App" style={{ height: '100%' }}>
      <AppContextProvider>
        <Router>
          <AppBar position="sticky">
            <Toolbar>
              <TopBar />
            </Toolbar>
          </AppBar>
          <Grid style={{ position: 'relative' }}>
            <Container className={classes.container} maxWidth="md" style={{ backgroundColor: 'rgb(0,0,0,0.7)', height: '100%' }}>
              <Route path={'/tsPokedex'} exact component={PokeContainer} />
              {myRange.map((id) => (
                <Route path={`/Pokemon/Details/${id}`} key={id} component={PokeDetails} />
              ))}
            </Container>
            <Background />
          </Grid>
        </Router>
      </AppContextProvider>
    </div>
  );
}

export default App;
