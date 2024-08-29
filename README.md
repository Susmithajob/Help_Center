# Help Center Card Management
This project is a Help Center Card Management application built with the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to create, search, and display help center cards with details such as title, description, and link.


# Features
Create a Card: Users can add new help center cards.
View All Cards: Users can view a list of all available cards.
Search for a Specific Card: Users can search for a specific card by title.

# Technologies Used

Frontend:

React.js
Tailwind CSS
Axios for HTTP requests

Backend:

Node.js
Express.js
MongoDB (with Mongoose ODM)
CORS middleware

# Installation
Prerequisites
Node.js installed on your local machine
MongoDB installed or a MongoDB Atlas account


# Steps

# Clone the repository:
git clone https://github.com/Susmithajob/Help_Center.git
cd help-center-card-management
Install dependencies:

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
Set up environment variables:

# Create a .env file in the backend directory and add your MongoDB connection string and port:

CONNECTION_STRING=your-mongodb-connection-string
PORT=5000


# Start the backend server
cd backend
nodemon server

# Start the frontend React app
cd ../frontend
npm start
The application should now be running at http://localhost:3000.
