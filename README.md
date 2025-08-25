📌 FASTAPI Automation Framework (Playwright + TypeScript/JavaScript)

This repository contains an API test automation framework built on top of Playwright Test Runner to validate a sample FASTAPI application (Swagger-based APIs).

The framework automates and validates the following API endpoints:

/login – Authentication endpoint

/signup – User registration

/books – Full CRUD operations (Create, Read, Update, Delete)

Both positive and negative test scenarios are covered to ensure reliability, stability, and robustness of the APIs.

🚀 Features

API Test Automation using Playwright – Leverages Playwright Test runner with built-in support for parallel execution and rich reporting.

API Coverage – Includes Login, Signup, and Books CRUD endpoints.

Positive & Negative Flows – Ensures APIs behave as expected in both valid and invalid scenarios.

Modular Utilities – Reusable wrapper classes for GET, POST, PUT, DELETE requests.

Dynamic Test Data – dataSet.js contains all test data and payloads for reusability.

Authentication Support – Token-based authentication is handled dynamically.

Base URL Management – Configurable via playwright.config.ts.

Maintainability – Separation of concerns between test cases, utilities, and data providers.

Scalability – Easy to extend for additional APIs or services.

CI/CD Friendly – Can be plugged into Jenkins, GitHub Actions, or any CI pipeline.

🛠 Tech Stack

Playwright → Test runner & HTTP client

Node.js → JavaScript runtime

TypeScript → For strong typing and better maintainability (optional support in config)

FASTAPI (Swagger) → Target application under test

📂 Project Structure
.
├── tests/
│   └── sanity.spec.js       # Main API test suite
├── utilities/
│   ├── GETAPI.js            # GET request wrapper
│   ├── POSTAPI.js           # POST request wrapper
│   ├── PUTAPI.js            # PUT request wrapper
│   └── DELETEAPI.js         # DELETE request wrapper
├── dataSet.js               # Centralized test data (payloads, tokens, etc.)
├── playwright.config.ts     # Playwright configuration (baseURL, retries, reporter)
├── package.json             # Dependencies & scripts
└── README.md                # Project documentation

⚙️ Setup Instructions
1️⃣ Install Dependencies
npm install

2️⃣ Install Playwright Browsers (required for Playwright Test)
npx playwright install

3️⃣ Run All Tests
npx playwright test

4️⃣ Run a Specific Test File
npx playwright test tests/sanity.spec.js

5️⃣ Run Test by Title (Pattern Matching)
npx playwright test -g "Validate PUT Book API"

📊 Reports
HTML Report

After test execution, view the report with:

npx playwright show-report


The report includes:

Test status (passed/failed/skipped)

API request & response logs

Execution time & retries

Rich filtering & search options
