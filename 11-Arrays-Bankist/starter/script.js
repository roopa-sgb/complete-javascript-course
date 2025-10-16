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
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
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

const displayTransactions = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (movement, index) {
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const transaction = ` <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
          <div class="movements__value">${movement} €</div>
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
  acc.currentBalance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  console.log(acc.currentBalance);
  labelBalance.textContent = `${acc.currentBalance}€`;
};

const text = 'I am learning javascript';
const textArray = text.split(' ');
console.log(textArray);
console.log(textArray.map(text => text.split('').reverse().join('')).join(' '));

const calcDisplayIn = function (acc) {
  const deposits = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  const withdrawals = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  const interest = movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .filter(mov => mov >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${deposits} €`;
  labelSumOut.textContent = `${Math.abs(withdrawals)} €`;
  labelSumInterest.textContent = `${interest} €`;
};

let currentAccount;
btnLogin.addEventListener('click', function (event) {
  event.preventDefault();
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount && Number(inputLoginPin.value) === currentAccount?.pin) {
    labelWelcome.textContent = `Welcome ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 1;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    displayTransactions(currentAccount.movements);
    calcDisplayIn(currentAccount);
    displayBalance(currentAccount);
  } else alert('User does not exist !');
});

// Transfer Amount

btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();
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
    transferToAcc.movements.push(transferAmount);
    console.log(currentAccount.movements);
    console.log(transferToAcc.movements);
    displayTransactions(currentAccount.movements);
    calcDisplayIn(currentAccount);
    displayBalance(currentAccount);
  }
});

// Close Account

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
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
  const loanAmount = Number(inputLoanAmount.value);
  if (loanAmount > 0 && currentAccount.movements.some(mov => mov > loanAmount * 0.1)) {
    currentAccount.movements.push(loanAmount);
     displayTransactions(currentAccount.movements);
     calcDisplayIn(currentAccount);
     displayBalance(currentAccount);
  }
  inputLoanAmount.value = '';
})

const lastLargeMov = account2.movements.findLast(mov => mov > 2000);
const lastLargeIndex = account2.movements.findLastIndex(mov => mov > 2000);
console.log(`The last large movement of ${lastLargeMov} happened ${lastLargeIndex} movements ago`);

const overAllBalance = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0);
console.log(overAllBalance);
 
const overallBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);

// Coding Challenge  #4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => dog.portion = dog.weight ** 0.75 * 28)
console.log(dogs);
const sarahDogs = dogs.filter(dog => dog.owners.some(owner => owner === 'Sarah'))
console.log(sarahDogs);
sarahDogs.forEach(dog =>
  dog.portion > dog.curFood
    ? console.log('Sarah dog is eating more')
    : console.log('Sarah dog is eating less')
);

const dogsEatingMore = dogs.filter(dog => dog.portion > dog.curFood)
const dogsEatingLess = dogs.filter(dog => dog.portion < dog.curFood)

console.log(dogsEatingMore);
console.log(dogsEatingLess);

const ownersEatTooMuch = dogsEatingMore.map(dog => dog.owners);
const ownersEatTooLittle = dogsEatingLess.map(dog => dog.owners)
console.log(ownersEatTooMuch.flat(),ownersEatTooLittle.flat());

console.log(ownersEatTooMuch.join(' and ') + ' dogs eat too much.');
console.log(ownersEatTooLittle.join(' and ') + ' dogs eat too little.');

console.log(dogs.some(dog => dog.portion === dog.curFood));
console.log(dogs.some(dog => dog.portion >= dog.curFood * 0.1 || dog.portion <= dog.curFood * 0.1));

console.log(
  dogs.filter(
    dog => dog.portion > dog.curFood * 0.90 && dog.portion < dog.curFood * 1.10
  )
);

const dogsCopy = [...dogs];
console.log(dogsCopy.sort((a,b) => a.portion-b.portion));

