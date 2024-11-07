## Backend

- The backend refers to the server-side of a web application, where the core functionality of the application is implemented.
- It is responsible for processing client requests, managing databases, performing business logic, and ensuring that the appropriate data and services are delivered to the frontend.

### Client-Server Model

- The client-server model is a foundational concept in network architecture, where the communication between two parties is established through a client and a server.

- In this model, the client is typically a web browser or application that initiates requests for specific resources or services.

- The server, on the other hand, is a powerful computer or set of computers that processes these requests and sends back the appropriate responses, such as data, webpages, or files.

## Node.js

- NodeJS is an open-source, cross-platform runtime environment that allows you to run JavaScript code outside of a web browser.

- It is built on the V8 JavaScript engine developed by Google and is known for its non-blocking, event-driven architecture.

- Asynchronous I/O: Allows NodeJS to handle multiple operations simultaneously without waiting for one to complete before starting the next.

- Event-driven Architecture: Uses events and callbacks to handle asynchronous operations efficiently.

- Single-threaded with Multi-core Support: Operates on a single thread but can utilize multiple CPU cores for handling multiple tasks through the event loop.

### Modules in Node.js:

- Modules are reusable blocks of code that encapsulate specific functionality and can be imported and used in other parts of an application. NodeJS supports two primary types of modules:

- CommonJS (CJS): The traditional module system in NodeJS that uses synchronous require() calls to import modules and module.exports to export them.

- ES Modules (ESM): The modern standard for modules that uses asynchronous import and export statements. ES Modules can be used with .mjs file extension or by setting "type": "module" in package.json.

#### Some Modules of NodeJS Used Commonly in Development:

### Express:

- Purpose: A minimal and flexible web framework that provides a robust set of features for building web and mobile applications.

- The express module allows you to create a web server and handle various HTTP requests like GET and POST.

- Installation: Run npm install express to add it to your project.

```const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

### Lodash:

- Purpose: A utility library that provides helpful functions for working with arrays, objects, and other data types.

- Lodash provides utility functions that simplify common programming tasks, such as manipulating arrays and objects.

Installation: Run npm install lodash to add it to your project.

```const _ = require('lodash');
const array = [1, 2, 3];

console.log(_.reverse(array)); // Output: [3, 2, 1]
```

### Async:

- Purpose: A utility module for managing asynchronous operations and flows, such as series and parallel executions.

- The async module helps manage multiple asynchronous operations, ensuring tasks are completed in a specified order.

Installation: Run npm install async to add it to your project.

```const async = require('async');

async.series([
 function(callback) {
   setTimeout(() => callback(null, 'Result 1'), 1000);
 },
 function(callback) {
   setTimeout(() => callback(null, 'Result 2'), 500);
 }
], (err, results) => {
 if (err) {
   console.error(err);
 } else {
   console.log(results); // Output: ['Result 1', 'Result 2']
 }
});
```
