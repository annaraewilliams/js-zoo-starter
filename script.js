//starter code
var animalPopulation = 0

class Animal{
  constructor(name,favoriteFood){
    this.name = name
    this.favoriteFood=favoriteFood
    animalPopulation++;
  }
  sleep() {
    console.log(this.name + " sleeps for 8 hours")
  }
  eat(food) {
      console.log(this.name + " eats " + food);
    if (food == this.favoriteFood) {
      console.log("YUM!!! " + this.name + " wants more " + this.favoriteFood)
    }
    else {
      this.sleep();
    }
    }
    static getPopulation(){ 
      console.log(animalPopulation); 
      return animalPopulation
    }
}

class Tiger extends Animal{
  constructor(name) {
    super(name,"meat")
    this.name = name
    this.favoriteFood = "meat"
  }
}

class Bear extends Animal{
  constructor(name){
    super(name,"fish")
    this.name=name
    this.favoriteFood = "fish"
  }
  sleep(){
    console.log(this.name+" hibernates for 4 months")
  }
}

class Unicorns extends Animal{
  constructor(name){
    super(name, "marshmellows")
    this.name=name
    this.favoriteFood = "marshmellows"
  }
  sleep(){
    console.log(this.name+" sleeps in a cloud")
  }
  eat(food) {
      console.log(this.name + " eats " + food);
    if (food == this.favoriteFood) {
      console.log("YUM!!! " + this.name + " wants more " + this.favoriteFood)
      this.sleep();
    }
    }
}

class Giraffes extends Animal{
  constructor(name){
    super(name,"leaves")
  }
   eat(food) {
      console.log(this.name + " eats " + food);
    if (food == this.favoriteFood) {
      console.log("YUM!!! " + this.name + " wants more " + this.favoriteFood)
      this.sleep();
    }
    else {
      console.log("YUCK!!! " +this.name +" will not eat " +food)
    }
    }
}

class Bees extends Animal{
  constructor(name){
  super(name,"pollen")
  }
  sleep(){
    console.log(this.name+" never sleeps")
  }
   eat(food) {
      console.log(this.name + " eats " + food);
    if (food == this.favoriteFood) {
      console.log("YUM!!! " + this.name + " wants more " + this.favoriteFood)
      this.sleep();
    }
    else {
      console.log("YUCK!!! " +this.name +" will not eat " +food)
    }
    }
}

class Zookeeper{
  constructor(string){
    this.name=string
  }
  feedAnimals(animals,food){
    console.log(this.name + " is feeding " + food +" to " +animals.length +" of "+ Animal.getPopulation() + " animals")
    for (let i=0;i<animals.length;i++){
      animals[i].eat(food)
    }
  }
}
//"<name> is feeding <food> to <number of animals feeding> of <population> total animals".

 

function run() {
  let tigger = new Tiger("Tigger");
  tigger.eat("meat");
  tigger.eat("kibble");
  let pooh= new Bear ("Pooh");
  pooh.eat("fish");
  pooh.eat("meat");
  let rarity = new Unicorns ("Rarity");
  rarity.eat("marshmellows");
  let gemma = new Giraffes("Gemma");
  gemma.eat("meat");
  gemma.eat("leaves");
  let stringer = new Bees("Stinger");
  stringer.eat("ice cream")
  stringer.eat("pollen")
  let animals = [tigger,pooh,rarity,gemma,stringer]
  let zoebot = new Zookeeper("Zoebot")
  zoebot.feedAnimals(animals,"pizza")
  Animal.getPopulation();
}