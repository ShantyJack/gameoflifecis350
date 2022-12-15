import React, { useState, Component } from "react";
import GameTile from './GameTile.js';
import Animal from './Animal.js';

class Board extends React.Component {
  //state holds the 2d array created by the initBoard function
  state = {
    boardData: this.initBoard(this.props.height, this.props.width)
  }

  /** initializes the board data for the board object
   *  creates a 2 dimensional array filled with GameTile objects with random parameters and returns said array
   */
  initBoard(height, width) {

    let boardData = []; //initialize the array with a length of zero, since JS has dynamic arrays

    for (let i = 0; i < height; i++) {

      boardData.push([]); //appends a new array on the end of the initial array

      for (let j = 0; j < width; j++) {

        let param1 = (Math.random() < 0.5); //random booleans used as parameters for tiles
        let param2 = (Math.random() < 0.5);
        let param3 = (Math.random() < 0.5);

        boardData[i][j] = {

          data: new GameTile(param1, param2, param3)
        }
      }
    }
    return boardData;
  }

  /**
   * oldname is the previous name of the tile being selected, tileref is a reference to the tile being updated
   * this function cycles through the animals on a tile
   * only activated when the tile is clicked on
   */
  cycleName(oldName, tileref){

    tileref.forceUpdate();

    if (oldName === "C"){
      return "H";
    }

    if (oldName === " "){
      return "C";
    }

    return " ";
  }

  /**  render uses the map function to iterate over the 2d array held in 'boardData'
   *   it returns a series of HTML divs that have the name of the animal object held in the gametile object in board data
   *   the name is either H for herbivore, or C for carnivore
   *   there is a lot of copy paste here, but if I were to make it more modular, I'd have to rewrite a large part
   */
  render() {
    return <div>{

      this.state.boardData.map((row) => {

        return row.map((tileData) => {

          if (tileData.data.currentResource.hasPlant) {

            if (tileData.data.currentResource.hasWater) {//the next four return statements are redundant, but they are kind of necessary to set the background color of each tile

              return (<div className="tile" id="plantandwater" onClick={() => tileData.data.currentAnimal.name = this.cycleName(tileData.data.currentAnimal.name, this)}>

                {tileData.data.currentAnimal.name}
              </div>
              )

            } else {

              return (<div className="tile" id="plant" onClick={() => tileData.data.currentAnimal.name = this.cycleName(tileData.data.currentAnimal.name, this)}>

                {tileData.data.currentAnimal.name}
              </div>
              )
            }
          } else {

            if (tileData.data.currentResource.hasWater) {

              return (<div className="tile" id="water" onClick={() => tileData.data.currentAnimal.name = this.cycleName(tileData.data.currentAnimal.name, this)}>

                {tileData.data.currentAnimal.name}
              </div>
              )

            } else {

              return (<div className="tile" onClick={() => tileData.data.currentAnimal.name = this.cycleName(tileData.data.currentAnimal.name, this)}>

                {tileData.data.currentAnimal.name}
              </div>
              )
            }
          }
        })
      })
    }</div>
  }
}

export default Board;