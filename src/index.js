import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUndo,
  faMars, faVenus,
  faDice, faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix
} from "@fortawesome/free-solid-svg-icons";

import Counter from "./comp/Counter.js";

import './index.css';
import "bootstrap/dist/css/bootstrap.css";

function App () {
  // Player
  const [ level, setLevel ] = useState(1);
  const [ gear, setGear ] = useState(0);
  const [ mod, setMod ] = useState(0);
  const total = level + gear + mod;

  const [ isMale, setMale ] = useState(true);
  const swapGender = () => setMale(prev => !prev);
  
  const resetPlayer = () => { setLevel(1); setGear(0); setMod(0); }

  // Monster
  const [ monsterLevel, setMonsterLevel ] = useState(0);
  const [ monsterMod, setMonsterMod ] = useState(0);
  const monsterTotal = monsterLevel + monsterMod;

  const resetMonster = () => { setMonsterLevel(0); setMonsterMod(0); }

  // Modal
  const [ modalVis, setModalVis ] = useState(false);

  const showModal = () => {
    const icons = [null, faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix];
    const roll = Math.floor(Math.random() * 6) + 1;

    setDice(icons[roll]);
    setModalVis(true);
  };

  // Dice
  const [ dice, setDice ] = useState(``);

  // General
  const doubleCheck = fun => window.confirm(`Are you sure?`) ? fun() : false;

  const hideModal = () => setModalVis(false);

  

  return (
    <div className="App">
      {/* Munchkin Stuff */}
      <h1 className="text-center">Munchkin</h1>

      <h1 className="text-center">{total}</h1>

      <div className="text-center">
        <button className="btn btn-light" onClick={swapGender}> <FontAwesomeIcon icon={isMale ? faMars : faVenus} /> </button>

        <button className="btn btn-light" onClick={showModal}> <FontAwesomeIcon icon={faDice} /> </button>

        <button className="btn btn-danger" onClick={() => doubleCheck(resetPlayer)}> <FontAwesomeIcon icon={faUndo} /> </button>
      </div>

      <hr/>

      <table><tbody><tr>
        <td><Counter
          name = "Level"
          func = {level => setLevel(level)}
          val = {level}
          min={1}
        /></td>

        <td><Counter
          name = "Gear"
          func = {gear => setGear(gear)}
          val = {gear}
        /></td>

        <td><Counter
          name = "Modifiers"
          func = {mod => setMod(mod)}
          val = {mod}
        /></td>
      </tr></tbody></table>
      
      <hr/>

      {/* Monster Stuff */}
      <h2 className="text-center">Monster Stats</h2>

      <h1 className="text-center">{monsterTotal}</h1>
      <div className="text-center">
        <button className="btn btn-warning" onClick={resetMonster}>
          <FontAwesomeIcon icon={faUndo} />
        </button>
      </div>

      <hr/>

      <table><tbody><tr>
        <td><Counter
          name = "Level"
          func = {level => setMonsterLevel(level)}
          val = {monsterLevel}
        /></td>

        <td><Counter
          name = "Modifiers"
          func = {mod => setMonsterMod(mod)}
          val = {monsterMod}
        /></td>
      </tr></tbody></table>

      {/* Dice Modal */}
      <Modal show={modalVis}>
        <Modal.Header closeButton>
          <Modal.Title>Roll Result</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="diceHolder"> <FontAwesomeIcon icon={dice} size="10x" /> </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="text-center">
            <button className="btn btn-success" onClick={hideModal}>Close</button>
          </div>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render( <App />, document.getElementById('root') );