# Control Flow - Practice Exercises

> **Topic**: Control Flow  
> **Concepts**: `if`, `else`, `switch`, conditional statements

---

## 📝 Multiple Choice Questions

### Question 1

What will this code output?

```javascript
let x = 10;
if (x > 5) {
  console.log("A");
} else if (x > 15) {
  console.log("B");
} else {
  console.log("C");
}
```

- A) "A"
- B) "B"
- C) "C"
- D) Nothing

**Answer: A** - The first condition (x > 5) is true, so "A" is printed and the rest is skipped.

### Question 2

Which of these values is considered "falsy" in JavaScript?

- A) "false"
- B) []
- C) 0
- D) " "

**Answer: C** - 0 is falsy. "false" is a string (truthy), [] is an empty array (truthy), and " " contains a space (truthy).

### Question 3

What's the output of this switch statement?

```javascript
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start");
  case "Tuesday":
    console.log("Continue");
    break;
  default:
    console.log("Default");
}
```

- A) "Start"
- B) "Start" then "Continue"
- C) "Start" then "Continue" then "Default"
- D) Error

**Answer: B** - Missing break after "Monday" case causes fall-through to "Tuesday" case.

### Question 4

What does the ternary operator `condition ? value1 : value2` do?

- A) Returns value1 if condition is false
- B) Returns value2 if condition is true
- C) Returns value1 if condition is true, value2 if false
- D) Always returns value1

**Answer: C** - Ternary operator returns the first value if condition is true, second if false.

### Question 5

Which comparison operator checks both value AND type?

- A) ==
- B) ===
- C) !=
- D) <>

**Answer: B** - === is strict equality that checks both value and type.

---

## 💻 Practical Coding Exercises

### Exercise 1: Grade Calculator

Create a program that converts numeric scores to letter grades:

```javascript
// TODO: Create a function that takes a score (0-100) and returns a letter grade
// A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60

function getLetterGrade(score) {
  // Your code here
}

// Test cases
console.log(getLetterGrade(95)); // Should return "A"
console.log(getLetterGrade(83)); // Should return "B"
console.log(getLetterGrade(77)); // Should return "C"
console.log(getLetterGrade(65)); // Should return "D"
console.log(getLetterGrade(45)); // Should return "F"
```

**Solution:**

```javascript
function getLetterGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Alternative using switch with ranges
function getLetterGradeSwitch(score) {
  switch (Math.floor(score / 10)) {
    case 10:
    case 9:
      return "A";
    case 8:
      return "B";
    case 7:
      return "C";
    case 6:
      return "D";
    default:
      return "F";
  }
}
```

### Exercise 2: Traffic Light System

Create a traffic light decision system:

```javascript
// TODO: Create a function that takes a light color and returns the action
// Red: "STOP", Yellow: "CAUTION", Green: "GO", Invalid: "INVALID COLOR"

function trafficLight(color) {
  // Your code here (use switch statement)
}

// Test cases
console.log(trafficLight("red")); // "STOP"
console.log(trafficLight("yellow")); // "CAUTION"
console.log(trafficLight("green")); // "GO"
console.log(trafficLight("blue")); // "INVALID COLOR"
```

**Solution:**

```javascript
function trafficLight(color) {
  switch (color.toLowerCase()) {
    case "red":
      return "STOP";
    case "yellow":
      return "CAUTION";
    case "green":
      return "GO";
    default:
      return "INVALID COLOR";
  }
}
```

### Exercise 3: Age Category Classifier

Classify people by age groups:

```javascript
// TODO: Create a function that categorizes age groups:
// 0-12: "Child", 13-19: "Teenager", 20-64: "Adult", 65+: "Senior"
// Handle invalid ages (negative numbers)

function getAgeCategory(age) {
  // Your code here
}

// Test cases
console.log(getAgeCategory(8)); // "Child"
console.log(getAgeCategory(16)); // "Teenager"
console.log(getAgeCategory(30)); // "Adult"
console.log(getAgeCategory(70)); // "Senior"
console.log(getAgeCategory(-5)); // Handle invalid age
```

**Solution:**

```javascript
function getAgeCategory(age) {
  if (age < 0) {
    return "Invalid age";
  } else if (age <= 12) {
    return "Child";
  } else if (age <= 19) {
    return "Teenager";
  } else if (age <= 64) {
    return "Adult";
  } else {
    return "Senior";
  }
}
```

---

## 🧪 JavaScript Tests

### Test 1: Conditional Logic

```javascript
function testConditionalLogic() {
  const tests = [
    { condition: 5 > 3, expected: true },
    { condition: "hello" === "hello", expected: true },
    { condition: 0 == false, expected: true },
    { condition: 0 === false, expected: false },
    { condition: null == undefined, expected: true },
    { condition: null === undefined, expected: false },
  ];

  let passed = 0;

  tests.forEach((test, index) => {
    if (test.condition === test.expected) {
      console.log(`✅ Test ${index + 1}: Passed`);
      passed++;
    } else {
      console.log(
        `❌ Test ${index + 1}: Expected ${test.expected}, got ${
          test.condition
        }`,
      );
    }
  });

  console.log(`Result: ${passed}/${tests.length} tests passed`);
  return passed === tests.length;
}

testConditionalLogic();
```

### Test 2: Switch Statement

```javascript
function getDayType(day) {
  switch (day.toLowerCase()) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
      return "weekday";
    case "saturday":
    case "sunday":
      return "weekend";
    default:
      return "invalid";
  }
}

function testSwitchStatement() {
  const tests = [
    { input: "Monday", expected: "weekday" },
    { input: "SATURDAY", expected: "weekend" },
    { input: "friday", expected: "weekday" },
    { input: "Sunday", expected: "weekend" },
    { input: "Funday", expected: "invalid" },
  ];

  let passed = 0;

  tests.forEach((test, index) => {
    const result = getDayType(test.input);
    if (result === test.expected) {
      console.log(`✅ Test ${index + 1}: ${test.input} → ${result}`);
      passed++;
    } else {
      console.log(
        `❌ Test ${index + 1}: ${test.input} → ${result}, expected ${
          test.expected
        }`,
      );
    }
  });

  console.log(`Result: ${passed}/${tests.length} tests passed`);
}

testSwitchStatement();
```

### Test 3: Complex Conditions

```javascript
function canVote(age, isCitizen, hasRegistered) {
  return age >= 18 && isCitizen && hasRegistered;
}

function testVotingEligibility() {
  const tests = [
    { age: 20, citizen: true, registered: true, expected: true },
    { age: 17, citizen: true, registered: true, expected: false },
    { age: 25, citizen: false, registered: true, expected: false },
    { age: 30, citizen: true, registered: false, expected: false },
    { age: 18, citizen: true, registered: true, expected: true },
  ];

  let passed = 0;

  tests.forEach((test, index) => {
    const result = canVote(test.age, test.citizen, test.registered);
    if (result === test.expected) {
      console.log(
        `✅ Test ${index + 1}: Age ${test.age}, Citizen ${
          test.citizen
        }, Registered ${test.registered} → ${result}`,
      );
      passed++;
    } else {
      console.log(
        `❌ Test ${index + 1}: Expected ${test.expected}, got ${result}`,
      );
    }
  });

  console.log(`Result: ${passed}/${tests.length} tests passed`);
}

testVotingEligibility();
```

---

## 🎯 Challenge Problems

### Challenge 1: Calculator with Validation

Create a calculator that handles invalid inputs:

```javascript
// TODO: Create a calculator function that:
// 1. Takes two numbers and an operator (+, -, *, /)
// 2. Validates inputs (numbers must be numbers, operator must be valid)
// 3. Handles division by zero
// 4. Returns the result or an error message

function calculator(num1, num2, operator) {
  // Your code here
}

// Test cases
console.log(calculator(10, 5, "+")); // 15
console.log(calculator(10, 0, "/")); // "Cannot divide by zero"
console.log(calculator("a", 5, "+")); // "Invalid input"
console.log(calculator(10, 5, "%")); // "Invalid operator"
```

### Challenge 2: Password Strength Checker

Create a password strength validator:

```javascript
// TODO: Create a function that checks password strength:
// Weak: less than 6 characters
// Medium: 6-10 characters with letters and numbers
// Strong: 11+ characters with letters, numbers, and special characters

function checkPasswordStrength(password) {
  // Your code here
  // Hint: Use password.length, and check for different character types
}

// Test cases
console.log(checkPasswordStrength("abc")); // "Weak"
console.log(checkPasswordStrength("abc123")); // "Medium"
console.log(checkPasswordStrength("MyPassword123!")); // "Strong"
```

### Challenge 3: Leap Year Calculator

Determine if a year is a leap year:

```javascript
// TODO: A year is a leap year if:
// - Divisible by 4 AND
// - If divisible by 100, then it must also be divisible by 400

function isLeapYear(year) {
  // Your code here
}

// Test cases
console.log(isLeapYear(2020)); // true (divisible by 4, not by 100)
console.log(isLeapYear(1900)); // false (divisible by 100, not by 400)
console.log(isLeapYear(2000)); // true (divisible by 400)
console.log(isLeapYear(2021)); // false (not divisible by 4)
```

---

## 🔍 Debugging Exercises

Find and fix the errors:

### Debug 1: Missing Break

```javascript
// Fix the switch statement
function getSeasonWrong(month) {
  switch (month) {
    case 12:
    case 1:
    case 2:
      return "Winter";
    case 3:
    case 4:
    case 5:
      return "Spring";
    case 6:
    case 7:
    case 8:
      return "Summer";
    case 9:
    case 10:
    case 11:
      return "Fall";
    default:
      return "Invalid month";
  }
}
```

### Debug 2: Logic Error

```javascript
// Fix the logic error
function canDrinkWrong(age, hasID) {
  if (age >= 21 || hasID) {
    // What's wrong here?
    return true;
  }
  return false;
}
```

### Debug 3: Comparison Error

```javascript
// Fix the comparison
function isEvenWrong(number) {
  if (number % 2 = 0) { // What's wrong here?
    return true;
  }
  return false;
}
```

---

## 🎮 Interactive Exercises

### Exercise 1: Number Guessing Game Logic

```javascript
// TODO: Create the logic for a number guessing game
// The function should return "Too high", "Too low", or "Correct!"

function checkGuess(guess, secretNumber) {
  // Your code here
}

// Simulate a game
const secret = 42;
console.log(checkGuess(50, secret)); // "Too high"
console.log(checkGuess(30, secret)); // "Too low"
console.log(checkGuess(42, secret)); // "Correct!"
```

### Exercise 2: Rock Paper Scissors

```javascript
// TODO: Create rock, paper, scissors game logic
// Return "Player wins", "Computer wins", or "Tie"

function rockPaperScissors(playerChoice, computerChoice) {
  // Your code here
  // Rock beats Scissors, Scissors beats Paper, Paper beats Rock
}

// Test the game
console.log(rockPaperScissors("rock", "scissors")); // "Player wins"
console.log(rockPaperScissors("paper", "rock")); // "Player wins"
console.log(rockPaperScissors("scissors", "paper")); // "Player wins"
console.log(rockPaperScissors("rock", "paper")); // "Computer wins"
```

---

## 📊 Self-Assessment Checklist

Check off when you can confidently:

- [ ] Write if-else statements for simple decisions
- [ ] Use else-if for multiple conditions
- [ ] Understand the difference between == and ===
- [ ] Use switch statements effectively
- [ ] Handle edge cases and invalid inputs
- [ ] Use the ternary operator for simple conditions
- [ ] Combine multiple conditions with && and ||
- [ ] Debug common conditional logic errors
- [ ] Write clean, readable conditional code

---

## 💡 Best Practices Learned

1. **Use strict equality (===)** instead of loose equality (==)
2. **Handle edge cases** like invalid inputs
3. **Use meaningful condition names** for complex logic
4. **Keep conditions simple** and easy to understand
5. **Use switch for multiple specific values**, if-else for ranges
6. **Always include default cases** in switch statements
7. **Use early returns** to avoid deep nesting

---

## 🎯 Next Steps

Ready for loops? You should be comfortable with:

- Writing conditional statements
- Understanding truthy/falsy values
- Using comparison operators
- Handling different data types in conditions

Great job on mastering control flow! 🎉
