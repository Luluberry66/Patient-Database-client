# COMP-4537 Lab 5 - Patient Database

This project is a simple web application that allows users to interact with a patient database through a web interface. It demonstrates the use of client-side JavaScript to communicate with a server-side API for database operations.

## Features

* Insert sample patient data into the database
* Execute SQL queries (SELECT and INSERT) on the patient database
* Display query results in a formatted table
* Simple and intuitive user interface

## Project Structure

```
COMP-4537-Lab5/
│
├── index.html
├── app.js
├── style.css
│
├── lang/
│   └── en/
│       └── en.js
│
└── README.md
```

- `index.html`: The main HTML file that structures the web page
- `app.js`: Contains the client-side JavaScript logic
- `style.css`: Defines the styles for the web page
- `lang/en/en.js`: Contains user-facing strings for internationalization

## Setup and Installation

1. Clone this repository to your local machine or download the source code.
2. Ensure you have a web server set up to serve these files. You can use tools like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for Visual Studio Code or Python's `http.server` for development purposes.
3. Make sure the server-side API is running and accessible. Update the `apiBaseUrl` in `app.js` if necessary.

## Usage

1. Open `index.html` in a web browser.
2. Click the "Insert Sample Data" button to populate the database with initial patient records.
3. Enter SQL queries in the text area:
   - Use SELECT queries to retrieve data (e.g., `SELECT * FROM patients`)
   - Use INSERT queries to add new records (e.g., `INSERT INTO patients (name, dateOfBirth) VALUES ('John Doe', '1990-01-01')`)
4. Click the "Execute Query" button to run the SQL query.
5. View the results displayed in the table below the query input.

## API Endpoints

This client interacts with the following API endpoints:

* `POST /api/db/add`: Inserts sample data into the database
* `GET /api/db/{query}`: Executes a SELECT query
* `POST /api/db/insert`: Executes an INSERT query

Note: The actual base URL for these endpoints should be set in the `apiBaseUrl` variable in `app.js`.

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* Fetch API for AJAX requests

## Contributing

This project is part of a lab assignment and is not open for external contributions. However, feedback and suggestions are welcome.

## Acknowledgments

- This project was created as part of the COMP-4537 Internet Software Architecture course.
- Thanks to [Your Name] and [Your Partner's Name] for collaborating on this lab assignment.