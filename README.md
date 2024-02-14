# WhatsApp ChatGPT React

WhatsApp ChatGPT React is a chat application built using React, Node.js, and MongoDB. It allows users to chat in real-time and authenticate via Google OAuth.

## Installation

1. **Node.js**: Ensure you have Node.js installed on your system. If not, download and install it from the official website: Node.js.

2. **Client Dependencies**:
   - Navigate to the `client` folder in your project.
   - Install the following dependencies:
     ```bash
     npm install @react-oauth/google
     npm install @mui/material @emotion/react @emotion/styled
     npm install jwt-decode
     npm install @mui/icons-material
     npm install axios
     ```

3. **Server Dependencies**:
   - Navigate to the `server` folder in your project.
   - Install the following dependencies:
     ```bash
     npm install express
     npm install mongoose
     npm install mongodb@2.2.12
     npm install dotenv
     npm install cors
     npm install body-parser
     npm install socket.io-client
     ```

## Configuration

1. **Google Authentication**:
   - In the `client/src/App.js` file, configure Google authentication. Replace placeholders with your actual Google OAuth credentials.

2. **MongoDB**:
   - Update the `.env` file in the `server` folder with your MongoDB connection string.

## Making Changes

1. **Google Authentication**:
   - To modify Google authentication settings, edit the `App.js` file in the `client` folder.

2. **MongoDB**:
   - Adjust the MongoDB connection details in the `.env` file.

3. **Message Controller**:
   - In the `message-controller.js` file, update the user ID when changing the email.

## Usage
cd into client folder and start client using npm start 
cd into Server and start Server using nodemon start
cd in Socket and Start Socket using nodemon start
