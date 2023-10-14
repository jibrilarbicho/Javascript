"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
const getCountry = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener("load", function () {
    if (request.status === 200) {
      try {
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        const html = `<article class="country">
          <img class="country__img" src="${data.flags[0]}" />
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
      } catch (error) {
        console.error("Error parsing or rendering country data:", error);
      }
    } else {
      console.error("Error loading country data. Status:", request.status);
    }
  });
};

getCountry("portugal");
getCountry("usa");
