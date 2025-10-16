// Remember, we're gonna use strict mode in all scripts now!
"use strict";
const printForecast = function (arr) {
  const forecastArr = [];

  for (let i = 0; i < arr.length; i++) {
    forecastArr.push(`...${arr[i]}\xB0C in ${i + 1} days`);
  }

  console.log('"', forecastArr.join(" "),"...", '"');
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
console.log("\xB0");
console.log(typeof "\xB0");
