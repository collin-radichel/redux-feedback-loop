# React Feedback Loop

_Duration: 2-day weekend challenge_

## Description

A full-stack application that asks a user to enter daily feedback about their experience in class that day.  Input validation requires the user to enter a value for each page in the form before continuing, with the exception of the comments page, which does not require an input.  The user is given a chance to review their feedback before they submit.  When the user submits and clicks 'save' their feedback is stored in a database.

## Screenshots

![feedback-landing-page](https://user-images.githubusercontent.com/73554031/112504273-9ff26200-8d59-11eb-9ac4-a62017f3288a.png)
![review-feedback](https://user-images.githubusercontent.com/73554031/112504308-a7197000-8d59-11eb-99d8-5bcaacee0e3d.png)
![modal-confirm-feedback](https://user-images.githubusercontent.com/73554031/112504355-b26c9b80-8d59-11eb-804e-58511e182ea1.png)

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
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped me with the skills to make this application.

Special thanks to my instructor: [Dane Smith]()

## Questions? I would love to connect!
Email me at - [radichel.collin@gmail.com](mailto:radichel.collin@gmail.com)
OR
Send me a message on [LinkedIn](https://www.linkedin.com/in/collin-radichel/)
