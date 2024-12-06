# React Router Dom v6 Nested Route Issue

This repository demonstrates a bug encountered when using nested routes with a wildcard path parameter (`*`) in React Router Dom v6.

The issue arises when attempting to nest routes under a parent route that uses `*` in its path. Child routes within this parent route fail to match correctly, preventing nested components from rendering.

The `bug.js` file reproduces the problem, while the `bugSolution.js` file demonstrates the solution.

## Bug Reproduction

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Observe that nested routes under `/contact` do not work as expected. 

## Solution

The solution involves restructuring the routes to avoid the wildcard path parameter in the parent route. This ensures correct matching of nested routes. Refer to `bugSolution.js` for the corrected code.
