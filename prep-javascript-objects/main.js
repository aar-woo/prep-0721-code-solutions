const person = {
  firstName: 'Aaron',
  lastName: 'Woo',
  hobby: 'Rock Climbing'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log('Full Name: ', fullName);

person.job = 'LearningFuze Student';
console.log("Person's Job: ", person.job);

person.previousJob = 'Chapman Student';
console.log("Person's Previous Job: ", person.previousJob);

console.log('Copmlete person object: ', person);
