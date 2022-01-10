import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import Counter from "./js/counter";

const defaultValues = {score: 0}

export const GameContext = React.createContext(defaultValues)

ReactDOM.render(
  <React.StrictMode>
    <GameContext.Provider value={defaultValues} >
      <Counter />
    </GameContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
