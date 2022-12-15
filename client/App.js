import React, { useState, Component } from "react";
import './App.css';
import Board from './Board.js';
import Select from './Select.js';
import Step from './Step.js';

function App() {

  return (  //this series of divs basically just sets the order of the layout, all of the magic is done in the css
    <div class="game-layout">

      <div class="game-column">

        <div className="game-board">

          <Board height={8} width={8} />

        </div>

        <div className="select-row">

          <Select width={8}/>

        </div>
      </div>

      <div class="step-column">

        <div className="history">

          history

        </div>

        <div className="play" onClick={() => window.location.reload(false)}>

          play

        </div>
      </div>
    </div>
  );
}


export default App;
