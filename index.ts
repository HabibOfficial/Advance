//Q1
console.log("Hello, World!")

//Q2
let temperature = 23;
if (temperature > 20)
  console.log("It's cold!")

//Q3
let apples = 10;
let giveAwayApples = 3;
let applesLeft;
console.log(applesLeft = apples - giveAwayApples);

//Q4
let firstName = "Habib";
let lastName = "Ur Rehman";
let fullName = `${firstName} ${lastName}`
console.log(fullName)

//Q5
if (5 > 3)
  console.log('Yes');
else console.log('No');

//Q6
function calculateArea(r: number) {
  let area = 3.14 * r * r;
  return area
}
console.log(calculateArea(5));

//Q7
for (let i = 1; i <= 50; i++) {
  if (i % 3 == 0)
    console.log("Fizz");
  else if (i % 5 == 0)
    console.log("Buzz");
  else console.log(i)
}

//Q8
let highestTemp = 0;
let temperatures = [23, -45, -6, 7, 32];
for (let i = 0; i < temperatures.length; i++) {
  if (temperatures[i] > highestTemp)
    highestTemp = temperatures[i];
  else
    highestTemp = highestTemp;
}
console.log(`${highestTemp} is the highest temperatuer`)

//Q9
const user_age = 19;
if (user_age < 18)
  console.log("User is a minor.")
else console.log("User is an adult.")

//Q10
let array = [12, 17, -10, -6, 37, 25, -2];
let countPositiveNumber = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] > 0)
    countPositiveNumber += 1;
}
console.log(countPositiveNumber);