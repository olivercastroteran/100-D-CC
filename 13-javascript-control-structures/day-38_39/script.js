// ************* Calculate Sum *************

const calcSumBtn = document.querySelector('#calculator button');
const userNumber = document.getElementById('user-number');
const calculatedSum = document.getElementById('calculated-sum');

const calcSum = () => {
  const number = +userNumber.value;
  let sum = 0;

  for (let i = 0; i <= number; i++) {
    sum += i;
  }

  calculatedSum.textContent = sum;
  calculatedSum.style.display = 'block';

  return;
};

calcSumBtn.addEventListener('click', calcSum);

// ************* Highlight Links *************

const highlightBtn = document.querySelector('#highlight-links button');
const allLinks = document.querySelectorAll('#highlight-links a');

const highlighLinks = () => {
  const linksArray = [...allLinks];

  for (const link of linksArray) {
    link.classList.add('highlight');
  }
};

highlightBtn.addEventListener('click', highlighLinks);

// ************* Display user data *************

const dammyUserData = {
  firstName: 'Oliver',
  lastName: 'Castro Teran',
  age: 30,
};

const displayDummyDataBtn = document.querySelector('#user-data button');

function displayUserData() {
  const userList = document.getElementById('output-user-data');
  userList.innerHTML = '';

  for (const key in dammyUserData) {
    const liElmnt = document.createElement('li');
    liElmnt.textContent = `${key.toUpperCase()}: ${dammyUserData[key]}`;
    userList.append(liElmnt);
  }
}

displayDummyDataBtn.addEventListener('click', displayUserData);

// ************* Statistics - Roll Dice *************
const rollDiceButtonElement = document.querySelector('#statistics button');

function rollDice() {
  return Math.floor(Math.random() * 6) + 1; // Math.floor(): 5.64 => 5
}

function deriveNumberOfDiceRolls() {
  const targetNumberInputElement =
    document.getElementById('user-target-number');
  const diceRollsListElement = document.getElementById('dice-rolls');

  const enteredNumber = targetNumberInputElement.value;
  diceRollsListElement.innerHTML = '';

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;

  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();
    // if (rolledNumber == enteredNumber) {
    //   hasRolledTargetNumber = true;
    // }
    numberOfRolls++;
    const newRollListItemElement = document.createElement('li');
    const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber;
    newRollListItemElement.textContent = outputText;
    diceRollsListElement.append(newRollListItemElement);
    hasRolledTargetNumber = rolledNumber == enteredNumber;
  }

  const outputTotalRollsElement = document.getElementById('output-total-rolls');
  const outputTargetNumberElement = document.getElementById(
    'output-target-number'
  );

  outputTargetNumberElement.textContent = enteredNumber;
  outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls);
