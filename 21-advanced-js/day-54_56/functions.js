function greetUser(greetingPrefix, userName = 'user') {
  console.log(`${greetingPrefix} ${userName}!`);
}

greetUser('Hi', 'Oli');
greetUser('Hello');

// ... merges any amount of parameters into an array | rest operator
function sumUp(...nums) {
  let sum = 0;

  for (const num of nums) {
    sum += num;
  }

  return sum;
}

const inputNumbers = [1, 5, 10, 11, 20, 31];
// spreads the array values | ... in this context spread operator
console.log(sumUp(...inputNumbers));
