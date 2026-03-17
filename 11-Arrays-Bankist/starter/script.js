'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDate: [
    '2025-11-08T06:15:00Z',
    '2025-11-09T07:45:00Z',
    '2025-10-22T08:30:00Z',
    '2025-10-22T09:10:00Z',
    '2025-10-22T10:00:00Z',
    '2025-10-22T08:30:00Z',
    '2025-10-22T09:10:00Z',
    '2025-10-22T10:00:00Z',
  ],
  locale: 'hi-IN',
  currency: 'INR',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDate: [
    '2025-10-22T16:00:00Z',
    '2025-10-22T17:30:00Z',
    '2025-10-22T18:45:00Z',
    '2025-10-22T19:10:00Z',
    '2025-10-22T20:30:00Z',
    '2025-10-22T18:45:00Z',
    '2025-10-22T19:10:00Z',
    '2025-10-22T20:30:00Z',
  ],
  locale: 'en-US',
  currency: 'USD',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDate: [
    '2025-10-19T08:00:00Z',
    '2025-10-20T12:15:00Z',
    '2025-10-21T14:45:00Z',
    '2025-10-22T09:30:00Z',
    '2025-10-23T18:00:00Z',
    '2025-10-21T14:45:00Z',
    '2025-10-22T09:30:00Z',
    '2025-10-23T18:00:00Z',
  ],
  locale: 'en-GB',
  currency: 'EUR',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDate: [
    '2025-06-10T07:00:00Z',
    '2025-07-15T11:30:00Z',
    '2025-08-20T15:45:00Z',
    '2025-09-25T09:20:00Z',
    '2025-10-22T18:10:00Z',
  ],
  locale: 'fr-FR',
  currency: 'EUR',
};

const accounts = [account1, account2, account3, account4];
const createUserName = function (accounts) {
  accounts.forEach(
    account =>
      (account.userName = account.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join(''))
  );
  console.log(accounts);
};
createUserName(accounts);

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
console.log(currencies);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

currencies.forEach(function (currency, key) {
  console.log(`${currency} - ${key}`);
});

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  const juliaArray = dogsJulia.slice(1, -2);
  const katesArray = dogsKate.slice();
  console.log("----------Julia's Dogs-----------");
  juliaArray.forEach(function (dog, index) {
    if (dog < 3) {
      console.log(`Dog number ${index + 1} is still a puppy 🐶`);
    } else {
      console.log(
        `Dog number ${index + 1} is an adult and is ${dog} years old`
      );
    }
  });

  console.log(`----------Kates Dogs-----------`);
  katesArray.forEach(function (dog, index) {
    if (dog < 3) {
      console.log(`Dog number ${index + 1} is still a puppy`);
    } else {
      console.log(
        `Dog number ${index + 1} ia an adult and is ${dog} years old`
      );
    }
  });
};

checkDogs(dogsJulia, dogsKate);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

const calcAverageHumanAge = function (dogs) {
  // console.log(dogs);
  // const dogsAgeInHumanYears = dogs.map(dog =>
  //   dog <= 2 ? 2 * dog : 16 + dog * 4
  // );
  // console.log(dogsAgeInHumanYears);
  // const dogsAboveEighteen = dogsAgeInHumanYears.filter(dog => dog >= 18);
  // const sumOfAllAboveEighteen = dogsAboveEighteen.reduce(
  //   (acc, dog) => acc + dog,
  //   0
  // );
  // return sumOfAllAboveEighteen / dogsAboveEighteen.length;

  const averageDogHumanAge = dogs
    .map(dog => (dog <= 2 ? 2 * dog : 16 + dog * 4))
    .filter(dog => dog >= 18)
    .reduce((acc, dog, i, arr) => acc + dog / arr.length, 0);
  return averageDogHumanAge;
};
const averageHumanAge = calcAverageHumanAge(dogsJulia);
console.log(averageHumanAge);

let currentAccount;
const currentDate = new Date();
const date = `${currentDate.getDate()}`.padStart(2, 0);
const month = `${currentDate.getMonth() + 1}`.padStart(2, 0);
const year = currentDate.getFullYear();
const hours = `${currentDate.getHours()}`.padStart(2, 0);
const minutes = `${currentDate.getMinutes()}`.padStart(2, 0);
const seconds = `${currentDate.getSeconds()}`.padStart(2, 0);

const displayTransactions = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const options = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  };

  const combinedMovements = acc.movements.map((mov, i) => ({
    transaction: mov,
    transactionDate: acc.movementsDate[i],
  }));
  console.log(combinedMovements);
  const movs =
    sort === true
      ? combinedMovements.sort((a, b) => a.transaction - b.transaction)
      : combinedMovements;
  console.log(movs);
  movs.forEach(function (movement, index) {
    const type = movement.transaction > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(movement.transactionDate);
    console.log(date, currentDate);
    const optionsCurrency = {
      style: 'currency',
      currency: acc.currency,
    };
    const formattedMovement = new Intl.NumberFormat(acc.locale, optionsCurrency).format(
      movement.transaction
    );
    const days = Math.round(
      Math.abs(date - currentDate) / (1000 * 60 * 60 * 24)
    );
    console.log(days);
    let transactionDate;
    if (days === 0) transactionDate = 'today';
    else if (days === 1) transactionDate = 'yesterday';
    else if (days > 1 && days <= 7) transactionDate = `${days} days ago`;
    else
      transactionDate = new Intl.DateTimeFormat(acc.locale, options).format(
        date
      );
    console.log(transactionDate);
    // const transDate = `${date.getDate()}`.padStart(2, 0);
    // const transMonth = `${date.getMonth()+1}`.padStart(2, 0);
    // const transYear = `${date.getFullYear()}`.padStart(2, 0);
    // const transactionDate = `${transDate}/${transMonth}/${transYear}`;
    const transaction = ` <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
     <div class="movements__date">${transactionDate}</div>
          <div class="movements__value">${formattedMovement}</div>
           
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', transaction);
  });
};

const movementsUSD = movements.map(mov => (mov * 1.1).toFixed(2));
console.log(movementsUSD);
const deposits = movements.filter(mov => mov > 0);
const withdrawals = movements.filter(mov => mov < 0);
console.log(deposits);
console.log(withdrawals);

const displayBalance = function (acc) {
  const options = {
    style: 'currency',
    currency: acc.currency,
  };
  acc.currentBalance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  console.log(acc.currentBalance);
  labelBalance.textContent = new Intl.NumberFormat(acc.locale,options).format(acc.currentBalance);
};

const text = 'I am learning javascript';
const textArray = text.split(' ');
console.log(textArray);
console.log(textArray.map(text => text.split('').reverse().join('')).join(' '));

const calcDisplayIn = function (acc) {
  const options = {
    style: 'currency',
    currency: acc.currency,
  };
  const deposits = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  const withdrawals = Math.abs(movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0));
  const interest = movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .filter(mov => mov >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = new Intl.NumberFormat(acc.locale,options).format(deposits);
  labelSumOut.textContent = new Intl.NumberFormat(acc.locale,options).format(withdrawals);
  labelSumInterest.textContent = new Intl.NumberFormat(acc.locale,options).format(interest);
};
let timer;
const startLogOutTimer = function () {

  if (timer) clearInterval(timer);
   let time = 300;

    timer = setInterval(function () {
     const min = String(Math.trunc(time / 60)).padStart(2, 0);
     const sec = String(Math.trunc(time % 60)).padStart(2, 0);
     labelTimer.textContent = `${min}:${sec}`;

     if (time === 0) {
       clearInterval(timer);
       containerApp.style.opacity = 0;
       labelWelcome.textContent = 'Login to get started';
     }
     time--;
   }, 1000);
}

btnLogin.addEventListener('click', function (event) {
  event.preventDefault();
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  const locale = currentAccount.locale;
  console.log(locale);
  const options = {
    day: 'numeric',
    date: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    weekday: 'long',
  };

  console.log(currentAccount);

  if (currentAccount && Number(inputLoginPin.value) === currentAccount?.pin) {
    labelWelcome.textContent = `Welcome ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 1;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    // labelDate.textContent = `${date}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
    labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(
      currentDate
    );
    displayTransactions(currentAccount);
    calcDisplayIn(currentAccount);
    displayBalance(currentAccount);
    
      startLogOutTimer();
  
  } else alert('User does not exist !');
});

// Transfer Amount

btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();
  
   startLogOutTimer();
  const transferToAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );
  const transferAmount = Number(inputTransferAmount.value);
  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();
  console.log(transferAmount);
  if (
    transferAmount > 0 &&
    transferToAcc &&
    transferAmount <= currentAccount.currentBalance &&
    transferToAcc.userName !== currentAccount.userName
  ) {
    currentAccount.movements.push(Number(`-${transferAmount}`));
    currentAccount.movementsDate.push(currentDate.toISOString());
    transferToAcc.movements.push(transferAmount);
    transferToAcc.movementsDate.push(currentDate.toISOString());
    console.log(currentAccount.movements);
    console.log(transferToAcc.movements);
    displayTransactions(currentAccount);
    calcDisplayIn(currentAccount);
    displayBalance(currentAccount);
  }
});

// Close Account

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
   startLogOutTimer();
  const accToBeClosedUserName = inputCloseUsername.value;
  const pinOfAccToBeClosed = Number(inputClosePin.value);
  if (
    accToBeClosedUserName === currentAccount.userName &&
    pinOfAccToBeClosed === currentAccount.pin
  ) {
    const accClosedIndex = accounts.findIndex(
      acc => acc.userName === currentAccount.userName
    );
    accounts.splice(accClosedIndex, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

// request loan

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
   startLogOutTimer();
  const loanAmount = Math.floor(inputLoanAmount.value);
  if (
    loanAmount > 0 &&
    currentAccount.movements.some(mov => mov > loanAmount * 0.1)
  ) {
    currentAccount.movements.push(loanAmount);
    currentAccount.movementsDate.push(currentDate.toISOString());
    displayTransactions(currentAccount);
    calcDisplayIn(currentAccount);
    displayBalance(currentAccount);
  }
  inputLoanAmount.value = '';
});



const lastLargeMov = account2.movements.findLast(mov => mov > 2000);
const lastLargeIndex = account2.movements.findLastIndex(mov => mov > 2000);
console.log(
  `The last large movement of ${lastLargeMov} happened ${lastLargeIndex} movements ago`
);

const overAllBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overAllBalance);

const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);

// Coding Challenge  #5

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => (dog.recFood = Math.floor(dog.weight ** 0.75 * 28)));
console.log(dogs);
const sarahDogs = dogs.filter(dog => dog.owners.includes('Sarah'));
console.log(sarahDogs);
sarahDogs.forEach(dog =>
  dog.recFood > dog.curFood
    ? console.log('Sarah dog is eating more')
    : console.log('Sarah dog is eating less')
);

const ownersEatTooMuch = dogs
  .filter(dog => dog.recFood < dog.curFood)
  .flatMap(dog => dog.owners);
const ownersEatTooLess = dogs
  .filter(dog => dog.recFood > dog.curFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLess);

//const ownersEatTooMuch = dogsEatingMore.map(dog => dog.owners);
//const ownersEatTooLittle = dogsEatingLess.map(dog => dog.owners)
//console.log(ownersEatTooMuch.flat(),ownersEatTooLittle.flat());

console.log(ownersEatTooMuch.join(' and ') + "'s dogs eat too much.");
console.log(ownersEatTooLess.join(' and ') + "'s dogs eat too little.");

console.log(dogs.some(dog => dog.recFood === dog.curFood));
console.log(
  dogs.every(
    dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
  )
);

const dogsEatingOkay = dogs.filter(
  dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
);
console.log(dogsEatingOkay);

const dogGroups = Object.groupBy(dogs, dog => dog.owners.length);
console.log(dogGroups);

const dogGroupsByFoodPortion = Object.groupBy(dogs, dog => {
  if (dog.recFood > dog.curFood) return 'too-little';
  if (dog.recFood < dog.curFood) return 'too-much';
  if (dog.recFood === dog.curFood) return 'exact';
});
console.log(dogGroupsByFoodPortion);
const dogsCopy = [...dogs];
console.log(dogsCopy.sort((a, b) => a.recFood - b.recFood));

// Challenge #4

const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

// YOUR TASKS:
// 1. Store the the average weight of a "Husky" in a variable "huskyWeight"
// 2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
// 3. Create an array "allActivities" of all the activities of all the dog breeds
// 4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
// 5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
// 6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
// 7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

// BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

const huskyWeight = breeds.find(b => b.breed === 'Husky').averageWeight;
console.log(huskyWeight);
const dogBothActivities = breeds
  .filter(
    breed =>
      breed.activities.includes('running') && breed.activities.includes('fetch')
  )
  .flatMap(breed => breed.breed);
console.log(...dogBothActivities);
const allActivities = breeds.flatMap(breed => breed.activities);
console.log(allActivities);
const uniqueActivities = [...new Set(allActivities)];
console.log(uniqueActivities);

const swimmingAdjacent = [
  ...new Set(
    breeds
      .filter(breed => breed.activities.includes('swimming'))
      .flatMap(breed => breed.activities)
      .filter(activity => activity !== 'swimming')
  ),
];
console.log(swimmingAdjacent);

console.log(breeds.every(breed => breed.averageWeight >= 10));
console.log(breeds.some(breed => breed.activities.length >= 3));

console.log(
  Math.max(
    ...breeds
      .filter(breed => breed.activities.includes('fetch'))
      .flatMap(breed => breed.averageWeight)
  )
);

// sort current account movements
let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  // transactions.sort((a, b) => {
  //   if (a > b) { return 1 }
  //   else if (a < b) { return -1 }
  // })

  displayTransactions(currentAccount, !sorted);
  sorted = !sorted;
});

console.log(new Date());
