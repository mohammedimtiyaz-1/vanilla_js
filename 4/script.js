document.addEventListener("DOMContentLoaded", function () {
  const inventors = [
    { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
    { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 },
    { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
    { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
    { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
    { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
    { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
  ];
  // console.table(inventors);

  // FILTER the list of inventors for those who were born in the 1500's
  const filterData = inventors.filter(
    (inventor) => inventor.year >= 1500 && inventor.year < 1600
  );
  const filterDIV = document.getElementById("filter");
  const filterTable = document.createElement("TABLE");
  const filterTRhead = document.createElement("TR");
  const filterTH1 = document.createElement("TH");
  filterTH1.innerHTML = "First";
  filterTRhead.appendChild(filterTH1);
  const filterTH2 = document.createElement("TH");
  filterTH2.innerHTML = "Last";
  filterTRhead.appendChild(filterTH2);
  const filterTH3 = document.createElement("TH");
  filterTH3.innerHTML = "Birth";
  filterTRhead.appendChild(filterTH3);
  const filterTH4 = document.createElement("TH");
  filterTH4.innerHTML = "Death";
  filterTRhead.appendChild(filterTH4);
  filterTable.appendChild(filterTRhead);
  filterDIV.appendChild(filterTable);

  const selectEle = document.createElement("select");
  selectEle.setAttribute("name", "age");
  selectEle.innerHTML = "Select Year";
  //.setAttribute("id", "ages");
  const inventorAgeGroup = new Set(
    inventors.map((ele) => Math.ceil(ele.year / 100)).sort()
  );

  // console.log("iage grup", inventorAgeGroup);
  // inventorAgeGroup.forEach((ag, i) => {
  //   const optionsFIlter = document.createElement("option");
  //   optionsFIlter.setAttribute("value", ag);
  //   optionsFIlter.setAttribute("id", ag + "-" + i);
  //   optionsFIlter.setAttribute("value", ag);
  //   optionsFIlter.innerHTML = "--" + ag + "--";
  //   selectEle.appendChild(optionsFIlter);
  // });
  ss(inventorAgeGroup);

  function ss(inventorAgeGroup) {
    inventorAgeGroup.forEach((ag, i) => {
      const optionsFIlter = document.createElement("option");
      optionsFIlter.setAttribute("value", ag);
      optionsFIlter.setAttribute("id", ag + "-" + i);
      optionsFIlter.setAttribute("value", ag);
      optionsFIlter.innerHTML = "--" + ag + "--";
      selectEle.appendChild(optionsFIlter);
    });
  }
  const dropdownEle = document.createElement("div");
  const labelForDrop = document.createElement("label");
  labelForDrop.innerHTML = "YEAR";
  dropdownEle.appendChild(selectEle);
  dropdownEle.insertBefore(labelForDrop, selectEle);
  // const optionsFIlter = document.crea
  filterDIV.appendChild(dropdownEle);
  filterData.forEach((info) => {
    const filterTRbody = document.createElement("TR");
    const filterTD1 = document.createElement("TD");
    filterTD1.innerHTML = info.first;
    filterTRbody.appendChild(filterTD1);
    const filterTD2 = document.createElement("TD");
    filterTD2.innerHTML = info.last;
    filterTRbody.appendChild(filterTD2);
    const filterTD3 = document.createElement("TD");
    filterTD3.innerHTML = info.year;
    filterTRbody.appendChild(filterTD3);
    const filterTD4 = document.createElement("TD");
    filterTD4.innerHTML = info.passed;
    filterTRbody.appendChild(filterTD4);
    filterTable.appendChild(filterTRbody);
  });

  selectEle.addEventListener("input", function (e) {
    console.log("changed", e.target.value, e.target);
  });
  // MAP an array of the inventors' first and last names
  const mapData = inventors.map(
    (inventor) => `${inventor.first} ${inventor.last}`
  );
  const mapDIV = document.getElementById("map");
  const mapUL = document.createElement("UL");
  mapData.forEach((name) => {
    const mapLI = document.createElement("LI");
    mapLI.innerHTML = name;
    mapUL.appendChild(mapLI);
  });
  mapDIV.appendChild(mapUL);

  // SORT the inventors by birth date, oldest to youngest
  const sortData = inventors.sort((personOne, personTwo) =>
    personOne.year > personTwo.year ? 1 : -1
  );
  const sortDIV = document.getElementById("sort");
  const sortTable = document.createElement("TABLE");
  const sortTRhead = document.createElement("TR");
  const sortTH1 = document.createElement("TH");
  sortTH1.innerHTML = "First";
  sortTRhead.appendChild(sortTH1);
  const sortTH2 = document.createElement("TH");
  sortTH2.innerHTML = "Last";
  sortTRhead.appendChild(sortTH2);
  const sortTH3 = document.createElement("TH");
  sortTH3.innerHTML = "Birth";
  sortTRhead.appendChild(sortTH3);
  const sortTH4 = document.createElement("TH");
  sortTH4.innerHTML = "Death";
  sortTRhead.appendChild(sortTH4);
  sortTable.appendChild(sortTRhead);
  sortDIV.appendChild(sortTable);
  sortData.forEach((info) => {
    const sortTRbody = document.createElement("TR");
    const sortTD1 = document.createElement("TD");
    sortTD1.innerHTML = info.first;
    sortTRbody.appendChild(sortTD1);
    const sortTD2 = document.createElement("TD");
    sortTD2.innerHTML = info.last;
    sortTRbody.appendChild(sortTD2);
    const sortTD3 = document.createElement("TD");
    sortTD3.innerHTML = info.year;
    sortTRbody.appendChild(sortTD3);
    const sortTD4 = document.createElement("TD");
    sortTD4.innerHTML = info.passed;
    sortTRbody.appendChild(sortTD4);
    sortTable.appendChild(sortTRbody);
  });

  // REDUCE how many years did all of the inventors live?
  const reduceData = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
  }, 0);
  const span = document.createElement("SPAN");
  span.classList.add("number");
  const reduceDIV = document.getElementById("reduce");
  span.innerHTML = reduceData + " years";
  reduceDIV.appendChild(span);

  // SORT the inventors by years lived
  const sortOldest = inventors.sort((personOne, personTwo) => {
    const personA = personOne.passed - personOne.year;
    const personB = personTwo.passed - personTwo.year;
    return personA > personB ? -1 : 1;
  });
  const sortOldestDIV = document.getElementById("sortOldest");
  const sortOldestTable = document.createElement("TABLE");
  const sortOldestTRhead = document.createElement("TR");
  const sortOldestTH1 = document.createElement("TH");
  sortOldestTH1.innerHTML = "First";
  sortOldestTRhead.appendChild(sortOldestTH1);
  const sortOldestTH2 = document.createElement("TH");
  sortOldestTH2.innerHTML = "Last";
  sortOldestTRhead.appendChild(sortOldestTH2);
  const sortOldestTH3 = document.createElement("TH");
  sortOldestTH3.innerHTML = "Birth";
  sortOldestTRhead.appendChild(sortOldestTH3);
  const sortOldestTH4 = document.createElement("TH");
  sortOldestTH4.innerHTML = "Death";
  sortOldestTRhead.appendChild(sortOldestTH4);
  const sortOldestTH5 = document.createElement("TH");
  sortOldestTH5.innerHTML = "Age";
  sortOldestTRhead.appendChild(sortOldestTH5);
  sortOldestTable.appendChild(sortOldestTRhead);
  sortOldestDIV.appendChild(sortOldestTable);
  sortOldest.forEach((info) => {
    const sortOldestTRbody = document.createElement("TR");
    const sortOldestTD1 = document.createElement("TD");
    sortOldestTD1.innerHTML = info.first;
    sortOldestTRbody.appendChild(sortOldestTD1);
    const sortOldestTD2 = document.createElement("TD");
    sortOldestTD2.innerHTML = info.last;
    sortOldestTRbody.appendChild(sortOldestTD2);
    const sortOldestTD3 = document.createElement("TD");
    sortOldestTD3.innerHTML = info.year;
    sortOldestTRbody.appendChild(sortOldestTD3);
    const sortOldestTD4 = document.createElement("TD");
    sortOldestTD4.innerHTML = info.passed;
    sortOldestTRbody.appendChild(sortOldestTD4);
    const sortOldestTD5 = document.createElement("TD");
    sortOldestTD5.innerHTML = info.passed - info.year;
    sortOldestTRbody.appendChild(sortOldestTD5);
    sortOldestTable.appendChild(sortOldestTRbody);
  });

  // MAP + FILTER create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // only practice in DevTools on the following website:
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
  // const category = document.querySelector(".mw-category");
  // const links = Array.from(category.querySelectorAll("a")); // VERSION 1: create an array
  // const links = [...category.querySelectorAll("a")]; // VERSION 2: create an array using the spread syntax
  // const de = links.map(link => link.textContent).filter(streetName => streetName.includes("de"));

  const people = [
    "Beck, Glenn",
    "Becker, Carl",
    "Beckett, Samuel",
    "Beddoes, Mick",
    "Beecher, Henry",
    "Beethoven, Ludwig",
    "Begin, Menachem",
    "Belloc, Hilaire",
    "Bellow, Saul",
    "Benchley, Robert",
    "Benenson, Peter",
    "Ben-Gurion, David",
    "Benjamin, Walter",
    "Benn, Tony",
    "Bennington, Chester",
    "Benson, Leana",
    "Bent, Silas",
    "Bentsen, Lloyd",
    "Berger, Ric",
    "Bergman, Ingmar",
    "Berio, Luciano",
    "Berle, Milton",
    "Berlin, Irving",
    "Berne, Eric",
    "Bernhard, Sandra",
    "Berra, Yogi",
    "Berry, Halle",
    "Berry, Wendell",
    "Bethea, Erin",
    "Bevan, Aneurin",
    "Bevel, Ken",
    "Biden, Joseph",
    "Bierce, Ambrose",
    "Biko, Steve",
    "Billings, Josh",
    "Biondo, Frank",
    "Birrell, Augustine",
    "Black, Elk",
    "Blair, Robert",
    "Blair, Tony",
    "Blake, William",
  ];
  // console.table(people);

  // SORT the people alphabetically by last name
  const sortAlpha = people.sort((personOne, personTwo) => {
    const [personOneLast, personOneFirst] = personOne.split(", "); // destructuring variables
    const [personTwoLast, personTwoFirst] = personTwo.split(", "); // destructuring variables
    return personOneLast > personTwoLast ? 1 : -1; // sorts alphabetically
    // return personOneLast > personTwoLast ? -1 : 1; // sorts alphabetically reversed
  });
  const sortAlphaDIV = document.getElementById("sortAlpha");
  const sortAlphaUL = document.createElement("UL");
  sortAlpha.forEach((name) => {
    const sortAlphaLI = document.createElement("LI");
    sortAlphaLI.innerHTML = name;
    sortAlphaUL.appendChild(sortAlphaLI);
  });
  sortAlphaDIV.appendChild(sortAlphaUL);

  // REDUCE and sum up the instances of each of the items in this array
  const transportation = [
    "car",
    "car",
    "truck",
    "truck",
    "bike",
    "walk",
    "car",
    "van",
    "bike",
    "walk",
    "car",
    "van",
    "car",
    "truck",
  ];
  const transport = transportation.reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, {});
  const reduceSumDIV = document.getElementById("reduceSum");
  const reduceSumTable = document.createElement("TABLE");
  const reduceSumTRhead = document.createElement("TR");
  const reduceSumTH1 = document.createElement("TH");
  reduceSumTH1.innerHTML = "Transport";
  reduceSumTRhead.appendChild(reduceSumTH1);
  const reduceSumTH2 = document.createElement("TH");
  reduceSumTH2.innerHTML = "Count";
  reduceSumTRhead.appendChild(reduceSumTH2);
  reduceSumTable.appendChild(reduceSumTRhead);
  reduceSumDIV.appendChild(reduceSumTable);
  Object.keys(transport).forEach((mode) => {
    const reduceSumTRbody = document.createElement("TR");
    const reduceSumTD1 = document.createElement("TD");
    reduceSumTD1.innerHTML = mode;
    reduceSumTRbody.appendChild(reduceSumTD1);
    const reduceSumTD2 = document.createElement("TD");
    reduceSumTD2.innerHTML = transport[mode];
    reduceSumTRbody.appendChild(reduceSumTD2);
    reduceSumTable.appendChild(reduceSumTRbody);
  });
});
