let age = 32;
let userName = 'Oliver';
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
