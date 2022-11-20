document.addEventListener("DOMContentLoaded", function () {
  // data source
  const source =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
  const cities = [];

  // ajax fetch request
  // a) fetch the source
  // b) promise the blob as .json
  // c) push data from blob to cities array with spread syntax
  fetch(source)
    .then((blob) => blob.json())
    .then((data) => cities.push(...data));

  // find matches function based on user input
  function findMatches(wordToMatch, cities) {
    return cities.filter((place) => {
      // filter out by city or state using regular expressions
      const regex = new RegExp(wordToMatch, "gi"); // g = global | i = insensitive
      return regex.test(place.city) || regex.test(place.state);
      // return place.city.match(regex) || place.state.match(regex);
    });
  }

  // replace numbers with appropriate commas
  function numberWithCommas(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // display matches mapped to <ul> creating <li> for each result
  function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const count = document.getElementById("count");

    const results = document.querySelector(".results");
    const html = matchArray
      .map((place) => {
        // replace searched value with span of same value that is highlighted
        const regex = new RegExp(this.value, "gi"); // g = global | i = insensitive
        const cityName = place.city.replace(
          regex,
          `<span class="highlight">${this.value}</span>`
        );
        const stateName = place.state.replace(
          regex,
          `<span class="highlight">${this.value}</span>`
        );
        if (this.value) {
          return `
                <li>
                    <span class="name">${cityName}, ${stateName}</span>
                    <span class="population">${numberWithCommas(
                      place.population
                    )}</span>
                </li>
            `;
        }
      })
      .join(""); // .join("") will turn the array into one big string instead of an array of items
    results.innerHTML = html;
    count.innerHTML =
      this.value.length > 0 ? matchArray.length || "No Results" : "-------";
  }

  // perform action based on 'keyup' event
  const searchInput = document.querySelector(".search");
  searchInput.addEventListener("keyup", displayMatches);
});
