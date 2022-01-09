/* GLOBAL CONSTANTS */
const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

/* DOM ELEMENTS */
const searchInput = document.getElementById("search-text");
const suggestionsList = document.getElementById("suggestions-list");

/* FUNCTIONS */
const enableSearchInput = function () {
  searchInput.disabled = false;
};

const numberWithCommas = function (num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const fetchCities = async function () {
  const blob = await fetch(endpoint);
  const data = await blob.json();

  cities.push(...data);
  enableSearchInput();
};

const findMatches = function (wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
};

const displayMatches = function () {
  if (this.value) {
    const matchedDataArr = findMatches(this.value, cities);

    const listNodes = matchedDataArr
      .map((place) => {
        const regex = new RegExp(this.value, "gi");
        const cityName = place.city.replace(
          regex,
          `<span class="hl">${this.value}</span>`
        );
        const stateName = place.state.replace(
          regex,
          `<span class="hl">${this.value}</span>`
        );

        return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${numberWithCommas(place.population)}</span>
        </li>
      `;
      })
      .join("");

    suggestionsList.innerHTML = listNodes;
  }
};

/* EVENT LISTENERS */
window.onload = fetchCities;

searchInput.addEventListener("keyup", displayMatches);
