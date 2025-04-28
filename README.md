# VTB Banking Project

This project is a NestJS-based application for banking operations. Follow the steps below to set up and run the project.

## Prerequisites

- Ensure you have **Node.js** (version 16 or higher) and **npm** installed on your system.

## Installation

1. Navigate to the root directory of the project.
2. Install dependencies for the `my-packages` folder:
   ```bash
   cd my-packages
   npm install
   ```
3. Install dependencies for the `examples/vtb-banking` folder:
   ```bash
   cd examples/vtb-banking
   npm install
   ```

> **Note:** You do not need to run `npm install` in the root directory.

## Configuration

Before running the application, update the required credentials in the application module. Open the relevant file in the `src` folder and provide the following information:

```javascript
username: 'your_username',
access_code: 'your_access_code',
id_number: 'your_id_number'
```

Replace the placeholder values (`your_username`, `your_access_code`, `your_id_number`) with your actual credentials.

## Running the Application

To start the application in development mode, run the following command inside the `examples/vtb-banking` directory:

```bash
npm run start:dev
```

This will start the application using `ts-node` for live development.

## Scripts

Here are some useful scripts you can use:

- **Build the project**: `npm run build`
- **Run in production**: `npm run start:prod`
- **Run tests**: `npm run test`
- **Run tests with coverage**: `npm run test:cov`

## License

This project is licensed under the **UNLICENSED** license.