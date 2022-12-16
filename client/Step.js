import GameTile from './GameTile.js';
import Animal from './Animal.js';
import Herbivore from './Animal.js';
import Carnivore from './Animal.js';

//this is the main step function that simulates one day for the organisms

function Step(currentState) { //'current state' is an array of 64 GameTile objects, it's 8x8, but its just stored in a 1d array


    for (let i = 0; i < currentState.length; i++) {  //this for loop checks if an herbivore is on a space with a plant, and if so removes the plant

        if (typeof (currentState[i].currentAnimal) == Herbivore && currentState[i].currentResource.hasPlant) {

            eatPlant(currentState[i]);
        }
    }


    for (let i = 0; i < currentState.length; i++) {  //this for loop checks if an animal is on water, and if so, drinks it

        if (currentState[i].currentResource.hasWater) {

            drinkWater(currentState[i]);
        }
    }


    let consumer = currentState[Math.floor(64*Math.random())];
    let target = Math.floor(64*Math.random())
    let consumed = currentState[target];

    currentState[target] = eatAnimal(consumer, consumed);

    return currentState; //return a modified version of the current state
}

function eatPlant(tileref) {//

    let food = 10 - tileref.currentAnimal.health;

    tileref.currentResource.hasPlant = false;

    if (food > 10) {

        return 10;

    } else {

        return food;
    }
}


function drinkWater(tileref) {

    let drink = 4;

    tileref.currentResource.hasWater = false;

    if (drink + tileref.currentAnimal.thirst > 10) {

        return 10 - tileref.currentAnimal.thirst

    } else {

        return drink;
    }
}


function eatAnimal(consumer, consumed) {

    if (consumer != null) {

        consumer.health += consumed.health;

        if (consumer.health < 10) {

            consumer.health = 10;
        }

        consumed = null;

        return consumer;

    } else {

        return consumed;
    }
}


function expectedValue(actual, expected){

    console.log("expected a value of: " + expected + " actual value was: " + actual);
}


function equalityCheck(obj1, obj2, expected){

    if (obj1 === obj2){

        if (expected){

        console.log("expected to be true and was");

        }else{
    
            console.log("expected to be false and wasn't");
        }
    }else{

        if (expected){

            console.log("expected to be true and wasn't");
        
        }else{
    
        console.log("expected to be false and was");
        }
    }

}


function tests(){

    let test1 = new GameTile(true, true, true);

    console.log("plant eating tests"); //these tests go over the plant eating function
    expectedValue(eatPlant(test1), 5);
    test1.currentAnimal.health = 7;
    expectedValue(eatPlant(test1), 3);
    expectedValue(eatPlant(test1), 3);
    expectedValue(test1.currentResource.hasPlant, false);

    test1.hasPlant = true;
    test1.currentAnimal.health = 0;
    expectedValue(eatPlant(test1), 10);

    test1 = new GameTile(true, true, true);//reset tile

    console.log("water drinking tests"); //these tests go over the water drinking function
    expectedValue(drinkWater(test1), 4);
    test1.currentAnimal.thirst = 9;
    expectedValue(drinkWater(test1), 1);
    test1.currentAnimal.thirst = 1;
    expectedValue(drinkWater(test1), 4);
    expectedValue(test1.currentResource.hasWater, false);

    test1.hasWater = true;
    test1.currentAnimal.thirst = 10;
    expectedValue(drinkWater(test1), 0);

    test1 = new GameTile(true, true, true);//reset tile
    let test2 = new GameTile(true, true, false);

    console.log("hunting tests");   //these tests go over the hunting function
    equalityCheck(test1, test2, false);
    test2 = eatAnimal(test1, test2);
    equalityCheck(test1, test2, true);

    test2 = new GameTile(false, true, false);

    equalityCheck(test1, test2, false);
    test1 = eatAnimal(test1, test2);
    equalityCheck(test1, test2, false);
    equalityCheck(test2, null, false);

}

export default tests;