"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementDtaes: [
    "2019-11-18T21:31:17.178Z",
    "2023-10-07T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  locale: "en-US",
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementDtaes: [
    "2019-11-18T21:31:17.178Z",
    "2023-10-05T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  locale: "en-US",
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  locale: "en-US",
  movementDtaes: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementDtaes: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  locale: "en-US",
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
const UpdateUI = function (acc) {
  calcPrintBalance(acc);
  displayMovementes(acc);
  calcDisplaySummary(acc);
};
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const calcDate = calcDaysPassed(new Date(), date);
  console.log(calcDate);
  if (calcDate === 0) return "Today";
  if (calcDate === 1) return "Yesterday";
  if (calcDate <= 7) return `${calcDaysPassed} ago`;
  return new Intl.DateTimeFormat(locale).format(date);
};
const displayMovementes = function (acc, sort = false) {
  containerMovements.innerHTML = " ";
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const date = new Date(acc.movementDtaes[i]);
    // const now = new Date();
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = `${date.getFullYear()}`;
    const datee = formatMovementDate(date, acc.locale);
    // const displayDate = `${day}/${month}/${year}`;
    const html = `<div class="movements__row ">
    <div class="movements__type movements__type--${type}">${i + 1}${type}</div>
    <div class="movements__date">${datee}</div>

    <div class="movements__value">${mov.toFixed(2)}€
    </div>
  </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
const EuroUSD = 1.1;
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * EuroUSD);
console.log(movementsUSDfor);
const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((ac, cur) => ac + cur);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);
const movementDescritpion = movements.map(
  (mov, i, arr) =>
    `Movement ${i + 1} You:${mov > 0 ? "deposited" : "withdrawal"} ${Math.abs(
      mov
    )}`
);

console.log(movementDescritpion);
const calcAverage = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  const Adults = humanAges.filter((age) => age >= 18);
  console.log(humanAges);
  console.log(Adults);
  const Average = Adults.reduce(
    (acc, cur, i, arr) => acc + cur / arr.length,
    0
  );
  console.log(Average);
};
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovementes(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
const avg1 = calcAverage([5, 2, 4, 1, 15, 8, 3]);
const totalDeposited = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * EuroUSD)
  .reduce((acc, cur, i, arr) => acc + cur, 0);
console.log(totalDeposited);
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((map) => map > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€
  `;
  const out = acc.movements
    .filter((map) => map < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€
  `;
  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * acc.interestRate) / 100)
    .filter((mov) => mov >= 1)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};
const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);
let currentAccount;

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  const now = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric",
    year: "numeric",
    day: "numeric",
    month: "long",
    weekday: "long",
  };
  labelDate.textContent = new Intl.DateTimeFormat("en-US", options).format(now);
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //optiional chainig
    // console.log("Login");
    labelWelcome.textContent = `welcome ${currentAccount.owner.split(" ")[0]}`;
    containerApp.style.opacity = 1;
    UpdateUI(currentAccount);

    inputLoginPin.value = inputLoginUsername.value = "";
    inputLoginPin.blur(); //to removw blinking of the cursor
  }
});
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const Amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  if (
    Amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= 0 &&
    receiverAccount?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-Amount);
    receiverAccount.movements.push(Amount);
    currentAccount.movementDtaes.push(new Date().toISOString());
    receiverAccount.movementDtaes.push(new Date().toISOString());
    UpdateUI(currentAccount);
  }
  inputTransferAmount.value = inputTransferTo.value = "";
});
btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
    //Hide UI
    containerApp.style.opacity = 0;
  }
});
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Math.floor(Number(inputLoanAmount.value));
  if (amount > 0 && currentAccount.movements.some((mov) => mov * 0.1)) {
    setTimeout(function () {
      currentAccount.movements.push(amount);
      currentAccount.movementDtaes.push(new Date().toISOString());

      UpdateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = "";
});
labelBalance.addEventListener("click", function () {
  [...document.querySelectorAll(".movements__row")].forEach((row, i) => {
    if (i % 2 === 0) {
      row.style.backgroundColor = "orangered";
    }
    if (i % 3 === 0) {
      row.style.backgroundColor = "blue";
    }
  });
});
// const day = `${now.getDate()}`.padStart(2, 0);
// const month = `${now.getMonth() + 1}`.padStart(2, 0);
// const year = `${now.getFullYear()}`;
// const hour = `${now.getHours()}`;
// const minute = `${now.getMinutes()}`;

// labelDate.textContent = `${day}/${month}/${year} ,${hour}:${minute}`;
