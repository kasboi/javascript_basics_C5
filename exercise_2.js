// 1. Discount Calculator

// this is a change


/*
Write a program to calculate discounts based on purchase amounts.

Requirements:
- Ask the user for their total purchase amount.
- Apply discounts based on the amount:
  - No discount for purchases below $50.
  - 10% discount for purchases between $50 and $100.
  - 20% discount for purchases above $100.
  - Calculate and display the final amount after applying the discount.
*/

const price = +prompt("Input total amount");

if (price < 50) {
  console.log("There's no discount");
} else if (price >= 50 && price <= 100) {
  let total_amount = price - 0.1 * price;
  console.log(`Total amount: ${total_amount}`);
} else {
  let total_amount = price - 0.2 * price;
  console.log(`Total amount: ${total_amount}`);
}

// 2. Vowel checker
// Write a program that checks whether a given character is a vowel (a, e, i, o, u) or a consonant.
const letter = prompt("Input alphabet letter");

switch (letter) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    alert("That is a vowel character");
  default:
    alert("That is a consonant letter");
    break;
}

// 3. BMI Calculator
/*
Write a program to calculate and interpret the Body Mass Index (BMI) of a person.

Requirements:
- Prompt the user to input their weight (in kilograms) and height (in meters).
- Calculate BMI using the formula:
  BMI = weight / (height^2)

- Use conditional statements to classify the BMI:
  BMI < 18.5: "Underweight"
  18.5 <= BMI < 24.9: "Normal weight"
  25 <= BMI < 29.9: "Overweight"
  BMI >= 30: "Obese"

- Display the BMI value and category to the user.
*/
