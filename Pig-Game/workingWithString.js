"useStrict";
const PriceGb = "1233587¥";
const priceUS = PriceGb.replace("¥", "$");
console.log(priceUS);
const Announcemment =
  "All passenger mujst come to barding Door 23.Boarding Door 23";
console.log(Announcemment);
console.log(Announcemment.replace("Door", "gate"));
//  the same as the bellow one
console.log(Announcemment.replace(/Door/g, "gate"));
