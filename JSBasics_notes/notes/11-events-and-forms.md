# Events and Forms

> **Topic**: Events & Forms  
> **Concepts Covered**: `addEventListener`, form inputs, event object, event handling

## Understanding Events

Events are actions that happen in the browser - user clicks, keyboard presses, page loads, etc. JavaScript can "listen" for these events and respond accordingly.

### Common Event Types

- **Mouse events**: `click`, `dblclick`, `mousedown`, `mouseup`, `mouseover`, `mouseout`
- **Keyboard events**: `keydown`, `keyup`, `keypress`
- **Form events**: `submit`, `change`, `input`, `focus`, `blur`
- **Window events**: `load`, `resize`, `scroll`

## Event Listeners

### Adding Event Listeners

```javascript
// Basic syntax
element.addEventListener("eventType", function () {
  // Code to execute when event occurs
});

// Example: Button click
const button = document.querySelector("#my-button");
button.addEventListener("click", function () {
  alert("Button clicked!");
});

// Arrow function syntax
button.addEventListener("click", () => {
  console.log("Button clicked!");
});

// Named function (reusable)
function handleButtonClick() {
  console.log("Button clicked!");
}
button.addEventListener("click", handleButtonClick);
```

### Event Types Examples

```javascript
const element = document.querySelector("#interactive-element");

// Mouse events
element.addEventListener("click", () => console.log("Clicked"));
element.addEventListener("dblclick", () => console.log("Double clicked"));
element.addEventListener("mouseenter", () => console.log("Mouse entered"));
element.addEventListener("mouseleave", () => console.log("Mouse left"));

// Keyboard events (usually on document or input elements)
document.addEventListener("keydown", (e) => {
  console.log(`Key pressed: ${e.key}`);
});

// Window events
window.addEventListener("load", () => console.log("Page loaded"));
window.addEventListener("resize", () => console.log("Window resized"));
```

## The Event Object

When an event occurs, JavaScript automatically creates an event object with useful information.

### Event Object Properties

```javascript
button.addEventListener("click", function (event) {
  console.log("Event type:", event.type); // 'click'
  console.log("Target element:", event.target); // The clicked element
  console.log("Current target:", event.currentTarget); // Element with listener
  console.log("Mouse position:", event.clientX, event.clientY);
  console.log("Timestamp:", event.timeStamp);
});

// Keyboard events
document.addEventListener("keydown", function (event) {
  console.log("Key:", event.key); // 'Enter', 'a', 'Shift', etc.
  console.log("Key code:", event.keyCode); // Numeric code
  console.log("Ctrl pressed:", event.ctrlKey); // Boolean
  console.log("Shift pressed:", event.shiftKey); // Boolean
  console.log("Alt pressed:", event.altKey); // Boolean
});
```

### Preventing Default Behavior

```javascript
// Prevent form submission
const form = document.querySelector("#my-form");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Stops form from submitting normally
  console.log("Form submission prevented");
  // Handle form data with JavaScript instead
});

// Prevent link navigation
const link = document.querySelector("#my-link");
link.addEventListener("click", function (event) {
  event.preventDefault(); // Stops link from navigating
  console.log("Link click prevented");
});

// Prevent context menu
document.addEventListener("contextmenu", function (event) {
  event.preventDefault(); // Stops right-click menu
});
```

## Event Bubbling and Delegation

### Event Bubbling

Events "bubble up" from the target element to its parents:

```javascript
// HTML: <div><button>Click me</button></div>

const div = document.querySelector("div");
const button = document.querySelector("button");

div.addEventListener("click", () => {
  console.log("Div clicked");
});

button.addEventListener("click", () => {
  console.log("Button clicked");
});

// When button is clicked, both events fire:
// "Button clicked" then "Div clicked"
```

### Stopping Event Propagation

```javascript
button.addEventListener("click", function (event) {
  console.log("Button clicked");
  event.stopPropagation(); // Prevents bubbling to parent elements
});

// Now only "Button clicked" will be logged
```

### Event Delegation

Use bubbling to handle events for multiple elements efficiently:

```javascript
// Instead of adding listeners to each list item
const list = document.querySelector("#todo-list");

list.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    // A delete button was clicked
    const listItem = event.target.closest("li");
    listItem.remove();
  } else if (event.target.classList.contains("complete-btn")) {
    // A complete button was clicked
    const listItem = event.target.closest("li");
    listItem.classList.toggle("completed");
  }
});

// This works for dynamically added list items too!
```

## Form Handling

Forms are a crucial part of web interactivity. JavaScript can validate input, prevent submission, and handle data.

### Basic Form Events

```javascript
const form = document.querySelector("#registration-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

// Form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent normal form submission

  // Get form data
  const formData = new FormData(form);
  const name = formData.get("name");
  const email = formData.get("email");

  console.log("Name:", name);
  console.log("Email:", email);
});

// Input events
nameInput.addEventListener("input", function (event) {
  console.log("Current value:", event.target.value);
});

// Focus and blur events
emailInput.addEventListener("focus", function () {
  console.log("Email input focused");
  this.style.backgroundColor = "#e6f3ff";
});

emailInput.addEventListener("blur", function () {
  console.log("Email input lost focus");
  this.style.backgroundColor = "";
});
```

### Getting Form Data

```javascript
const form = document.querySelector("#my-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Method 1: Direct element access
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;

  // Method 2: FormData object
  const formData = new FormData(form);
  const name2 = formData.get("name");
  const email2 = formData.get("email");

  // Method 3: Form elements collection
  const name3 = form.elements.name.value;
  const email3 = form.elements.email.value;

  console.log({ name, email });
});
```

### Form Validation

```javascript
function setupFormValidation() {
  const form = document.querySelector("#contact-form");
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const messageInput = document.querySelector("#message");

  // Validation functions
  function validateName(name) {
    return name.trim().length >= 2;
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validateMessage(message) {
    return message.trim().length >= 10;
  }

  function showError(input, message) {
    input.classList.add("error");

    // Remove existing error message
    const existingError = input.parentNode.querySelector(".error-message");
    if (existingError) existingError.remove();

    // Create new error message
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = message;
    input.parentNode.appendChild(errorDiv);
  }

  function clearError(input) {
    input.classList.remove("error");
    const errorMessage = input.parentNode.querySelector(".error-message");
    if (errorMessage) errorMessage.remove();
  }

  // Real-time validation
  nameInput.addEventListener("blur", function () {
    if (!validateName(this.value)) {
      showError(this, "Name must be at least 2 characters long");
    } else {
      clearError(this);
    }
  });

  emailInput.addEventListener("blur", function () {
    if (!validateEmail(this.value)) {
      showError(this, "Please enter a valid email address");
    } else {
      clearError(this);
    }
  });

  messageInput.addEventListener("blur", function () {
    if (!validateMessage(this.value)) {
      showError(this, "Message must be at least 10 characters long");
    } else {
      clearError(this);
    }
  });

  // Form submission validation
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    if (!validateName(nameInput.value)) {
      showError(nameInput, "Name must be at least 2 characters long");
      isValid = false;
    }

    if (!validateEmail(emailInput.value)) {
      showError(emailInput, "Please enter a valid email address");
      isValid = false;
    }

    if (!validateMessage(messageInput.value)) {
      showError(messageInput, "Message must be at least 10 characters long");
      isValid = false;
    }

    if (isValid) {
      console.log("Form is valid, submitting...");
      // Here you would normally send the data to a server
      alert("Form submitted successfully!");
      form.reset();
    }
  });
}

// Initialize validation when DOM is ready
document.addEventListener("DOMContentLoaded", setupFormValidation);
```

## Practical Examples

### Interactive Todo List

```javascript
function createTodoApp() {
  const form = document.querySelector("#todo-form");
  const input = document.querySelector("#todo-input");
  const list = document.querySelector("#todo-list");

  // Add new todo
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const todoText = input.value.trim();
    if (todoText === "") return;

    createTodoItem(todoText);
    input.value = "";
  });

  function createTodoItem(text) {
    const li = document.createElement("li");
    li.className = "todo-item";

    li.innerHTML = `
      <span class="todo-text">${text}</span>
      <button class="complete-btn">✓</button>
      <button class="delete-btn">✗</button>
    `;

    list.appendChild(li);
  }

  // Handle todo actions with event delegation
  list.addEventListener("click", function (event) {
    const todoItem = event.target.closest(".todo-item");

    if (event.target.classList.contains("complete-btn")) {
      todoItem.classList.toggle("completed");
    } else if (event.target.classList.contains("delete-btn")) {
      todoItem.remove();
    }
  });
}

document.addEventListener("DOMContentLoaded", createTodoApp);
```

### Modal Dialog System

```javascript
function setupModal() {
  const openButtons = document.querySelectorAll("[data-modal-target]");
  const closeButtons = document.querySelectorAll("[data-close-button]");
  const overlay = document.querySelector("#overlay");

  openButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      closeModal(modal);
    });
  });

  overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });

  // Close modal with Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const activeModal = document.querySelector(".modal.active");
      if (activeModal) closeModal(activeModal);
    }
  });

  function openModal(modal) {
    if (modal == null) return;
    modal.classList.add("active");
    overlay.classList.add("active");
  }

  function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }
}

document.addEventListener("DOMContentLoaded", setupModal);
```

### Keyboard Shortcuts

```javascript
function setupKeyboardShortcuts() {
  document.addEventListener("keydown", function (event) {
    // Ctrl+S to save (prevent browser save dialog)
    if (event.ctrlKey && event.key === "s") {
      event.preventDefault();
      saveDocument();
    }

    // Ctrl+N for new document
    if (event.ctrlKey && event.key === "n") {
      event.preventDefault();
      createNewDocument();
    }

    // Escape to close modals
    if (event.key === "Escape") {
      closeAllModals();
    }

    // Arrow keys for navigation
    if (event.key === "ArrowLeft") {
      navigateLeft();
    } else if (event.key === "ArrowRight") {
      navigateRight();
    }
  });

  function saveDocument() {
    console.log("Document saved");
    showNotification("Document saved successfully");
  }

  function createNewDocument() {
    console.log("New document created");
  }

  function closeAllModals() {
    document.querySelectorAll(".modal.active").forEach((modal) => {
      modal.classList.remove("active");
    });
  }
}
```

## Best Practices

1. **Use addEventListener()**: More flexible than inline event handlers
2. **Prevent default when needed**: Especially for forms and links
3. **Use event delegation**: For dynamic content and better performance
4. **Remove event listeners**: When elements are removed from DOM
5. **Validate on both client and server**: Client validation is for UX, not security

### Performance Tips

```javascript
// ❌ Bad - adds many event listeners
document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", handleClick);
});

// ✅ Good - uses event delegation
document.body.addEventListener("click", function (event) {
  if (event.target.classList.contains("button")) {
    handleClick(event);
  }
});
```

## Common Pitfalls

1. **Forgetting preventDefault()**: Forms will submit, links will navigate
2. **Event listener memory leaks**: Not removing listeners on element removal
3. **Not checking event.target**: In event delegation, verify the target
4. **Client-side validation only**: Always validate on server too

## Key Takeaways

- **Events are user interactions**: Clicks, key presses, form submissions
- **addEventListener()**: Modern way to handle events
- **Event object**: Contains useful information about the event
- **preventDefault()**: Stops default browser behavior
- **Event delegation**: Efficient way to handle multiple similar elements
- **Form validation**: Improve user experience with real-time feedback

## Practice Exercises

1. Create a calculator with keyboard and mouse input
2. Build a real-time search filter for a list
3. Make a drag-and-drop file uploader interface
4. Create a multi-step form with validation
5. Build a simple drawing app with mouse events
