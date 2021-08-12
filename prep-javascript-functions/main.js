function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(4);
console.log('Minutes:', minutes);

function getGreeting(name) {
  return 'Good day to you ' + name + '!';
}

var greeting = getGreeting('Tanjiro');
console.log('Greeting:', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addMultBy5 = addAndMultiplyBy5(10, 5);
console.log('Add then multiply by 5:', addMultBy5);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyDivideBy5 = multiplyAndDivideBy5(35, 10);
console.log('Multiply then divide by 5:', multiplyDivideBy5);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var difference = subtractTwoNumbers(22, 7);
console.log('Difference:', difference);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circCircumference = getCircleCircumference(5);
console.log('Circumference:', circCircumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Aaron', 'Woo');
console.log('Full Name:', fullName);

function cube(number) {
  return number * number * number;
}

var cubed = cube(5);
console.log('Number Cubed:', cubed);
