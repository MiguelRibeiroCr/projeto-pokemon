import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PokemonDetailsView from './details/view';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonListController from './pokemon-list/controller/pokemon-list-controller';
import PokemonDetailsController from './details/controller/pokemon-details-controller';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PokemonListController />} />
      <Route path="/pokemon-details/" element={<PokemonDetailsController />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
