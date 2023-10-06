const secureBooking = function () {
  let passsnegerCount = 0;
  return function () {
    passsnegerCount++;
    console.log(`${passsnegerCount} Pasengers`);
  };
};
const Booker = secureBooking();
Booker();
Booker();
Booker();
