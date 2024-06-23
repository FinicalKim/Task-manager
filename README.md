##### Task-manager
Full stack app

Setup:

Windows and macOS: Download the installer from the official Node.js website. Follow the installation instructions to install both Node.js and npm.

Linux: Use the package manager of your distribution. For example, on Ubuntu:
sudo apt update
sudo apt install nodejs npm



Windows and macOS: Download the installer from the official MongoDB website. Follow the installation instructions.

Linux: Use the package manager of your distribution. For example, on Ubuntu:

Commands:
    sudo apt update
    sudo apt install -y mongodb
    sudo systemctl start mongodb
    sudo systemctl enable mongodb

    npm install -g create-react-app

- Verify

Commands:
    node -v
    npm -v
    mongo --version

- create a React project

Initialize a New React Project
React is a front-end library for building user interfaces. Create React App is a tool that sets up a new React project with a sensible default configuration.

Commands:
    npx create-react-app task-manager-frontend

- Start the Front-End Development Server

Commands:
    cd task-manager-frontend
    npm start

Set Up a New Node.js Project with Express.js
Express.js is a web application framework for Node.js, designed for building APIs and web applications.

Commands:
    mkdir task-manager-backend
    cd task-manager-backend

    npm init -y
    npm install express mongoose body-parser jsonwebtoken bcryptjs

    node server.js


Folder Structure

In your task-manager-frontend directory, organize your project as follows:

src/
|-- components/
|   |-- Auth/
|   |   |-- Login.js
|   |   |-- Register.js
|   |-- Task/
|   |   |-- TaskList.js
|   |   |-- TaskForm.js
|   |-- Project/
|   |   |-- ProjectList.js
|   |   |-- ProjectForm.js
|-- App.js
|-- index.js




Additional Tools and Applications
Visual Studio Code (VS Code): A powerful and popular code editor with great support for JavaScript and Node.js.

Download and install from Visual Studio Code.
Postman: A tool for testing APIs. It allows you to send HTTP requests and view the responses.

Download and install from Postman.
Git: A version control system to manage your project's source code.

Install from Git.
MongoDB Compass: A GUI for MongoDB that helps in managing your databases.

Download and install from MongoDB Compass.