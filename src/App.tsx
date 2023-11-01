import React from 'react';
import logo from './logo.svg';
import './App.css';
import GameRouter from './Pages/GameRouter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GameRouter />
      </header>
    </div>
  );
}

export default App;
