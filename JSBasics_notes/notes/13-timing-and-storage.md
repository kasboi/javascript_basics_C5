# Timing and Storage

> **Topic**: Timing & Storage  
> **Concepts Covered**: `setTimeout`, `setInterval`, `localStorage`

## Timing in JavaScript

JavaScript provides several functions to execute code after a delay or at regular intervals.

## setTimeout

`setTimeout` executes a function once after a specified delay (in milliseconds).

### Basic setTimeout

```javascript
// Execute after 2 seconds (2000 milliseconds)
setTimeout(function () {
  console.log("This runs after 2 seconds");
}, 2000);

// Arrow function version
setTimeout(() => {
  console.log("This also runs after 2 seconds");
}, 2000);

// Named function
function delayedMessage() {
  console.log("Delayed message");
}
setTimeout(delayedMessage, 1000);
```

### setTimeout with Parameters

```javascript
function greetUser(name, greeting) {
  console.log(`${greeting}, ${name}!`);
}

// Pass parameters after the delay
setTimeout(greetUser, 1500, "Alice", "Hello");
// Output after 1.5 seconds: "Hello, Alice!"
```

### Canceling setTimeout

```javascript
// Store the timeout ID
const timeoutId = setTimeout(() => {
  console.log("This might not run");
}, 3000);

// Cancel the timeout before it executes
clearTimeout(timeoutId);
console.log("Timeout canceled");
```

### Practical setTimeout Examples

```javascript
// Show a notification that disappears
function showNotification(message, duration = 3000) {
  const notification = document.createElement("div");
  notification.textContent = message;
  notification.className = "notification";
  document.body.appendChild(notification);

  // Remove notification after duration
  setTimeout(() => {
    notification.remove();
  }, duration);
}

// Delayed form validation
function validateField(input) {
  const timeoutId = setTimeout(() => {
    if (input.value.length < 3) {
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  }, 500); // Wait 500ms after user stops typing

  // Store timeout ID to cancel if user types again
  input.timeoutId = timeoutId;
}

// Usage with debouncing
const searchInput = document.querySelector("#search");
searchInput.addEventListener("input", function () {
  // Cancel previous timeout
  if (this.timeoutId) {
    clearTimeout(this.timeoutId);
  }

  // Set new timeout
  this.timeoutId = setTimeout(() => {
    performSearch(this.value);
  }, 300);
});
```

## setInterval

`setInterval` executes a function repeatedly at specified intervals.

### Basic setInterval

```javascript
// Execute every 1 second
const intervalId = setInterval(() => {
  console.log("This runs every second");
}, 1000);

// Stop after 5 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval stopped");
}, 5000);
```

### Clock Example

```javascript
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();

  const clockElement = document.querySelector("#clock");
  if (clockElement) {
    clockElement.textContent = timeString;
  }

  console.log(timeString);
}

// Update every second
const clockInterval = setInterval(updateClock, 1000);

// Initial call to show time immediately
updateClock();
```

### Counter Example

```javascript
function createCounter() {
  let count = 0;
  const display = document.querySelector("#counter-display");

  const counterId = setInterval(() => {
    count++;
    display.textContent = count;

    // Stop at 10
    if (count >= 10) {
      clearInterval(counterId);
      console.log("Counter finished");
    }
  }, 1000);

  return counterId; // Return ID so it can be stopped externally
}

const counter = createCounter();

// Stop button
document.querySelector("#stop-counter").addEventListener("click", () => {
  clearInterval(counter);
});
```

### Progress Bar Example

```javascript
function animateProgressBar(elementId, duration = 3000) {
  const progressBar = document.querySelector(`#${elementId}`);
  let progress = 0;
  const increment = 100 / (duration / 50); // Update every 50ms

  const intervalId = setInterval(() => {
    progress += increment;
    progressBar.style.width = `${Math.min(progress, 100)}%`;

    if (progress >= 100) {
      clearInterval(intervalId);
      console.log("Progress complete!");
    }
  }, 50);
}

// Start a 5-second progress bar
animateProgressBar("progress", 5000);
```

## Local Storage

`localStorage` allows you to store data in the browser that persists even after the page is closed.

### Basic localStorage Operations

```javascript
// Store data
localStorage.setItem("username", "john_doe");
localStorage.setItem("theme", "dark");

// Retrieve data
const username = localStorage.getItem("username");
const theme = localStorage.getItem("theme");

console.log(username); // "john_doe"
console.log(theme); // "dark"

// Remove specific item
localStorage.removeItem("theme");

// Clear all localStorage
localStorage.clear();

// Check if item exists
if (localStorage.getItem("username")) {
  console.log("User is logged in");
}
```

### Storing Objects and Arrays

```javascript
// localStorage only stores strings, so we need JSON
const user = {
  name: "Alice",
  age: 25,
  preferences: {
    theme: "dark",
    notifications: true,
  },
};

// Store object
localStorage.setItem("user", JSON.stringify(user));

// Retrieve object
const retrievedUser = JSON.parse(localStorage.getItem("user"));
console.log(retrievedUser.name); // "Alice"

// Store array
const todoList = ["Buy groceries", "Walk the dog", "Finish project"];
localStorage.setItem("todos", JSON.stringify(todoList));

// Retrieve array
const retrievedTodos = JSON.parse(localStorage.getItem("todos"));
console.log(retrievedTodos); // ['Buy groceries', 'Walk the dog', 'Finish project']
```

### Helper Functions for localStorage

```javascript
// Utility functions for easier localStorage handling
const storage = {
  // Set item (automatically stringify objects)
  set(key, value) {
    try {
      const serialized =
        typeof value === "string" ? value : JSON.stringify(value);
      localStorage.setItem(key, serialized);
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  },

  // Get item (automatically parse JSON)
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      if (item === null) return defaultValue;

      // Try to parse as JSON, fallback to string
      try {
        return JSON.parse(item);
      } catch {
        return item;
      }
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return defaultValue;
    }
  },

  // Remove item
  remove(key) {
    localStorage.removeItem(key);
  },

  // Clear all
  clear() {
    localStorage.clear();
  },

  // Check if key exists
  has(key) {
    return localStorage.getItem(key) !== null;
  },
};

// Usage
storage.set("user", { name: "John", age: 30 });
storage.set("theme", "dark");

const user = storage.get("user");
const theme = storage.get("theme", "light"); // Default to 'light' if not found
```

## Practical Examples

### Auto-Save Feature

```javascript
class AutoSave {
  constructor(formSelector, saveKey, interval = 5000) {
    this.form = document.querySelector(formSelector);
    this.saveKey = saveKey;
    this.interval = interval;
    this.autoSaveId = null;

    this.init();
  }

  init() {
    // Load saved data on page load
    this.loadData();

    // Start auto-save
    this.startAutoSave();

    // Save on form change
    this.form.addEventListener("input", () => {
      this.saveData();
    });

    // Clear saved data on successful submit
    this.form.addEventListener("submit", () => {
      this.clearSavedData();
    });
  }

  saveData() {
    const formData = new FormData(this.form);
    const data = {};

    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }

    localStorage.setItem(
      this.saveKey,
      JSON.stringify({
        data,
        timestamp: new Date().toISOString(),
      }),
    );

    this.showSaveIndicator();
  }

  loadData() {
    const saved = localStorage.getItem(this.saveKey);
    if (!saved) return;

    try {
      const { data, timestamp } = JSON.parse(saved);

      // Load data into form
      Object.entries(data).forEach(([key, value]) => {
        const input = this.form.querySelector(`[name="${key}"]`);
        if (input) {
          input.value = value;
        }
      });

      // Show restore notification
      this.showRestoreNotification(timestamp);
    } catch (error) {
      console.error("Error loading saved data:", error);
    }
  }

  startAutoSave() {
    this.autoSaveId = setInterval(() => {
      this.saveData();
    }, this.interval);
  }

  clearSavedData() {
    localStorage.removeItem(this.saveKey);
    if (this.autoSaveId) {
      clearInterval(this.autoSaveId);
    }
  }

  showSaveIndicator() {
    // Briefly show save indicator
    const indicator = document.querySelector("#save-indicator");
    if (indicator) {
      indicator.textContent = "Draft saved";
      indicator.style.opacity = "1";

      setTimeout(() => {
        indicator.style.opacity = "0";
      }, 1000);
    }
  }

  showRestoreNotification(timestamp) {
    const time = new Date(timestamp).toLocaleString();
    alert(`Restored draft from ${time}`);
  }
}

// Initialize auto-save for a form
const autoSave = new AutoSave("#contact-form", "contact-form-draft", 3000);
```

### Settings Management

```javascript
class SettingsManager {
  constructor() {
    this.settings = this.loadSettings();
    this.applySettings();
  }

  loadSettings() {
    const defaultSettings = {
      theme: "light",
      fontSize: "medium",
      notifications: true,
      autoSave: true,
    };

    const saved = localStorage.getItem("app-settings");
    if (saved) {
      try {
        return { ...defaultSettings, ...JSON.parse(saved) };
      } catch (error) {
        console.error("Error loading settings:", error);
        return defaultSettings;
      }
    }

    return defaultSettings;
  }

  saveSettings() {
    localStorage.setItem("app-settings", JSON.stringify(this.settings));
  }

  set(key, value) {
    this.settings[key] = value;
    this.saveSettings();
    this.applySettings();
  }

  get(key) {
    return this.settings[key];
  }

  applySettings() {
    // Apply theme
    document.body.className = `theme-${this.settings.theme}`;

    // Apply font size
    document.body.style.fontSize = {
      small: "14px",
      medium: "16px",
      large: "18px",
    }[this.settings.fontSize];

    // Update UI controls
    this.updateUI();
  }

  updateUI() {
    const themeSelect = document.querySelector("#theme-select");
    const fontSizeSelect = document.querySelector("#font-size-select");
    const notificationsCheckbox = document.querySelector(
      "#notifications-checkbox",
    );

    if (themeSelect) themeSelect.value = this.settings.theme;
    if (fontSizeSelect) fontSizeSelect.value = this.settings.fontSize;
    if (notificationsCheckbox)
      notificationsCheckbox.checked = this.settings.notifications;
  }

  reset() {
    localStorage.removeItem("app-settings");
    this.settings = this.loadSettings();
    this.applySettings();
  }
}

// Initialize settings
const settings = new SettingsManager();

// Example usage
document.querySelector("#theme-select")?.addEventListener("change", (e) => {
  settings.set("theme", e.target.value);
});
```

### Session Timer

```javascript
class SessionTimer {
  constructor(warningTime = 25 * 60 * 1000, sessionTime = 30 * 60 * 1000) {
    this.warningTime = warningTime; // 25 minutes
    this.sessionTime = sessionTime; // 30 minutes
    this.startTime = Date.now();
    this.warningShown = false;

    this.init();
  }

  init() {
    // Check every minute
    this.intervalId = setInterval(() => {
      this.checkSession();
    }, 60000);

    // Store session start time
    localStorage.setItem("sessionStart", this.startTime.toString());

    // Check on page load if session already exists
    this.checkExistingSession();
  }

  checkExistingSession() {
    const savedStart = localStorage.getItem("sessionStart");
    if (savedStart) {
      const elapsed = Date.now() - parseInt(savedStart);
      if (elapsed > this.sessionTime) {
        this.expireSession();
      } else {
        this.startTime = parseInt(savedStart);
      }
    }
  }

  checkSession() {
    const elapsed = Date.now() - this.startTime;

    if (elapsed > this.sessionTime) {
      this.expireSession();
    } else if (elapsed > this.warningTime && !this.warningShown) {
      this.showWarning();
    }
  }

  showWarning() {
    this.warningShown = true;
    const remaining = Math.ceil(
      (this.sessionTime - (Date.now() - this.startTime)) / 60000,
    );

    if (
      confirm(`Your session will expire in ${remaining} minutes. Continue?`)
    ) {
      this.extendSession();
    }
  }

  extendSession() {
    this.startTime = Date.now();
    this.warningShown = false;
    localStorage.setItem("sessionStart", this.startTime.toString());
    console.log("Session extended");
  }

  expireSession() {
    clearInterval(this.intervalId);
    localStorage.removeItem("sessionStart");
    alert("Your session has expired. Please log in again.");
    // Redirect to login or refresh page
    window.location.reload();
  }

  destroy() {
    clearInterval(this.intervalId);
    localStorage.removeItem("sessionStart");
  }
}

// Start session timer when user logs in
const sessionTimer = new SessionTimer();
```

## Best Practices

### Timing Functions

1. **Always clear timers**: Use `clearTimeout` and `clearInterval` to prevent memory leaks
2. **Store timer IDs**: So you can cancel them when needed
3. **Handle page unload**: Clear timers before page closes

```javascript
// Good practice: cleanup on page unload
window.addEventListener("beforeunload", () => {
  // Clear all active timers
  if (clockInterval) clearInterval(clockInterval);
  if (autoSaveTimer) clearTimeout(autoSaveTimer);
});
```

### localStorage

1. **Always use try-catch**: localStorage can throw errors
2. **Check for support**: Not all browsers support localStorage
3. **Handle quota exceeded**: localStorage has size limits
4. **Don't store sensitive data**: localStorage is not secure

```javascript
// Check for localStorage support
function storageAvailable() {
  try {
    const test = "__storage_test__";
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

if (storageAvailable()) {
  // Use localStorage
} else {
  // Fallback to cookies or server storage
}
```

## Common Pitfalls

1. **Memory leaks**: Not clearing intervals and timeouts
2. **localStorage errors**: Not handling exceptions
3. **JSON parsing errors**: Malformed data in localStorage
4. **Timer precision**: JavaScript timers are not perfectly accurate

## Key Takeaways

- **setTimeout**: Execute code once after a delay
- **setInterval**: Execute code repeatedly at intervals
- **localStorage**: Persist data in the browser
- **Always clean up**: Clear timers and handle errors
- **JSON for objects**: localStorage only stores strings
- **User experience**: Use timing for smooth interactions and auto-save features

## Practice Exercises

1. Create a pomodoro timer with localStorage persistence
2. Build an auto-save text editor
3. Make a real-time countdown timer
4. Create a user preferences system
5. Build a session management system with warnings
