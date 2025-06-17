# Topic 10: DOM Manipulation - Exercises

## Multiple Choice Questions

### Question 1

Which method is used to select an element by its ID?
A) `getElementById()`
B) `querySelector()`
C) `getElementByID()`
D) Both A and B

**Answer: D**
**Explanation:** Both `getElementById()` and `querySelector('#id')` can select elements by ID.

### Question 2

What does `document.createElement('div')` do?
A) Selects a div element
B) Creates a new div element in memory
C) Adds a div to the page
D) Removes a div element

**Answer: B**
**Explanation:** `createElement()` creates a new element in memory but doesn't add it to the DOM until you append it.

### Question 3

Which property is used to change the text content of an element?
A) `innerHTML`
B) `textContent`
C) `innerText`
D) All of the above

**Answer: D**
**Explanation:** All three can change text content, but they work differently (innerHTML includes HTML, textContent includes hidden text, innerText respects styling).

### Question 4

How do you add a CSS class to an element?
A) `element.addClass('className')`
B) `element.classList.add('className')`
C) `element.class = 'className'`
D) `element.addClassName('className')`

**Answer: B**
**Explanation:** `classList.add()` is the correct method to add CSS classes.

### Question 5

Which method removes an element from the DOM?
A) `element.delete()`
B) `element.remove()`
C) `element.removeChild()`
D) Both B and C

**Answer: D**
**Explanation:** Both `remove()` (on the element itself) and `removeChild()` (on the parent) can remove elements.

### Question 6

What's the difference between `querySelector()` and `querySelectorAll()`?
A) No difference
B) `querySelector()` returns one element, `querySelectorAll()` returns a NodeList
C) `querySelector()` is faster
D) `querySelectorAll()` only works with classes

**Answer: B**
**Explanation:** `querySelector()` returns the first matching element, while `querySelectorAll()` returns all matching elements as a NodeList.

## Practical Coding Exercises

### Exercise 1: Basic DOM Selection

Create functions to select elements using different methods.

```html
<!-- HTML for testing -->
<div id="main-container">
  <h1 class="title">Welcome to DOM Practice</h1>
  <p class="description">This is a paragraph.</p>
  <ul class="list">
    <li data-id="1">Item 1</li>
    <li data-id="2">Item 2</li>
    <li data-id="3">Item 3</li>
  </ul>
  <button id="action-btn">Click Me</button>
</div>
```

```javascript
function domSelection() {
    // Select element by ID
    const container = // Your code here

    // Select element by class name (first match)
    const title = // Your code here

    // Select all elements with class 'list-item'
    const listItems = // Your code here

    // Select element by tag name (first p tag)
    const paragraph = // Your code here

    // Select element by attribute
    const itemWithId2 = // Your code here (data-id="2")

    // Select using complex CSS selector
    const listInContainer = // Your code here (ul inside #main-container)

    return {
        container,
        title,
        listItems,
        paragraph,
        itemWithId2,
        listInContainer
    };
}

// Test your function
console.log(domSelection());
```

**Solution:**

```javascript
function domSelection() {
  // Select element by ID
  const container = document.getElementById("main-container");

  // Select element by class name (first match)
  const title = document.querySelector(".title");

  // Select all elements with class 'list-item'
  const listItems = document.querySelectorAll("li");

  // Select element by tag name (first p tag)
  const paragraph = document.querySelector("p");

  // Select element by attribute
  const itemWithId2 = document.querySelector('[data-id="2"]');

  // Select using complex CSS selector
  const listInContainer = document.querySelector("#main-container ul");

  return {
    container,
    title,
    listItems,
    paragraph,
    itemWithId2,
    listInContainer,
  };
}
```

### Exercise 2: Content Manipulation

Create functions to modify element content.

```javascript
function contentManipulation() {
    // Change the title text
    const title = document.querySelector('.title');
    // Your code here

    // Change paragraph content with HTML
    const paragraph = document.querySelector('.description');
    // Your code here (add some <strong> tags)

    // Update list items
    const listItems = document.querySelectorAll('li');
    // Your code here (change each item's text)

    // Get and display current content
    const currentTitle = // Your code here
    const currentParagraph = // Your code here

    return {
        currentTitle,
        currentParagraph
    };
}

// Test your function
console.log(contentManipulation());
```

**Solution:**

```javascript
function contentManipulation() {
  // Change the title text
  const title = document.querySelector(".title");
  title.textContent = "DOM Manipulation Practice";

  // Change paragraph content with HTML
  const paragraph = document.querySelector(".description");
  paragraph.innerHTML =
    "This is a <strong>modified</strong> paragraph with <em>HTML</em> content.";

  // Update list items
  const listItems = document.querySelectorAll("li");
  listItems.forEach((item, index) => {
    item.textContent = `Updated Item ${index + 1}`;
  });

  // Get and display current content
  const currentTitle = title.textContent;
  const currentParagraph = paragraph.innerHTML;

  return {
    currentTitle,
    currentParagraph,
  };
}
```

### Exercise 3: Element Creation and Insertion

Create functions to add new elements to the DOM.

```javascript
function elementCreation() {
    const container = document.getElementById('main-container');

    // Create a new paragraph element
    const newParagraph = // Your code here
    // Set its content and add it to container

    // Create a new div with class and content
    const newDiv = // Your code here
    // Add class, content, and append to container

    // Create a list and add multiple items
    const newList = // Your code here
    // Create 3 list items and add them to the list
    // Then add the list to container

    // Create an element with attributes
    const newImage = // Your code here
    // Set src, alt, and add to container

    return {
        elementsAdded: container.children.length
    };
}

// Test your function
console.log(elementCreation());
```

**Solution:**

```javascript
function elementCreation() {
  const container = document.getElementById("main-container");

  // Create a new paragraph element
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "This is a dynamically created paragraph.";
  container.appendChild(newParagraph);

  // Create a new div with class and content
  const newDiv = document.createElement("div");
  newDiv.className = "dynamic-content";
  newDiv.textContent = "Dynamic div content";
  container.appendChild(newDiv);

  // Create a list and add multiple items
  const newList = document.createElement("ol");
  for (let i = 1; i <= 3; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `Dynamic item ${i}`;
    newList.appendChild(listItem);
  }
  container.appendChild(newList);

  // Create an element with attributes
  const newImage = document.createElement("img");
  newImage.src = "https://via.placeholder.com/150";
  newImage.alt = "Placeholder image";
  newImage.style.display = "block";
  newImage.style.margin = "10px 0";
  container.appendChild(newImage);

  return {
    elementsAdded: container.children.length,
  };
}
```

### Exercise 4: CSS Class and Style Manipulation

Create functions to modify element styling.

```javascript
function styleManipulation() {
    const title = document.querySelector('.title');
    const paragraph = document.querySelector('.description');
    const button = document.getElementById('action-btn');

    // Add CSS classes
    // Your code here (add 'highlighted' class to title)

    // Remove CSS classes
    // Your code here (remove 'description' class from paragraph)

    // Toggle CSS classes
    // Your code here (toggle 'active' class on button)

    // Check if element has class
    const hasClass = // Your code here (check if title has 'highlighted' class)

    // Modify inline styles
    // Your code here (change title color to blue, font size to 24px)

    // Modify multiple styles at once
    // Your code here (change paragraph background and padding)

    // Get computed styles
    const titleStyles = // Your code here (get computed styles of title)

    return {
        hasClass,
        titleColor: titleStyles.color,
        titleFontSize: titleStyles.fontSize
    };
}

// Test your function
console.log(styleManipulation());
```

**Solution:**

```javascript
function styleManipulation() {
  const title = document.querySelector(".title");
  const paragraph = document.querySelector(".description");
  const button = document.getElementById("action-btn");

  // Add CSS classes
  title.classList.add("highlighted");

  // Remove CSS classes
  paragraph.classList.remove("description");

  // Toggle CSS classes
  button.classList.toggle("active");

  // Check if element has class
  const hasClass = title.classList.contains("highlighted");

  // Modify inline styles
  title.style.color = "blue";
  title.style.fontSize = "24px";

  // Modify multiple styles at once
  Object.assign(paragraph.style, {
    backgroundColor: "#f0f0f0",
    padding: "10px",
    borderRadius: "5px",
  });

  // Get computed styles
  const titleStyles = window.getComputedStyle(title);

  return {
    hasClass,
    titleColor: titleStyles.color,
    titleFontSize: titleStyles.fontSize,
  };
}
```

### Exercise 5: Element Removal and Replacement

Create functions to remove and replace elements.

```javascript
function elementRemoval() {
  // Remove a specific element
  const elementToRemove = document.querySelector('li[data-id="2"]');
  // Your code here

  // Remove all elements with a specific class
  const elementsToRemove = document.querySelectorAll(".temporary");
  // Your code here

  // Replace an element with a new one
  const oldParagraph = document.querySelector(".description");
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "This is a replacement paragraph";
  newParagraph.className = "replacement";
  // Your code here (replace old with new)

  // Clear all content from a container
  const listContainer = document.querySelector(".list");
  // Your code here (remove all children)

  return {
    removedElementsCount: document.querySelectorAll("li").length,
    replacementExists: document.querySelector(".replacement") !== null,
  };
}

// Test your function
console.log(elementRemoval());
```

**Solution:**

```javascript
function elementRemoval() {
  // Remove a specific element
  const elementToRemove = document.querySelector('li[data-id="2"]');
  if (elementToRemove) {
    elementToRemove.remove();
  }

  // Remove all elements with a specific class
  const elementsToRemove = document.querySelectorAll(".temporary");
  elementsToRemove.forEach((element) => element.remove());

  // Replace an element with a new one
  const oldParagraph = document.querySelector(".description");
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "This is a replacement paragraph";
  newParagraph.className = "replacement";
  if (oldParagraph && oldParagraph.parentNode) {
    oldParagraph.parentNode.replaceChild(newParagraph, oldParagraph);
  }

  // Clear all content from a container
  const listContainer = document.querySelector(".list");
  if (listContainer) {
    listContainer.innerHTML = "";
  }

  return {
    removedElementsCount: document.querySelectorAll("li").length,
    replacementExists: document.querySelector(".replacement") !== null,
  };
}
```

## JavaScript Test Functions

```javascript
// Test function for DOM manipulation exercises
function testDOMExercises() {
  console.log("=== Testing DOM Manipulation Exercises ===");

  // Create test HTML
  document.body.innerHTML = `
        <div id="main-container">
            <h1 class="title">Welcome to DOM Practice</h1>
            <p class="description">This is a paragraph.</p>
            <ul class="list">
                <li data-id="1">Item 1</li>
                <li data-id="2">Item 2</li>
                <li data-id="3">Item 3</li>
            </ul>
            <button id="action-btn">Click Me</button>
        </div>
    `;

  // Test domSelection
  const selectionResult = domSelection();
  const test1 = selectionResult.container && selectionResult.title;
  console.log("domSelection test:", test1 ? "PASS" : "FAIL");

  // Test contentManipulation
  const contentResult = contentManipulation();
  const test2 = contentResult.currentTitle.includes("DOM");
  console.log("contentManipulation test:", test2 ? "PASS" : "FAIL");

  // Test elementCreation
  const creationResult = elementCreation();
  const test3 = creationResult.elementsAdded > 4;
  console.log("elementCreation test:", test3 ? "PASS" : "FAIL");

  // Test styleManipulation
  const styleResult = styleManipulation();
  const test4 = styleResult.hasClass === true;
  console.log("styleManipulation test:", test4 ? "PASS" : "FAIL");

  // Reset HTML for removal test
  document.body.innerHTML = `
        <div id="main-container">
            <h1 class="title">Welcome to DOM Practice</h1>
            <p class="description">This is a paragraph.</p>
            <ul class="list">
                <li data-id="1">Item 1</li>
                <li data-id="2">Item 2</li>
                <li data-id="3">Item 3</li>
            </ul>
            <button id="action-btn">Click Me</button>
        </div>
    `;

  // Test elementRemoval
  const removalResult = elementRemoval();
  const test5 = removalResult.replacementExists === true;
  console.log("elementRemoval test:", test5 ? "PASS" : "FAIL");
}

// Run tests
testDOMExercises();
```

## Challenge Problems

### Challenge 1: Dynamic Table Generator

Create a function that generates HTML tables dynamically.

```javascript
function createTableGenerator() {
    return function(data, options = {}) {
        // data: array of objects
        // options: { headers, className, sortable, striped }

        const table = document.createElement('table');
        if (options.className) {
            table.className = options.className;
        }

        // Create headers
        if (data.length > 0) {
            const thead = // Your code here
            const headerRow = // Your code here

            const headers = options.headers || Object.keys(data[0]);
            headers.forEach(header => {
                const th = // Your code here
                // Add sorting if options.sortable is true
            });

            thead.appendChild(headerRow);
            table.appendChild(thead);
        }

        // Create body
        const tbody = // Your code here
        data.forEach((row, index) => {
            const tr = // Your code here

            // Add striped class if options.striped is true
            if (options.striped && index % 2 === 1) {
                // Your code here
            }

            Object.values(row).forEach(value => {
                const td = // Your code here
            });

            tbody.appendChild(tr);
        });

        table.appendChild(tbody);
        return table;
    };
}

// Test your table generator
const generateTable = createTableGenerator();
const tableData = [
    { name: 'Alice', age: 30, city: 'New York' },
    { name: 'Bob', age: 25, city: 'Los Angeles' },
    { name: 'Charlie', age: 35, city: 'Chicago' }
];

const table = generateTable(tableData, {
    className: 'data-table',
    striped: true,
    sortable: true
});

document.body.appendChild(table);
```

**Solution:**

```javascript
function createTableGenerator() {
  return function (data, options = {}) {
    const table = document.createElement("table");
    if (options.className) {
      table.className = options.className;
    }

    // Create headers
    if (data.length > 0) {
      const thead = document.createElement("thead");
      const headerRow = document.createElement("tr");

      const headers = options.headers || Object.keys(data[0]);
      headers.forEach((header) => {
        const th = document.createElement("th");
        th.textContent = header.charAt(0).toUpperCase() + header.slice(1);

        // Add sorting if options.sortable is true
        if (options.sortable) {
          th.style.cursor = "pointer";
          th.addEventListener("click", () => {
            sortTable(table, headers.indexOf(header));
          });
        }

        headerRow.appendChild(th);
      });

      thead.appendChild(headerRow);
      table.appendChild(thead);
    }

    // Create body
    const tbody = document.createElement("tbody");
    data.forEach((row, index) => {
      const tr = document.createElement("tr");

      // Add striped class if options.striped is true
      if (options.striped && index % 2 === 1) {
        tr.classList.add("striped");
      }

      Object.values(row).forEach((value) => {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    return table;
  };

  function sortTable(table, columnIndex) {
    const tbody = table.querySelector("tbody");
    const rows = Array.from(tbody.querySelectorAll("tr"));

    rows.sort((a, b) => {
      const aText = a.cells[columnIndex].textContent;
      const bText = b.cells[columnIndex].textContent;

      // Try to parse as numbers
      const aNum = parseFloat(aText);
      const bNum = parseFloat(bText);

      if (!isNaN(aNum) && !isNaN(bNum)) {
        return aNum - bNum;
      }

      return aText.localeCompare(bText);
    });

    // Re-append sorted rows
    rows.forEach((row) => tbody.appendChild(row));
  }
}
```

### Challenge 2: Modal Dialog System

Create a reusable modal dialog system.

```javascript
function createModalSystem() {
    let currentModal = null;

    return {
        create: function(options) {
            // options: { title, content, buttons, closeOnBackdrop }

            // Create modal structure
            const modal = document.createElement('div');
            modal.className = 'modal-overlay';

            const modalContent = document.createElement('div');
            modalContent.className = 'modal-content';

            // Create header
            const header = // Your code here
            const title = // Your code here
            const closeBtn = // Your code here

            // Create body
            const body = // Your code here

            // Create footer with buttons
            const footer = // Your code here

            // Add event listeners
            closeBtn.addEventListener('click', () => this.close());

            if (options.closeOnBackdrop !== false) {
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        this.close();
                    }
                });
            }

            // Assemble modal
            // Your code here

            return modal;
        },

        show: function(modal) {
            if (currentModal) {
                this.close();
            }

            currentModal = modal;
            document.body.appendChild(modal);

            // Add show animation
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);

            // Focus management
            const firstButton = modal.querySelector('button');
            if (firstButton) {
                firstButton.focus();
            }
        },

        close: function() {
            if (currentModal) {
                currentModal.classList.remove('show');
                setTimeout(() => {
                    if (currentModal && currentModal.parentNode) {
                        currentModal.parentNode.removeChild(currentModal);
                    }
                    currentModal = null;
                }, 300);
            }
        }
    };
}

// Usage
const modalSystem = createModalSystem();

const confirmModal = modalSystem.create({
    title: 'Confirm Action',
    content: 'Are you sure you want to delete this item?',
    buttons: [
        { text: 'Cancel', action: () => modalSystem.close() },
        { text: 'Delete', action: () => { console.log('Deleted'); modalSystem.close(); }, primary: true }
    ]
});

modalSystem.show(confirmModal);
```

**Solution:**

```javascript
function createModalSystem() {
  let currentModal = null;

  // Add CSS styles to document
  const style = document.createElement("style");
  style.textContent = `
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: opacity 0.3s;
            z-index: 1000;
        }
        
        .modal-overlay.show {
            opacity: 1;
        }
        
        .modal-content {
            background: white;
            border-radius: 8px;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow: auto;
            transform: translateY(-50px);
            transition: transform 0.3s;
        }
        
        .modal-overlay.show .modal-content {
            transform: translateY(0);
        }
        
        .modal-header {
            padding: 20px;
            border-bottom: 1px solid #eee;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .modal-body {
            padding: 20px;
        }
        
        .modal-footer {
            padding: 20px;
            border-top: 1px solid #eee;
            display: flex;
            gap: 10px;
            justify-content: flex-end;
        }
        
        .modal-close {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
        }
    `;
  document.head.appendChild(style);

  return {
    create: function (options) {
      const modal = document.createElement("div");
      modal.className = "modal-overlay";

      const modalContent = document.createElement("div");
      modalContent.className = "modal-content";

      // Create header
      const header = document.createElement("div");
      header.className = "modal-header";

      const title = document.createElement("h3");
      title.textContent = options.title || "Modal";

      const closeBtn = document.createElement("button");
      closeBtn.className = "modal-close";
      closeBtn.innerHTML = "&times;";

      header.appendChild(title);
      header.appendChild(closeBtn);

      // Create body
      const body = document.createElement("div");
      body.className = "modal-body";

      if (typeof options.content === "string") {
        body.innerHTML = options.content;
      } else {
        body.appendChild(options.content);
      }

      // Create footer with buttons
      const footer = document.createElement("div");
      footer.className = "modal-footer";

      if (options.buttons) {
        options.buttons.forEach((buttonConfig) => {
          const button = document.createElement("button");
          button.textContent = buttonConfig.text;

          if (buttonConfig.primary) {
            button.style.backgroundColor = "#007bff";
            button.style.color = "white";
          }

          button.addEventListener("click", buttonConfig.action);
          footer.appendChild(button);
        });
      }

      // Add event listeners
      closeBtn.addEventListener("click", () => this.close());

      if (options.closeOnBackdrop !== false) {
        modal.addEventListener("click", (e) => {
          if (e.target === modal) {
            this.close();
          }
        });
      }

      // Assemble modal
      modalContent.appendChild(header);
      modalContent.appendChild(body);
      if (options.buttons) {
        modalContent.appendChild(footer);
      }
      modal.appendChild(modalContent);

      return modal;
    },

    show: function (modal) {
      if (currentModal) {
        this.close();
      }

      currentModal = modal;
      document.body.appendChild(modal);

      setTimeout(() => {
        modal.classList.add("show");
      }, 10);

      const firstButton = modal.querySelector("button");
      if (firstButton) {
        firstButton.focus();
      }
    },

    close: function () {
      if (currentModal) {
        currentModal.classList.remove("show");
        setTimeout(() => {
          if (currentModal && currentModal.parentNode) {
            currentModal.parentNode.removeChild(currentModal);
          }
          currentModal = null;
        }, 300);
      }
    },
  };
}
```

### Challenge 3: Drag and Drop System

Create a drag and drop system for list items.

```javascript
function createDragDropSystem(container) {
  let draggedElement = null;
  let placeholder = null;

  function makeDraggable(element) {
    element.draggable = true;
    element.addEventListener("dragstart", handleDragStart);
    element.addEventListener("dragend", handleDragEnd);
  }

  function handleDragStart(e) {
    // Your implementation here
  }

  function handleDragEnd(e) {
    // Your implementation here
  }

  function handleDragOver(e) {
    // Your implementation here
  }

  function handleDrop(e) {
    // Your implementation here
  }

  // Initialize drag and drop for existing items
  container.addEventListener("dragover", handleDragOver);
  container.addEventListener("drop", handleDrop);

  // Make existing items draggable
  Array.from(container.children).forEach(makeDraggable);

  return {
    addItem: function (text) {
      const item = document.createElement("li");
      item.textContent = text;
      makeDraggable(item);
      container.appendChild(item);
    },

    getOrder: function () {
      return Array.from(container.children).map((item) => item.textContent);
    },
  };
}

// Usage
const list = document.querySelector(".sortable-list");
const dragDrop = createDragDropSystem(list);

dragDrop.addItem("Draggable Item 1");
dragDrop.addItem("Draggable Item 2");
dragDrop.addItem("Draggable Item 3");
```

**Solution:**

```javascript
function createDragDropSystem(container) {
  let draggedElement = null;
  let placeholder = null;

  function makeDraggable(element) {
    element.draggable = true;
    element.style.cursor = "move";
    element.addEventListener("dragstart", handleDragStart);
    element.addEventListener("dragend", handleDragEnd);
  }

  function handleDragStart(e) {
    draggedElement = e.target;

    // Create placeholder
    placeholder = document.createElement("li");
    placeholder.className = "drag-placeholder";
    placeholder.style.height = draggedElement.offsetHeight + "px";
    placeholder.style.backgroundColor = "#f0f0f0";
    placeholder.style.border = "2px dashed #ccc";
    placeholder.style.listStyle = "none";

    e.dataTransfer.effectAllowed = "move";

    // Add visual feedback
    setTimeout(() => {
      draggedElement.style.opacity = "0.5";
    }, 0);
  }

  function handleDragEnd(e) {
    draggedElement.style.opacity = "1";

    if (placeholder && placeholder.parentNode) {
      placeholder.parentNode.removeChild(placeholder);
    }

    draggedElement = null;
    placeholder = null;
  }

  function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";

    if (draggedElement && placeholder) {
      const afterElement = getDragAfterElement(container, e.clientY);

      if (afterElement == null) {
        container.appendChild(placeholder);
      } else {
        container.insertBefore(placeholder, afterElement);
      }
    }
  }

  function handleDrop(e) {
    e.preventDefault();

    if (draggedElement && placeholder) {
      container.insertBefore(draggedElement, placeholder);
      container.removeChild(placeholder);
    }
  }

  function getDragAfterElement(container, y) {
    const draggableElements = [
      ...container.querySelectorAll("li:not(.drag-placeholder)"),
    ];

    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY },
    ).element;
  }

  // Initialize drag and drop for existing items
  container.addEventListener("dragover", handleDragOver);
  container.addEventListener("drop", handleDrop);

  // Make existing items draggable
  Array.from(container.children).forEach(makeDraggable);

  return {
    addItem: function (text) {
      const item = document.createElement("li");
      item.textContent = text;
      item.style.padding = "10px";
      item.style.margin = "5px 0";
      item.style.backgroundColor = "#fff";
      item.style.border = "1px solid #ddd";
      item.style.borderRadius = "4px";
      makeDraggable(item);
      container.appendChild(item);
    },

    getOrder: function () {
      return Array.from(container.children)
        .filter((item) => !item.classList.contains("drag-placeholder"))
        .map((item) => item.textContent);
    },
  };
}
```

## Real-World Applications

### Application 1: Dynamic Form Builder

Create a system for building forms dynamically.

```javascript
function createFormBuilder() {
  return {
    build: function (formConfig, container) {
      const form = document.createElement("form");
      form.className = "dynamic-form";

      formConfig.fields.forEach((field) => {
        const fieldContainer = this.createField(field);
        form.appendChild(fieldContainer);
      });

      // Add submit button
      const submitBtn = document.createElement("button");
      submitBtn.type = "submit";
      submitBtn.textContent = formConfig.submitText || "Submit";
      form.appendChild(submitBtn);

      // Add form submission handler
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = this.getFormData(form);

        if (formConfig.onSubmit) {
          formConfig.onSubmit(formData);
        }
      });

      container.appendChild(form);
      return form;
    },

    createField: function (fieldConfig) {
      const container = document.createElement("div");
      container.className = "form-field";

      const label = document.createElement("label");
      label.textContent = fieldConfig.label;
      label.setAttribute("for", fieldConfig.name);
      container.appendChild(label);

      let input;

      switch (fieldConfig.type) {
        case "select":
          input = document.createElement("select");
          fieldConfig.options.forEach((option) => {
            const optionEl = document.createElement("option");
            optionEl.value = option.value;
            optionEl.textContent = option.text;
            input.appendChild(optionEl);
          });
          break;

        case "textarea":
          input = document.createElement("textarea");
          input.rows = fieldConfig.rows || 4;
          break;

        case "checkbox":
          input = document.createElement("input");
          input.type = "checkbox";
          break;

        default:
          input = document.createElement("input");
          input.type = fieldConfig.type || "text";
      }

      input.name = fieldConfig.name;
      input.id = fieldConfig.name;

      if (fieldConfig.required) {
        input.required = true;
      }

      if (fieldConfig.placeholder) {
        input.placeholder = fieldConfig.placeholder;
      }

      container.appendChild(input);

      return container;
    },

    getFormData: function (form) {
      const formData = new FormData(form);
      const data = {};

      for (let [key, value] of formData.entries()) {
        data[key] = value;
      }

      return data;
    },
  };
}

// Usage
const formBuilder = createFormBuilder();
const formConfig = {
  fields: [
    { name: "name", label: "Full Name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "age", label: "Age", type: "number" },
    {
      name: "country",
      label: "Country",
      type: "select",
      options: [
        { value: "us", text: "United States" },
        { value: "ca", text: "Canada" },
        { value: "uk", text: "United Kingdom" },
      ],
    },
    { name: "message", label: "Message", type: "textarea", rows: 4 },
    { name: "newsletter", label: "Subscribe to newsletter", type: "checkbox" },
  ],
  submitText: "Send Message",
  onSubmit: function (data) {
    console.log("Form submitted:", data);
  },
};

const container = document.getElementById("form-container");
formBuilder.build(formConfig, container);
```

## Self-Assessment Checklist

- [ ] I can select DOM elements using various methods
- [ ] I understand how to modify element content and attributes
- [ ] I can create new elements and add them to the DOM
- [ ] I can manipulate CSS classes and inline styles
- [ ] I can remove and replace elements in the DOM
- [ ] I understand event delegation and bubbling
- [ ] I can create dynamic content based on data
- [ ] I can implement complex UI components using DOM manipulation
- [ ] I understand performance considerations in DOM manipulation
- [ ] I can debug DOM-related issues effectively

## Additional Practice Resources

1. Build interactive components (tabs, accordions, carousels)
2. Create data visualization with pure DOM manipulation
3. Implement common UI patterns (modal dialogs, tooltips, dropdowns)
4. Practice with form validation and dynamic form building
5. Build drag-and-drop interfaces
6. Create single-page applications using DOM manipulation
7. Practice performance optimization techniques

---

**Next Topic:** [11 - Events and Forms](./11-events-and-forms-exercises.md)
