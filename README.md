# Help Center Card Management
This project is a Help Center Card Management application built with the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to create, search, and display help center cards with details such as title, description


## Features
Create a Card: Users can add new help center cards.

View All Cards: Users can view a list of all available cards.

Search for a Specific Card: Users can search for a specific card by title.


## Technologies Used

Frontend:

React.js

Tailwind CSS

Axios for HTTP requests


Backend:

Node.js

Express.js

MongoDB (with Mongoose ODM)

CORS middleware

## Installation
### Prerequisites

Node.js installed on your local machine

MongoDB installed or a MongoDB Atlas account




## Clone the repository:

git clone https://github.com/Susmithajob/Help_Center.git

cd fullstack-assignment




## Install dependencies:

### Install backend dependencies

cd backend

npm install


### Install frontend dependencies

cd ../frontend/help_center

npm install

## Set up environment variables:

Create a .env file in the backend directory and add your MongoDB connection string and port:

CONNECTION_STRING=your-mongodb-connection-string

PORT=5000


## Start the backend server

cd backend

nodemon server

## Start the frontend React app

cd ../frontend

npm start

The application should now be running at http://localhost:3000.

## Screenshots

#### Home Page

![homepage](https://github.com/user-attachments/assets/7725c04f-b436-4aa2-ad89-a5055942a7d3)

#### Adding Card

![Addcard](https://github.com/user-attachments/assets/23588898-2b53-4530-a669-c03fe9cd2fab)

#### Searching Card

![Search](https://github.com/user-attachments/assets/04898e0c-e59e-4acb-bb77-7a8d4f8916d4)

