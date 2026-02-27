'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal
// https://countries-api-836d.onrender.com/countries/

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
// const getCountryInfo = function (country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();
//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);
//         console.log(data.name.common);
//         const html = `<article class="country">
//           <img class="country__img" src="${data?.flags?.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data?.name?.common}</h3>
//             <h4 class="country__region">${data?.region}</h4>
//             <p class="country__row"><span>👫</span>${(data?.population / 1000000).toFixed(1)
//             }</p>
//             <p class="country__row"><span>🗣️</span>${data?.languages?.por}</p>
//             <p class="country__row"><span>💰</span>${data?.currencies?.EUR?.name}</p>
//           </div>
//         </article>`;
//         countriesContainer.insertAdjacentHTML('beforeend', html);
//         countriesContainer.style.opacity = 1;
//     });
// }

const renderCountry = function (data, className = '') {
  // const [data] = JSON.parse(this.responseText);
  console.log(data);
  const currencies = Object.values(data?.currencies)
    .map(curr => curr.name)
    .join(', ');
  // console.log(data.name.common);
  const html = `<article class="country , ${className}">
          <img class="country__img" src="${data?.flags?.png}" />
          <div class="country__data">
            <h3 class="country__name">${data?.name?.common}</h3>
            <h4 class="country__region">${data?.region}</h4>
            <p class="country__row"><span>👫</span>${(
              data?.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${Object.values(data?.languages).join(', ')}</p>
            <p class="country__row"><span>💰</span>${currencies}</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};
const getCountryInfo = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(
      response => response.json(),
      err => console.log(err),
    )
    .then(
      data => {
        renderCountry(data[0]);
        console.log(Object.values(data[0].currencies));
        const neighbour = data[0].borders[0];
        if (!neighbour) return;
        return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
      },
      err => console.error(err),
    )
    .then(
      response => response.json(),
      err => console.error(err),
    )
    .then(
      data => renderCountry(data[0], 'neighbour'),
      err => console.error(err),
    )
    .catch(err => console.error(err))
    .finally(() => (countriesContainer.style.opacity = 1));
};
btn.addEventListener('click', () => {
  getCountryInfo('portugal');
  getCountryInfo('india');
});

//getCountryInfo('germany');
//getCountryInfo('usa');
