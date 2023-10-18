let age = 32;
const userName = 'Oliver';
let hobbies = ['Code', 'Climbing', 'Reading'];
let job = {
  title: 'Full Stack Developer',
  place: 'London',
  salary: 50000,
};

const calcAdultYears = (userAge) => {
  return userAge - 18;
};

console.log(calcAdultYears(age));

const person = {
  name: 'Oliver', // Property
  greet() {
    // Method
    console.log('Hello');
  },
};

person.greet();

// Math operations

console.log(10 + 4);
console.log(10 - 4);
console.log(10 * 4);
console.log(10 / 4);
console.log(10 % 4); // 10 / 4 => 2 * 4 => Remainder: 2
console.log(10 % 3); // Expected Remainder: 1

console.log((10 + 3 - 5) * 10);

console.log('Max' + ' ' + 'Schwarzmüller');
console.log('Max' - 'ax'); // NaN

console.log(userName.length);
console.log(userName.toUpperCase());

console.log(hobbies.length);
