

class Animal {
    constructor(name, hunger, thirst){

      this.name = name;
      this.health = hunger;
      this.thirst = thirst;
    }
  }

class Carnivore extends Animal {
    constructor(){
        super();

    }

}

class Herbivore extends Animal {
    constructor(){
        super();

    }

}

  export default Animal;

