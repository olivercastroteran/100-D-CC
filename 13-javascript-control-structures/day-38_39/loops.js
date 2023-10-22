// for (let i = 0; i > 10; i++) {
//   console.log(i);
// }

// const users = ['Max', 'Joe', 'Oli'];

// for (const user of users) {
//   console.log(user);
// }

const user = {
  name: 'Oli',
  age: 30,
  isAdmin: true,
};

for (const key in user) {
  console.log(key); // name, age, isAdmin
  console.log(user[key]); // Oli, 30, true
}

let isFinished = false;

// while (!isFinished) {
//   isFinished = confirm('Do you want to quit?');
// }

// console.log('Done!');
