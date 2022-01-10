import React, {useContext} from 'react';
import {GameContext} from "../index";

function Counter() {
  const {score} = useContext(GameContext)
  return (
    <div>{score}</div>
  );
}

export default Counter;