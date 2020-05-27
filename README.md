# backend

# API and DBMS for Potluck Planner

-- Open a Pull Request and add PL as a reviewer so they can perform a code review & merge with the master

# Project Set-Up

-- Create package.json: npm init -y or yarn init (this repo utilized yarn)

-- Install package manager

-- This project requires the following:
--dependencies - express - knex - cors - pg - sqlite3 - jsonwebtoken - cookie-parser - dotenv - cross-env

--devDependencies - jest - nodemon - supertest

# Unit and Integration Testing

-- Unit tests will be found in the same folder as the component they are testing

-- Integration tests will be found in their own **test** folder

# Routers & Endpoints

/_-----Auth Routes-----_/

-- POST
-Register: /api/events/register
-Login: /api/events/login
-Event: /api/events/create

#### Headers

| name         | type   | required | description        |
| ------------ | ------ | -------- | ------------------ |
| Content-Type | string | yes      | 'application/json' |

#### Register Body

| name       | type   | required | constraints |
| ---------- | ------ | -------- | ----------- |
| First Name | string | yes      | 20          |
| Last Name  | string | yes      | 25          |
| username   | string | yes      | Unique, 13  |
| password   | string | yes      |             |
| email      | string | yes      | Unique      |

#### Login Body

| name     | type   | required | constraints        |
| -------- | ------ | -------- | ------------------ |
| username | string | yes      | Must be registered |
| password | string | yes      |                    |

#### Create Event Body

| name        | type    | required | constraints |
| ----------- | ------- | -------- | ----------- |
| Name        | varChar | yes      |             |
| Description | string  | yes      |             |
| Location    | string  | yes      |             |
| Date/Time   | string  | yes      | dateTime    |

#### Response

#### 200 (OK)

#### 409 (Conflict)

`{ message: 'Username already in use}`

#### 404 (Not Found)

`{ message: 'No user found with that name' }`

#### 428 (Precondition Required)

`{ message: 'Invalid Credentials' }`

#### 500 (Internal Server Error)

`{ message: 'Unable to complete request' }`

/_-----User Routes-----_/

-- GET - Event: api/events - ()ById: .../:id - Users: api/users

#### Headers

| name          | type   | required | description |
| ------------- | ------ | -------- | ----------- |
| Authorization | string | yes      | 'token'     |

-- PUT - Modify Event: api/events/:id - Modify User: api/users/:id

#### Event Body

| name        | type    | required | constraints |
| ----------- | ------- | -------- | ----------- |
| Name        | varChar | yes      |             |
| Description | string  | yes      |             |
| Location    | string  | yes      |             |
| Date/Time   | string  | yes      | dateTime    |

#### User Body

| name       | type   | required | constraints |
| ---------- | ------ | -------- | ----------- |
| First Name | string | yes      | 20          |
| Last Name  | string | yes      | 25          |
| username   | string | yes      | Unique, 13  |
| password   | string | yes      |             |
| email      | string | yes      | Unique      |

#### Response

#### 200 (OK)

#### 401 (Unauthorized)

`{ message: 'Invalid or expired token. Please login' }`

#### 500 (Internal Server Error)

`{ message: 'Unable to complete request' }`
