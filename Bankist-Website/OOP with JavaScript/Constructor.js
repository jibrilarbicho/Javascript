"use  strict";
const person = function (firstName, birthYear) {
  this.fisrtName = firstName;
  this.birthYear = birthYear;
};
const jemal = new person("jemal", 1993);
console.log(jemal);
const jems = new person("jems", 1993);
console.log(jems);
person.prototype.specis = "Hom Sapiens";

const gi = new person("ji", 6577);
console.log(gi);
person.prototype.CalcAge = function () {
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
}
const jessica = new PersonCl("jessica ", 2030);
console.log(jessica);
jessica.CalcAge();
console.log(jessica.age);
