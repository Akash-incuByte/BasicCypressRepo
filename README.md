# Cypress Basic Repository Template

This is a skeleton repository that provides a basic setup for Cypress with Cucumber and Page Object Model pattern. It includes Allure reporting integration.

## Features

- Cypress with Cucumber for BDD testing
- Page Object Model implementation
- Allure reporting integration
- Basic example test implementation

## Project Structure

```
cypress/
├── e2e/
│   └── features/        # Feature files
├── pages/              # Page Objects
└── support/
    ├── e2e.js          # Support file
    └── step_definitions/ # Step definitions
```

## Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Running Tests

Run tests with Allure reporting:
```bash
npx cypress run --env allure=true
```

Generate and open Allure report:
```bash
npx allure generate allure-results --clean
npx allure open
```

## Page Object Model

The project follows the Page Object Model pattern for better maintainability:

- Each page has its own class in `cypress/pages/`
- Page objects contain selectors and methods for interacting with the page
- Step definitions use page objects to perform actions

## Example Implementation

The repository includes a basic example showing:
- Feature file with scenarios
- Page object implementation
- Step definitions using page objects
- Test execution with Allure reporting