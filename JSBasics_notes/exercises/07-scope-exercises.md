# Topic 7: Scope - Exercises

## Multiple Choice Questions

### Question 1

What is the difference between `var`, `let`, and `const` in terms of scope?
A) No difference in scope
B) `var` is function-scoped, `let` and `const` are block-scoped
C) All are block-scoped
D) All are function-scoped

**Answer: B**
**Explanation:** `var` is function-scoped (or globally scoped), while `let` and `const` are block-scoped.

### Question 2

What will this code output?

```javascript
function test() {
  if (true) {
    var a = 1;
    let b = 2;
  }
  console.log(a); // ?
  console.log(b); // ?
}
```

A) 1, 2
B) 1, undefined
C) 1, ReferenceError
D) undefined, ReferenceError

**Answer: C**
**Explanation:** `var a` is function-scoped so it's accessible, but `let b` is block-scoped and throws a ReferenceError when accessed outside its block.

### Question 3

What is a closure in JavaScript?
A) A function that's closed to modifications
B) A function that has access to variables in its outer scope
C) A function that can't be called
D) A private function

**Answer: B**
**Explanation:** A closure is a function that has access to variables from its outer (enclosing) scope even after the outer function has finished executing.

### Question 4

What will this code output?

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

A) 0, 1, 2
B) 3, 3, 3
C) 0, 0, 0
D) Error

**Answer: B**
**Explanation:** Due to `var` being function-scoped and the asynchronous nature of `setTimeout`, all callbacks reference the same `i` which has value 3 after the loop completes.

### Question 5

How can you fix the previous code to print 0, 1, 2?
A) Use `let` instead of `var`
B) Use an IIFE (Immediately Invoked Function Expression)
C) Use `const` instead of `var`
D) Both A and B

**Answer: D**
**Explanation:** Both using `let` (block scope) and IIFE (creating new scope) would capture the correct value of `i`.

### Question 6

What is the global scope in a browser environment?
A) `document`
B) `window`
C) `global`
D) `this`

**Answer: B**
**Explanation:** In browser environments, the global scope is the `window` object.

## Practical Coding Exercises

### Exercise 1: Variable Scope Demonstration

Create examples showing the difference between function scope and block scope.

```javascript
function demonstrateScope() {
  // Demonstrate var (function scope)
  if (true) {
    var functionScoped = "I'm function scoped";
  }
  console.log(functionScoped); // Should work

  // Demonstrate let (block scope)
  if (true) {
    let blockScoped = "I'm block scoped";
  }
  // console.log(blockScoped); // Would cause ReferenceError

  // Your task: Add more examples showing scope differences
}
```

**Solution:**

```javascript
function demonstrateScope() {
  console.log("=== Function vs Block Scope ===");

  // Var example - function scoped
  if (true) {
    var functionScoped = "I'm function scoped";
  }
  console.log("var outside block:", functionScoped); // Works

  // Let example - block scoped
  if (true) {
    let blockScoped = "I'm block scoped";
    console.log("let inside block:", blockScoped); // Works
  }
  // console.log(blockScoped); // ReferenceError

  // Loop example
  for (var i = 0; i < 3; i++) {
    // var i is function scoped
  }
  console.log("var after loop:", i); // 3

  for (let j = 0; j < 3; j++) {
    // let j is block scoped
  }
  // console.log(j); // ReferenceError

  // Const example
  if (true) {
    const blockConstant = "I'm a block-scoped constant";
    console.log("const inside block:", blockConstant);
  }
  // console.log(blockConstant); // ReferenceError
}
```

### Exercise 2: Closure Practice

Create a function that demonstrates closure by returning an inner function.

```javascript
function createCounter() {
  // Create a private counter variable
  // Return a function that increments and returns the counter
}

// Test your closure
const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1 (independent counter)
console.log(counter1()); // 3
```

**Solution:**

```javascript
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}
```

### Exercise 3: Module Pattern

Use closures to create a simple module with private and public methods.

```javascript
function createBankAccount(initialBalance) {
  // Private variable
  // Return object with public methods: deposit, withdraw, getBalance
}

// Test your module
const account = createBankAccount(100);
console.log(account.getBalance()); // 100
account.deposit(50);
console.log(account.getBalance()); // 150
account.withdraw(25);
console.log(account.getBalance()); // 125
```

**Solution:**

```javascript
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: function (amount) {
      if (amount > 0) {
        balance += amount;
        return `Deposited $${amount}. New balance: $${balance}`;
      }
      return "Invalid deposit amount";
    },

    withdraw: function (amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        return `Withdrew $${amount}. New balance: $${balance}`;
      }
      return "Invalid withdrawal amount or insufficient funds";
    },

    getBalance: function () {
      return balance;
    },
  };
}
```

### Exercise 4: Fix the Loop Closure Problem

Fix this code so it prints 0, 1, 2 instead of 3, 3, 3.

```javascript
// Problematic code
function problematicLoop() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log("Problem:", i);
    }, 100);
  }
}

// Fix using let
function fixedWithLet() {
  // Your solution here
}

// Fix using IIFE
function fixedWithIIFE() {
  // Your solution here
}

// Fix using bind
function fixedWithBind() {
  // Your solution here
}
```

**Solutions:**

```javascript
// Fix using let
function fixedWithLet() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log("Let solution:", i);
    }, 100);
  }
}

// Fix using IIFE
function fixedWithIIFE() {
  for (var i = 0; i < 3; i++) {
    (function (index) {
      setTimeout(function () {
        console.log("IIFE solution:", index);
      }, 100);
    })(i);
  }
}

// Fix using bind
function fixedWithBind() {
  for (var i = 0; i < 3; i++) {
    setTimeout(
      function (index) {
        console.log("Bind solution:", index);
      }.bind(null, i),
      100,
    );
  }
}
```

### Exercise 5: Scope Chain Understanding

Create nested functions to demonstrate the scope chain.

```javascript
function outerFunction(x) {
  // Create variables and inner functions to demonstrate scope chain

  function middleFunction(y) {
    // This should access x from outer scope

    function innerFunction(z) {
      // This should access x, y, and z
      // Return a message using all three variables
    }

    return innerFunction;
  }

  return middleFunction;
}

// Test the scope chain
const test = outerFunction(1)(2)(3);
console.log(test); // Should use all three values
```

**Solution:**

```javascript
function outerFunction(x) {
  console.log("Outer function, x =", x);

  function middleFunction(y) {
    console.log("Middle function, x =", x, "y =", y);

    function innerFunction(z) {
      console.log("Inner function, x =", x, "y =", y, "z =", z);
      return `Sum of x(${x}) + y(${y}) + z(${z}) = ${x + y + z}`;
    }

    return innerFunction;
  }

  return middleFunction;
}
```

## JavaScript Test Functions

```javascript
// Test function for scope exercises
function testScopeExercises() {
  console.log("=== Testing Scope Exercises ===");

  // Test createCounter
  const counter = createCounter();
  const test1 = counter() === 1 && counter() === 2;
  console.log("createCounter test:", test1 ? "PASS" : "FAIL");

  // Test createBankAccount
  const account = createBankAccount(100);
  account.deposit(50);
  const test2 = account.getBalance() === 150;
  console.log("createBankAccount test:", test2 ? "PASS" : "FAIL");

  // Test scope chain
  const scopeTest = outerFunction(1)(2)(3);
  const test3 = scopeTest.includes("6"); // Sum should be 6
  console.log("scope chain test:", test3 ? "PASS" : "FAIL");

  // Test independent counters
  const counter1 = createCounter();
  const counter2 = createCounter();
  counter1();
  counter1();
  const test4 = counter1() === 3 && counter2() === 1;
  console.log("independent closures test:", test4 ? "PASS" : "FAIL");
}

// Run tests
testScopeExercises();
```

## Challenge Problems

### Challenge 1: Function Factory with Configuration

Create a function factory that produces configured functions.

```javascript
function createValidator(config) {
  // config = { type: 'email'|'phone'|'password', options: {...} }
  // Return a validator function based on the config

  const validators = {
    email: (value, options) => {
      // Basic email validation
      return value.includes("@") && value.includes(".");
    },

    phone: (value, options) => {
      // Phone number validation
      const cleaned = value.replace(/\D/g, "");
      return cleaned.length === 10;
    },

    password: (value, options) => {
      // Password validation with configurable rules
      const minLength = options.minLength || 8;
      const requireSpecial = options.requireSpecial || false;

      if (value.length < minLength) return false;
      if (requireSpecial && !/[!@#$%^&*]/.test(value)) return false;

      return true;
    },
  };

  return function (value) {
    // Your implementation here
  };
}

// Test your factory
const emailValidator = createValidator({ type: "email" });
const passwordValidator = createValidator({
  type: "password",
  options: { minLength: 10, requireSpecial: true },
});

console.log(emailValidator("test@email.com")); // true
console.log(passwordValidator("short")); // false
console.log(passwordValidator("longenough!@")); // true
```

**Solution:**

```javascript
function createValidator(config) {
  const validators = {
    email: (value, options) => {
      return value.includes("@") && value.includes(".");
    },

    phone: (value, options) => {
      const cleaned = value.replace(/\D/g, "");
      return cleaned.length === 10;
    },

    password: (value, options) => {
      const minLength = options.minLength || 8;
      const requireSpecial = options.requireSpecial || false;

      if (value.length < minLength) return false;
      if (requireSpecial && !/[!@#$%^&*]/.test(value)) return false;

      return true;
    },
  };

  const validator = validators[config.type];
  const options = config.options || {};

  return function (value) {
    if (!validator) {
      throw new Error(`Unknown validator type: ${config.type}`);
    }
    return validator(value, options);
  };
}
```

### Challenge 2: Memoization with Closures

Create a memoization function that caches expensive function calls.

```javascript
function memoize(fn) {
  // Create a cache using closure
  // Return a function that checks cache before calling fn
}

// Test function (expensive operation)
function fibonacci(n) {
  console.log(`Calculating fibonacci(${n})`);
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFib = memoize(fibonacci);

console.log(memoizedFib(10)); // Should cache intermediate results
console.log(memoizedFib(10)); // Should use cached result
```

**Solution:**

```javascript
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      console.log("Cache hit for", key);
      return cache[key];
    }

    console.log("Cache miss for", key);
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}
```

### Challenge 3: Private Variable System

Create a system for managing private variables in objects.

```javascript
function createPrivateVars() {
  // Create a system where objects can have truly private variables
  // that can only be accessed through specific methods

  const privateStore = new WeakMap();

  return {
    create: function (publicMethods) {
      // Create object with private variables
    },

    get: function (obj, key) {
      // Get private variable
    },

    set: function (obj, key, value) {
      // Set private variable
    },
  };
}

// Usage example:
const privateVars = createPrivateVars();

const obj = privateVars.create({
  getName: function () {
    return privateVars.get(this, "name");
  },
  setName: function (name) {
    privateVars.set(this, "name", name);
  },
});

obj.setName("John");
console.log(obj.getName()); // 'John'
console.log(obj.name); // undefined (truly private)
```

**Solution:**

```javascript
function createPrivateVars() {
  const privateStore = new WeakMap();

  return {
    create: function (publicMethods) {
      const obj = {};
      privateStore.set(obj, {});

      // Copy public methods to the object
      Object.assign(obj, publicMethods);

      return obj;
    },

    get: function (obj, key) {
      const privateData = privateStore.get(obj);
      return privateData ? privateData[key] : undefined;
    },

    set: function (obj, key, value) {
      const privateData = privateStore.get(obj);
      if (privateData) {
        privateData[key] = value;
      }
    },
  };
}
```

### Challenge 4: Debounce and Throttle

Implement debounce and throttle functions using closures.

```javascript
function debounce(func, delay) {
  // Implement debounce: delay execution until after delay ms have passed
  // since the last time it was invoked
}

function throttle(func, limit) {
  // Implement throttle: limit execution to once per limit ms
}

// Test functions
const debouncedLog = debounce((msg) => console.log("Debounced:", msg), 300);
const throttledLog = throttle((msg) => console.log("Throttled:", msg), 300);

// Simulate rapid calls
for (let i = 0; i < 5; i++) {
  setTimeout(() => debouncedLog(`Message ${i}`), i * 50);
}
```

**Solution:**

```javascript
function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

function throttle(func, limit) {
  let inThrottle;

  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
```

## Debugging Exercises

### Debug Exercise 1

Find and fix the scope issue:

```javascript
var buttons = document.querySelectorAll("button");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    console.log("Button", i, "clicked"); // Always logs the same i
  });
}
```

**Issue:** `var i` is function-scoped, so all event listeners reference the same variable.
**Fix:**

```javascript
const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    console.log("Button", i, "clicked");
  });
}

// Alternative fix with IIFE:
for (var i = 0; i < buttons.length; i++) {
  (function (index) {
    buttons[index].addEventListener("click", function () {
      console.log("Button", index, "clicked");
    });
  })(i);
}
```

### Debug Exercise 2

Fix the closure memory leak:

```javascript
function createHandler() {
  const largeData = new Array(1000000).fill("data");

  return {
    process: function () {
      // Only uses a small part of largeData
      console.log(largeData[0]);
    },
  };
}

// This keeps largeData in memory even though we only need the first element
```

**Fix:**

```javascript
function createHandler() {
  const largeData = new Array(1000000).fill("data");
  const firstElement = largeData[0]; // Extract only what we need

  return {
    process: function () {
      console.log(firstElement);
    },
  };
}
```

### Debug Exercise 3

Fix the `this` binding issue in closures:

```javascript
const obj = {
  name: "MyObject",
  method: function () {
    setTimeout(function () {
      console.log(this.name); // undefined - wrong this context
    }, 100);
  },
};
```

**Fix:**

```javascript
const obj = {
  name: "MyObject",
  method: function () {
    // Solution 1: Store this reference
    const self = this;
    setTimeout(function () {
      console.log(self.name);
    }, 100);

    // Solution 2: Use arrow function
    setTimeout(() => {
      console.log(this.name);
    }, 100);

    // Solution 3: Use bind
    setTimeout(
      function () {
        console.log(this.name);
      }.bind(this),
      100,
    );
  },
};
```

## Real-World Applications

### Application 1: Configuration Manager

Create a configuration manager with private settings.

```javascript
function createConfigManager(defaultConfig) {
  let config = { ...defaultConfig };
  const listeners = [];

  return {
    get: function (key) {
      return config[key];
    },

    set: function (key, value) {
      const oldValue = config[key];
      config[key] = value;

      // Notify listeners
      listeners.forEach((listener) => {
        listener(key, value, oldValue);
      });
    },

    subscribe: function (listener) {
      listeners.push(listener);

      // Return unsubscribe function
      return function () {
        const index = listeners.indexOf(listener);
        if (index > -1) {
          listeners.splice(index, 1);
        }
      };
    },

    reset: function () {
      config = { ...defaultConfig };
    },
  };
}

// Usage
const config = createConfigManager({ theme: "light", lang: "en" });
const unsubscribe = config.subscribe((key, newVal, oldVal) => {
  console.log(`Config changed: ${key} from ${oldVal} to ${newVal}`);
});

config.set("theme", "dark"); // Triggers listener
```

### Application 2: Event Emitter with Scope Control

Create an event emitter that uses closures for namespace isolation.

```javascript
function createEventEmitter() {
  const events = {};

  return {
    on: function (event, listener) {
      if (!events[event]) {
        events[event] = [];
      }
      events[event].push(listener);
    },

    off: function (event, listenerToRemove) {
      if (!events[event]) return;

      events[event] = events[event].filter(
        (listener) => listener !== listenerToRemove,
      );
    },

    emit: function (event, ...args) {
      if (!events[event]) return;

      events[event].forEach((listener) => {
        listener(...args);
      });
    },

    once: function (event, listener) {
      const onceWrapper = (...args) => {
        listener(...args);
        this.off(event, onceWrapper);
      };
      this.on(event, onceWrapper);
    },
  };
}
```

### Application 3: Rate Limiter

Implement a rate limiter using closures.

```javascript
function createRateLimiter(maxRequests, timeWindow) {
  const requests = [];

  return function (requestHandler) {
    const now = Date.now();

    // Remove old requests outside the time window
    while (requests.length > 0 && requests[0] <= now - timeWindow) {
      requests.shift();
    }

    // Check if we've exceeded the limit
    if (requests.length >= maxRequests) {
      throw new Error("Rate limit exceeded");
    }

    // Add current request timestamp
    requests.push(now);

    // Execute the request
    return requestHandler();
  };
}

// Usage
const limitedFetch = createRateLimiter(5, 1000); // 5 requests per second

try {
  limitedFetch(() => console.log("API call made"));
} catch (error) {
  console.log(error.message);
}
```

## Self-Assessment Checklist

- [ ] I understand the difference between function scope and block scope
- [ ] I know when to use `var`, `let`, and `const`
- [ ] I understand what closures are and how they work
- [ ] I can identify and fix scope-related bugs
- [ ] I understand the scope chain and variable lookup
- [ ] I can use closures to create private variables
- [ ] I can implement the module pattern using closures
- [ ] I understand how `this` behaves in different scopes
- [ ] I can debug common scope and closure issues
- [ ] I can apply scope concepts to solve real-world problems

## Additional Practice Resources

1. Practice with nested function examples
2. Implement various design patterns using closures
3. Debug scope-related issues in existing code
4. Create utility functions that leverage closures
5. Build modules with private and public interfaces
6. Practice with the temporal dead zone and hoisting
7. Experiment with different ways to bind `this`

---

**Next Topic:** [08 - Arrays and Objects](./08-arrays-and-objects-exercises.md)
