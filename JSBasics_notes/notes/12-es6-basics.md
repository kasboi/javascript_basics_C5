# ES6+ Basics

> **Topic**: ES6+ Basics  
> **Concepts Covered**: Destructuring, template literals, default parameters

## Introduction to ES6+

ES6 (ECMAScript 2015) and later versions introduced many features that make JavaScript more powerful and easier to write. These are modern JavaScript features that you'll see in contemporary codebases.

## Template Literals

Template literals provide a cleaner way to work with strings, especially when including variables or expressions.

### Basic Template Literals

```javascript
// Old way with concatenation
const name = "Alice";
const age = 25;
const message =
  "Hello, my name is " + name + " and I am " + age + " years old.";

// New way with template literals
const message2 = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(message2); // "Hello, my name is Alice and I am 25 years old."
```

### Multi-line Strings

```javascript
// Old way - difficult to read
const html =
  "<div>\n" +
  "  <h1>Welcome</h1>\n" +
  "  <p>This is a paragraph</p>\n" +
  "</div>";

// New way - much cleaner
const html2 = `
  <div>
    <h1>Welcome</h1>
    <p>This is a paragraph</p>
  </div>
`;
```

### Expressions in Template Literals

```javascript
const a = 10;
const b = 20;

console.log(`The sum of ${a} and ${b} is ${a + b}`); // "The sum of 10 and 20 is 30"
console.log(`Today is ${new Date().toDateString()}`); // "Today is Mon Dec 04 2023"

// Function calls
function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

const price = 19.99;
console.log(`The item costs ${formatPrice(price)}`); // "The item costs $19.99"
```

### Template Literals with Objects

```javascript
const user = {
  name: "John Doe",
  email: "john@example.com",
  role: "admin",
};

const userCard = `
  <div class="user-card">
    <h3>${user.name}</h3>
    <p>Email: ${user.email}</p>
    <p>Role: ${user.role.toUpperCase()}</p>
  </div>
`;
```

## Default Parameters

Default parameters allow you to set default values for function parameters.

### Basic Default Parameters

```javascript
// Old way - manual default checking
function greet(name, greeting) {
  if (greeting === undefined) {
    greeting = "Hello";
  }
  return greeting + ", " + name + "!";
}

// New way - default parameters
function greet(name, greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet("Bob", "Hi")); // "Hi, Bob!"
```

### Multiple Default Parameters

```javascript
function createUser(name, age = 18, role = "user", active = true) {
  return {
    name,
    age,
    role,
    active,
  };
}

console.log(createUser("Alice"));
// { name: "Alice", age: 18, role: "user", active: true }

console.log(createUser("Bob", 25));
// { name: "Bob", age: 25, role: "user", active: true }

console.log(createUser("Charlie", 30, "admin"));
// { name: "Charlie", age: 30, role: "admin", active: true }
```

### Default Parameters with Expressions

```javascript
function calculateTotal(price, tax = price * 0.1, shipping = 5) {
  return price + tax + shipping;
}

console.log(calculateTotal(100)); // 100 + 10 + 5 = 115
console.log(calculateTotal(100, 15)); // 100 + 15 + 5 = 120
console.log(calculateTotal(100, 15, 0)); // 100 + 15 + 0 = 115

// Default can be function calls
function getTimestamp() {
  return new Date().toISOString();
}

function logMessage(message, timestamp = getTimestamp()) {
  console.log(`[${timestamp}] ${message}`);
}
```

## Destructuring

Destructuring allows you to extract values from arrays or properties from objects into variables.

### Array Destructuring

```javascript
const numbers = [1, 2, 3, 4, 5];

// Old way
const first = numbers[0];
const second = numbers[1];
const third = numbers[2];

// New way - array destructuring
const [first, second, third] = numbers;
console.log(first, second, third); // 1 2 3

// Skip elements
const [one, , three, , five] = numbers;
console.log(one, three, five); // 1 3 5

// Rest operator
const [head, ...tail] = numbers;
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]
```

### Object Destructuring

```javascript
const person = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
  city: "New York",
};

// Old way
const name = person.name;
const age = person.age;
const email = person.email;

// New way - object destructuring
const { name, age, email } = person;
console.log(name, age, email); // "Alice" 30 "alice@example.com"

// Rename variables
const { name: fullName, age: years } = person;
console.log(fullName, years); // "Alice" 30

// Default values
const { name, age, phone = "Not provided" } = person;
console.log(phone); // "Not provided"
```

### Nested Destructuring

```javascript
const user = {
  id: 1,
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "Boston",
    zipCode: "02101",
  },
  hobbies: ["reading", "swimming", "coding"],
};

// Destructure nested object
const {
  name,
  address: { city, zipCode },
  hobbies: [firstHobby, secondHobby],
} = user;

console.log(name); // "John Doe"
console.log(city); // "Boston"
console.log(zipCode); // "02101"
console.log(firstHobby); // "reading"
console.log(secondHobby); // "swimming"
```

### Function Parameter Destructuring

```javascript
// Object destructuring in function parameters
function createUserProfile({ name, age, email, role = "user" }) {
  return `
    <div class="profile">
      <h2>${name}</h2>
      <p>Age: ${age}</p>
      <p>Email: ${email}</p>
      <p>Role: ${role}</p>
    </div>
  `;
}

const userData = {
  name: "Alice Johnson",
  age: 28,
  email: "alice@example.com",
};

console.log(createUserProfile(userData));

// Array destructuring in function parameters
function calculateDistance([x1, y1], [x2, y2]) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

const point1 = [0, 0];
const point2 = [3, 4];
console.log(calculateDistance(point1, point2)); // 5
```

## Practical Examples

### Configuration Objects

```javascript
function setupServer({
  port = 3000,
  host = "localhost",
  database = "app_db",
  ssl = false,
  debug = false,
} = {}) {
  return {
    server: `${ssl ? "https" : "http"}://${host}:${port}`,
    database,
    debug,
  };
}

// Using defaults
console.log(setupServer());
// { server: "http://localhost:3000", database: "app_db", debug: false }

// Custom configuration
console.log(
  setupServer({
    port: 8080,
    ssl: true,
    debug: true,
  }),
);
// { server: "https://localhost:8080", database: "app_db", debug: true }
```

### API Response Handling

```javascript
// Simulate API response
const apiResponse = {
  status: "success",
  data: {
    user: {
      id: 123,
      name: "John Doe",
      email: "john@example.com",
    },
    posts: [
      { id: 1, title: "First Post", content: "Hello World" },
      { id: 2, title: "Second Post", content: "Learning ES6" },
    ],
  },
  metadata: {
    total: 2,
    page: 1,
    limit: 10,
  },
};

// Extract what we need with destructuring
const {
  status,
  data: {
    user: { name, email },
    posts,
  },
  metadata: { total },
} = apiResponse;

console.log(`Status: ${status}`);
console.log(`User: ${name} (${email})`);
console.log(`Posts: ${total} total`);
posts.forEach((post) => {
  console.log(`- ${post.title}`);
});
```

### Form Data Processing

```javascript
function processFormData({
  firstName,
  lastName,
  email,
  age = null,
  newsletter = false,
  preferences = {},
}) {
  // Template literal for email
  const welcomeMessage = `
    Hello ${firstName} ${lastName},
    
    Thank you for signing up with ${email}.
    ${newsletter ? "You will receive our newsletter." : ""}
    ${age ? `We see you are ${age} years old.` : ""}
  `;

  return {
    fullName: `${firstName} ${lastName}`,
    email,
    age,
    newsletter,
    welcomeMessage: welcomeMessage.trim(),
    preferences,
  };
}

const formData = {
  firstName: "Jane",
  lastName: "Smith",
  email: "jane@example.com",
  age: 25,
  newsletter: true,
  preferences: {
    theme: "dark",
    notifications: true,
  },
};

const result = processFormData(formData);
console.log(result);
```

### Swapping Variables

```javascript
// Old way - requires temporary variable
let a = 1;
let b = 2;
let temp = a;
a = b;
b = temp;

// New way - destructuring assignment
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x, y); // 2 1
```

### Working with Arrays

```javascript
const colors = ["red", "green", "blue", "yellow", "purple"];

// Get first, second, and rest
const [primary, secondary, ...otherColors] = colors;
console.log(primary); // "red"
console.log(secondary); // "green"
console.log(otherColors); // ["blue", "yellow", "purple"]

// Function that returns multiple values
function getCoordinates() {
  return [Math.random() * 100, Math.random() * 100];
}

const [x, y] = getCoordinates();
console.log(`Position: (${x.toFixed(2)}, ${y.toFixed(2)})`);
```

## Best Practices

### Template Literals

1. **Use for string interpolation**: Instead of concatenation
2. **Multi-line strings**: Perfect for HTML templates
3. **Complex expressions**: Keep them simple and readable

```javascript
// ✅ Good
const message = `Welcome, ${user.name}!`;

// ❌ Avoid complex expressions
const message = `User ${user.name} has ${
  user.posts.filter((p) => p.published).length
} published posts`;

// ✅ Better - extract to variable
const publishedCount = user.posts.filter((p) => p.published).length;
const message = `User ${user.name} has ${publishedCount} published posts`;
```

### Default Parameters

1. **Use for optional parameters**: Especially in configuration functions
2. **Simple defaults**: Avoid complex expressions when possible
3. **Document defaults**: Make it clear what the defaults are

### Destructuring

1. **Use meaningful names**: When renaming destructured variables
2. **Don't over-destructure**: Keep it readable
3. **Provide defaults**: For optional properties

```javascript
// ✅ Good - clear and simple
const { name, email } = user;

// ❌ Too complex - hard to read
const {
  user: {
    profile: {
      personal: { name, age },
      contact: { email, phone },
    },
  },
} = response;

// ✅ Better - step by step
const { user } = response;
const { profile } = user;
const { personal, contact } = profile;
const { name, age } = personal;
const { email, phone } = contact;
```

## Browser Support

These ES6+ features are supported in all modern browsers. For older browsers (like IE11), you might need:

- **Babel**: Transpiles modern JavaScript to older syntax
- **Polyfills**: For missing functionality
- **Feature detection**: Check if features are available

## Key Takeaways

- **Template literals**: Use `` ` `` for string interpolation and multi-line strings
- **Default parameters**: Set default values directly in function signatures
- **Destructuring**: Extract values from arrays/objects cleanly
- **Cleaner code**: These features make JavaScript more readable and maintainable
- **Modern standard**: Essential for contemporary JavaScript development

## Practice Exercises

1. Convert old-style string concatenation to template literals
2. Refactor functions to use default parameters
3. Practice destructuring with complex nested objects
4. Create a configuration system using all three features
5. Build a simple templating system with template literals
