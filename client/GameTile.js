import Resource from './Resource.js';
import Animal from './Animal.js';
import Carnivore from './Animal.js';
import Herbivore from './Animal.js';


class GameTile {    // this constructor randomly sets default values for the resource and animal
    constructor(hasPlant, hasWater, isCarnivore){

        this.currentResource = new Resource(hasPlant, hasWater);
        
        if (isCarnivore){

            this.currentAnimal = new Carnivore("C", 5, 5);
        }else{

            this.currentAnimal = new Herbivore("H", 5, 5);
        }

        if (Math.random() < 0.5){

            this.currentAnimal.name = " ";
        }
    }

}

export default GameTile;