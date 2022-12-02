import GameTile from './GameTile.js';
import Animal from './Animal.js';
import Herbivore from './Animal.js';
import Carnivore from './Animal.js';

//this is the main step function that simulates one day for the organisms

function Step (currentState){ //'current state' is an array of 64 GameTile objects, it's 8x8, but its just stored in a 1d array

    let animalList = [];

    for (let i = 0; i < currentState.length; i++) {  
                                                                //this for loop is just an example of how you might go about organizing the step function
        if (currentState[i].currentAnimal != null) {            //it checks if there is an animal in a tile, and if so, adds it to a list

            animalList.push(currentState[i].currentAnimal);
        }
    }


    for (let i = 0; i < currentState.length; i++) {  //this for loop checks if an herbivore is on a space with a plant, and if so removes the plant
        
        if (typeof(currentState[i].currentAnimal) == Herbivore && currentState[i].currentResource.hasPlant) {            

            currentState[i].currentResource.hasPlant = false;
        }
    }

    return currentState; //return a modified version of the current state
}

export default Step;