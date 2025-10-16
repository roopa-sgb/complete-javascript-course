'use strict';

const greet = greeting => {
  return name => console.log(`${greeting} ${name}`);
};

greet('hello')('Roopa');

const addTax = rate => {
  return value => {
    const val = value + value * rate;
    console.log(val);
  };
};

addTax(0.1)(100);

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section! answers: new Array(4).fill(0),
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options[0]}\n${this.options[1]}\n${this.options[2]}\n${this.options[3]}`
      )
    );
    // console.log(typeof answer);
    answer >= 0 && answer <= 3
      ? this.answers[answer]++
      : alert('Enter only the number of the option as your answer');
    this.displayResults('array');
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers}`);
    } else {
      console.log(this.answers);
    }
  },
};
//poll.registerNewAnswer();
console.log(poll);
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [4, 5, 3, 7] }, 'array');

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();

(function () { 
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.body.addEventListener('click', function () {
    header.style.color = 'blue';
  })
})();