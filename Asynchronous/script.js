"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const renderCountry = function (data, className = "") {
  const html = `<article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
              <h3 class="country__name">${data.name.common}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
              ).toFixed(1)} Million people</p>
              <p class="country__row"><span>🗣️</span>${data.languages[0]}</p>
              <p class="country__row"><span>💰</span>${data.currencies[0]}</p>
            </div>
          </article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};
// ///////////////////////////////////////
// const getCountryAndNeighbor = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener("load", function () {
//     if (request.status === 200) {
//       try {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);
//         renderCountry(data);
//         const [neighbours] = data.borders;
//         if (!neighbours) return;
//         const request2 = new XMLHttpRequest();
//         request2.open(
//           "GET",
//           `https://restcountries.com/v3.1/alpha/${neighbours}`
//         );
//         request2.send();
//         request2.addEventListener("load", function () {
//           if (request2.status === 200) {
//             try {
//               const [data2] = JSON.parse(this.responseText);
//               console.log(data2);
//               renderCountry(data2, "neighbour");
//               const [neighbours] = data.borders;
//               if (!neighbours) return;
//             } catch (error) {
//               console.error("Error parsing or rendering country data:", error);
//             }
//           } else {
//             console.error(
//               "Error loading country data. Status:",
//               request.status
//             );
//           }
//         });
//       } catch (error) {
//         console.error("Error parsing or rendering country data:", error);
//       }
//     } else {
//       console.error("Error loading country data. Status:", request.status);
//     }
//   });
// };

// getCountryAndNeighbor("usa");
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       return response.json(); //this one is also a promise
//     })
//     .then(function (data) {
//       renderCountry(data[0]);
//     });
// };
// getCountryData("usa");
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => renderCountry(data[0]));
};
getCountryData("usa");
