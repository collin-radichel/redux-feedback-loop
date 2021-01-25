# React Feedback Loop

## Description

A full-stack application that asks a user to enter daily feedback about their experience in class that day.  Input validation requires the user to enter a value for each page in the form before continuing, with the exception of the comments page, which does not require an input.  The user is given a chance to review their feedback before they submit.  When the user submits and clicks 'save' their feedback is stored in a database.

## Features to be added

Admin page to view/edit/delete feedback stored in database

## Installation

1. Create a SQL database with the name `prime_feedback`
2. The queries in the `data.sql` file are set up to create all the necessary tables. The INSERT statement will populate the table with data. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. I recommend using Postico to run those queries as that was used to create the queries.
3. Open up your IDE of choice and run `npm install` in the terminal
4. Run `npm run server`
5. Run `npm run client`
## Built With

 React, Redux, Node.js, PostgreSQL and PG, Express, Redux-logger

## Acknowledgement
Thank you to [Prime Digital Academy](www.primeacademy.io) for teaching me the skills required to write this application.
