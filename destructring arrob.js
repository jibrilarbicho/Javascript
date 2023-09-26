const arr = ["jimmma ", "Shashemene", "Adama", "Sheger", "Gobba"];
const [c1, c2, ...co] = arr;
console.log(c1, c2, co);
const grocersylst = [
  { item: "milk", price: 23, category: "fruits" },
  { item: "tomato", price: 4, category: "veg" },
];
const [, { price }] = grocersylst;
console.log(price);
const ar = [1, 2, 3, 4, 5].map((qe) => qe * 2);

console.log(ar);
const er = [1, -23, 4, 5, 6, -1, 0];
//array filter method
const vf = er.filter((num) => num > 0);
console.log(vf);
//array reduce method
const sum = vf.reduce((acu, cure) => acu + cure);
console.log(sum);
