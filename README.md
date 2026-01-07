# TP CI/CD

A Node.js application providing a simple greeting service with a REST API. It includes a server built with Express, greeting logic, and comprehensive test
suites (unit, integration, and end-to-end).

## Features

- **Greeting Functionality**: Generates personalized greetings via `src/greeting.js`.
- **REST API Server**: Built with Express in `src/server.js`, supporting GET and POST endpoints for greetings.
- **Testing**: Full test coverage with Jest:
  - Unit tests in `tests/unit/greeting.test.js`.
  - Integration tests in `tests/integration/app.test.js`.
  - End-to-end tests in `tests/e2e/e2e.test.js`.
- **Allure Reporting**: Beautiful HTML test reports with Allure.
- **Linting**: Configured with ESLint (via `.eslintrc.js` and `.eslintignore`).
- **Node.js Version Management**: Uses `.nvmrc` to specify Node.js v22.19.0.

## Prerequisites

- Node.js ≥22.19.0 (use `.nvmrc` with nvm: `nvm use`).
- npm (included with Node.js).
- Java (required for Allure report generation).

## Installation

1. Fork the repository:
2. Install dependencies:

```
npm install
```

## Usage

Start the server:

```
npm start
```

The server runs on port 3000 (or `process.env.PORT`). Endpoints:

- `GET /hello/:name?`: Returns a greeting (e.g., "Hello world!" or "Hello world! From [name]").
- `POST /hello`: Expects `x-name` header for the name.

## Testing

Run tests with Jest:

- All tests: `npm test`
- Unit tests: `npm test -- tests/unit/`
- Integration tests: `npm test -- tests/integration/`
- E2E tests: `npm test -- tests/e2e/`

### Allure Reporting

To generate Allure reports:

1. Run tests with Allure reporter:
```
npm run test:allure
```

2. Generate the report:
```
npm run allure:generate
```

3. Open the report in browser:
```
npm run allure:open
```

4. Clean Allure files:
```
npm run allure:clean
```

## CI/CD Pipeline

The pipeline automatically:
1. Runs tests with Allure reporter
2. Generates Allure report
3. Uploads report as artifact
4. Runs linting

To download the Allure report from a workflow run:
1. Go to the Actions tab in GitHub
2. Select the workflow run
3. Download the `allure-report` artifact
4. Extract and open `index.html` in a browser

## Linting

Check code quality:

```
npm run lint
```

## Project Structure

- `src/greeting.js`: Core greeting logic.
- `src/server.js`: Express server setup.
- `tests/`: Test suites (unit, integration, e2e).
- `.eslintrc.js`: ESLint configuration.
- `.eslintignore`: Files/directories excluded from linting.
- `.nvmrc`: Node.js version specification.
- `package.json`: Project metadata, dependencies, and scripts.
- `jest.allure.config.js`: Allure-specific Jest configuration.

## Dependencies

- **Runtime**: Express (web server), Axios (HTTP client), Supertest (testing utility).
- **Dev**: ESLint (linting), Jest (testing), Allure (reporting).

## Contributing

1. Fork the repo.
2. Create a feature branch.
3. Run tests and linting.
4. Submit a pull request.
