# Blogify

## Overview
Blogify is a full-stack web application designed for creating and managing blog posts. It features a React-based client-side interface and an Express.js server-side API.

## Client

### Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: For state management.
- **Axios**: For making HTTP requests.
- **Tailwind CSS**: For styling.
- **Chart.js & Recharts**: For data visualization.
- **Firebase**: For authentication.

### Scripts
- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run lint`: Run ESLint for code quality checks.
- `npm run preview`: Preview the production build.

## Server

### Technologies Used
- **Express.js**: A web framework for Node.js.
- **Mongoose**: For MongoDB object modeling.
- **JWT**: For authentication.
- **Bcrypt**: For password hashing.
- **Multer**: For handling file uploads.

### Scripts
- `npm start`: Start the server.

## Installation

### Prerequisites
- Node.js
- npm

### Setup
1. Clone the repository.
2. Navigate to the `client` and `server` directories and run `npm install` to install dependencies.
3. Create a `.env` file in the `server` directory for environment variables.

## Usage
1. Start the server by running `npm start` in the `server` directory.
2. Start the client by running `npm run dev` in the `client` directory.
3. Access the application in your web browser.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the ISC License. 

## Author
    Zeeshan Ali [https://www.linkedin.com/in/zeeshanalico]

## Database Configuration

### Setting Up MongoDB
1. **Local Setup**: Install MongoDB on your local machine by following the [official MongoDB installation guide](https://docs.mongodb.com/manual/installation/).
2. **Cloud Setup**: Alternatively, you can use a cloud-based MongoDB service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) to create a free-tier cluster.

### Configuring the Application
1. Create a `.env` file in the `server` directory if it doesn't exist.
2. Add the following line to the `.env` file, replacing `<your_connection_string>` with your MongoDB connection string:
   ```
   MONGODB_URI=<your_connection_string>
   ```
3. Ensure that your MongoDB instance is running and accessible from your application.

With these steps, your application should be able to connect to the MongoDB database successfully.