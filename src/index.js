import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Counter from "./comp/Counter.js";

import './index.css';

function App () {
  const [ level, setLevel ] = useState(1);
  const [ gear, setGear ] = useState(0);
  const [ mod, setMod ] = useState(0);
  const [ isMale, setMale ] = useState(true);

  const swapGender = () => setMale(prev => !prev);

  let total = level + gear + mod;

  return (
    <div className="App">
      <h1>Munchkin Strength Tracker</h1>

      <h1>{total}</h1>
      <button onClick={swapGender}>{isMale ? `♂` : `♀`}</button>

      <hr/>

      <table>
        <tbody>
          <tr>
            <td>
              <Counter
                name = "Level"
                func = {level => setLevel(level)}
                val = {level}
                min={1}
              />
            </td>
            <td>
              <Counter
                name = "Gear"
                func = {gear => setGear(gear)}
                val = {gear}
              />
            </td>
            <td>
              <Counter
                name = "Modifiers"
                func = {mod => setMod(mod)}
                val = {mod}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);