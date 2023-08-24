
## 0x06. Unittests in JS - UnitTests
====================================

# Project Overview
This project aims to introduce and explore unit testing concepts in JavaScript, particularly focusing on backend development using technologies like ES6, Node.js, and Express.js. The project utilizes the Mocha testing framework along with various assertion libraries such as Node's built-in assert, Chai, and Sinon.

# Author
Johann Kerbrat
Engineering Manager at Uber Works

# Project Details
Weight: 1
Project Start: Aug 23, 2023, 6:00 AM
Project End: Aug 25, 2023, 6:00 AM
Checker Release: Aug 23, 2023, 6:00 PM
Auto Review Deadline: Aug 25, 2023, 6:00 AM
## Resources
Mocha documentation
Chai
Sinon
Express
Request
How to Test NodeJS Apps using Mocha, Chai, and SinonJS
needing external resources:

How to use Mocha to create a test suite
Working with different assertion libraries such as Node's built-in assert or Chai
Effective ways to organize and present long test suites
Proper usage of spies to track function calls
Proper usage of stubs to control function behavior
Understanding hooks and when to use them
Unit testing with asynchronous functions
Writing integration tests using a small Node.js server
## Requirements
All code will be executed on Ubuntu 18.04 using Node 12.x.x
Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
All files should end with a new line
A `README.md` file is mandatory at the root of the project directory
Your code should use the .js extension
Running `npm run test *.test.js` should pass all tests without warnings or errors
Tasks
0. Basic test with Mocha and Node assertion library
Install Mocha using npm
Set up npm scripts to run Mocha tests
Implement a function calculateNumber(a, b) that rounds a and b, then returns their sum
Write test cases for the calculateNumber function
- 1. Combining descriptions
Upgrade the calculateNumber function to accept a type argument (SUM, SUBTRACT, DIVIDE)
Implement behavior for each type: SUM, SUBTRACT, DIVIDE
Write test cases for the updated calculateNumber function
- 2. Basic test using Chai assertion library
Create a copy of the calculateNumber functions and test cases using Chai's expect
- 3. Spies
Install Sinon using npm
Create a module Utils with a calculateNumber property (same function)
Create a function sendPaymentRequestToApi that uses Utils.calculateNumber
Use Sinon's spies to verify function calls
- 4. Stubs
Use Sinon's stubs to control behavior of Utils.calculateNumber
Verify that the stub is being called and console output is correct
- 5. Hooks
Implement a beforeEach and afterEach hook to verify console output in sendPaymentRequestToApi tests
- 6. Async tests with done
Implement and test a function getPaymentTokenFromAPI(success) that returns a promise based on success parameter
- 7. Skip
Use the skip function to skip failing tests temporarily
- 8. Basic Integration testing
Create an Express.js server
Implement a route that responds with "Welcome to the payment system" at GET /
Write integration tests for the index page
- 9. Regex integration testing
Modify the server to include a new endpoint /cart/:id
Add a new test suite to test the /cart/:id endpoint with different inputs
- 10. Deep equality & Post integration testing
Modify the server to include /available_payments and /login endpoints
Write integration tests for the new endpoints using deep equality and POST request
Running the Tests
Run the test suites using `npm test [test-file-name]`
License
This project is licensed under the ISC License.