# Todo APP

A simple RESTful Todo API built with **Node.js**, **Express.js**, and **MongoDB**. It supports basic CRUD operations for managing todos.

## Features

* Create a new todo
* Retrieve all todos
* Update an existing todo
* Delete a todo
* MongoDB integration using Mongoose

## Installation

1. Clone the repository:

```bash
git clone https://github.com/pandeyaakriti/todo-crud.git
```

2. Navigate to the project directory:

```bash
cd backend
```

3. Install dependencies:

```bash
npm install
```

4. Start the MongoDB server.

5. Run the application:

```bash
node server.js
and
index.html, run live on web browser
http://127.0.0.1:5500/index.html
```

The server will start on:

```text
http://localhost:3001
```

## Database

MongoDB runs locally on:

```text
mongodb://127.0.0.1:27017
```

Database name:

```text
to-do
```

## API Endpoints

### Get all todos

```http
GET /todos
```

### Create a todo

```http
POST /todos
```

Request Body:

```json
{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread"
}
```

### Update a todo

```http
PUT /todos/:id
```

Request Body:

```json
{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread, butter"
}
```

### Delete a todo

```http
DELETE /todos/:id
```

## Example Response

```json
{
  "_id": "6890a8c4d8b7c123456789ab",
  "title": "Buy groceries",
  "description": "Milk, eggs, bread"
}
```

## Testing

The API can be tested using:

* Postman
* Thunder Client

Built as assignment for "backend with Node.js" session as part of LSPP'26. 
