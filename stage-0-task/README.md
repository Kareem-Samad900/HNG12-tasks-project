# HNG Internship task-0 project

## Project Description

### This project is the first project in the HNG12 2025 internship cohort for the backend track. This project involves the simple development of an api which fetch on get request, the _Email_ used for registration of the HNG12 internship, the _current-date-time_ in ISO 8601 UTC format and the _github-Url_ of the project repository on github.

### The api return a json data that looks like this;

`{"email": "ksbamidele880@gmail.com", "current_dateTime": "2025-01-30T11:32:16Z", "github_url": "https://github.com/Kareem-Samad900/HNG12-internship-tasks" }`

## Setup Instructions

### Packages used includes the following;

- Nodejs
- Express.js
- Dayjs
- Cors

### Instructions

- Start a nodejs project using `npm init -y`
- Navigate to the project directory and create the root file _index.js_
- Install ExpressJS using `npm install express`
- Install nodemon as a dev dependency to restart the app upon changes `npm i nodemon -D`
- Install dayjs library `npm i dayjs`
- Install cors `npm i cors`

### Start the app

- write this command in the git terminal `npm start`

## API DOCUMENTATION

### - Endpoint URL [`http://localhost:5001/`](http://localhost:5001/)

### - Send a GET request to the url above, the response is a JSON data with the email details, current time in ISO 8601 UTC format, and the gihub url of the project repository.

- [Backend Track](https://hng12.slack.com/archives/C088XGSSWVC)
- [Nodejs-developers](https://hng.tech/hire/nodejs-developers)
