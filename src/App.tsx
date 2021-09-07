import './App.css';
import React from 'react';
import { PokeContainer } from './components/PokeContainer';
import { PokeDetails } from './components/PokemonDetails/PokemonDetails';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AppContextProvider } from './AppContext';

function App() {
  var myRange: number[] = [];
  for (var i = 1; i <= 898; i++) {
    myRange.push(i);
  }
  console.log(window.location.href);
  return (
    <div className="App" style={{ height: '100%' }}>
      <AppContextProvider>
        <Router>
          <Route path={'/'} exact component={PokeContainer} />
          {myRange.map((id) => (
            <Route path={`/Pokemon/Details/${id}`} key={id} component={PokeDetails} />
          ))}
        </Router>
      </AppContextProvider>
    </div>
  );
}

export default App;
