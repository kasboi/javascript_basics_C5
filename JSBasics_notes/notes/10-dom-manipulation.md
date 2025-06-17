# DOM Manipulation

> **Topic**: DOM Manipulation  
> **Concepts Covered**: Selecting, modifying, creating, removing elements

## What is the DOM?

The **Document Object Model (DOM)** is JavaScript's way of representing and interacting with HTML elements on a webpage. Think of it as a bridge between your JavaScript code and the HTML structure.

### Key DOM Concepts

- Every HTML tag becomes an object in JavaScript
- Nested tags are "children" of their parent elements
- The entire document is represented as a tree structure
- JavaScript can modify, add, or remove elements dynamically

### DOM Tree Structure

```html
<!DOCTYPE html>
<html>
  <!-- document.documentElement -->
  <head>
    <!-- document.head -->
    <title>My Page</title>
  </head>
  <body>
    <!-- document.body -->
    <h1>Welcome</h1>
    <p>Hello World</p>
  </body>
</html>
```

## Selecting Elements

Before you can modify elements, you need to select them from the DOM.

### Essential Selection Methods

#### querySelector() - Select Single Element

```javascript
// Select by tag name
const heading = document.querySelector("h1");

// Select by class (first match)
const mainContent = document.querySelector(".main-content");

// Select by ID
const loginForm = document.querySelector("#login-form");

// Select by attribute
const emailInput = document.querySelector('input[type="email"]');

// Complex selectors
const firstListItem = document.querySelector("ul li:first-child");
```

#### querySelectorAll() - Select Multiple Elements

```javascript
// Select all paragraphs
const allParagraphs = document.querySelectorAll("p");

// Select all elements with a specific class
const cards = document.querySelectorAll(".card");

// Select all input elements
const inputs = document.querySelectorAll("input");

// querySelectorAll returns a NodeList (array-like)
console.log(allParagraphs.length); // Number of paragraphs
```

#### Legacy Selection Methods (Still Useful)

```javascript
// Select by ID (faster than querySelector for IDs)
const element = document.getElementById("my-element");

// Select by class name
const elements = document.getElementsByClassName("my-class");

// Select by tag name
const paragraphs = document.getElementsByTagName("p");
```

### Working with NodeLists

```javascript
const listItems = document.querySelectorAll("li");

// Loop through NodeList
listItems.forEach(function (item, index) {
  console.log(`Item ${index}: ${item.textContent}`);
});

// Convert to array for more methods
const itemsArray = Array.from(listItems);
const itemTexts = itemsArray.map((item) => item.textContent);
```

## Modifying Elements

Once you've selected elements, you can change their content, style, and attributes.

### Changing Text Content

```javascript
const heading = document.querySelector("h1");

// textContent - plain text only
heading.textContent = "New Heading Text";

// innerHTML - can include HTML tags
const container = document.querySelector(".container");
container.innerHTML = "<p>New paragraph with <strong>bold text</strong></p>";

// Be careful with innerHTML and user input (XSS vulnerability)
```

### Modifying Styles

```javascript
const element = document.querySelector(".my-element");

// Individual style properties
element.style.color = "blue";
element.style.backgroundColor = "yellow";
element.style.fontSize = "20px";
element.style.display = "none"; // Hide element

// Multiple styles at once
element.style.cssText = "color: red; font-size: 18px; margin: 10px;";
```

### Working with CSS Classes

```javascript
const element = document.querySelector(".my-element");

// Add class
element.classList.add("active");
element.classList.add("highlight", "visible"); // Add multiple

// Remove class
element.classList.remove("inactive");

// Toggle class (add if not present, remove if present)
element.classList.toggle("hidden");

// Check if class exists
if (element.classList.contains("active")) {
  console.log("Element is active");
}

// Replace class
element.classList.replace("old-class", "new-class");
```

### Modifying Attributes

```javascript
const image = document.querySelector("img");
const link = document.querySelector("a");

// Get attribute
const src = image.getAttribute("src");
const href = link.getAttribute("href");

// Set attribute
image.setAttribute("src", "new-image.jpg");
image.setAttribute("alt", "New image description");
link.setAttribute("href", "https://example.com");

// Remove attribute
image.removeAttribute("title");

// Check if attribute exists
if (image.hasAttribute("data-id")) {
  console.log("Image has data-id attribute");
}

// Direct property access (for common attributes)
image.src = "another-image.jpg";
link.href = "https://google.com";
```

## Creating and Removing Elements

### Creating New Elements

```javascript
// Create new element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph";
newParagraph.classList.add("dynamic-content");

// Create element with innerHTML
const newDiv = document.createElement("div");
newDiv.innerHTML = "<h3>Dynamic Title</h3><p>Dynamic content</p>";

// Create text node
const textNode = document.createTextNode("Just some text");
```

### Adding Elements to the DOM

```javascript
const container = document.querySelector(".container");
const newElement = document.createElement("p");
newElement.textContent = "New paragraph";

// Append to end
container.appendChild(newElement);

// Insert at beginning
container.insertBefore(newElement, container.firstChild);

// Modern methods (newer browsers)
container.append(newElement); // Can append multiple elements
container.prepend(newElement); // Add to beginning

// Insert adjacent to element
const existingElement = document.querySelector("#existing");
existingElement.insertAdjacentHTML("afterend", "<p>After the element</p>");
existingElement.insertAdjacentHTML("beforebegin", "<p>Before the element</p>");
```

### Removing Elements

```javascript
const elementToRemove = document.querySelector(".remove-me");

// Modern way (newer browsers)
elementToRemove.remove();

// Legacy way (older browsers)
elementToRemove.parentNode.removeChild(elementToRemove);

// Remove all children
const container = document.querySelector(".container");
container.innerHTML = ""; // Quick way
// or
while (container.firstChild) {
  container.removeChild(container.firstChild);
}
```

## Practical Examples

### Dynamic List Manager

```javascript
function createListManager() {
  const list = document.querySelector("#task-list");
  const input = document.querySelector("#task-input");
  const addButton = document.querySelector("#add-task");

  function addTask() {
    const taskText = input.value.trim();
    if (taskText === "") return;

    // Create list item
    const listItem = document.createElement("li");
    listItem.classList.add("task-item");

    // Create task content
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskSpan.classList.add("task-text");

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.onclick = () => listItem.remove();

    // Assemble and add to DOM
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);

    // Clear input
    input.value = "";
  }

  addButton.onclick = addTask;
  input.onkeypress = (e) => {
    if (e.key === "Enter") addTask();
  };
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", createListManager);
```

### Image Gallery

```javascript
function createImageGallery(images) {
  const gallery = document.querySelector("#gallery");

  images.forEach((imageData) => {
    // Create container
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    // Create image
    const img = document.createElement("img");
    img.src = imageData.src;
    img.alt = imageData.alt;
    img.classList.add("gallery-image");

    // Create caption
    const caption = document.createElement("p");
    caption.textContent = imageData.caption;
    caption.classList.add("image-caption");

    // Assemble
    imageContainer.appendChild(img);
    imageContainer.appendChild(caption);
    gallery.appendChild(imageContainer);

    // Add click handler for lightbox effect
    img.onclick = () => showLightbox(imageData.src);
  });
}

function showLightbox(imageSrc) {
  // Create lightbox overlay
  const overlay = document.createElement("div");
  overlay.classList.add("lightbox-overlay");
  overlay.onclick = () => overlay.remove();

  const img = document.createElement("img");
  img.src = imageSrc;
  img.classList.add("lightbox-image");

  overlay.appendChild(img);
  document.body.appendChild(overlay);
}
```

### Form Validator

```javascript
function setupFormValidation() {
  const form = document.querySelector("#registration-form");
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");

  function showError(input, message) {
    // Remove existing error
    const existingError = input.parentNode.querySelector(".error-message");
    if (existingError) existingError.remove();

    // Create error message
    const errorDiv = document.createElement("div");
    errorDiv.classList.add("error-message");
    errorDiv.textContent = message;
    errorDiv.style.color = "red";
    errorDiv.style.fontSize = "14px";

    // Add after input
    input.parentNode.insertBefore(errorDiv, input.nextSibling);
    input.classList.add("error");
  }

  function clearError(input) {
    const errorMessage = input.parentNode.querySelector(".error-message");
    if (errorMessage) errorMessage.remove();
    input.classList.remove("error");
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Real-time validation
  nameInput.oninput = () => {
    if (nameInput.value.trim().length < 2) {
      showError(nameInput, "Name must be at least 2 characters");
    } else {
      clearError(nameInput);
    }
  };

  emailInput.oninput = () => {
    if (!validateEmail(emailInput.value)) {
      showError(emailInput, "Please enter a valid email");
    } else {
      clearError(emailInput);
    }
  };

  passwordInput.oninput = () => {
    if (passwordInput.value.length < 6) {
      showError(passwordInput, "Password must be at least 6 characters");
    } else {
      clearError(passwordInput);
    }
  };
}
```

## Best Practices

1. **Cache DOM queries**: Store frequently used elements in variables
2. **Use event delegation**: For dynamic content, attach events to parent elements
3. **Batch DOM operations**: Minimize reflows and repaints
4. **Use document fragments**: For multiple element creation
5. **Validate elements exist**: Check if `querySelector` returns null

### Performance Tips

```javascript
// ❌ Bad - queries DOM multiple times
document.querySelector("#list").appendChild(item1);
document.querySelector("#list").appendChild(item2);
document.querySelector("#list").appendChild(item3);

// ✅ Good - cache the element
const list = document.querySelector("#list");
list.appendChild(item1);
list.appendChild(item2);
list.appendChild(item3);

// ✅ Even better - use document fragment
const fragment = document.createDocumentFragment();
fragment.appendChild(item1);
fragment.appendChild(item2);
fragment.appendChild(item3);
list.appendChild(fragment);
```

## Common Pitfalls

1. **Modifying DOM during iteration**: Can cause elements to be skipped
2. **Memory leaks**: Removing elements but keeping references
3. **XSS vulnerabilities**: Using innerHTML with user input
4. **Assuming elements exist**: Always check if querySelector returns null

## Key Takeaways

- **DOM is your interface to HTML**: JavaScript's way to interact with web pages
- **querySelector/querySelectorAll**: Modern, flexible element selection
- **classList**: Clean way to manage CSS classes
- **createElement/appendChild**: Dynamic content creation
- **Cache DOM queries**: Store elements in variables for performance
- **Always validate**: Check if elements exist before using them

## Practice Exercises

1. Create a dynamic table that can add/remove rows
2. Build a color picker that changes page background
3. Make a simple drag-and-drop interface
4. Create a modal dialog system
5. Build a real-time character counter for a textarea
