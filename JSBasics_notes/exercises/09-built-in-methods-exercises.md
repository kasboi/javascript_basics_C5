# Topic 9: Built-in Methods - Exercises

## Multiple Choice Questions

### Question 1

What does `Math.floor(4.7)` return?
A) 5
B) 4
C) 4.7
D) Error

**Answer: B**
**Explanation:** `Math.floor()` rounds down to the nearest integer, so 4.7 becomes 4.

### Question 2

Which method converts a string to an array?
A) `split()`
B) `slice()`
C) `splice()`
D) `join()`

**Answer: A**
**Explanation:** The `split()` method splits a string into an array based on a delimiter.

### Question 3

What does `"hello".charAt(1)` return?
A) "h"
B) "e"
C) "l"
D) "o"

**Answer: B**
**Explanation:** `charAt(1)` returns the character at index 1, which is "e".

### Question 4

Which method returns the current date and time as a number?
A) `Date.now()`
B) `Date.time()`
C) `Date.current()`
D) `Date.get()`

**Answer: A**
**Explanation:** `Date.now()` returns the current timestamp in milliseconds since January 1, 1970.

### Question 5

What does `Math.random()` return?
A) A random integer between 0 and 1
B) A random decimal between 0 and 1 (excluding 1)
C) A random integer between 1 and 10
D) A random decimal between 1 and 10

**Answer: B**
**Explanation:** `Math.random()` returns a random decimal number between 0 (inclusive) and 1 (exclusive).

### Question 6

Which method checks if an array includes a specific element?
A) `contains()`
B) `has()`
C) `includes()`
D) `indexOf()`

**Answer: C**
**Explanation:** The `includes()` method returns true if the array contains the specified element.

## Practical Coding Exercises

### Exercise 1: Math Methods Practice

Create functions using various Math methods.

```javascript
function mathOperations(numbers) {
    // numbers is an array of numbers

    // Find the maximum value
    const max = // Your code here

    // Find the minimum value
    const min = // Your code here

    // Calculate the sum
    const sum = // Your code here

    // Calculate the average
    const average = // Your code here

    // Round the average to 2 decimal places
    const roundedAverage = // Your code here

    // Generate a random number between min and max (inclusive)
    const randomInRange = // Your code here

    return {
        max,
        min,
        sum,
        average,
        roundedAverage,
        randomInRange
    };
}

// Test your function
console.log(mathOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
```

**Solution:**

```javascript
function mathOperations(numbers) {
  // Find the maximum value
  const max = Math.max(...numbers);

  // Find the minimum value
  const min = Math.min(...numbers);

  // Calculate the sum
  const sum = numbers.reduce((total, num) => total + num, 0);

  // Calculate the average
  const average = sum / numbers.length;

  // Round the average to 2 decimal places
  const roundedAverage = Math.round(average * 100) / 100;

  // Generate a random number between min and max (inclusive)
  const randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;

  return {
    max,
    min,
    sum,
    average,
    roundedAverage,
    randomInRange,
  };
}
```

### Exercise 2: String Methods Mastery

Create functions that manipulate strings using built-in methods.

```javascript
function stringManipulation(text) {
    // text is a string

    // Convert to uppercase
    const uppercase = // Your code here

    // Convert to lowercase
    const lowercase = // Your code here

    // Capitalize first letter of each word
    const titleCase = // Your code here

    // Remove whitespace from beginning and end
    const trimmed = // Your code here

    // Replace all spaces with underscores
    const withUnderscores = // Your code here

    // Split into array of words
    const words = // Your code here

    // Check if it contains a specific substring
    const containsJavaScript = // Your code here (check for "JavaScript")

    // Extract first 10 characters
    const excerpt = // Your code here

    return {
        original: text,
        uppercase,
        lowercase,
        titleCase,
        trimmed,
        withUnderscores,
        words,
        containsJavaScript,
        excerpt
    };
}

// Test your function
console.log(stringManipulation("  hello world JavaScript programming  "));
```

**Solution:**

```javascript
function stringManipulation(text) {
  // Convert to uppercase
  const uppercase = text.toUpperCase();

  // Convert to lowercase
  const lowercase = text.toLowerCase();

  // Capitalize first letter of each word
  const titleCase = text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  // Remove whitespace from beginning and end
  const trimmed = text.trim();

  // Replace all spaces with underscores
  const withUnderscores = text.replace(/ /g, "_");

  // Split into array of words
  const words = text.trim().split(/\s+/);

  // Check if it contains a specific substring
  const containsJavaScript = text.includes("JavaScript");

  // Extract first 10 characters
  const excerpt = text.substring(0, 10);

  return {
    original: text,
    uppercase,
    lowercase,
    titleCase,
    trimmed,
    withUnderscores,
    words,
    containsJavaScript,
    excerpt,
  };
}
```

### Exercise 3: Date Methods Practice

Work with Date objects and their methods.

```javascript
function dateOperations() {
    // Create a new date for today
    const today = // Your code here

    // Get the current year
    const currentYear = // Your code here

    // Get the current month (0-11, so add 1 for human readable)
    const currentMonth = // Your code here

    // Get the current day of month
    const currentDay = // Your code here

    // Get the current day of week (0 = Sunday, 6 = Saturday)
    const dayOfWeek = // Your code here

    // Create a date for your birthday this year
    const birthday = new Date(currentYear, 5, 15); // June 15th (month is 0-indexed)

    // Calculate days until birthday
    const daysUntilBirthday = // Your code here

    // Format today as a readable string
    const formattedDate = // Your code here (e.g., "December 25, 2023")

    // Get timestamp in milliseconds
    const timestamp = // Your code here

    return {
        today,
        currentYear,
        currentMonth,
        currentDay,
        dayOfWeek,
        birthday,
        daysUntilBirthday,
        formattedDate,
        timestamp
    };
}

// Test your function
console.log(dateOperations());
```

**Solution:**

```javascript
function dateOperations() {
  // Create a new date for today
  const today = new Date();

  // Get the current year
  const currentYear = today.getFullYear();

  // Get the current month (0-11, so add 1 for human readable)
  const currentMonth = today.getMonth() + 1;

  // Get the current day of month
  const currentDay = today.getDate();

  // Get the current day of week (0 = Sunday, 6 = Saturday)
  const dayOfWeek = today.getDay();

  // Create a date for your birthday this year
  const birthday = new Date(currentYear, 5, 15); // June 15th

  // Calculate days until birthday
  const timeDiff = birthday.getTime() - today.getTime();
  const daysUntilBirthday = Math.ceil(timeDiff / (1000 * 3600 * 24));

  // Format today as a readable string
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const formattedDate = `${
    months[today.getMonth()]
  } ${today.getDate()}, ${today.getFullYear()}`;

  // Get timestamp in milliseconds
  const timestamp = today.getTime();

  return {
    today,
    currentYear,
    currentMonth,
    currentDay,
    dayOfWeek,
    birthday,
    daysUntilBirthday,
    formattedDate,
    timestamp,
  };
}
```

### Exercise 4: Array Methods Deep Dive

Practice advanced array methods.

```javascript
const products = [
    { id: 1, name: "Laptop", price: 999, category: "Electronics", inStock: true },
    { id: 2, name: "Phone", price: 699, category: "Electronics", inStock: false },
    { id: 3, name: "Book", price: 29, category: "Education", inStock: true },
    { id: 4, name: "Headphones", price: 199, category: "Electronics", inStock: true },
    { id: 5, name: "Desk", price: 299, category: "Furniture", inStock: false }
];

function analyzeProducts(products) {
    // Find all products under $500
    const affordable = // Your code here

    // Get array of just product names
    const productNames = // Your code here

    // Find the most expensive product
    const mostExpensive = // Your code here

    // Check if any products are out of stock
    const hasOutOfStock = // Your code here

    // Check if all electronics are over $100
    const allElectronicsExpensive = // Your code here

    // Group products by category
    const byCategory = // Your code here

    // Calculate total value of all products
    const totalValue = // Your code here

    // Find first product that starts with 'P'
    const startsWithP = // Your code here

    return {
        affordable,
        productNames,
        mostExpensive,
        hasOutOfStock,
        allElectronicsExpensive,
        byCategory,
        totalValue,
        startsWithP
    };
}

// Test your function
console.log(analyzeProducts(products));
```

**Solution:**

```javascript
function analyzeProducts(products) {
  // Find all products under $500
  const affordable = products.filter((product) => product.price < 500);

  // Get array of just product names
  const productNames = products.map((product) => product.name);

  // Find the most expensive product
  const mostExpensive = products.reduce((max, current) =>
    current.price > max.price ? current : max,
  );

  // Check if any products are out of stock
  const hasOutOfStock = products.some((product) => !product.inStock);

  // Check if all electronics are over $100
  const electronics = products.filter((p) => p.category === "Electronics");
  const allElectronicsExpensive = electronics.every(
    (product) => product.price > 100,
  );

  // Group products by category
  const byCategory = products.reduce((groups, product) => {
    const category = product.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(product);
    return groups;
  }, {});

  // Calculate total value of all products
  const totalValue = products.reduce(
    (total, product) => total + product.price,
    0,
  );

  // Find first product that starts with 'P'
  const startsWithP = products.find((product) => product.name.startsWith("P"));

  return {
    affordable,
    productNames,
    mostExpensive,
    hasOutOfStock,
    allElectronicsExpensive,
    byCategory,
    totalValue,
    startsWithP,
  };
}
```

### Exercise 5: JSON and Object Methods

Work with JSON parsing and Object methods.

```javascript
function jsonOperations() {
    const userDataString = '{"name": "Alice", "age": 30, "hobbies": ["reading", "coding"], "active": true}';

    // Parse the JSON string
    const userData = // Your code here

    // Convert object back to JSON string (with formatting)
    const formattedJson = // Your code here (use 2 spaces for indentation)

    // Get all property keys
    const keys = // Your code here

    // Get all property values
    const values = // Your code here

    // Get key-value pairs as arrays
    const entries = // Your code here

    // Create new object with additional property
    const enhanced = // Your code here (add isAdult: age >= 18)

    // Check if object has specific property
    const hasAge = // Your code here

    // Create object from key-value pairs
    const reconstructed = // Your code here (use entries to recreate object)

    return {
        userData,
        formattedJson,
        keys,
        values,
        entries,
        enhanced,
        hasAge,
        reconstructed
    };
}

// Test your function
console.log(jsonOperations());
```

**Solution:**

```javascript
function jsonOperations() {
  const userDataString =
    '{"name": "Alice", "age": 30, "hobbies": ["reading", "coding"], "active": true}';

  // Parse the JSON string
  const userData = JSON.parse(userDataString);

  // Convert object back to JSON string (with formatting)
  const formattedJson = JSON.stringify(userData, null, 2);

  // Get all property keys
  const keys = Object.keys(userData);

  // Get all property values
  const values = Object.values(userData);

  // Get key-value pairs as arrays
  const entries = Object.entries(userData);

  // Create new object with additional property
  const enhanced = { ...userData, isAdult: userData.age >= 18 };

  // Check if object has specific property
  const hasAge = userData.hasOwnProperty("age");

  // Create object from key-value pairs
  const reconstructed = Object.fromEntries(entries);

  return {
    userData,
    formattedJson,
    keys,
    values,
    entries,
    enhanced,
    hasAge,
    reconstructed,
  };
}
```

## JavaScript Test Functions

```javascript
// Test function for built-in methods exercises
function testBuiltInMethodsExercises() {
  console.log("=== Testing Built-in Methods Exercises ===");

  // Test mathOperations
  const mathResult = mathOperations([1, 2, 3, 4, 5]);
  const test1 =
    mathResult.max === 5 && mathResult.min === 1 && mathResult.sum === 15;
  console.log("mathOperations test:", test1 ? "PASS" : "FAIL");

  // Test stringManipulation
  const stringResult = stringManipulation("  hello world  ");
  const test2 =
    stringResult.uppercase === "  HELLO WORLD  " &&
    stringResult.trimmed === "hello world";
  console.log("stringManipulation test:", test2 ? "PASS" : "FAIL");

  // Test dateOperations
  const dateResult = dateOperations();
  const test3 =
    typeof dateResult.currentYear === "number" && dateResult.currentYear > 2020;
  console.log("dateOperations test:", test3 ? "PASS" : "FAIL");

  // Test analyzeProducts
  const testProducts = [
    {
      id: 1,
      name: "Laptop",
      price: 999,
      category: "Electronics",
      inStock: true,
    },
    {
      id: 2,
      name: "Phone",
      price: 699,
      category: "Electronics",
      inStock: false,
    },
  ];
  const productResult = analyzeProducts(testProducts);
  const test4 =
    productResult.totalValue === 1698 &&
    productResult.productNames.length === 2;
  console.log("analyzeProducts test:", test4 ? "PASS" : "FAIL");

  // Test jsonOperations
  const jsonResult = jsonOperations();
  const test5 =
    jsonResult.userData.name === "Alice" && jsonResult.keys.includes("age");
  console.log("jsonOperations test:", test5 ? "PASS" : "FAIL");
}

// Run tests
testBuiltInMethodsExercises();
```

## Challenge Problems

### Challenge 1: Custom Array Methods

Implement your own versions of common array methods.

```javascript
function customArrayMethods() {
  // Implement custom map function
  Array.prototype.customMap = function (callback) {
    // Your implementation here
  };

  // Implement custom filter function
  Array.prototype.customFilter = function (callback) {
    // Your implementation here
  };

  // Implement custom reduce function
  Array.prototype.customReduce = function (callback, initialValue) {
    // Your implementation here
  };

  // Test your implementations
  const numbers = [1, 2, 3, 4, 5];

  console.log(
    "Custom map:",
    numbers.customMap((x) => x * 2),
  );
  console.log(
    "Custom filter:",
    numbers.customFilter((x) => x > 3),
  );
  console.log(
    "Custom reduce:",
    numbers.customReduce((acc, x) => acc + x, 0),
  );
}

customArrayMethods();
```

**Solution:**

```javascript
function customArrayMethods() {
  // Implement custom map function
  Array.prototype.customMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }
    return result;
  };

  // Implement custom filter function
  Array.prototype.customFilter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  };

  // Implement custom reduce function
  Array.prototype.customReduce = function (callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;

    if (initialValue === undefined) {
      accumulator = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}
```

### Challenge 2: Date Utility Library

Create a comprehensive date utility library.

```javascript
function createDateUtils() {
  return {
    formatDate: function (date, format) {
      // Format: 'YYYY-MM-DD', 'MM/DD/YYYY', 'DD/MM/YYYY'
    },

    addDays: function (date, days) {
      // Add or subtract days from a date
    },

    getDaysBetween: function (date1, date2) {
      // Calculate days between two dates
    },

    isWeekend: function (date) {
      // Check if date falls on weekend
    },

    getNextWorkday: function (date) {
      // Get next working day (excluding weekends)
    },

    getAge: function (birthDate) {
      // Calculate age in years
    },

    isLeapYear: function (year) {
      // Check if year is a leap year
    },

    getQuarter: function (date) {
      // Get quarter (Q1, Q2, Q3, Q4) for the date
    },
  };
}

// Test your date utilities
const dateUtils = createDateUtils();
console.log(dateUtils.formatDate(new Date(), "YYYY-MM-DD"));
console.log(dateUtils.isWeekend(new Date()));
```

**Solution:**

```javascript
function createDateUtils() {
  return {
    formatDate: function (date, format) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");

      switch (format) {
        case "YYYY-MM-DD":
          return `${year}-${month}-${day}`;
        case "MM/DD/YYYY":
          return `${month}/${day}/${year}`;
        case "DD/MM/YYYY":
          return `${day}/${month}/${year}`;
        default:
          return date.toString();
      }
    },

    addDays: function (date, days) {
      const result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    },

    getDaysBetween: function (date1, date2) {
      const timeDiff = Math.abs(date2.getTime() - date1.getTime());
      return Math.ceil(timeDiff / (1000 * 3600 * 24));
    },

    isWeekend: function (date) {
      const day = date.getDay();
      return day === 0 || day === 6; // Sunday or Saturday
    },

    getNextWorkday: function (date) {
      let nextDay = this.addDays(date, 1);
      while (this.isWeekend(nextDay)) {
        nextDay = this.addDays(nextDay, 1);
      }
      return nextDay;
    },

    getAge: function (birthDate) {
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      return age;
    },

    isLeapYear: function (year) {
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    },

    getQuarter: function (date) {
      const month = date.getMonth() + 1;
      return Math.ceil(month / 3);
    },
  };
}
```

### Challenge 3: Advanced String Processing

Create advanced string manipulation functions.

```javascript
function createStringProcessor() {
  return {
    slugify: function (text) {
      // Convert to URL-friendly slug
      // "Hello World!" -> "hello-world"
    },

    extractEmails: function (text) {
      // Extract all email addresses from text
    },

    wordCount: function (text) {
      // Count words, characters, sentences, paragraphs
    },

    similarity: function (str1, str2) {
      // Calculate similarity between two strings (0-1)
    },

    insertAt: function (text, position, insertion) {
      // Insert text at specific position
    },

    reverseWords: function (text) {
      // Reverse the order of words
      // "Hello World" -> "World Hello"
    },

    isPalindrome: function (text) {
      // Check if text is a palindrome (ignoring spaces/punctuation)
    },

    toSnakeCase: function (text) {
      // Convert to snake_case
    },

    toCamelCase: function (text) {
      // Convert to camelCase
    },
  };
}

// Test your string processor
const strProcessor = createStringProcessor();
console.log(strProcessor.slugify("Hello World!"));
console.log(strProcessor.isPalindrome("A man a plan a canal Panama"));
```

**Solution:**

```javascript
function createStringProcessor() {
  return {
    slugify: function (text) {
      return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "") // Remove special characters
        .replace(/[\s_-]+/g, "-") // Replace spaces/underscores with hyphens
        .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
    },

    extractEmails: function (text) {
      const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
      return text.match(emailRegex) || [];
    },

    wordCount: function (text) {
      const words = text
        .trim()
        .split(/\s+/)
        .filter((word) => word.length > 0);
      const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0);
      const paragraphs = text
        .split(/\n\s*\n/)
        .filter((p) => p.trim().length > 0);

      return {
        words: words.length,
        characters: text.length,
        charactersNoSpaces: text.replace(/\s/g, "").length,
        sentences: sentences.length,
        paragraphs: paragraphs.length,
      };
    },

    similarity: function (str1, str2) {
      const longer = str1.length > str2.length ? str1 : str2;
      const shorter = str1.length > str2.length ? str2 : str1;

      if (longer.length === 0) return 1.0;

      const distance = this.levenshteinDistance(str1, str2);
      return (longer.length - distance) / longer.length;
    },

    levenshteinDistance: function (str1, str2) {
      const matrix = [];

      for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
      }

      for (let j = 0; j <= str1.length; j++) {
        matrix[0][j] = j;
      }

      for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
          if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
            matrix[i][j] = matrix[i - 1][j - 1];
          } else {
            matrix[i][j] = Math.min(
              matrix[i - 1][j - 1] + 1,
              matrix[i][j - 1] + 1,
              matrix[i - 1][j] + 1,
            );
          }
        }
      }

      return matrix[str2.length][str1.length];
    },

    insertAt: function (text, position, insertion) {
      return text.slice(0, position) + insertion + text.slice(position);
    },

    reverseWords: function (text) {
      return text.split(" ").reverse().join(" ");
    },

    isPalindrome: function (text) {
      const cleaned = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
      return cleaned === cleaned.split("").reverse().join("");
    },

    toSnakeCase: function (text) {
      return text
        .replace(/([A-Z])/g, " $1")
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "_");
    },

    toCamelCase: function (text) {
      return text
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (match, char) => char.toUpperCase());
    },
  };
}
```

## Real-World Applications

### Application 1: Data Validation Library

Create a comprehensive validation system using built-in methods.

```javascript
function createValidator() {
  return {
    isEmail: function (email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    },

    isPhoneNumber: function (phone) {
      const cleaned = phone.replace(/\D/g, "");
      return cleaned.length >= 10 && cleaned.length <= 15;
    },

    isStrongPassword: function (password) {
      return (
        password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /\d/.test(password) &&
        /[!@#$%^&*]/.test(password)
      );
    },

    isCreditCard: function (cardNumber) {
      const cleaned = cardNumber.replace(/\D/g, "");

      // Luhn algorithm
      let sum = 0;
      let isEven = false;

      for (let i = cleaned.length - 1; i >= 0; i--) {
        let digit = parseInt(cleaned.charAt(i));

        if (isEven) {
          digit *= 2;
          if (digit > 9) {
            digit -= 9;
          }
        }

        sum += digit;
        isEven = !isEven;
      }

      return sum % 10 === 0;
    },

    isDateInRange: function (date, minDate, maxDate) {
      const checkDate = new Date(date);
      const min = new Date(minDate);
      const max = new Date(maxDate);

      return checkDate >= min && checkDate <= max;
    },

    validateForm: function (data, rules) {
      const errors = {};

      Object.keys(rules).forEach((field) => {
        const value = data[field];
        const fieldRules = rules[field];

        if (fieldRules.required && (!value || value.trim() === "")) {
          errors[field] = "This field is required";
          return;
        }

        if (value && fieldRules.type) {
          switch (fieldRules.type) {
            case "email":
              if (!this.isEmail(value)) {
                errors[field] = "Invalid email format";
              }
              break;
            case "phone":
              if (!this.isPhoneNumber(value)) {
                errors[field] = "Invalid phone number";
              }
              break;
            case "password":
              if (!this.isStrongPassword(value)) {
                errors[field] =
                  "Password must be at least 8 characters with uppercase, lowercase, number, and special character";
              }
              break;
          }
        }

        if (
          value &&
          fieldRules.minLength &&
          value.length < fieldRules.minLength
        ) {
          errors[field] = `Minimum length is ${fieldRules.minLength}`;
        }

        if (
          value &&
          fieldRules.maxLength &&
          value.length > fieldRules.maxLength
        ) {
          errors[field] = `Maximum length is ${fieldRules.maxLength}`;
        }
      });

      return {
        isValid: Object.keys(errors).length === 0,
        errors,
      };
    },
  };
}

// Usage
const validator = createValidator();
const formData = {
  email: "user@example.com",
  password: "StrongPass123!",
  phone: "1234567890",
};

const rules = {
  email: { required: true, type: "email" },
  password: { required: true, type: "password" },
  phone: { required: true, type: "phone" },
};

console.log(validator.validateForm(formData, rules));
```

### Application 2: Text Analytics Tool

Create a tool for analyzing text content.

```javascript
function createTextAnalyzer() {
  return {
    analyze: function (text) {
      const words = this.getWords(text);
      const sentences = this.getSentences(text);

      return {
        wordCount: words.length,
        characterCount: text.length,
        characterCountNoSpaces: text.replace(/\s/g, "").length,
        sentenceCount: sentences.length,
        averageWordsPerSentence: words.length / sentences.length,
        longestWord: this.getLongestWord(words),
        shortestWord: this.getShortestWord(words),
        wordFrequency: this.getWordFrequency(words),
        readingTime: Math.ceil(words.length / 200), // minutes
        fleschScore: this.calculateFleschScore(text),
      };
    },

    getWords: function (text) {
      return text
        .toLowerCase()
        .replace(/[^\w\s]/g, " ")
        .split(/\s+/)
        .filter((word) => word.length > 0);
    },

    getSentences: function (text) {
      return text.split(/[.!?]+/).filter((s) => s.trim().length > 0);
    },

    getLongestWord: function (words) {
      return words.reduce(
        (longest, current) =>
          current.length > longest.length ? current : longest,
        "",
      );
    },

    getShortestWord: function (words) {
      return words.reduce(
        (shortest, current) =>
          current.length < shortest.length ? current : shortest,
        words[0] || "",
      );
    },

    getWordFrequency: function (words) {
      const frequency = {};
      words.forEach((word) => {
        frequency[word] = (frequency[word] || 0) + 1;
      });

      return Object.entries(frequency)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 10)
        .reduce((obj, [word, count]) => {
          obj[word] = count;
          return obj;
        }, {});
    },

    calculateFleschScore: function (text) {
      const words = this.getWords(text);
      const sentences = this.getSentences(text);
      const syllables = words.reduce(
        (total, word) => total + this.countSyllables(word),
        0,
      );

      const avgSentenceLength = words.length / sentences.length;
      const avgSyllablesPerWord = syllables / words.length;

      return 206.835 - 1.015 * avgSentenceLength - 84.6 * avgSyllablesPerWord;
    },

    countSyllables: function (word) {
      word = word.toLowerCase();
      if (word.length <= 3) return 1;

      word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "");
      word = word.replace(/^y/, "");

      const matches = word.match(/[aeiouy]{1,2}/g);
      return matches ? matches.length : 1;
    },
  };
}

// Usage
const analyzer = createTextAnalyzer();
const sampleText =
  "This is a sample text for analysis. It contains multiple sentences. We want to analyze its readability and other metrics.";
console.log(analyzer.analyze(sampleText));
```

## Self-Assessment Checklist

- [ ] I can use Math methods for calculations and number manipulation
- [ ] I understand and can apply string methods for text processing
- [ ] I can work with Date objects and their methods
- [ ] I can use array methods effectively for data manipulation
- [ ] I understand JSON parsing and stringification
- [ ] I can use Object methods to work with object properties
- [ ] I can combine multiple built-in methods to solve complex problems
- [ ] I understand when to use different methods for similar tasks
- [ ] I can create custom utilities using built-in methods
- [ ] I can apply built-in methods to real-world scenarios

## Additional Practice Resources

1. Practice chaining multiple methods together
2. Build utility libraries using built-in methods
3. Implement common algorithms using array methods
4. Create text processing applications
5. Build date/time manipulation tools
6. Practice performance optimization with method selection
7. Work with real-world data processing scenarios

---

**Next Topic:** [10 - DOM Manipulation](./10-dom-manipulation-exercises.md)
