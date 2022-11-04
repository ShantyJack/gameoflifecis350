import React, { useState, Component } from "react";
import './App.css';

function App() {

  //const [resourceGrid, upDateResources] = useState([]);
  //const [animalGrid, upDateAnimals] = useState([]);
  const [gameGrid, upDateGrid] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [selectGrid, upDateSelect] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  //const [animalSelection, setSelection] = useState(0);

  return (
    <div class="game-layout">

      <div class="game-column">

        <div>

          {getBoard()}

        </div>

        <div>

          select

        </div>
      </div>

      <div class="step-column">

        <div>

          history

        </div>

        <div>

          play

        </div>
      </div>

    </div>
  );
}

class AnimalSelect extends React.Component {

  constructor() {
    super();

    this.state = {
      selected: false
    }
  }

  render() {
    return <div>select</div>
  }
}

class GameTile extends React.Component {

  constructor() {
    super();

    this.state = {
      animal: 0,
      resource: 0
    }
  }

  render() {
    return <div>animal</div>
  }
}

function getBoard() { 
  return <div class="game-board">

    {
      gameGrid.map((tile) => {

        return (<button></button>);
      })
    }
  </div>

}


export default App;
