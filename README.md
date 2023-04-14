# SalesTracker

SalesTracker is a web application for reporting and managing sales of products for customers. It allows you to:

- generate a sales report for a selected month and year or based on a specified date range
- filter the sales report by customers
- summarize the sales (total quantity / total amount) for the currently set filters
- display a pie chart showing the share of sales of individual products in relation to the total - sales for the selected reporting period
- manage the list of products (name and unit price)
- add new products
- add and edit orders from customers

The application was created as a test task.

## Technologies and libraries

The application was written in Vue 3, a progressive framework for creating user interfaces with reactive components. The application uses the following technologies and libraries:

- primeVue - a rich set of UI components for Vue 3
- Vuex - the official library for managing the state of Vue applications
- vue-router - the official library for managing navigation and paths in Vue applications
- axios - a popular library for making HTTP requests from the browser or Node.js
- json-server - a tool for simulating a database and REST API from a JSON file

## Installation and running

To run the application locally, follow these steps:

1. Clone the GitHub repository: `git clone https://github.com/Bonus1337/SalesTracker.git`
2. Go to the project folder: `cd SalesTracker`
3. Install dependencies: `npm install`
4. Install json-server: npm install -g json-server
5. Run json-server: `json-server --watch data.json`. Json-server will run on port 3000 and provide an API at `http://localhost:3000`.
6. Run the application: `npm run serve`. The application will run on port 8080 and be available at `http://localhost:8080`.
7. Open your browser and enter the address: `http://localhost:8080`.
8. To stop the application, press Ctrl+C in the terminal where you ran it.
9. To stop json-server, press Ctrl+C in the terminal where you ran it.

## Bugs and improvements

The application has the following bugs or limitations:

- It does not have an API in Node.js or a database made using MongoDB, everything works on json-server. This was a requirement of the test task to focus on the frontend part of the application.
- It does not have unit or integration tests. This was caused by lack of time and experience in writing tests for Vue 3.

I plan to solve these problems and improve the application in the future. My plans for the future are:

- Add an API in Node.js and a MongoDB database to increase reliability and scalability of the application.

- Add unit and integration tests to ensure quality and security of code.

- Add other features or improvements such as pagination, sorting, searching, data validation, user authorization etc.

## License, authors and sources

The project is licensed under MIT license. This means that you can freely use, copy, modify and distribute it provided that you keep information about authors and license

The author of this project is Bonus1337. If you want to contact me or thank me for my project, you can write to me at discord `Bonus#2048`
