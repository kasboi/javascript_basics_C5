# Timing & Storage - Exercises

## Topic: Timing & Storage

Key concepts: setTimeout, setInterval, clearTimeout, clearInterval, localStorage, sessionStorage

---

## Multiple Choice Questions

### Question 1

What does setTimeout return?

- A) Nothing (undefined)
- B) A timer ID that can be used with clearTimeout
- C) The delay time in milliseconds
- D) A promise that resolves after the delay

**Answer: B**
**Explanation:** setTimeout returns a timer ID (number) that can be passed to clearTimeout to cancel the timer.

### Question 2

What's the difference between localStorage and sessionStorage?

- A) localStorage is faster than sessionStorage
- B) localStorage persists after browser closes, sessionStorage doesn't
- C) localStorage can store more data than sessionStorage
- D) No difference

**Answer: B**
**Explanation:** localStorage data persists until explicitly cleared, while sessionStorage data is cleared when the tab/browser closes.

### Question 3

How do you stop a setInterval timer?

- A) setInterval.stop()
- B) clearInterval(timerId)
- C) cancelInterval(timerId)
- D) stopInterval(timerId)

**Answer: B**
**Explanation:** clearInterval() is used to stop a timer created by setInterval().

### Question 4

What happens if you store an object in localStorage?

- A) It stores the object directly
- B) It converts the object to [object Object]
- C) It throws an error
- D) It only stores the object's keys

**Answer: B**
**Explanation:** localStorage only stores strings, so objects are converted to strings (usually "[object Object]" unless you use JSON.stringify).

### Question 5

What's the minimum delay for setTimeout?

- A) 0 milliseconds
- B) 1 millisecond
- C) 4 milliseconds (in most browsers)
- D) 10 milliseconds

**Answer: C**
**Explanation:** Most browsers have a minimum timeout delay of 4ms for nested timeouts or when using 0.

### Question 6

How do you remove an item from localStorage?

- A) localStorage.delete('key')
- B) localStorage.remove('key')
- C) localStorage.removeItem('key')
- D) delete localStorage.key

**Answer: C**
**Explanation:** localStorage.removeItem() is the correct method to remove a specific item.

---

## Practical Exercises

### Exercise 1: Simple Timer

Create a countdown timer that displays the remaining time.

```javascript
function createCountdown(seconds) {
  // TODO: Create a countdown that logs the remaining seconds
  // When it reaches 0, log "Time's up!"
  // Return the timer ID so it can be cancelled
}

// Test the function
const timerId = createCountdown(5);
// Should log: 5, 4, 3, 2, 1, Time's up!
```

**Solution:**

```javascript
function createCountdown(seconds) {
  console.log(seconds);

  const timerId = setInterval(() => {
    seconds--;
    if (seconds > 0) {
      console.log(seconds);
    } else {
      console.log("Time's up!");
      clearInterval(timerId);
    }
  }, 1000);

  return timerId;
}
```

### Exercise 2: Auto-save Feature

Create an auto-save function that saves form data to localStorage.

```javascript
function setupAutoSave(formId, saveInterval = 5000) {
  // TODO:
  // 1. Get the form element
  // 2. Set up an interval to save form data every saveInterval ms
  // 3. Save all form inputs to localStorage with key 'autosave_' + formId
  // 4. Return a function to stop auto-saving
}

// Usage example (you can test this logic without actual DOM):
// const stopAutoSave = setupAutoSave('contact-form', 3000);
```

**Solution:**

```javascript
function setupAutoSave(formId, saveInterval = 5000) {
  const form = document.getElementById(formId);
  if (!form) {
    console.error("Form not found");
    return () => {};
  }

  const saveFormData = () => {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    localStorage.setItem(`autosave_${formId}`, JSON.stringify(data));
    console.log("Form data auto-saved");
  };

  const intervalId = setInterval(saveFormData, saveInterval);

  return () => {
    clearInterval(intervalId);
    console.log("Auto-save stopped");
  };
}
```

### Exercise 3: localStorage Wrapper

Create a utility class for easier localStorage management.

```javascript
class StorageManager {
  // TODO: Implement methods:
  // - set(key, value) - store any type of data
  // - get(key) - retrieve and parse data
  // - remove(key) - remove specific item
  // - clear() - clear all storage
  // - has(key) - check if key exists
  // - getAll() - return all stored data as object
}

// Test the class
const storage = new StorageManager();
storage.set("user", { name: "John", age: 30 });
storage.set("theme", "dark");
console.log(storage.get("user")); // { name: 'John', age: 30 }
console.log(storage.has("theme")); // true
console.log(storage.getAll()); // { user: {...}, theme: 'dark' }
```

**Solution:**

```javascript
class StorageManager {
  set(key, value) {
    try {
      const serialized = JSON.stringify(value);
      localStorage.setItem(key, serialized);
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }

  get(key) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error("Error parsing from localStorage:", error);
      return null;
    }
  }

  remove(key) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }

  has(key) {
    return localStorage.getItem(key) !== null;
  }

  getAll() {
    const all = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      all[key] = this.get(key);
    }
    return all;
  }
}
```

### Exercise 4: Delayed Execution Queue

Create a system to execute functions with delays.

```javascript
class DelayedQueue {
  constructor() {
    this.queue = [];
    this.timers = [];
  }

  // TODO: Add method to add functions to queue with delay
  add(fn, delay) {
    // Add function to be executed after delay
  }

  // TODO: Add method to execute all queued functions
  execute() {
    // Execute all queued functions with their delays
  }

  // TODO: Add method to cancel all pending executions
  cancelAll() {
    // Clear all pending timers
  }
}

// Test usage
const queue = new DelayedQueue();
queue.add(() => console.log("First"), 1000);
queue.add(() => console.log("Second"), 2000);
queue.add(() => console.log("Third"), 500);
queue.execute();
// Should log: "Third" (after 500ms), "First" (after 1000ms), "Second" (after 2000ms)
```

**Solution:**

```javascript
class DelayedQueue {
  constructor() {
    this.queue = [];
    this.timers = [];
  }

  add(fn, delay) {
    this.queue.push({ fn, delay });
  }

  execute() {
    this.queue.forEach((item, index) => {
      const timerId = setTimeout(() => {
        item.fn();
        // Remove completed timer from tracking
        this.timers = this.timers.filter((id) => id !== timerId);
      }, item.delay);

      this.timers.push(timerId);
    });

    // Clear queue after scheduling
    this.queue = [];
  }

  cancelAll() {
    this.timers.forEach((timerId) => clearTimeout(timerId));
    this.timers = [];
    this.queue = [];
  }
}
```

### Exercise 5: Debounced Search

Create a debounced search function that delays API calls.

```javascript
function createDebouncedSearch(searchFunction, delay = 300) {
  // TODO: Return a function that:
  // 1. Cancels previous timer if new search happens
  // 2. Sets new timer to call searchFunction after delay
  // 3. Only executes the latest search request

  let timerId;

  return function (searchTerm) {
    // Implement debouncing logic here
  };
}

// Mock search function
function mockApiSearch(term) {
  console.log(`Searching for: ${term}`);
}

// Test the debounced search
const debouncedSearch = createDebouncedSearch(mockApiSearch, 500);
debouncedSearch("a"); // Should not execute
debouncedSearch("ap"); // Should not execute
debouncedSearch("app"); // Should execute after 500ms
```

**Solution:**

```javascript
function createDebouncedSearch(searchFunction, delay = 300) {
  let timerId;

  return function (searchTerm) {
    // Clear previous timer
    clearTimeout(timerId);

    // Set new timer
    timerId = setTimeout(() => {
      searchFunction(searchTerm);
    }, delay);
  };
}
```

### Exercise 6: Session Persistence

Create a system to persist form data across browser sessions.

```javascript
class FormPersistence {
  constructor(formId) {
    this.formId = formId;
    this.storageKey = `form_data_${formId}`;
  }

  // TODO: Save current form state to sessionStorage
  saveState() {
    // Get all form inputs and save their values
  }

  // TODO: Restore form state from sessionStorage
  restoreState() {
    // Load saved values and populate form inputs
  }

  // TODO: Clear saved state
  clearState() {
    // Remove saved data from sessionStorage
  }

  // TODO: Auto-save on form changes
  enableAutoSave() {
    // Set up event listeners to save on input changes
  }
}

// Usage
const formPersistence = new FormPersistence("user-form");
formPersistence.restoreState(); // Load saved data on page load
formPersistence.enableAutoSave(); // Save automatically on changes
```

**Solution:**

```javascript
class FormPersistence {
  constructor(formId) {
    this.formId = formId;
    this.storageKey = `form_data_${formId}`;
    this.form = document.getElementById(formId);
  }

  saveState() {
    if (!this.form) return;

    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData);
    sessionStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  restoreState() {
    if (!this.form) return;

    const savedData = sessionStorage.getItem(this.storageKey);
    if (!savedData) return;

    try {
      const data = JSON.parse(savedData);

      Object.entries(data).forEach(([name, value]) => {
        const input = this.form.querySelector(`[name="${name}"]`);
        if (input) {
          if (input.type === "checkbox" || input.type === "radio") {
            input.checked = input.value === value;
          } else {
            input.value = value;
          }
        }
      });
    } catch (error) {
      console.error("Error restoring form state:", error);
    }
  }

  clearState() {
    sessionStorage.removeItem(this.storageKey);
  }

  enableAutoSave() {
    if (!this.form) return;

    this.form.addEventListener("input", () => {
      this.saveState();
    });

    this.form.addEventListener("change", () => {
      this.saveState();
    });
  }
}
```

---

## JavaScript Test Functions

```javascript
// Test functions for Timing & Storage exercises
function testTimingAndStorage() {
  console.log("🧪 Testing Timing & Storage...\n");

  // Test setTimeout
  function testSetTimeout() {
    let executed = false;
    const timerId = setTimeout(() => {
      executed = true;
    }, 100);

    // Test that timerId is a number
    const hasValidId = typeof timerId === "number";
    console.log(`setTimeout returns ID: ${hasValidId ? "✅ PASS" : "❌ FAIL"}`);

    // Test cancellation
    clearTimeout(timerId);
    setTimeout(() => {
      console.log(
        `setTimeout cancellation: ${!executed ? "✅ PASS" : "❌ FAIL"}`,
      );
    }, 150);
  }

  // Test setInterval
  function testSetInterval() {
    let count = 0;
    const intervalId = setInterval(() => {
      count++;
      if (count >= 3) {
        clearInterval(intervalId);
        console.log(
          `setInterval execution: ${count === 3 ? "✅ PASS" : "❌ FAIL"}`,
        );
      }
    }, 50);
  }

  // Test localStorage
  function testLocalStorage() {
    try {
      // Test basic operations
      localStorage.setItem("test", "value");
      const retrieved = localStorage.getItem("test");

      // Test JSON storage
      const obj = { name: "test", value: 123 };
      localStorage.setItem("testObj", JSON.stringify(obj));
      const retrievedObj = JSON.parse(localStorage.getItem("testObj"));

      // Test removal
      localStorage.removeItem("test");
      const removed = localStorage.getItem("test");

      const basicTest = retrieved === "value";
      const objTest =
        retrievedObj.name === "test" && retrievedObj.value === 123;
      const removeTest = removed === null;

      console.log(`localStorage basic: ${basicTest ? "✅ PASS" : "❌ FAIL"}`);
      console.log(`localStorage JSON: ${objTest ? "✅ PASS" : "❌ FAIL"}`);
      console.log(`localStorage remove: ${removeTest ? "✅ PASS" : "❌ FAIL"}`);

      // Cleanup
      localStorage.removeItem("testObj");
    } catch (error) {
      console.log(`localStorage test: ❌ FAIL (${error.message})`);
    }
  }

  // Test sessionStorage
  function testSessionStorage() {
    try {
      sessionStorage.setItem("sessionTest", "sessionValue");
      const retrieved = sessionStorage.getItem("sessionTest");
      sessionStorage.removeItem("sessionTest");

      console.log(
        `sessionStorage: ${
          retrieved === "sessionValue" ? "✅ PASS" : "❌ FAIL"
        }`,
      );
    } catch (error) {
      console.log(`sessionStorage test: ❌ FAIL (${error.message})`);
    }
  }

  // Test debouncing
  function testDebouncing() {
    let callCount = 0;
    let lastValue = "";

    const mockFunction = (value) => {
      callCount++;
      lastValue = value;
    };

    const debounced = createDebouncedSearch(mockFunction, 100);

    // Rapid calls
    debounced("a");
    debounced("ab");
    debounced("abc");

    setTimeout(() => {
      const debounceTest = callCount === 1 && lastValue === "abc";
      console.log(`Debouncing: ${debounceTest ? "✅ PASS" : "❌ FAIL"}`);
    }, 150);
  }

  testSetTimeout();
  testSetInterval();
  testLocalStorage();
  testSessionStorage();
  testDebouncing();

  console.log("\n✨ Timing & Storage tests completed!");
}

// Helper function for debouncing test
function createDebouncedSearch(searchFunction, delay = 300) {
  let timerId;
  return function (searchTerm) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      searchFunction(searchTerm);
    }, delay);
  };
}

// Run the tests
testTimingAndStorage();
```

---

## Challenge Problems

### Challenge 1: Smart Notification System

Create a notification system with timing and persistence.

```javascript
class NotificationSystem {
  constructor() {
    this.notifications = [];
    this.timers = new Map();
    this.loadFromStorage();
  }

  // Add notification with auto-dismiss
  add(message, type = "info", duration = 5000, persistent = false) {
    const notification = {
      id: Date.now() + Math.random(),
      message,
      type,
      timestamp: new Date().toISOString(),
      persistent,
    };

    this.notifications.push(notification);
    this.saveToStorage();
    this.display(notification);

    if (duration > 0) {
      this.scheduleRemoval(notification.id, duration);
    }

    return notification.id;
  }

  // Remove notification
  remove(id) {
    // TODO: Implement removal logic
    // Clear timer, remove from array, update storage
  }

  // Schedule auto-removal
  scheduleRemoval(id, delay) {
    // TODO: Set timeout to remove notification
    // Store timer ID for potential cancellation
  }

  // Save to localStorage
  saveToStorage() {
    // TODO: Save non-persistent notifications to localStorage
  }

  // Load from localStorage
  loadFromStorage() {
    // TODO: Load and restore notifications from localStorage
  }

  // Display notification (mock implementation)
  display(notification) {
    console.log(
      `📢 [${notification.type.toUpperCase()}] ${notification.message}`,
    );
  }
}

// Test the system
const notifications = new NotificationSystem();
notifications.add("Welcome back!", "success", 3000);
notifications.add("You have 3 unread messages", "info", 0, true); // Persistent
notifications.add("Connection lost", "error", 5000);
```

**Solution:**

```javascript
class NotificationSystem {
  constructor() {
    this.notifications = [];
    this.timers = new Map();
    this.loadFromStorage();
  }

  add(message, type = "info", duration = 5000, persistent = false) {
    const notification = {
      id: Date.now() + Math.random(),
      message,
      type,
      timestamp: new Date().toISOString(),
      persistent,
    };

    this.notifications.push(notification);
    this.saveToStorage();
    this.display(notification);

    if (duration > 0) {
      this.scheduleRemoval(notification.id, duration);
    }

    return notification.id;
  }

  remove(id) {
    // Clear timer if exists
    if (this.timers.has(id)) {
      clearTimeout(this.timers.get(id));
      this.timers.delete(id);
    }

    // Remove from array
    this.notifications = this.notifications.filter((n) => n.id !== id);
    this.saveToStorage();

    console.log(`🗑️ Notification ${id} removed`);
  }

  scheduleRemoval(id, delay) {
    const timerId = setTimeout(() => {
      this.remove(id);
    }, delay);

    this.timers.set(id, timerId);
  }

  saveToStorage() {
    const persistentNotifications = this.notifications.filter(
      (n) => !n.persistent,
    );
    localStorage.setItem(
      "notifications",
      JSON.stringify(persistentNotifications),
    );
  }

  loadFromStorage() {
    try {
      const saved = localStorage.getItem("notifications");
      if (saved) {
        this.notifications = JSON.parse(saved);
        // Re-display loaded notifications
        this.notifications.forEach((n) => this.display(n));
      }
    } catch (error) {
      console.error("Error loading notifications:", error);
    }
  }

  display(notification) {
    console.log(
      `📢 [${notification.type.toUpperCase()}] ${notification.message}`,
    );
  }
}
```

### Challenge 2: Performance Monitor

Create a performance monitoring system using timing.

```javascript
class PerformanceMonitor {
  constructor() {
    this.metrics = new Map();
    this.activeTimers = new Map();
  }

  // Start timing an operation
  start(operationName) {
    this.activeTimers.set(operationName, performance.now());
  }

  // End timing and record result
  end(operationName) {
    const startTime = this.activeTimers.get(operationName);
    if (!startTime) {
      console.warn(`No timer found for ${operationName}`);
      return;
    }

    const duration = performance.now() - startTime;
    this.recordMetric(operationName, duration);
    this.activeTimers.delete(operationName);

    return duration;
  }

  // Record a metric
  recordMetric(name, value) {
    if (!this.metrics.has(name)) {
      this.metrics.set(name, []);
    }

    this.metrics.get(name).push({
      value,
      timestamp: Date.now(),
    });

    // Keep only last 100 measurements
    const measurements = this.metrics.get(name);
    if (measurements.length > 100) {
      measurements.splice(0, measurements.length - 100);
    }

    this.saveMetrics();
  }

  // Get statistics for an operation
  getStats(operationName) {
    const measurements = this.metrics.get(operationName);
    if (!measurements || measurements.length === 0) {
      return null;
    }

    const values = measurements.map((m) => m.value);
    return {
      count: values.length,
      min: Math.min(...values),
      max: Math.max(...values),
      avg: values.reduce((a, b) => a + b, 0) / values.length,
      recent: values.slice(-10), // Last 10 measurements
    };
  }

  // Save metrics to localStorage
  saveMetrics() {
    // Convert Map to Object for JSON serialization
    const metricsObj = {};
    this.metrics.forEach((value, key) => {
      metricsObj[key] = value;
    });

    localStorage.setItem("performanceMetrics", JSON.stringify(metricsObj));
  }

  // Load metrics from localStorage
  loadMetrics() {
    try {
      const saved = localStorage.getItem("performanceMetrics");
      if (saved) {
        const metricsObj = JSON.parse(saved);
        this.metrics = new Map(Object.entries(metricsObj));
      }
    } catch (error) {
      console.error("Error loading metrics:", error);
    }
  }
}

// Usage example
const monitor = new PerformanceMonitor();

// Monitor a function
function monitoredFunction(name, fn) {
  return function (...args) {
    monitor.start(name);
    const result = fn.apply(this, args);
    const duration = monitor.end(name);
    console.log(`${name} took ${duration.toFixed(2)}ms`);
    return result;
  };
}

// Test with a sample function
const slowFunction = monitoredFunction("dataProcessing", (data) => {
  // Simulate processing
  const start = Date.now();
  while (Date.now() - start < 100) {}
  return data.length;
});

slowFunction([1, 2, 3, 4, 5]);
console.log(monitor.getStats("dataProcessing"));
```

### Challenge 3: Cache System with TTL

Create a caching system with time-to-live functionality.

```javascript
class TTLCache {
  constructor(defaultTTL = 60000) {
    // 1 minute default
    this.cache = new Map();
    this.timers = new Map();
    this.defaultTTL = defaultTTL;
    this.loadFromStorage();
    this.setupCleanupInterval();
  }

  set(key, value, ttl = this.defaultTTL) {
    // Clear existing timer
    if (this.timers.has(key)) {
      clearTimeout(this.timers.get(key));
    }

    // Store value with expiration
    const expiry = Date.now() + ttl;
    this.cache.set(key, { value, expiry });

    // Set expiration timer
    const timerId = setTimeout(() => {
      this.delete(key);
    }, ttl);

    this.timers.set(key, timerId);
    this.saveToStorage();
  }

  get(key) {
    const item = this.cache.get(key);
    if (!item) return undefined;

    // Check if expired
    if (Date.now() > item.expiry) {
      this.delete(key);
      return undefined;
    }

    return item.value;
  }

  delete(key) {
    // Clear timer
    if (this.timers.has(key)) {
      clearTimeout(this.timers.get(key));
      this.timers.delete(key);
    }

    // Remove from cache
    this.cache.delete(key);
    this.saveToStorage();
  }

  has(key) {
    return this.get(key) !== undefined;
  }

  clear() {
    // Clear all timers
    this.timers.forEach((timerId) => clearTimeout(timerId));
    this.timers.clear();
    this.cache.clear();
    this.saveToStorage();
  }

  // Get cache statistics
  getStats() {
    const now = Date.now();
    let expired = 0;
    let active = 0;

    this.cache.forEach((item) => {
      if (now > item.expiry) {
        expired++;
      } else {
        active++;
      }
    });

    return { total: this.cache.size, active, expired };
  }

  saveToStorage() {
    const cacheData = Array.from(this.cache.entries());
    localStorage.setItem("ttlCache", JSON.stringify(cacheData));
  }

  loadFromStorage() {
    try {
      const saved = localStorage.getItem("ttlCache");
      if (saved) {
        const cacheData = JSON.parse(saved);
        const now = Date.now();

        cacheData.forEach(([key, item]) => {
          if (now < item.expiry) {
            // Item hasn't expired, restore it
            const remainingTTL = item.expiry - now;
            this.set(key, item.value, remainingTTL);
          }
        });
      }
    } catch (error) {
      console.error("Error loading cache:", error);
    }
  }

  setupCleanupInterval() {
    // Clean up expired items every minute
    setInterval(() => {
      this.cleanupExpired();
    }, 60000);
  }

  cleanupExpired() {
    const now = Date.now();
    const expiredKeys = [];

    this.cache.forEach((item, key) => {
      if (now > item.expiry) {
        expiredKeys.push(key);
      }
    });

    expiredKeys.forEach((key) => this.delete(key));

    if (expiredKeys.length > 0) {
      console.log(`Cleaned up ${expiredKeys.length} expired cache entries`);
    }
  }
}

// Usage example
const cache = new TTLCache(5000); // 5 second default TTL

cache.set("user:123", { name: "John", email: "john@example.com" });
cache.set("temp:data", "temporary", 2000); // 2 second TTL

console.log(cache.get("user:123")); // Returns user object
setTimeout(() => {
  console.log(cache.get("temp:data")); // undefined (expired)
}, 3000);

console.log(cache.getStats()); // Cache statistics
```

---

## Debugging Exercises

### Debug 1: Timer Memory Leaks

```javascript
// This code has memory leaks - fix them
function createSlideshow(images, interval = 3000) {
  let currentIndex = 0;

  setInterval(() => {
    console.log(`Showing image: ${images[currentIndex]}`);
    currentIndex = (currentIndex + 1) % images.length;
  }, interval);

  // Problem: No way to stop the slideshow
}

function setupAutoRefresh(url, interval = 30000) {
  setInterval(() => {
    fetch(url).then((response) => {
      console.log("Data refreshed");
    });
  }, interval);

  // Problem: No cleanup when user navigates away
}

// Fix these functions to prevent memory leaks
```

**Fixed Version:**

```javascript
function createSlideshow(images, interval = 3000) {
  let currentIndex = 0;

  const intervalId = setInterval(() => {
    console.log(`Showing image: ${images[currentIndex]}`);
    currentIndex = (currentIndex + 1) % images.length;
  }, interval);

  // Return cleanup function
  return () => clearInterval(intervalId);
}

function setupAutoRefresh(url, interval = 30000) {
  const intervalId = setInterval(() => {
    fetch(url)
      .then((response) => {
        console.log("Data refreshed");
      })
      .catch((error) => {
        console.error("Refresh failed:", error);
      });
  }, interval);

  // Return cleanup function and setup page unload cleanup
  window.addEventListener("beforeunload", () => {
    clearInterval(intervalId);
  });

  return () => clearInterval(intervalId);
}
```

### Debug 2: localStorage Issues

```javascript
// Fix the localStorage usage errors
function saveUserPreferences(preferences) {
  localStorage.setItem("preferences", preferences); // Error: storing object directly
}

function loadUserPreferences() {
  const prefs = localStorage.getItem("preferences");
  return prefs.theme; // Error: prefs might be null
}

function addToFavorites(item) {
  const favorites = localStorage.getItem("favorites");
  favorites.push(item); // Error: favorites is a string
  localStorage.setItem("favorites", favorites);
}
```

**Fixed Version:**

```javascript
function saveUserPreferences(preferences) {
  try {
    localStorage.setItem("preferences", JSON.stringify(preferences));
  } catch (error) {
    console.error("Error saving preferences:", error);
  }
}

function loadUserPreferences() {
  try {
    const prefs = localStorage.getItem("preferences");
    return prefs ? JSON.parse(prefs) : {};
  } catch (error) {
    console.error("Error loading preferences:", error);
    return {};
  }
}

function addToFavorites(item) {
  try {
    const favorites = localStorage.getItem("favorites");
    const favoritesArray = favorites ? JSON.parse(favorites) : [];
    favoritesArray.push(item);
    localStorage.setItem("favorites", JSON.stringify(favoritesArray));
  } catch (error) {
    console.error("Error adding to favorites:", error);
  }
}
```

---

## Real-World Applications

### Application 1: Shopping Cart Persistence

Implement a shopping cart that persists across browser sessions.

```javascript
class ShoppingCart {
  constructor() {
    this.items = [];
    this.storageKey = "shopping_cart";
    this.autoSaveInterval = 2000; // Auto-save every 2 seconds
    this.loadCart();
    this.setupAutoSave();
  }

  addItem(product, quantity = 1) {
    const existingItem = this.items.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        ...product,
        quantity,
        addedAt: new Date().toISOString(),
      });
    }

    this.saveCart();
    this.showNotification(`${product.name} added to cart`);
  }

  removeItem(productId) {
    const initialLength = this.items.length;
    this.items = this.items.filter((item) => item.id !== productId);

    if (this.items.length < initialLength) {
      this.saveCart();
      this.showNotification("Item removed from cart");
    }
  }

  updateQuantity(productId, quantity) {
    const item = this.items.find((item) => item.id === productId);
    if (item) {
      if (quantity <= 0) {
        this.removeItem(productId);
      } else {
        item.quantity = quantity;
        this.saveCart();
      }
    }
  }

  getTotal() {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  }

  getItemCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }

  clear() {
    this.items = [];
    this.saveCart();
    this.showNotification("Cart cleared");
  }

  saveCart() {
    try {
      localStorage.setItem(
        this.storageKey,
        JSON.stringify({
          items: this.items,
          lastUpdated: new Date().toISOString(),
        }),
      );
    } catch (error) {
      console.error("Error saving cart:", error);
    }
  }

  loadCart() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        const cartData = JSON.parse(saved);
        this.items = cartData.items || [];

        // Check if cart is older than 7 days
        const lastUpdated = new Date(cartData.lastUpdated);
        const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

        if (lastUpdated < weekAgo) {
          this.clear();
          this.showNotification("Cart expired and cleared");
        }
      }
    } catch (error) {
      console.error("Error loading cart:", error);
      this.items = [];
    }
  }

  setupAutoSave() {
    // Save cart periodically in case of browser crash
    setInterval(() => {
      if (this.items.length > 0) {
        this.saveCart();
      }
    }, this.autoSaveInterval);

    // Save on page unload
    window.addEventListener("beforeunload", () => {
      this.saveCart();
    });
  }

  showNotification(message) {
    console.log(`🛒 ${message}`);
    // In a real app, this would show a UI notification
  }

  // Get cart summary for display
  getSummary() {
    return {
      itemCount: this.getItemCount(),
      total: this.getTotal(),
      items: this.items.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        subtotal: item.price * item.quantity,
      })),
    };
  }
}

// Usage example
const cart = new ShoppingCart();

// Add items
cart.addItem({ id: 1, name: "Laptop", price: 999.99 });
cart.addItem({ id: 2, name: "Mouse", price: 25.99 }, 2);

console.log("Cart Summary:", cart.getSummary());
// Cart will persist across browser sessions
```

### Application 2: Activity Tracker

Track user activity with timing and persistence.

```javascript
class ActivityTracker {
  constructor() {
    this.sessions = [];
    this.currentSession = null;
    this.idleTimeout = 5 * 60 * 1000; // 5 minutes
    this.idleTimer = null;
    this.storageKey = "activity_tracker";

    this.loadSessions();
    this.setupEventListeners();
    this.startSession();
  }

  startSession() {
    this.currentSession = {
      id: Date.now(),
      startTime: new Date().toISOString(),
      endTime: null,
      activities: [],
      pageViews: [],
      totalIdleTime: 0,
    };

    this.logActivity("session_start");
    this.resetIdleTimer();
  }

  endSession() {
    if (this.currentSession) {
      this.currentSession.endTime = new Date().toISOString();
      this.sessions.push(this.currentSession);
      this.saveSessions();

      this.logActivity("session_end");
      this.currentSession = null;
    }
  }

  logActivity(type, data = {}) {
    if (!this.currentSession) return;

    const activity = {
      type,
      timestamp: new Date().toISOString(),
      data,
    };

    this.currentSession.activities.push(activity);
    this.resetIdleTimer();

    // Auto-save every 10 activities
    if (this.currentSession.activities.length % 10 === 0) {
      this.saveSessions();
    }
  }

  logPageView(url, title) {
    this.logActivity("page_view", { url, title });

    if (this.currentSession) {
      this.currentSession.pageViews.push({
        url,
        title,
        timestamp: new Date().toISOString(),
      });
    }
  }

  resetIdleTimer() {
    if (this.idleTimer) {
      clearTimeout(this.idleTimer);
    }

    this.idleTimer = setTimeout(() => {
      this.handleIdle();
    }, this.idleTimeout);
  }

  handleIdle() {
    this.logActivity("idle_start");

    // Set up wake detection
    const wakeHandler = () => {
      this.logActivity("idle_end");
      this.resetIdleTimer();

      // Remove wake listeners
      document.removeEventListener("mousemove", wakeHandler);
      document.removeEventListener("keypress", wakeHandler);
      document.removeEventListener("scroll", wakeHandler);
      document.removeEventListener("click", wakeHandler);
    };

    // Listen for user activity to detect wake
    document.addEventListener("mousemove", wakeHandler);
    document.addEventListener("keypress", wakeHandler);
    document.addEventListener("scroll", wakeHandler);
    document.addEventListener("click", wakeHandler);
  }

  setupEventListeners() {
    // Track user interactions
    document.addEventListener("click", (e) => {
      this.logActivity("click", {
        element: e.target.tagName,
        id: e.target.id,
        className: e.target.className,
      });
    });

    // Track page visibility changes
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        this.logActivity("page_hidden");
      } else {
        this.logActivity("page_visible");
      }
    });

    // End session on page unload
    window.addEventListener("beforeunload", () => {
      this.endSession();
    });

    // Track page load
    window.addEventListener("load", () => {
      this.logPageView(window.location.href, document.title);
    });
  }

  saveSessions() {
    try {
      const data = {
        sessions: this.sessions,
        currentSession: this.currentSession,
        lastSaved: new Date().toISOString(),
      };

      localStorage.setItem(this.storageKey, JSON.stringify(data));
    } catch (error) {
      console.error("Error saving activity data:", error);
    }
  }

  loadSessions() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        const data = JSON.parse(saved);
        this.sessions = data.sessions || [];

        // Resume current session if it exists and is recent
        if (data.currentSession) {
          const sessionStart = new Date(data.currentSession.startTime);
          const now = new Date();
          const timeDiff = now - sessionStart;

          // Resume if session is less than 1 hour old
          if (timeDiff < 60 * 60 * 1000) {
            this.currentSession = data.currentSession;
            this.logActivity("session_resumed");
          }
        }
      }
    } catch (error) {
      console.error("Error loading activity data:", error);
    }
  }

  getStats(days = 7) {
    const cutoff = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
    const recentSessions = this.sessions.filter(
      (session) => new Date(session.startTime) > cutoff,
    );

    const totalSessions = recentSessions.length;
    const totalTime = recentSessions.reduce((total, session) => {
      if (session.endTime) {
        const start = new Date(session.startTime);
        const end = new Date(session.endTime);
        return total + (end - start);
      }
      return total;
    }, 0);

    const totalActivities = recentSessions.reduce(
      (total, session) => total + session.activities.length,
      0,
    );

    const totalPageViews = recentSessions.reduce(
      (total, session) => total + session.pageViews.length,
      0,
    );

    return {
      period: `${days} days`,
      totalSessions,
      totalTime: Math.round(totalTime / 1000 / 60), // minutes
      averageSessionTime:
        totalSessions > 0
          ? Math.round(totalTime / totalSessions / 1000 / 60)
          : 0,
      totalActivities,
      totalPageViews,
      activitiesPerSession:
        totalSessions > 0 ? Math.round(totalActivities / totalSessions) : 0,
    };
  }
}

// Usage
const tracker = new ActivityTracker();

// Get activity statistics
setTimeout(() => {
  console.log("Activity Stats:", tracker.getStats());
}, 5000);
```

---

## Self-Assessment Checklist

### setTimeout/setInterval ✅

- [ ] Can use setTimeout to delay function execution
- [ ] Can use setInterval for repeated execution
- [ ] Can cancel timers with clearTimeout/clearInterval
- [ ] Understand timer ID usage and storage
- [ ] Can implement debouncing with setTimeout
- [ ] Understand minimum timer delays in browsers

### localStorage ✅

- [ ] Can store and retrieve simple string values
- [ ] Can use JSON.stringify/parse for complex data
- [ ] Can check for storage availability and handle errors
- [ ] Can use removeItem and clear methods
- [ ] Understand localStorage persistence across sessions
- [ ] Can implement storage quotas and cleanup

### sessionStorage ✅

- [ ] Understand difference between localStorage and sessionStorage
- [ ] Can use sessionStorage for temporary data
- [ ] Know when sessionStorage data is cleared
- [ ] Can choose appropriate storage type for use case

### Advanced Timing Patterns ✅

- [ ] Can implement auto-save functionality
- [ ] Can create countdown timers and stopwatches
- [ ] Can handle timer cleanup to prevent memory leaks
- [ ] Can implement activity tracking with idle detection
- [ ] Can create performance monitoring systems

### Storage Best Practices ✅

- [ ] Can handle storage errors gracefully
- [ ] Can implement data versioning and migration
- [ ] Can create storage abstractions and utilities
- [ ] Can implement cache systems with TTL
- [ ] Understand storage limitations and quotas

### Real-World Applications ✅

- [ ] Can persist form data across sessions
- [ ] Can implement shopping cart functionality
- [ ] Can create notification systems with timing
- [ ] Can build activity tracking systems
- [ ] Can implement auto-save with conflict resolution

**Next Steps:**

- Learn about Web Workers for background processing
- Study IndexedDB for large-scale client-side storage
- Explore Cache API for offline functionality
- Learn about Service Workers for advanced caching strategies
