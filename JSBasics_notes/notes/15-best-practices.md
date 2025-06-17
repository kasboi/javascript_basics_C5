# Best Practices

> **Topic**: Best Practices  
> **Concepts Covered**: Readability, naming, comments, clean code

## Code Readability

Writing readable code is one of the most important skills in programming. Code is read far more often than it's written.

### Meaningful Variable Names

Use descriptive names that clearly indicate what the variable represents:

```javascript
// ❌ Bad - unclear abbreviations
const u = document.querySelector("#user");
const btn = document.querySelector("#submit");
const temp = calculateTotal(items);

// ✅ Good - descriptive names
const userProfile = document.querySelector("#user");
const submitButton = document.querySelector("#submit");
const totalPrice = calculateTotal(items);
```

### Function Naming

Functions should clearly describe what they do, usually starting with a verb:

```javascript
// ❌ Bad - unclear purpose
function userData(id) {
  return fetch(`/api/users/${id}`).then((r) => r.json());
}

// ✅ Good - clear action
function fetchUserById(id) {
  return fetch(`/api/users/${id}`).then((response) => response.json());
}

// ✅ Good - boolean functions start with is/has/can
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function hasRequiredFields(formData) {
  return formData.name && formData.email;
}
```

### Consistent Naming Conventions

Stick to established JavaScript conventions:

```javascript
// ✅ camelCase for variables and functions
const firstName = "John";
const lastName = "Doe";

function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// ✅ PascalCase for constructors and classes
class UserManager {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }
}

// ✅ UPPER_SNAKE_CASE for constants
const MAX_RETRY_ATTEMPTS = 3;
const API_BASE_URL = "https://api.example.com";

// ✅ Prefix private properties with underscore
class Calculator {
  constructor() {
    this._history = [];
  }

  _logOperation(operation) {
    this._history.push(operation);
  }
}
```

## Writing Clean Functions

### Single Responsibility Principle

Each function should do one thing well:

```javascript
// ❌ Bad - function does too many things
function processUser(userData) {
  // Validate data
  if (!userData.email || !userData.name) {
    throw new Error("Invalid user data");
  }

  // Format data
  userData.email = userData.email.toLowerCase();
  userData.name = userData.name.trim();

  // Save to database
  database.save(userData);

  // Send welcome email
  emailService.sendWelcome(userData.email);

  // Log activity
  logger.log(`User created: ${userData.email}`);
}

// ✅ Good - separate concerns
function validateUserData(userData) {
  if (!userData.email || !userData.name) {
    throw new Error("Invalid user data");
  }
}

function formatUserData(userData) {
  return {
    ...userData,
    email: userData.email.toLowerCase(),
    name: userData.name.trim(),
  };
}

function createUser(userData) {
  validateUserData(userData);
  const formattedData = formatUserData(userData);

  const user = database.save(formattedData);
  emailService.sendWelcome(user.email);
  logger.log(`User created: ${user.email}`);

  return user;
}
```

### Function Size

Keep functions small and focused:

```javascript
// ❌ Bad - too long and complex
function processOrder(order) {
  if (!order.items || order.items.length === 0) {
    throw new Error("Order must have items");
  }

  let total = 0;
  for (let item of order.items) {
    if (!item.price || item.price < 0) {
      throw new Error("Invalid item price");
    }
    if (!item.quantity || item.quantity < 1) {
      throw new Error("Invalid item quantity");
    }
    total += item.price * item.quantity;
  }

  if (order.coupon) {
    if (order.coupon.type === "percentage") {
      total = total * (1 - order.coupon.value / 100);
    } else if (order.coupon.type === "fixed") {
      total = Math.max(0, total - order.coupon.value);
    }
  }

  const tax = total * 0.1;
  const shipping = total > 50 ? 0 : 5;

  return {
    subtotal: total,
    tax: tax,
    shipping: shipping,
    total: total + tax + shipping,
  };
}

// ✅ Good - broken into smaller functions
function validateOrderItems(items) {
  if (!items || items.length === 0) {
    throw new Error("Order must have items");
  }

  for (let item of items) {
    if (!item.price || item.price < 0) {
      throw new Error("Invalid item price");
    }
    if (!item.quantity || item.quantity < 1) {
      throw new Error("Invalid item quantity");
    }
  }
}

function calculateSubtotal(items) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

function applyCoupon(subtotal, coupon) {
  if (!coupon) return subtotal;

  if (coupon.type === "percentage") {
    return subtotal * (1 - coupon.value / 100);
  } else if (coupon.type === "fixed") {
    return Math.max(0, subtotal - coupon.value);
  }

  return subtotal;
}

function calculateShipping(subtotal) {
  return subtotal > 50 ? 0 : 5;
}

function processOrder(order) {
  validateOrderItems(order.items);

  const subtotal = calculateSubtotal(order.items);
  const discountedTotal = applyCoupon(subtotal, order.coupon);
  const tax = discountedTotal * 0.1;
  const shipping = calculateShipping(discountedTotal);

  return {
    subtotal: discountedTotal,
    tax: tax,
    shipping: shipping,
    total: discountedTotal + tax + shipping,
  };
}
```

## Commenting Best Practices

### When to Comment

```javascript
// ✅ Good - explain WHY, not WHAT
function calculateDiscount(price, customerType) {
  // Premium customers get 15% discount to encourage loyalty
  if (customerType === "premium") {
    return price * 0.15;
  }

  // Regular customers get 5% discount on orders over $100
  // to incentivize larger purchases
  if (price > 100) {
    return price * 0.05;
  }

  return 0;
}

// ✅ Good - explain complex algorithms
function quickSort(array) {
  if (array.length <= 1) return array;

  // Choose pivot as middle element to improve performance
  // on already-sorted arrays
  const pivotIndex = Math.floor(array.length / 2);
  const pivot = array[pivotIndex];

  const less = [];
  const greater = [];

  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) continue;

    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
}

// ✅ Good - document unusual solutions
function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    // Clear previous timeout to reset the delay
    clearTimeout(timeoutId);

    // Capture 'this' context for the debounced function
    const context = this;

    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}
```

### When NOT to Comment

```javascript
// ❌ Bad - obvious comments
let age = 25; // Set age to 25
const users = []; // Create empty array for users

// ❌ Bad - comments that repeat the code
function addNumbers(a, b) {
  // Add a and b and return the result
  return a + b;
}

// ❌ Bad - outdated comments
function calculateTax(price) {
  // Tax rate is 8% (this comment is wrong if rate changed)
  return price * 0.1;
}
```

### JSDoc Comments

For functions that will be used by others, use JSDoc format:

```javascript
/**
 * Calculates the distance between two geographical points
 * @param {number} lat1 - Latitude of first point
 * @param {number} lon1 - Longitude of first point
 * @param {number} lat2 - Latitude of second point
 * @param {number} lon2 - Longitude of second point
 * @returns {number} Distance in kilometers
 * @example
 * const distance = calculateDistance(40.7128, -74.0060, 34.0522, -118.2437);
 * console.log(distance); // ~3944 km (New York to Los Angeles)
 */
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in kilometers
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}
```

## Code Organization

### File Structure

Organize your code logically:

```javascript
// ✅ Good - group related functionality
// utils/validation.js
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPhone(phone) {
  return /^\+?[\d\s-()]+$/.test(phone);
}

// services/userService.js
import { isValidEmail } from "../utils/validation.js";

export class UserService {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  async createUser(userData) {
    if (!isValidEmail(userData.email)) {
      throw new Error("Invalid email address");
    }

    // ... rest of the method
  }
}

// main.js
import { UserService } from "./services/userService.js";

const userService = new UserService("/api");
```

### Consistent Formatting

Use consistent indentation and spacing:

```javascript
// ✅ Good - consistent formatting
function processItems(items) {
  return items
    .filter((item) => item.active)
    .map((item) => ({
      id: item.id,
      name: item.name.trim(),
      price: parseFloat(item.price),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

// ✅ Good - consistent object formatting
const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  retries: 3,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};
```

## Error Handling

### Meaningful Error Messages

```javascript
// ❌ Bad - vague error messages
function divide(a, b) {
  if (b === 0) {
    throw new Error("Error");
  }
  return a / b;
}

// ✅ Good - specific error messages
function divide(dividend, divisor) {
  if (typeof dividend !== "number" || typeof divisor !== "number") {
    throw new Error(
      `Invalid arguments: expected numbers, got ${typeof dividend} and ${typeof divisor}`,
    );
  }

  if (divisor === 0) {
    throw new Error("Division by zero is not allowed");
  }

  return dividend / divisor;
}
```

### Fail Fast Principle

Check for errors early:

```javascript
// ✅ Good - validate inputs early
function createUser(userData) {
  // Fail fast - check all requirements upfront
  if (!userData) {
    throw new Error("User data is required");
  }

  if (!userData.email) {
    throw new Error("Email is required");
  }

  if (!isValidEmail(userData.email)) {
    throw new Error("Invalid email format");
  }

  if (!userData.name || userData.name.trim().length < 2) {
    throw new Error("Name must be at least 2 characters long");
  }

  // Now proceed with creation
  return database.save({
    email: userData.email.toLowerCase(),
    name: userData.name.trim(),
  });
}
```

## Performance Considerations

### Avoid Premature Optimization

```javascript
// ✅ Good - prioritize readability first
function findUser(users, email) {
  return users.find((user) => user.email === email);
}

// Only optimize if performance becomes an issue:
function findUserOptimized(users, email) {
  // Use Map for O(1) lookup if frequently searching large datasets
  if (!this._userEmailMap) {
    this._userEmailMap = new Map(users.map((user) => [user.email, user]));
  }
  return this._userEmailMap.get(email);
}
```

### Efficient DOM Manipulation

```javascript
// ❌ Bad - multiple DOM queries
function updateUserList(users) {
  const list = document.querySelector("#user-list");
  list.innerHTML = "";

  users.forEach((user) => {
    const item = document.createElement("li");
    item.textContent = user.name;
    list.appendChild(item); // Triggers reflow on each append
  });
}

// ✅ Good - batch DOM updates
function updateUserList(users) {
  const list = document.querySelector("#user-list");
  const fragment = document.createDocumentFragment();

  users.forEach((user) => {
    const item = document.createElement("li");
    item.textContent = user.name;
    fragment.appendChild(item);
  });

  list.innerHTML = "";
  list.appendChild(fragment); // Single reflow
}
```

## Testing and Debugging

### Write Testable Code

```javascript
// ✅ Good - pure functions are easy to test
function calculateTax(price, taxRate = 0.1) {
  if (price < 0) {
    throw new Error("Price cannot be negative");
  }
  return price * taxRate;
}

// ✅ Good - dependency injection for testing
class OrderService {
  constructor(database, emailService) {
    this.database = database;
    this.emailService = emailService;
  }

  async processOrder(order) {
    const savedOrder = await this.database.save(order);
    await this.emailService.sendConfirmation(order.customerEmail);
    return savedOrder;
  }
}
```

### Debugging-Friendly Code

```javascript
// ✅ Good - add debugging information
function processPayment(paymentData) {
  console.log("Processing payment:", {
    amount: paymentData.amount,
    currency: paymentData.currency,
    paymentMethod: paymentData.method,
  });

  try {
    const result = paymentGateway.charge(paymentData);
    console.log("Payment successful:", result.transactionId);
    return result;
  } catch (error) {
    console.error("Payment failed:", {
      error: error.message,
      paymentData: paymentData,
      timestamp: new Date().toISOString(),
    });
    throw error;
  }
}
```

## Common Anti-Patterns to Avoid

### Magic Numbers

```javascript
// ❌ Bad - magic numbers
function calculateDiscount(price) {
  if (price > 100) {
    return price * 0.1;
  }
  return 0;
}

// ✅ Good - named constants
const DISCOUNT_THRESHOLD = 100;
const DISCOUNT_RATE = 0.1;

function calculateDiscount(price) {
  if (price > DISCOUNT_THRESHOLD) {
    return price * DISCOUNT_RATE;
  }
  return 0;
}
```

### Deeply Nested Code

```javascript
// ❌ Bad - pyramid of doom
function processUser(user) {
  if (user) {
    if (user.isActive) {
      if (user.hasPermission) {
        if (user.email) {
          // Do something
        }
      }
    }
  }
}

// ✅ Good - early returns
function processUser(user) {
  if (!user) return;
  if (!user.isActive) return;
  if (!user.hasPermission) return;
  if (!user.email) return;

  // Do something
}
```

## Key Takeaways

1. **Prioritize readability**: Code is read more than written
2. **Use meaningful names**: Variables and functions should be self-documenting
3. **Keep functions small**: One responsibility per function
4. **Comment the WHY, not the WHAT**: Explain reasoning, not obvious actions
5. **Be consistent**: Follow established conventions and patterns
6. **Handle errors gracefully**: Provide meaningful error messages
7. **Organize code logically**: Group related functionality together
8. **Test your code**: Write testable, debuggable functions

## Practice Exercises

1. Refactor a complex function into smaller, focused functions
2. Review existing code and improve variable/function names
3. Add proper error handling to a network request function
4. Organize a messy JavaScript file into logical modules
5. Write JSDoc comments for a utility library

Remember: Good code is not just code that works—it's code that can be easily understood, maintained, and extended by others (including your future self)!
