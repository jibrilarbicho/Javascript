let r = 1;
while (r <= 10) {
  console.log(`you are the ${r} man`);
  r++;
}
const Av = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(Av([1, 2, 3]));
console.log("jimma");
