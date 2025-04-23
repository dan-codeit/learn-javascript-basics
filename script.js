
// Exercise 1: Even or Odd Checker
let userNumber = prompt("Please enter a number:");
if (userNumber % 2 === 0) {
  alert("The number is even.");
} else {
  alert("The number is odd.");
}



// Exercise 2: Basic Calculator
let firstNumber = parseFloat(prompt("Enter first number:"));
let operator = prompt("Enter operator (+, -, *, /):");
let secondNumber = parseFloat(prompt("Enter second number:"));

if (operator === '+') {
    alert("Result: " + (firstNumber + secondNumber));
} else if (operator === '-') {
    alert("Result: " + (firstNumber - secondNumber));
} else if (operator === '*') {
    alert("Result: " + (firstNumber * secondNumber));
} else if (operator === '/') {
    if (secondNumber !== 0) {
        alert("Result: " + (firstNumber / secondNumber));
    } else {
        alert("Error: Division by zero");
    }
} else {
    alert("Error: Invalid operator");
}



// Exercise 3: Voting Eligibility Checker
let age = prompt("Enter your age:");
if (age >= 18) {
    alert("You are eligible to vote.");
} else {
    alert("You are not eligible to vote yet.");
}



// Exercise 4: Print Numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}



// Exercise 5: Multiplication Table Generator
let number = parseInt(prompt("Enter a number to generate its multiplication table:"));
console.log(`Multiplication Table for ${number}:`);
for (let i = 1; i <= 12; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}



// Exercise 6: Grade Checker
let score = parseInt(prompt("Enter your score (0–100):"));
if (score >= 70 && score <= 100) {
  alert("Excellent");
} else if (score >= 50 && score <= 69) {
  alert("Good");
} else if (score >= 0 && score < 50) {
  alert("Needs Improvement");
} else {
  alert("Invalid score. Please enter a number between 0 and 100.");
}



// Exercise 7: Guess the Number Game
let randomNumber = Math.floor(Math.random() * 5) + 1;
let userGuess = parseInt(prompt("Guess a number between 1 and 5:"));
if (userGuess === randomNumber) {
  alert("You guessed right!");
} else {
  alert(`Wrong guess. The number was ${randomNumber}.`);
}



// Exercise 8: FizzBuzz Challenge
for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
