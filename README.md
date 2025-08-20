FASTAPI Automation Framework (Playwright + TypeScript/JS)

This repository contains an API automation framework built using Playwright Test.
It validates the FASTAPI Swagger APIs (/login, /signup, /books CRUD) with both positive & negative test cases.

Features

1 API Test automation using Playwright Test Runner

2 Covers Login, Signup, Books (CRUD) APIs

3 Includes positive & negative test cases

4 Modular design with utility classes (GETAPI, POSTAPI, PUTAPI, DELETEAPI)

5 Dynamic test data (dataSet.js)

6 Supports token-based authentication

7 Test data reusability

8 Works with baseURL configuration in playwright.config.ts


 Tech Stack

1 Playwright – Test runner & HTTP client

2 Node.js – Runtime

3 Ajv – JSON schema validation

 Project Structure
.
├── tests/
│   └── sanity.spec.js       # Main API test suite
├── utilities/
│   ├── GETAPI.js
│   ├── POSTAPI.js
│   ├── PUTAPI.js
│   └── DELETEAPI.js
├── dataSet.js               # Centralized test data
├── playwright.config.ts     # Playwright configuration
├── package.json
└── README.md

Setup Instructions
1️ Install Dependencies
npm install

2️ Install Playwright Browsers
npx playwright install

3️ Run All Tests
npx playwright test

4️ Run Specific Test File
npx playwright test tests/sanity.spec.js

5️ Run Test by Title
npx playwright test -g "Validate PUT Book API"

 
Reports
HTML Report

After execution:

npx playwright show-report