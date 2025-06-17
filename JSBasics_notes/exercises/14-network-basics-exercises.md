# Network Basics - Exercises

## Topic: Network Basics

Key concepts: fetch API, promises, .then(), .catch(), JSON, HTTP methods, error handling

---

## Multiple Choice Questions

### Question 1

What does the fetch() function return?

- A) The response data directly
- B) A Promise that resolves to a Response object
- C) A JSON object
- D) An XMLHttpRequest object

**Answer: B**
**Explanation:** fetch() returns a Promise that resolves to a Response object, which you then need to process.

### Question 2

Which method is used to extract JSON data from a fetch response?

- A) response.json()
- B) response.parse()
- C) response.data()
- D) JSON.parse(response)

**Answer: A**
**Explanation:** The response.json() method returns a Promise that resolves to the parsed JSON data.

### Question 3

How do you handle errors in a fetch request?

- A) Use try/catch only
- B) Use .catch() only
- C) Check response.ok and use .catch()
- D) Errors are handled automatically

**Answer: C**
**Explanation:** You should check response.ok for HTTP errors and use .catch() for network errors.

### Question 4

What is the default HTTP method for fetch()?

- A) POST
- B) PUT
- C) GET
- D) DELETE

**Answer: C**
**Explanation:** fetch() uses GET method by default if no method is specified in options.

### Question 5

How do you send JSON data in a POST request?

- A) Pass the object directly to fetch()
- B) Use JSON.stringify() and set Content-Type header
- C) Use FormData
- D) JSON is sent automatically

**Answer: B**
**Explanation:** You need to stringify the object and set the Content-Type header to 'application/json'.

### Question 6

What happens if fetch() encounters a 404 error?

- A) It throws an exception
- B) It goes to .catch()
- C) The Promise resolves normally
- D) It returns null

**Answer: C**
**Explanation:** fetch() only rejects for network errors, not HTTP error status codes like 404.

---

## Practical Exercises

### Exercise 1: Basic GET Request

Create a function to fetch user data from a mock API.

```javascript
async function fetchUser(userId) {
  // TODO: Use fetch to get user data from:
  // https://jsonplaceholder.typicode.com/users/{userId}
  // Handle errors appropriately
  // Return the user object or null if error
}

// Test the function
fetchUser(1).then((user) => {
  console.log("User:", user);
});
```

**Solution:**

```javascript
async function fetchUser(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}
```

### Exercise 2: POST Request with JSON

Create a function to create a new post via API.

```javascript
async function createPost(title, body, userId) {
  // TODO: Send POST request to:
  // https://jsonplaceholder.typicode.com/posts
  // Include proper headers for JSON
  // Return the created post or handle errors
}

// Test the function
createPost("My Title", "This is the post body", 1).then((post) =>
  console.log("Created post:", post),
);
```

**Solution:**

```javascript
async function createPost(title, body, userId) {
  try {
    const postData = {
      title: title,
      body: body,
      userId: userId,
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const createdPost = await response.json();
    return createdPost;
  } catch (error) {
    console.error("Error creating post:", error);
    return null;
  }
}
```

### Exercise 3: Promise Chain Version

Rewrite the fetch user function using .then() and .catch() instead of async/await.

```javascript
function fetchUserWithPromises(userId) {
  // TODO: Use .then() and .catch() to:
  // 1. Fetch user data
  // 2. Check if response is ok
  // 3. Parse JSON
  // 4. Handle errors
  // Return a Promise
}

// Test both versions
fetchUserWithPromises(2)
  .then((user) => console.log("User (promises):", user))
  .catch((error) => console.error("Error:", error));
```

**Solution:**

```javascript
function fetchUserWithPromises(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching user:", error);
      return null;
    });
}
```

### Exercise 4: Multiple Concurrent Requests

Fetch multiple users simultaneously using Promise.all().

```javascript
async function fetchMultipleUsers(userIds) {
  // TODO: Use Promise.all to fetch multiple users concurrently
  // Handle the case where some requests might fail
  // Return array of user objects (null for failed requests)
}

// Test the function
fetchMultipleUsers([1, 2, 3, 999]).then((users) => {
  console.log("Multiple users:", users);
});
```

**Solution:**

```javascript
async function fetchMultipleUsers(userIds) {
  try {
    const promises = userIds.map(async (userId) => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.error(`Error fetching user ${userId}:`, error);
        return null;
      }
    });

    const users = await Promise.all(promises);
    return users;
  } catch (error) {
    console.error("Error in fetchMultipleUsers:", error);
    return [];
  }
}
```

### Exercise 5: API Client Class

Create a reusable API client class.

```javascript
class ApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.defaultHeaders = {
      "Content-Type": "application/json",
    };
  }

  // TODO: Implement methods:
  // - get(endpoint)
  // - post(endpoint, data)
  // - put(endpoint, data)
  // - delete(endpoint)
  // - setAuthToken(token)
}

// Test the API client
const api = new ApiClient("https://jsonplaceholder.typicode.com");
api.get("/users/1").then((user) => console.log("API Client user:", user));
```

**Solution:**

```javascript
class ApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.defaultHeaders = {
      "Content-Type": "application/json",
    };
  }

  async get(endpoint) {
    return this.request(endpoint, { method: "GET" });
  }

  async post(endpoint, data) {
    return this.request(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async put(endpoint, data) {
    return this.request(endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  }

  async delete(endpoint) {
    return this.request(endpoint, { method: "DELETE" });
  }

  setAuthToken(token) {
    this.defaultHeaders["Authorization"] = `Bearer ${token}`;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const config = {
      headers: { ...this.defaultHeaders },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Handle empty responses
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        return await response.json();
      } else {
        return await response.text();
      }
    } catch (error) {
      console.error(
        `API request failed: ${options.method || "GET"} ${url}`,
        error,
      );
      throw error;
    }
  }
}
```

### Exercise 6: Loading States and Error Handling

Create a function that manages loading states during API calls.

```javascript
function createApiHandler() {
  let isLoading = false;
  let lastError = null;

  return {
    // TODO: Implement methods:
    // - executeRequest(requestFn) - executes API request with loading states
    // - getLoadingState() - returns current loading state
    // - getLastError() - returns last error
    // - clearError() - clears last error
  };
}

// Test the API handler
const apiHandler = createApiHandler();

async function testApiHandler() {
  console.log("Loading:", apiHandler.getLoadingState()); // false

  await apiHandler.executeRequest(() => fetchUser(1));

  console.log("Loading:", apiHandler.getLoadingState()); // false
  console.log("Error:", apiHandler.getLastError()); // null or error
}
```

**Solution:**

```javascript
function createApiHandler() {
  let isLoading = false;
  let lastError = null;

  return {
    async executeRequest(requestFn) {
      isLoading = true;
      lastError = null;

      try {
        const result = await requestFn();
        isLoading = false;
        return result;
      } catch (error) {
        isLoading = false;
        lastError = error;
        throw error;
      }
    },

    getLoadingState() {
      return isLoading;
    },

    getLastError() {
      return lastError;
    },

    clearError() {
      lastError = null;
    },
  };
}
```

---

## JavaScript Test Functions

```javascript
// Test functions for Network Basics exercises
function testNetworkBasics() {
  console.log("🧪 Testing Network Basics...\n");

  // Test fetch availability
  function testFetchAvailability() {
    const hasFetch = typeof fetch !== "undefined";
    console.log(`fetch API available: ${hasFetch ? "✅ PASS" : "❌ FAIL"}`);
  }

  // Test Promise handling
  function testPromiseHandling() {
    const promise = new Promise((resolve) => {
      setTimeout(() => resolve("test"), 100);
    });

    promise
      .then((result) => {
        console.log(
          `Promise handling: ${result === "test" ? "✅ PASS" : "❌ FAIL"}`,
        );
      })
      .catch(() => {
        console.log("Promise handling: ❌ FAIL");
      });
  }

  // Test JSON methods
  function testJSONMethods() {
    const obj = { name: "test", value: 123 };
    const jsonString = JSON.stringify(obj);
    const parsed = JSON.parse(jsonString);

    const stringifyTest = typeof jsonString === "string";
    const parseTest = parsed.name === "test" && parsed.value === 123;

    console.log(`JSON.stringify: ${stringifyTest ? "✅ PASS" : "❌ FAIL"}`);
    console.log(`JSON.parse: ${parseTest ? "✅ PASS" : "❌ FAIL"}`);
  }

  // Test async/await
  function testAsyncAwait() {
    async function asyncTest() {
      const result = await Promise.resolve("async works");
      return result;
    }

    asyncTest()
      .then((result) => {
        console.log(
          `async/await: ${result === "async works" ? "✅ PASS" : "❌ FAIL"}`,
        );
      })
      .catch(() => {
        console.log("async/await: ❌ FAIL");
      });
  }

  // Test error handling
  function testErrorHandling() {
    async function errorTest() {
      try {
        await Promise.reject(new Error("test error"));
        return false;
      } catch (error) {
        return error.message === "test error";
      }
    }

    errorTest().then((result) => {
      console.log(`Error handling: ${result ? "✅ PASS" : "❌ FAIL"}`);
    });
  }

  // Test Promise.all
  function testPromiseAll() {
    const promises = [
      Promise.resolve(1),
      Promise.resolve(2),
      Promise.resolve(3),
    ];

    Promise.all(promises)
      .then((results) => {
        const allTest =
          results.length === 3 &&
          results[0] === 1 &&
          results[1] === 2 &&
          results[2] === 3;
        console.log(`Promise.all: ${allTest ? "✅ PASS" : "❌ FAIL"}`);
      })
      .catch(() => {
        console.log("Promise.all: ❌ FAIL");
      });
  }

  testFetchAvailability();
  testPromiseHandling();
  testJSONMethods();
  testAsyncAwait();
  testErrorHandling();
  testPromiseAll();

  console.log("\n✨ Network Basics tests completed!");
}

// Mock fetch for testing (if fetch is not available)
if (typeof fetch === "undefined") {
  global.fetch = function (url, options = {}) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ok: true,
          status: 200,
          json: () =>
            Promise.resolve({
              id: 1,
              name: "Mock User",
              url: url,
              method: options.method || "GET",
            }),
        });
      }, 100);
    });
  };
}

// Run the tests
testNetworkBasics();
```

---

## Challenge Problems

### Challenge 1: Retry Mechanism

Create a robust fetch function with automatic retry logic.

```javascript
async function fetchWithRetry(url, options = {}, maxRetries = 3, delay = 1000) {
  // TODO: Implement fetch with retry logic:
  // 1. Retry on network errors (not HTTP errors like 404)
  // 2. Use exponential backoff for delays
  // 3. Only retry on specific HTTP status codes (500, 502, 503, 504)
  // 4. Return final result or throw after all retries exhausted

  let lastError;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      // Your implementation here
    } catch (error) {
      lastError = error;

      if (attempt === maxRetries) {
        throw lastError;
      }

      // Calculate delay with exponential backoff
      const waitTime = delay * Math.pow(2, attempt);
      await new Promise((resolve) => setTimeout(resolve, waitTime));
    }
  }
}

// Test the retry mechanism
fetchWithRetry("https://httpstat.us/500", {}, 2, 500)
  .then((response) => console.log("Success:", response))
  .catch((error) => console.log("Failed after retries:", error.message));
```

**Solution:**

```javascript
async function fetchWithRetry(url, options = {}, maxRetries = 3, delay = 1000) {
  const retryableStatusCodes = [500, 502, 503, 504];
  let lastError;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, options);

      // If response is ok, return it
      if (response.ok) {
        return response;
      }

      // Check if status code is retryable
      if (retryableStatusCodes.includes(response.status)) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      } else {
        // Non-retryable HTTP error, throw immediately
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      lastError = error;

      // If this is the last attempt, throw the error
      if (attempt === maxRetries) {
        throw lastError;
      }

      // Only retry on network errors or retryable HTTP errors
      const isNetworkError = !error.message.startsWith("HTTP");
      const isRetryableHttpError = retryableStatusCodes.some((code) =>
        error.message.includes(`HTTP ${code}`),
      );

      if (!isNetworkError && !isRetryableHttpError) {
        throw lastError;
      }

      // Calculate delay with exponential backoff and jitter
      const waitTime = delay * Math.pow(2, attempt) + Math.random() * 1000;
      console.log(
        `Attempt ${attempt + 1} failed, retrying in ${Math.round(
          waitTime,
        )}ms...`,
      );
      await new Promise((resolve) => setTimeout(resolve, waitTime));
    }
  }
}
```

### Challenge 2: Request Queue Manager

Create a system to manage API request queuing and rate limiting.

```javascript
class RequestQueue {
  constructor(maxConcurrent = 3, rateLimit = 10, rateLimitWindow = 60000) {
    this.maxConcurrent = maxConcurrent;
    this.rateLimit = rateLimit;
    this.rateLimitWindow = rateLimitWindow;

    this.queue = [];
    this.activeRequests = 0;
    this.requestCounts = [];
  }

  async add(requestFn, priority = 1) {
    // TODO: Add request to queue with priority handling
    // Return a Promise that resolves when request completes
  }

  processQueue() {
    // TODO: Process queued requests respecting concurrency and rate limits
  }

  canMakeRequest() {
    // TODO: Check if request can be made based on rate limits
  }

  updateRequestCount() {
    // TODO: Track request counts for rate limiting
  }
}

// Test the request queue
const queue = new RequestQueue(2, 5, 10000); // 2 concurrent, 5 per 10 seconds

// Add multiple requests
for (let i = 1; i <= 10; i++) {
  queue
    .add(
      () => fetch(`https://jsonplaceholder.typicode.com/users/${i}`),
      i <= 3 ? 2 : 1, // Higher priority for first 3
    )
    .then((response) => {
      console.log(`Request ${i} completed:`, response.status);
    });
}
```

**Solution:**

```javascript
class RequestQueue {
  constructor(maxConcurrent = 3, rateLimit = 10, rateLimitWindow = 60000) {
    this.maxConcurrent = maxConcurrent;
    this.rateLimit = rateLimit;
    this.rateLimitWindow = rateLimitWindow;

    this.queue = [];
    this.activeRequests = 0;
    this.requestCounts = [];

    // Start processing queue
    this.processQueue();
  }

  async add(requestFn, priority = 1) {
    return new Promise((resolve, reject) => {
      this.queue.push({
        requestFn,
        priority,
        resolve,
        reject,
        timestamp: Date.now(),
      });

      // Sort queue by priority (higher priority first)
      this.queue.sort((a, b) => b.priority - a.priority);

      this.processQueue();
    });
  }

  async processQueue() {
    // Process queue every 100ms
    setTimeout(() => this.processQueue(), 100);

    if (
      this.queue.length === 0 ||
      this.activeRequests >= this.maxConcurrent ||
      !this.canMakeRequest()
    ) {
      return;
    }

    const request = this.queue.shift();
    this.activeRequests++;
    this.updateRequestCount();

    try {
      const result = await request.requestFn();
      request.resolve(result);
    } catch (error) {
      request.reject(error);
    } finally {
      this.activeRequests--;
    }
  }

  canMakeRequest() {
    const now = Date.now();
    const windowStart = now - this.rateLimitWindow;

    // Count requests in current window
    const recentRequests = this.requestCounts.filter(
      (timestamp) => timestamp > windowStart,
    );

    return recentRequests.length < this.rateLimit;
  }

  updateRequestCount() {
    const now = Date.now();
    this.requestCounts.push(now);

    // Clean old request counts
    const windowStart = now - this.rateLimitWindow;
    this.requestCounts = this.requestCounts.filter(
      (timestamp) => timestamp > windowStart,
    );
  }

  getStats() {
    return {
      queueLength: this.queue.length,
      activeRequests: this.activeRequests,
      recentRequestCount: this.requestCounts.length,
    };
  }
}
```

### Challenge 3: Offline-First Data Manager

Create a system that works offline and syncs when online.

```javascript
class OfflineDataManager {
  constructor(apiEndpoint) {
    this.apiEndpoint = apiEndpoint;
    this.cache = new Map();
    this.pendingOperations = [];
    this.isOnline = navigator.onLine;

    this.setupEventListeners();
    this.loadFromStorage();
  }

  // Get data (try cache first, then API)
  async get(id) {
    // TODO: Implement offline-first get
    // 1. Check cache first
    // 2. If not in cache and online, fetch from API
    // 3. Cache the result
    // 4. Return data or null
  }

  // Save data (cache immediately, sync when online)
  async save(id, data) {
    // TODO: Implement offline-first save
    // 1. Save to cache immediately
    // 2. Add to pending operations
    // 3. If online, try to sync immediately
    // 4. Return success/failure
  }

  // Delete data
  async delete(id) {
    // TODO: Implement offline-first delete
  }

  // Sync pending operations with server
  async sync() {
    // TODO: Sync all pending operations
    // Process in order, handle conflicts
  }

  setupEventListeners() {
    window.addEventListener("online", () => {
      this.isOnline = true;
      this.sync();
    });

    window.addEventListener("offline", () => {
      this.isOnline = false;
    });
  }

  loadFromStorage() {
    // TODO: Load cache and pending operations from localStorage
  }

  saveToStorage() {
    // TODO: Save cache and pending operations to localStorage
  }
}

// Usage example
const dataManager = new OfflineDataManager("https://api.example.com/data");

// Works offline and online
dataManager.save("user1", { name: "John", email: "john@example.com" });
dataManager.get("user1").then((data) => console.log("User data:", data));
```

**Solution:**

```javascript
class OfflineDataManager {
  constructor(apiEndpoint) {
    this.apiEndpoint = apiEndpoint;
    this.cache = new Map();
    this.pendingOperations = [];
    this.isOnline = navigator.onLine;

    this.setupEventListeners();
    this.loadFromStorage();
  }

  async get(id) {
    // Check cache first
    if (this.cache.has(id)) {
      console.log(`📦 Cache hit for ${id}`);
      return this.cache.get(id);
    }

    // If online, try to fetch from API
    if (this.isOnline) {
      try {
        const response = await fetch(`${this.apiEndpoint}/${id}`);
        if (response.ok) {
          const data = await response.json();
          this.cache.set(id, data);
          this.saveToStorage();
          console.log(`🌐 Fetched ${id} from API`);
          return data;
        }
      } catch (error) {
        console.error(`Failed to fetch ${id} from API:`, error);
      }
    }

    console.log(`❌ No data found for ${id}`);
    return null;
  }

  async save(id, data) {
    // Save to cache immediately
    this.cache.set(id, data);

    // Add to pending operations
    this.pendingOperations.push({
      type: "save",
      id,
      data,
      timestamp: Date.now(),
    });

    this.saveToStorage();
    console.log(`💾 Saved ${id} to cache`);

    // If online, try to sync immediately
    if (this.isOnline) {
      await this.syncOperation({ type: "save", id, data });
    }

    return true;
  }

  async delete(id) {
    // Remove from cache
    this.cache.delete(id);

    // Add to pending operations
    this.pendingOperations.push({
      type: "delete",
      id,
      timestamp: Date.now(),
    });

    this.saveToStorage();
    console.log(`🗑️ Deleted ${id} from cache`);

    // If online, try to sync immediately
    if (this.isOnline) {
      await this.syncOperation({ type: "delete", id });
    }

    return true;
  }

  async sync() {
    if (!this.isOnline || this.pendingOperations.length === 0) {
      return;
    }

    console.log(`🔄 Syncing ${this.pendingOperations.length} operations...`);

    const operations = [...this.pendingOperations];
    const successfulOperations = [];

    for (const operation of operations) {
      try {
        await this.syncOperation(operation);
        successfulOperations.push(operation);
      } catch (error) {
        console.error(`Failed to sync operation:`, error);
        break; // Stop on first failure to maintain order
      }
    }

    // Remove successful operations
    this.pendingOperations = this.pendingOperations.filter(
      (op) => !successfulOperations.includes(op),
    );

    this.saveToStorage();
    console.log(`✅ Synced ${successfulOperations.length} operations`);
  }

  async syncOperation(operation) {
    switch (operation.type) {
      case "save":
        const response = await fetch(`${this.apiEndpoint}/${operation.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(operation.data),
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        break;

      case "delete":
        const deleteResponse = await fetch(
          `${this.apiEndpoint}/${operation.id}`,
          {
            method: "DELETE",
          },
        );
        if (!deleteResponse.ok)
          throw new Error(`HTTP ${deleteResponse.status}`);
        break;
    }
  }

  setupEventListeners() {
    window.addEventListener("online", () => {
      console.log("📶 Back online");
      this.isOnline = true;
      this.sync();
    });

    window.addEventListener("offline", () => {
      console.log("📵 Gone offline");
      this.isOnline = false;
    });
  }

  loadFromStorage() {
    try {
      const cacheData = localStorage.getItem("offlineCache");
      if (cacheData) {
        const entries = JSON.parse(cacheData);
        this.cache = new Map(entries);
      }

      const pendingData = localStorage.getItem("pendingOperations");
      if (pendingData) {
        this.pendingOperations = JSON.parse(pendingData);
      }
    } catch (error) {
      console.error("Error loading from storage:", error);
    }
  }

  saveToStorage() {
    try {
      localStorage.setItem("offlineCache", JSON.stringify([...this.cache]));
      localStorage.setItem(
        "pendingOperations",
        JSON.stringify(this.pendingOperations),
      );
    } catch (error) {
      console.error("Error saving to storage:", error);
    }
  }

  getStats() {
    return {
      cacheSize: this.cache.size,
      pendingOperations: this.pendingOperations.length,
      isOnline: this.isOnline,
    };
  }
}
```

---

## Debugging Exercises

### Debug 1: Promise Chain Issues

```javascript
// Fix the promise chain problems
function fetchUserData(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json()) // Missing error check
    .then((user) => {
      return fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`,
      )
        .then((response) => response.json())
        .then((posts) => {
          return { user, posts }; // This nested then is problematic
        });
    })
    .catch((error) => {
      console.log("Error:", error);
      // Missing return statement
    });
}
```

**Fixed Version:**

```javascript
function fetchUserData(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((user) => {
      return fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`,
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((posts) => ({ user, posts }));
    })
    .catch((error) => {
      console.error("Error:", error);
      return null; // Return null on error
    });
}
```

### Debug 2: Async/Await Issues

```javascript
// Fix the async/await problems
async function processUsers() {
  const userIds = [1, 2, 3, 4, 5];
  const users = [];

  // Problem: Sequential instead of parallel processing
  for (let id of userIds) {
    const user = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    ).then((response) => response.json()); // Missing error handling
    users.push(user);
  }

  return users;
}

async function saveUserData(userData) {
  // Problem: Not handling errors properly
  const response = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify(userData), // Missing headers
  });

  return response.json(); // Missing response.ok check
}
```

**Fixed Version:**

```javascript
async function processUsers() {
  const userIds = [1, 2, 3, 4, 5];

  try {
    // Process in parallel using Promise.all
    const userPromises = userIds.map(async (id) => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch user ${id}: ${response.status}`);
      }
      return await response.json();
    });

    const users = await Promise.all(userPromises);
    return users;
  } catch (error) {
    console.error("Error processing users:", error);
    return [];
  }
}

async function saveUserData(userData) {
  try {
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error saving user data:", error);
    throw error; // Re-throw to allow caller to handle
  }
}
```

---

## Real-World Applications

### Application 1: Search with Autocomplete

Implement a search system with debouncing and caching.

```javascript
class SearchManager {
  constructor(apiEndpoint, debounceDelay = 300) {
    this.apiEndpoint = apiEndpoint;
    this.debounceDelay = debounceDelay;
    this.cache = new Map();
    this.abortController = null;
    this.debounceTimer = null;
  }

  async search(query) {
    // Cancel previous request
    if (this.abortController) {
      this.abortController.abort();
    }

    // Clear previous debounce timer
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }

    return new Promise((resolve, reject) => {
      this.debounceTimer = setTimeout(async () => {
        try {
          const results = await this.performSearch(query);
          resolve(results);
        } catch (error) {
          reject(error);
        }
      }, this.debounceDelay);
    });
  }

  async performSearch(query) {
    // Check cache first
    const cacheKey = query.toLowerCase().trim();
    if (this.cache.has(cacheKey)) {
      console.log("📦 Cache hit for:", query);
      return this.cache.get(cacheKey);
    }

    // Create new abort controller for this request
    this.abortController = new AbortController();

    try {
      const response = await fetch(
        `${this.apiEndpoint}?q=${encodeURIComponent(query)}`,
        {
          signal: this.abortController.signal,
        },
      );

      if (!response.ok) {
        throw new Error(`Search failed: ${response.status}`);
      }

      const results = await response.json();

      // Cache results
      this.cache.set(cacheKey, results);

      // Limit cache size
      if (this.cache.size > 100) {
        const firstKey = this.cache.keys().next().value;
        this.cache.delete(firstKey);
      }

      console.log("🔍 Search results for:", query);
      return results;
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("🚫 Search cancelled");
        return null;
      }
      throw error;
    }
  }

  clearCache() {
    this.cache.clear();
  }

  getCacheStats() {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys()),
    };
  }
}

// Usage example
// const searchManager = new SearchManager('https://api.example.com/search');
//
// // Setup search input handler
// const searchInput = document.getElementById('search');
// searchInput.addEventListener('input', async (e) => {
//     const query = e.target.value;
//     if (query.length > 2) {
//         try {
//             const results = await searchManager.search(query);
//             if (results) {
//                 displaySearchResults(results);
//             }
//         } catch (error) {
//             console.error('Search error:', error);
//         }
//     }
// });
```

### Application 2: Real-time Data Dashboard

Create a dashboard that fetches and displays real-time data.

```javascript
class DataDashboard {
  constructor(config) {
    this.endpoints = config.endpoints;
    this.refreshInterval = config.refreshInterval || 30000;
    this.data = new Map();
    this.isActive = true;
    this.refreshTimer = null;
    this.observers = [];

    this.startAutoRefresh();
  }

  // Subscribe to data updates
  subscribe(callback) {
    this.observers.push(callback);
    return () => {
      this.observers = this.observers.filter((obs) => obs !== callback);
    };
  }

  // Notify all observers of data updates
  notifyObservers(dataType, data) {
    this.observers.forEach((callback) => {
      try {
        callback(dataType, data);
      } catch (error) {
        console.error("Observer error:", error);
      }
    });
  }

  async fetchData(endpoint) {
    try {
      const response = await fetch(endpoint.url, {
        method: endpoint.method || "GET",
        headers: endpoint.headers || {},
        signal: AbortSignal.timeout(10000), // 10 second timeout
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      const processedData = endpoint.transform
        ? endpoint.transform(data)
        : data;

      // Store data
      this.data.set(endpoint.name, {
        data: processedData,
        timestamp: new Date().toISOString(),
        status: "success",
      });

      // Notify observers
      this.notifyObservers(endpoint.name, processedData);

      return processedData;
    } catch (error) {
      console.error(`Failed to fetch ${endpoint.name}:`, error);

      // Store error state
      this.data.set(endpoint.name, {
        data: null,
        timestamp: new Date().toISOString(),
        status: "error",
        error: error.message,
      });

      // Notify observers of error
      this.notifyObservers(endpoint.name, null);

      return null;
    }
  }

  async fetchAllData() {
    console.log("🔄 Refreshing dashboard data...");

    const promises = this.endpoints.map((endpoint) => this.fetchData(endpoint));

    try {
      await Promise.allSettled(promises);
      console.log("✅ Dashboard data refreshed");
    } catch (error) {
      console.error("Dashboard refresh error:", error);
    }
  }

  startAutoRefresh() {
    // Initial fetch
    this.fetchAllData();

    // Setup recurring refresh
    this.refreshTimer = setInterval(() => {
      if (this.isActive && !document.hidden) {
        this.fetchAllData();
      }
    }, this.refreshInterval);

    // Pause when page is hidden
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        console.log("⏸️ Dashboard paused (page hidden)");
      } else {
        console.log("▶️ Dashboard resumed");
        this.fetchAllData(); // Immediate refresh when page becomes visible
      }
    });
  }

  stopAutoRefresh() {
    this.isActive = false;
    if (this.refreshTimer) {
      clearInterval(this.refreshTimer);
      this.refreshTimer = null;
    }
  }

  getData(endpointName) {
    return this.data.get(endpointName);
  }

  getAllData() {
    const result = {};
    this.data.forEach((value, key) => {
      result[key] = value;
    });
    return result;
  }

  getStatus() {
    const stats = {
      total: this.endpoints.length,
      success: 0,
      error: 0,
      lastUpdate: null,
    };

    let latestTimestamp = 0;

    this.data.forEach((item) => {
      if (item.status === "success") {
        stats.success++;
      } else if (item.status === "error") {
        stats.error++;
      }

      const timestamp = new Date(item.timestamp).getTime();
      if (timestamp > latestTimestamp) {
        latestTimestamp = timestamp;
        stats.lastUpdate = item.timestamp;
      }
    });

    return stats;
  }
}

// Usage example
const dashboardConfig = {
  refreshInterval: 15000, // 15 seconds
  endpoints: [
    {
      name: "users",
      url: "https://jsonplaceholder.typicode.com/users",
      transform: (data) => ({
        count: data.length,
        users: data.slice(0, 5), // Only show first 5
      }),
    },
    {
      name: "posts",
      url: "https://jsonplaceholder.typicode.com/posts",
      transform: (data) => ({
        count: data.length,
        recent: data.slice(0, 10),
      }),
    },
  ],
};

const dashboard = new DataDashboard(dashboardConfig);

// Subscribe to updates
const unsubscribe = dashboard.subscribe((dataType, data) => {
  console.log(`📊 ${dataType} updated:`, data);
  // Update UI here
});

// Get current status
setTimeout(() => {
  console.log("Dashboard status:", dashboard.getStatus());
}, 5000);
```

---

## Self-Assessment Checklist

### Fetch API ✅

- [ ] Can make GET requests with fetch()
- [ ] Can make POST requests with proper headers and body
- [ ] Can handle different HTTP methods (PUT, DELETE, PATCH)
- [ ] Can work with different content types (JSON, FormData, text)
- [ ] Can handle file uploads with fetch()
- [ ] Can set custom headers and handle authentication

### Promise Handling ✅

- [ ] Can use .then() and .catch() for promise chains
- [ ] Can use async/await syntax properly
- [ ] Can handle promise rejection and errors
- [ ] Can use Promise.all() for concurrent requests
- [ ] Can use Promise.allSettled() for handling mixed results
- [ ] Can create and return promises from functions

### Error Handling ✅

- [ ] Can distinguish between network errors and HTTP errors
- [ ] Can check response.ok and handle HTTP status codes
- [ ] Can implement proper try/catch with async/await
- [ ] Can handle timeouts and aborted requests
- [ ] Can implement retry logic for failed requests
- [ ] Can provide meaningful error messages to users

### JSON Handling ✅

- [ ] Can use JSON.stringify() and JSON.parse() correctly
- [ ] Can handle JSON parsing errors
- [ ] Can work with nested JSON structures
- [ ] Can validate JSON data structure
- [ ] Can transform JSON data for different use cases

### Advanced Patterns ✅

- [ ] Can implement request caching
- [ ] Can implement request debouncing
- [ ] Can handle request cancellation with AbortController
- [ ] Can implement offline-first patterns
- [ ] Can manage request queues and rate limiting
- [ ] Can implement real-time data updates

### Real-World Applications ✅

- [ ] Can build search functionality with autocomplete
- [ ] Can create data dashboards with auto-refresh
- [ ] Can implement form submission with validation
- [ ] Can handle file uploads with progress tracking
- [ ] Can build offline-capable applications
- [ ] Can integrate with REST APIs and handle authentication

**Next Steps:**

- Learn about GraphQL for more efficient data fetching
- Study WebSockets for real-time bidirectional communication
- Explore Service Workers for advanced offline capabilities
- Learn about authentication patterns (JWT, OAuth)
- Study API design principles and RESTful patterns
