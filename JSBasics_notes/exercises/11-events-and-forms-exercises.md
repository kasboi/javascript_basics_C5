# Topic 11: Events and Forms - Exercises

## Multiple Choice Questions

### Question 1

Which method is used to add an event listener to an element?
A) `element.addEvent()`
B) `element.addEventListener()`
C) `element.on()`
D) `element.listen()`

**Answer: B**
**Explanation:** `addEventListener()` is the standard method for attaching event handlers to elements.

### Question 2

What is event bubbling?
A) Events that occur in bubbles
B) Events that travel from child to parent elements
C) Events that travel from parent to child elements
D) Events that are cancelled

**Answer: B**
**Explanation:** Event bubbling is when events propagate from the target element up through its ancestors.

### Question 3

How do you prevent the default behavior of an event?
A) `event.stop()`
B) `event.cancel()`
C) `event.preventDefault()`
D) `event.stopPropagation()`

**Answer: C**
**Explanation:** `preventDefault()` prevents the default action associated with the event.

### Question 4

Which property gives you the element that triggered the event?
A) `event.element`
B) `event.target`
C) `event.source`
D) `event.origin`

**Answer: B**
**Explanation:** `event.target` refers to the element that originally triggered the event.

### Question 5

What's the difference between `event.target` and `event.currentTarget`?
A) No difference
B) `target` is the element that triggered the event, `currentTarget` is the element the listener is attached to
C) `currentTarget` is the element that triggered the event, `target` is the element the listener is attached to
D) They both refer to the same element

**Answer: B**
**Explanation:** `target` is where the event originated, `currentTarget` is where the event listener is attached.

### Question 6

How do you get form data in JavaScript?
A) `form.getData()`
B) `new FormData(form)`
C) `form.values()`
D) `form.serialize()`

**Answer: B**
**Explanation:** `FormData` constructor creates an object containing form field names and values.

## Practical Coding Exercises

### Exercise 1: Basic Event Handling

Create event handlers for different types of user interactions.

```html
<!-- HTML for testing -->
<div id="event-container">
  <button id="click-btn">Click Me</button>
  <input type="text" id="text-input" placeholder="Type something..." />
  <div
    id="hover-area"
    style="width: 200px; height: 100px; background: lightblue;"
  >
    Hover over me
  </div>
  <select id="dropdown">
    <option value="">Choose an option</option>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
  </select>
</div>
<div id="output"></div>
```

```javascript
function setupBasicEvents() {
  const output = document.getElementById("output");

  // Button click event
  const button = document.getElementById("click-btn");
  // Your code here - add click event listener

  // Input events (input, focus, blur)
  const textInput = document.getElementById("text-input");
  // Your code here - add input, focus, and blur event listeners

  // Mouse events (mouseenter, mouseleave)
  const hoverArea = document.getElementById("hover-area");
  // Your code here - add mouseenter and mouseleave event listeners

  // Change event for select
  const dropdown = document.getElementById("dropdown");
  // Your code here - add change event listener

  // Keyboard events
  document.addEventListener("keydown", function (e) {
    // Your code here - handle specific keys (e.g., Enter, Escape)
  });

  function logEvent(message) {
    const p = document.createElement("p");
    p.textContent = `${new Date().toLocaleTimeString()}: ${message}`;
    output.appendChild(p);

    // Keep only last 10 messages
    while (output.children.length > 10) {
      output.removeChild(output.firstChild);
    }
  }

  return { logEvent };
}

// Test your function
setupBasicEvents();
```

**Solution:**

```javascript
function setupBasicEvents() {
  const output = document.getElementById("output");

  // Button click event
  const button = document.getElementById("click-btn");
  button.addEventListener("click", function (e) {
    logEvent("Button clicked!");
  });

  // Input events (input, focus, blur)
  const textInput = document.getElementById("text-input");

  textInput.addEventListener("input", function (e) {
    logEvent(`Input value: ${e.target.value}`);
  });

  textInput.addEventListener("focus", function (e) {
    logEvent("Input focused");
    e.target.style.backgroundColor = "#ffffcc";
  });

  textInput.addEventListener("blur", function (e) {
    logEvent("Input blurred");
    e.target.style.backgroundColor = "";
  });

  // Mouse events (mouseenter, mouseleave)
  const hoverArea = document.getElementById("hover-area");

  hoverArea.addEventListener("mouseenter", function (e) {
    logEvent("Mouse entered hover area");
    e.target.style.backgroundColor = "lightgreen";
  });

  hoverArea.addEventListener("mouseleave", function (e) {
    logEvent("Mouse left hover area");
    e.target.style.backgroundColor = "lightblue";
  });

  // Change event for select
  const dropdown = document.getElementById("dropdown");
  dropdown.addEventListener("change", function (e) {
    logEvent(`Dropdown changed to: ${e.target.value}`);
  });

  // Keyboard events
  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      logEvent("Enter key pressed");
    } else if (e.key === "Escape") {
      logEvent("Escape key pressed");
      output.innerHTML = ""; // Clear output
    }
  });

  function logEvent(message) {
    const p = document.createElement("p");
    p.textContent = `${new Date().toLocaleTimeString()}: ${message}`;
    output.appendChild(p);

    // Keep only last 10 messages
    while (output.children.length > 10) {
      output.removeChild(output.firstChild);
    }
  }

  return { logEvent };
}
```

### Exercise 2: Form Validation and Submission

Create a comprehensive form with validation.

```html
<!-- HTML for testing -->
<form id="registration-form">
  <div class="form-group">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required />
    <span class="error-message" id="username-error"></span>
  </div>

  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required />
    <span class="error-message" id="email-error"></span>
  </div>

  <div class="form-group">
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required />
    <span class="error-message" id="password-error"></span>
  </div>

  <div class="form-group">
    <label for="confirm-password">Confirm Password:</label>
    <input
      type="password"
      id="confirm-password"
      name="confirmPassword"
      required
    />
    <span class="error-message" id="confirm-password-error"></span>
  </div>

  <div class="form-group">
    <label for="age">Age:</label>
    <input type="number" id="age" name="age" min="13" max="120" required />
    <span class="error-message" id="age-error"></span>
  </div>

  <div class="form-group">
    <label>
      <input type="checkbox" id="terms" name="terms" required />
      I agree to the terms and conditions
    </label>
    <span class="error-message" id="terms-error"></span>
  </div>

  <button type="submit">Register</button>
</form>
```

```javascript
function setupFormValidation() {
  const form = document.getElementById("registration-form");

  // Validation rules
  const validators = {
    username: function (value) {
      // Username should be 3-20 characters, alphanumeric only
    },

    email: function (value) {
      // Basic email validation
    },

    password: function (value) {
      // Password should be at least 8 characters with uppercase, lowercase, and number
    },

    confirmPassword: function (value) {
      // Should match password
    },

    age: function (value) {
      // Should be between 13 and 120
    },

    terms: function (checked) {
      // Must be checked
    },
  };

  // Real-time validation
  Object.keys(validators).forEach((fieldName) => {
    const field =
      document.getElementById(fieldName) ||
      document.getElementById(
        fieldName.replace(/([A-Z])/g, "-$1").toLowerCase(),
      );

    if (field) {
      field.addEventListener("blur", () => validateField(fieldName));
      field.addEventListener("input", () => clearError(fieldName));
    }
  });

  // Form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validate all fields
    let isValid = true;
    Object.keys(validators).forEach((fieldName) => {
      if (!validateField(fieldName)) {
        isValid = false;
      }
    });

    if (isValid) {
      // Process form data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      console.log("Form submitted successfully:", data);

      // Show success message
      showMessage("Registration successful!", "success");
    } else {
      showMessage("Please fix the errors below", "error");
    }
  });

  function validateField(fieldName) {
    // Your implementation here
  }

  function showError(fieldName, message) {
    // Your implementation here
  }

  function clearError(fieldName) {
    // Your implementation here
  }

  function showMessage(text, type) {
    // Your implementation here
  }
}

// Test your function
setupFormValidation();
```

**Solution:**

```javascript
function setupFormValidation() {
  const form = document.getElementById("registration-form");

  // Validation rules
  const validators = {
    username: function (value) {
      if (value.length < 3 || value.length > 20) {
        return "Username must be 3-20 characters long";
      }
      if (!/^[a-zA-Z0-9]+$/.test(value)) {
        return "Username can only contain letters and numbers";
      }
      return null;
    },

    email: function (value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return "Please enter a valid email address";
      }
      return null;
    },

    password: function (value) {
      if (value.length < 8) {
        return "Password must be at least 8 characters long";
      }
      if (!/[A-Z]/.test(value)) {
        return "Password must contain at least one uppercase letter";
      }
      if (!/[a-z]/.test(value)) {
        return "Password must contain at least one lowercase letter";
      }
      if (!/\d/.test(value)) {
        return "Password must contain at least one number";
      }
      return null;
    },

    confirmPassword: function (value) {
      const password = document.getElementById("password").value;
      if (value !== password) {
        return "Passwords do not match";
      }
      return null;
    },

    age: function (value) {
      const age = parseInt(value);
      if (isNaN(age) || age < 13 || age > 120) {
        return "Age must be between 13 and 120";
      }
      return null;
    },

    terms: function (checked) {
      if (!checked) {
        return "You must agree to the terms and conditions";
      }
      return null;
    },
  };

  // Real-time validation
  Object.keys(validators).forEach((fieldName) => {
    const field =
      document.getElementById(fieldName) ||
      document.getElementById(
        fieldName.replace(/([A-Z])/g, "-$1").toLowerCase(),
      );

    if (field) {
      field.addEventListener("blur", () => validateField(fieldName));
      field.addEventListener("input", () => clearError(fieldName));
    }
  });

  // Form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validate all fields
    let isValid = true;
    Object.keys(validators).forEach((fieldName) => {
      if (!validateField(fieldName)) {
        isValid = false;
      }
    });

    if (isValid) {
      // Process form data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      console.log("Form submitted successfully:", data);

      // Show success message
      showMessage("Registration successful!", "success");
      form.reset();
    } else {
      showMessage("Please fix the errors below", "error");
    }
  });

  function validateField(fieldName) {
    const field =
      document.getElementById(fieldName) ||
      document.getElementById(
        fieldName.replace(/([A-Z])/g, "-$1").toLowerCase(),
      );

    if (!field) return true;

    const value = field.type === "checkbox" ? field.checked : field.value;
    const error = validators[fieldName](value);

    if (error) {
      showError(fieldName, error);
      return false;
    } else {
      clearError(fieldName);
      return true;
    }
  }

  function showError(fieldName, message) {
    const errorElement =
      document.getElementById(fieldName + "-error") ||
      document.getElementById(
        fieldName.replace(/([A-Z])/g, "-$1").toLowerCase() + "-error",
      );

    if (errorElement) {
      errorElement.textContent = message;
      errorElement.style.color = "red";
      errorElement.style.fontSize = "12px";
    }

    const field =
      document.getElementById(fieldName) ||
      document.getElementById(
        fieldName.replace(/([A-Z])/g, "-$1").toLowerCase(),
      );
    if (field) {
      field.style.borderColor = "red";
    }
  }

  function clearError(fieldName) {
    const errorElement =
      document.getElementById(fieldName + "-error") ||
      document.getElementById(
        fieldName.replace(/([A-Z])/g, "-$1").toLowerCase() + "-error",
      );

    if (errorElement) {
      errorElement.textContent = "";
    }

    const field =
      document.getElementById(fieldName) ||
      document.getElementById(
        fieldName.replace(/([A-Z])/g, "-$1").toLowerCase(),
      );
    if (field) {
      field.style.borderColor = "";
    }
  }

  function showMessage(text, type) {
    // Remove existing message
    const existingMessage = document.querySelector(".form-message");
    if (existingMessage) {
      existingMessage.remove();
    }

    const message = document.createElement("div");
    message.className = "form-message";
    message.textContent = text;
    message.style.padding = "10px";
    message.style.marginBottom = "10px";
    message.style.borderRadius = "4px";

    if (type === "success") {
      message.style.backgroundColor = "#d4edda";
      message.style.color = "#155724";
      message.style.border = "1px solid #c3e6cb";
    } else {
      message.style.backgroundColor = "#f8d7da";
      message.style.color = "#721c24";
      message.style.border = "1px solid #f5c6cb";
    }

    form.insertBefore(message, form.firstChild);

    // Auto-remove after 5 seconds
    setTimeout(() => {
      if (message.parentNode) {
        message.parentNode.removeChild(message);
      }
    }, 5000);
  }
}
```

### Exercise 3: Event Delegation

Implement event delegation for dynamic content.

```javascript
function setupEventDelegation() {
  // Create a container for dynamic list items
  const container = document.createElement("div");
  container.id = "todo-container";
  document.body.appendChild(container);

  container.innerHTML = `
        <h3>Todo List with Event Delegation</h3>
        <input type="text" id="todo-input" placeholder="Add new todo...">
        <button id="add-todo">Add Todo</button>
        <ul id="todo-list"></ul>
    `;

  const todoList = document.getElementById("todo-list");
  const todoInput = document.getElementById("todo-input");
  const addBtn = document.getElementById("add-todo");

  // Event delegation for todo list
  todoList.addEventListener("click", function (e) {
    // Handle different button clicks using event delegation
    // Your code here
  });

  // Add new todo
  addBtn.addEventListener("click", addTodo);
  todoInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTodo();
    }
  });

  function addTodo() {
    const text = todoInput.value.trim();
    if (text) {
      const li = document.createElement("li");
      li.innerHTML = `
                <span class="todo-text">${text}</span>
                <button class="edit-btn" data-action="edit">Edit</button>
                <button class="delete-btn" data-action="delete">Delete</button>
                <button class="complete-btn" data-action="complete">Complete</button>
            `;
      li.style.padding = "10px";
      li.style.margin = "5px 0";
      li.style.border = "1px solid #ddd";
      li.style.borderRadius = "4px";

      todoList.appendChild(li);
      todoInput.value = "";
    }
  }

  function editTodo(todoItem) {
    // Your implementation here
  }

  function deleteTodo(todoItem) {
    // Your implementation here
  }

  function completeTodo(todoItem) {
    // Your implementation here
  }

  // Add some initial todos
  todoInput.value = "Learn JavaScript events";
  addTodo();
  todoInput.value = "Practice event delegation";
  addTodo();
  todoInput.value = "Build awesome web apps";
  addTodo();
}

// Test your function
setupEventDelegation();
```

**Solution:**

```javascript
function setupEventDelegation() {
  // Create a container for dynamic list items
  const container = document.createElement("div");
  container.id = "todo-container";
  document.body.appendChild(container);

  container.innerHTML = `
        <h3>Todo List with Event Delegation</h3>
        <input type="text" id="todo-input" placeholder="Add new todo...">
        <button id="add-todo">Add Todo</button>
        <ul id="todo-list"></ul>
    `;

  const todoList = document.getElementById("todo-list");
  const todoInput = document.getElementById("todo-input");
  const addBtn = document.getElementById("add-todo");

  // Event delegation for todo list
  todoList.addEventListener("click", function (e) {
    const action = e.target.dataset.action;
    const todoItem = e.target.closest("li");

    if (!todoItem) return;

    switch (action) {
      case "edit":
        editTodo(todoItem);
        break;
      case "delete":
        deleteTodo(todoItem);
        break;
      case "complete":
        completeTodo(todoItem);
        break;
    }
  });

  // Add new todo
  addBtn.addEventListener("click", addTodo);
  todoInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTodo();
    }
  });

  function addTodo() {
    const text = todoInput.value.trim();
    if (text) {
      const li = document.createElement("li");
      li.innerHTML = `
                <span class="todo-text">${text}</span>
                <button class="edit-btn" data-action="edit">Edit</button>
                <button class="delete-btn" data-action="delete">Delete</button>
                <button class="complete-btn" data-action="complete">Complete</button>
            `;
      li.style.padding = "10px";
      li.style.margin = "5px 0";
      li.style.border = "1px solid #ddd";
      li.style.borderRadius = "4px";
      li.style.display = "flex";
      li.style.justifyContent = "space-between";
      li.style.alignItems = "center";

      todoList.appendChild(li);
      todoInput.value = "";
    }
  }

  function editTodo(todoItem) {
    const textSpan = todoItem.querySelector(".todo-text");
    const currentText = textSpan.textContent;

    const input = document.createElement("input");
    input.type = "text";
    input.value = currentText;
    input.style.flex = "1";

    textSpan.replaceWith(input);
    input.focus();

    const saveEdit = () => {
      const newText = input.value.trim();
      if (newText) {
        const newSpan = document.createElement("span");
        newSpan.className = "todo-text";
        newSpan.textContent = newText;
        input.replaceWith(newSpan);
      } else {
        input.value = currentText;
      }
    };

    input.addEventListener("blur", saveEdit);
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        saveEdit();
      }
    });
  }

  function deleteTodo(todoItem) {
    if (confirm("Are you sure you want to delete this todo?")) {
      todoItem.remove();
    }
  }

  function completeTodo(todoItem) {
    const textSpan = todoItem.querySelector(".todo-text");
    const completeBtn = todoItem.querySelector(".complete-btn");

    if (todoItem.classList.contains("completed")) {
      // Uncomplete
      todoItem.classList.remove("completed");
      textSpan.style.textDecoration = "none";
      textSpan.style.opacity = "1";
      todoItem.style.backgroundColor = "";
      completeBtn.textContent = "Complete";
    } else {
      // Complete
      todoItem.classList.add("completed");
      textSpan.style.textDecoration = "line-through";
      textSpan.style.opacity = "0.6";
      todoItem.style.backgroundColor = "#f8f9fa";
      completeBtn.textContent = "Uncomplete";
    }
  }

  // Add some initial todos
  todoInput.value = "Learn JavaScript events";
  addTodo();
  todoInput.value = "Practice event delegation";
  addTodo();
  todoInput.value = "Build awesome web apps";
  addTodo();
}
```

### Exercise 4: Custom Events

Create and dispatch custom events.

```javascript
function setupCustomEvents() {
  // Create event emitter
  class EventEmitter {
    constructor() {
      this.events = {};
    }

    on(eventName, callback) {
      // Your implementation here
    }

    off(eventName, callback) {
      // Your implementation here
    }

    emit(eventName, data) {
      // Your implementation here
    }

    once(eventName, callback) {
      // Your implementation here
    }
  }

  // Create shopping cart with custom events
  class ShoppingCart extends EventEmitter {
    constructor() {
      super();
      this.items = [];
      this.total = 0;
    }

    addItem(item) {
      // Your implementation here
      // Emit 'itemAdded' event
    }

    removeItem(itemId) {
      // Your implementation here
      // Emit 'itemRemoved' event
    }

    updateQuantity(itemId, quantity) {
      // Your implementation here
      // Emit 'quantityUpdated' event
    }

    calculateTotal() {
      // Your implementation here
      // Emit 'totalUpdated' event
    }

    checkout() {
      // Your implementation here
      // Emit 'checkout' event
    }
  }

  // Test the shopping cart
  const cart = new ShoppingCart();

  // Set up event listeners
  cart.on("itemAdded", (data) => {
    console.log("Item added:", data);
  });

  cart.on("itemRemoved", (data) => {
    console.log("Item removed:", data);
  });

  cart.on("totalUpdated", (data) => {
    console.log("Total updated:", data);
  });

  cart.on("checkout", (data) => {
    console.log("Checkout completed:", data);
  });

  // Test the cart
  cart.addItem({ id: 1, name: "Laptop", price: 999, quantity: 1 });
  cart.addItem({ id: 2, name: "Mouse", price: 25, quantity: 2 });
  cart.updateQuantity(2, 3);
  cart.checkout();

  return cart;
}

// Test your function
setupCustomEvents();
```

**Solution:**

```javascript
function setupCustomEvents() {
  // Create event emitter
  class EventEmitter {
    constructor() {
      this.events = {};
    }

    on(eventName, callback) {
      if (!this.events[eventName]) {
        this.events[eventName] = [];
      }
      this.events[eventName].push(callback);
    }

    off(eventName, callback) {
      if (!this.events[eventName]) return;

      this.events[eventName] = this.events[eventName].filter(
        (listener) => listener !== callback,
      );
    }

    emit(eventName, data) {
      if (!this.events[eventName]) return;

      this.events[eventName].forEach((callback) => {
        callback(data);
      });
    }

    once(eventName, callback) {
      const onceWrapper = (data) => {
        callback(data);
        this.off(eventName, onceWrapper);
      };
      this.on(eventName, onceWrapper);
    }
  }

  // Create shopping cart with custom events
  class ShoppingCart extends EventEmitter {
    constructor() {
      super();
      this.items = [];
      this.total = 0;
    }

    addItem(item) {
      const existingItem = this.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        this.items.push({ ...item });
      }

      this.calculateTotal();
      this.emit("itemAdded", { item, cart: this.getState() });
    }

    removeItem(itemId) {
      const index = this.items.findIndex((item) => item.id === itemId);

      if (index !== -1) {
        const removedItem = this.items.splice(index, 1)[0];
        this.calculateTotal();
        this.emit("itemRemoved", { item: removedItem, cart: this.getState() });
      }
    }

    updateQuantity(itemId, quantity) {
      const item = this.items.find((i) => i.id === itemId);

      if (item) {
        const oldQuantity = item.quantity;
        item.quantity = quantity;
        this.calculateTotal();
        this.emit("quantityUpdated", {
          item,
          oldQuantity,
          newQuantity: quantity,
          cart: this.getState(),
        });
      }
    }

    calculateTotal() {
      this.total = this.items.reduce((sum, item) => {
        return sum + item.price * item.quantity;
      }, 0);

      this.emit("totalUpdated", { total: this.total, cart: this.getState() });
    }

    checkout() {
      const orderData = {
        items: [...this.items],
        total: this.total,
        timestamp: new Date().toISOString(),
      };

      // Clear cart
      this.items = [];
      this.total = 0;

      this.emit("checkout", orderData);
    }

    getState() {
      return {
        items: [...this.items],
        total: this.total,
        itemCount: this.items.reduce((count, item) => count + item.quantity, 0),
      };
    }
  }

  // Test the shopping cart
  const cart = new ShoppingCart();

  // Set up event listeners
  cart.on("itemAdded", (data) => {
    console.log(
      "Item added:",
      data.item.name,
      "- Cart total:",
      data.cart.total,
    );
  });

  cart.on("itemRemoved", (data) => {
    console.log(
      "Item removed:",
      data.item.name,
      "- Cart total:",
      data.cart.total,
    );
  });

  cart.on("quantityUpdated", (data) => {
    console.log(
      `Quantity updated for ${data.item.name}: ${data.oldQuantity} → ${data.newQuantity}`,
    );
  });

  cart.on("totalUpdated", (data) => {
    console.log("Total updated:", `$${data.total}`);
  });

  cart.on("checkout", (data) => {
    console.log(
      "Checkout completed:",
      `$${data.total} for ${data.items.length} items`,
    );
  });

  // Test the cart
  cart.addItem({ id: 1, name: "Laptop", price: 999, quantity: 1 });
  cart.addItem({ id: 2, name: "Mouse", price: 25, quantity: 2 });
  cart.updateQuantity(2, 3);
  cart.checkout();

  return cart;
}
```

## Challenge Problems

### Challenge 1: File Upload with Progress

Create a file upload system with progress tracking and drag-and-drop.

```javascript
function createFileUploadSystem(container) {
  // Create upload interface
  const uploadArea = document.createElement("div");
  uploadArea.className = "upload-area";
  uploadArea.innerHTML = `
        <div class="upload-zone" id="upload-zone">
            <p>Drag and drop files here or click to select</p>
            <input type="file" id="file-input" multiple style="display: none;">
        </div>
        <div class="upload-list" id="upload-list"></div>
    `;

  container.appendChild(uploadArea);

  const uploadZone = document.getElementById("upload-zone");
  const fileInput = document.getElementById("file-input");
  const uploadList = document.getElementById("upload-list");

  // Style the upload zone
  Object.assign(uploadZone.style, {
    border: "2px dashed #ccc",
    borderRadius: "10px",
    padding: "50px",
    textAlign: "center",
    cursor: "pointer",
    margin: "20px 0",
    transition: "border-color 0.3s",
  });

  // Drag and drop handlers
  uploadZone.addEventListener("click", () => fileInput.click());

  uploadZone.addEventListener("dragover", handleDragOver);
  uploadZone.addEventListener("dragleave", handleDragLeave);
  uploadZone.addEventListener("drop", handleDrop);

  fileInput.addEventListener("change", (e) => {
    handleFiles(e.target.files);
  });

  function handleDragOver(e) {
    // Your implementation here
  }

  function handleDragLeave(e) {
    // Your implementation here
  }

  function handleDrop(e) {
    // Your implementation here
  }

  function handleFiles(files) {
    // Your implementation here
  }

  function uploadFile(file) {
    // Simulate file upload with progress
    // Your implementation here
  }

  function createFileItem(file) {
    // Create UI for individual file upload
    // Your implementation here
  }

  return {
    uploadZone,
    uploadList,
    handleFiles,
  };
}

// Usage
const container = document.getElementById("upload-container");
const uploader = createFileUploadSystem(container);
```

**Solution:**

```javascript
function createFileUploadSystem(container) {
  // Create upload interface
  const uploadArea = document.createElement("div");
  uploadArea.className = "upload-area";
  uploadArea.innerHTML = `
        <div class="upload-zone" id="upload-zone">
            <p>Drag and drop files here or click to select</p>
            <input type="file" id="file-input" multiple style="display: none;">
        </div>
        <div class="upload-list" id="upload-list"></div>
    `;

  container.appendChild(uploadArea);

  const uploadZone = document.getElementById("upload-zone");
  const fileInput = document.getElementById("file-input");
  const uploadList = document.getElementById("upload-list");

  // Style the upload zone
  Object.assign(uploadZone.style, {
    border: "2px dashed #ccc",
    borderRadius: "10px",
    padding: "50px",
    textAlign: "center",
    cursor: "pointer",
    margin: "20px 0",
    transition: "border-color 0.3s",
  });

  // Drag and drop handlers
  uploadZone.addEventListener("click", () => fileInput.click());

  uploadZone.addEventListener("dragover", handleDragOver);
  uploadZone.addEventListener("dragleave", handleDragLeave);
  uploadZone.addEventListener("drop", handleDrop);

  fileInput.addEventListener("change", (e) => {
    handleFiles(e.target.files);
  });

  function handleDragOver(e) {
    e.preventDefault();
    uploadZone.style.borderColor = "#007bff";
    uploadZone.style.backgroundColor = "#f8f9fa";
  }

  function handleDragLeave(e) {
    e.preventDefault();
    uploadZone.style.borderColor = "#ccc";
    uploadZone.style.backgroundColor = "";
  }

  function handleDrop(e) {
    e.preventDefault();
    uploadZone.style.borderColor = "#ccc";
    uploadZone.style.backgroundColor = "";

    const files = e.dataTransfer.files;
    handleFiles(files);
  }

  function handleFiles(files) {
    Array.from(files).forEach((file) => {
      if (file.size > 10 * 1024 * 1024) {
        // 10MB limit
        alert(`File ${file.name} is too large. Maximum size is 10MB.`);
        return;
      }

      const fileItem = createFileItem(file);
      uploadList.appendChild(fileItem);
      uploadFile(file, fileItem);
    });
  }

  function uploadFile(file, fileItem) {
    const progressBar = fileItem.querySelector(".progress-bar");
    const statusText = fileItem.querySelector(".status-text");

    // Simulate upload progress
    let progress = 0;
    const uploadInterval = setInterval(() => {
      progress += Math.random() * 20;

      if (progress >= 100) {
        progress = 100;
        clearInterval(uploadInterval);
        statusText.textContent = "Upload complete";
        fileItem.style.borderColor = "#28a745";
      }

      progressBar.style.width = progress + "%";
      statusText.textContent = `Uploading... ${Math.round(progress)}%`;
    }, 200);
  }

  function createFileItem(file) {
    const fileItem = document.createElement("div");
    fileItem.className = "file-item";

    fileItem.innerHTML = `
            <div class="file-info">
                <strong>${file.name}</strong>
                <span class="file-size">(${formatFileSize(file.size)})</span>
            </div>
            <div class="progress-container">
                <div class="progress-bar"></div>
            </div>
            <div class="status-text">Preparing upload...</div>
        `;

    // Style the file item
    Object.assign(fileItem.style, {
      border: "1px solid #ddd",
      borderRadius: "5px",
      padding: "10px",
      margin: "10px 0",
      backgroundColor: "#f9f9f9",
    });

    const progressContainer = fileItem.querySelector(".progress-container");
    Object.assign(progressContainer.style, {
      width: "100%",
      height: "20px",
      backgroundColor: "#e9ecef",
      borderRadius: "10px",
      overflow: "hidden",
      margin: "5px 0",
    });

    const progressBar = fileItem.querySelector(".progress-bar");
    Object.assign(progressBar.style, {
      height: "100%",
      backgroundColor: "#007bff",
      width: "0%",
      transition: "width 0.3s",
    });

    return fileItem;
  }

  function formatFileSize(bytes) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }

  return {
    uploadZone,
    uploadList,
    handleFiles,
  };
}
```

## Real-World Applications

### Application 1: Interactive Dashboard

Create a dashboard with real-time updates using events.

```javascript
function createDashboard() {
  const dashboard = {
    data: {
      sales: 1000,
      users: 500,
      revenue: 25000,
    },

    widgets: [],

    init: function () {
      this.createLayout();
      this.setupEventListeners();
      this.startRealTimeUpdates();
    },

    createLayout: function () {
      const container = document.createElement("div");
      container.className = "dashboard";

      // Create widgets
      this.widgets = [
        this.createWidget("sales", "Sales", this.data.sales),
        this.createWidget("users", "Active Users", this.data.users),
        this.createWidget("revenue", "Revenue", "$" + this.data.revenue),
      ];

      this.widgets.forEach((widget) => container.appendChild(widget));
      document.body.appendChild(container);
    },

    createWidget: function (id, title, value) {
      const widget = document.createElement("div");
      widget.className = "widget";
      widget.id = id + "-widget";

      widget.innerHTML = `
                <h3>${title}</h3>
                <div class="value" id="${id}-value">${value}</div>
                <div class="trend" id="${id}-trend"></div>
            `;

      // Add click event for details
      widget.addEventListener("click", () => {
        this.showDetails(id);
      });

      return widget;
    },

    setupEventListeners: function () {
      // Listen for data updates
      document.addEventListener("dataUpdate", (e) => {
        this.updateWidget(e.detail.metric, e.detail.value, e.detail.trend);
      });

      // Listen for user interactions
      document.addEventListener("keydown", (e) => {
        if (e.key === "r" && e.ctrlKey) {
          e.preventDefault();
          this.refreshData();
        }
      });
    },

    updateWidget: function (metric, value, trend) {
      const valueElement = document.getElementById(metric + "-value");
      const trendElement = document.getElementById(metric + "-trend");

      if (valueElement) {
        // Animate value change
        valueElement.style.transform = "scale(1.1)";
        valueElement.style.color = trend > 0 ? "#28a745" : "#dc3545";

        setTimeout(() => {
          valueElement.textContent = metric === "revenue" ? "$" + value : value;
          valueElement.style.transform = "scale(1)";
          valueElement.style.color = "";
        }, 200);
      }

      if (trendElement) {
        trendElement.textContent = trend > 0 ? "↗️" : trend < 0 ? "↘️" : "➡️";
      }
    },

    startRealTimeUpdates: function () {
      setInterval(() => {
        // Simulate real-time data changes
        Object.keys(this.data).forEach((metric) => {
          const change = (Math.random() - 0.5) * 100;
          this.data[metric] += Math.round(change);

          // Dispatch custom event
          const event = new CustomEvent("dataUpdate", {
            detail: {
              metric: metric,
              value: this.data[metric],
              trend: change,
            },
          });

          document.dispatchEvent(event);
        });
      }, 3000);
    },

    showDetails: function (metric) {
      const modal = document.createElement("div");
      modal.className = "modal";
      modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <h2>${
                      metric.charAt(0).toUpperCase() + metric.slice(1)
                    } Details</h2>
                    <p>Current value: ${this.data[metric]}</p>
                    <p>This is detailed information about ${metric}.</p>
                </div>
            `;

      modal.querySelector(".close").addEventListener("click", () => {
        modal.remove();
      });

      document.body.appendChild(modal);
    },

    refreshData: function () {
      console.log("Refreshing dashboard data...");
      // Simulate data refresh
      Object.keys(this.data).forEach((metric) => {
        this.data[metric] = Math.floor(Math.random() * 10000);

        const event = new CustomEvent("dataUpdate", {
          detail: {
            metric: metric,
            value: this.data[metric],
            trend: 0,
          },
        });

        document.dispatchEvent(event);
      });
    },
  };

  dashboard.init();
  return dashboard;
}

// Create dashboard
const dashboard = createDashboard();
```

## Self-Assessment Checklist

- [ ] I can add event listeners to elements using different methods
- [ ] I understand event bubbling and capturing
- [ ] I can prevent default behaviors and stop event propagation
- [ ] I know how to implement event delegation effectively
- [ ] I can handle form events and validate form data
- [ ] I can work with keyboard and mouse events
- [ ] I can create and dispatch custom events
- [ ] I understand how to handle file uploads and drag-and-drop
- [ ] I can debug event-related issues
- [ ] I can build interactive applications using events

## Additional Practice Resources

1. Build interactive games using event handling
2. Create form wizards with complex validation
3. Implement keyboard shortcuts and hotkeys
4. Build drag-and-drop interfaces
5. Create real-time chat applications
6. Practice with touch events for mobile interfaces
7. Build custom UI components with event systems

---

**Next Topic:** [12 - ES6+ Basics](./12-es6-basics-exercises.md)
