
//animal sets its attributes to given values
class Animal {
    constructor(name, hunger, thirst){

      this.name = name;
      this.health = hunger;
      this.thirst = thirst;
    }
  }

  //Carnivore and herbivore currently just have a super constructor
  //they both give a warning that they are unused, but they actually are
class Carnivore extends Animal {
    constructor(){
        super();

    }

}

class Herbivore extends Animal {
    constructor(){
        super();

    }

} //making a change here to test the CI pipeline

  export default Animal;

