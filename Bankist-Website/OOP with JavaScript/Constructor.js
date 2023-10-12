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
