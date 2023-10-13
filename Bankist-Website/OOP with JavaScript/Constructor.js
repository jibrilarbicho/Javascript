"use  strict";
const Person = function (firstName, birthYear) {
  this.fisrtName = firstName;
  this.birthYear = birthYear;
};
const jemal = new Person("jemal", 1993);
console.log(jemal);
const jems = new Person("jems", 1993);
console.log(jems);
Person.prototype.specis = "Hom Sapiens";

const gi = new Person("ji", 6577);
console.log(gi);
Person.prototype.CalcAge = function () {
  console.log(2004 - this.birthYear);
};
jemal.CalcAge();
console.log(jemal.__proto__);
console.log(jemal.__proto__.__proto__);
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.Speed = function () {
  this.speed += 10;
  console.log(`${this.make} is going at speed of ${this.speed}`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is slowing at speed of ${this.speed}`);
};
const bmw = new Car("BMW", 120);
const merecedes = new Car("Merceds", 95);
bmw.Speed();
bmw.Speed();
bmw.brake();
bmw.Speed();
//ES6 Classes
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  CalcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    console.log(name);

    if (name.includes(" ")) {
      this._fullName = name;
    } else alert(`${name} is not a full Name`);
  }
  get fullName() {
    return this._this.fullName;
  }
  static hey() {
    console.log("hey there 👏");
  }
}
const jessica = new PersonCl("jessica ", 2030);
console.log(jessica);
jessica.CalcAge();
console.log(jessica.age);
//static methods
PersonCl.hey = function () {
  console.log("hey there 👏");
};
PersonCl.hey(); // it is not inherited
// jonas.hey(); jonas object cannot inherit it
//inheritance between classes
PersonCl.hey();
const Ev = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
Ev.prototype = Object.create(Car.prototype);

Ev.prototype.chargeTo = function (charg) {
  this.charge = charg;
};
Ev.prototype.Speed = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at speed of ${this.speed} with a charge of ${this.charge}`
  );
};
const tesla = new Ev("tesla", 120, 23);
tesla.chargeTo(90);
console.log(tesla);
tesla.Speed();
tesla.brake();
class studentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }
}
const martha = new studentCl("martha jonas", 2001, "computer Science");
