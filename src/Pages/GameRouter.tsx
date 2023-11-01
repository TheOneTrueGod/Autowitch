import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainMenu from './MainMenu';
import { GamePage } from './MainGame/GamePage';

function GameRouter(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default GameRouter;