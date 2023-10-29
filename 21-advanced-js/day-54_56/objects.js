// const job = {
//   title: 'Developer',
//   location: 'New York',
//   salary: 50000,
// };

// console.log(new Date().toDateString());

class Job {
  constructor(jobTitle, place, salary) {
    this.title = jobTitle;
    this.location = place;
    this.salary = salary;
  }

  describe() {
    console.log(
      `I'm a ${this.title}, I work in ${this.location} and I earn ${this.salary}`
    );
  }
}

const developer = new Job('Developer', 'New York', 50000);
const cook = new Job('Cook', 'Munich', 35000);
// console.log(developer);
developer.describe();
cook.describe();

// Array destructuring
const input = ['Oliver', 'Castro Teran'];
const [firs, last] = input;

// Object destructuring
const job = {
  title: 'Developer',
  location: 'New York',
  salary: 50000,
};

const { title, location: place, salary } = job;
