# Network Basics

> **Topic**: Network Basics  
> **Concepts Covered**: `fetch`, promises, `.then()`, `.catch()`, `JSON`

## Introduction to Network Requests

Modern web applications need to communicate with servers to get data, send updates, and interact with APIs. JavaScript's `fetch` API is the modern way to make HTTP requests.

## Understanding fetch()

`fetch()` is a built-in JavaScript function that makes HTTP requests and returns a Promise.

### Basic fetch Syntax

```javascript
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

### Simple GET Request

```javascript
// Fetch data from an API
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    console.log("Status:", response.status); // 200
    console.log("OK:", response.ok); // true
    return response.json();
  })
  .then((data) => {
    console.log("Post title:", data.title);
    console.log("Post body:", data.body);
  })
  .catch((error) => {
    console.error("Failed to fetch post:", error);
  });
```

## Understanding Promises

Promises represent the eventual completion (or failure) of an asynchronous operation.

### Promise States

- **Pending**: Initial state, neither fulfilled nor rejected
- **Fulfilled**: Operation completed successfully
- **Rejected**: Operation failed

### Basic Promise Example

```javascript
// Creating a promise
const myPromise = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5;

  setTimeout(() => {
    if (success) {
      resolve("Operation successful!");
    } else {
      reject("Operation failed!");
    }
  }, 1000);
});

// Using the promise
myPromise
  .then((result) => {
    console.log(result); // "Operation successful!"
  })
  .catch((error) => {
    console.error(error); // "Operation failed!"
  });
```

## Working with JSON

JSON (JavaScript Object Notation) is the standard format for data exchange between web applications.

### Converting Between JavaScript and JSON

```javascript
// JavaScript object
const user = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
};

// Convert to JSON string
const jsonString = JSON.stringify(user);
console.log(jsonString); // '{"name":"Alice","age":30,"email":"alice@example.com"}'

// Convert from JSON string
const parsedUser = JSON.parse(jsonString);
console.log(parsedUser.name); // "Alice"
```

### Handling JSON in fetch

```javascript
// The response.json() method parses JSON automatically
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json()) // This returns a Promise
  .then((users) => {
    users.forEach((user) => {
      console.log(`${user.name} - ${user.email}`);
    });
  })
  .catch((error) => {
    console.error("Error fetching users:", error);
  });
```

## Different Types of HTTP Requests

### GET Request (Default)

```javascript
// GET is the default method
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    console.log(`Fetched ${posts.length} posts`);
  });
```

### POST Request (Create Data)

```javascript
const newPost = {
  title: "My New Post",
  body: "This is the content of my post",
  userId: 1,
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newPost),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Post created:", data);
  })
  .catch((error) => {
    console.error("Error creating post:", error);
  });
```

### PUT Request (Update Data)

```javascript
const updatedPost = {
  id: 1,
  title: "Updated Post Title",
  body: "Updated post content",
  userId: 1,
};

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updatedPost),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Post updated:", data);
  });
```

### DELETE Request

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
}).then((response) => {
  if (response.ok) {
    console.log("Post deleted successfully");
  } else {
    console.log("Failed to delete post");
  }
});
```

## Error Handling

Proper error handling is crucial for network requests.

### Checking Response Status

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/999")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Fetch error:", error.message);
  });
```

### Comprehensive Error Handling

```javascript
async function fetchWithErrorHandling(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error.name === "TypeError") {
      console.error("Network error:", error.message);
    } else {
      console.error("Request failed:", error.message);
    }
    throw error; // Re-throw so calling code can handle it
  }
}

// Usage
fetchWithErrorHandling("https://jsonplaceholder.typicode.com/posts/1")
  .then((post) => {
    console.log("Post fetched successfully:", post.title);
  })
  .catch((error) => {
    console.log("Could not load post");
  });
```

## Practical Examples

### User Management System

```javascript
class UserManager {
  constructor(apiBase = "https://jsonplaceholder.typicode.com") {
    this.apiBase = apiBase;
  }

  // Get all users
  async getUsers() {
    try {
      const response = await fetch(`${this.apiBase}/users`);
      if (!response.ok) throw new Error("Failed to fetch users");
      return await response.json();
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  }

  // Get single user
  async getUser(id) {
    try {
      const response = await fetch(`${this.apiBase}/users/${id}`);
      if (!response.ok) throw new Error(`User ${id} not found`);
      return await response.json();
    } catch (error) {
      console.error("Error fetching user:", error);
      return null;
    }
  }

  // Create new user
  async createUser(userData) {
    try {
      const response = await fetch(`${this.apiBase}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) throw new Error("Failed to create user");
      return await response.json();
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }

  // Update user
  async updateUser(id, userData) {
    try {
      const response = await fetch(`${this.apiBase}/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) throw new Error("Failed to update user");
      return await response.json();
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  }

  // Delete user
  async deleteUser(id) {
    try {
      const response = await fetch(`${this.apiBase}/users/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete user");
      return true;
    } catch (error) {
      console.error("Error deleting user:", error);
      return false;
    }
  }
}

// Usage
const userManager = new UserManager();

// Display users
async function displayUsers() {
  const userList = document.querySelector("#user-list");
  userList.innerHTML = "<p>Loading users...</p>";

  try {
    const users = await userManager.getUsers();

    if (users.length === 0) {
      userList.innerHTML = "<p>No users found</p>";
      return;
    }

    userList.innerHTML = users
      .map(
        (user) => `
      <div class="user-card">
        <h3>${user.name}</h3>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <button onclick="editUser(${user.id})">Edit</button>
        <button onclick="deleteUser(${user.id})">Delete</button>
      </div>
    `,
      )
      .join("");
  } catch (error) {
    userList.innerHTML = "<p>Error loading users</p>";
  }
}
```

### Search with Debouncing

```javascript
class SearchManager {
  constructor(searchUrl, delay = 300) {
    this.searchUrl = searchUrl;
    this.delay = delay;
    this.searchTimeout = null;
    this.currentRequest = null;
  }

  setupSearch(inputSelector, resultsSelector) {
    const input = document.querySelector(inputSelector);
    const results = document.querySelector(resultsSelector);

    input.addEventListener("input", (e) => {
      const query = e.target.value.trim();

      // Clear previous timeout
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }

      // Cancel previous request
      if (this.currentRequest) {
        this.currentRequest.abort();
      }

      if (query.length < 2) {
        results.innerHTML = "";
        return;
      }

      // Debounce the search
      this.searchTimeout = setTimeout(() => {
        this.performSearch(query, results);
      }, this.delay);
    });
  }

  async performSearch(query, resultsElement) {
    resultsElement.innerHTML = "<p>Searching...</p>";

    try {
      // Create AbortController for request cancellation
      const controller = new AbortController();
      this.currentRequest = controller;

      const response = await fetch(
        `${this.searchUrl}?q=${encodeURIComponent(query)}`,
        {
          signal: controller.signal,
        },
      );

      if (!response.ok) {
        throw new Error("Search failed");
      }

      const data = await response.json();
      this.displayResults(data, resultsElement);
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Search request cancelled");
      } else {
        console.error("Search error:", error);
        resultsElement.innerHTML = "<p>Search failed. Please try again.</p>";
      }
    } finally {
      this.currentRequest = null;
    }
  }

  displayResults(data, resultsElement) {
    if (data.length === 0) {
      resultsElement.innerHTML = "<p>No results found</p>";
      return;
    }

    resultsElement.innerHTML = data
      .map(
        (item) => `
      <div class="search-result">
        <h4>${item.title}</h4>
        <p>${item.description}</p>
      </div>
    `,
      )
      .join("");
  }
}

// Initialize search
const searchManager = new SearchManager("/api/search");
searchManager.setupSearch("#search-input", "#search-results");
```

### Loading States and Progress

```javascript
class DataLoader {
  constructor() {
    this.loadingStates = new Map();
  }

  showLoading(elementId, message = "Loading...") {
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = `
        <div class="loading">
          <div class="spinner"></div>
          <p>${message}</p>
        </div>
      `;
    }
    this.loadingStates.set(elementId, true);
  }

  hideLoading(elementId) {
    this.loadingStates.set(elementId, false);
  }

  isLoading(elementId) {
    return this.loadingStates.get(elementId) || false;
  }

  async loadData(url, elementId, processor = null) {
    if (this.isLoading(elementId)) {
      console.log("Already loading data for", elementId);
      return;
    }

    this.showLoading(elementId);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      const processedData = processor ? processor(data) : data;

      this.displayData(processedData, elementId);
    } catch (error) {
      this.displayError(error.message, elementId);
    } finally {
      this.hideLoading(elementId);
    }
  }

  displayData(data, elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      // This would be customized based on your data structure
      element.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    }
  }

  displayError(message, elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = `
        <div class="error">
          <p>Error: ${message}</p>
          <button onclick="retryLoad('${elementId}')">Retry</button>
        </div>
      `;
    }
  }
}

// Usage
const loader = new DataLoader();

function loadPosts() {
  loader.loadData(
    "https://jsonplaceholder.typicode.com/posts",
    "posts-container",
    (posts) => posts.slice(0, 5), // Process: only show first 5 posts
  );
}
```

## async/await (Modern Approach)

While not in the basic syllabus, it's worth mentioning that `async/await` provides a cleaner way to work with Promises:

```javascript
// Using Promises with .then()
function fetchUserPosts(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then((response) => response.json())
    .then((posts) => {
      console.log(`User ${userId} has ${posts.length} posts`);
      return posts;
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
}

// Using async/await (cleaner, but more advanced)
async function fetchUserPostsAsync(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/posts`,
    );
    const posts = await response.json();
    console.log(`User ${userId} has ${posts.length} posts`);
    return posts;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
```

## Best Practices

1. **Always handle errors**: Use `.catch()` or try-catch
2. **Check response status**: `response.ok` or `response.status`
3. **Set appropriate headers**: Especially `Content-Type` for POST/PUT
4. **Handle loading states**: Show users when requests are in progress
5. **Implement timeouts**: Don't let requests hang forever
6. **Cancel requests when needed**: Use AbortController

### Security Considerations

```javascript
// ❌ Don't expose sensitive data
const apiKey = "secret-key"; // This is visible to users!

// ✅ Use environment variables or server-side proxy
fetch("/api/data") // Let your server handle the API key
  .then((response) => response.json());

// ❌ Don't trust user input
const userId = prompt("Enter user ID");
fetch(`/api/users/${userId}`); // Vulnerable to injection

// ✅ Validate and sanitize input
const userId = parseInt(prompt("Enter user ID"));
if (isNaN(userId) || userId < 1) {
  throw new Error("Invalid user ID");
}
fetch(`/api/users/${userId}`);
```

## Common Pitfalls

1. **Not checking response.ok**: 404 errors don't automatically throw
2. **Forgetting to return promises**: In `.then()` chains
3. **Not handling network errors**: fetch only rejects on network failures
4. **CORS issues**: Cross-origin requests need proper headers
5. **Memory leaks**: Not canceling requests in single-page apps

## Key Takeaways

- **fetch()**: Modern way to make HTTP requests
- **Promises**: Handle asynchronous operations with `.then()` and `.catch()`
- **JSON**: Standard format for data exchange
- **Error handling**: Always check response status and handle errors
- **HTTP methods**: GET, POST, PUT, DELETE for different operations
- **Loading states**: Improve user experience with progress indicators

## Practice Exercises

1. Build a weather app that fetches data from a weather API
2. Create a todo app that saves data to a mock API
3. Make a user directory with search functionality
4. Build a simple blog with CRUD operations
5. Create a real-time chat application (using polling)
