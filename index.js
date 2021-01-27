/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };
  
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */
  
 function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }
 
 Person.prototype.eat = function(edible){
   if(this.stomach.length < 10){
     this.stomach.push(edible);
   }
 }

 Person.prototype.poop = function(){
   this.stomach = [];
 }

 Person.prototype.toString = function(){
   return `${this.name}, ${this.age}`;
 }
 
//  const lambdaStudentOne = new Person('Sergio', 32);
//  const lambdaStudentTwo = new Person('Jonathan', 32);
//  const lambdaStudentThree = new Person('Jordan', 32);

//  console.log(lambdaStudentOne.toString());
//  console.log(lambdaStudentTwo.toString());
//  console.log(lambdaStudentThree.toString());

//  lambdaStudentThree.eat('fish');
//  lambdaStudentThree.eat('potato');
//  lambdaStudentThree.eat('lemon');

//  console.log(lambdaStudentThree.stomach);

//  lambdaStudentThree.poop();
 
//  console.log(lambdaStudentThree.stomach);

  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */
  
 function Car(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
  }

 Car.prototype.fill = function(gallons){
   this.tank = this.tank + gallons;
 }

//  const car1 = new Car('Toyota', 30);

//  car1.fill(15);
//  car1.fill(7);

//  console.log(car1.tank);
  
  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
 function Baby(name, age, favoriteToy) {
   Person.call(this, name, age);
   this.favoriteToy = favoriteToy;
  }

 Baby.prototype = Object.create(Person.prototype);

 Baby.prototype.play = function(){
   return `Playing with ${this.favoriteToy}`;
 }

//  const baby1 = new Baby('Jonas', 1, 'trains');

//  console.log(baby1.toString());

//  baby1.eat('peas');
//  baby1.eat('carrots');

//  console.log(baby1.stomach);

//  baby1.poop();

//  console.log(baby1.stomach);

  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. In window binding, the 'this' keyword refers to the topmost layer, or the global binding. Window binding doesn't have much practical use for coding purposes, to my knowledge.
    2. In implicit binding, the 'this' keyword is used in the calling of a function, and it refers to what is left of the dot. Implicit binding is the most common usage of 'this'.
    3. In explicit binding, the 'this' keyword is used in the context of a 'call' or 'apply' method, and it refers directly to what you stipulate when you run said method.
    4. In new binding, the 'this' keyword is used in a constructor function, and it refers to the instanced object that is to be created by said constructor function.
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}